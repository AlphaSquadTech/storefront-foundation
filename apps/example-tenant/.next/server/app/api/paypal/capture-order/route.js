(()=>{var a={};a.id=9211,a.ids=[9211],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},36523:(a,b,c)=>{"use strict";Object.defineProperty(b,"I",{enumerable:!0,get:function(){return g}});let d=c(89843),e=c(72962),f=c(45393);async function g(a,b,c,g){if((0,d.isNodeNextResponse)(b)){var h;b.statusCode=c.status,b.statusMessage=c.statusText;let d=["set-cookie","www-authenticate","proxy-authenticate","vary"];null==(h=c.headers)||h.forEach((a,c)=>{if("x-middleware-set-cookie"!==c.toLowerCase())if("set-cookie"===c.toLowerCase())for(let d of(0,f.splitCookiesString)(a))b.appendHeader(c,d);else{let e=void 0!==b.getHeader(c);(d.includes(c.toLowerCase())||!e)&&b.appendHeader(c,a)}});let{originalResponse:i}=b;c.body&&"HEAD"!==a.method?await (0,e.pipeToNodeResponse)(c.body,i,g):i.end()}}},44870:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},48106:(a,b,c)=>{"use strict";a.exports=c(44870)},53994:(a,b,c)=>{"use strict";c.r(b),c.d(b,{handler:()=>D,patchFetch:()=>C,routeModule:()=>y,serverHooks:()=>B,workAsyncStorage:()=>z,workUnitAsyncStorage:()=>A});var d={};c.r(d),c.d(d,{POST:()=>x});var e=c(48106),f=c(48819),g=c(12050),h=c(88996),i=c(98730),j=c(261),k=c(36748),l=c(27462),m=c(16318),n=c(93949),o=c(36523),p=c(45393),q=c(41671),r=c(66704),s=c(86439),t=c(65262),u=c(4235);let v=`
  mutation TransactionProcess(
    $id: ID!
    $data: JSON
  ) {
    transactionProcess(
      id: $id
      data: $data
    ) {
      transaction {
        id
        actions
        chargedAmount {
          amount
          currency
        }
        checkout {
          id
        }
        order {
          id
          number
          total {
            gross {
              amount
              currency
            }
          }
        }
      }
      transactionEvent {
        pspReference
        message
        type
      }
      data
      errors {
        field
        message
        code
      }
    }
  }
`,w=`
  mutation CheckoutComplete($checkoutId: ID!) {
    checkoutComplete(checkoutId: $checkoutId) {
      order {
        id
        number
        total {
          gross {
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
`;async function x(a){try{let{checkoutId:b,orderId:c,transactionId:d}=await a.json();if(!b||!c)return u.NextResponse.json({error:"Missing required fields: checkoutId, orderId"},{status:400});let e=d||b,f=process.env.NEXT_PUBLIC_API_URL;if(!f)throw Error("NEXT_PUBLIC_API_URL is not configured");let g=a.cookies.get("token")?.value,h={"Content-Type":"application/json"};g&&(h.Authorization=`JWT ${g}`);let i=await fetch(f,{method:"POST",headers:h,body:JSON.stringify({query:v,variables:{id:e,data:{paypalOrderId:c}}})});if(!i.ok){let a=await i.text();throw console.error("❌ Response body:",a),Error(`Transaction process request failed: ${i.status}`)}let j=await i.json(),k=j.data,l=j.errors;if(l||k?.transactionProcess?.errors?.length>0){let a=k?.transactionProcess?.errors?.[0]?.message||l?.[0]?.message||"Failed to process transaction";return u.NextResponse.json({error:a},{status:400})}let m=k?.transactionProcess?.transactionEvent,n=m?.type;if(n&&!n.includes("SUCCESS")&&n.includes("FAILURE"))return u.NextResponse.json({error:`Payment failed: ${m?.message||"Unknown error"}`},{status:400});let o=k?.transactionProcess?.transaction,p=o?.order;if(!p){console.log("⚠️ Order not created by transactionProcess, attempting checkoutComplete...");let a=await fetch(f,{method:"POST",headers:h,body:JSON.stringify({query:w,variables:{checkoutId:b}})});if(!a.ok)return console.error("❌ checkoutComplete request failed:",a.status),u.NextResponse.json({error:"Payment is being processed. Please wait a moment and check your order status.",checkoutId:b,transactionId:o?.id,status:"processing",message:"The payment has been authorized with PayPal. Your order is being created."},{status:202});let d=await a.json(),g=d.data,i=d.errors||g?.checkoutComplete?.errors;if(i&&i.length>0){if(console.error("❌ checkoutComplete errors:",i),!i.some(a=>a.message?.includes("duplicate key")||a.message?.includes("already exists")||a.extensions?.exception?.code==="IntegrityError"))return u.NextResponse.json({error:"Payment is being processed. Please wait a moment and check your order status.",checkoutId:b,transactionId:o?.id,status:"processing",message:"The payment has been authorized with PayPal. Your order is being created.",details:i},{status:202});{console.log("⚠️ Duplicate key error - order may already exist, checking transaction again...");let a=await fetch(f,{method:"POST",headers:h,body:JSON.stringify({query:v,variables:{id:e,data:{paypalOrderId:c}}})});if(a.ok){let b=await a.json(),c=b.data?.transactionProcess?.transaction?.order;c&&(console.log("✅ Order found on recheck:",c.id),p=c)}if(!p)return u.NextResponse.json({error:"Payment is being processed. Please wait a moment and check your order status.",checkoutId:b,transactionId:o?.id,status:"processing",message:"The payment has been authorized with PayPal. Your order is being created."},{status:202})}}if(p||(p=g?.checkoutComplete?.order),!p)return console.warn("⚠️ checkoutComplete did not create order - may still be processing"),u.NextResponse.json({error:"Payment is being processed. Please wait a moment and check your order status.",checkoutId:b,transactionId:o?.id,status:"processing",message:"The payment has been authorized with PayPal. Your order is being created."},{status:202});console.log("✅ Order created via checkoutComplete:",p.id)}return console.log("✅ Payment captured and order created:",{orderId:p.id,orderNumber:p.number,total:p.total.gross.amount}),u.NextResponse.json({success:!0,order:{id:p.id,number:p.number,total:p.total.gross.amount,currency:p.total.gross.currency}})}catch(a){return console.error("❌ Error in capture-order API:",a),u.NextResponse.json({error:a instanceof Error?a.message:"Internal server error"},{status:500})}}let y=new e.AppRouteRouteModule({definition:{kind:f.RouteKind.APP_ROUTE,page:"/api/paypal/capture-order/route",pathname:"/api/paypal/capture-order",filename:"route",bundlePath:"app/api/paypal/capture-order/route"},distDir:".next",projectDir:"",resolvedPagePath:"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/api/paypal/capture-order/route.ts",nextConfigOutput:"",userland:d}),{workAsyncStorage:z,workUnitAsyncStorage:A,serverHooks:B}=y;function C(){return(0,g.patchFetch)({workAsyncStorage:z,workUnitAsyncStorage:A})}async function D(a,b,c){var d;let e="/api/paypal/capture-order/route";"/index"===e&&(e="/");let g=await y.prepare(a,b,{srcPage:e,multiZoneDraftMode:"false"});if(!g)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:u,params:v,nextConfig:w,isDraftMode:x,prerenderManifest:z,routerServerContext:A,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,resolvedPathname:D}=g,E=(0,j.normalizeAppPath)(e),F=!!(z.dynamicRoutes[E]||z.routes[D]);if(F&&!x){let a=!!z.routes[D],b=z.dynamicRoutes[E];if(b&&!1===b.fallback&&!a)throw new s.NoFallbackError}let G=null;!F||y.isDev||x||(G="/index"===(G=D)?"/":G);let H=!0===y.isDev||!F,I=F&&!H,J=a.method||"GET",K=(0,i.getTracer)(),L=K.getActiveScopeSpan(),M={params:v,prerenderManifest:z,renderOpts:{experimental:{dynamicIO:!!w.experimental.dynamicIO,authInterrupts:!!w.experimental.authInterrupts},supportsDynamicResponse:H,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:null==(d=w.experimental)?void 0:d.cacheLife,isRevalidate:I,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d)=>y.onRequestError(a,b,d,A)},sharedContext:{buildId:u}},N=new k.NodeNextRequest(a),O=new k.NodeNextResponse(b),P=l.NextRequestAdapter.fromNodeNextRequest(N,(0,l.signalFromNodeResponse)(b));try{let d=async c=>y.handle(P,M).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=K.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${J} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${J} ${a.url}`)}),g=async g=>{var i,j;let k=async({previousCacheEntry:f})=>{try{if(!(0,h.getRequestMeta)(a,"minimalMode")&&B&&C&&!f)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let e=await d(g);a.fetchMetrics=M.renderOpts.fetchMetrics;let i=M.renderOpts.pendingWaitUntil;i&&c.waitUntil&&(c.waitUntil(i),i=void 0);let j=M.renderOpts.collectedTags;if(!F)return await (0,o.I)(N,O,e,M.renderOpts.pendingWaitUntil),null;{let a=await e.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(e.headers);j&&(b[r.NEXT_CACHE_TAGS_HEADER]=j),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,d=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=r.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:t.CachedRouteKind.APP_ROUTE,status:e.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:d}}}}catch(b){throw(null==f?void 0:f.isStale)&&await y.onRequestError(a,b,{routerKind:"App Router",routePath:e,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})},A),b}},l=await y.handleResponse({req:a,nextConfig:w,cacheKey:G,routeKind:f.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:z,isRoutePPREnabled:!1,isOnDemandRevalidate:B,revalidateOnlyGenerated:C,responseGenerator:k,waitUntil:c.waitUntil});if(!F)return null;if((null==l||null==(i=l.value)?void 0:i.kind)!==t.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==l||null==(j=l.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,h.getRequestMeta)(a,"minimalMode")||b.setHeader("x-nextjs-cache",B?"REVALIDATED":l.isMiss?"MISS":l.isStale?"STALE":"HIT"),x&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,p.fromNodeOutgoingHttpHeaders)(l.value.headers);return(0,h.getRequestMeta)(a,"minimalMode")&&F||m.delete(r.NEXT_CACHE_TAGS_HEADER),!l.cacheControl||b.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,q.getCacheControlHeader)(l.cacheControl)),await (0,o.I)(N,O,new Response(l.value.body,{headers:m,status:l.value.status||200})),null};L?await g(L):await K.withPropagatedContext(a.headers,()=>K.trace(m.BaseServerSpan.handleRequest,{spanName:`${J} ${a.url}`,kind:i.SpanKind.SERVER,attributes:{"http.method":J,"http.target":a.url}},g))}catch(b){if(L||b instanceof s.NoFallbackError||await y.onRequestError(a,b,{routerKind:"App Router",routePath:E,routeType:"route",revalidateReason:(0,n.c)({isRevalidate:I,isOnDemandRevalidate:B})}),F)throw b;return await (0,o.I)(N,O,new Response(null,{status:500})),null}}},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},80408:()=>{},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},87032:()=>{}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[3355],()=>b(b.s=53994));module.exports=c})();