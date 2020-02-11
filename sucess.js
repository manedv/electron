
console.log("indie sucess js ");

const BrowserWin = require('electron').remote.BrowserWindow
const mybtn = document.getElementById('btn_test');
mybtn.addEventListener('click',Testing());

function Testing()
{
    console.log("inside Testing ========= ");
    
}