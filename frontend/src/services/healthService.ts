import { apiFetch } from '@/utils/api';

export async function getHealth() {
  const res = await apiFetch('/api/home/health');
  if (!res.ok) throw new Error('Failed to fetch health');
  return res.json();
}
