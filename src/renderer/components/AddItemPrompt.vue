<template>
  <div id="addItem" class="modal modal-fx-fadeInScale">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title has-text-white">{{ defaultTitle }}</p>
        </header>
        <div class="level" style="padding-left: 20px">
          <div class="level-left control has-icons-left">
            <div class="select is-rounded">
              <select>
                <option selected>Executable</option>
                <option>Steam URI</option>
                <option>GeForceNow</option>
              </select>
            </div>
            <span class="icon is-left">
              <v-icon name="gamepad"/>
            </span>
        </div>
          <div class="level-right">
            <section class="modal-card-body">
              <div class="file has-name is-right">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume">
                  <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Choose a file…</span></span>
                  <span class="file-name">fileNameGoesHere</span>
                </label>
              </div>
            </section>
          </div>
        </div>
        <div class="level">

          <input class="input" type="text" placeholder="Text input">
        </div>
        <footer class="modal-card-foot">
          <button class="button is-success is-rounded">Save</button>
          <button class="button is-danger is-rounded" @click="close()">Cancel</button>
        </footer>
      </div>
    </div>
    <button id="image-modal-close" class="modal-close" @click="close()"></button>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/gamepad'
export default {
  name: 'add-item-prompt',
  data () {
    return {
      defaultTitle: 'Add a game'
    }
  },
  components: {
    'v-icon': Icon
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
.modal-card-head {
  background-color: #4D344D;
  border-bottom: 0px;
}

.modal-card-body {
  background-color: #333;
}

.modal-card-foot {
  border-top: 0px;
  border-top: 0px;
  background-color: #604360;
}

.level {
  background-color: #333;
  margin-bottom: 0;
}

</style>
