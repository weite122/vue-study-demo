<template>
  <div>
    <a-input @input="handleInput"/>
      <!-- <h1>{{ inputValue }}</h1> -->
      <a-show :content="inputValue"/>
  </div>
</template>

<script>
  import AInput from '_c/AInput.vue'
  import AShow from '_c/AShow.vue'

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
    methods: {
      handleInput (value) {
        this.inputValue = value
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
