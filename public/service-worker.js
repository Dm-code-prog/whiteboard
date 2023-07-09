// Define a unique cache name
const cacheName = 'my-app-cache-v1';

// List the files to be cached
const filesToCache = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/global.js',
  '/js/util.js'
];

// Install event - Cache the app shell and static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

// Fetch event - Serve cached assets when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
