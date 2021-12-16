function sum(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let answerSum = number1 + number2;
    document.getElementById("ansSum").innerHTML = answerSum;
}

function multiply(){
    let number1 = Number(document.getElementById("num3").value);
    let number2 = Number(document.getElementById("num4").value);
    let answerMul = number1 * number2;
    document.getElementById("ansMultiply").innerHTML = answerMul;

}
function mod(){
    let number1 = Number(document.getElementById("num5").value);
    let number2 = Number(document.getElementById("num6").value);
    let answerMod = number1 % number2;
    document.getElementById("ansMod").innerHTML = answerMod;
}

