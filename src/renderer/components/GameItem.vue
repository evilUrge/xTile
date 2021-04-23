<template>
  <div class="columns">
    <div v-for="game in this.$store.state.gameList.listOfGames" :key="game.name" :id="game.id"
         class="column gameItem block" @mouseover="mouseOver(game.id)"
         @mouseleave="mouseIsDown(game.id)"
        @click="executor(game.uri)"
    >
      <img :src=game.img @click="executor('.')"/>
      {{ game.name }}
    </div>
    <div class="column gameItem block">ADD</div>
  </div>
</template>

<script>

import {ipcRenderer} from 'electron'

export default {
  name: 'GameItem',
  methods: {
    mouseOver: (id) => {
      document.getElementById(id).style.maxWidth = '80%'
    },
    mouseIsDown: (id) => {
      document.getElementById(id).style.maxWidth = '100%'
    },
    executor: (exe) => ipcRenderer.send('runExecutable', exe)
  }
}
</script>

<style scoped>
.columns {
  display: -webkit-box;
  z-index: 99;
}

.gameItem {
  background-color: rgba(255, 255, 255, .8);
  border-radius: .25em;
  box-shadow: 0 0 .25em rgba(0, 0, 0, .25);
  box-sizing: border-box;
  padding: 0;
  flex-basis: auto;
}
</style>
