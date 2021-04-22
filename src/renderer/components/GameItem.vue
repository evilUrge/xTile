<template>
  <!--  <th v-for="game in this.$store.state.gameList.listOfGames" :key="game.name">-->
  <!--    <img :src=game.img />-->
  <!--    {{ game.name }}-->
  <!--  </th>-->
  <div class="columns">
    <div v-for="game in this.$store.state.gameList.listOfGames" :key="game.name" class="column gameItem block">
      <img :src=game.img @click="executor('.')"/>
      {{ game.name }}
    </div>
    <div class="column gameItem block">ADD</div>
  </div>
</template>

<script>
// import {executor} from '../services/utils'
// import * as childProcess from 'child_process'

export default {
  name: 'GameItem',
  methods: {
    executor: (exe) => true // childProcess('open', exe)
  }
}
</script>

<style scoped>
.columns {
  display: -webkit-box;
}

.gameItem {
  background-color: rgba(255, 255, 255, .8);
  border-radius: .25em;
  box-shadow: 0 0 .25em rgba(0, 0, 0, .25);
  box-sizing: border-box;
  padding: 0px;
  flex-basis: auto;
}
</style>
