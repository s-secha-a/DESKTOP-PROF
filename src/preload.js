// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  onAppVersion: (callback) => ipcRenderer.on('app-version', callback),
  openExternal: (url) => ipcRenderer.invoke("open-external-link", url),
  getEnvVariable: (key) => ipcRenderer.invoke('get-env-variable', key),
  onEnvVariables: (callback) => ipcRenderer.on('env-variables', callback)
});
