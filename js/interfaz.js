class Interfaz{
    constructor(){
        this.construirSelect();
    }
    construirSelect(){
        cotizador.obtenerMonedasAPI().then(data => {
            //Crear un select con las opciones 
            const arreglo = data.data.data;
            const select = document.getElementById('criptomoneda');
            // Construir el SELECT
            arreglo.forEach(moneda => {
                const option = document.createElement('option');
                option.value = moneda.symbol;
                option.appendChild(document.createTextNode(moneda.name));
                select.appendChild(option);
            })
        })
    }
    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        document.querySelector('div .mensajes').appendChild(div);
        setTimeout(()=>{
            div.remove();
        },3000)
    }
    mostrarResultado(data, moneda,criptoMoneda){
        const valor = data[criptoMoneda].quote[moneda].price;
        const ultimahora = data[criptoMoneda].quote[moneda].percent_change_1h;
        const ultimodia = data[criptoMoneda].quote[moneda].percent_change_24h;
        const hora = new Date(data[criptoMoneda].quote[moneda].last_updated);
        const horaActualizada = `${hora.getHours()}: ${hora.getMinutes()}`;
        // Construir el template
        let template = `
        <div class="card cyan darken-3"> 
        <div class="card-content white-text">
            <span class="card-title">Resultado</span>
            <p>El precio de ${data[criptoMoneda].name} en ${moneda} es de: ${valor}</p>
            <p>Ultima hora: ${ultimahora}</p>
            <p>Ultima día: ${ultimodia}</p>
            <p>Ultima actualizacion: ${horaActualizada}</p>
        </div>
        </div>
        `;
        document.getElementById('resultado').innerHTML =template;
    }
}