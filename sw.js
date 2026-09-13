self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('nckh-store').then((cache) => cache.addAll([
            'index.html', // File mới đã sửa
            'Untitled.glb' // File mô hình 3D chính xác
        ]))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
