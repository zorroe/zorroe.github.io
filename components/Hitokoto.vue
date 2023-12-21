<template>
  <div
    id="description"
    @click="hitokoto">
    <div class="text-lg">{{ yan }}</div>
    <div>
      -「<strong>{{ from }}</strong
      >」
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const yan = ref('莫听穿林打叶声，何妨吟啸且徐行')
const from = ref('苏轼')

const hitokoto = () => {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText)
      yan.value = res.hitokoto
      from.value = res.from
    }
  }
  xhr.open('GET', 'https://v1.hitokoto.cn', true)
  xhr.send()
}

onMounted(() => {
  hitokoto()
})
</script>

<style scoped>
#description {
  color: white;
  cursor: default;
}
</style>
