<template>
  <teleport to="#modal">
    <div id="center" v-if="isOpen">
      <h2>JSPang11</h2>
      <button @click="$emit('click-close','haha')">close</button>
    </div>
  </teleport>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  props:{
    isOpen:Boolean
  },
  emits:{
    'click-close': null
  },

})
</script>
<style>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
</style>