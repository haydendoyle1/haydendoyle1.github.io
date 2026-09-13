```javascript
const CACHE_NAME = "yd-esp32-controller-v1";

const APP_FILES = [
    "./",
    "./index.html",
    "./manifest.json"
];


/*
 * ============================================================
 * INSTALL
 * ============================================================
 *
 * Cache the application shell when the PWA is first loaded.
 */

self.addEventListener("install", event => {

    event.waitUntil(

        caches
            .open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(APP_FILES);

            })
            .then(() => {

                return self.skipWaiting();

            })

    );

});


/*
 * ============================================================
 * ACTIVATE
 * ============================================================
 *
 * Remove old versions of the cache.
 */

self.addEventListener("activate", event => {

    event.waitUntil(

        caches
            .keys()
            .then(cacheNames => {

                return Promise.all(

                    cacheNames
                        .filter(
                            cacheName =>
                                cacheName !== CACHE_NAME
                        )
                        .map(
                            cacheName =>
                                caches.delete(cacheName)
                        )

                );

            })
            .then(() => {

                return self.clients.claim();

            })

    );

});


/*
 * ============================================================
 * FETCH
 * ============================================================
 *
 * Use the cached application first.
 *
 * If a file isn't cached, try the network and then
 * save the result for future offline use.
 */

self.addEventListener("fetch", event => {

    /*
     * We only want to handle GET requests.
     */

    if (event.request.method !== "GET") {
        return;
    }


    event.respondWith(

        caches
            .match(event.request)
            .then(cachedResponse => {

                /*
                 * Return cached file if available.
                 */

                if (cachedResponse) {
                    return cachedResponse;
                }


                /*
                 * Otherwise try the network.
                 */

                return fetch(event.request)

                    .then(networkResponse => {

                        /*
                         * Only cache successful responses.
                         */

                        if (
                            networkResponse &&
                            networkResponse.status === 200 &&
                            networkResponse.type === "basic"
                        ) {

                            const responseCopy =
                                networkResponse.clone();

                            caches
                                .open(CACHE_NAME)
                                .then(cache => {

                                    cache.put(
                                        event.request,
                                        responseCopy
                                    );

                                });
                        }


                        return networkResponse;

                    })

                    .catch(() => {

                        /*
                         * If offline and the requested resource
                         * isn't cached, return the main application.
                         */

                        return caches.match(
                            "./index.html"
                        );

                    });

            })

    );

});
```
