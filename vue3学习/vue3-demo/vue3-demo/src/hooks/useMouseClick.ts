import { reactive,toRefs, onMounted, onUnmounted } from "vue";

const  useMouseClick = ()=> {
  const data = reactive({
    x: 0,
    y: 0,
    mouseClick : (e: MouseEvent) => {
      data.x = e.pageX;
      data.y = e.pageY;
    }
  })
  const refData = toRefs(data)
  onMounted(() => {
    document.addEventListener("click", data.mouseClick);
  });
  onUnmounted(() => {
    document.removeEventListener("click", data.mouseClick);
  });
  return {
    ...refData
  };
}
export default useMouseClick;
