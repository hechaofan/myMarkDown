引用：https://jspang.com/detailed?id=64#toc226





## setup() 和ref()函数

```
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
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
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const girls = ref(["大脚", "刘英", "晓红"]);
    const selectGirl = ref("");
    const selectGirlFun = (index: number) => {
      selectGirl.value = girls.value[index];
    };
    //因为在模板中这些变量和方法都需要条用，所以需要return出去。
    return {
      girls,
      selectGirl,
      selectGirlFun,
    };
  },
});
</script>
```



## reactive()和toRefs()函数

```ts
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
```



##  Vue3 版本的生命周期 

Vue3 的生命周期比较多，我们需要一个个给大家讲。

- setup() :开始创建组件之前，在`beforeCreate`和`created`之前执行。创建的是`data`和`method`
- onBeforeMount() : 组件挂载到节点上之前执行的函数。
- onMounted() : 组件挂载完成后执行的函数。
- onBeforeUpdate(): 组件更新之前执行的函数。
- onUpdated(): 组件更新完成之后执行的函数。
- onBeforeUnmount(): 组件卸载之前执行的函数。
- onUnmounted(): 组件卸载完成后执行的函数
- onActivated(): 被包含在``中的组件，会多出两个生命周期钩子函数。被激活时执行。
- onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。
- onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数（以后用到再讲，不好展现）。

注：使用``组件会将数据保留在内存中，比如我们不想每次看到一个页面都重新加载数据，就可以使用``组件解决。



## vue2生命周期和vue3生命周期对比

```
Vue2--------------vue3
beforeCreate  -> setup()
created       -> setup()
beforeMount   -> onBeforeMount
mounted       -> onMounted
beforeUpdate  -> onBeforeUpdate
updated       -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed     -> onUnmounted
activated     -> onActivated
deactivated   -> onDeactivated
errorCaptured -> onErrorCaptured
```

 除了这些钩子函数外，`Vue3.x`还增加了`onRenderTracked`和`onRenderTriggered`函数，这两个函数放到下节课再讲解。这节就先到这里了。 



## `onRenderTracked`和`onRenderTriggered`钩子函数的使用

Vue 官方的文档里，明确指出了。如果你使用 Vue3，请尽量使用新的生命周期钩子函数，也就是上节课写在`setup()`函数中带`on`的这些钩子函数。

