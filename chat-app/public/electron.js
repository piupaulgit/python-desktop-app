const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");
const ipc = electron.ipcMain;
const dialog = electron.dialog;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    transparent: true,
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.removeMenu();
}

app.on("ready", createWindow);

ipc.on('open-error-dialog', (event) => {
  dialog.showErrorBox('an err', 'jhjfshakjf')
})
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
