<template>
  <div>
      <count-to :end-val="100"></count-to>
  </div>
</template>

<script>
import CountTo from "@/components/count-to";
export default {
  name: "count_to",
  components: {
    CountTo
  }
};
</script>

<style lang="scss" scoped>
</style>