[onRenderTracked 状态跟踪](https://jspang.com/detailed?id=64#toc328)

使用`onRenderTracked`同样要使用`import`进行引入。

```js
import { .... ,onRenderTracked,} from "vue";
```

引用后就可以在`setup()`函数中进行引用了。

```js
onRenderTracked((event) => {
  console.log("状态跟踪组件----------->");
  console.log(event);
});
```

写完后可以到终端中启动测试服务`yarn serve`,然后看一下效果，在组件没有更新的时候`onRenderTracked`是不会执行的，组件更新时，他会跟组里边每个值和方法的变化。

[onRenderTriggered 状态触发](https://jspang.com/detailed?id=64#toc329)

如果把`onRenderTracked`比喻成散弹枪，每个值都进行跟踪，那`onRenderTriggered`就是狙击枪，只精确跟踪发生变化的值，进行针对性调试。

使用它同样要先用`import`进行引入

```js
import { .... ,onRenderTriggered,} from "vue";
```

在使用`onRenderTriggered`前，记得注释相应的`onRenderTracked`代码，这样看起来会直观很多。 然后把`onRenderTriggered()`函数，写在`setup()`函数里边，

```js
onRenderTriggered((event) => {
  console.log("状态触发组件--------------->");
  console.log(event);
});
```

对 event 对象属性的详细介绍：

```js
- key 那边变量发生了变化
- newValue 更新后变量的值
- oldValue 更新前变量的值
- target 目前页面中的响应变量和函数
```

通过这些你能很好的对代码进行调试。这些调试用的钩子函数，如果你能正确合理的使用，是真的可以快速解决问题的。

有的小伙伴看到这里肯定会觉的，这个和`watch`很像，那下节课我们再讲一下`watch`的使用吧，这个也有了很大的变化。



## watch的使用和注意事项

vue3使用setup



watch一个数据

```
如果只有一个数据，用ref导入
import { watch} from "vue"
const overText = ref("红浪漫");
  const overAction = () => {
    overText.value = overText.value + "点餐完成 | ";
  };
  return { ...refData,  overText,   overAction};
 watch(overText, (newValue, oldValue) => {
    document.title = newValue;
  });
```

watch多个值时，用reactive

```
const data = reactive({
      selectGirl: "",
    });


watch([overText, () => data.selectGirl], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];  //返回的newValue也是一个数组
  });
```



## vue3模块化

在src下创建`hooks/useNowTime.ts`文件

```
import { ref } from "vue";

const nowTime = ref("00:00:00");
const getNowTime = () => {
  const now = new Date();
  const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const min = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const sec = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  nowTime.value = hour + ":" + min + ":" + sec;
  setTimeout(getNowTime, 1000);
};

export { nowTime, getNowTime };
```

在app.vue里引用

```

<div><button @click="getNowTime">显示时间</button></div>
<div>{{ nowTime }}</div>


import { nowTime, getNowTime } from "./hooks/useNowTime";
setup() {
    return {
      nowTime,
      getNowTime
    };
  },
```







##  Teleport瞬间移动组件 

`Teleport`方法，可以把`Dialog`组件渲染到你任意想渲染的外部Dom上，不必嵌套再`#app`里了，这样就不会互相干扰了。你可以把`Teleport`看成一个传送门，把你的组件传送到你需要的地方。 `teleport`组件和其它组件没有任何其它的差异，用起来都是一样的。

使用的第一步是把你编写的组件用``标签进行包裹，在组件上有一个`to`属性，这个就是要写你需要渲染的`DOM`ID了。

```js
<template>
  <teleport to="#modal">
    <div id="center">
      <h2>JSPang11</h2>
    </div>
  </teleport>
</template>
```



组件写好后，在App.vue中使用就非常简单了，先引入这个，然后声明为`component`就可以了。

```js
//...
import modal from "./components/Modal.vue";
const app = {
  name: "App",
  components: {
    modal,
  },
  //...
}
```





然后我们在打开`/public/index.html`,增加一个`model`节点。

```js
<div id="app"></div>
<div id="modal"></div>
```

在需要使用的地方引入，这时候在浏览器中预览，就会发现，现在组件已经挂载到`model`节点上了，这就是`teleport`组件的使用了。



## Suspense异步请求组件

在`/src/components/`目录下，新建一个`GirlShow.vue`的新组件。

```js
<template>
    <img :src="result && result.imgUrl"  />
</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
    async setup() {  //promise 语法糖  返回之后也是promise对象
        const rawData = await  axios.get('https://apiblog.jspang.com/default/getGirl')
        return {result:rawData.data}
    }
})
</script>
```

 `App.vue`页面 

```
<template>
  <div>
    <Suspense>
      <template #default>
         <girl-show />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

import GirlShow from "./components/GirlShow.vue";

const app = {
  name: "App",
  components: { GirlShow },
  setup() {
    return {};
  },
};
```



## 处理异步请求错误

在`vue3.x`的版本中，可以使用`onErrorCaptured`这个钩子函数来捕获异常。在使用这个钩子函数前，需要先进行引入.

```js
import { ref , onErrorCaptured} from "vue";
```

有了`onErrorCaptured`就可以直接在`setup()`函数中直接使用了。钩子函数要求我们返回一个布尔值，代表错误是否向上传递，我们这里返回了`true`。

```js
const app = {
  name: "App",
  components: { AsyncShow, GirlShow },
  setup() {
    onErrorCaptured((error) => {
      console.log(`error====>`,error)
      return true  
    })
    return {};
  },
};
```

写好后，我们故意把请求地址写错，然后打开浏览器的终端，看一下控制台已经捕获到错误了。在实际工作中，你可以根据你的真实需求，处理这些错误。