<template>
  <el-dialog
      title="Add a new game"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
    <span>
      Browse and get your game link asap!
    <el-row>
      <el-select v-model="value" placeholder="Type">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">

        </el-option>
      </el-select>
      <el-input
          placeholder="Please input"
          v-model="input"
          clearable
          disabled=true>
      </el-input>
    </el-row>
    </span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'add-item-prompt',
  data () {
    return {
      dialogVisible: false,
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
  mounted () {
    this.$root.$on('AddItemPrompt', () => {
      this.dialogVisible = true
    })
  }
}
</script>

<style scoped>

</style>
