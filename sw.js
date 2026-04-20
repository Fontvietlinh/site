self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Bạn có thể thêm logic cache ở đây nếu muốn app chạy nhanh hơn
  e.respondWith(fetch(e.request));
});