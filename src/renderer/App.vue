<template>
  <div id="app">
    <div class="is-max-widescreen">
      <nav-bar/>
      <div class="hero-body">
        <add-item-prompt/>
        <game-item/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AddItemPrompt from '@/components/AddItemPrompt'
import GameItem from '@/components/GameItem'

export default {
  name: 'xtile',
  components: {GameItem, NavBar, AddItemPrompt},
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

*, *::after, *::before {
  -webkit-user-drag: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  background-color: transparent;
}
body {
  color: white;
  user-select: none;
  font-family: 'Source Sans Pro', sans-serif;
  height: 100%;
}
</style>
