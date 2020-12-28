<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <h2>欢迎光临红浪漫洗浴中心</h2>
      <div>请选择一位美女佳丽为你服务</div>
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
    <div><button @click="overAction">点餐完毕</button></div>
    <div>{{ overText }}</div>
    <div><button @click="getNowTime">显示时间</button></div>
    <div>{{ nowTime }}</div>

    <div>随机选择一位美女为你服务</div>
    <div v-if="loading">Loading.....</div>
    <img v-if="loaded" :src="result.message" width="100px" height="100px" />
    <Modal :isOpen='isOpen' @clickClose='clickClose'></Modal>
    <div>{{ selectGirlComputed }}</div>
    <div>{{ x }}</div>
    <div>{{ y }}</div>
    <div><button @click='openModal'>open</button></div>
  </div>
</template>


<script lang="ts">
import { reactive, toRefs, ref, watch, computed, onRenderTracked,onMounted,onUnmounted, defineComponent } from "vue";
import { nowTime, getNowTime } from "./hooks/useNowTime";
import useUrlAxios from "./hooks/useURLAxios";
import useMouseClick from "./hooks/useMouseClick";
import useURLLoader from './hooks/useURLLoader'
import Modal from "./components/Modal.vue";
interface DogResult {
  message: string;
  status: string;
}
interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}
export default defineComponent({
  name: "App",
  setup(props,context) {
    interface DataProps {
      girls: string[];
      selectGirl: string;
      selectGirlComputed: string;
      selectGirlFun: (index: number) => void;
    }
    const overText = ref("红浪漫");
    const overAction = () => {
      overText.value = "红浪漫";
      overText.value = overText.value + "点餐完成";
    };
    const data: DataProps = reactive({
      girls: ["大脚", "刘英", "小红"],
      selectGirl: "",
      selectGirlComputed: computed(() => {
        return data.selectGirl + "haha";
      }),
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
      },
    });

    const toRefsData = toRefs(data);

    /* const { result, loading, loaded } = useUrlAxios(
      "https://dog.ceo/api/breeds/image/random"
    ); */
const { result, loading, loaded } = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    watch(result, () => {
      if (result.value) {
        console.log('value', result.value[0].url)
      }
    })
    const isOpen = ref(false)
    const clickClose = () => {
      console.log(context)
      isOpen.value = false
    }
    const {x,y} = useMouseClick()
    watch([overText, () => data.selectGirl], (newValue, oldValue) => {
      /* console.log(newValue); */
      document.title = newValue[0];
    });
    onRenderTracked((event) => {
      /* console.log("状态跟踪组件----------->");
      console.log(event); */
    });
    const openModal = ()=> {
      isOpen.value = true
    }

    return {
      ...toRefsData,
      overText,
      overAction,
      nowTime,
      getNowTime,
      result,
      loading,
      loaded,
      x,y,
      isOpen,
      clickClose,
      openModal,
    };
  },
  components: {Modal},
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
