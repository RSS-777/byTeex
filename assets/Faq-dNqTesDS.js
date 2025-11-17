import{r,c,j as e,u as x,P as o,S as d}from"./index-_OyRbmgJ.js";const m=()=>{const[t,l]=r.useState(null),[i,n]=r.useState(!0);return r.useEffect(()=>{c.fetch(`*[_type == "faq"][0]{
      title,
      questions[]{
        question,
        answer,
        isExpanded
      },
      images,
      ctaButton{
        text,
        link
      },
      reviewsInfo{
        stars,
        reviewCount
      }
    }`).then(a=>{l(a),n(!1)}).catch(a=>{console.error("Sanity fetch error:",a),n(!1)})},[]),{faq:t,loading:i}},p=({faq:t})=>{const[l,i]=r.useState(null),n=s=>{i(l===s?null:s)};return e.jsxs("div",{className:"w-full md:max-w-[630px] md:ml-[20px] lg:ml-[100px]",children:[e.jsx("h2",{className:"text-center md:text-left",children:t.title}),e.jsx("hr",{className:"h-1 border-[#EAEAEA] mt-[24px] lg:mt-[39px]"}),t.questions?.map((s,a)=>e.jsxs("div",{className:"border-b border-[#EAEAEA] mt-4 pb-[19px]",children:[e.jsxs("button",{onClick:()=>n(a),className:"w-full flex items-center justify-between text-left py-2 cursor-pointer",children:[e.jsx("h3",{className:"text-[18px] loading-{24px} flex-1 tracking-[4%]",children:s.question}),e.jsx("span",{className:"max-[380px]:mr-1 min-[380px]:mr-4 text-[31px] text-[#01005B] flex-shrink-0",children:l===a||s.isExpanded&&l===null&&a===0?"−":"+"})]}),(l===a||s.isExpanded&&l===null&&a===0)&&s.answer&&e.jsx("p",{className:"text-[14px] leading-[20px] lg:text-[15px] lg:leading-[22px] text-[#676869] tracking-[3%]",children:s.answer})]},s._key||a))]})},u=({images:t})=>!t||t.length===0?null:e.jsx("div",{className:"relative w-full max-w-[430px] aspect-[2/3] hidden md:block lg:mr-[25px] xl:mr-[69px] flex-shrink: 1",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"relative w-[52.7%] h-[55%]",children:[e.jsx("div",{className:"absolute left-[-22%] top-[-17%] w-[65.6%] h-[52.6%] bg-gradient-to-t from-[#F9F0E5] to-[#F9F0E54F]"}),e.jsx("img",{src:x(t?.[0]).width(227).url(),alt:"FAQ image",className:"absolute top-0 left-0 w-full h-full object-contain z-10"}),e.jsx("img",{src:x(t?.[2]).width(216).url(),alt:"FAQ image",className:"absolute left-[-35%] bottom-[-32%] w-[95%] object-contain"}),e.jsx("img",{src:x(t?.[1]).width(167).url(),alt:"FAQ image",className:"absolute top-[-38%] right-[-36%] w-[73.5%] aspect-[167/253] object-contain"}),e.jsx("div",{className:"absolute right-[-28%] bottom-[-10%] w-[59%] h-[53%] bg-gradient-to-t from-[#F9F0E5] to-[#F9F0E54F]"})]})})}),h=()=>{const{faq:t,loading:l}=m();return l?e.jsx("p",{className:"p-6 text-center",children:"Loading FAQ..."}):t?e.jsxs("section",{className:"w-full bg-white pt-[59px] lg:pt-[109px] px-[20px]",children:[e.jsxs("div",{className:"md:flex lg:flex-row justify-end items-start gap-[88px] px-2 min-[380px]:px-4",children:[e.jsx(p,{faq:t}),e.jsx(u,{images:t.images})]}),e.jsxs("div",{className:"block md:hidden mt-[39px]",children:[e.jsx(o,{link:t.ctaButton?.link||"#",text:t.ctaButton?.text||"Learn More"}),e.jsx(d,{stars:t.reviewsInfo?.stars||0,text:t.reviewsInfo?.reviewCount||"",className:"mt-[12px] justify-center"})]})]}):e.jsx("p",{className:"p-6 text-center",children:"No FAQ data found"})};export{h as Faq,h as default};
