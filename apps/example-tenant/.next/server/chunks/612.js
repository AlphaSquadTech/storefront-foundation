"use strict";exports.id=612,exports.ids=[612],exports.modules={40612:(a,b,c)=>{c.r(b),c.d(b,{Promotions:()=>j});var d=c(38828),e=c(38546),f=c(55682);let g=(0,f.J1)`
  query Promotions($pageTypeId: ID!, $first: Int = 100, $after: String) {
    pages(
      first: $first
      after: $after
      filter: { pageTypes: [$pageTypeId] }
      sortBy: { field: PUBLICATION_DATE, direction: DESC }
    ) {
      edges {
        node {
          id
          title
          content
          metadata {
            key
            value
          }
        }
      }
    }
  }
`;var h=c(83318),i=c(51068);let j=async({first:a=10})=>{let b=[];try{let c=(0,h.A)(),d=await c.query({query:e.Y,errorPolicy:"all"}),f=d.data.pageTypes?.edges?.[0]?.node?.id;if(!f)return null;let i=await c.query({query:g,variables:{pageTypeId:f,first:a},errorPolicy:"all",fetchPolicy:"network-only"});b=(i.data.pages?.edges||[]).map(a=>a.node).filter(Boolean).map(a=>{let b=Object.fromEntries((a.metadata||[]).filter(a=>a?.key).map(a=>[a.key,a.value||""])),c=b["promo-image"]||"",d=b["promo-subtitle"]||"",e=b["subtitle-redirect"]||"",f=function(a){let b=(a||"").trim();if(!b)return[];let c=b.match(/^(\d+%\s+off)\s+(.+?)(!?)$/i);return c?[c[1].toUpperCase(),(c[2]+(c[3]||"")).toUpperCase()]:[b.toUpperCase()]}(a.title),{description:g,listItems:h}=function(a){if(!a)return{description:"",listItems:[]};try{let b=JSON.parse(a),c=Array.isArray(b?.blocks)?b.blocks:[],d=c.find(a=>a?.type==="paragraph"),e=(d?.data?.text||"").replace(/<[^>]*>/g,"").trim(),f=c.find(a=>a?.type==="list"),g=f?.data?.items?.map(a=>a.replace(/<[^>]*>/g,"").trim())||[];return{description:e,listItems:g}}catch{return{description:"",listItems:[]}}}(a.content);return{id:a.id,image:c,subHeading:d,headingLines:f,subtitleRedirect:e,description:g,listItems:h}}).filter(a=>a.headingLines.length>0)}catch{b=[]}return b.length?(0,d.jsx)("section",{"aria-labelledby":"promotion-heading",className:"bg-neutral-50",children:(0,d.jsx)("div",{className:"mx-auto max-w-[1536px] w-full px-4 py-16",children:(0,d.jsx)(i.PromotionSlider,{promotions:b})})}):null}}};