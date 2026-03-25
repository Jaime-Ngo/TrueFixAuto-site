

import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // If already on a lang-prefixed path, do nothing
  if (url.pathname.startsWith('/en') || url.pathname.startsWith('/es')) {
    return next();
  }

  // Only redirect from root
  if (url.pathname === '/') {
    const acceptLang = context.request.headers.get('accept-language') ?? '';
    const prefersSpanish = acceptLang.toLowerCase().startsWith('es');
    return context.redirect(prefersSpanish ? '/es/' : '/en/', 302);
  }

  return next();
});