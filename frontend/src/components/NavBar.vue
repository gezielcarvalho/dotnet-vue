<!-- filepath: /home/geziel/projects/dotnet-vue/frontend/src/components/NavBar.vue -->
<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, RouterLink } from 'vue-router';
  import logoUrl from '@/assets/logo.svg';
  import UserMenu from './UserMenu.vue';

  const route = useRoute();
  const hideNavbarOn = ['/user/login', '/user/logout', '/user/register'];
  const showNavbar = computed(() => !hideNavbarOn.includes(route.path));
</script>

<template>
  <header v-if="showNavbar" class="bg-blue-100 text-blue-900">
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

        <!-- Right: User menu -->
        <UserMenu />
      </div>
    </nav>
  </header>
</template>
