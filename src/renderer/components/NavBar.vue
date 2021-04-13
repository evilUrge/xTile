<template>
  <el-row type="flex" class="row-bg bg-purple">
    <el-col>
      <el-button class="upper-icons" @click="exit()" type="danger" icon="el-icon-circle-close" circle></el-button>
      <el-button class="upper-icons" @click="fullscreen()" icon="el-icon-setting" small circle></el-button>
      <el-button class="upper-icons" @click="fullscreen()" icon="el-icon-full-screen" circle></el-button>
    </el-col>
    <el-col justify="end">
      xTile
    </el-col>

  </el-row>
</template>


<script>
export default {
  name: 'nav-bar',
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    fullscreen () {
      const window = require('electron').remote.getCurrentWindow()
      window.setFullScreen(!window.isFullScreen())
      console.log(require('../services/settings').getData('fullscreen'))
      require('../services/settings').setData('fullscreen', !window.isFullScreen())
    },
    exit () {
      require('electron').remote.app.quit()
    }
  }
}
</script>

<style scoped>
.upper-icons {
  padding: 2px !important;
}
</style>
