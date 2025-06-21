<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter, RouterLink, RouterView } from 'vue-router';
  import logoUrl from '@/assets/logo.svg';

  const showMenu = ref(false);
  const router = useRouter();

  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };

  const navigateAndClose = (to: string) => {
    showMenu.value = false;
    void router.push(to);
  };
</script>

<template>
  <header class="bg-blue-100 text-blue-900">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Left: Logo + Menu -->
        <div class="flex items-center space-x-6">
          <RouterLink to="/">
            <img alt="Vue logo" class="w-10 h-10" :src="logoUrl" />
          </RouterLink>

          <div class="flex space-x-4">
            <RouterLink to="/" class="nav-link" active-class="nav-link-active" exact>
              Home
            </RouterLink>
            <RouterLink to="/about" class="nav-link" active-class="nav-link-active">
              About
            </RouterLink>
            <RouterLink to="/contact" class="nav-link" active-class="nav-link-active">
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
            <RouterLink
              to="/user/profile"
              class="submenu-link"
              @click.prevent="navigateAndClose('/user/profile')">
              Profile
            </RouterLink>
            <RouterLink
              to="/user/settings"
              class="submenu-link"
              @click.prevent="navigateAndClose('/user/settings')">
              Settings
            </RouterLink>
            <RouterLink
              to="/user/logout"
              class="submenu-link"
              @click.prevent="navigateAndClose('/user/logout')">
              Logout
            </RouterLink>
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
