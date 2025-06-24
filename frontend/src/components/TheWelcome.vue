<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { getHealth } from '../services/healthService';
  import { useAuthStore } from '../stores/auth';

  const { authenticated } = useAuthStore();
  interface HealthStatus {
    message: string;
    timestamp: string;
    instanceId: string;
  }

  const health = ref<HealthStatus | null>(null);
  const healthError = ref<string | null>(null);

  onMounted(async () => {
    try {
      health.value = await getHealth();
    } catch (err: any) {
      healthError.value = err.message || 'Unknown error';
    }
  });
</script>

<template>
  <!-- Health Check Display -->
  <div class="my-4 p-4 rounded bg-green-50 text-green-900 border border-green-200">
    <strong>API/Proxy Health Check:</strong>
    <template v-if="health">
      <div>{{ health.message }}</div>
      <div>
        <b>Timestamp:</b>
        {{ health.timestamp }}
      </div>
      <div>
        <b>Instance ID:</b>
        {{ health.instanceId }}
      </div>
    </template>
    <template v-else-if="healthError">
      <div class="text-red-600">Error: {{ healthError }}</div>
    </template>
    <template v-else>
      <div>Loading health status...</div>
    </template>
  </div>
  <template v-if="authenticated">
    <div class="text-gray-500">Content only for authenticated users</div>
  </template>
  <template v-else>
    <div class="text-gray-500">
      Click
      <RouterLink to="/user/login">here</RouterLink>
      to log in.
    </div>
  </template>
</template>
