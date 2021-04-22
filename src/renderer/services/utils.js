module.exports = {
  executor: (exe) => require('child_process')('open', exe)
}
