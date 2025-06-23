<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  const authStore = useAuthStore();
  const router = useRouter();
  onMounted(() => {
    // Clear authentication state
    authStore.setAuthenticated(false);
    // Redirect to login page after 3 seconds
    setTimeout(() => {
      void router.push('/user/login');
    }, 3000);
  });
</script>

<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Logout</h1>
    <p>You have been logged out.</p>
  </div>
</template>
