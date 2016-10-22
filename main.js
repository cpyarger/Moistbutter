const electron = require("electron"),
      app = electron.app,
      BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  //mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
    console.log("window closed")
  })
}

app.on("ready", createWindow);
app.on("browser-window-created",function(e,window) {
  //window.setMenu(null); to remove menu in final version
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    console.log("window closed")

    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
