<!-- filepath: /home/geziel/projects/dotnet-vue/frontend/src/pages/LoginView.vue -->
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

const username = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

function login() {
  error.value = '';
  if (!username.value || !password.value) {
    error.value = 'Username and password are required.';
    return;
  }
  // Fake JWT token
  const fakeJwt = 'fake-jwt-token';
  // Set cookie (HttpOnly cannot be set from JS, only from server)
  Cookies.set('jwt', fakeJwt, {
    secure: true,
    sameSite: 'Strict',
    // httpOnly: true, // <-- This will be ignored by browsers if set from JS
  });
  router.push('/');
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-50">
    <form @submit.prevent="login" class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-blue-900">Login</h2>
      <div class="mb-4">
        <label class="block mb-1 text-blue-900">Username</label>
        <input v-model="username" type="text" class="w-full border rounded px-3 py-2" />
      </div>
      <div class="mb-4">
        <label class="block mb-1 text-blue-900">Password</label>
        <input v-model="password" type="password" class="w-full border rounded px-3 py-2" />
      </div>
      <div v-if="error" class="mb-4 text-red-600">{{ error }}</div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </form>
  </div>
</template>