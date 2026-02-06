(()=>{var a={};a.id=8279,a.ids=[8279],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},5126:(a,b,c)=>{Promise.resolve().then(c.bind(c,23572))},5414:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return e}});let d=c(50686)._(c(12430));function e(a,b){var c;let e={};"function"==typeof a&&(e.loader=a);let f={...e,...b};return(0,d.default)({...f,modules:null==(c=f.loadableGenerated)?void 0:c.modules})}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},9971:(a,b,c)=>{"use strict";c.d(b,{default:()=>W});var d=c(13486),e=c(18187),f=c(2984),g=c(22291),h=c(10716),i=c(30511);let j=[{text:"HOME",link:"/"},{text:"CART",link:"/cart"},{text:"CHECKOUT"}];function k({isLoggedIn:a}){let b=(0,f.useRouter)();return(0,d.jsxs)("div",{className:"space-y-6 lg:space-y-10",children:[(0,d.jsxs)("div",{className:"font-semibold text-sm font-secondary text-[var(--color-secondary-400)] flex items-center w-full justify-between",children:[(0,d.jsx)(g.A,{items:j}),(0,d.jsxs)("div",{className:"flex items-center gap-1 cursor-pointer",children:[a?(0,d.jsx)(h.A,{onClick:()=>b.push("/"),className:"p-0 text-xs md:text-sm lg:text-base",content:"CONTINUE SHOPPING",variant:"tertiary"}):(0,d.jsx)(h.A,{onClick:()=>b.push("/account/login"),className:"p-0 text-xs md:text-sm lg:text-base",content:"LOG IN",variant:"tertiary"}),(0,d.jsx)("span",{className:"size-5 text-[var(--color-primary-600)]",children:i.H})]})]}),(0,d.jsx)("h1",{className:"font-primary font-normal text-2xl md:text-3xl lg:text-4xl uppercase text-[var(--color-secondary-800)p-0]",children:"Checkout"})]})}var l=c(19413);function m({isLoggedIn:a,userEmail:b,guestEmail:c,onEmailChange:e,emailError:f}){return a?(0,d.jsx)("div",{className:"space-y-5",children:(0,d.jsx)(l.A,{disabled:!0,readOnly:!0,label:"EMAIL",name:"email",type:"email",value:b||"",className:"py-1"})}):(0,d.jsx)("div",{children:(0,d.jsx)(l.A,{label:"EMAIL",name:"email",type:"email",value:c,onChange:e,required:!0,hasError:!!f,errorMessage:f||void 0,className:"py-1"})})}var n=c(90904);function o({checkoutId:a,canShowDeliveryMethods:b,hasCompleteShippingInfo:c,missingForDelivery:e,shippingLoading:f,shippingMethods:g,shippingError:h,selectedShippingId:i,isUpdatingDelivery:j,isProcessingSelection:k=!1,isWillCallSelected:l=!1,onShippingMethodSelect:m,onRetryShippingMethods:o}){if(!a)return null;let p=(()=>{let a=g.find(a=>a.name?.toLowerCase().includes("free shipping")&&a.price?.amount===0);return a?[a]:g})();return(0,d.jsxs)("div",{children:[(0,d.jsxs)("h2",{className:"text-base font-semibold font-secondary text-[var(--color-secondary-800)] mb-3 uppercase",children:["Delivery Method"," ",!l&&(j||f||k)&&(0,d.jsx)("span",{className:"ml-2 text-xs text-gray-500",children:"(updating…)"})]}),(0,d.jsxs)(d.Fragment,{children:[!b&&(0,d.jsxs)("div",{className:"text-xs font-secondary text-white bg-[var(--color-secondary-100)] border border-[var(--color-secondary-200)] p-2  flex items-start gap-2",children:[(0,d.jsx)("span",{children:n.w}),(0,d.jsxs)("p",{children:["Delivery methods will be available once you complete the shipping address."," ",!c&&e.length>0&&(0,d.jsxs)("span",{children:["Missing: ",e.join(", ")]})]})]}),!f&&!j&&h&&(0,d.jsxs)("div",{className:"text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3",children:[(0,d.jsx)("p",{className:"font-medium",children:h.includes("postal code")?"Address Validation Error":h.includes("session")||h.includes("expired")||h.includes("timeout")?"Session Issue":"Delivery Method Error"}),(0,d.jsx)("p",{className:"text-xs mt-1",children:h}),(h.includes("session")||h.includes("expired")||h.includes("timeout")||h.includes("network")||h.includes("Failed to fetch"))&&(0,d.jsxs)("div",{className:"mt-3",children:[(0,d.jsx)("p",{className:"text-xs text-gray-600 mb-2",children:"This might be due to a session timeout or network issue. Please try refreshing or retrying."}),o&&(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsx)("button",{onClick:o,disabled:f||j,className:"px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",children:f?"Retrying...":"Retry"}),(0,d.jsx)("button",{onClick:()=>window.location.reload(),disabled:f||j,className:"px-3 py-1.5 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",children:"Refresh Page"})]})]}),h.includes("not applicable")&&(0,d.jsx)("p",{className:"text-xs mt-2 text-gray-600",children:"This can happen if the shipping method does not support your address, product's weight/size, or geographic region."}),h.includes("no longer available")&&(0,d.jsxs)("div",{className:"mt-3",children:[(0,d.jsx)("p",{className:"text-xs text-gray-600 mb-2",children:"The selected shipping method is no longer available. This can happen if inventory or shipping options have changed."}),o&&(0,d.jsx)("button",{onClick:o,disabled:f||j,className:"px-3 py-1.5 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",children:f?"Refreshing...":"Refresh Methods"})]})]}),(!f&&!j&&p.length>0&&!h&&b||l&&p.length>0)&&(0,d.jsxs)("div",{children:[g.length>p.length&&(0,d.jsxs)("div",{className:"mb-4 text-sm text-green-700 bg-green-50 border border-green-200 rounded p-3",children:[(0,d.jsx)("p",{className:"font-medium",children:"Free Shipping Available!"}),(0,d.jsx)("p",{className:"text-xs mt-1",children:"Your order qualifies for free shipping."})]}),(0,d.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:p.map(a=>{let b=null!=a.minimumDeliveryDays&&null!=a.maximumDeliveryDays?`${a.minimumDeliveryDays}-${a.maximumDeliveryDays} days`:void 0,c=j||f||k;return(0,d.jsxs)("label",{className:`flex items-center gap-3 ring-1 p-2 transition-all duration-200 ${c?"cursor-not-allowed opacity-50 pointer-events-none":"cursor-pointer"} ${i===a.id?"ring-[var(--color-primary-100)] bg-[var(--color-primary-50)] text-[var(--color-primary-700)] accent-[var(--color-primary-600)]":"ring-gray-300 hover:bg-gray-50"} ${c?"":"hover:bg-gray-50"}`,children:[(0,d.jsx)("input",{type:"radio",name:"delivery",disabled:c,checked:i===a.id,onChange:()=>!c&&m(a.id)}),(0,d.jsxs)("div",{className:"flex-1",children:[(0,d.jsx)("div",{className:"font-medium text-base/none font-secondary",children:a.name}),b&&(0,d.jsx)("div",{className:"text-xs text-gray-500",children:b})]}),(0,d.jsx)("div",{className:"font-medium text-base/none",children:new Intl.NumberFormat(void 0,{style:"currency",currency:a.price.currency}).format(a.price.amount)})]},a.id)})})]}),!f&&!j&&!h&&0===p.length&&b&&(0,d.jsxs)("div",{className:"text-sm text-gray-600 bg-yellow-50 border border-yellow-200 rounded p-3",children:[(0,d.jsx)("p",{className:"font-medium text-yellow-800",children:"No delivery methods found"}),(0,d.jsx)("p",{className:"text-xs mt-1",children:"No shipping methods are available for this address. This could be due to:"}),(0,d.jsxs)("ul",{className:"text-xs mt-2 list-disc list-inside text-gray-600",children:[(0,d.jsx)("li",{children:"Invalid or incomplete address"}),(0,d.jsx)("li",{children:"No shipping zones configured for this location"}),(0,d.jsx)("li",{children:"Address verification issues"})]}),(0,d.jsx)("p",{className:"text-xs mt-2 text-gray-500",children:"Try updating your address or contact support if the issue persists."})]})]})]})}var p=c(60159),q=c(49933);function r({totalAmount:a,selectedShipping:b,grandTotal:c,saleorTotal:e,isUpdatingDelivery:f,shippingLoading:g,isCalculatingTotal:i,taxInfo:j,isCalculatingTax:k,voucherInfo:l,onApplyVoucher:m,onRemoveVoucher:n,isApplyingVoucher:o=!1,voucherError:r,selectedCollectionPointId:s,onCompletePayment:t,isPaymentProcessing:u=!1,paymentDisabled:v=!1,paymentDisabledReason:w}){let[x,y]=(0,p.useState)(""),z=async()=>{x.trim()&&m&&(await m(x.trim()),r||y(""))},A=async()=>{n&&(await n(),y(""))},B=!b&&!s||o||!x.trim();return(0,d.jsxs)("div",{className:"lg:col-span-1 flex flex-col lg:sticky lg:top-24 lg:self-start",children:[(0,d.jsx)("h2",{className:"font-medium font-secondary text-base text-[var(--color-secondary-800)] text-start pb-3 uppercase",children:"Summary"}),(0,d.jsxs)("div",{className:"bg-white border border-[var(--color-secondary-200)] rounded-lg p-6 shadow-sm",children:[(0,d.jsxs)("div",{className:"flex items-center gap-2 mb-4 pb-4 border-b border-gray-200",children:[(0,d.jsx)(q.default,{src:"/icons/visa.gif",alt:"Visa",width:40,height:25,className:"object-contain"}),(0,d.jsx)(q.default,{src:"/icons/master.gif",alt:"Mastercard",width:40,height:25,className:"object-contain"}),(0,d.jsx)(q.default,{src:"/icons/amex.gif",alt:"American Express",width:40,height:25,className:"object-contain"}),(0,d.jsx)(q.default,{src:"/icons/discover.gif",alt:"Discover",width:40,height:25,className:"object-contain"})]}),(0,d.jsxs)("div",{className:"w-full text-normal text-[var(--color-secondary-600)] text-base",children:[(0,d.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,d.jsx)("span",{children:"Sub-Total"}),(0,d.jsx)("span",{className:"font-medium",children:j&&j.subtotalNet>0?new Intl.NumberFormat(void 0,{style:"currency",currency:j.currency}).format(j.subtotalNet):`$${a.toFixed(2)}`})]}),(0,d.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,d.jsx)("span",{children:"Tax"}),(0,d.jsx)("span",{className:"font-medium",children:k?"Calculating…":j&&j.totalTax>0?new Intl.NumberFormat(void 0,{style:"currency",currency:j.currency}).format(j.totalTax):"N/A"})]}),(0,d.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,d.jsx)("span",{children:"Shipping Cost"}),(0,d.jsx)("span",{className:"font-medium",children:f||g?"Updating…":b?new Intl.NumberFormat(void 0,{style:"currency",currency:b.price.currency}).format(b.price.amount):"--"})]}),j&&j.shippingTax>0&&(0,d.jsxs)("div",{className:"flex justify-between mb-2",children:[(0,d.jsx)("span",{className:"text-sm text-start",children:"Shipping Tax"}),(0,d.jsx)("span",{className:"font-medium text-sm",children:new Intl.NumberFormat(void 0,{style:"currency",currency:j.currency}).format(j.shippingTax)})]}),(0,d.jsx)("div",{className:"border-t border-gray-200 pt-4 mt-4",children:l?.voucherCode?(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,d.jsxs)("span",{className:"text-green-600 font-medium",children:["Voucher Applied: ",l.voucherCode]}),(0,d.jsx)("button",{onClick:A,className:`text-sm hover:underline ${o?"text-gray-400 cursor-not-allowed":"text-red-500"}`,disabled:o,children:o?"Removing...":"Remove"})]}),l.discount&&(0,d.jsxs)("div",{className:"flex justify-between text-green-600",children:[(0,d.jsx)("span",{children:"Discount"}),(0,d.jsxs)("span",{className:"font-medium",children:["-",new Intl.NumberFormat(void 0,{style:"currency",currency:l.discount.currency}).format(l.discount.amount)]})]})]}):(0,d.jsxs)("div",{className:"mb-4",children:[(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)("h3",{className:"text-sm font-medium text-[var(--color-secondary-800)] mb-2",children:"Have a voucher code?"}),!b&&!s&&(0,d.jsx)("p",{className:"text-orange-600 text-xs mb-3 bg-orange-50 p-2 rounded border border-orange-200",children:"Please select a delivery method or pickup location first to apply a voucher code"})]}),(0,d.jsxs)("div",{className:"space-y-2",children:[(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsx)("input",{type:"text",value:x,onChange:a=>y(a.target.value),placeholder:"Enter voucher code",className:`flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent ${!b&&!s?"bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed":"border-gray-300"}`,disabled:!b&&!s||o,onKeyDown:a=>{"Enter"!==a.key||B||z()}}),(0,d.jsx)("button",{onClick:z,disabled:B,className:`px-4 py-2 text-sm font-medium rounded-md ${B?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90"}`,children:o?"Applying...":"Apply"})]}),r&&(0,d.jsx)("p",{className:"text-red-500 text-xs",children:r})]})]})}),(0,d.jsxs)("div",{className:"flex justify-between text-xl text-[var(--color-secondary-600)] font-semibold font-secondary mt-2 pt-4 border-t border-gray-200",children:[(0,d.jsx)("span",{className:"font-medium",children:"TOTAL"}),(0,d.jsx)("div",{className:"text-right",children:l?.discount&&l.discount.amount>0&&e?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"text-sm text-gray-500 line-through",children:new Intl.NumberFormat(void 0,{style:"currency",currency:b?.price?.currency||j?.currency||"USD"}).format(e+l.discount.amount)}),(0,d.jsx)("div",{className:`text-[var(--color-secondary-800)] ${i||k?"opacity-60":""}`,children:i||k?"Calculating…":new Intl.NumberFormat(void 0,{style:"currency",currency:b?.price?.currency||j?.currency||"USD"}).format(e)})]}):(0,d.jsx)("span",{className:`text-[var(--color-secondary-800)] ${i||k?"opacity-60":""}`,children:i||k?"Calculating…":new Intl.NumberFormat(void 0,{style:"currency",currency:b?.price?.currency||j?.currency||"USD"}).format(e||c)})})]}),t&&(0,d.jsx)(h.A,{onClick:()=>t(),content:u?"Processing...":v&&w?w:"PLACE ORDER",disabled:v||u,variant:"primary",className:"w-full mt-6",type:"button"})]})]})]})}var s=c(93283);let t=(0,s.J1)`
  query CheckoutTermsAndConditions($slug: String!) {
    page(slug: $slug) {
      id
      title
      slug
      content
      seoTitle
      seoDescription
      isPublished
      metadata {
        key
        value
      }
    }
  }
`;var u=c(86010);let v=`
  mutation CheckoutBillingAddressUpdate($id: ID!, $billingAddress: AddressInput!) {
    checkoutBillingAddressUpdate(id: $id, billingAddress: $billingAddress) {
      checkout { id }
      errors { field message }
    }
  }
`,w=`
  mutation CheckoutDeliveryMethodUpdate($id: ID!, $deliveryMethodId: ID!) {
    checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $deliveryMethodId) {
      checkout { 
        id
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
        }
      }
      errors { field message }
    }
  }
`,x=`
  mutation AddVoucherToCheckout($checkoutId: ID!, $promoCode: String!) {
    checkoutAddPromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
      checkout {
        id
        voucherCode
        discount {
          amount
          currency
        }
        totalPrice {
          gross {
            amount
            currency
          }
        }
        subtotalPrice {
          gross {
            amount
            currency
          }
        }
      }
      errors {
        field
        code
        message
      }
    }
  }
`,y=`
  mutation RemoveVoucherFromCheckout($checkoutId: ID!, $promoCode: String!) {
    checkoutRemovePromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
      checkout {
        id
        voucherCode
        discount {
          amount
          currency
        }
        totalPrice {
          gross {
            amount
            currency
          }
        }
        subtotalPrice {
          gross {
            amount
            currency
          }
        }
      }
      errors {
        field
        code
        message
      }
    }
  }
`,z=`
  mutation CheckoutEmailUpdate($checkoutId: ID!, $email: String!) {
    checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
      checkout {
        id
        email
      }
      errors {
        field
        message
        code
      }
    }
  }
`,A=`
  query GetCheckoutDetails($id: ID!) {
    checkout(id: $id) {
      id
      voucherCode
      discount {
        amount
        currency
      }
      totalPrice { 
        gross { 
          amount 
          currency 
        } 
      }
      subtotalPrice { 
        gross { 
          amount 
          currency 
        } 
      }
      deliveryMethod {
        ... on ShippingMethod {
          id
          name
          price { 
            amount 
            currency 
          }
        }
      }
      lines {
        id
        quantity
        totalPrice { 
          gross { 
            amount 
            currency 
          } 
        }
        variant {
          id
          name
          pricing {
            price { 
              gross { 
                amount 
                currency 
              } 
            }
            priceUndiscounted { 
              gross { 
                amount 
                currency 
              } 
            }
          }
          product {
            id
            name
            thumbnail { 
              url 
            }
            pricing {
              onSale
              priceRange {
                start { 
                  gross { 
                    amount 
                    currency 
                  } 
                }
                stop { 
                  gross { 
                    amount 
                    currency 
                  } 
                }
              }
              discount { 
                gross { 
                  amount 
                  currency 
                } 
              }
            }
            metadata {
              key
              value
            }
          }
        }
      }
    }
  }
`,B=`
  query GetCheckoutShippingMethods($id: ID!) {
    checkout(id: $id) {
      id
      availableShippingMethods {
        id
        name
        price { amount currency }
        minimumDeliveryDays
        maximumDeliveryDays
      }
    }
  }
`,C=`
  query GetPaymentGateways($checkoutId: ID!) {
    checkout(id: $checkoutId) {
      availablePaymentGateways {
        id
        name
        config {
          field
          value
        }
        currencies
      }
    }
  }
`,D=(0,s.J1)`
  query GetCheckoutCollectionPoints($checkoutId: ID!) {
    checkout(id: $checkoutId) {
      id
      availableCollectionPoints {
        id
        name
        clickAndCollectOption
        isPrivate
        address {
          streetAddress1
          city
          postalCode
          countryArea
          country {
            code
            country
          }
        }
      }
    }
  }
`,E=(0,s.J1)`
  mutation CheckoutDeliveryMethodUpdateWillCall($id: ID!, $deliveryMethodId: ID!) {
    checkoutDeliveryMethodUpdate(
      id: $id
      deliveryMethodId: $deliveryMethodId
    ) {
      checkout {
        id
        deliveryMethod {
          __typename
          ... on Warehouse {
            id
            name
          }
          ... on ShippingMethod {
            id
            name
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
        }
      }
      errors {
        field
        message
        code
      }
    }
  }
`;var F=c(38948),G=c(53624),H=c(39222),I=c(4308),J=c(62693),K=c(87249),L=c(45477);c(58513);var M=c(40);let N=(0,e.default)(()=>Promise.all([c.e(9313),c.e(1616),c.e(1006)]).then(c.bind(c,11006)),{loadableGenerated:{modules:["app/checkout/CheckoutPageClient.tsx -> @/app/components/checkout/AddressManagement"]},loading:()=>(0,d.jsx)("div",{className:"animate-pulse h-48 bg-gray-100 rounded"})}),O=(0,e.default)(()=>c.e(8210).then(c.bind(c,98210)),{loadableGenerated:{modules:["app/checkout/CheckoutPageClient.tsx -> @/app/components/checkout/DealerShippingSection"]},loading:()=>(0,d.jsx)("div",{className:"animate-pulse h-32 bg-gray-100 rounded"})}),P=(0,e.default)(()=>c.e(2974).then(c.bind(c,82974)),{loadableGenerated:{modules:["app/checkout/CheckoutPageClient.tsx -> @/app/components/checkout/WillCallSection"]},loading:()=>(0,d.jsx)("div",{className:"animate-pulse h-32 bg-gray-100 rounded"})}),Q=(0,e.default)(async()=>{},{loadableGenerated:{modules:["app/checkout/CheckoutPageClient.tsx -> @/app/components/checkout/paymentStep"]},loading:()=>(0,d.jsx)("div",{className:"animate-pulse h-48 bg-gray-100 rounded"}),ssr:!1}),R=(0,e.default)(()=>Promise.all([c.e(6263),c.e(4038)]).then(c.bind(c,54038)),{loadableGenerated:{modules:["app/checkout/CheckoutPageClient.tsx -> @/app/components/checkout/CheckoutQuestions"]},loading:()=>(0,d.jsx)("div",{className:"animate-pulse h-24 bg-gray-100 rounded"})}),S=(0,e.default)(async()=>{},{loadableGenerated:{modules:["app/checkout/CheckoutPageClient.tsx -> @/app/components/checkout/CheckoutTermsModal"]},ssr:!1}),T=a=>new Promise(b=>setTimeout(b,a));async function U(a,b=4,c=250){let d;for(let e=0;e<b;e++)try{return await a()}catch(b){d=b;let a=c*Math.pow(2,e)+Math.floor(50*Math.random());await T(a)}throw d instanceof Error?d:Error("Operation failed after retries")}function V(a){let b=Error(a);return b.isDeliveryMethodError=!0,b}function W(){let{cartItems:a,totalAmount:b,isLoggedIn:c,guestEmail:e,guestShippingInfo:g,checkoutId:h,setCheckoutId:i,checkoutToken:j,setCheckoutToken:l,selectedShippingMethodId:n,setSelectedShippingMethodId:q}=(0,G.o)(),W=(0,G.o)(a=>a.user),{getGoogleTagManagerConfig:X,isWillCallEnabled:Y}=(0,M.h)();X();let Z=(0,f.useRouter)(),$=(0,H.m)(),[_,aa]=(0,p.useState)(!1),[ab,ac]=(0,p.useState)([]),[ad,ae]=(0,p.useState)(!1),[af,ag]=(0,p.useState)(null),[ah,ai]=(0,p.useState)(null),[aj,ak]=(0,p.useState)(null),[al,am]=(0,p.useState)(!1),[an,ao]=(0,p.useState)(!1),[ap,aq]=(0,p.useState)(!0),[ar,as]=(0,p.useState)({isModalOpen:!1,paymentProcessingLoading:!1,error:!1,success:!1}),[at,au]=(0,p.useState)(null),[av,aw]=(0,p.useState)(null),[ax,ay]=(0,p.useState)(!1),[az,aA]=(0,p.useState)(!1),[aB,aC]=(0,p.useState)(!1),[aD,aE]=(0,p.useState)(!1),[aF,aG]=(0,p.useState)({fn:null}),[aH,aI]=(0,p.useState)(!1),[aJ,aK]=(0,p.useState)(null),[,aL]=(0,p.useState)({}),[aM,aN]=(0,p.useState)(!0),[aO,aP]=(0,p.useState)(null),[aQ,aR]=(0,p.useState)(!1),[aS,aT]=(0,p.useState)(!1),[aU,aV]=(0,p.useState)([]),[aW,aX]=(0,p.useState)(!1),[aY,aZ]=(0,p.useState)(null),[a$,a_]=(0,p.useState)(!1),[a0,a1]=(0,p.useState)(null),[a2,a3]=(0,p.useState)(null),[a4,a5]=(0,p.useState)(!1),[a6,a7]=(0,p.useState)(null),[a8,a9]=(0,p.useState)([]),[ba,bb]=(0,p.useState)(null),[bc,bd]=(0,p.useState)(!1),[be,bf]=(0,p.useState)(!1),[bg,bh]=(0,p.useState)(null),{data:bi}=(0,I.IT)(t,{variables:{slug:"checkout-terms-and-conditions"},fetchPolicy:"cache-first"}),bj=(0,p.useRef)(!1),bk=(0,p.useRef)(!1),bl=(0,p.useRef)(null),bm=(0,p.useRef)(""),bn=(0,p.useRef)(0),bo=(0,p.useRef)(null),bp=(0,p.useRef)(new Set),[bq,br]=(0,p.useState)({firstName:"",lastName:"",address:"",city:"",state:"",zipCode:"",email:"",phone:"",country:"US"}),bs=(0,p.useCallback)(a=>a&&""!==a.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)?null:"Please enter a valid email address.":"Email address is required.",[]),bt=(0,p.useCallback)((a,b="operation")=>{let c=a instanceof Error?a.message:String(a);return c.includes("Couldn't resolve to a node")?(console.error(`${b} failed: Checkout session expired`,a),Error("Your checkout session has expired. Please refresh the page to start a new checkout session.")):c.includes("session")||c.includes("expired")||c.includes("401")||c.includes("403")?(console.error(`${b} failed: Session expired`,a),Error("Your session has expired. Please refresh the page and try again.")):c.includes("network")||c.includes("Failed to fetch")||c.includes("NetworkError")?(console.error(`${b} failed: Network error`,a),Error("Network connection issue. Please check your connection and try again.")):(console.error(`${b} failed:`,a),Error(c||`${b} failed. Please try again.`))},[]),bu=(0,p.useCallback)((a,b)=>{if(!a||!b)return!1;let c=a.trim();if(0===c.length)return!1;let d={US:/^\d{5}(-\d{4})?$/,CA:/^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/,UK:/^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$/,AU:/^\d{4}$/,DE:/^\d{5}$/,FR:/^\d{5}$/,JP:/^\d{3}-?\d{4}$/,PK:/^\d{5}$/}[b];return d?d.test(c):/^[A-Za-z0-9\s-]{3,10}$/.test(c)},[]),bv=(0,p.useMemo)(()=>{let a=[];return bq.firstName||a.push("First name"),bq.lastName||a.push("Last name"),bq.address||a.push("Street address"),bq.city||a.push("City"),bq.zipCode?bu(bq.zipCode,bq.country)||a.push("Valid postal code"):a.push("Postal code"),bq.country||a.push("Country"),a},[bq,bu]),[bw,bx]=(0,p.useState)({firstName:"",lastName:"",address:"",city:"",state:"",zipCode:"",country:"US",phone:"",email:""}),[by,bz]=(0,p.useState)({firstName:"",lastName:"",phone:"",companyName:"",streetAddress1:"",streetAddress2:"",city:"",postalCode:"",country:"US",countryArea:""});(0,p.useCallback)(()=>{ac([]),ae(!1),ag(null),ak(null),am(!1),ay(!1),aA(!1),aC(!1),aE(!1),au(null),aw(null),bj.current=!1,bk.current=!1,bm.current="",b5.current=null,b3.current=null,b4.current=null,bn.current=0,bp.current.clear(),q(null),bl.current&&(bl.current.abort(),bl.current=null),bo.current&&(clearTimeout(bo.current),bo.current=null)},[q]);let bA=(0,p.useMemo)(()=>{let a=process.env.NEXT_PUBLIC_API_URL||"/api/graphql",b=a.trim().toLowerCase();return/\/graphql\/?$/.test(b)?a.trim():a.replace(/\/+$/,"")+"/graphql"},[]),bB=(0,p.useCallback)(async(a,b)=>{let c=`
        mutation CheckoutShippingAddressUpdate($checkoutId: ID!, $shippingAddress: AddressInput!) {
          checkoutShippingAddressUpdate(checkoutId: $checkoutId, shippingAddress: $shippingAddress) {
            checkout {
              id
              shippingAddress {
                streetAddress1
                city
                postalCode
                country {
                  code
                }
                countryArea
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
              }
              lines {
                quantity
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
                }
                variant {
                  id
                  name
                }
              }
            }
            errors {
              field
              message
            }
          }
        }
      `,d=await fetch(bA,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:c,variables:{checkoutId:a,shippingAddress:b}})});if(!d.ok)throw Error("Failed to update shipping address");let e=await d.json(),f=e.data?.checkoutShippingAddressUpdate?.errors;if(f?.length)throw Error(f[0]?.message||"Shipping address update error");let g=e.data?.checkoutShippingAddressUpdate?.checkout;if(g)try{let a=g.subtotalPrice?.tax?.amount||0,b=g.shippingPrice?.tax?.amount||0,c=g.subtotalPrice?.net?.amount||0,d=g.shippingPrice?.net?.amount||0,e=g.totalPrice?.gross?.currency||"USD";aw({totalTax:a,shippingTax:b,subtotalNet:c,shippingNet:d,currency:e});let f=g.totalPrice?.gross?.amount;"number"==typeof f&&au(f)}catch(a){console.warn("Failed to parse tax information:",a)}},[bA]),bC=(0,p.useCallback)(async(a,b)=>{try{let c=await fetch(bA,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:v,variables:{id:a,billingAddress:b}})});if(!c.ok)throw Error("Failed to update billing address");let d=await c.json();if(d.errors&&d.errors.length>0){let a=d.errors[0];throw bt(a,"Billing address update")}let e=d.data?.checkoutBillingAddressUpdate?.errors;if(e?.length){let a=e[0]?.message||"Billing address update error";throw bt(Error(a),"Billing address update")}}catch(a){if(a instanceof Error&&(a.message.includes("checkout session")||a.message.includes("session has expired")))throw a;throw bt(a,"Billing address update")}},[bA,bt]),bD=(0,p.useCallback)(async(a,b,c)=>{try{let d=await fetch(bA,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:z,variables:{checkoutId:a,email:b}})});if(!d.ok)throw Error("Failed to update checkout email");let e=await d.json();if(e.errors&&e.errors.length>0){let a=e.errors[0].message||"GraphQL error";c&&c(a);return}let f=e.data?.checkoutEmailUpdate?.errors;if(f?.length){let a=f[0]?.message||"Email update error";c&&c(a);return}}catch(b){let a=b instanceof Error?b.message:"Email update failed";c&&c(a)}},[bA]);(0,p.useCallback)(async(a,b)=>{try{let c=await fetch(bA,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:A,variables:{id:a}}),signal:b});if(!c.ok)throw Error("Failed to fetch checkout details");let d=await c.json();if(d.errors&&d.errors.length>0){let a=d.errors[0];throw bt(a,"Get checkout details")}let e=d.data?.checkout;if(!e)throw bt(Error("Unable to determine checkout details"),"Get checkout details");let f=e.totalPrice?.gross?.amount,g=e.subtotalPrice?.gross?.amount,h=e.lines||[],i=e.deliveryMethod,j=e.voucherCode||null,k=e.discount?{amount:e.discount.amount,currency:e.discount.currency}:null;return{total:f,subtotal:g,lines:h,deliveryMethod:i,voucherInfo:{voucherCode:j,discount:k},fullCheckoutData:e}}catch(a){if(a instanceof Error&&(a.message.includes("checkout session")||a.message.includes("session has expired")))throw a;throw bt(a,"Get checkout details")}},[bA,bt]);let bE=(0,p.useCallback)(async(a,b)=>{if(!bk.current){bk.current=!0;try{let c=await fetch(bA,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:w,variables:{id:a,deliveryMethodId:b}})});if(!c.ok){let a=await c.text();throw Error(`Failed to set delivery method: ${c.status} ${c.statusText} ${a}`)}let d=await c.json();if(d.errors&&d.errors.length>0){let a=d.errors[0];throw bt(a,"Delivery method update")}let e=d.data?.checkoutDeliveryMethodUpdate?.errors;if(e?.length){let a=e.map(a=>`${a.field||"unknown"}: ${a.message||"unknown"}`).join(", "),b=e[0]?.message||`Delivery method update error: ${a}`;throw bt(Error(b),"Delivery method update")}let f=d.data?.checkoutDeliveryMethodUpdate?.checkout;if(f)try{let a=f.subtotalPrice?.tax?.amount||0,b=f.shippingPrice?.tax?.amount||0,c=f.subtotalPrice?.net?.amount||0,d=f.shippingPrice?.net?.amount||0,e=f.totalPrice?.gross?.currency||"USD";aw({totalTax:a,shippingTax:b,subtotalNet:c,shippingNet:d,currency:e});let g=f.totalPrice?.gross?.amount;"number"==typeof g&&au(g)}catch(a){console.warn("Failed to parse tax information from delivery method update:",a)}}catch(a){if(a instanceof Error&&(a.message.includes("checkout session")||a.message.includes("session has expired")))throw a;throw bt(a,"Delivery method update")}finally{bk.current=!1}}},[bA,bt]),bF=(0,p.useCallback)(async a=>{if(!h)return void a1("No checkout session found");a_(!0),a1(null);try{let b=await fetch(bA,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:x,variables:{checkoutId:h,promoCode:a}})});if(!b.ok)throw Error(`Failed to apply voucher: ${b.status} ${b.statusText}`);let c=await b.json();if(c.errors&&c.errors.length>0)throw Error(c.errors[0].message||"Failed to apply voucher");let d=c.data?.checkoutAddPromoCode;if(d?.errors&&d.errors.length>0){let a=d.errors[0];switch(a.code){case"INVALID":a1("Promo code is invalid");break;case"VOUCHER_NOT_APPLICABLE":a1("Voucher is not applicable to this checkout");break;default:a1(a.message||"Failed to apply voucher")}return}if(d?.checkout){let a=d.checkout;aZ({voucherCode:a.voucherCode||null,discount:a.discount?{amount:a.discount.amount,currency:a.discount.currency}:null});let b=a.totalPrice?.gross?.amount;"number"==typeof b&&au(b)}}catch(a){console.error("Error applying voucher:",a),a1(a instanceof Error?a.message:"Failed to apply voucher")}finally{a_(!1)}},[h,bA]),bG=(0,p.useCallback)(async()=>{if(h&&aY?.voucherCode){a_(!0),a1(null);try{let a={checkoutId:h,promoCode:aY.voucherCode},b=await fetch(bA,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:y,variables:a})});if(!b.ok)throw Error(`Failed to remove voucher: ${b.status} ${b.statusText}`);let c=await b.json();if(c.errors&&c.errors.length>0)throw Error(c.errors[0].message||"Failed to remove voucher");let d=c.data?.checkoutRemovePromoCode;if(d?.errors&&d.errors.length>0)return void a1(d.errors[0].message||"Failed to remove voucher");if(d?.checkout){let a=d.checkout;aZ({voucherCode:a.voucherCode||null,discount:a.discount?{amount:a.discount.amount,currency:a.discount.currency}:null});let b=a.totalPrice?.gross?.amount;"number"==typeof b&&au(b)}}catch(a){console.error("Error removing voucher:",a),a1(a instanceof Error?a.message:"Failed to remove voucher")}finally{a_(!1)}}},[h,bA,aY?.voucherCode]),bH=(0,p.useCallback)(a=>({firstName:a.firstName?.trim()||"",lastName:a.lastName?.trim()||"",streetAddress1:a.address?.trim()||"",city:a.city?.trim()||"",postalCode:a.zipCode?.trim()||"",country:a.country||"US",countryArea:a.state?.trim()||void 0,phone:a.phone?.trim()||null}),[]),bI=(0,p.useCallback)(a=>({firstName:a?.firstName||"",lastName:a?.lastName||"",streetAddress1:a?.streetAddress1||"",city:a?.city||"",postalCode:a?.postalCode||"",country:a?.country?.code||"",countryArea:a?.countryArea||void 0,phone:a?.phone??null}),[]),{data:bJ,refetch:bK}=(0,I.IT)(F.D,{skip:!c,fetchPolicy:"cache-and-network"}),{data:bL}=(0,I.IT)((0,s.J1)(C),{variables:{checkoutId:h},skip:!h,fetchPolicy:"cache-and-network"}),[bM]=(0,J.n)(u.Y,{refetchQueries:[{query:F.D}]}),[bN]=(0,J.n)(E),bO=(0,p.useMemo)(()=>{let a=bJ?.me;if(!a||!a.addresses?.length)return null;let b=a.defaultShippingAddress?.id;return(b?a.addresses.find(a=>a.id===b):a.addresses[0])||null},[bJ]),bP=(0,p.useMemo)(()=>{let a=bJ?.me;if(!a||!a.addresses?.length)return null;let b=a.defaultBillingAddress?.id;return(b?a.addresses.find(a=>a.id===b):a.addresses[0])||null},[bJ]),[bQ,bR]=(0,p.useState)(null),[bS,bT]=(0,p.useState)(null),[bU,bV]=(0,p.useState)(!1),bW=async(a,b)=>{if(c&&a)try{let{data:c}=await bM({variables:{id:a,type:b}});if(c?.accountSetDefaultAddress?.errors?.length)throw Error(c.accountSetDefaultAddress.errors[0]?.message||"Failed to update default address");"SHIPPING"===b?bR(a):bT(a),await bK()}catch(a){console.error(`Failed to set default ${b.toLowerCase()} address:`,a)}},bX=(0,p.useMemo)(()=>!!(bq.firstName&&bq.lastName&&bq.address&&bq.city&&bq.zipCode&&bq.country),[bq]),bY=(0,p.useMemo)(()=>{if(aH&&aJ)return{firstName:"Dealer",lastName:"Pickup",streetAddress1:aJ.address.streetAddress1||"",city:aJ.address.city||"",postalCode:aJ.address.postalCode||"",country:aJ.address.country?.code||"US",countryArea:aJ.address?.countryArea||"",phone:aJ.phone||null};if(c&&bQ){let a=bJ?.me?.addresses?.find(a=>a.id===bQ);return a?bI(a):null}return c&&bO&&bU?bI(bO):bX?bH(bq):null},[aH,aJ,c,bQ,bJ,bO,bU,bX,bq,bI,bH]),bZ=(0,p.useMemo)(()=>!!(bw.firstName&&bw.lastName&&bw.address&&bw.city&&bw.zipCode&&bw.country),[bw]),b$=(0,p.useMemo)(()=>{if(aH)return!!aJ;if(!bU)return!1;if(c){let a=!!bQ,b=bJ?.me?.addresses?.some(a=>a.id===bQ);return a&&b}return bX},[aH,aJ,bU,c,bQ,bJ,bX]);(0,p.useMemo)(()=>{if(ap){if(aH){if(c&&bQ){let a=bJ?.me?.addresses?.find(a=>a.id===bQ);return a?bI(a):bY}return bX?bH(bq):bY}return bY&&bX?bY:null}if(c){let a=bS?bJ?.me?.addresses?.find(a=>a.id===bS):bP;return a?bI(a):null}return bZ?bH(bw):null},[ap,aH,c,bQ,bJ,bI,bY,bX,bq,bH,bS,bP,bw,bZ]);let b_=(0,p.useCallback)(async a=>{if(bj.current)return await T(100),ab;if(Date.now()-bn.current<200)return ab;bj.current=!0,ae(!0),ag(null);try{let b=await fetch(bA,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:B,variables:{id:a}})});if(!b.ok){let a=`Failed to fetch shipping methods: ${b.status} ${b.statusText}`;throw 401===b.status||403===b.status?a="Your session has expired. Please refresh the page to continue.":408===b.status||504===b.status?a="Request timeout occurred. Please check your connection and try again.":b.status>=500&&(a="Server error occurred. Please try again in a moment."),Error(a)}let c=await b.json();if(c.errors)throw Error(c.errors[0]?.message||"GraphQL error");let d=(c.data?.checkout?.availableShippingMethods||[]).map(a=>({id:a.id,name:a.name,price:{amount:a.price.amount,currency:a.price.currency},minimumDeliveryDays:a.minimumDeliveryDays??null,maximumDeliveryDays:a.maximumDeliveryDays??null}));if(ac(d),bn.current=Date.now(),d.length)ag(null),n&&(q(null),am(!1)),aj&&!(aj&&d.some(a=>a.id===aj))&&(ak(null),q(null),am(!1));else ak(null),q(null),am(!1),ab.length>0?ag("No shipping methods available. This might be due to session expiry. Please refresh the page if the issue persists."):ag(null),bn.current=Date.now(),bm.current||(bm.current="no-methods-available");return d}catch(b){let a="Failed to load shipping methods";if(b instanceof Error)if("AbortError"===b.name)return ab;else a=b.message.includes("Failed to fetch")||b.message.includes("NetworkError")?"Network connection issue. Please check your internet and try again.":b.message.includes("timeout")?"Request timeout. Please try again.":b.message;throw ag(a),b}finally{ae(!1),bj.current=!1}},[bA]),b0=(0,p.useCallback)(async a=>{if(ab.length>0)return ab;try{return await b_(a)}catch(b){return console.warn("Failed to fetch shipping methods, retrying...",b),await U(async()=>await b_(a),2,1e3)}},[b_]),b1=(0,p.useCallback)(async()=>{if(h&&!ad&&!ax){ag(null),ac([]),bn.current=0,bm.current="";try{await b_(h)}catch(a){throw ag(a instanceof Error?a.message:"Failed to retry shipping methods"),a}}},[h,b_]);(0,p.useCallback)(async a=>{if(a){bf(!0),bh(null);try{let{data:b}=await $.query({query:D,variables:{checkoutId:a},fetchPolicy:"network-only"});b?.checkout?.availableCollectionPoints?a9(b.checkout.availableCollectionPoints):a9([])}catch(a){console.error("Failed to fetch collection points:",a),bh("Failed to load pickup locations"),a9([])}finally{bf(!1)}}},[$]);let b2=(0,p.useCallback)(async a=>{if(h){ao(!0),bb(a),ak(null),q(null),am(!1),bd(!0),aw(a=>a?{...a,shippingTax:0,shippingNet:0}:null),b5.current=null,ay(!0);try{let b=await bN({variables:{id:h,deliveryMethodId:a}});if(b.data?.checkoutDeliveryMethodUpdate?.errors?.length){let a=b.data.checkoutDeliveryMethodUpdate.errors[0];throw Error(a.message)}am(!0);let c=b.data?.checkoutDeliveryMethodUpdate?.checkout;c?.subtotalPrice?.gross?.amount!==void 0&&au(c.subtotalPrice.gross.amount)}catch(a){console.error("Failed to set collection point:",a),bh(a instanceof Error?a.message:"Failed to set pickup location"),bb(null)}finally{ay(!1),ao(!1)}}},[h,bN]),b3=(0,p.useRef)(null),b4=(0,p.useRef)(null),b5=(0,p.useRef)(null);(0,p.useRef)(null);let b6=(0,p.useCallback)(async(a=!1)=>{let b=c?W?.email:bq.email;if(!b||""===b.trim())throw Error("Email address is required to complete your order.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b))throw Error("Please enter a valid email address.");if(c||(G.o.getState().setGuestEmail(bq.email),G.o.getState().setGuestShippingInfo({firstName:bq.firstName,lastName:bq.lastName,address:bq.address,city:bq.city,state:bq.state,zipCode:bq.zipCode,phone:bq.phone,country:bq.country})),!h)throw Error("Checkout ID is missing. Please refresh the page and try again.");if(!aj&&!ba)throw V("Please select a delivery method or pickup location before completing your order.");if(a||ba)return;let d=ab,e=d.find(a=>a.id===aj);if(0===d.length||!e)try{if(e=(d=await b0(h)).find(a=>a.id===aj),0===d.length)if(console.error("No shipping methods available after fresh fetch - this might be a temporary API issue"),aj&&ab.length>0)if(console.warn("Using previously validated shipping methods for payment completion"),e=(d=ab).find(a=>a.id===aj));else throw Error("No delivery methods are available and cached method is invalid. Please refresh the page and try again.");else throw Error("No delivery methods are available. This may be due to checkout session issues. Please refresh the page and try again.")}catch(a){if(a instanceof Error){if(a.message.includes("No delivery methods"))throw a;else if(a.message.includes("session")||a.message.includes("expired")||a.message.includes("401")||a.message.includes("403"))throw Error("Your checkout session has expired. Please refresh the page to start a new checkout session.");else if(a.message.includes("network")||a.message.includes("Failed to fetch"))throw Error("Network connection issue during checkout validation. Please check your connection and try again.")}throw Error("Unable to validate delivery methods during checkout. Please refresh the page and try again.")}if(!e)try{if(aC(!0),ag(null),ac([]),bn.current=0,bm.current="",!(e=(d=await b_(h)).find(a=>a.id===aj))){if(ak(null),q(null),am(!1),0===d.length)throw V("No delivery methods are currently available for your address. Please verify your shipping address or contact support.");throw V(`Your previously selected delivery method is no longer available. Please choose from the ${d.length} available method${d.length>1?"s":""} below and try again.`)}}catch(a){if(a instanceof Error&&a.message.includes("No delivery methods")||a instanceof Error&&a.message.includes("available method"))throw a;throw V("The delivery method became unavailable during payment processing. Please select a new delivery method and try again.")}finally{aC(!1)}if(ax&&await T(300),aj)try{await bE(h,aj);let a=await fetch(`${process.env.NEXT_PUBLIC_API_URL||"/api/graphql"}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
            query VerifyDeliveryMethod($checkoutId: ID!) {
              checkout(id: $checkoutId) {
                id
                deliveryMethod {
                  ... on ShippingMethod {
                    id
                    name
                  }
                }
              }
            }
          `,variables:{checkoutId:h}})});if(a.ok){let b=await a.json(),c=b.data?.checkout?.deliveryMethod;if(!c||c.id!==aj){console.warn("Delivery method verification failed, retrying...");try{await bE(h,aj)}catch(a){console.warn("Retry also failed, but proceeding with payment since method was originally valid:",a)}}}else console.warn("Verification request failed, but proceeding with payment since method was originally valid")}catch(a){if(a instanceof Error){if(a.message.includes("Couldn't resolve to a node"))try{throw await b1(),ak(null),q(null),am(!1),V("The delivery method became invalid during checkout. Fresh delivery options have been loaded - please select one and try again.")}catch(a){if(ak(null),q(null),am(!1),a instanceof Error){if(a.message.includes("session")||a.message.includes("expired"))throw Error("Your session expired during checkout. The page will reload automatically to restore your session.");else if(a.message.includes("network")||a.message.includes("Failed to fetch"))throw V("Network connection issue during checkout. Please check your connection and try selecting a delivery method again.")}throw V("The delivery method became unavailable during payment processing. Please select a new delivery method and try again.")}else if(a.message.includes("not applicable"))throw ak(null),q(null),am(!1),V("The selected shipping method is not available for your address or items. Please choose a different delivery method and try again.");throw V(`Unable to confirm delivery method: ${a.message}`)}throw V("Failed to confirm delivery method. Please refresh and try again.")}},[c,bq,h,aj,ba,ax,bE,b0]),b7=(0,p.useMemo)(()=>ab.find(a=>a.id===aj)||null,[ab,aj]),b8=(0,p.useMemo)(()=>"number"==typeof at&&at>0?at:(b7?.price?.amount||0)+b,[at,b,b7]),b9=(0,p.useRef)(null),ca=a=>{let{name:b,value:d}=a.target;if(br(a=>({...a,[b]:d})),"email"===b){let a=bs(d);ai(a),b9.current&&clearTimeout(b9.current),!a&&!c&&h&&d.trim()&&(b9.current&&clearTimeout(b9.current),b9.current=setTimeout(()=>{bD(h,d,a=>{ai(a)})},1e3))}c||bU||bV(!0),["firstName","lastName","address","city","zipCode","state","country"].includes(b)&&(bc&&(bd(!1),bb(null),bh(null),af&&(af.includes("click and collect")||af.includes("warehouse address"))&&ag(null)),aw(null),aE(!1),bm.current="",bn.current=0,bj.current=!1,af&&(af.includes("No delivery methods found")||af.includes("not valid for the address")||af.includes("Delivery Method Error"))&&(ag(null),ac([])),af&&af.includes("postal code")&&(ag(null),bm.current="",bn.current=0),bo.current&&(clearTimeout(bo.current),bo.current=null),("state"===b||"country"===b)&&setTimeout(()=>{let a=new CustomEvent("revalidatePostalCode",{detail:{changedField:b,newValue:d}});window.dispatchEvent(a)},100)),"zipCode"===b&&(bo.current=setTimeout(()=>{if(!ad&&!ax){let a=bu(d,bq.country);!a&&d.length>=3?ag("Please enter a valid postal code for the selected country."):a&&af&&af.includes("postal code")&&(ag(null),bm.current="",bn.current=0)}},1500))},cb=async()=>{try{let a=ap?bH(bq):bH(bw);h&&(await bC(h,a),await bB(h,bH(bq))),window.location.href=`/order-confirmation${h?`?checkoutId=${encodeURIComponent(h)}`:""}`}catch(a){console.error("Error during checkout:",a)}},cc=(0,p.useMemo)(()=>{if("number"==typeof at&&at>0)return at;if(b7&&b>0)return b+(b7.price?.amount||0);if(aj&&ab.length>0&&b>0){let a=ab.find(a=>a.id===aj);if(a)return b+(a.price?.amount||0)}return null},[at,b7,b,aj,ab]),cd=(0,p.useCallback)(a=>{aG({fn:a})},[]);return _?0!==a.length||h?(0,d.jsxs)("div",{className:"px-4 md:px-6 md:py-8 py-6 lg:max-w-7xl mx-auto lg:py-10",children:[(0,d.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-14",children:[(0,d.jsxs)("div",{className:"lg:col-span-2 space-y-4 lg:border-r lg:border-[var(--color-secondary-200)] lg:pr-14",children:[(0,d.jsx)(k,{isLoggedIn:c}),(0,d.jsx)(m,{isLoggedIn:c,userEmail:W?.email,guestEmail:bq.email,onEmailChange:ca,emailError:ah}),(0,d.jsx)(O,{isShipToDealer:aH,onShippingTypeChange:aI,selectedDealer:aJ,onDealerSelect:aK}),!aH&&(0,d.jsx)(N,{isLoggedIn:c,shippingInfo:bq,billingInfo:bw,useShippingAsBilling:ap,onShippingChange:ca,onBillingChange:a=>{let{name:b,value:c}=a.target;bx(a=>({...a,[b]:c}))},onUseShippingAsBillingChange:a=>{aq(a),a&&bx({...bq,email:bq.email})},onShippingPhoneChange:a=>br(b=>({...b,phone:a})),onBillingPhoneChange:a=>{bx(b=>({...b,phone:a}))},meData:bJ,formData:by,setFormData:bz,selectedAddressId:bQ,setSelectedAddressId:a=>{bR(a),bV(!0),aw(null),aE(!1),af&&af.includes("No delivery methods found")&&(ag(null),bm.current="",bn.current=0,bj.current=!1,ac([]))},selectedBillingAddressId:bS,setSelectedBillingAddressId:bT,onAddressAdded:async()=>{await bK()},onSetDefaultAddress:bW}),aU.length>0&&(0,d.jsx)("div",{className:"bg-orange-50 border border-orange-200 rounded-lg p-4",children:(0,d.jsxs)("div",{className:"flex items-start gap-3",children:[(0,d.jsx)("div",{className:"flex-shrink-0 mt-0.5",children:(0,d.jsx)("svg",{className:"w-5 h-5 text-orange-600",fill:"currentColor",viewBox:"0 0 20 20",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),(0,d.jsxs)("div",{className:"flex-1",children:[(0,d.jsxs)("h3",{className:"text-sm font-semibold text-orange-800 mb-3 uppercase tracking-wide",children:["Shipping Restriction",aU.length>1?"s":""," Detected"]}),(0,d.jsx)("div",{className:"space-y-4",children:aU.map((a,b)=>(0,d.jsxs)("div",{className:"bg-white border border-orange-100 rounded p-3",children:[(0,d.jsx)("p",{className:"font-medium text-orange-900 text-sm",children:a.productName}),(0,d.jsx)("p",{className:"text-orange-700 text-sm mt-1",children:a.checkoutMessage})]},b))}),(0,d.jsx)("div",{className:"mt-4 p-3 bg-orange-100 rounded border border-orange-200",children:(0,d.jsx)("p",{className:"text-sm text-orange-800 font-medium",children:"Please update your shipping address or remove the restricted item(s) to continue."})})]})]})}),!aW&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{checkoutId:h,canShowDeliveryMethods:!!b$,hasCompleteShippingInfo:!!bX,missingForDelivery:bv,shippingLoading:ad,shippingMethods:ab,shippingError:af,selectedShippingId:aj,isUpdatingDelivery:ax||aB,isProcessingSelection:an,isWillCallSelected:bc,onShippingMethodSelect:async a=>{ao(!0);try{if(bc&&h)try{if((!ab.find(b=>b.id===a)||0===ab.length)&&(ae(!0),ag(null),b5.current=null,!(await b_(h)).find(b=>b.id===a))){ag("The selected shipping method is no longer available. Please select a different method."),ao(!1);return}}catch(a){console.error("Failed to fetch fresh shipping methods:",a),ag("Failed to load shipping methods. Please try again."),ao(!1);return}finally{ae(!1)}else if(!ab.find(b=>b.id===a)){ag("The selected shipping method is no longer available. Please refresh the page and select a different method."),ao(!1);return}ak(a),q(a),am(!0),bd(!1),bb(null),af&&(af.includes("click and collect")||af.includes("warehouse address"))&&ag(null)}finally{ao(!1)}},onRetryShippingMethods:b1}),(0,d.jsx)(P,{checkoutId:h,willCallEnabled:Y(),collectionPoints:a8,selectedCollectionPointId:ba,isUpdatingDelivery:ax||aB,isProcessingSelection:an,onCollectionPointSelect:b2,userState:bq.state,willCallLoading:be,willCallError:bg})]}),h&&cc&&!az&&(aj&&al||bc&&ba)&&!aW&&(0,d.jsx)(R,{isLoggedIn:c,grandTotal:b8,checkoutId:h,onQuestionsChange:aL,onValidationChange:aN,onSaveQuestions:a=>aP(()=>a)}),h&&(0,d.jsx)(Q,{onBack:()=>{},onComplete:cb,totalAmount:cc||0,checkoutId:h,availablePaymentGateways:bL?.checkout?.availablePaymentGateways,kountConfig:a2,taxInfo:av,isCalculatingTotal:az,disabled:az||aW||!(aj&&al||bc&&ba),onPaymentReady:cd,onStartPayment:async()=>{if(bi?.page?.isPublished&&!aQ)throw Error("Please accept the Terms and Conditions to continue.");if(await b6(!0),aO&&"function"==typeof aO)try{await aO()}catch(a){console.error("Failed to save checkout questions:",a)}},isProcessingPayment:ar,setIsProcessingPayment:as,selectedShippingId:aj||void 0,userEmail:W?.email,guestEmail:bq.email,lineItems:a,questionsValid:aM,termsAccepted:aQ,termsData:bi,onTermsModalOpen:()=>aT(!0),onTermsAcceptedChange:aR,billingAddress:(()=>{let a=ap?bq:bw;if(a.firstName&&a.lastName&&a.address&&a.city&&a.zipCode)return{firstName:a.firstName||"",lastName:a.lastName||"",address:a.address||"",city:a.city||"",state:a.state||"",zipCode:a.zipCode||"",country:a.country||"US",phone:a.phone||void 0}})(),shippingAddress:aH&&aJ?{firstName:"Dealer",lastName:"Pickup",address:aJ.address.streetAddress1||"",city:aJ.address.city||"",state:aJ.address.countryArea||"",zipCode:aJ.address.postalCode||"",country:aJ.address.country?.code||"US",phone:aJ.phone||void 0,dealerName:aJ.name}:bq.firstName&&bq.lastName&&bq.address&&bq.city&&bq.zipCode?{firstName:bq.firstName||"",lastName:bq.lastName||"",address:bq.address||"",city:bq.city||"",state:bq.state||"",zipCode:bq.zipCode||"",country:bq.country||"US",phone:bq.phone||void 0}:void 0})]}),(0,d.jsx)(r,{totalAmount:b,selectedShipping:b7,grandTotal:b8,saleorTotal:at,isUpdatingDelivery:ax,shippingLoading:ad,isCalculatingTotal:az,taxInfo:av,isCalculatingTax:aD,voucherInfo:aY,onApplyVoucher:bF,onRemoveVoucher:bG,isApplyingVoucher:a$,voucherError:a0,selectedCollectionPointId:ba,onCompletePayment:aF.fn||void 0,isPaymentProcessing:ar.isModalOpen,paymentDisabled:az||aW||!(aj&&al||bc&&ba),paymentDisabledReason:az?"Calculating total...":aW?"Please resolve product restrictions":"Select a delivery method"})]}),(0,d.jsx)(S,{isModalOpen:aS,onClose:()=>aT(!1)})]}):(0,d.jsx)(K.A,{className:"h-[80vh]",text:"Your cart is empty",buttonLabel:"Continue Shopping",onClick:()=>Z.push("/")}):(0,d.jsx)(L.A,{className:"h-[80vh]"})}},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},11491:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>B.default,__next_app__:()=>H,handler:()=>J,pages:()=>G,routeModule:()=>I,tree:()=>F});var d=c(24332),e=c(48819),f=c(93949),g=c(98730),h=c(88996),i=c(16318),j=c(3093),k=c(36748),l=c(98190),m=c(53904),n=c(47735),o=c(20611),p=c(22512),q=c(261),r=c(13863),s=c(8748),t=c(26713),u=c(65262),v=c(97779),w=c(5303),x=c(66704),y=c(67656),z=c(3072),A=c(86439),B=c(84423),C=c(97540),D=c(49005),E={};for(let a in C)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(E[a]=()=>C[a]);c.d(b,E);let F={children:["",{children:["checkout",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,83361)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/checkout/page.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,64954)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/checkout/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,216)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/layout.tsx"],error:[()=>Promise.resolve().then(c.bind(c,80765)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/error.tsx"],"global-error":[()=>Promise.resolve().then(c.bind(c,84423)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/global-error.tsx"],"not-found":[()=>Promise.resolve().then(c.bind(c,87239)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/not-found.tsx"],"global-error":[()=>Promise.resolve().then(c.bind(c,84423)),"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/global-error.tsx"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,35983,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,74482,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,G=["/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/checkout/page.tsx"],H={require:c,loadChunk:()=>Promise.resolve()},I=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/checkout/page",pathname:"/checkout",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:F},distDir:".next",projectDir:""});async function J(a,b,c){var d;let E="/checkout/page";"/index"===E&&(E="/");let K="false",L=(0,h.getRequestMeta)(a,"postponed"),M=(0,h.getRequestMeta)(a,"minimalMode"),N=await I.prepare(a,b,{srcPage:E,multiZoneDraftMode:K});if(!N)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:O,query:P,params:Q,parsedUrl:R,pageIsDynamic:S,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,serverActionsManifest:W,clientReferenceManifest:X,subresourceIntegrityManifest:Y,prerenderManifest:Z,isDraftMode:$,resolvedPathname:_,revalidateOnlyGenerated:aa,routerServerContext:ab,nextConfig:ac}=N,ad=R.pathname||"/",ae=(0,q.normalizeAppPath)(E),{isOnDemandRevalidate:af}=N,ag=Z.dynamicRoutes[ae],ah=Z.routes[_],ai=!!(ag||ah||Z.routes[ae]),aj=a.headers["user-agent"]||"",ak=(0,t.getBotType)(aj),al=(0,o.isHtmlBotRequest)(a),am=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??!!a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],an=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ao=(0,r.getIsPossibleServerAction)(a),ap=(0,l.checkIsAppPPREnabled)(ac.experimental.ppr)&&(null==(d=Z.routes[ae]??Z.dynamicRoutes[ae])?void 0:d.renderingMode)==="PARTIALLY_STATIC",aq=!1,ar=!1,as=ap?L:void 0,at=ap&&an&&!am,au=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),av=!aj||(0,o.shouldServeStreamingMetadata)(aj,ac.htmlLimitedBots);al&&ap&&(ai=!1,av=!1);let aw=!0===I.isDev||!ai||"string"==typeof L||at,ax=al&&ap,ay=null;$||!ai||aw||ao||as||at||(ay=_);let az=ay;!az&&I.isDev&&(az=_);let aA={...C,tree:F,pages:G,GlobalError:B.default,handler:J,routeModule:I,__next_app__:H};W&&X&&(0,n.setReferenceManifestsSingleton)({page:E,clientReferenceManifest:X,serverActionsManifest:W,serverModuleMap:(0,p.createServerModuleMap)({serverActionsManifest:W})});let aB=a.method||"GET",aC=(0,g.getTracer)(),aD=aC.getActiveScopeSpan();try{let d=async(c,d)=>{let e=new k.NodeNextRequest(a),f=new k.NodeNextResponse(b);return I.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aC.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aB} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aB} ${a.url}`)})},f=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:P,params:Q,page:ae,sharedContext:{buildId:O},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aA,Component:(0,j.T)(aA),params:Q,routeModule:I,page:E,postponed:f,shouldWaitOnAllReady:ax,serveStreamingMetadata:av,supportsDynamicResponse:"string"==typeof f||aw,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,subresourceIntegrityManifest:Y,serverActionsManifest:W,clientReferenceManifest:X,setIsrStatus:null==ab?void 0:ab.setIsrStatus,dir:I.projectDir,isDraftMode:$,isRevalidate:ai&&!f&&!at,botType:ak,isOnDemandRevalidate:af,isPossibleServerAction:ao,assetPrefix:ac.assetPrefix,nextConfigOutput:ac.output,crossOrigin:ac.crossOrigin,trailingSlash:ac.trailingSlash,previewProps:Z.preview,deploymentId:ac.deploymentId,enableTainting:ac.experimental.taint,htmlLimitedBots:ac.htmlLimitedBots,devtoolSegmentExplorer:ac.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ac.reactMaxHeadersLength,multiZoneDraftMode:K,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ac.experimental.cacheLife,basePath:ac.basePath,serverActions:ac.experimental.serverActions,...aq?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:aq}:{},experimental:{isRoutePPREnabled:ap,expireTime:ac.expireTime,staleTimes:ac.experimental.staleTimes,dynamicIO:!!ac.experimental.dynamicIO,clientSegmentCache:!!ac.experimental.clientSegmentCache,dynamicOnHover:!!ac.experimental.dynamicOnHover,inlineCss:!!ac.experimental.inlineCss,authInterrupts:!!ac.experimental.authInterrupts,clientTraceMetadata:ac.experimental.clientTraceMetadata||[]},waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>I.onRequestError(a,b,d,ab),err:(0,h.getRequestMeta)(a,"invokeError"),dev:I.isDev}},k=await d(e,i),{metadata:l}=k,{cacheControl:m,headers:n={},fetchTags:o}=l;if(o&&(n[x.NEXT_CACHE_TAGS_HEADER]=o),a.fetchMetrics=l.fetchMetrics,ai&&(null==m?void 0:m.revalidate)===0&&!I.isDev&&!ap){let a=l.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${_}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:k,headers:n,rscData:l.flightData,postponed:l.postponed,status:l.statusCode,segmentData:l.segmentData},cacheControl:m}},l=async({hasResolved:d,previousCacheEntry:g,isRevalidating:i,span:j})=>{let k,l=!1===I.isDev,n=d||b.writableEnded;if(af&&aa&&!g&&!M)return(null==ab?void 0:ab.render404)?await ab.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ag&&(k=(0,v.parseFallbackField)(ag.fallback)),k===v.FallbackMode.PRERENDER&&(0,t.isBot)(aj)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(af=!0),af&&(k!==v.FallbackMode.NOT_FOUND||g)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),!M&&k!==v.FallbackMode.BLOCKING_STATIC_RENDER&&az&&!n&&!$&&S&&(l||!ah)){let b;if((l||ag)&&k===v.FallbackMode.NOT_FOUND)throw new A.NoFallbackError;if(ap&&!an){if(b=await I.handleResponse({cacheKey:l?ae:null,req:a,nextConfig:ac,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:Z,isRoutePPREnabled:ap,responseGenerator:async()=>f({span:j,postponed:void 0,fallbackRouteParams:l||ar?(0,m.u)(ae):null}),waitUntil:c.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=af||i||!as?void 0:as;if(aq&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.fromStatic(""),pageData:{},headers:void 0,status:void 0}};let p=S&&ap&&((0,h.getRequestMeta)(a,"renderFallbackShell")||ar)?(0,m.u)(ad):null;return f({span:j,postponed:o,fallbackRouteParams:p})},n=async d=>{var g,i,j,k,m;let n,o=await I.handleResponse({cacheKey:ay,responseGenerator:a=>l({span:d,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:af,isRoutePPREnabled:ap,req:a,nextConfig:ac,prerenderManifest:Z,waitUntil:c.waitUntil});if($&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),I.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!o){if(ay)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(g=o.value)?void 0:g.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(j=o.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof o.value.postponed;ai&&!at&&(!p||am)&&(M||b.setHeader("x-nextjs-cache",af?"REVALIDATED":o.isMiss?"MISS":o.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=o;if(as)n={revalidate:0,expire:void 0};else if(M&&an&&!am&&ap)n={revalidate:0,expire:void 0};else if(!I.isDev)if($)n={revalidate:0,expire:void 0};else if(ai){if(o.cacheControl)if("number"==typeof o.cacheControl.revalidate){if(o.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${o.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});n={revalidate:o.cacheControl.revalidate,expire:(null==(k=o.cacheControl)?void 0:k.expire)??ac.expireTime}}else n={revalidate:x.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(n={revalidate:0,expire:void 0});if(o.cacheControl=n,"string"==typeof au&&(null==q?void 0:q.kind)===u.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(m=q.headers)?void 0:m[x.NEXT_CACHE_TAGS_HEADER];M&&ai&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(au);return void 0!==d?(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(d),cacheControl:o.cacheControl}):(b.statusCode=204,(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(""),cacheControl:o.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...o,value:{...o.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&as)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(M&&ai||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(i=q.headers)?void 0:i[x.NEXT_CACHE_TAGS_HEADER];if(M&&ai&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!q.status||an&&ap||(b.statusCode=q.status),!M&&q.status&&D.RedirectStatusCode[q.status]&&an&&(b.statusCode=200),p&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),an&&!$){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:q.html,cacheControl:at?{revalidate:0,expire:void 0}:o.cacheControl})}return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(q.rscData),cacheControl:o.cacheControl})}let v=q.html;if(!p||M)return(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:o.cacheControl});if(aq)return v.chain(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let A=new TransformStream;return v.chain(A.readable),f({span:d,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(A.writable)}).catch(a=>{A.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aD)return await aC.withPropagatedContext(a.headers,()=>aC.trace(i.BaseServerSpan.handleRequest,{spanName:`${aB} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aB,"http.target":a.url}},n));await n(aD)}catch(b){throw aD||b instanceof A.NoFallbackError||await I.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ai,isOnDemandRevalidate:af})},ab),b}}},12430:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return j}});let d=c(13486),e=c(60159),f=c(55201),g=c(21188);function h(a){return{default:a&&"default"in a?a.default:a}}let i={loader:()=>Promise.resolve(h(()=>null)),loading:null,ssr:!0},j=function(a){let b={...i,...a},c=(0,e.lazy)(()=>b.loader().then(h)),j=b.loading;function k(a){let h=j?(0,d.jsx)(j,{isLoading:!0,pastDelay:!0,error:null}):null,i=!b.ssr||!!b.loading,k=i?e.Suspense:e.Fragment,l=b.ssr?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.PreloadChunks,{moduleIds:b.modules}),(0,d.jsx)(c,{...a})]}):(0,d.jsx)(f.BailoutToCSR,{reason:"next/dynamic",children:(0,d.jsx)(c,{...a})});return(0,d.jsx)(k,{...i?{fallback:h}:{},children:l})}return k.displayName="LoadableComponent",k}},18187:(a,b,c)=>{"use strict";c.d(b,{default:()=>e.a});var d=c(5414),e=c.n(d)},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21188:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"PreloadChunks",{enumerable:!0,get:function(){return h}});let d=c(13486),e=c(22358),f=c(29294),g=c(95718);function h(a){let{moduleIds:b}=a,c=f.workAsyncStorage.getStore();if(void 0===c)return null;let h=[];if(c.reactLoadableManifest&&b){let a=c.reactLoadableManifest;for(let c of b){if(!a[c])continue;let b=a[c].files;h.push(...b)}}return 0===h.length?null:(0,d.jsx)(d.Fragment,{children:h.map(a=>{let b=c.assetPrefix+"/_next/"+(0,g.encodeURIPath)(a);return a.endsWith(".css")?(0,d.jsx)("link",{precedence:"dynamic",href:b,rel:"stylesheet",as:"style"},a):((0,e.preload)(b,{as:"script",fetchPriority:"low"}),null)})})}},23572:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/checkout/CheckoutPageClient.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/checkout/CheckoutPageClient.tsx","default")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30511:(a,b,c)=>{"use strict";c.d(b,{H:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_673_17)",children:[(0,d.jsx)("path",{d:"M3.125 10H16.875",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M11.25 4.375L16.875 10L11.25 15.625",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_673_17",children:(0,d.jsx)("rect",{width:20,height:20,fill:"currentColor"})})})]})},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},55201:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"BailoutToCSR",{enumerable:!0,get:function(){return e}});let d=c(71629);function e(a){let{reason:b,children:c}=a;throw Object.defineProperty(new d.BailoutToCSRError(b),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0})}},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64954:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>f,metadata:()=>e});var d=c(50084);let e={title:`Checkout - ${(0,d.lv)()}`,description:"Complete your purchase securely. Enter shipping and billing information, select delivery options, and finalize your order.",robots:{index:!1,follow:!1}};function f({children:a}){return a}},65806:(a,b,c)=>{Promise.resolve().then(c.bind(c,9971))},83361:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>h,metadata:()=>g});var d=c(38828),e=c(50084),f=c(23572);let g={title:"Checkout",description:`Complete your purchase at ${(0,e.lv)()}. Secure checkout with multiple payment options.`,robots:{index:!1,follow:!1}};function h(){return(0,d.jsx)(f.default,{})}},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},90904:(a,b,c)=>{"use strict";c.d(b,{w:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_2116_69868)",children:[(0,d.jsx)("path",{opacity:"0.2",d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M9.375 9.375C9.54076 9.375 9.69973 9.44085 9.81694 9.55806C9.93415 9.67527 10 9.83424 10 10V13.125C10 13.2908 10.0658 13.4497 10.1831 13.5669C10.3003 13.6842 10.4592 13.75 10.625 13.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M9.6875 7.5C10.2053 7.5 10.625 7.08027 10.625 6.5625C10.625 6.04473 10.2053 5.625 9.6875 5.625C9.16973 5.625 8.75 6.04473 8.75 6.5625C8.75 7.08027 9.16973 7.5 9.6875 7.5Z",fill:"currentColor"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_2116_69868",children:(0,d.jsx)("rect",{width:"20",height:"20",fill:"white"})})})]})},95718:(a,b)=>{"use strict";function c(a){return a.split("/").map(a=>encodeURIComponent(a)).join("/")}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"encodeURIPath",{enumerable:!0,get:function(){return c}})}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[3355,9399,6544,3598,596],()=>b(b.s=11491));module.exports=c})();