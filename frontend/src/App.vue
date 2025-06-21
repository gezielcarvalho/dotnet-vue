<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';

  const showMenu = ref(false);

  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };
</script>

<template>
  <header class="bg-blue-100 text-blue-900">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Left: Logo + Menu -->
        <div class="flex items-center space-x-6">
          <RouterLink to="/">
            <img alt="Vue logo" class="w-10 h-10" src="src/assets/logo.svg" />
          </RouterLink>

          <div class="flex space-x-4">
            <RouterLink
              to="/"
              class="rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-200 hover:text-blue-900"
              active-class="bg-blue-300 text-blue-900"
              exact>
              Home
            </RouterLink>
            <RouterLink
              to="/about"
              class="rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-200 hover:text-blue-900"
              active-class="bg-blue-300 text-blue-900">
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              class="rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-200 hover:text-blue-900"
              active-class="bg-blue-300 text-blue-900">
              Contact
            </RouterLink>
          </div>
        </div>

        <!-- Right: Profile + submenu -->
        <div class="relative">
          <button @click="toggleMenu" class="flex items-center rounded-full p-1 hover:bg-blue-200">
            <span class="inline-block w-8 h-8 bg-blue-400 rounded-full"></span>
          </button>

          <div
            v-if="showMenu"
            class="absolute right-0 mt-2 w-48 bg-blue-50 text-blue-900 rounded-md shadow-lg py-1 z-50">
            <a href="#" class="block px-4 py-2 text-sm hover:bg-blue-100">Profile</a>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-blue-100">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-blue-100">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main class="bg-blue-50 min-h-screen">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped></style>
