import{E as c,F as l,G as d,I as u,L as s,M as f,N as h,R as M,S as C,b as e,c as a,d as r,l as n,m as p,n as m}from"./chunk-SSSWIXBY.js";var v=[{path:"about",component:f},{path:"contact",component:h},{path:"countries",loadChildren:()=>import("./chunk-7OVNAMMI.js").then(t=>t.CountriesModule)},{path:"**",redirectTo:"countries"}],b=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t})}static{this.\u0275inj=e({imports:[s.forRoot(v),s]})}}return t})();var y=(()=>{class t{constructor(){this.title="03-country-spa"}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(o,w){o&1&&(n(0,"div",0)(1,"div",1),m(2,"shared-sidebar"),p(),n(3,"div",2),m(4,"router-outlet"),p()())},dependencies:[u,M]})}}return t})();var A=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t,bootstrap:[y]})}static{this.\u0275inj=e({imports:[d,b,C,c]})}}return t})();l().bootstrapModule(A).catch(t=>console.error(t));