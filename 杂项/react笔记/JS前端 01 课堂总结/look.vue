<script setup>
import { ref, onMounted } from 'vue'

// 状态声明
const count = ref(0)
const list = ref([])

// 组件声明周期的声明
onMounted(() => {
  // 网络请求
  Promise.resolve(["Ava", "Charlie"])
    .then(res => {
      list.value.push(...res)
    })
})
// 网络请求
const submit = (item) => {
  list.value.push(item)
  Promise.resolve().catch(() => {
    list.value.splice(list.value.indexOf(item), 1)
  })
}

const remove = (item) => {
  list.value.splice(list.value.indexOf(item), 1)
}
</script>

<template>
  <!-- 组件渲染 -->
  <button @click="count++">{{count}}</button>
  <ul>
    <li v-for="item of list" @click="remove(item)">{{item}}</li>
  </ul>
  <button @click="submit('david')">add</button>
</template>
