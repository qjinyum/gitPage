"use strict";var precacheConfig=[["favicon.ico","33d46e7cf3159d286d3129c9b5feab74"],["images/0fb78da5ff63cd8ff2461f31484e0404-kakao.png","0fb78da5ff63cd8ff2461f31484e0404"],["images/10ca5feed8b0389f9ad95025489f9ff5-google.png","10ca5feed8b0389f9ad95025489f9ff5"],["images/1a6aa5c3235ebd5472c51572a71e54a2-emer.png","1a6aa5c3235ebd5472c51572a71e54a2"],["images/32ab174ac654be2d0d0d4cf6bc355d70-rest.png","32ab174ac654be2d0d0d4cf6bc355d70"],["images/6d4e6e73e2624b76bf3d83cfcb7d2f65-gyungiSponsor.png","6d4e6e73e2624b76bf3d83cfcb7d2f65"],["images/7489e451cec65a6be52527ca758e6f80-cvbSponsor.png","7489e451cec65a6be52527ca758e6f80"],["images/7d3d5d843054502b37d5dc78662e9801-event.png","7d3d5d843054502b37d5dc78662e9801"],["images/8b838eba3d3466af941fed089046b8e8-googleLogo.png","8b838eba3d3466af941fed089046b8e8"],["images/8c7d49456a26425ff20880c1b42c58f8-shop.png","8c7d49456a26425ff20880c1b42c58f8"],["images/9f5c34dd8b017b4c71b1ae64ec7f446a-tour.png","9f5c34dd8b017b4c71b1ae64ec7f446a"],["images/b5204a1d602787ba5c4351a647df23ad-goyangSponsor.png","b5204a1d602787ba5c4351a647df23ad"],["images/bab75ae615482ce2a4347b534ac1ca21-facebook.png","bab75ae615482ce2a4347b534ac1ca21"],["images/d03062718aff8af18962d8b735e4bb21-cultureSponsor.png","d03062718aff8af18962d8b735e4bb21"],["images/ea752f2554f19f256b67276d86d28a48-gccSponsor.png","ea752f2554f19f256b67276d86d28a48"],["images/f2c12f256fa9d6a7d75ea756689721f4-hotel.png","f2c12f256fa9d6a7d75ea756689721f4"],["index.html","f478f35b26dd38bba46f8c6dbe275a6c"],["index_bundle.js","1a8197030de33c73e9586a0a4b69e2a0"],["logo192.png","33dbdd0177549353eeeb785d02c294af"],["logo512.png","917515db74ea8d1aee6a246cfbcc0b45"],["manifest.json","ec9d8dc957b1d53c10a3f3229b1ae65e"]],cacheName="sw-precache-v3-gy_mice_user-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),r=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var t=new Request(n,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});