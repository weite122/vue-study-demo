<template>
  <div>
    <a-input @input="handleInput"/>
    <!-- <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p> -->
      <!-- <h1>{{ appName }} appNameWithVersion: {{ appNameWithVersion }}</h1> -->
      <h1>userName: {{ userName }}, firstLetter: {{ firstLetter }} </h1>
      <!-- <a-show :content="inputValue"/> -->
  </div>
</template>

<script>
  import AInput from '_c/AInput.vue'
  import AShow from '_c/AShow.vue'

import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'store',
    data() {
      return {
        inputValue: ''
      }
    },
    components: {
      AInput,
      AShow
    },
    computed: {
      // ...mapState({
      //   appName: state => state.appName,
      //   userName: state => state.user.userName
      // })
      // appNameWithVersion() {
      //   return this.$store.getters.appNameWithVersion
      // },
      ...mapState('user', {
        userName: state => state.userName
      }),
      ...mapGetters('user',[
        'firstLetter'
      ]),
      inputValueLastLetter(){
        return this.inputValue.substr(-1, 1)
      },
      appName() {
        return this.$store.state.appName
      },
      // userName() {
      //   console.log()
      //   return this.$store.state.user.userName
      // }
    },
    methods: {
      handleInput (value) {
        this.inputValue = value
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
