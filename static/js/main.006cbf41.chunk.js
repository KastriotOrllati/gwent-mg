(this["webpackJsonpgwent-mg"]=this["webpackJsonpgwent-mg"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(3),o=c.n(n),i=(c(11),c(12),c(6)),s=c(5),l=c(4),u=(c(13),c(0));var m=function(e){var t=e.art;return console.log("art",t),Object(u.jsx)("video",{className:"front-face",src:"img/video/".concat(t),preload:"true",autoPlay:!0,loop:!0,muted:!0,width:"128",height:"190"})};c(15);var d=function(e){var t=e.cardback;return Object(u.jsx)("img",{src:"img/".concat(t),alt:t,width:"128",height:"190",className:"back-face"})};c(16);var f=function(e){var t=Object(l.useState)([]),c=Object(s.a)(t,2),n=c[0],o=c[1];Object(a.useLayoutEffect)((function(){!function(){var e=Object(i.a)({},localStorage),t=Object.values(e);o(t)}()}),[]);var f,j,g=!1,h=!1,b=0;function v(){if(!g&&this!==f){if(this.classList.add("flip"),!h)return h=!0,void(f=this);j=this,function(){var e=f.dataset.framework===j.dataset.framework;return e?(f.removeEventListener("click",v),j.removeEventListener("click",v),void p()):function(){f&&j&&(g=!0);setTimeout((function(){f.classList.remove("flip"),j.classList.remove("flip"),p()}),1500)}(),!0===e}()&&(console.log("checkingformatch"),b++),console.log("countINSIDE",b)}}function p(){h=!1,g=!1,f=null,j=null}return console.log("countOutside",b),setTimeout((function(){document.querySelectorAll(".memory-card").forEach((function(e){return e.addEventListener("click",v)}))}),3e3),Object(u.jsxs)("div",{className:"memory-game",children:[n.map((function(e){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsxs)("div",{className:"memory-card order-"+Math.floor(4*Math.random()),"data-framework":e,children:[Object(u.jsx)(m,{art:e},e),Object(u.jsx)(d,{cardback:"cardback.png"})]})},e)})),n.map((function(e){return Object(u.jsx)(r.a.Fragment,{children:Object(u.jsxs)("div",{className:"memory-card order-"+Math.floor(2*Math.random()+2),"data-framework":e,children:[Object(u.jsx)(m,{art:e},e),Object(u.jsx)(d,{cardback:"cardback.png"})]})},e)}))]})};var j=function(){return localStorage.setItem("1","ballista.mp4"),localStorage.setItem("2","executioner.mp4"),localStorage.setItem("3","chironex.mp4"),localStorage.setItem("4","greatsword.mp4"),localStorage.setItem("5","ihuarraquax.mp4"),localStorage.setItem("6","regis.mp4"),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(f,{})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),a(e),r(e),n(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),g()}],[[17,1,2]]]);
//# sourceMappingURL=main.006cbf41.chunk.js.map