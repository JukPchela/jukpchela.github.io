'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "78081228449a41d95152a1da77adf6e9",
"index.html": "e1c00b203da9b2d320ff594bd2ec5fb8",
"/": "e1c00b203da9b2d320ff594bd2ec5fb8",
"main.dart.js": "7063bed7d546cdca106df3991c5590f4",
"README.md": "a6db5c6357457c224557e7f48a4f374d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "93329e93bbcd278114d50a72666c9f1e",
".git/ORIG_HEAD": "e4ff96b7063a00c6748cd5f6aee15ddf",
".git/config": "fa1c6209d1e38d7a7abfd0e34992964e",
".git/objects/95/ffb3bfb65e3ac41815a5e701869d0c5de3435a": "cf10cfe2f7838d1321c05327b520c4dd",
".git/objects/66/1a91c300bdf02944526beb3735775a2391814c": "32721b5532bb6d7c2b6be6c788999597",
".git/objects/57/a6a537da8abec2b2b71e841b7fff8c6c4dbad7": "79d8b539f473a6585bf4ae093a658456",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/da/e81b3c0fa27dced2232b35fb7f57503cb9d8fd": "233e4630e0a2e66557ae5fec50ae30c4",
".git/objects/a5/250e9246e9dd17c3217ff3f92affcf2de033cf": "d04e2fdf52e09cc2e6b5da37b27adf2b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/74/8bec06b369ef01d47464f8130dd30c5163152a": "c6f712f778df41f73b8493bdd7c1d3c0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/f92f4afb3cf06b8b6297e767fde79b557732b9": "28de6b43915c168f70a946c1e59211c9",
".git/objects/72/957f607a33aebab57dee9093c7f84f525d57b8": "9176869697777ef3e50a99122f433890",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/a2d7df7e79a8dc1426e1f3105ec88a76401e43": "b71e8c2a84920c63462ef23d90395150",
".git/objects/6e/69975c2400a7b5fc5af1f6de73911432c09c9b": "349ea9a26589f8362398c70feb8ac902",
".git/objects/5c/a1e7e6f8aaaa6eefbb53c9a1ed3ba165d04ac2": "927409720b55b99cf3ae22cd26eff48b",
".git/objects/31/e47c2b6440a38e4eb008bf71c23f3e27079412": "a3f5662c9de6524d15c4bc0a96595963",
".git/objects/54/3c68a169fb318330fcfc5e53de7d52338c9428": "4a879be56987318a5f9395a5443467c0",
".git/objects/0a/5bdda0572fc13273db3cf5a7d0e1ea6bbcc469": "ba517bf53e865dcaf4ec25ed9364070a",
".git/objects/d2/96fb4b3fb7c389145c4dcfeb7fd5f4cc969bf9": "da204ca621abc4575fa8bee88e70e730",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/a8/55f2facbe36dfdee0705bc6fd044c4c01c5e15": "8a2b1b77164d57d5acb12b46d22a0034",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cb/5c9253756f52b519f136cf7a97a8cf1877b264": "cd75f3cfe6212c8d1a48e81c042921a0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/23/92ad4c58d465d9d1dd3b8e45307f47af752141": "81d67d902191bbc05ed13dd9cfe85a42",
".git/objects/4f/54c7869961f5c425150d46519d7e0185457e6a": "375a41348919792617a8eec9c85c9097",
".git/objects/2b/f4eb83a0553c9cb325807f99a49cc30ac98a0d": "7f6083bf610c8caa52c261b6f69034d7",
".git/objects/8b/f5d07f8c4741bb86d78612131e52b8349a50df": "9617a403b1a7c4adbc659e36f410798f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f7ea41666b7813b59474242bcb3ae44",
".git/logs/refs/heads/main": "d500b13d0b2ba1b45edcd9e893e797d6",
".git/logs/refs/remotes/origin/main": "fc72330e4541fc3bc24d921629142a14",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "e4ff96b7063a00c6748cd5f6aee15ddf",
".git/refs/remotes/origin/main": "e4ff96b7063a00c6748cd5f6aee15ddf",
".git/index": "93544e7dd7f8234912e72a353a79e374",
".git/COMMIT_EDITMSG": "f76ad2be5f7916d22461abc59db2c43a",
".git/FETCH_HEAD": "6dbf9fff8a1c5cfce6575ba3c12775f5",
"assets/AssetManifest.json": "ff99ed0a424da99418d6b6073a6252c0",
"assets/NOTICES": "7572014d652b04ae9ddc6d4ca33d3f4c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/Logo.jpg": "55a2fac46b6885f28f5e3cfd493cee3f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
