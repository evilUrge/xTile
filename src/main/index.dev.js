require('electron-debug')({showDevTools: false})
// Install `vue-devtools`
// require('electron').app.on('ready', () => {
//   const installExtension = require('electron-devtools-installer')
//   installExtension.default(installExtension.VUEJS_DEVTOOLS)
//     .then(() => true)
//     .catch(err => console.log('Unable to install `vue-devtools`: \n', err))
// })

// Require `main` process to boot app
require('./index')
