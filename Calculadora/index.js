// PROGRAMA CALCULADORA

const display = document.getElementById("display");

function addAoDisplay(elemento){
    display.value += elemento;
};

function calcular(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
};

function limparDisplay(){
    display.value = "";
};

function limpaMsgDeErro(){
    if(display.value == "Error"){
        display.value = "";
    }
}