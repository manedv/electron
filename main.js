console.log("welcome in");
// const electron = require('electron')
const { app, BrowserWindow } = require('electron')

function createWindow()
{
  let win = new BrowserWindow(
    {
      transparent: true,
      // titleBarStyle: 'customButtonsOnHover',
      // frame: false,
      // titleBarStyle: 'hiddenInset',
      // titleBarStyle: 'hidden' ,
      width:500,
      height:400,
      webPreference:
      {
        nodeIntegration:true
      }
    }
  )
  win.loadFile('index.html')
  // win.webContents.openDevTools()
}
app.whenReady().then(createWindow)
