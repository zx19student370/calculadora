function operaciones() {
    let num1 = parseInt(prompt("Dime el primer número"));
    let num2 = parseInt(prompt("Dime el segundo número"));
    let num3 = parseInt(prompt("Dime el tercer número"));
    let basePotencia = parseInt(prompt("Dime el número base para calcular la potencia"));
    let exponente = parseInt(prompt("Dime el exponente para la potencia"));

    let suma = num1 + num2;
    let resta = num1 - num2;
    let division = num1 / num2;
    let resultadoPotencia = Math.pow(basePotencia, exponente);

    console.log("Resultados:\n" +
        "Suma: " + suma + "\n" +
        "Resta: " + resta + "\n" +
        "División: " + division + "\n" +
        "Potencia: " + resultadoPotencia + "\n"
    );
}

operaciones();
