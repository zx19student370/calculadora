function operaciones(){
    let num1 = parseInt(prompt("dime el primer numero"));
    let num2 = parseInt(prompt("dime el segundo numero"));
    let num3 = parseInt(prompt("dime el tercer numero"));

    let suma= num1 +num2+num3;
    let division = num1/num2;
    console.log("Resultados:\n"+
        "Suma: "+suma+"\n",
        "Division: "+division+"\n"


    );
}    

operaciones();