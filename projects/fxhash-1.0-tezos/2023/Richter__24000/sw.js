const assets = [
  "./",
  "manifest.json",
  "icons/favicon.ico",
  "icons/icon.jpg",
  "icons/icon.png",
  "icons/screenshot.jpg",
  "main.js",
];

const key = "v3";

self.addEventListener("install", (e) =>
  e.waitUntil(caches.open(key).then((d) => d.addAll(assets)))
);

const putInCache = async (request, response) => {
  const cache = await caches.open(key);
  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  const responseFromNetwork = await fetch(request);
  putInCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((f) => f != key).map((k) => caches.delete(k)))
      )
  );
});
