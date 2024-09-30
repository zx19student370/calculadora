function operaciones(){
    let num1 = parseInt(prompt("dime el primer numero"));
    let num2 = parseInt(prompt("dime el segundo numero"));

    let suma= num1 +num2;
    let resta= num1 - num2;
    console.log("Resultados:\n"+
        "Suma: "+suma+"\n"+
        "Resta: "+resta+"\n"

    );
}    

operaciones();