//importScripts('/cache-polyfill.js');

this.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('elk-data').then(function(cache) {
     return cache.addAll([
       /*'/',
       '/index.html',
       '/editteam.html',
       '/firebaseModule.js',
       '/homepage.html',
       '/livegame.html',
       '/login.html',
       '/modal.js',
       '/newteam.html',
       '/showStatsBS.html',
       '/signup.html',
       '/teamroster.html',
       '/teams.html',
       '/teamschedule.html'*/
       '/index.html',
       '/showStatsBS.html'
     ]);
   })
 );
});


this.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});