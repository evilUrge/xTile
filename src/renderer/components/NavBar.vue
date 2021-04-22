<template>
  <nav class="level is-transparent" id="navbar" role="navigation" aria-label="main navigation">
    <div class="level-left">
      <button class="button is-primary is-circular" @click="exit()">
        <v-icon name="times-circle"/>
      </button>
      <button class="button is-primary is-circular">
        <v-icon name="cog"/>
      </button>
      <button class="button is-primary is-circular" @click="fullscreen()">
        <v-icon name="expand"/>
      </button>
      <button class="button is-primary is-circular" @click="add()">
        <v-icon name="plus-square"/>
      </button>
    </div>
    <div class="level-item text-title"><img src="static/img/logo.svg" style="height: 35px"></div>
    <div class="level-right">{{ datenow }}</div>
  </nav>
</template>


<script>
import * as moment from 'moment'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/times-circle'
import 'vue-awesome/icons/cog'
import 'vue-awesome/icons/expand'
import 'vue-awesome/icons/plus-square'
import {app} from '@electron/remote'
import {ipcRenderer} from 'electron'

export default {
  name: 'nav-bar',
  data () {
    return {
      datenow: ''
    }
  },
  components: {
    'v-icon': Icon
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    time () {
      this.datenow = moment().format('HH:mm:ss DD-MM-YYYY')
      setTimeout(this.time, 1000)
    },
    fullscreen () {
      ipcRenderer.send('toggleFullScreen')
    },
    exit () {
      app.quit()
    },
    add () {
      this.$root.$emit('AddItemPrompt', true)
    }
  },
  mounted () {
    this.time()
  }
}
</script>

<style scoped>
.is-transparent {
  -webkit-user-select: none;
  -webkit-app-region: drag;
  /*height: 45px !important;*/
}

.is-circular {
  background: top;
  -webkit-app-region: no-drag;
  border-radius: 50%;
  height: 16px;
  width: 16px;
}

.text-title {
  margin-left: -50px;
}

.level-right {
  color: white;
}
</style>
