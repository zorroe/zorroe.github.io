import{d as m,r as u,o as b,t as i,v as r,x as t,y as f,L as v,B as g,_ as l,C as x,D as k,z as a,A as $,T as y,M as L,N as S,O as B}from"./entry.3e8caab4.js";const C={class:"text-lg"},I=m({__name:"Hitokoto",setup(e){const s=u("莫听穿林打叶声，何妨吟啸且徐行"),c=u("苏轼"),_=()=>{const o=new XMLHttpRequest;o.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var n=JSON.parse(this.responseText);s.value=n.hitokoto,c.value=n.from}},o.open("GET","https://v1.hitokoto.cn",!0),o.send()};return b(()=>{_()}),(o,n)=>(i(),r("div",{id:"description",onClick:_},[t("div",C,f(v(s)),1),t("div",null,[g(" -「"),t("strong",null,f(v(c)),1),g("」 ")])]))}});const T=l(I,[["__scopeId","data-v-2fbc0d77"]]);const H={},d=e=>(x("data-v-157dc779"),e=e(),k(),e),R={class:"flex gap-4 mt-4"},z=d(()=>t("div",{class:"button"},"首页",-1)),N=d(()=>t("div",{class:"button"},"博客",-1)),U=d(()=>t("div",{class:"button"},"简历",-1)),D=d(()=>t("div",{class:"button"},"关于",-1)),M=[z,N,U,D];function q(e,s){return i(),r("div",R,M)}const E=l(H,[["render",q],["__scopeId","data-v-157dc779"]]),V=""+new URL("github.06bde3cb.svg",import.meta.url).href,j=""+new URL("bilibili.8fdb5142.svg",import.meta.url).href,F=""+new URL("xlog.35bfad5f.svg",import.meta.url).href,G=""+new URL("mail.d8df86df.svg",import.meta.url).href,O={class:"flex gap-8 mt-4"},X=m({__name:"SLink",setup(e){const s=()=>{},c=()=>{},_=()=>{},o=()=>{console.log("发送邮件给我")};return(n,h)=>(i(),r("div",O,[t("a",{href:"https://github.com/zorroe",target:"_blank"},[t("img",{class:"link",onClick:s,src:V})]),t("a",{href:"https://space.bilibili.com/39139616",target:"_blank"},[t("img",{class:"link",onClick:c,src:j})]),t("a",{href:"https://zorroe-2500.xlog.app/",target:"_blank"},[t("img",{class:"link",onClick:_,src:F})]),t("a",{href:"mailto:1318753541@qq.com",target:"_blank"},[t("img",{class:"link",onClick:o,src:G})])]))}});const A=l(X,[["__scopeId","data-v-c65be264"]]),J={},K={class:"absolute -z-10 top-0 left-0 w-full h-full",src:"https://bing.img.run/rand.php",alt:"随机获取Bing壁纸"};function P(e,s){return i(),r("img",K)}const Q=l(J,[["render",P]]),W=""+new URL("avatar.b0a78d8e.jpg",import.meta.url).href,p=e=>(x("data-v-5eb35fcd"),e=e(),k(),e),Y={class:"w-screen h-screen pt-16 bg-black bg-opacity-70"},Z={class:"w-full flex flex-col justify-center items-center gap-4"},tt=p(()=>t("img",{class:"w-24 h-24 rounded-full",src:W},null,-1)),et=p(()=>t("div",{class:"text-white text-3xl name"},"zorroe",-1)),st=p(()=>t("div",{class:"text-white text-4xl Motto"},"Let's Code",-1)),ot=p(()=>t("div",{class:"w-1/4 border-b border-[rgba(255,255,255,0.3)]"},null,-1)),nt=m({__name:"index",setup(e){const s=u(!1);return b(()=>{s.value=!0}),(c,_)=>{const o=T,n=E,h=A,w=Q;return i(),r(L,null,[t("div",Y,[a(y,{"enter-active-class":"animate__animated meslideInDown"},{default:$(()=>[S(t("div",Z,[tt,et,st,ot,a(o),a(n),a(h)],512),[[B,s.value]])]),_:1})]),a(w)],64)}}});const _t=l(nt,[["__scopeId","data-v-5eb35fcd"]]);export{_t as default};
