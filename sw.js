// Service worker minimo: serve a Chrome per riconoscere Soldini come app installabile.
// Non salva nulla in cache, quindi ogni aggiornamento caricato si vede subito.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
