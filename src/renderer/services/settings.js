import settings from 'electron-settings'

const getData = (key) => settings.getSync(key)
const setData = (key, value) => settings.setSync(key, value)

export {
  getData,
  setData
}
