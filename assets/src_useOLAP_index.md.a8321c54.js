var s=Object.assign;import{G as n,q as a,j as e,k as t,h as o,e as u,o as c,c as p,r as i,b as r,w as l,a as C}from"./app.c662477d.js";import{O as E,C as d}from"./type.8a3e583f.js";const D={"=":(s,n)=>s===n,">":(s,n)=>s>n,"<":(s,n)=>s<n,">=":(s,n)=>s>=n,"<=":(s,n)=>s<=n,"!=":(s,n)=>s!==n};function m(c,p={}){t(c)||(c=u(c)),p.columns||(p.columns=e((()=>{var s;return Object.keys(null!=(s=c.value[0])?s:[]).reduce(((s,n)=>(s[n]=n,s)),{})}))),t(p.columns)||(p.columns=u(p.columns));const i=function(t,o){const u=a({list:[],cur:{field:"",operator:E.等于,value:""}}),c=e((()=>o.value)),p=E,i=e((()=>u.cur.field?Array.from(new Set(t.value.map((s=>s[u.cur.field])).filter((s=>void 0!==s)))):[]));function r(){u.cur.field="",u.cur.operator=E.等于,u.cur.value=""}const l=e((()=>u.cur.field&&u.cur.operator&&u.cur.value));return s(s({},n(u)),{fieldOptions:c,operatorOptions:p,valueOptions:i,resetFilter:r,canAddFilter:l,addFilter:function(){l.value&&(u.list.push({field:u.cur.field,operator:u.cur.operator,value:u.cur.value}),r())}})}(c,p.columns),{cubeSettings:r,cubeOptions:l}=function(n,u={},c={}){var p;const i=a({dimension:c.dimension,measure:c.measure,series:c.series,countField:null!=(p=c.countField)?p:d}),r=e((()=>u.dimensions?t(u.dimensions)?u.dimensions.value:u.dimensions:n.value)),l=e((()=>u.measures?t(u.measures)?u.measures.value:u.measures:s({[d]:"次数"},n.value))),C=e((()=>u.series?t(u.series)?u.series.value:u.series:n.value));o(r,(()=>{var s;i.dimension&&r.value[i.dimension]||(i.dimension=Object.keys(null!=(s=r.value)?s:{})[0])}),{immediate:!0}),o(l,(()=>{var s;i.measure&&l.value[i.measure]||(i.measure=Object.keys(null!=(s=l.value)?s:{})[0])}),{immediate:!0}),o(C,(()=>{var s;i.series&&C.value[i.series]||(i.series=Object.keys(null!=(s=C.value)?s:{})[0])}),{immediate:!0});const E=e((()=>({dimension:r.value,measure:l.value,series:C.value})));return{cubeSettings:i,cubeOptions:E}}(p.columns,p.options,p.defaultValues),{cubeD1:C,cubeD2:m,chartCubeD1:F,chartCubeD2:k}=function(s,n,a){function t(s,n,a,e,t){s[n]?s[n]+=e===t?1:Number(a[e])||0:s[n]=e===t?1:Number(a[e])||0}const o=e((()=>s.value.filter((s=>{for(const{field:a,operator:e,value:t}of n.value)if(!(0,D[e])(s[a],t))return!1;return!0})))),u=e((()=>{const{measure:s,series:n,countField:e}=a;if(!s||!n)return[];let u=[];const c={};for(const a of o.value)n in a&&t(c,a[n],a,s,e);for(const a in c)u.push({[n]:a,[s]:c[a]});return u=u.sort(((s,a)=>s[n]<a[n]?-1:1)),u})),c=e((()=>{const{dimension:s,measure:n,series:e,countField:u}=a;if(!n||!e||!s)return[];let c=[];const p={};for(const a of o.value){if(!(s in a))continue;const n=a[s];p[n]?p[n].push(a):p[n]=[a]}for(const a in p){const o={};for(const s of p[a])t(o,s[e],s,n,u);for(const t in o)c.push({[s]:a,[e]:t,[n]:o[t]})}return c=c.sort(((n,a)=>n[s]<a[s]?-1:1)),c})),p=e((()=>{const{series:s,measure:n}=a;return{columns:[s,n],rows:u.value}})),i=e((()=>{const{dimension:s,series:n,measure:e}=a,t=[s],o=Array.from(new Set(c.value.map((s=>s[n]))));t.push(...o);let u=c.value;const p={};for(const a of u){const t=a[s],o=a[n],u=a[e];p[t]?p[t][o]=u:p[t]={[s]:t,[o]:u}}return u=Object.values(p),{columns:t,rows:u}}));return{cubeD1:u,cubeD2:c,chartCubeD1:p,chartCubeD2:i}}(c,i.list,r);return{cubeD1:C,cubeD2:m,chartCubeD1:F,chartCubeD2:k,columns:p.columns,cubeSettings:r,cubeOptions:l,filter:i}}const F=[{date:"2020-08-08",name:"d",age:22,action:"pull",score:17},{date:"2020-08-05",name:"a",age:18,action:"push",score:13},{date:"2020-08-05",name:"b",age:20,action:"pull",score:0},{date:"2020-08-05",name:"c",age:24,action:"push",score:4},{date:"2020-08-05",name:"d",age:22,action:"pull",score:3},{date:"2020-08-06",name:"a",age:18,action:"pull",score:-3},{date:"2020-08-06",name:"d",age:22,action:"push",score:9},{date:"2020-08-07",name:"b",age:20,action:"pull",score:15},{date:"2020-08-07",name:"c",age:24,action:"push",score:0},{date:"2020-08-08",name:"a",age:18,action:"push",score:1},{date:"2020-08-09",name:"a",age:18,action:"push"}];var k={setup(){const{cube:s,cubeSettings:n}=m(F);return{cube:s,cubeSettings:n}}};k.render=function(s,n,a,e,t,o){return c(),p("div")};const h={components:{demo28:k}},v='{"title":"useDocumentVisibility","description":"","frontmatter":{"map":{"realPath":"src/useOLAP/index.md"}},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":3,"title":"基本用法","slug":"基本用法"},{"level":3,"title":"参数","slug":"参数"}],"relativePath":"src/useOLAP/index.md","lastUpdated":1616136599059}',f=C('<h1 id="usedocumentvisibility"><a class="header-anchor" href="#usedocumentvisibility" aria-hidden="true">#</a> useDocumentVisibility</h1><p>分析多维数据的 hooks。</p><h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2><h3 id="基本用法"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>',4),g=C('<h3 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th style="text-align:right;">说明</th><th style="text-align:right;">类型</th><th style="text-align:right;">值</th></tr></thead><tbody><tr><td>documentVisibility</td><td style="text-align:right;">判断 document 是否在是否处于可见状态</td><td style="text-align:right;">string</td><td style="text-align:right;">&#39;visible&#39; | &#39;hidden&#39; | &#39;prerender&#39; | undefined</td></tr></tbody></table>',2);h.render=function(s,n,a,e,t,o){const u=i("demo28"),C=i("demo");return c(),p("div",null,[f,r("p",null,[r(C,{src:"./demo/demo.vue",language:"vue",title:"基本用法",desc:"分析多维数据",componentName:"demo28",htmlStr:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20useOLAP%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'ahooks-vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20data%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'.%2Fdata'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20cube%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20cubeSettings%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EuseOLAP%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Edata%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20cube%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20cubeSettings%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStr:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%3E%0Aimport%20%7B%20useOLAP%20%7D%20from%20'ahooks-vue'%3B%0Aimport%20%7B%20data%20%7D%20from%20'.%2Fdata'%3B%0A%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20%7B%20cube%2C%20cubeSettings%20%7D%20%3D%20useOLAP(data)%3B%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20cube%2C%0A%20%20%20%20%20%20cubeSettings%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%3C%2Fscript%3E%0A"},{default:l((()=>[r(u)])),_:1})]),g])};export default h;export{v as __pageData};
