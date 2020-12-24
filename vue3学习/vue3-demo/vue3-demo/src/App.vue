<template>
  <img alt="Vue logo" src="./assets/logo.png"/>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
  </div>
  <div>
    <button
        v-for="(item, index) in girls"
        v-bind:key="index"
        @click="selectGirlFun(index)"
    >
      {{ index }} : {{ item }}
    </button>
  </div>
  <div>你选择了【{{ selectGirl }}】为你服务</div>
</template>


<script lang="ts">
  import {defineComponent,reactive,toRefs} from "vue";

  export default defineComponent({
    name: "App",
    setup() {
      interface DataProps {
        girls: string[];
        selectGirl: string;
        selectGirlFun: (index: number) => void;
      }
      const data: DataProps= reactive({
        girls: ['大脚', '刘英', '小红'],
        selectGirl: '',
        selectGirlFun: (index: number) => {
          data.selectGirl = data.girls[index]
        }
      })

      const toRefsData = toRefs(data)
      return {
          ...toRefsData
      }
    },
  });
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
