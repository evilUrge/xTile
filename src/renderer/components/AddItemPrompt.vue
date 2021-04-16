<template>
  <div id="addItem" class="modal modal-fx-fadeInScale">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button" @click="close()">Cancel</button>
        </footer>
      </div>
    </div>
    <button id="image-modal-close" class="modal-close" @click="close()"></button>
  </div>
</template>

<script>
export default {
  name: 'add-item-prompt',
  data () {
    return {
      dialogVisible: false,
      textInputDisabled: true,
      options: [{
        value: 'exe',
        label: 'Executable'
      }, {
        value: 'steam',
        label: 'Steam'
      }, {
        value: 'geforce',
        label: 'GeForceNow'
      }],
      value: '',
      input: ''
    }
  },
  methods: {
    close () {
      document.querySelector('#addItem').classList.remove('is-active')
    },
    save () {
      console.log(this.$store.gameList.listOfGames)
    }
  },
  mounted () {
    this.$root.$on('AddItemPrompt', () => {
      document.querySelector('#addItem').classList.add('is-active')
    })
  }
}
</script>

<style scoped>

</style>
