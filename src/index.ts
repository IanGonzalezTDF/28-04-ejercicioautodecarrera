rotulo1.innerHTML = "Ingrese la vuelta 1: ";
rotulo2.innerHTML = "Ingrese la vuelta 2: ";
rotulo3.innerHTML = "Ingrese la vuelta 3: ";
rotulo4.innerHTML = "Ingrese la vuelta 4: ";

let boton = document.getElementById("calcular");

boton.addEventListener("click", () => {
  //TU CODIGO VA AQUI, POR EJEMPLO:
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);

  let tiempototal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;

  console.log("Tiempo total:", tiempototal);
  console.log("Promedio:", (vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4);
  //
});
