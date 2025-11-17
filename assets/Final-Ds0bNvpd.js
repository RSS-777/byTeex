import{r as i,c as x,j as e,u as l,H as c,P as o,S as m}from"./index-DiBZjKyR.js";const p=()=>{const[t,s]=i.useState(null),[a,n]=i.useState(!0);return i.useEffect(()=>{x.fetch(`*[_type == "finalCTA"][0]{
      title,
      subtitle,
      mainImages,
      ctaButton{
        text,
        link,
        icon
      },
      starReviews{
        stars,
        text
      },
      shippingInfo{
        icon,
        text
      },
      paymentMethods,
      additionalBenefits[]{
        icon,
        text
      }
    }`).then(r=>{s(r),n(!1)}).catch(r=>{console.error("Sanity fetch error:",r),n(!1)})},[]),{finalCTA:t,loading:a}},d=({shippingInfo:t,paymentMethods:s})=>!t&&(!s||s.length===0)?null:e.jsxs("div",{className:"items-center justify-center mt-[13px] hidden md:flex",children:[e.jsxs("div",{className:"flex items-center gap-3 h-[17px] px-[10px] border-r-2 border-r-[#C4C4C440]",children:[e.jsx("img",{src:l(t?.icon).width(11).url(),alt:"shipping",className:"w-[11px] h-[11px]"}),e.jsx("p",{className:"text-[10px] leading-[17px] tracking-[0.04em] text-[#1FAD40]",children:t?.text})]}),e.jsx("div",{className:"w-[243px] h-[22px] px-[5px]",children:s?.map((a,n)=>e.jsx("img",{src:l(a).width(243).url(),alt:`Payment method ${n+1}`,className:"h-6 object-contain"},n))})]}),u=({additionalBenefits:t})=>t?e.jsx("div",{className:"hidden md:flex justify-center mt-[23px]",children:t?.map((s,a)=>e.jsxs("div",{className:"flex items-center gap-[12px] text-center h-[51px]  border-r border-r-[#C4C4C466] px-[20px] last:border-r-0",children:[s.icon&&e.jsx("img",{src:l(s.icon).width(33).url(),alt:s.text||`benefit-${a}`,className:"w-[33px] h-[33px] flex-shrink-0"}),s.text&&e.jsx("p",{className:"text-[#676869] text-left max-w-[120px] text-[14px] loading-[20px] tracking-[0.03em]",children:s.text})]},s._key||a))}):null,j=()=>{const{finalCTA:t,loading:s}=p();return s?e.jsx("p",{className:"p-6 text-center",children:"Loading final CTA section..."}):t?e.jsxs("section",{className:"relative w-full pt-[52px] md:pt-[84px] bg-white px-[20px] pb-[52px] md:pb-[83px]",children:[e.jsxs("div",{className:"mb-[15px] md:mb-[25px]",children:[e.jsx("h2",{className:"text-center",children:t.title}),e.jsx("p",{className:"text-[15px] loading-[22px] tracking-[0.03em] text-[#676869] text-center mt-3 max-w-[587px] mx-auto",children:t.subtitle})]}),e.jsxs("div",{className:"relative z-2",children:[e.jsx(c,{images:t.mainImages}),e.jsx(o,{link:t.ctaButton?.link||"#",text:t.ctaButton?.text||"Learn More",classNameButton:"mt-[52px]"}),e.jsx(m,{stars:t.starReviews?.stars||0,text:t.starReviews?.text||"",className:"mt-[13px] md:hidden justify-center"}),e.jsx(d,{shippingInfo:t.shippingInfo,paymentMethods:t.paymentMethods}),e.jsx(u,{additionalBenefits:t.additionalBenefits||[]})]}),e.jsx("div",{className:"absolute z-1 left-0 bottom-0 before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(360deg,#F9F0E5_0%,rgba(249,240,229,0.18)_43.05%,rgba(249,240,229,0)_100%)] h-[508px] w-full"})]}):e.jsx("p",{className:"p-6 text-center",children:"No final CTA data found"})};export{j as Final,j as default};
