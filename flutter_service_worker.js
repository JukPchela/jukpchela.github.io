'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "78081228449a41d95152a1da77adf6e9",
"index.html": "e433aa4f8dce1bf32707395d8fa3c988",
"/": "e433aa4f8dce1bf32707395d8fa3c988",
"main.dart.js": "6549d6c64ed2f85c13a10432e63360aa",
"README.md": "a6db5c6357457c224557e7f48a4f374d",
"favicon.png": "eccaa91d5ba78409eecc38b07df7324a",
"icons/Icon-192.png": "f450ec109d6966bb29faccf735650ded",
"icons/Icon-512.png": "506fd5e61cc55f753a7c8ca37a3225e4",
"manifest.json": "1489482ba998fce47d9dec616cf02f05",
".git/ORIG_HEAD": "08ae76d80e7b817008d683956ff696ac",
".git/config": "fa1c6209d1e38d7a7abfd0e34992964e",
".git/objects/95/ffb3bfb65e3ac41815a5e701869d0c5de3435a": "cf10cfe2f7838d1321c05327b520c4dd",
".git/objects/66/121f4ffedd653cbf38a4cb58f0a5295bdda3e4": "890bb1337b69c7fa803302a90e38d73e",
".git/objects/66/1a91c300bdf02944526beb3735775a2391814c": "32721b5532bb6d7c2b6be6c788999597",
".git/objects/68/ebd770d77dc21d6933de32d9e67951380fa912": "b3ae7bdb19474a7132be27dd3a9295b7",
".git/objects/57/a6a537da8abec2b2b71e841b7fff8c6c4dbad7": "79d8b539f473a6585bf4ae093a658456",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/0b/c265d372fdcce2f60e1e65edb3451c1f69ed50": "86b22c3da4bdcd1a22818899d34be69d",
".git/objects/0b/57a87e7f39afae4952815b582c2ee4ff07e5a3": "de6fa89228bb7cec03d6eb6e5e03dbc2",
".git/objects/93/21aebd7b0186b89aa23ef545ffb8f2267867f6": "968ea95e37ef91095a19f9d58d52f15e",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/34/a165656baf52d8759cc233ebd968eaaa20f1cc": "2e0ca6ae6b52b47441d216364a1d2e91",
".git/objects/02/922b31c221b5eae15986865252e4b5043e7fa8": "60525cb6c400bcb858a8c2a9a76b3d10",
".git/objects/d9/eb703ae5b7b81634cc90af3bffb9a71f0bbe0e": "2561897cd922a99a7d9a636f74b29264",
".git/objects/da/e81b3c0fa27dced2232b35fb7f57503cb9d8fd": "233e4630e0a2e66557ae5fec50ae30c4",
".git/objects/a5/0f61defcb3fae420ee6545388936da00153fdc": "fd43d7913a6a54fa7fad4c5dea53b387",
".git/objects/a5/250e9246e9dd17c3217ff3f92affcf2de033cf": "d04e2fdf52e09cc2e6b5da37b27adf2b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/8aafcf37db902c6d51152577e559acebe64493": "1bd8e71e9c14bc7018efa68ae38a1e77",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/d9515f5636a085adfbccbb8fcc77dbf4a20bc3": "d691c6c233a169f364f041e0af7cdd8f",
".git/objects/f5/6703756119f2a2e055d7dd1df41a58932a0cbb": "4194c4f20b3c7df896c9f7ca79966b86",
".git/objects/cf/81ca64b2a18f5afc9a539cce4106e7a87da733": "5f860a369c88ceb18c0283ee9eab6433",
".git/objects/c8/40d18fe45e0243d14155d6967476f79b5d0417": "485a7a0e7c0a4f39aae18a7eb3013997",
".git/objects/c1/0ab63f719cee0d6f0110ee36e2ab415fb3cf9f": "2f227063d0f7115664b8de2243ec136b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/89/afd5b603f4ef911b0a9b9945779ac4aaa4e10a": "bf122eae899be62cc137b5e520745866",
".git/objects/74/8bec06b369ef01d47464f8130dd30c5163152a": "c6f712f778df41f73b8493bdd7c1d3c0",
".git/objects/28/89a172691dd68cf962189d95b0ac644467a89a": "fe72ccb87599cceb9f64b3f8d19de42c",
".git/objects/17/a064d639a411392affaef301a4c817eda99929": "73d08c0d01fcfadcb670aa33837e967c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/dcb4589f467e60e9761b94ea2c89d0e876ce12": "df7212aae0b1b23ce3b5ef13d4a71a08",
".git/objects/75/f92f4afb3cf06b8b6297e767fde79b557732b9": "28de6b43915c168f70a946c1e59211c9",
".git/objects/72/957f607a33aebab57dee9093c7f84f525d57b8": "9176869697777ef3e50a99122f433890",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/a2d7df7e79a8dc1426e1f3105ec88a76401e43": "b71e8c2a84920c63462ef23d90395150",
".git/objects/38/87208a0640457e7afffd92e5f058959dd27be4": "6359f1fa7a3e660f4c3346edf6dae4ef",
".git/objects/6e/69975c2400a7b5fc5af1f6de73911432c09c9b": "349ea9a26589f8362398c70feb8ac902",
".git/objects/5c/d94317cf9ab1ac4ccd02ad638a9a74526a7713": "47608be48cc2c0278f9defbb87176380",
".git/objects/5c/a1e7e6f8aaaa6eefbb53c9a1ed3ba165d04ac2": "927409720b55b99cf3ae22cd26eff48b",
".git/objects/09/aa8961d320817cca0caf7b57a659769d6c3fb8": "ccd4055539d2f7bcebb9576410ca1b9f",
".git/objects/31/e47c2b6440a38e4eb008bf71c23f3e27079412": "a3f5662c9de6524d15c4bc0a96595963",
".git/objects/62/0f1d0e1c0c003f13d424404d9dfb91063ea05b": "0bee1a71b0b84b65bc2001af34d6871d",
".git/objects/54/3c68a169fb318330fcfc5e53de7d52338c9428": "4a879be56987318a5f9395a5443467c0",
".git/objects/98/8a02205cae92725e09b95d8d7f234b7c136ff0": "025137359d518abedc04be08c8dbee83",
".git/objects/30/ec95d336cc3f07cee3320550fe8093761419a4": "68bcddd1e36d6c693c2a04ca5657b738",
".git/objects/08/54eb6d319f2fb54983c9de6d36fe4fd001b648": "37c10dfb16213ecebdb85c651e5c55ed",
".git/objects/55/2cb32c53ff460002e6ec878646151928c7aff9": "e104ea75ac708c7bc295432d171442df",
".git/objects/0a/57cdb2c25e783f133f1cb0b24dd38ff0f997b3": "5bf314751bb5d2dfe7c9ad459043736f",
".git/objects/0a/5bdda0572fc13273db3cf5a7d0e1ea6bbcc469": "ba517bf53e865dcaf4ec25ed9364070a",
".git/objects/b1/0278c7a44cf307a12e2af558a3f021bfc91919": "7af42f9e190234515475483cf182fa84",
".git/objects/d2/86dbd60f13f494f901b44bb4ab90b9a3fde35c": "568cd99d879f297ba2278e5437f2a251",
".git/objects/d2/96fb4b3fb7c389145c4dcfeb7fd5f4cc969bf9": "da204ca621abc4575fa8bee88e70e730",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/55f2facbe36dfdee0705bc6fd044c4c01c5e15": "8a2b1b77164d57d5acb12b46d22a0034",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/10251dde406e7d6b8f57a4cb7890e3164aecbc": "9dd9331c806986e6545a7f27b17ecc96",
".git/objects/b9/27eeffb92994920c187c44b7fc64a023fb8b95": "c93862efc8bc5b0d0e3ae39756a67e49",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e6/b6cd36be1f8c7f8d5db8fb171565d34a8d1c99": "ec3441cb9cf60169cbdf5dc5f6288b13",
".git/objects/f0/7d3d848929b2b0cd5baf791f5e48afcd46266d": "4252ac06bf1d848425aece8c9979b14e",
".git/objects/f7/9f14204358a7f0efcda62d6aabd4fd91b2b392": "dda782c44f8c09d0a5c7d7e0c653042d",
".git/objects/fa/0e83b0440d80ea34aa8ec63e9aa5c59ec2d39b": "b7e8277689c1466082dc2351cab197fb",
".git/objects/cb/5c9253756f52b519f136cf7a97a8cf1877b264": "cd75f3cfe6212c8d1a48e81c042921a0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/eef5e4c5c51df652ddf205ace46943370fa0b0": "577c0a14e528f06e59139152274606ea",
".git/objects/79/b096439cfafeeb6a7d6d81ae7d0efc197beeb6": "bcdadb986b2da43b599d6f450a8bfc3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4a/82944249f2a2e4ea55f3dba17af572a345ae53": "92b4624f8124963fff2431b8f34df4ec",
".git/objects/23/92ad4c58d465d9d1dd3b8e45307f47af752141": "81d67d902191bbc05ed13dd9cfe85a42",
".git/objects/4f/54c7869961f5c425150d46519d7e0185457e6a": "375a41348919792617a8eec9c85c9097",
".git/objects/85/f675cee67ccd3c683c1db9b907f6b3848a9d53": "785df160cc5512c515cad13a45c6b3c5",
".git/objects/85/fa0e8f2958b6095a2832296cf8877bd0d66882": "d80048ae13f56aef1395aef1ca626006",
".git/objects/76/6bf5ba5d8d05260e15c8555b7e742d59c7ec0a": "fa541bbd2d2c094badf3531b421f40aa",
".git/objects/1c/0bd30f69fec64d9fb3c68c77d4933da7a89c31": "75072558c93e67491b50bceb146dd6c6",
".git/objects/2b/f4eb83a0553c9cb325807f99a49cc30ac98a0d": "7f6083bf610c8caa52c261b6f69034d7",
".git/objects/2b/2473f8a5fe8bfc7765584702de710590dad210": "e7e509f04824922adeda171595ea7f57",
".git/objects/78/272f79da5afd42969b40eeb8edd411b992c815": "bab8ab1b130484af5a22d42ec7bbd7e1",
".git/objects/8b/f5d07f8c4741bb86d78612131e52b8349a50df": "9617a403b1a7c4adbc659e36f410798f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6521e8faccd0495e2da16b29529a4387",
".git/logs/refs/heads/main": "c25d4e6fdb91cd1d972d2fd4e38a3029",
".git/logs/refs/remotes/origin/main": "c05537deacdfc65e7009d13b0bc42cd7",
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
".git/refs/heads/main": "08ae76d80e7b817008d683956ff696ac",
".git/refs/remotes/origin/main": "08ae76d80e7b817008d683956ff696ac",
".git/index": "7b53e7bf61c13cb5adf63c1248940f0b",
".git/COMMIT_EDITMSG": "07a163e673c35ca4801f70f534a63451",
".git/FETCH_HEAD": "7aca21a362919bb08817e1aa3dea16fb",
"assets/AssetManifest.json": "e319aa43c04aca6eea6b68f42bd0cc17",
"assets/NOTICES": "c88f179f509dfcf21f34ec3a1d4828fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/prov_1c.jpg": "4dd63872337cfed4aaf05d204cec3223",
"assets/assets/DM_logo.jpg": "fc2a9553559578146fd9f357c419411a",
"assets/assets/DM_mob.jpg": "2f3a653763151c5205ae8b15c0f3104f",
"assets/assets/MG_1c.jpg": "1153f904cb04f5de6964c582c460d716",
"assets/assets/SM_1c.jpg": "3c492eb73f337c64f469367d604f30f2",
"assets/assets/DM_1c.jpg": "7920ec86494b4129d02ca5a0db1b48aa",
"assets/assets/Reskom_logo.jpg": "f46f13a79600f1556c975c3548ae7391",
"assets/assets/SM_mob.jpg": "508d435272870cf7f21d317fdd6f60bc",
"assets/assets/SM_logo.jpg": "dd3ef5ab5f7f9c3ceb1b70dd12a6bf1f",
"assets/assets/Logo.jpg": "55a2fac46b6885f28f5e3cfd493cee3f",
"assets/assets/MG_logo.jpg": "12c6eac3fcaa36b207cd9a7d931350be",
"assets/assets/AS_logo.jpg": "a0e254a1b8d57425435932e6b39ec029",
"assets/assets/provans_logo.jpg": "13445bca03291486a10f8f52cb6293ac",
"assets/assets/MG_mob.jpg": "19964efca40a40bce7f2bdbd30e9a886"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
