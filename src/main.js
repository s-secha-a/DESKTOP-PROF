const { app, BrowserWindow, ipcMain, shell, nativeImage  } = require('electron');
const { updateElectronApp, UpdateSourceType } = require('update-electron-app');
const path = require('node:path');


const appFolder = path.dirname(process.execPath);
const ourExeName = path.basename(process.execPath);
const stubLauncher = path.resolve(appFolder, '..', ourExeName);
const { version } = require('../package.json');
const appIcon = nativeImage.createFromPath('./src/appIcon.ico')

updateElectronApp({
  updateSource: {
    type: UpdateSourceType.ElectronPublicUpdateService,
    repo: 's-secha-a/SUAI-DESKPROF'
  }
})


app.setLoginItemSettings({
  openAtLogin: true,
  path: stubLauncher,

})


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}


// const userDataPath = path.join(__dirname, 'user-data');
// const cachePath = path.join(__dirname, 'cache');

// if (!fs.existsSync(userDataPath)) {
//   fs.mkdirSync(userDataPath, { recursive: true });
// }

// if (!fs.existsSync(cachePath)) {
//   fs.mkdirSync(cachePath, { recursive: true });
// }

// app.setPath('userData', userDataPath);
// app.setPath('cache', cachePath);

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon: appIcon,
    width: 1300,
    height: 760,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0A0A0A',
      symbolColor: '#ebebebff'
    },
    backgroundColor: '#0A0A0A',
    // transparent: true,
    // frame: false,
    resizable: false,
    fullscreenable: false,
    fullscreen: false,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,

      // devTools: true,

      contextIsolation: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.setIcon(appIcon);
  
  mainWindow.on('maximize', () => {
    mainWindow.unmaximize()
  });

  mainWindow.webContents.once('did-finish-load', () => {
    mainWindow.webContents.send('app-version', version);
  });
};


ipcMain.handle('get-app-version', () => {
  return version;
});

ipcMain.handle('open-external-link', (event, url) => {
  shell.openExternal(url);
});

ipcMain.handle('get-env-variable', (event, key) => {
  return process.env[key];
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      window.localStorage.clear();
      window.sessionStorage.clear();
      createWindow();
    }
  });
});


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.


