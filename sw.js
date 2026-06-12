const CACHE_NAME = 'space-ark-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style-new.css',
  './script-new.js',
  './icon.svg',
  './og-image.svg',
  './manifest.webmanifest',
  './robots.txt',
  './sitemap.xml'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames
        .filter(name => name !== CACHE_NAME)
        .map(name => caches.delete(name))
    ))
    .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return networkResponse;
        })
        .catch(() => caches.match('./'));
    })
  );
});
// ============ УВЕДОМЛЕНИЯ ============
self.addEventListener('push', event => {
    const lang = event.data ? event.data.text() : 'en';
    const title = lang === 'ru' ? '🚀 Space Ark ждёт тебя!'
                : lang === 'sr' ? '🚀 Space Ark te čeka!'
                : '🚀 Space Ark is waiting!';
    const body = lang === 'ru' ? 'Пора на тренировку, Командир!'
               : lang === 'sr' ? 'Vreme je za trening, Komandante!'
               : 'Time to train, Commander!';

    event.waitUntil(
        self.registration.showNotification(title, {
            body,
            icon: './icon.svg',
            badge: './icon.svg'
        })
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('./')
    );
});

// Проверка времени для уведомления
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
        const { lang, hour } = event.data;
        const now = new Date();
        const target = new Date();
        target.setHours(hour, 0, 0, 0);
        if (target <= now) target.setDate(target.getDate() + 1);
        const delay = target - now;

        setTimeout(() => {
            self.registration.showNotification(
                lang === 'ru' ? '🚀 Space Ark ждёт тебя!' 
                : lang === 'sr' ? '🚀 Space Ark te čeka!' 
                : '🚀 Space Ark is waiting!',
                {
                    body: lang === 'ru' ? 'Пора на тренировку, Командир!'
                        : lang === 'sr' ? 'Vreme je za trening, Komandante!'
                        : 'Time to train, Commander!',
                    icon: './icon.svg',
                    badge: './icon.svg'
                }
            );
        }, delay);
    }
});
`
