import{r as e,o as t,y as i,e as s,f as o,s as n,A as r,d as l}from"./common-34d19493.js";import{i as c}from"./common-ce15c7a5.js";import{g as h}from"./common-bb12e71c.js";var a={setup(){const s=i(null);return{divRef:s,size:function(i){const s=e({width:void 0,height:void 0});return t((()=>{const e=h(i);if(!e)return;const o=new c((e=>{e.forEach((e=>{Object.assign(s,{width:e.target.clientWidth,height:e.target.clientHeight})}))}));o.observe(e),t((()=>{o.disconnect()}))})),s}(s)}}};const d={ref:"divRef",style:{border:"1px solid rgba(0, 0, 0, 0.1)",overflow:"scroll",width:"100px",height:"100px","min-height":"30px","min-width":"30px",resize:"both"}},u=r(" size.width: "),p={style:{color:"blue"}},m=o("p",null,null,-1),f=r(" size.height: "),g={style:{color:"blue"}};a.render=function(e,t,i,r,c,h){return l(),s("div",null,[o("div",d,null,512),o("p",null,[u,o("span",p,n(r.size.width),1)]),m,o("p",null,[f,o("span",g,n(r.size.height),1)])])};export{a as s};
