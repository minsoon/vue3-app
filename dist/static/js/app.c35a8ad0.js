(function(t){function e(e){for(var r,c,a=e[0],i=e[1],l=e[2],f=0,s=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},u=[];function c(t){return a.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"5905adaf"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(t);var l=new Error;u=function(e){i.onerror=i.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,n[1](l)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("830f"),o=n("5c40"),u=n("cf05"),c=n.n(u),a={id:"app"},i=Object(o["k"])("img",{alt:"Vue logo",src:c.a},null,-1),l={id:"nav"},f=Object(o["j"])("Home"),p=Object(o["j"])(" | "),s=Object(o["j"])("About");function b(t,e){var n=Object(o["t"])("router-link"),r=Object(o["t"])("router-view");return Object(o["r"])(),Object(o["g"])("div",a,[i,Object(o["k"])("div",l,[Object(o["k"])(n,{to:"/"},{default:Object(o["y"])((function(){return[f]})),_:1}),p,Object(o["k"])(n,{to:"/about"},{default:Object(o["y"])((function(){return[s]})),_:1})]),Object(o["k"])(r)])}var d={name:"App",mounted:function(){console.log(Object({VUE_APP_MESSAGE_URL:"https://message.thecloudgate.io",VUE_APP_BASE_URL:"https://thecloudgate.io",VUE_APP_TICKET_URL:"https://ticket.thecloudgate.io",VUE_APP_DATABASE_KEY:"CloudGateDatabase",VUE_APP_GOOGLE_ANALYTICS:"UA-144866157-1",VUE_APP_CALL_URL:"http://cti.thecloudgate.io:8081",NODE_ENV:"production",BASE_URL:"/"}))}};n("64be");d.render=b;var h=d,O=(n("d3b7"),n("8c4f")),j=Object(o["k"])("h1",null,"HOME",-1),v=Object(o["k"])("div",null," test ",-1);function m(t,e){return Object(o["r"])(),Object(o["g"])(o["c"],null,[j,v],64)}var g={name:"Home"};g.render=m;var _=g,y=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],P=Object(O["a"])({history:Object(O["b"])(),routes:y}),A=P;Object(r["a"])(h).use(A).mount("#app")},"64be":function(t,e,n){"use strict";n("98e6")},"98e6":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"static/img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c35a8ad0.js.map