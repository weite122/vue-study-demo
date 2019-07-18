<template>
  <div class="email">
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick () {
        this.$bus.$emit('on-click', "hello")
      }
    }
  }
</script>

<style lang="scss" scoped>
.email{
  border: 1px solid blue;
}
</style>
