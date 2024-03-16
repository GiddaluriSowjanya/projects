let countEle = document.getElementById("countEl");
let incrementBtnEle = document.getElementById("incrementBtn");
let saveEle = document.getElementById("saveEl");
let count = 0;

function incrementBtn(){
    count = count + 1;
    countEle.innerText = count;
}
function saveBtn(){
    let counterStr = count + "-";

    saveEle.innerText += counterStr;
    countEle.innerText = 0;
    count = 0;
}