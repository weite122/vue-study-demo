<template>
  <div>
    <a-input v-model="inputValue"/>
      <h1>{{ inputValue }}</h1>
  </div>  
</template>

<script>
  import AInput from '_c/AInput.vue'
  export default {
    name: 'store',
    data() {
      return {
        inputValue: ''
      }
    },
    components: {
      AInput
    }
  }
</script>

<style lang="scss" scoped>

</style>
