<template>
    <div class="split-pane-contain">
        <split-pane :value.sync="offset">
            <div slot="left">left</div>
            <div slot="right">right</div>
        </split-pane>
    </div>
</template>

<script>
    import SplitPane from '_c/split-pane'
    export default {
        components: {
          SplitPane
        },
      data() {
          return {
            offset: 0.8
          }
      },
      methods: {
          // handleInput(value) {
          //   this.offset = value
          //   console.log(value)
          // }
      }
    }
</script>

<style lang="scss" scoped>
    .split-pane-contain{
        width: 400px;
        height: 200px;
    }
</style>