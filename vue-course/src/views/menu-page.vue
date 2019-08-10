<template>
    <div class="menu-box">
        <a-menu>
            <a-menu-item>111111</a-menu-item>
            <a-menu-item>222222</a-menu-item>
            <a-submenu>
                <div slot="title">333</div>
                <a-menu-item>333-11</a-menu-item>
                <a-submenu>
                    <div slot="title">333-22</div>
                    <a-menu-item>333-22-11</a-menu-item>
                    <a-menu-item>333-22-22</a-menu-item>
                </a-submenu>
            </a-submenu>
        </a-menu>
    </div>
</template>

<script>
  import menuComponents from '_c/menu'

  const {AMenu, AMenuItem, ASubmenu} = menuComponents

  export default {
    name: 'menu-page',
    components: {
      AMenu, AMenuItem, ASubmenu
    }
  }
</script>

<style scoped lang="scss">
    .menu-box {
        width: 300px;
        heigth: 400px;
    }


</style>