<template>
    <div class="split-pane-wrapper" ref="outer">
        <div class="pane pane-left" :style="{width: leftOffsetPercent}">
        </div>
        <div class="pane-trigger-contain" @mousedown="handleMousedown" :style="{left: triggerLeft, width:`${triggerWith}px`}"></div>
        <div class="pane pane-right" :style="{left: leftOffsetPercent}"></div>
    </div>
</template>

<script>
  export default {
    name: "SplitPane",
    props: {
      value: {
        type: Number,
        default: 0.5
      },
      triggerWith: {
        type: Number,
        default: 8
      },
      min: {
        type: Number,
        default: 0.1
      },
      max: {
        type: Number,
        default: .9
      }
    },
    data() {
      return {
        // leftOffset: 0.3,
        canMove: false,
        initOffset: 0
      }
    },
    computed: {
      leftOffsetPercent() {
        return `${this.value * 100}%`
      },
      triggerLeft() {
        return `calc(${this.value *100}% - ${this.triggerWith/2}px)`
      }
    },
    methods: {
      handleMousedown(event){
        document.addEventListener('mousemove', this.handleMousemove)
        document.addEventListener('mouseup', this.handleMouseup)
        this.canMove = true
        this.initOffset = event.pageX - event.target.getBoundingClientRect().left
      },
      handleMousemove(event) {
        if(!this.canMove) return
        const outerRect = this.$refs.outer.getBoundingClientRect()
        let offsetPercent= (event.pageX - outerRect.left - this.initOffset + this.triggerWith/2) / outerRect.width
        if(offsetPercent < this.min) offsetPercent = this.min
        if(offsetPercent > this.max) offsetPercent = this.max
        this.$emit('input', offsetPercent)
      },
      handleMouseup(){
        this.canMove = false
      }
    }
  }
</script>

<style lang="scss" scoped>
    .split-pane-wrapper {
        height: 100%;
        width: 100%;
        position: relative;

        .pane {
            position: absolute;
            top: 0;
            height: 100%;

            &-left {
                /*width: 30%;*/
                background: palevioletred;
            }

            &-right {
                right: 0;
                bottom: 0;
                /*left: 30%;*/
                background: paleturquoise;
            }

            &-trigger-contain {
                position: absolute;
                width: 8px;
                height: 100%;
                background: red;
                top: 0;
                z-index: 2;
                user-select: none;
            }
        }

    }
</style>