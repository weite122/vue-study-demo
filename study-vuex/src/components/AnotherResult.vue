<template>
  <div>
    <p>当前计数: {{ doubleCounter }}</p>
    <p>当前次数: {{ stringCounter }}</p>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  // name: "Result",
  // // props: ['counter']
  // computed: {
  //   counter() {
  //     return this.$store.getters.doubleCounter
  //   },
  //   clicks() {
  //     return this.$store.getters.stringCounter
  //   }
  // }
  computed: {
    ...mapGetters(['doubleCounter', 'stringCounter']),
    myOwnComputedProp(){}
  }
}
</script>

<style lang="scss" scoped>

</style>
