"use strict";var precacheConfig=[["/crypto-kitties-battle-arena-landing/index.html","d951ee8b53b520c76735f2678db3ff10"],["/crypto-kitties-battle-arena-landing/static/css/main.6d95f7db.css","8a6263c0dcd1776ceefe65046b5acb9d"],["/crypto-kitties-battle-arena-landing/static/js/main.3a471a1a.js","b2bb60df7d4dc5a22d3045a94e777bdf"],["/crypto-kitties-battle-arena-landing/static/media/cat_paw.21c308f9.png","21c308f924e3b28fd7cf69114932436a"],["/crypto-kitties-battle-arena-landing/static/media/discord.9621ed2c.png","9621ed2c24e52f03bb72a1a62ff17d13"],["/crypto-kitties-battle-arena-landing/static/media/email.894ecd08.png","894ecd08fd32d0a072f6200bea9890bb"],["/crypto-kitties-battle-arena-landing/static/media/genesis.2153689f.png","2153689fe4292a86acf3a95726f3d3b3"],["/crypto-kitties-battle-arena-landing/static/media/knight_cat.aad73559.png","aad735594c30a90542d6892d2829983f"],["/crypto-kitties-battle-arena-landing/static/media/pluto.deadc38c.png","deadc38c08bc55dd287f236e075e91af"],["/crypto-kitties-battle-arena-landing/static/media/reddit.f59be7e2.png","f59be7e27b47c04e4b1795784c8ca119"],["/crypto-kitties-battle-arena-landing/static/media/twitter.1798859a.png","1798859a2b3306f3870ad3e73c232e70"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/crypto-kitties-battle-arena-landing/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});