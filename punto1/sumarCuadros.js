function dibujarCuadro(numero, esSuma) {
    const numeroString = String(numero);
    const longitud = numeroString.length;
    const borde = esSuma ? "=" : "-";
    let resultado = "+ " + borde.repeat(longitud) + " +\n";
    resultado += "| " + numeroString.padEnd(longitud, ' ') + " |\n";
    resultado += "+ " + borde.repeat(longitud) + " +\n";
    return resultado;
}

function sumarCuadros(listNumeros) {
    let sumaTotal = 0;
    for (let i = 0; i < listNumeros.length - 1; i++) {
        console.log(dibujarCuadro(listNumeros[i], false));
        sumaTotal += listNumeros[i];
    }
    console.log(dibujarCuadro(listNumeros[listNumeros.length - 1], false));
    sumaTotal += listNumeros[listNumeros.length - 1];
    console.log(dibujarCuadro(sumaTotal, true));
}

const numeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(numeros);
