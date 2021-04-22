<template>
  <div id="app">
    <div class="is-max-widescreen">
      <nav-bar/>
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="hero-body">
          <add-item-prompt/>
          <game-item/>
        </div>
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
@import url('/static/fonts/font.css');

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
  user-select: none;
  font-family: 'Source Sans Pro', sans-serif;
  height: 100%;
  background: radial-gradient(ellipse at center, rgb(17, 17, 16) 0%, rgb(33, 33, 31) 35%, #212a2a 100%);
  overflow: hidden;
}

/* Wave based on https://codepen.io/tedmcdo/pen/PqxKXg */
.hero-body{
  left:50%;
  padding:10vmin;
  position:fixed;
  text-align:center;
  top:50%;
  transform:translate(-50%, -50%);
}

.ocean {
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #015871;
}

.wave {
  background: url(/static/img/wave.svg) repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
}
</style>
