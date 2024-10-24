/*Imagina que trabajas en un restaurante y se realizó una encuesta de satisfacción con los clientes. Las respuestas de la encuesta se registran como números enteros entre 1 y 10, donde:

1 significa "muy insatisfecho"
10 significa "muy satisfecho"
Las respuestas ya estan cargadas en el siguiente array, respuestas: [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10]

Debes procesar las respuestas de la encuesta para obtener las siguientes métricas:

1. El promedio de satisfacción.
2. Cuántos clientes dieron una calificación mayor o igual a 7 (considerados satisfechos).
3. Cuántos clientes dieron una calificación menor o igual a 4 (considerados insatisfechos).
4. El porcentaje de clientes que están satisfechos e insatisfechos.
5. La calificación que se repitió más veces (moda). */

// 1. Promedio de satisfacción.
const respuestas = [
  8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10,
];
const media = promedio(respuestas);
function promedio(respuestas) {
  const total = respuestas.reduce((suma, numero) => suma + numero);
  return total / respuestas.length;
}

document.write("<h2> PROYECTO: GRADO SATISFACCION CLIENTES</H2>");
document.write(`El promedio es: ${media} <br>`);

// 2. Cuantos clientes >= 7 (considerados satisfechos).
let satisfechos = 0;
for (let i = 0; i < respuestas.length; i++) {
  if (respuestas[i] >= 7) {
    satisfechos++;
  }
}
document.write(`El número de clientes satisfechos es: ${satisfechos}<br>`);
