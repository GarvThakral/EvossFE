const rawAdminUrl = import.meta.env.VITE_ADMIN_API_URL;

const normalizedAdminUrl =
  typeof rawAdminUrl === 'string' && rawAdminUrl.trim().length > 0
    ? rawAdminUrl.trim().replace(/\/+$/, '')
    : '';

export const ADMIN_API_URL = normalizedAdminUrl;
