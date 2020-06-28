class Cotizador {
    constructor(){
        this.miInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CMC_PRO_API_KEY': '00899111-b7df-49fb-8b3a-b8a35083a48c',
            },
            mode: 'cors',
            cache: 'default',
        };        
        
    }
    // Obtiene todo el JSON con las criptomonedas
    async obtenerMonedasAPI() {
            const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1000";
            const urlobtenerMonedas = await fetch(url, this.miInit)
            const data = await urlobtenerMonedas.json();
            return {data};
        }
    async obtenerValores(moneda,criptoMoneda){
        const urlValores = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${criptoMoneda}&convert=${moneda}`;
        const urlobtenerMonedas = await fetch(urlValores, this.miInit)
        const data = await urlobtenerMonedas.json();
        return {data};
    } 
}
