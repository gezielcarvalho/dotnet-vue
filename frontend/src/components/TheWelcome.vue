<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  // Health check logic
  const health = ref<null | {
    message: string;
    timestamp: string;
    instanceId: string;
  }>(null);
  const healthError = ref<string | null>(null);

  onMounted(async () => {
    try {
      const res = await fetch('/api/health');
      if (!res.ok) throw new Error('Failed to fetch health check');
      health.value = await res.json();
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
</template>
