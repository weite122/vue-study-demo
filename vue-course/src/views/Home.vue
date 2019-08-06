<template>
  <div class="home">
    <b>{{ food }}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(
    //   vm => {
    //   console.log(vm)
    // }
    )
  },
  // beforeRouteLeave (to, from, next) {
  //   const leave = confirm('你确定要离开么？')
  //   if (leave) next()
  //   else next(false)
  // },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  methods: {
    handleClick(type) {
      if (type === 'back') {
        this.$router.back()
      } else if (type === 'push') {
        this.$router.push({
          name: 'argu',
          params: {
            name: 'weite'
          }
          // query: {
          //   name: 'weite'
          // }
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }

}
</script>
