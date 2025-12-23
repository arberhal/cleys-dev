// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Nur Homepage erlauben
  if (event.url.pathname !== '/') {
    throw redirect(307, '/');
  }

  const response = await resolve(event);

  // Charset-Fix beibehalten
  const contentType = response.headers.get('Content-Type');
  if (contentType && !contentType.includes('charset')) {
    response.headers.set('Content-Type', `${contentType}; charset=UTF-8`);
  } else if (!contentType) {
    response.headers.set('Content-Type', 'text/html; charset=UTF-8');
  }

  return response;
};
