"use strict";(self.webpackChunkreact_ts_scss_template=self.webpackChunkreact_ts_scss_template||[]).push([[838],{9623:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(7537),o=n.n(r),i=n(3645),s=n.n(i)()(o());s.push([t.id,'.vdvaMW7c6GnJWrdbLbOn{margin:25px 20px 0;font-family:"Roboto";font-style:normal;font-weight:700;font-size:28px;line-height:32px;color:#19488e}\n',"",{version:3,sources:["webpack://./src/components/PageTitle/pageTitle.module.scss"],names:[],mappings:"AAAA,sBACE,kBAAmB,CAEnB,oBAAqB,CACrB,iBAAkB,CAClB,eAAgB,CAChB,cAAe,CACf,gBAAiB,CAEjB,aAAc",sourcesContent:['.title {\r\n  margin: 25px 20px 0;\r\n\r\n  font-family: "Roboto";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 28px;\r\n  line-height: 32px;\r\n\r\n  color: #19488e;\r\n}\r\n'],sourceRoot:""}]),s.locals={title:"vdvaMW7c6GnJWrdbLbOn"};const a=s},8516:(t,e,n)=>{n.d(e,{Z:()=>C});var r=n(4184),o=n.n(r),i=n(2942),s=n(3379),a=n.n(s),l=n(7795),c=n.n(l),u=n(569),f=n.n(u),d=n(3565),m=n.n(d),A=n(9216),v=n.n(A),h=n(4589),p=n.n(h),g=n(9623),y={};y.styleTagTransform=p(),y.setAttributes=m(),y.insert=f().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=v(),a()(g.Z,y);const b=g.Z&&g.Z.locals?g.Z.locals:void 0;var x=n(5893);const C=function(t){var e=t.children,n=t.className;return(0,i.Z)(e),(0,x.jsx)("h1",{className:o()(b.title,n),children:e})}},2942:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(7294),o=function(t){(0,r.useEffect)((function(){var t=document.title;return function(){document.title=t}}),[]),(0,r.useEffect)((function(){document.title=t}),[t])}},4838:(t,e,n)=>{n.r(e),n.d(e,{default:()=>A});var r=n(7294),o=n(4718),i=n(7638),s=n(646),a=n(4389),l=n(8516),c=n(9346),u=n(180),f=n(5893);function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],s=!0,a=!1;try{for(n=n.call(t);!(s=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(t){a=!0,o=t}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const A=function(){var t=d((0,r.useState)(void 0),2),e=t[0],n=t[1],m=d((0,r.useState)(void 0),2),A=m[0],v=m[1],h=d((0,r.useState)(!1),2),p=h[0],g=h[1],y=(0,c.C)((function(t){return t.user})),b=y.user_categories,x=y.data;return(0,r.useEffect)((function(){g(!0),setTimeout((function(){var t=o.s.getIntiatives({userId:x.id,categories:b.length>0?b:void 0,has_closed:!0});n(t.filter((function(t){return"closed"!==t.status}))),v(t.filter((function(t){return"closed"===t.status}))),g(!1)}),u.z)}),[b,x]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{children:"Мои инициативы"}),(0,f.jsx)(i.Z,{}),(0,f.jsx)(a.Z,{initiatives:e,title:"Активные",loaded:p}),(0,f.jsx)(a.Z,{initiatives:A,title:"Закрытые",loaded:p}),(0,f.jsx)(s.Z,{})]})}}}]);
//# sourceMappingURL=838.bundle.js.map