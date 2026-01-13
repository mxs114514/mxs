<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="container bg-gray-50 dark:bg-gray-900 min-h-screen pt-20">
    <h1 class="text-3xl font-bold mb-8">Hello Vue 3 + TypeScript!</h1>
    <div class="card p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md inline-block">
      <button
        type="button"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        @click="count++"
      >
        count is {{ count }}
      </button>
      <p class="mt-4 text-gray-600 dark:text-gray-400">
        Edit
        <code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">src/views/HomeView.vue</code>
        to test HMR
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
</style>
