const CACHE_NAME = "imrepair-v1";

const urlsToCache = [
    "./",
    "index.html",
    "home.html",
    "about.html",
    "booking.html",
    "status.html",
    "payments.html",
    "contact.html",
    "css/style.css",
    "js/app.js",
    "js/search.js",
    "js/phones.js",
    "images/logo.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});