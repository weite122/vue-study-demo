<template>
  <div>
    <count-to ref="countTo" :end-val="endVal" @on-animation-end="handleEnd">
        <span slot="left">总金额： </span>
        <span slot="right">元 </span>
    </count-to>
    <button @click="getNumber">getNumber</button>
    <button @click="updateNumber">updateNumber</button>
  </div>
</template>

<script>
import CountTo from "@/components/count-to";
export default {
  name: "count_to",
  components: {
    CountTo
  },
  data(){
      return {
          endVal: 100
      }
  },
  methods: {
      getNumber() {
          this.$refs.countTo.getCount()
      },
      updateNumber() {
          this.endVal += Math.random() * 100
      },
      handleEnd(endVal) {
          console.log('end', endVal)
      }
  }
};
</script>

<style lang="scss" scoped>
</style>