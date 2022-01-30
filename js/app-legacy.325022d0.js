(function(){"use strict";var n={4340:function(n,t,e){e(6992),e(8674),e(9601),e(7727);var r=e(8935),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("label",{staticClass:"input-row"},[e("span",[n._v("SS58 format:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:n.ss58format,expression:"ss58format"}],attrs:{type:"number",min:"0"},domProps:{value:n.ss58format},on:{input:function(t){t.target.composing||(n.ss58format=t.target.value)}}})]),e("label",{staticClass:"input-row"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.input,expression:"input"}],attrs:{type:"text"},domProps:{value:n.input},on:{input:function(t){t.target.composing||(n.input=t.target.value)}}}),e("button",{attrs:{type:"button"},on:{click:n.addAddress}},[n._v("Add Sora address")])]),e("table",[n._m(0),e("tbody",n._l(n.formatted,(function(t,r){return e("tr",{key:t.sora},[e("td",[n._v(n._s(r+1))]),e("td",[n._v(n._s(t.sora))]),e("td",[n._v(n._s(t.external))])])})),0)])])},i=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("thead",[e("tr",[e("th",[n._v(" # ")]),e("th",[n._v(" Sora address ")]),e("th",[n._v(" Encoded with ss58 ")])])])}],u=e(8932),a=(e(2222),e(1249),e(9524)),s=e(8505),c=["cnRWW1PFEVFwSPxR26GAwzAdEd9wTPUMb2mo84UFdMi9TASXn","cnV2oZJrm67mYwxUXVGJJeTemkau3exVznMxk3WU3i86ef5ch","cnRiXXNPdLLghaxvhe17UMMsnjuFTBuNvyCsKeA6oTi6P6LB6","cnVheACNHen8SaVVgDRFa9BzB4W9H1noLUdV27QMXpMxsKHBo","cnTYXuFbkjYwkAWUVbGB97SuULPYrNoAg3HC4oPJhFAmQVXre","cnWoDnNXgnbe1rirD1ZRL9QXPqyvZvHS32AhPbipjBuNgwfnS","cnSwnahPZtNeESeiRiyFp3ESHL9DakjsYZN98gX7bxxH3nNyV","cnVwWkJxVGA29AidvWtYaNGAgojjd6FZGLbg68YHtNY2ByDo4","cnTmFiUgUqwMEUAw6hNAfmJcFUKNF88K5hjXSK94XN5t7ZuST","cnT5RyC7g6V8LQ2LusgevB59cNkW2Fm2Xm9qvJhkp3WtgqmT8","cnXEyGDPhDkDwrWuzbFPh1BbUwQDeuRXx3bMheZcRz14Vq2Dr","cnSBiZrGPgyoKGkSovqRGcfsLSBWBE7DHEYAGDg22A6wXt6hs","cnSe6GK5EGYtD963EXN9UfFK1qmB4XunLMnngsoNYycPACNrZ","cnSr6xH3VLxccoN3VVULFpS4Vrb9dXuBW6J3WstqhR66H9icp","cnUG5YWfR8iNkL6msU3U9BL8vYS76Z2jiz4649MmdU6Dq7WYR","cnWoKcWrBubrJgMh4fCqabbVo85HHYJDnS9ZmVbS6bqEDNLc6","cnUvzULxmBi28jpfFVVBQXLdnY8kFwJc96t4n985xpX1AzfeB","cnU7UjbG5HTPDwEkMn1KaETrwDGS2nCSuMzrSe6sFXB2SfMrv","cnWtZSJUAVd4ZtqnkhbeCqoxnTEZQgapFb8vm2ixRZ5eYSFoc","cnX6yWat3jy7wHnDyGLw65DMTM4Gp3X6BCjvasdH26GCjCyWs","cnSN33HpCwZqxQ4iVf3voVUJ9jx9wPULVMXw6iVgPgkeneNtM","cnSGrAJBb3ap5FKJuQJaocYuABrHMhtpEfzdUL5v9do25efsd","cnUAzBZL9dJ2QK2ofMZx4yduPJkAhsQAQPbFCdJJxdF8qyAvw","cnWRKitqxXoNUYp1Bhp8W7AizYpMEev1E9qtT4HfPtkbHFYUV","cnTZv2S7CeEr23TbMAenHzyFUmUcVP5fEq3gEne6vuV7dtXHn","cnWFadHK6HnFQP9iKP7cDDi1jf6y4voPyzhizyAzJedqAoNoB"],d={name:"App",data:function(){return{input:"",addresses:[],ss58format:2}},computed:{allAddresses:function(){return[].concat(c,(0,u.Z)(this.addresses))},formatted:function(){var n=this;return this.allAddresses.map((function(t){return{sora:t,external:(0,a.m)((0,s.m)(t,!1),n.ss58format)}}))}},methods:{addAddress:function(){(0,s.m)(this.input,!1)&&this.addresses.push(this.input),this.input=""}}},f=d,p=e(1001),l=(0,p.Z)(f,o,i,!1,null,null,null),v=l.exports;r.Z.config.productionTip=!1,new r.Z({render:function(n){return n(v)}}).$mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return n[r](i,i.exports,e),i.loaded=!0,i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var u=1/0;for(d=0;d<n.length;d++){r=n[d][0],o=n[d][1],i=n[d][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){n.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={143:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==n[t]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(s)var d=s(e)}for(t&&t(r);c<u.length;c++)i=u[c],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(d)},r=self["webpackChunksingularity"]=self["webpackChunksingularity"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4340)}));r=e.O(r)})();
//# sourceMappingURL=app-legacy.325022d0.js.map