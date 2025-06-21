<!-- filepath: /home/geziel/projects/dotnet-vue/frontend/src/pages/LoginView.vue -->
<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const username = ref('');
  const password = ref('');
  const error = ref('');
  const router = useRouter();

  async function login() {
    error.value = '';
    if (!username.value || !password.value) {
      error.value = 'Username and password are required.';
      return;
    }
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username.value, password: password.value }),
        credentials: 'include', // Important: allow cookies to be set
      });
      if (!res.ok) {
        const data = await res.json();
        error.value = data.error || 'Login failed';
        return;
      }
      void router.push('/');
    } catch (e: any) {
      error.value = 'Network error';
      console.error('Login error:', e);
    }
  }
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-50">
    <form @submit.prevent="login" class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-blue-900">Login</h2>
      <div class="mb-4">
        <label class="block mb-1 text-blue-900">Username</label>
        <input
          v-model="username"
          type="text"
          autocomplete="username"
          class="w-full border rounded px-3 py-2" />
      </div>
      <div class="mb-4">
        <label class="block mb-1 text-blue-900">Password</label>
        <input
          v-model="password"
          type="password"
          autocomplete="current-password"
          class="w-full border rounded px-3 py-2" />
      </div>
      <div v-if="error" class="mb-4 text-red-600">{{ error }}</div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  </div>
</template>
