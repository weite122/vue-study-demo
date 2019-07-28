<template>
  <div>
    <a-input v-model="stateValue"/>
    <p>{{ stateValue }} -> lastLetter is {{ inputValueLastLetter }}</p>
    <p>appName: {{ appName }} appNameWithVersion: {{ appNameWithVersion }}</p>
    <p>userName: {{ userName }}, firstLetter: {{ firstLetter }}</p>
    <!-- <a-show :content="inputValue"/> -->
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="handleChangeUserName">修改用户名</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(item, index) in todolist" :key="index">{{ item }}</p>
  </div>
</template>

<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    AInput, 
    AShow
  },
  computed: {
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })
    appNameWithVersion() {
      return this.$store.getters.appNameWithVersion;
    },
    ...mapState({
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todolist: state => state.user.todo ? state.user.todo.todolist : []
    }),
    stateValue: {
        get() {
            return this.$store.state.stateValue
        },
        set(value) {
            this.SET_STATE_VALUE(value)
        }
    },
    ...mapGetters(["appNameWithVersion", "firstLetter"]),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    },
    appName() {
      return this.$store.state.appName;
    }
    // userName() {
    //   console.log()
    //   return this.$store.state.user.userName
    // }
  },
  methods: {
    ...mapMutations([
        "SET_APP_NAME",
        "SET_USER_NAME",
        "SET_STATE_VALUE"
     ]),
     ...mapActions([
        "updateAppName"
     ]),
    handleInput(value) {
      this.inputValue = value;
    },
    handleChangeAppName() {
      //   this.$store.commit({
      //     type: "SET_APP_NAME",
      //     appName: "newAppName"
      //   })
    //   this.SET_APP_NAME({
    //     appName: "newAppName"
    //   });
        this.updateAppName()

      //   this.$store.commit("SET_APP_VERSION");
    },
    handleChangeUserName() {
      this.SET_USER_NAME("vue-course");
    },
    registerModule () {
        this.$store.registerModule(["user", "todo"], {
            state: {
                todolist: [
                    'xuexi',
                    'gongzuo'
                ]
            }
        })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
