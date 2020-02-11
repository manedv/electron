console.log("welcome in elctron demo...");
// const electron = require('electron')
const { app, BrowserWindow } = require('electron')

let win;
function createWindow()
{
   win = new BrowserWindow
    (
        {
        //transparent: true,
        // titleBarStyle: 'customButtonsOnHover',
        frame: false,
        // titleBarStyle: 'hiddenInset',
        // titleBarStyle: 'hidden' ,
        width:1024,
        height:576,
        show : false
   
        }
      )
 
    // win.setBackgroundColor('#767676') 
    win.removeMenu()
    win.loadFile('index.html')
    win.once('ready-to-show',()=>
              { win.show();});
    // win.webContents.openDevTools()
    // console.log("inside main ===========");
    // Test1();

}
app.whenReady().then(createWindow)


//////////////////////////////////////

setInterval(function Test1()
{
  console.log("Inside test =================");
  win.loadFile('secondPage.html')
 
},7000);