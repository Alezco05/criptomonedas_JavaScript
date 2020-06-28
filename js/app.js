// Instanciar ambas clases
const cotizador = new Cotizador();
const ui = new Interfaz();

// obtener el formulario

const formulario = document.getElementById("formulario");
//Event Listener cuando se envia el formaulrio

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Leer la moneda seleccionada;
  const monedaSelect = document.getElementById("moneda");
  const monedaSeleccionada =
    monedaSelect.options[monedaSelect.selectedIndex].value;

  // Leer las criptomoneda

  const criptMonedaSelect = document.getElementById("criptomoneda");
  // const criptMonedaSeleccionada = criptMonedaSelect.options[criptMonedaSelect.selectedIndex].textContent;
  const criptMonedaSeleccionada =
    criptMonedaSelect.options[criptMonedaSelect.selectedIndex].value;
  if (criptMonedaSeleccionada === "" || criptMonedaSeleccionada === "")
    ui.mostrarMensaje(
      "Ambos campos son obligatorios",
      "deep-orange darken-4 card-panel"
    );
  else {
     cotizador.obtenerValores(monedaSeleccionada,criptMonedaSeleccionada)
     .then(data => ui.mostrarResultado(data.data.data, monedaSeleccionada,criptMonedaSeleccionada))
  }
});
