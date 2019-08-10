<template>
    <div class="menu-box" >
<!--        <a-menu>-->
<!--            <a-menu-item>111111</a-menu-item>-->
<!--            <a-menu-item>222222</a-menu-item>-->
<!--            <a-submenu>-->
<!--                <div slot="title">333</div>-->
<!--                <a-menu-item>333-11</a-menu-item>-->
<!--                <a-submenu>-->
<!--                    <div slot="title">333-22</div>-->
<!--                    <a-menu-item>333-22-11</a-menu-item>-->
<!--                    <a-menu-item>333-22-22</a-menu-item>-->
<!--                </a-submenu>-->
<!--            </a-submenu>-->
<!--        </a-menu>-->
        <a-menu>
            <template v-for="(item, index) in list">
                <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{ item.title }}-{{index}}</a-menu-item>
                <re-submenu  v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
            </template>
        </a-menu>
    </div>
</template>

<script>
  import menuComponents from '_c/menu'
  import ReSubmenu from './re-submenu.vue'
  const {AMenu, AMenuItem, ASubmenu} = menuComponents

  export default {
    name: 'menu-page',
    components: {
      AMenu, AMenuItem, ASubmenu, ReSubmenu
    },
    data() {
      return {
        list: [
          {
            title: '1111'
          },
          {
            title: '2222'
          },
          {
            title: '3333',
            children: [
              {
                title: '3333-1'
              },
              {
                title: '3333-2',
                children: [
                  {
                    title: '3333-2-1'
                  },
                  {
                    title: '3333-2-2'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
    .menu-box {
        width: 300px;
        heigth: 400px;
    }


</style>