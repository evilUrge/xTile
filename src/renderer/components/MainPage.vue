<template>
  <el-container>
    <el-header class="nav">
      <nav-bar/>
    </el-header>
    <el-main>
      <add-item-prompt/>
      Here!
    </el-main>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AddItemPrompt from '@/components/AddItemPrompt'

export default {
  name: 'main-page',
  components: {NavBar, AddItemPrompt},
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  user-select: none;
  font-family: 'Source Sans Pro', sans-serif;
}

.nav {
  -webkit-user-select: none;
  -webkit-app-region: drag;
  background-color: #4D344D;
  height: 45px !important;
}
</style>
