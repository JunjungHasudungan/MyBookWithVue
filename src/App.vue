<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav class="justify-center mt-5 justify-center">
        <RouterLink class="px-4 mr-4 py-2 justify-item-center bg-indigo-600 hover:bg-indigo-800 text-white rounded" to="/">Home</RouterLink>
        <RouterLink class="px-4 mr-4 py-2 bg-indigo-600 hover:bg-indigo-800 text-white rounded"
        to="/posts">Post</RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen"> 
    <RouterView />
  </main>
</template>

