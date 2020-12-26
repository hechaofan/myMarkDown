import {ref} from 'vue'

import axios from 'axios'

function useUrlAxios(url: string) {
  const loading = ref(true)
  const loaded = ref(false)
  const result = ref(null)
  const error = ref(null)
  axios.get(url).then((res) => {
    loading.value = false
    loaded.value = true
    result.value = res.data
  }).catch(e =>{
    error.value = e
    loading.value = false
  })

  return {
    result,
    loading,
    loaded,
    error
}

}

export default useUrlAxios