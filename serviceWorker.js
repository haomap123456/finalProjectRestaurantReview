let cacheName = 'restaurant-cache';

self.addEventListener('install', function (event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(cacheName)
    .then(function (cache) {
      return cache.addAll(
        [
          '/',
          './index.html',
          './restaurant.html',
          './css/styles.css',
          './js/dbhelper.js',
          './js/main.js',
          './js/restaurant_info.js',
          './data/restaurants.json',
          './img/1.jpg',
          './img/2.jpg',
          './img/3.jpg',
          './img/4.jpg',
          './img/5.jpg',
          './img/6.jpg',
          './img/7.jpg',
          './img/8.jpg',
          './img/9.jpg',
          './img/10.jpg',
        ]
      );
    })
    .then()
  );
});
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request,{ignoreSearch:true}).then(function (response) {
      return response || fetch(event.request);
    })
    .catch(function (error) {
      console.log(error, event.request);
    }));
});