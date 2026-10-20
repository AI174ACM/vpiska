// Служебный работник прототипа «Вписка»: кладёт страницу и шрифты в кэш, чтобы приложение открывалось без сети,
// а при наличии сети берёт свежую версию страницы и данных.
const V = 'vpiska-20261020-1254';
const SHELL = ['./', 'index.html', 'data.js', 'manifest.webmanifest', 'icon-180.png', 'icon-512.png', 'fonts/fonts.css',
  'fonts/InterTight-400-cyrillic.woff2', 'fonts/InterTight-400-latin.woff2'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  const fresh = /index\.html$|\/$|data\.js$|sw\.js$/.test(u.pathname);
  if (fresh) {
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(x => { const c = x.clone(); caches.open(V).then(y => y.put(e.request, c)); return x; })));
  }
});
