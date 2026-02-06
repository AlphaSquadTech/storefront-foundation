(()=>{var a={};a.id=3749,a.ids=[3749],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},1466:(a,b,c)=>{"use strict";c.d(b,{default:()=>s});var d=c(13486),e=c(93283),f=c(89055),g=c(23450),h=c(36831),i=c(2984),j=c(60159),k=c(10716),l=c(87249),m=c(45477),n=c(30511),o=c(16437),p=c(53624),q=c(49933);c(58513);var r=c(40);function s(){let[a,b]=(0,j.useState)(null),[,c]=(0,j.useState)(null),[e,s]=(0,j.useState)(!0),[t,u]=(0,j.useState)(!1),[v,w]=(0,j.useState)(null),x=(0,i.useRouter)(),[y,z]=(0,j.useState)(!1),[,A]=(0,j.useState)("idle"),{finalizeCheckoutCleanup:B}=(0,p.o)(),{getGoogleTagManagerConfig:C}=(0,r.h)();C();let D=(0,i.useSearchParams)();D.get("saleorTransactionId"),D.get("orderId"),D.get("orderNumber");let E=process.env.NEXT_PUBLIC_API_URL;(0,j.useMemo)(()=>{if(!E)throw Error("NEXT_PUBLIC_API_URL is not defined");return new f.R({link:new g.P({uri:E,fetch}),cache:new h.D})},[E]);let F=a=>"number"in a||"userEmail"in a;return e||t?(0,d.jsx)(m.A,{className:"h-[80vh]"}):a||e?!v||e||t?(0,d.jsxs)("div",{className:"container mx-auto px-4 py-8 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-14",children:[(0,d.jsxs)("div",{className:"lg:col-span-2 lg:border-r border-[var(--color-secondary-200)] lg:pr-14",children:[(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center w-full sm:justify-between pb-6 md:pb-8 gap-4",children:[(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)("span",{className:"[&>svg]:size-8 md:[&>svg]:size-10",children:o.w}),(0,d.jsxs)("div",{className:"space-y-1",children:[(0,d.jsxs)("p",{className:"uppercase font-medium text-base md:text-xl font-secondary text-[var(--color-secondary-800)]",children:["THANK YOU,"," ",a?a.billingAddress?.firstName:"Customer","!"]}),(0,d.jsx)("p",{className:"font-normal text-xs md:text-sm font-secondary text-[var(--color-secondary-600)]",children:"YOUR ORDER HAS BEEN CONFIRMED."})]})]}),(0,d.jsxs)("div",{className:"flex items-center gap-1 cursor-pointer",children:[(0,d.jsx)(k.A,{onClick:()=>x.push("/"),className:"p-0 text-sm md:text-base",content:"CONTINUE SHOPPING",variant:"tertiary"}),(0,d.jsx)("span",{className:"size-4 md:size-5 text-[var(--color-primary-600)]",children:n.H})]})]}),(0,d.jsx)("div",{className:"p-4 md:p-6 lg:p-10 border border-[var(--color-secondary-200)]",children:a&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"grid gap-3",children:[(0,d.jsxs)("div",{className:"space-y-3 md:space-y-5",children:[(0,d.jsx)("p",{className:"text-base md:text-xl font-semibold leading-6 md:leading-7 tracking-[-0.05px] text-[var(--color-secondary-800)]",children:"ORDER DETAILS"}),(0,d.jsxs)("div",{className:"flex flex-col items-start gap-2 md:gap-3 uppercase text-[var(--color-secondary-600)] font-normal text-xs md:text-sm font-secondary",children:[(0,d.jsxs)("div",{className:"flex flex-wrap items-center gap-1",children:[(0,d.jsx)("p",{className:"text-xs md:text-sm font-normal leading-5 tracking-[-0.035px] text-[var(--color-secondary-600)]",children:"Order Number"}),(0,d.jsx)("p",{className:"text-[var(--color-secondary-800)] text-xs md:text-sm font-semibold leading-5 tracking-[-0.035px] break-all",children:F(a)&&a.number?`#${a.number}`:a.id})]}),(0,d.jsxs)("div",{className:"flex items-center gap-1",children:[(0,d.jsx)("p",{className:"text-xs md:text-sm font-normal leading-5 tracking-[-0.035px] text-[var(--color-secondary-600)]",children:"Placed on"}),(0,d.jsx)("p",{className:"text-[var(--color-secondary-800)] text-xs md:text-sm font-semibold leading-5 tracking-[-0.035px]",children:function(a){let b=a instanceof Date?a:new Date(a),c=b.getFullYear(),d=String(b.getMonth()+1).padStart(2,"0"),e=String(b.getDate()).padStart(2,"0"),f=String(b.getHours()).padStart(2,"0"),g=String(b.getMinutes()).padStart(2,"0");return`${c}-${d}-${e} ${f}:${g}`}(a.created)})]})]})]}),(0,d.jsx)("hr",{className:"border border-[var(--color-secondary-200)]"}),(0,d.jsx)("div",{className:"flex flex-col gap-4",children:(F(a)?a.lines.map(a=>({id:a.id,name:a.productName,category:a.variant.product.category?.name||"Uncategorized",thumbnail:a.thumbnail,quantity:a.quantity,totalPrice:a.totalPrice})):a.lines.map(a=>({id:a.id,name:a.variant.product.name,category:a.variant.product.category?.name||"Uncategorized",thumbnail:a.variant.product.thumbnail,quantity:a.quantity,totalPrice:a.totalPrice}))).map(a=>(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-5",children:[(0,d.jsxs)("div",{className:"flex items-center gap-3 sm:gap-4",children:[(0,d.jsx)("div",{className:"relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-md overflow-hidden",children:(0,d.jsx)(q.default,{src:a?.thumbnail?.url||"/no-image-avail-large.png",alt:a?.thumbnail?.alt||"Product Image",className:"object-contain w-full h-full",width:100,height:100})}),(0,d.jsxs)("div",{className:"flex flex-col gap-1 flex-1 min-w-0",children:[(0,d.jsx)("span",{className:"text-xs sm:text-sm font-normal leading-5 tracking-[-0.035px] text-[var(--color-secondary-600)]",children:a.category}),(0,d.jsx)("span",{className:"font-medium text-sm sm:text-base md:text-lg leading-tight line-clamp-2",children:a.name}),(0,d.jsxs)("span",{children:[(0,d.jsx)("span",{style:{color:"var(--color-secondary-600)"},className:"text-xs sm:text-sm font-normal leading-5 tracking-[-0.035px]",children:"QTY"})," ",(0,d.jsx)("span",{className:"text-xs sm:text-sm font-semibold leading-5 tracking-[-0.035px] uppercase",children:a.quantity})]})]})]}),(0,d.jsxs)("span",{className:"text-base sm:text-lg md:text-xl font-semibold leading-7 tracking-[-0.05px] text-right sm:text-left",children:["$",a.totalPrice.gross.amount.toFixed(2)," ",a.totalPrice.gross.currency]})]},a.id))})]}),(0,d.jsx)("hr",{className:"my-4 border border-[var(--color-secondary-200)]"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:"text-base md:text-xl not-italic font-semibold leading-7 tracking-[-0.05px] text-[var(--color-secondary-800)] uppercase mb-2 md:mb-4",children:"Shipping Address"}),(0,d.jsxs)("div",{className:"text-sm md:text-base lg:text-lg font-medium leading-6 md:leading-7 font-secondary text-[var(--color-secondary-800)]",children:[(0,d.jsx)("p",{children:a.shippingAddress?.streetAddress1}),(0,d.jsxs)("p",{children:[a.shippingAddress?.city,","," ",a.shippingAddress?.countryArea," ",a.shippingAddress?.postalCode]}),(0,d.jsx)("p",{children:a.shippingAddress?.country.country})]}),(0,d.jsx)("p",{className:"text-sm md:text-base lg:text-lg font-normal leading-6 md:leading-7 text-[var(--color-secondary-500)] mt-1",children:a.shippingAddress?.phone})]}),(0,d.jsx)("hr",{className:"my-4 border border-[var(--color-secondary-200)]"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:"text-base md:text-xl font-secondary text-[var(--color-secondary-800)] uppercase font-semibold mb-2 md:mb-4",children:"Billing Address"}),(0,d.jsxs)("div",{className:"text-sm md:text-base lg:text-lg font-medium leading-6 md:leading-7 font-secondary text-[var(--color-secondary-800)]",children:[(0,d.jsx)("p",{children:a.billingAddress?.streetAddress1}),(0,d.jsxs)("p",{children:[a.billingAddress?.city,","," ",a.billingAddress?.countryArea," ",a.billingAddress?.postalCode]}),(0,d.jsx)("p",{children:a.billingAddress?.country.country})]}),(0,d.jsx)("p",{className:"text-sm md:text-base lg:text-lg font-normal leading-6 md:leading-7 font-secondary text-[var(--color-secondary-500)] mt-1",children:a.billingAddress?.phone})]}),a?.shippingMethod?.name&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("hr",{className:"my-4 border border-[var(--color-secondary-200)]"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:"text-base md:text-xl font-secondary text-[var(--color-secondary-800)] uppercase font-semibold mb-2 md:mb-4",children:"Delivery Method"}),(0,d.jsx)("p",{className:"text-sm md:text-base lg:text-lg font-normal leading-6 md:leading-7 uppercase mt-1 text-[var(--color-secondary-500)]",children:a?.shippingMethod?.name})]})]})]})})]}),(0,d.jsxs)("div",{className:"lg:col-span-1 flex flex-col order-first lg:order-last",children:[(0,d.jsx)("h2",{className:"font-medium font-secondary text-sm md:text-base text-[var(--color-secondary-800)] text-start pb-3 md:pb-4 uppercase",children:"Summary"}),(0,d.jsx)("div",{className:"w-full text-sm md:text-base text-[var(--color-secondary-600)] bg-[var(--color-secondary-50)] p-4 lg:p-0 lg:bg-transparent rounded-lg lg:rounded-none",children:a&&(()=>{let b=F(a)?{subtotal:a.subtotal,shipping:a.shippingPrice,total:a.total}:{subtotal:a.subtotalPrice,shipping:a.shippingPrice,total:a.totalPrice};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,d.jsx)("span",{children:"Sub-Total"}),(0,d.jsxs)("span",{className:"font-medium",children:["$",(b.subtotal.net?.amount||b.subtotal.gross.amount).toFixed(2)," ",b.subtotal.currency]})]}),(0,d.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,d.jsx)("span",{children:"Subtotal Tax"}),(0,d.jsx)("span",{className:"font-medium",children:(()=>{let a=b.subtotal.tax?.amount||b.subtotal.gross.amount-(b.subtotal.net?.amount||b.subtotal.gross.amount);return a>0?new Intl.NumberFormat(void 0,{style:"currency",currency:b.total.gross.currency}).format(a):"N/A"})()})]}),(0,d.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,d.jsx)("span",{children:"Shipping Tax"}),(0,d.jsx)("span",{className:"font-medium",children:(()=>{let a=b.shipping.tax?.amount||b.shipping.gross.amount-(b.shipping.net?.amount||b.shipping.gross.amount);return a>0?new Intl.NumberFormat(void 0,{style:"currency",currency:b.total.gross.currency}).format(a):"N/A"})()})]}),(0,d.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,d.jsx)("span",{children:"Shipping Cost"}),(0,d.jsxs)("span",{className:"font-medium",children:["$",(b.shipping.net?.amount||b.shipping.gross.amount).toFixed(2)," ",b.shipping.currency]})]}),(0,d.jsxs)("div",{className:"border-t border-gray-200 pt-3 md:pt-4 mt-2 flex justify-between text-base md:text-xl text-[var(--color-secondary-600)] font-medium",children:[(0,d.jsx)("span",{children:"TOTAL"}),(0,d.jsxs)("span",{className:"font-semibold text-[var(--color-secondary-800)]",children:["$",b.total.gross.amount.toFixed(2)," ",b.total.currency]})]})]})})()})]})]}):(0,d.jsx)(l.A,{text:v,className:"h-[80vh]",buttonLabel:"GO TO HOME",buttonVariant:"secondary",onClick:()=>x.push("/")}):(0,d.jsx)(l.A,{text:"No order found.",className:"h-[80vh]",buttonLabel:"GO TO HOME",buttonVariant:"secondary",onClick:()=>x.push("/")})}(0,e.J1)`
  query getCheckoutSummary($checkoutId: ID!) {
    checkout(id: $checkoutId) {
      id
      created
      email
      lines {
        id
        quantity
        variant {
          product {
            name
            category {
              name
            }
            thumbnail {
              url
              alt
            }
          }
        }
        totalPrice {
          gross {
            amount
            currency
          }
        }
      }
      subtotalPrice {
        gross {
          amount
          currency
        }
        net {
          amount
          currency
        }
        tax {
          amount
          currency
        }
        currency
      }
      shippingPrice {
        gross {
          amount
          currency
        }
        net {
          amount
          currency
        }
        tax {
          amount
          currency
        }
        currency
      }
      totalPrice {
        gross {
          amount
          currency
        }
        net {
          amount
          currency
        }
        tax {
          amount
          currency
        }
        currency
      }
      shippingMethod {
        name
      }
      shippingAddress {
        streetAddress1
        city
        countryArea
        postalCode
        country {
          country
        }
      }
      billingAddress {
        firstName
        lastName
        phone
        streetAddress1
        city
        countryArea
        postalCode
        country {
          country
        }
      }
    }
  }
`,(0,e.J1)`
  query getOrderSummary($orderId: ID!) {
    order(id: $orderId) {
      id
      number
      created
      userEmail
      lines {
        id
        quantity
        productName
        totalPrice {
          gross {
            amount
            currency
          }
        }
        thumbnail(size: 200) {
          url
          alt
        }
        variant {
          product {
            category {
              name
            }
          }
        }
      }
      subtotal {
        gross {
          amount
          currency
        }
        net {
          amount
          currency
        }
        tax {
          amount
          currency
        }
      }
      shippingPrice {
        gross {
          amount
          currency
        }
        net {
          amount
          currency
        }
        tax {
          amount
          currency
        }
      }
      total {
        gross {
          amount
          currency
        }
        net {
          amount
          currency
        }
        tax {
          amount
          currency
        }
      }
      shippingMethod {
        id
        name
      }
      shippingAddress {
        streetAddress1
        city
        countryArea
        postalCode
        country {
          country
        }
      }
      billingAddress {
        firstName
        lastName
        phone
        streetAddress1
        city
        countryArea
        postalCode
        country {
          country
        }
      }
    }
  }
`,(0,e.J1)`
  mutation CompleteCheckout($checkoutId: ID!) {
    checkoutComplete(id: $checkoutId) {
      order {
        id
      }
      errors {
        field
        message
        code
      }
    }
  }
`,(0,e.J1)`
  mutation TransactionProcess($transactionId: ID!, $data: JSON) {
    transactionProcess(id: $transactionId, data: $data) {
      transaction {
        id
      }
      data
      errors {
        field
        message
        code
      }
    }
  }
`},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},15355:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>i,metadata:()=>h});var d=c(38828),e=c(61365),f=c(38648),g=c(58511);let h={title:"Order Confirmation",description:"Thank you for your order. View your order confirmation details and next steps.",robots:{index:!1,follow:!1}};function i(){return(0,d.jsx)(e.Suspense,{fallback:(0,d.jsx)(g.A,{}),children:(0,d.jsx)(f.default,{})})}},16437:(a,b,c)=>{"use strict";c.d(b,{w:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_1511_108158)",children:[(0,d.jsx)("path",{opacity:"0.2",d:"M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z",fill:"#16A34A"}),(0,d.jsx)("path",{d:"M13.75 21.25L17.5 25L26.25 16.25",stroke:"#16A34A",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z",stroke:"#16A34A",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_1511_108158",children:(0,d.jsx)("rect",{width:"40",height:"40",fill:"white"})})})]})},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19892:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f,metadata:()=>e});var d=c(50084);let e={title:`Order Confirmation - ${(0,d.lv)()}`,description:"Your order has been confirmed. View order details, tracking information, and estimated delivery date.",robots:{index:!1,follow:!1}};function f({children:a}){return a}},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30511:(a,b,c)=>{"use strict";c.d(b,{H:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_673_17)",children:[(0,d.jsx)("path",{d:"M3.125 10H16.875",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M11.25 4.375L16.875 10L11.25 15.625",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_673_17",children:(0,d.jsx)("rect",{width:20,height:20,fill:"currentColor"})})})]})},32742:(a,b,c)=>{Promise.resolve().then(c.bind(c,38648))},33873:a=>{"use strict";a.exports=require("path")},38648:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/order-confirmation/summary.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/order-confirmation/summary.tsx","default")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},45477:(a,b,c)=>{"use strict";c.d(b,{A:()=>f});var d=c(13486),e=c(2500);c(60159);let f=({className:a,iconSize:b})=>(0,d.jsx)("div",{className:(0,e.cn)("flex items-center justify-center h-[20vh]",a),children:(0,d.jsx)("div",{className:(0,e.cn)("animate-spin rounded-full border-b-2 border-gray-900",b||"size-20")})})},50084:(a,b,c)=>{"use strict";function d(){let a=process.env.NEXT_PUBLIC_TENANT_NAME||"default";return a.charAt(0).toUpperCase()+a.slice(1).replace(/-/g," ")+" Store"}function e(a,b=50){if(a.length<=b)return a;let c=a.substring(0,b),d=c.lastIndexOf(" ");return d>.7*b?c.substring(0,d)+"...":c.trim()+"..."}c.d(b,{lv:()=>d,pL:()=>e})},50894:(a,b,c)=>{Promise.resolve().then(c.bind(c,1466))},51710:(a,b,c)=>{"use strict";c.d(b,{cn:()=>f});var d=c(56413),e=c(4465);function f(...a){return(0,e.QP)((0,d.$)(a))}},58511:(a,b,c)=>{"use strict";c.d(b,{A:()=>f});var d=c(38828),e=c(51710);c(61365);let f=({className:a,iconSize:b})=>(0,d.jsx)("div",{className:(0,e.cn)("flex items-center justify-center h-[20vh]",a),children:(0,d.jsx)("div",{className:(0,e.cn)("animate-spin rounded-full border-b-2 border-gray-900",b||"size-20")})})},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74295:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>B.default,__next_app__:()=>H,handler:()=>J,pages:()=>G,routeModule:()=>I,tree:()=>F});var d=c(24332),e=c(48819),f=c(93949),g=c(98730),h=c(88996),i=c(16318),j=c(3093),k=c(36748),l=c(98190),m=c(53904),n=c(47735),o=c(20611),p=c(22512),q=c(261),r=c(13863),s=c(8748),t=c(26713),u=c(65262),v=c(97779),w=c(5303),x=c(66704),y=c(67656),z=c(3072),A=c(86439),B=c(84423),C=c(97540),D=c(49005),E={};for(let a in C)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(E[a]=()=>C[a]);c.d(b,E);let F={children:["",{children:["order-confirmation",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,15355)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/order-confirmation/page.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,19892)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/order-confirmation/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,216)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/layout.tsx"],error:[()=>Promise.resolve().then(c.bind(c,80765)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/error.tsx"],"global-error":[()=>Promise.resolve().then(c.bind(c,84423)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/global-error.tsx"],"not-found":[()=>Promise.resolve().then(c.bind(c,87239)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/not-found.tsx"],"global-error":[()=>Promise.resolve().then(c.bind(c,84423)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/global-error.tsx"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,35983,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,74482,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,G=["/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/order-confirmation/page.tsx"],H={require:c,loadChunk:()=>Promise.resolve()},I=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/order-confirmation/page",pathname:"/order-confirmation",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:F},distDir:".next",projectDir:""});async function J(a,b,c){var d;let E="/order-confirmation/page";"/index"===E&&(E="/");let K="false",L=(0,h.getRequestMeta)(a,"postponed"),M=(0,h.getRequestMeta)(a,"minimalMode"),N=await I.prepare(a,b,{srcPage:E,multiZoneDraftMode:K});if(!N)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:O,query:P,params:Q,parsedUrl:R,pageIsDynamic:S,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,serverActionsManifest:W,clientReferenceManifest:X,subresourceIntegrityManifest:Y,prerenderManifest:Z,isDraftMode:$,resolvedPathname:_,revalidateOnlyGenerated:aa,routerServerContext:ab,nextConfig:ac}=N,ad=R.pathname||"/",ae=(0,q.normalizeAppPath)(E),{isOnDemandRevalidate:af}=N,ag=Z.dynamicRoutes[ae],ah=Z.routes[_],ai=!!(ag||ah||Z.routes[ae]),aj=a.headers["user-agent"]||"",ak=(0,t.getBotType)(aj),al=(0,o.isHtmlBotRequest)(a),am=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??!!a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],an=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ao=(0,r.getIsPossibleServerAction)(a),ap=(0,l.checkIsAppPPREnabled)(ac.experimental.ppr)&&(null==(d=Z.routes[ae]??Z.dynamicRoutes[ae])?void 0:d.renderingMode)==="PARTIALLY_STATIC",aq=!1,ar=!1,as=ap?L:void 0,at=ap&&an&&!am,au=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),av=!aj||(0,o.shouldServeStreamingMetadata)(aj,ac.htmlLimitedBots);al&&ap&&(ai=!1,av=!1);let aw=!0===I.isDev||!ai||"string"==typeof L||at,ax=al&&ap,ay=null;$||!ai||aw||ao||as||at||(ay=_);let az=ay;!az&&I.isDev&&(az=_);let aA={...C,tree:F,pages:G,GlobalError:B.default,handler:J,routeModule:I,__next_app__:H};W&&X&&(0,n.setReferenceManifestsSingleton)({page:E,clientReferenceManifest:X,serverActionsManifest:W,serverModuleMap:(0,p.createServerModuleMap)({serverActionsManifest:W})});let aB=a.method||"GET",aC=(0,g.getTracer)(),aD=aC.getActiveScopeSpan();try{let d=async(c,d)=>{let e=new k.NodeNextRequest(a),f=new k.NodeNextResponse(b);return I.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aC.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aB} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aB} ${a.url}`)})},f=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:P,params:Q,page:ae,sharedContext:{buildId:O},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aA,Component:(0,j.T)(aA),params:Q,routeModule:I,page:E,postponed:f,shouldWaitOnAllReady:ax,serveStreamingMetadata:av,supportsDynamicResponse:"string"==typeof f||aw,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,subresourceIntegrityManifest:Y,serverActionsManifest:W,clientReferenceManifest:X,setIsrStatus:null==ab?void 0:ab.setIsrStatus,dir:I.projectDir,isDraftMode:$,isRevalidate:ai&&!f&&!at,botType:ak,isOnDemandRevalidate:af,isPossibleServerAction:ao,assetPrefix:ac.assetPrefix,nextConfigOutput:ac.output,crossOrigin:ac.crossOrigin,trailingSlash:ac.trailingSlash,previewProps:Z.preview,deploymentId:ac.deploymentId,enableTainting:ac.experimental.taint,htmlLimitedBots:ac.htmlLimitedBots,devtoolSegmentExplorer:ac.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ac.reactMaxHeadersLength,multiZoneDraftMode:K,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ac.experimental.cacheLife,basePath:ac.basePath,serverActions:ac.experimental.serverActions,...aq?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:aq}:{},experimental:{isRoutePPREnabled:ap,expireTime:ac.expireTime,staleTimes:ac.experimental.staleTimes,dynamicIO:!!ac.experimental.dynamicIO,clientSegmentCache:!!ac.experimental.clientSegmentCache,dynamicOnHover:!!ac.experimental.dynamicOnHover,inlineCss:!!ac.experimental.inlineCss,authInterrupts:!!ac.experimental.authInterrupts,clientTraceMetadata:ac.experimental.clientTraceMetadata||[]},waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>I.onRequestError(a,b,d,ab),err:(0,h.getRequestMeta)(a,"invokeError"),dev:I.isDev}},k=await d(e,i),{metadata:l}=k,{cacheControl:m,headers:n={},fetchTags:o}=l;if(o&&(n[x.NEXT_CACHE_TAGS_HEADER]=o),a.fetchMetrics=l.fetchMetrics,ai&&(null==m?void 0:m.revalidate)===0&&!I.isDev&&!ap){let a=l.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${_}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:k,headers:n,rscData:l.flightData,postponed:l.postponed,status:l.statusCode,segmentData:l.segmentData},cacheControl:m}},l=async({hasResolved:d,previousCacheEntry:g,isRevalidating:i,span:j})=>{let k,l=!1===I.isDev,n=d||b.writableEnded;if(af&&aa&&!g&&!M)return(null==ab?void 0:ab.render404)?await ab.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ag&&(k=(0,v.parseFallbackField)(ag.fallback)),k===v.FallbackMode.PRERENDER&&(0,t.isBot)(aj)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(af=!0),af&&(k!==v.FallbackMode.NOT_FOUND||g)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),!M&&k!==v.FallbackMode.BLOCKING_STATIC_RENDER&&az&&!n&&!$&&S&&(l||!ah)){let b;if((l||ag)&&k===v.FallbackMode.NOT_FOUND)throw new A.NoFallbackError;if(ap&&!an){if(b=await I.handleResponse({cacheKey:l?ae:null,req:a,nextConfig:ac,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:Z,isRoutePPREnabled:ap,responseGenerator:async()=>f({span:j,postponed:void 0,fallbackRouteParams:l||ar?(0,m.u)(ae):null}),waitUntil:c.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=af||i||!as?void 0:as;if(aq&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.fromStatic(""),pageData:{},headers:void 0,status:void 0}};let p=S&&ap&&((0,h.getRequestMeta)(a,"renderFallbackShell")||ar)?(0,m.u)(ad):null;return f({span:j,postponed:o,fallbackRouteParams:p})},n=async d=>{var g,i,j,k,m;let n,o=await I.handleResponse({cacheKey:ay,responseGenerator:a=>l({span:d,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:af,isRoutePPREnabled:ap,req:a,nextConfig:ac,prerenderManifest:Z,waitUntil:c.waitUntil});if($&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),I.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!o){if(ay)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(g=o.value)?void 0:g.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(j=o.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof o.value.postponed;ai&&!at&&(!p||am)&&(M||b.setHeader("x-nextjs-cache",af?"REVALIDATED":o.isMiss?"MISS":o.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=o;if(as)n={revalidate:0,expire:void 0};else if(M&&an&&!am&&ap)n={revalidate:0,expire:void 0};else if(!I.isDev)if($)n={revalidate:0,expire:void 0};else if(ai){if(o.cacheControl)if("number"==typeof o.cacheControl.revalidate){if(o.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${o.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});n={revalidate:o.cacheControl.revalidate,expire:(null==(k=o.cacheControl)?void 0:k.expire)??ac.expireTime}}else n={revalidate:x.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(n={revalidate:0,expire:void 0});if(o.cacheControl=n,"string"==typeof au&&(null==q?void 0:q.kind)===u.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(m=q.headers)?void 0:m[x.NEXT_CACHE_TAGS_HEADER];M&&ai&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(au);return void 0!==d?(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(d),cacheControl:o.cacheControl}):(b.statusCode=204,(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(""),cacheControl:o.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...o,value:{...o.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&as)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(M&&ai||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(i=q.headers)?void 0:i[x.NEXT_CACHE_TAGS_HEADER];if(M&&ai&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!q.status||an&&ap||(b.statusCode=q.status),!M&&q.status&&D.RedirectStatusCode[q.status]&&an&&(b.statusCode=200),p&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),an&&!$){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:q.html,cacheControl:at?{revalidate:0,expire:void 0}:o.cacheControl})}return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(q.rscData),cacheControl:o.cacheControl})}let v=q.html;if(!p||M)return(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:o.cacheControl});if(aq)return v.chain(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let A=new TransformStream;return v.chain(A.readable),f({span:d,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(A.writable)}).catch(a=>{A.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aD)return await aC.withPropagatedContext(a.headers,()=>aC.trace(i.BaseServerSpan.handleRequest,{spanName:`${aB} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aB,"http.target":a.url}},n));await n(aD)}catch(b){throw aD||b instanceof A.NoFallbackError||await I.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ai,isOnDemandRevalidate:af})},ab),b}}},80408:()=>{},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},87032:()=>{}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[3355,9399,6544,7085,3598],()=>b(b.s=74295));module.exports=c})();