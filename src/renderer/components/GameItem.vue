<template>
  <table class="table scrollmenu">
    <th v-for="game in this.$store.state.gameList.listOfGames" :key="game.name">
      <img :src=game.img />
      {{ game.name }}
    </th>
  </table>
</template>

<script>
export default {
  name: 'GameItem'
}
</script>

<style scoped>

</style>
