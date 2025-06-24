import { apiFetch } from '../utils/api';
import { useAuthStore } from '../stores/auth';

export async function login(username: string, password: string) {
  const authStore = useAuthStore();
  try {
    const res = await apiFetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    });
    if (!res.ok) {
      const data = await res.json();
      authStore.setAuthenticated(false);
      return { success: false, error: data.error || 'Login failed' };
    }
    authStore.setAuthenticated(true);
    return { success: true };
  } catch (e: any) {
    authStore.setAuthenticated(false);
    return { success: false, error: 'Network error: ' + (e.message || 'Unknown error') };
  }
}

export function logout() {
  const authStore = useAuthStore();
  authStore.setAuthenticated(false);
  // Optionally, call a backend logout endpoint here
}
