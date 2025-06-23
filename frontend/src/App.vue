<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <NavBar />
  <main class="bg-blue-50 min-h-screen">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped></style>
