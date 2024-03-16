let num1 = 8
let num2 = 2
num1Ele = document.getElementById("num1El")
num2Ele = document.getElementById("num2El")

num1Ele.textContent = num1
num2Ele.textContent = num2



let sumEle = document.getElementById("sumEl")


function add(){
    let result = num1Ele+num2Ele
    sumEle.textContent = "Sum: "+result

}
function subtract(){
    let result = num1Ele-num2Ele
    sumEle.textContent = "Sub: "+result

}
function divide(){
    let result = num1/num2
    sumEle.textContent = "divide: "+result

}
function multiply(){
    let result = num1*num2
    sumEle.textContent = "Mul: "+result

}
