function analizaPalabras(palabras) {
  let analisis = "";

  for (const i in palabras) {
    analisis = `#######`;
    const palabra = palabras[i];
    analisis += `Palabra[+i + 1]: ${palabra[i]}`;
    analisis += `Nº de caracteres: ${palabra.length}`;

    const deletreoLetras =  palabra.split(" ").join("-");
    analisis += `Deletreo: ${deletreoLetras}`;

    const palabraPar = palabra.length % 2 === 0;
    const palabraMayuscula = palabra.charAt(0) === palabra[0].toUpperCase();
    analisis += `La palabra es ${palabraPar ? "es" : "impar"}` y ${palabraMayuscula ? " " : " no"} empieza por mayúscula`;

    const palabraContiene = palabra.toLowerCase().includes("ble");
    analisis += `La palabra ${palabraContiene ? "si" : "no"} contiene "ble"`;

    return analisis;

  }
}


/* const numPalabras = (palabra) => palabra.length;
const palabraPar = (palabra) => palabra.length % 2 === 0;
const palabraMayuscula = (palabra) =>
  palabra.charAt(0) === palabra[0].toUpperCase;
  const palabraContiene = (palabra) => palabra.includes("ble").toLowerCase;
const palabraContiene = (palabra) => palabra.toLowerCase().includes("ble"); */
