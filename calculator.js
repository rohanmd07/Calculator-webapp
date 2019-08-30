"use strict";

let operand1;
let operand2;
let operator;
let count = 0;

//perform different mathematical operations
//=========================================

function addition(a, b){
    let result = a + b;
    document.getElementById("display" + count).innerHTML = result;
    document.getElementById("display"+count).style.display = "block";
    operand1 = result;
    operand2 = undefined;
}

function subtraction(a, b){
    let result = a - b;
    document.getElementById("display" + count).innerHTML = result;
    document.getElementById("display"+count).style.display = "block";
    operand1 = result;
    operand2 = undefined;
}

function multiplication(a, b){
    let result = a * b;
    document.getElementById("display" + count).innerHTML = result;
    document.getElementById("display"+count).style.display = "block";
    operand1 = result;
    operand2 = undefined;
}

function divison(a, b){
    let result = a / b;
    document.getElementById("display" + count).innerHTML = result;
    document.getElementById("display"+count).style.display = "block";
    operand1 = result;
    operand2 = undefined;
}


//shows character
//===============

function showCharacter(a) {    
    count++; 
    document.getElementById("display"+count).innerHTML = a;
    document.getElementById("display"+count).style.display = "block";
   
}

// delete function
// ===============

function deleteLastElement(){
   document.getElementById("display"+count).style.display = "none";
   count--;
   if(count === 0){
     operand1 = undefined;
     operand2 = undefined;
     operator = undefined;
   }
}

//onclicking mathematical numbers
//===============================

document.getElementById("1").onclick = function() {
    showCharacter(1);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "1";
        else operand1 = operand1 + "1";
    }else {
        if(operand2 === undefined)  operand2 = "1";
        else operand2 = operand2 + "1";
    }
};


document.getElementById("2").onclick = function() {
    showCharacter(2);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "2";
        else operand1 = operand1 + "2";
    }else {
        if(operand2 === undefined)  operand2 = "2";
        else operand2 = operand2 + "2";
    }
};


document.getElementById("3").onclick = function() {
    showCharacter(3);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "3";
        else operand1 = operand1 + "3";
    }else {
        if(operand2 === undefined)  operand2 = "3";
        else operand2 = operand2 + "3";
    }
};


document.getElementById("4").onclick = function() {
    showCharacter(4);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "4";
        else operand1 = operand1 + "4";
    }else {
        if(operand2 === undefined)  operand2 = "4";
        else operand2 = operand2 + "4";
    }
};


document.getElementById("5").onclick = function() {
    showCharacter(5);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "5";
        else operand1 = operand1 + "5";
    }else {
        if(operand2 === undefined)  operand2 = "5";
        else operand2 = operand2 + "5";
    }
};


document.getElementById("6").onclick = function() {
    showCharacter(6);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "6";
        else operand1 = operand1 + "6";
    }else {
        if(operand2 === undefined)  operand2 = "6";
        else operand2 = operand2 + "6";
    }
};


document.getElementById("7").onclick = function() {
    showCharacter(7);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "7";
        else operand1 = operand1 + "7";
    }else {
        if(operand2 === undefined)  operand2 = "7";
        else operand2 = operand2 + "7";
    }
};


document.getElementById("8").onclick = function() {
    showCharacter(8);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "8";
        else operand1 = operand1 + "8";
    }else {
        if(operand2 === undefined)  operand2 = "8";
        else operand2 = operand2 + "8";
    }
};


document.getElementById("9").onclick = function() {
    showCharacter(9);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "9";
        else operand1 = operand1 + "9";
    }else {
        if(operand2 === undefined)  operand2 = "9";
        else operand2 = operand2 + "9";
    }
};

document.getElementById("0").onclick = function() {
    showCharacter(0);
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = "0";
        else operand1 = operand1 + "0";
    }else {
        if(operand2 === undefined)  operand2 = "0";
        else operand2 = operand2 + "0";
    }
};


document.getElementById(".").onclick = function() {
    showCharacter(".");
    if( operator === undefined){     
        if(operand1 === undefined)  operand1 = ".";
        else operand1 = operand1 + ".";
    }else {
        if(operand2 === undefined)  operand2 = ".";
        else operand2 = operand2 + ".";
    }
};



//clicking different arithmatic buttons
//=====================================

document.getElementById("+").onclick = function() {
    showCharacter("+");
    operator = "+";
};

document.getElementById("-").onclick = function() {
    showCharacter("-");
    operator = "-";
};

document.getElementById("*").onclick = function() {
    showCharacter("*");
    operator = "*";
};

document.getElementById("/").onclick = function() {
    showCharacter("/");
    operator = "/";
};

//prints "=" and calls appropriate function operations
//====================================================

document.getElementById("=").onclick = function() {
    showCharacter("=");
    count++;
    if(operator === "+"){   
    addition(Number(operand1),Number(operand2));
    }
    if(operator === "-"){
    subtraction(Number(operand1),Number(operand2));
    }
    if(operator === "*"){
    multiplication(Number(operand1),Number(operand2));
    }
    if(operator === "/"){
    divison(Number(operand1),Number(operand2));
    }
};


// deleting element button
// =======================

document.getElementById("DEL").onclick = function() {
    deleteLastElement();
};