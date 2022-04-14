;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_devo',
  urlsToCache = [
    './img',
    'https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans',
    'https://fonts.gstatic.com/s/raleway/v12/1Ptrg8zYS_SKggPNwJYtWqZPAA.woff2',
    'https://use.fontawesome.com/releases/v5.0.7/css/all.css',
    'https://use.fontawesome.com/releases/v5.0.6/webfonts/fa-brands-400.woff2',

    'assets/vendor/jquery/jquery.min.js',
    'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',

    'assets/vendor/jquery.easing/jquery.easing.min.js',
    'assets/vendor/waypoints/jquery.waypoints.min.js',
    'assets/vendor/counterup/jquery.counterup.min.js',
    'assets/vendor/owl.carousel/owl.carousel.min.js',
    'assets/vendor/typed.js/typed.min.js',
,    'assets/vendor/venobox/venobox.min.js',
    
    './style.css',
    './script.js',
    './main.js',
    './moon.js'
   
   
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
    e.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => {
          return cache.addAll(urlsToCache)
            .then(() => self.skipWaiting())
        })
        .catch(err => console.log('Falló registro de cache', err))
    )
  })
  
  //una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
  self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME]
  
    e.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames.map(cacheName => {
              //Eliminamos lo que ya no se necesita en cache
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName)
              }
            })
          )
        })
        // Le indica al SW activar el cache actual
        .then(() => self.clients.claim())
    )
  })
  
  //cuando el navegador recupera una url
  self.addEventListener('fetch', e => {
    //Responder ya sea con el objeto en caché o continuar y buscar la url real
    e.respondWith(
      caches.match(e.request)
        .then(res => {
          if (res) {
            //recuperar del cache
            return res
          }
          //recuperar de la petición a la url
          return fetch(e.request)
        })
    )
  })