import { ADMIN_API_URL } from '../constants/api';

const buildAuthHeader = (username: string, password: string) => ({
  Authorization: `Basic ${btoa(`${username}:${password}`)}`,
});

const buildUrl = (page: string) => {
  const params = new URLSearchParams({ file: page });
  return `${ADMIN_API_URL || ''}/admin/auth/secret/config?${params.toString()}`;
};

const handleResponse = async (response: Response) => {
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(payload?.error || 'Unexpected server error');
  }
  return payload;
};

export async function loadPageConfig(page: string, username: string, password: string) {
  const response = await fetch(buildUrl(page), {
    headers: buildAuthHeader(username, password),
  });
  const result = await handleResponse(response);
  return result?.config;
}

export async function savePageConfig(
  page: string,
  username: string,
  password: string,
  content: any,
  options?: { commit?: boolean; commitMessage?: string },
) {
  const response = await fetch(`${ADMIN_API_URL || ''}/admin/auth/secret/config`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...buildAuthHeader(username, password),
    },
    body: JSON.stringify({
      file: page,
      content,
      commit: Boolean(options?.commit),
      commitMessage: options?.commitMessage,
    }),
  });
  return handleResponse(response);
}
