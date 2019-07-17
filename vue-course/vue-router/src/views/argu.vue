<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: 'weite'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
