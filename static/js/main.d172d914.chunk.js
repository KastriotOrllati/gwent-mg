(this["webpackJsonpgwent-mg"]=this["webpackJsonpgwent-mg"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(3),o=c.n(r),i=(c(10),c(11),c(5)),s=c(4),l=(c(12),c(0));var u=function(e){var t=e.art;return console.log("art",t),Object(l.jsx)("video",{className:"front-face",src:"img/video/".concat(t),preload:"true",autoPlay:!0,loop:!0,muted:!0,width:"128",height:"190"})};c(14);var m=function(e){var t=e.cardback;return Object(l.jsx)("img",{src:"img/".concat(t),alt:t,width:"128",height:"190",className:"back-face"})};c(15);var d=function(e){var t=Object(a.useState)([]),c=Object(s.a)(t,2),r=c[0],o=c[1];Object(a.useLayoutEffect)((function(){!function(){var e=Object(i.a)({},localStorage),t=Object.values(e);o(t)}()}),[]);var d,f,j=!1,g=!1,h=0;function b(){if(!j&&this!==d){if(this.classList.add("flip"),!g)return g=!0,void(d=this);f=this,function(){var e=d.dataset.framework===f.dataset.framework;return e?(d.removeEventListener("click",b),f.removeEventListener("click",b),void v()):function(){d&&f&&(j=!0);setTimeout((function(){d.classList.remove("flip"),f.classList.remove("flip"),v()}),1500)}(),!0===e}()&&(console.log("checkingformatch"),h++),console.log("countINSIDE",h)}}function v(){g=!1,j=!1,d=null,f=null}return console.log("countOutside",h),setTimeout((function(){document.querySelectorAll(".memory-card").forEach((function(e){return e.addEventListener("click",b)}))}),3e3),Object(l.jsxs)("div",{className:"memory-game",children:[null===r||void 0===r?void 0:r.map((function(e){return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)("div",{className:"memory-card order-"+Math.floor(4*Math.random()),"data-framework":e,children:[Object(l.jsx)(u,{art:e},e),Object(l.jsx)(m,{cardback:"cardback.png"})]})},e)})),r.map((function(e){return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)("div",{className:"memory-card order-"+Math.floor(2*Math.random()+2),"data-framework":e,children:[Object(l.jsx)(u,{art:e},e),Object(l.jsx)(m,{cardback:"cardback.png"})]})},e)}))]})};var f=function(){return localStorage.setItem("1","ballista.mp4"),localStorage.setItem("2","executioner.mp4"),localStorage.setItem("3","chironex.mp4"),localStorage.setItem("4","greatsword.mp4"),localStorage.setItem("5","ihuarraquax.mp4"),localStorage.setItem("6","regis.mp4"),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(d,{})})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),j()}],[[16,1,2]]]);
//# sourceMappingURL=main.d172d914.chunk.js.map