'use strict'

import {app, BrowserWindow, nativeTheme, ipcMain} from 'electron'
import {getData} from '../renderer/services/settings'
import {exec} from 'child_process'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

const createWindow = () => {
  const options = {
    height: 563,
    useContentSize: true,
    width: 1000,
    minWidth: 770,
    minHeight: 350,
    frame: false,
    backgroundColor: '#333',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  }
  getData('fullScreen') && Object.assign(options, {'fullscreen': true})
  mainWindow = new BrowserWindow(options)

  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
nativeTheme.themeSource = 'dark'

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
ipcMain.on('toggleFullScreen', (event) => {
  mainWindow.setFullScreen(!mainWindow.isFullScreen())
  event.reply(mainWindow.isFullScreen() ? 'is-transparent' : 'navbar')
})
ipcMain.on('runExecutable', (event, args) => {
  console.log(args)
  exec(`open ${args}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
})
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
