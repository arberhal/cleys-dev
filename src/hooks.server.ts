// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);
    // Ensure the Content-Type header includes the charset
    const contentType = response.headers.get('Content-Type');
    if (contentType && !contentType.includes('charset')) {
        response.headers.set('Content-Type', `${contentType}; charset=UTF-8`);
    } else if (!contentType) {
        response.headers.set('Content-Type', 'text/html; charset=UTF-8');
    }
    return response;
};
