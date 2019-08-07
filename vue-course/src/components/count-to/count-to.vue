<template>
  <div>
    <span :id="elementId"></span>
  </div>
</template>

<script>
import CountUp from "countup";
export default {
  name: "CountTo",
  computed: {
    elementId() {
      return `count_up_${this._uid}`;
    }
  },
  data() {
    return {
      counter: {}
    };
  },
  props: {
    delay: {
      type: Number,
      default: 0
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    useGrouping: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ""
    },
    decimal: {
      type: String,
      default: "."
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.counter = new CountUp(
        this.elementId,
        this.startVal,
        this.endVal,
        this.decimals,
        this.duration,
        {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal
        }
      );
      setTimeout(() => {
        this.counter.start();
      }, this.delay);
    });
  }
};
</script>

<style lang="scss" scoped>
</style>