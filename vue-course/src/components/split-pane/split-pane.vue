<template>
    <div class="split-pane-wrapper" ref="outer">
        <div class="pane pane-left" :style="{width: leftOffsetPercent, paddingRight: `${this.triggerWith / 2}px`}">
            <slot name="left"></slot>
        </div>
        <div class="pane-trigger-contain" @mousedown="handleMousedown"
             :style="{left: triggerLeft, width:`${triggerWith}px`}">
            <div class="pane-trigger-contain-bar">
                <div class="pane-trigger-contain-bar-block"></div>
                <div class="pane-trigger-contain-bar-block"></div>
                <div class="pane-trigger-contain-bar-block"></div>
                <div class="pane-trigger-contain-bar-block"></div>
                <div class="pane-trigger-contain-bar-block"></div>
                <div class="pane-trigger-contain-bar-block"></div>
                <div class="pane-trigger-contain-bar-block"></div>
                <div class="pane-trigger-contain-bar-block"></div>
            </div>
        </div>
        <div class="pane pane-right" :style="{left: leftOffsetPercent, paddingLeft: `${this.triggerWith / 2}px`}">
            <slot name="right"></slot>
        </div>
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
        canMove: false,
        initOffset: 0
      }
    },
    computed: {
      leftOffsetPercent() {
        return `${this.value * 100}%`
      },
      triggerLeft() {
        return `calc(${this.value * 100}% - ${this.triggerWith / 2}px)`
      }
    },
    methods: {
      handleMousedown(event) {
        document.addEventListener('mousemove', this.handleMousemove)
        document.addEventListener('mouseup', this.handleMouseup)
        this.canMove = true
        this.initOffset = event.pageX - event.target.getBoundingClientRect().left
      },
      handleMousemove(event) {
        if (!this.canMove) return
        const outerRect = this.$refs.outer.getBoundingClientRect()
        let offsetPercent = (event.pageX - outerRect.left - this.initOffset + this.triggerWith / 2) / outerRect.width
        if (offsetPercent < this.min) offsetPercent = this.min
        if (offsetPercent > this.max) offsetPercent = this.max
        // this.$emit('input', offsetPercent)
        this.$emit('update:value', offsetPercent)
      },
      handleMouseup() {
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
        border: 1px solid #dcdee2;
        .pane {
            position: absolute;
            top: 0;
            height: 100%;

            &-left {
            }

            &-right {
                right: 0;
                bottom: 0;
            }

            &-trigger-contain {
                border: 1px solid #dcdee2;
                position: absolute;
                background: #f8f8f9;
                border-top: none;
                border-bottom: none;
                width: 8px;
                height: 100%;
                top: 0;
                z-index: 2;
                user-select: none;
                cursor: col-resize;
                &-bar{
                    position:absolute;
                    left: 1px;
                    top: 50%;
                    height: 32px;
                    transform: translateY(-50%);
                    &-block{
                        width: 6px;
                        height: 1px;
                        background: rgba(23,35,61,.25);
                        float: left;
                        margin-top: 3px;
                    }
                }
            }
        }

    }
</style>