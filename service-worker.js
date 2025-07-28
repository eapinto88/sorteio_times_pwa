self.addEventListener('install', function (e) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function (e) {
  // Deixe o navegador lidar com as requisições normalmente
});
