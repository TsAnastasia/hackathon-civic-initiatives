"use strict";(self.webpackChunkreact_ts_scss_template=self.webpackChunkreact_ts_scss_template||[]).push([[740],{9623:(t,n,e)=>{e.d(n,{Z:()=>a});var r=e(7537),o=e.n(r),i=e(3645),s=e.n(i)()(o());s.push([t.id,'.vdvaMW7c6GnJWrdbLbOn{margin:25px 20px 0;font-family:"Roboto";font-style:normal;font-weight:700;font-size:28px;line-height:32px;color:#19488e}\n',"",{version:3,sources:["webpack://./src/components/PageTitle/pageTitle.module.scss"],names:[],mappings:"AAAA,sBACE,kBAAmB,CAEnB,oBAAqB,CACrB,iBAAkB,CAClB,eAAgB,CAChB,cAAe,CACf,gBAAiB,CAEjB,aAAc",sourcesContent:['.title {\r\n  margin: 25px 20px 0;\r\n\r\n  font-family: "Roboto";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 28px;\r\n  line-height: 32px;\r\n\r\n  color: #19488e;\r\n}\r\n'],sourceRoot:""}]),s.locals={title:"vdvaMW7c6GnJWrdbLbOn"};const a=s},8516:(t,n,e)=>{e.d(n,{Z:()=>C});var r=e(4184),o=e.n(r),i=e(2942),s=e(3379),a=e.n(s),l=e(7795),c=e.n(l),u=e(569),f=e.n(u),d=e(3565),m=e.n(d),A=e(9216),v=e.n(A),h=e(4589),p=e.n(h),g=e(9623),y={};y.styleTagTransform=p(),y.setAttributes=m(),y.insert=f().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=v(),a()(g.Z,y);const b=g.Z&&g.Z.locals?g.Z.locals:void 0;var x=e(5893);const C=function(t){var n=t.children,e=t.className;return(0,i.Z)(n),(0,x.jsx)("h1",{className:o()(b.title,e),children:n})}},2942:(t,n,e)=>{e.d(n,{Z:()=>o});var r=e(7294),o=function(t){(0,r.useEffect)((function(){var t=document.title;return function(){document.title=t}}),[]),(0,r.useEffect)((function(){document.title=t}),[t])}},9740:(t,n,e)=>{e.r(n),e.d(n,{default:()=>A});var r=e(7294),o=e(4718),i=e(7638),s=e(646),a=e(4389),l=e(8516),c=e(9346),u=e(180),f=e(5893);function d(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i=[],s=!0,a=!1;try{for(e=e.call(t);!(s=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);s=!0);}catch(t){a=!0,o=t}finally{try{s||null==e.return||e.return()}finally{if(a)throw o}}return i}}(t,n)||function(t,n){if(t){if("string"==typeof t)return m(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,n):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}const A=function(){var t=d((0,r.useState)(void 0),2),n=t[0],e=t[1],m=d((0,r.useState)(void 0),2),A=m[0],v=m[1],h=d((0,r.useState)(!1),2),p=h[0],g=h[1],y=(0,c.C)((function(t){return t.user})),b=y.user_categories,x=y.data;return(0,r.useEffect)((function(){g(!0),setTimeout((function(){var t=o.s.getIntiatives({region:x.region,categories:b.length>0?b:void 0,has_closed:!0});e(t.filter((function(t){return"closed"!==t.status}))),v(t.filter((function(t){return"closed"===t.status}))),g(!1)}),u.z)}),[b,x]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{children:"Мой район"}),(0,f.jsx)(i.Z,{}),(0,f.jsx)(a.Z,{initiatives:n,title:"Активные",loaded:p}),(0,f.jsx)(a.Z,{initiatives:A,title:"Закрытые",loaded:p}),(0,f.jsx)(s.Z,{})]})}}}]);
//# sourceMappingURL=740.bundle.js.map