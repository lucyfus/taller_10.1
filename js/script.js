// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li"); // Crea un nuevo elemento 'li' para la lista
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}
// "DOMContentLoaded" evento que se dispara cuando el documento HTML ha sido completamente cargado, 
// La función anónima (e) => {...} se ejecuta cuando ocurre el evento "DOMContentLoaded"
document.addEventListener("DOMContentLoaded", (e) => {
  // Filtrar los elementos de tipo 'string'
  // filter() es un método que recorre el array y crea uno nuevo con los elementos que cumplen la condición dada.
  // Si el tipo del elemento es "string", se incluye en el nuevo array, llamado 'filteredArray'.
  const filteredArray = strangeArray.filter((element) => typeof element === 'string');
  
  // Ordenar los elementos alfabéticamente
  //sort() es un método de JavaScript que ordena los elementos de un array.
  const sortedArray = filteredArray.sort();

  // Mostrar el array filtrado y ordenado en la página
  showList(sortedArray);
});

strangeArray.filter((element) => typeof element === 'string')

filteredArray.sort();