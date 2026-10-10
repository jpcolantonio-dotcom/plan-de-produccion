// Service worker mínimo para que "Remitos" se pueda instalar como app aparte de PAPO.
const CACHE = 'remitos-v1';
const ASSETS = [
  '/plan-de-produccion/remitos.html',
  '/plan-de-produccion/manifest-remitos.json',
  '/plan-de-produccion/icon-192.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
