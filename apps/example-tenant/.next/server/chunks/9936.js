"use strict";exports.id=9936,exports.ids=[9936],exports.modules={59936:(a,b,c)=>{c.r(b),c.d(b,{default:()=>i});var d=c(13486),e=c(60159),f=c.n(e);function g(a){let b="undefined"!=typeof document?document.createElement("textarea"):null;return b?(b.innerHTML=a,b.value):a.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&nbsp;/g," ")}function h(a){return[/<table/i,/<\/table>/i,/<thead/i,/<\/thead>/i,/<tbody/i,/<\/tbody>/i,/<tr/i,/<\/tr>/i,/<td/i,/<\/td>/i,/<th/i,/<\/th>/i,/<colgroup/i,/<\/colgroup>/i,/<col/i].some(b=>b.test(a))}function i({content:a}){let b=[];if(a)try{let c=JSON.parse(a);Array.isArray(c?.blocks)&&(b=c.blocks)}catch{}if(!b.length)return(0,d.jsx)("div",{className:"w-full py-6",children:(0,d.jsx)("h2",{className:"text-xl font-semibold font-secondary",children:"Content Not Available"})});let c=function(a){let b=[],c=[],d=null,e=!1;for(let f=0;f<a.length;f++){let i=a[f],j=g(i.data?.text||"");if(/<table/i.test(j)&&(e=!0,d=i.id),"paragraph"===i.type&&(e||h(j))){d||(d=i.id,e=!0);let a=j.replace(/<br\s*\/?>/gi,"").replace(/^\s+|\s+$/g,"");if(a&&c.push(a),/<\/table>/i.test(j)){e=!1;let a=c.join("");b.push({id:d||i.id,type:"table",data:{text:a}}),c=[],d=null}}else{if(c.length>0&&d){let a=c.join("");b.push({id:d,type:"table",data:{text:a}}),c=[],d=null,e=!1}b.push(i)}}if(c.length>0&&d){let a=c.join("");b.push({id:d,type:"table",data:{text:a}})}return b}(b);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:`
          .editor-content a {
            color: var(--color-primary-600);
            text-decoration: underline;
            transition: opacity 0.2s;
          }
          .editor-content a:hover {
            opacity: 0.8;
          }
          .editor-content strong,
          .editor-content b {
            font-weight: 600;
          }
          .editor-content em,
          .editor-content i {
            font-style: italic;
          }
          .editor-content table {
            width: 100% !important;
            max-width: 100% !important;
            border-collapse: collapse;
            margin: 2rem 0;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            display: table;
            table-layout: auto !important;
          }
          .editor-content .table-wrapper {
            width: 100%;
            overflow-x: auto;
          }
          .editor-content table col {
            width: auto !important;
          }
          .editor-content table colgroup {
            display: table-column-group;
          }
          .editor-content table thead {
            background-color: var(--color-primary-600);
            color: white;
          }
          .editor-content table th,
          .editor-content table td {
            padding: 1rem 1.5rem;
            text-align: left;
            border: 1px solid var(--color-secondary-300);
            line-height: 1.6;
          }
          .editor-content table th {
            font-weight: 600;
            font-size: 1rem;
          }
          .editor-content table tbody tr:nth-child(even) {
            background-color: var(--color-secondary-50);
          }
          .editor-content table tbody tr:hover {
            background-color: var(--color-secondary-100);
            transition: background-color 0.2s ease;
          }
          .editor-content .table-header {
            font-weight: 600;
            font-size: 1.1rem;
            padding: 1.25rem 1.5rem;
          }
          .editor-content .table-data {
            font-size: 0.95rem;
            padding: 0.875rem 1.25rem;
          }
          .ezo-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
          }
          @media (max-width: 768px) {
            .editor-content table {
              font-size: 0.875rem;
            }
            .editor-content table th,
            .editor-content table td {
              padding: 0.75rem 1rem;
            }
          }
        `}}),(0,d.jsx)("div",{className:"editor-content overflow-x-auto",children:c.map(a=>{let{type:b,data:c}=a,e=g(c?.text||"");switch(b){case"table":return(0,d.jsx)("div",{className:"table-wrapper my-6",dangerouslySetInnerHTML:{__html:c?.text||""}},a.id);case"header":{let b=Math.min(Math.max(Number(c?.level)||3,1),6);return f().createElement(`h${b}`,{key:a.id,className:"text-2xl font-semibold leading-8 tracking-[-0.06px] my-6",dangerouslySetInnerHTML:{__html:e}})}case"list":{let b=c?.style||"unordered",e=Array.isArray(c?.items)?c.items:[];return(0,d.jsx)("ordered"===b?"ol":"ul",{className:"ordered"===b?"list-decimal list-inside my-4 space-y-2 text-lg leading-7 tracking-[-0.045px]":"list-disc list-inside my-4 space-y-2 text-lg leading-7 tracking-[-0.045px]",children:e.map((b,c)=>(0,d.jsx)("li",{dangerouslySetInnerHTML:{__html:g(b)}},`${a.id}-${c}`))},a.id)}default:if(h(e))return(0,d.jsx)("div",{className:"table-wrapper my-6",dangerouslySetInnerHTML:{__html:e}},a.id);return(0,d.jsx)("p",{className:"text-lg leading-7 tracking-[-0.045px] my-4",dangerouslySetInnerHTML:{__html:e}},a.id)}})})]})}}};