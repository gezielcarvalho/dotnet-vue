<!-- filepath: /home/geziel/projects/dotnet-vue/frontend/src/components/UserMenu.vue -->
<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter, RouterLink } from 'vue-router';
  import { useAuthStore } from '../stores/auth';

  const showMenu = ref(false);
  const router = useRouter();
  const authStore = useAuthStore();

  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };

  const navigateAndClose = (to: string) => {
    showMenu.value = false;
    void router.push(to);
  };

  const goToLogin = () => {
    void router.push('/user/login');
  };
</script>

<template>
  <div class="relative">
    <template v-if="authStore.authenticated">
      <button @click="toggleMenu" class="user-avatar-btn">
        <span class="user-avatar"></span>
      </button>
      <div v-if="showMenu" class="user-menu-dropdown">
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
    </template>
    <template v-else>
      <button @click="goToLogin" class="submenu-link w-full text-left">Login</button>
    </template>
  </div>
</template>
