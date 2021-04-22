// TODO: Make this work!!
import settings from 'electron-settings'
const getData = (key) => settings.getSync(key)
const setData = (key, value) => settings.setSync(key, value)
const deleteData = (key) => key

// const Store = require('electron-store')
// const store = new Store()
// const setData = (key, value) => store.set(key, value)
// const getData = (key) => store.get(key)
// const deleteData = (key) => store.delete(key)

// const storage = require('electron-json-storage')
// storage.setDataPath(require('os').tmpdir())
// const setData = (key, value) => storage.set(key, value).then(value => value).catch(err => console.error(err.message))
// const getData = (key) => storage.getSync(key)
// const deleteData = (key) => storage.remove(key)

export {
  getData,
  setData,
  deleteData
}
