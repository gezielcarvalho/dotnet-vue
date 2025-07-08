import { useAuthStore } from '../stores/auth';

// Get the correct API base URL based on environment
function getApiBaseUrl(): string {
  // Client-side (browser)
  if (typeof window !== 'undefined') {
    return '/api'; // Use proxy in development, or configure for production
  }

  // Server-side (SSR)
  const apiHost = process.env.VITE_API_HOST || 'http://backend';
  const apiPort = process.env.VITE_API_PORT || '5000';
  return `${apiHost}:${apiPort}/api`;
}

export async function apiFetch(input: RequestInfo, init?: RequestInit) {
  // Convert relative URLs to absolute for SSR
  let url = input;
  if (typeof input === 'string' && input.startsWith('/api')) {
    const baseUrl = getApiBaseUrl();
    url = input.replace('/api', baseUrl);
  }

  const res = await fetch(url, { ...init, credentials: 'include' });
  if (res.status === 401 || res.status === 403) {
    useAuthStore().setAuthenticated(false);
    if (typeof window !== 'undefined') {
      window.location.href = '/user/login';
    }
    throw new Error('Unauthorized');
  }
  return res;
}
