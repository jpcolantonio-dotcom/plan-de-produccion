// Service worker mínimo para "¿Comés?" -- solo habilita la instalación como app (PWA). No cachea
// nada a propósito: la app siempre tiene que mostrar el estado real de Supabase, no una versión
// vieja guardada en caché.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',()=>self.clients.claim());
self.addEventListener('fetch',()=>{});
