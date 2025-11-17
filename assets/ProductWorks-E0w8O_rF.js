import{r as i,c as x,j as e,u as d,P as u,S as p}from"./index-DiBZjKyR.js";const m=()=>{const[t,s]=i.useState(null),[r,o]=i.useState(!0);return i.useEffect(()=>{x.fetch(`*[_type == "howToOrder"][0]{
      title,
      steps[]{
        icon,
        title,
        description
      },
      htoButton{
        text,
        image,
        link
      },
      reviewsInfo{
        stars,
        reviewCount
      }
    }`).then(l=>{s(l),o(!1)}).catch(l=>{console.error("Sanity fetch error:",l),o(!1)})},[]),{productWorks:t,loading:r}},h=({step:t,idx:s,bgClass:r})=>e.jsxs("div",{className:`flex flex-col items-center text-center w-[288px] lg:w-full lg:max-w-[346px] aspect-[346/321] px2 md:px-8 py-[81px] rounded-lg ${r}`,children:[e.jsx("div",{children:e.jsx("img",{src:d(t.icon).width(60).url(),alt:t.title||`step-${s}`,className:"w-12 h-12 object-contain"})}),e.jsx("h3",{className:"text-[22px] leading-[40px]",children:t.title}),e.jsx("p",{className:"text-[#676869] text-[15px] leading-[23px] mt-[14px] px-2",children:t.description})]},t._key||s),g=({children:t})=>{const[s,r]=i.useState(0),[o,a]=i.useState(window.innerWidth<1024);i.useEffect(()=>{const n=()=>a(window.innerWidth<1024);return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const l=()=>{r(n=>n!==576?n+=288:576)},c=()=>{r(n=>n!==0?n-=288:0)};return e.jsxs("div",{className:"relative w-[fit-content] mt-[23px] lg:mt-[46px] mx-auto",children:[e.jsx("div",{className:"relative overflow-hidden w-[288px] h-[288px] lg:w-full lg:h-auto  rounded-lg",children:e.jsx("div",{className:"absolute lg:relative top-0 flex gap-0 lg:gap-[40px] min-w-[864px] transition-all duration-300 ease-in-out",style:{left:o?`${-s}px`:void 0},children:t})}),e.jsx("button",{onClick:c,className:"absolute left-[-20px] min-[380px]:left-[-30px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer lg:hidden","aria-label":"Previous image",children:e.jsx("svg",{className:`w-6 h-6 ${s===0?"text-[#C5C5C5]":"text-[#676869]"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:l,className:"absolute right-[-28px] min-[380px]:right-[-38px] top-1/2 transform -translate-y-1/2 p-2 z-10 cursor-pointer lg:hidden","aria-label":"Next image",children:e.jsx("svg",{className:`w-6 h-6 ${s===576?"text-[#C5C5C5]":"text-[#676869]"}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})},f=()=>{const{productWorks:t,loading:s}=m();return s?e.jsx("p",{className:"p-6 text-center",children:"Loading product works..."}):t?e.jsxs("section",{className:"w-full max-w-[1120px] mx-auto bg-white pt-[57px] md:pt-[75px] px-[14px] lg:px-[41px] overflow-hidden",children:[t.title&&e.jsx("h2",{className:"text-center",children:t.title}),e.jsx(g,{children:t.steps?.map((r,o)=>{const a=o===1?"bg-[#F9F0E6]":"bg-[#F0EEEF]";return e.jsx(h,{step:r,idx:o,bgClass:a},r._key||o)})}),e.jsx(u,{link:"#",text:t.htoButton?.text||"",classNameButton:"mt-[41px] lg:mt-[56px]"}),e.jsx(p,{stars:t.reviewsInfo?.stars??0,text:t.reviewsInfo?.reviewCount??"",className:"justify-center mt-3"})]}):e.jsx("p",{className:"p-6 text-center",children:"No product works data found"})};export{f as ProductWorks,f as default};
