exports.id=3598,exports.ids=[3598],exports.modules={40:(a,b,c)=>{"use strict";c.d(b,{ServerAppConfigurationProvider:()=>g,h:()=>h});var d=c(13486),e=c(60159);let f=(0,e.createContext)(void 0),g=({children:a,configuration:b})=>(0,d.jsx)(f.Provider,{value:{isDealerLocatorEnabled:()=>b.features.dealer_locator,isTieredPricingEnabled:()=>b.features.tiered_pricing,isWillCallEnabled:()=>b.features.will_call,getDealerLocatorToken:()=>b.dealer_locator.token,getGoogleRecaptchaSiteKey:()=>b.google.recaptcha_site_key,getGoogleTagManagerContainerId:()=>b.google.tag_manager_container_id,getGoogleMapsApiKey:()=>b.google.maps_api_key,getGoogleAnalyticsMeasurementId:()=>b.google.analytics_measurement_id,getGoogleAdSensePublisherId:()=>b.google.adsense_publisher_id,isRecaptchaEnabledFor:a=>!!b.google.recaptcha_site_key&&(b.google.recaptcha_locations[a]??!1),isAppActive:a=>{switch(a){case"dealer_locator":return b.features.dealer_locator;case"tiered-pricing":return b.features.tiered_pricing;case"will-call":return b.features.will_call;case"google_recaptcha":return!!b.google.recaptcha_site_key;case"google_tag_manager":return!!b.google.tag_manager_container_id;case"google_maps":return!!b.google.maps_api_key;case"google_analytics":return!!b.google.analytics_measurement_id;case"google_adsense":return!!b.google.adsense_publisher_id;default:return!1}},getGoogleRecaptchaConfig:()=>b.google.recaptcha_site_key?{site_key:b.google.recaptcha_site_key,locations:b.google.recaptcha_locations}:null,getGoogleTagManagerConfig:()=>b.google.tag_manager_container_id?{container_id:b.google.tag_manager_container_id}:null,getGoogleMapsConfig:()=>b.google.maps_api_key?{api_key:b.google.maps_api_key}:null,getGoogleAnalyticsConfig:()=>b.google.analytics_measurement_id?{measurement_id:b.google.analytics_measurement_id}:null,getGoogleAdSenseConfig:()=>b.google.adsense_publisher_id?{publisher_id:b.google.adsense_publisher_id}:null},children:a}),h=()=>{let a=(0,e.useContext)(f);if(void 0===a)throw Error("useAppConfiguration must be used within a ServerAppConfigurationProvider");return a}},216:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>aJ,metadata:()=>aI,viewport:()=>aH});var d=c(38828),e=c(61365);function f({children:a,header:b,footer:c}){return(0,d.jsxs)("div",{className:"min-h-screen",children:[(0,d.jsx)("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded focus:shadow-lg",children:"Skip to main content"}),(0,d.jsx)("div",{className:"sticky top-0 z-20",children:b}),(0,d.jsx)("main",{id:"main-content",className:"min-h-screen",children:a}),c]})}var g=c(42671),h=c.n(g);let i={Visa:(0,d.jsxs)("svg",{width:37,height:27,viewBox:"0 0 37 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{x:"0.5",y:"1.1001",width:36,height:25,rx:2,fill:"white",stroke:"#D9D9D9"}),(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3013 18.2134H9.05984L7.379 11.642C7.29922 11.3397 7.12983 11.0725 6.88065 10.9465C6.25881 10.63 5.57357 10.3781 4.82605 10.2511V9.99806H8.4369C8.93525 9.99806 9.30901 10.3781 9.37131 10.8195L10.2434 15.5596L12.4838 9.99806H14.663L11.3013 18.2134ZM15.9089 18.2134H13.792L15.5351 9.99806H17.652L15.9089 18.2134ZM20.3908 12.2739C20.453 11.8315 20.8268 11.5785 21.2629 11.5785C21.9481 11.515 22.6945 11.642 23.3175 11.9574L23.6912 10.1886C23.0683 9.93564 22.3831 9.80859 21.7612 9.80859C19.7066 9.80859 18.2116 10.9465 18.2116 12.5259C18.2116 13.7273 19.2706 14.3582 20.0181 14.7382C20.8268 15.1172 21.1383 15.3702 21.076 15.7491C21.076 16.3175 20.453 16.5705 19.8312 16.5705C19.0837 16.5705 18.3362 16.3811 17.652 16.0645L17.2783 17.8344C18.0258 18.1498 18.8345 18.2769 19.582 18.2769C21.8858 18.3393 23.3175 17.2025 23.3175 15.4961C23.3175 13.3473 20.3908 13.2213 20.3908 12.2739ZM30.7261 18.2134L29.0452 9.99806H27.2398C26.866 9.99806 26.4923 10.2511 26.3677 10.63L23.2552 18.2134H25.4344L25.8693 17.013H28.5469L28.7961 18.2134H30.7261ZM27.5512 12.2104L28.1731 15.3066H26.4299L27.5512 12.2104Z",fill:"#172B85"})]}),Mastercard:(0,d.jsxs)("svg",{width:37,height:27,viewBox:"0 0 37 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{x:"0.5",y:"1.1001",width:36,height:25,rx:2,fill:"white",stroke:"#D9D9D9"}),(0,d.jsx)("path",{d:"M24.0889 5.46289C28.554 5.46289 32.1738 9.05908 32.1738 13.4951C32.1738 17.9311 28.554 21.5273 24.0889 21.5273C22.0871 21.5273 20.2567 20.8027 18.8447 19.6055C17.4328 20.8027 15.6024 21.5273 13.6006 21.5273C9.13545 21.5273 5.51566 17.9311 5.51562 13.4951C5.51562 9.05908 9.13542 5.46289 13.6006 5.46289C15.6022 5.46291 17.4328 6.1868 18.8447 7.38379C20.2566 6.1868 22.0873 5.46294 24.0889 5.46289Z",fill:"#ED0006"}),(0,d.jsx)("path",{d:"M24.0889 5.46289C28.554 5.46289 32.1738 9.05908 32.1738 13.4951C32.1738 17.9311 28.554 21.5273 24.0889 21.5273C22.0871 21.5273 20.2567 20.8027 18.8447 19.6055C20.5822 18.1322 21.6855 15.9424 21.6855 13.4951C21.6855 11.0476 20.5825 8.85703 18.8447 7.38379C20.2566 6.18681 22.0873 5.46292 24.0889 5.46289Z",fill:"#F9A000"}),(0,d.jsx)("path",{d:"M18.8441 7.38428C20.5819 8.85742 21.6858 11.0473 21.6859 13.4946C21.6859 15.942 20.5817 18.1317 18.8441 19.605C17.107 18.1318 16.0043 15.9415 16.0043 13.4946C16.0044 11.0477 17.1069 8.85741 18.8441 7.38428Z",fill:"#FF5E00"})]}),Americanexpress:(0,d.jsxs)("svg",{width:37,height:27,viewBox:"0 0 37 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{x:"0.5",y:"1.41455",width:36,height:"24.3714",rx:"2.67143",fill:"#1F72CD",stroke:"#D9D9D9"}),(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.63282 9.89941L3.17102 17.5603H7.31528L7.82904 16.3388H9.0034L9.51717 17.5603H14.0788V16.628L14.4853 17.5603H16.845L17.2514 16.6083V17.5603H26.7384L27.892 16.3705L28.9722 17.5603L33.8449 17.5701L30.3722 13.7512L33.8449 9.89941H29.0478L27.9248 11.0672L26.8787 9.89941H16.558L15.6718 11.8767L14.7648 9.89941H10.6292V10.7999L10.1691 9.89941H6.63282ZM20.7997 10.9875H26.2476L27.9139 12.7874L29.6338 10.9875H31.3001L28.7684 13.7504L31.3001 16.4814H29.5582L27.892 14.6607L26.1633 16.4814H20.7997V10.9875ZM22.1449 13.1286V12.1251V12.1242H25.5442L27.0275 13.729L25.4785 15.3427H22.1449V14.2471H25.1169V13.1286H22.1449ZM7.43474 10.9875H9.45484L11.7511 16.1824V10.9875H13.964L15.7375 14.7122L17.3721 10.9875H19.574V16.4847H18.2342L18.2232 12.1771L16.2699 16.4847H15.0714L13.1072 12.1771V16.4847H10.3509L9.82839 15.2523H7.00532L6.48386 16.4836H5.00708L7.43474 10.9875ZM7.48734 14.1131L8.41743 11.9177L9.34644 14.1131H7.48734Z",fill:"white"})]}),Paypal:(0,d.jsxs)("svg",{width:37,height:27,viewBox:"0 0 37 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{x:"0.5",y:"1.1001",width:36,height:25,rx:2,fill:"white",stroke:"#D9D9D9"}),(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.6174 17.1113H8.94904C8.83487 17.1113 8.73777 17.1951 8.71997 17.309L8.04521 21.6304C8.0318 21.7157 8.09717 21.7926 8.1828 21.7926H8.97928C9.09345 21.7926 9.19055 21.7088 9.20835 21.5947L9.39034 20.4292C9.40789 20.315 9.50523 20.2313 9.61916 20.2313H10.1473C11.2463 20.2313 11.8805 19.6941 12.0462 18.6296C12.1209 18.1639 12.0494 17.7979 11.8334 17.5416C11.5964 17.2603 11.1757 17.1113 10.6174 17.1113ZM10.8099 18.6897C10.7186 19.2944 10.2612 19.2944 9.81895 19.2944H9.5672L9.74381 18.165C9.7543 18.0968 9.81285 18.0465 9.88116 18.0465H9.99654C10.2978 18.0465 10.582 18.0465 10.7289 18.22C10.8164 18.3235 10.8433 18.4772 10.8099 18.6897ZM15.6045 18.6703H14.8055C14.7375 18.6703 14.6786 18.7206 14.6681 18.7889L14.6328 19.0146L14.5769 18.9328C14.404 18.6792 14.0183 18.5945 13.6334 18.5945C12.7505 18.5945 11.9965 19.2699 11.8496 20.2174C11.7733 20.69 11.8818 21.1419 12.1472 21.4571C12.3907 21.7469 12.7391 21.8676 13.1535 21.8676C13.8648 21.8676 14.2594 21.4056 14.2594 21.4056L14.2237 21.6299C14.2103 21.7156 14.2756 21.7925 14.3607 21.7925H15.0804C15.1949 21.7925 15.2914 21.7087 15.3095 21.5946L15.7413 18.8325C15.7549 18.7475 15.6898 18.6703 15.6045 18.6703ZM14.4908 20.241C14.4137 20.7021 14.0514 21.0116 13.5895 21.0116C13.3575 21.0116 13.172 20.9364 13.053 20.794C12.9349 20.6526 12.89 20.4512 12.9276 20.227C12.9996 19.7698 13.368 19.4503 13.8229 19.4503C14.0497 19.4503 14.2342 19.5264 14.3557 19.6701C14.4774 19.8152 14.5257 20.0177 14.4908 20.241ZM19.0566 18.6702H19.8594C19.9719 18.6702 20.0375 18.7976 19.9736 18.8907L17.3034 22.7841C17.2601 22.8472 17.1889 22.8847 17.1128 22.8847H16.3109C16.198 22.8847 16.1321 22.7563 16.1975 22.6629L17.0289 21.4774L16.1446 18.856C16.114 18.7648 16.1807 18.6702 16.2766 18.6702H17.0655C17.168 18.6702 17.2584 18.7382 17.288 18.8373L17.7573 20.4205L18.8646 18.7729C18.908 18.7086 18.98 18.6702 19.0566 18.6702Z",fill:"#253B80"}),(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M27.7611 21.6302L28.4458 17.2297C28.4563 17.1614 28.5149 17.1111 28.583 17.1108H29.3538C29.4389 17.1108 29.5043 17.1879 29.4909 17.2732L28.8157 21.5945C28.7981 21.7085 28.701 21.7923 28.5866 21.7923H27.8982C27.8131 21.7923 27.7477 21.7155 27.7611 21.6302ZM22.5175 17.1111H20.8488C20.7349 17.1111 20.6378 17.1949 20.62 17.3087L19.9452 21.6302C19.9318 21.7155 19.9972 21.7923 20.0824 21.7923H20.9386C21.0182 21.7923 21.0862 21.7337 21.0986 21.6539L21.2901 20.4289C21.3077 20.3148 21.405 20.2311 21.5189 20.2311H22.0468C23.146 20.2311 23.7802 19.6939 23.946 18.6293C24.0208 18.1636 23.9489 17.7977 23.7331 17.5413C23.4961 17.26 23.0758 17.1111 22.5175 17.1111ZM22.7099 18.6894C22.619 19.2942 22.1615 19.2942 21.719 19.2942H21.4675L21.6444 18.1648C21.6549 18.0966 21.7129 18.0463 21.7814 18.0463H21.8968C22.1979 18.0463 22.4824 18.0463 22.6291 18.2197C22.7167 18.3233 22.7434 18.477 22.7099 18.6894ZM27.5041 18.67H26.7057C26.6371 18.67 26.5788 18.7203 26.5686 18.7886L26.5332 19.0143L26.4771 18.9326C26.3042 18.6789 25.9188 18.5942 25.5338 18.5942C24.6509 18.5942 23.8971 19.2696 23.7502 20.2172C23.6741 20.6897 23.7822 21.1416 24.0476 21.4568C24.2916 21.7466 24.6395 21.8674 25.0539 21.8674C25.7652 21.8674 26.1597 21.4053 26.1597 21.4053L26.1241 21.6296C26.1107 21.7154 26.176 21.7922 26.2617 21.7922H26.9811C27.095 21.7922 27.1921 21.7084 27.2099 21.5944L27.6419 18.8322C27.6551 18.7472 27.5898 18.67 27.5041 18.67ZM26.3905 20.2408C26.3139 20.7018 25.9512 21.0113 25.4891 21.0113C25.2576 21.0113 25.0717 20.9362 24.9526 20.7937C24.8346 20.6523 24.7902 20.4509 24.8273 20.2267C24.8997 19.7696 25.2676 19.45 25.7226 19.45C25.9495 19.45 26.1338 19.5261 26.2554 19.6698C26.3776 19.815 26.4259 20.0175 26.3905 20.2408Z",fill:"#179BD7"}),(0,d.jsx)("path",{d:"M16.7915 15.5651L16.9966 14.2491L16.5398 14.2384H14.3582L15.8743 4.52755C15.8789 4.49824 15.8943 4.4709 15.9166 4.45149C15.939 4.43208 15.9676 4.42139 15.9974 4.42139H19.676C20.8973 4.42139 21.74 4.67809 22.18 5.18476C22.3863 5.42246 22.5177 5.67084 22.5813 5.94418C22.6479 6.231 22.6491 6.57367 22.584 6.99161L22.5792 7.02211V7.2899L22.7856 7.40796C22.9593 7.50105 23.0973 7.60761 23.2032 7.72963C23.3797 7.93285 23.4939 8.19115 23.5421 8.49736C23.5919 8.81231 23.5754 9.18706 23.4939 9.61134C23.3997 10.0994 23.2475 10.5245 23.0421 10.8723C22.853 11.1928 22.6122 11.4585 22.3264 11.6646C22.0534 11.8603 21.729 12.0089 21.3624 12.104C21.007 12.1974 20.6019 12.2446 20.1576 12.2446H19.8713C19.6666 12.2446 19.4677 12.319 19.3117 12.4526C19.1552 12.5889 19.0516 12.775 19.0199 12.9786L18.9983 13.0971L18.6359 15.4165L18.6195 15.5017C18.6152 15.5287 18.6077 15.5421 18.5968 15.5513C18.5869 15.5595 18.5728 15.5651 18.5591 15.5651H16.7915Z",fill:"#253B80"}),(0,d.jsx)("path",{d:"M22.981 7.05322C22.97 7.12413 22.9575 7.19662 22.9434 7.2711C22.4582 9.78705 20.7985 10.6562 18.6788 10.6562H17.5995C17.3404 10.6562 17.1219 10.8463 17.0815 11.1046L16.5289 14.6447L16.3724 15.6481C16.3461 15.8176 16.4756 15.9706 16.6449 15.9706H18.5592C18.7859 15.9706 18.9784 15.8042 19.0141 15.5784L19.0329 15.4801L19.3934 13.1697L19.4165 13.043C19.4518 12.8165 19.6447 12.6501 19.8714 12.6501H20.1577C22.0122 12.6501 23.4641 11.8895 23.8885 9.68841C24.0657 8.76894 23.974 8.00121 23.5049 7.46125C23.363 7.29843 23.1869 7.16335 22.981 7.05322Z",fill:"#179BD7"}),(0,d.jsx)("path",{d:"M22.4733 6.84923C22.3993 6.82744 22.3227 6.80763 22.2443 6.7898C22.1655 6.77238 22.0846 6.75693 22.0015 6.74346C21.7105 6.69592 21.3917 6.67334 21.0501 6.67334H18.1669C18.0959 6.67334 18.0285 6.68958 17.9681 6.7189C17.8351 6.78346 17.7363 6.91064 17.7124 7.06632L17.0989 10.9906L17.0813 11.1051C17.1217 10.8468 17.3402 10.6566 17.5994 10.6566H18.6786C20.7984 10.6566 22.4581 9.78707 22.9432 7.27152C22.9576 7.19705 22.9698 7.12455 22.9808 7.05365C22.8581 6.98788 22.7251 6.93163 22.5819 6.88369C22.5467 6.87181 22.5102 6.86032 22.4733 6.84923Z",fill:"#222D65"}),(0,d.jsx)("path",{d:"M17.7123 7.06607C17.7363 6.91038 17.8352 6.78322 17.968 6.71904C18.0289 6.68972 18.0959 6.67348 18.1668 6.67348H21.0502C21.3918 6.67348 21.7106 6.69606 22.0015 6.7436C22.0847 6.75707 22.1656 6.77252 22.2444 6.78994C22.3228 6.80778 22.3992 6.82759 22.4734 6.84937C22.5102 6.86046 22.5467 6.87195 22.5823 6.88344C22.7255 6.93137 22.8585 6.98802 22.9812 7.05339C23.1256 6.12362 22.9801 5.49058 22.4824 4.91735C21.9338 4.28629 20.9435 4.01611 19.6764 4.01611H15.9977C15.7389 4.01611 15.5182 4.20626 15.4781 4.46495L13.9459 14.2756C13.9157 14.4697 14.0639 14.6448 14.2576 14.6448H16.5288L17.099 10.9903L17.7123 7.06607Z",fill:"#253B80"})]}),Gpay:(0,d.jsxs)("svg",{width:37,height:27,viewBox:"0 0 37 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{x:"0.5",y:"1.1001",width:36,height:25,rx:2,fill:"white",stroke:"#D9D9D9"}),(0,d.jsx)("path",{d:"M29.0688 16.1123H29.0874L30.6304 12.1436H31.7144L28.3804 20.1006H27.3521L28.5913 17.3174L26.4038 12.1436H27.4878L29.0688 16.1123ZM23.8511 11.9639C24.5882 11.9639 25.1706 12.1695 25.5981 12.5752C26.0257 12.9811 26.2368 13.5486 26.2368 14.2637V17.6719H25.2827V16.9043H25.2388C24.8236 17.5356 24.2781 17.8516 23.5903 17.8516C23.0081 17.8515 22.5128 17.6711 22.1226 17.3105C21.7384 16.9756 21.5214 16.4797 21.5337 15.958C21.5337 15.3846 21.7445 14.9332 22.1597 14.5918C22.5747 14.2506 23.1321 14.0831 23.8257 14.083C24.4205 14.083 24.9044 14.1989 25.2886 14.418V14.1797C25.2886 13.8254 25.1396 13.4907 24.8794 13.2588C24.613 13.0141 24.2725 12.878 23.9194 12.8779C23.3618 12.8779 22.9213 13.1229 22.5991 13.6123L21.7192 13.0391C22.1902 12.3241 22.9031 11.9639 23.8511 11.9639ZM19.1226 9.59277C19.7608 9.57989 20.3812 9.83107 20.8335 10.2949C21.7379 11.171 21.7934 12.6458 20.9448 13.5928L20.8335 13.709C20.3688 14.1664 19.798 14.3984 19.1226 14.3984H17.4751V17.6709H16.4771V9.59277H19.1226ZM23.981 14.9209C23.5783 14.921 23.2379 15.024 22.9653 15.2236C22.699 15.4232 22.5621 15.674 22.562 15.9766C22.562 16.2471 22.6866 16.4987 22.8911 16.6533C23.1142 16.8336 23.3867 16.9303 23.6655 16.9238C24.0869 16.9238 24.4892 16.7496 24.7866 16.4404C25.115 16.1184 25.2827 15.7388 25.2827 15.3008C24.9728 15.0431 24.5387 14.9145 23.981 14.9209ZM17.4751 13.4062H19.1479C19.5196 13.4191 19.8792 13.2651 20.1333 12.9883C20.6539 12.4278 20.6412 11.5255 20.1021 10.9844C19.848 10.7268 19.5073 10.585 19.1479 10.585H17.4751V13.4062Z",fill:"#3C4043"}),(0,d.jsx)("path",{d:"M14.0306 13.6901C14.0306 13.3744 14.0058 13.0587 13.9562 12.7495H9.74878V14.534H12.1592C12.0601 15.1074 11.7379 15.6228 11.2669 15.9449V17.1045H12.7045C13.5472 16.2992 14.0306 15.1074 14.0306 13.6901Z",fill:"#4285F4"}),(0,d.jsx)("path",{d:"M9.749 18.2255C10.9511 18.2255 11.9674 17.8132 12.7047 17.1045L11.2671 15.9449C10.8644 16.2284 10.3501 16.3894 9.749 16.3894C8.58406 16.3894 7.59881 15.5713 7.24561 14.4761H5.76465V15.6743C6.52062 17.2398 8.06355 18.2255 9.749 18.2255Z",fill:"#34A853"}),(0,d.jsx)("path",{d:"M7.24572 14.4763C7.0598 13.9029 7.0598 13.278 7.24572 12.6982V11.5063H5.76452C5.12618 12.8141 5.12618 14.3603 5.76452 15.6681L7.24572 14.4763Z",fill:"#FBBC04"}),(0,d.jsx)("path",{d:"M9.749 10.7846C10.3872 10.7717 11.0007 11.023 11.4592 11.4804L12.7357 10.1532C11.924 9.36727 10.8582 8.93564 9.749 8.94852C8.06355 8.94852 6.52062 9.94064 5.76465 11.5061L7.24561 12.7044C7.59881 11.6028 8.58406 10.7846 9.749 10.7846Z",fill:"#EA4335"})]}),Applepay:(0,d.jsxs)("svg",{width:37,height:27,viewBox:"0 0 37 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{x:"0.5",y:"1.1001",width:36,height:25,rx:2,fill:"white",stroke:"#D9D9D9"}),(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.82317 10.2776C9.32007 10.3206 9.81697 10.0199 10.1275 9.63868C10.4329 9.24672 10.6348 8.72053 10.583 8.18359C10.1431 8.20507 9.59958 8.48428 9.28901 8.87624C9.00433 9.21451 8.76106 9.76218 8.82317 10.2776ZM14.7342 17.1933V8.82254H17.7622C19.3254 8.82254 20.4175 9.93936 20.4175 11.5716C20.4175 13.2039 19.3047 14.3315 17.7208 14.3315H15.9868V17.1933H14.7342ZM10.5778 10.3797C10.1401 10.3535 9.74063 10.5162 9.41799 10.6477C9.21037 10.7322 9.03455 10.8038 8.90079 10.8038C8.75068 10.8038 8.5676 10.7284 8.36205 10.6437C8.0927 10.5327 7.78477 10.4058 7.46185 10.4119C6.72167 10.4226 6.03326 10.8575 5.65541 11.5502C4.879 12.9355 5.45354 14.9865 6.20407 16.1141C6.57157 16.6725 7.01153 17.2846 7.59125 17.2631C7.84629 17.2532 8.02975 17.1724 8.21961 17.0888C8.4382 16.9926 8.66528 16.8927 9.01984 16.8927C9.3621 16.8927 9.57925 16.99 9.78769 17.0835C9.98589 17.1723 10.1762 17.2576 10.4588 17.2524C11.0592 17.2417 11.4371 16.694 11.8045 16.1356C12.2011 15.5363 12.3754 14.9513 12.4019 14.8626L12.405 14.8523C12.4043 14.8517 12.3994 14.8493 12.3908 14.8452L12.3908 14.8452C12.2582 14.7823 11.2449 14.3011 11.2352 13.0106C11.2254 11.9275 12.0389 11.3788 12.167 11.2924C12.1748 11.2871 12.18 11.2836 12.1824 11.2817C11.6648 10.4871 10.8573 10.4011 10.5778 10.3797ZM22.7054 17.2577C23.4922 17.2577 24.222 16.8443 24.5532 16.1892H24.5791V17.1933H25.7386V13.0267C25.7386 11.8186 24.8069 11.04 23.3731 11.04C22.0429 11.04 21.0594 11.8293 21.0232 12.9139H22.1516C22.2447 12.3985 22.7054 12.0602 23.3369 12.0602C24.1029 12.0602 24.5325 12.4307 24.5325 13.1126V13.5744L22.9694 13.671C21.5149 13.7623 20.7281 14.3798 20.7281 15.4536C20.7281 16.5382 21.5408 17.2577 22.7054 17.2577ZM23.0418 16.2644C22.3741 16.2644 21.9496 15.9315 21.9496 15.4214C21.9496 14.8952 22.3585 14.5892 23.1401 14.5409L24.5325 14.4496V14.9221C24.5325 15.706 23.8906 16.2644 23.0418 16.2644ZM29.5843 17.5208C29.0823 18.9867 28.5077 19.4699 27.2862 19.4699C27.193 19.4699 26.8824 19.4592 26.81 19.4377V18.4336C26.8876 18.4444 27.0791 18.4551 27.1775 18.4551C27.7313 18.4551 28.0419 18.2135 28.2334 17.5853L28.3473 17.2148L26.2251 11.1206H27.5346L29.0098 16.0658H29.0357L30.5109 11.1206H31.7842L29.5843 17.5208ZM15.9867 9.9179H17.4308C18.5178 9.9179 19.1389 10.5193 19.1389 11.577C19.1389 12.6348 18.5178 13.2415 17.4257 13.2415H15.9867V9.9179Z",fill:"black"})]}),Discover:(0,d.jsxs)("svg",{width:37,height:27,viewBox:"0 -30 770 555",xmlns:"http://www.w3.org/2000/svg",fill:"#000000",children:[(0,d.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:0}),(0,d.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,d.jsxs)("g",{fillRule:"evenodd",children:[(0,d.jsx)("path",{d:"M54.992 0C24.627 0 0 24.63 0 55.004v390.992C0 476.376 24.619 501 54.992 501h670.016C755.373 501 780 476.37 780 445.996V55.004C780 24.624 755.381 0 725.008 0H54.992z",fill:"#4D4D4D"}),(0,d.jsx)("path",{d:"M327.152 161.893c8.837 0 16.248 1.784 25.268 6.09v22.751c-8.544-7.863-15.955-11.154-25.756-11.154-19.264 0-34.414 15.015-34.414 34.05 0 20.075 14.681 34.196 35.37 34.196 9.312 0 16.586-3.12 24.8-10.857v22.763c-9.341 4.14-16.911 5.776-25.756 5.776-31.278 0-55.582-22.596-55.582-51.737 0-28.826 24.951-51.878 56.07-51.878zm-97.113.627c11.546 0 22.11 3.72 30.943 10.994l-10.748 13.248c-5.35-5.646-10.41-8.028-16.564-8.028-8.853 0-15.3 4.745-15.3 10.989 0 5.354 3.619 8.188 15.944 12.482 23.365 8.044 30.29 15.176 30.29 30.926 0 19.193-14.976 32.553-36.32 32.553-15.63 0-26.994-5.795-36.458-18.872l13.268-12.03c4.73 8.61 12.622 13.222 22.42 13.222 9.163 0 15.947-5.952 15.947-13.984 0-4.164-2.055-7.734-6.158-10.258-2.066-1.195-6.158-2.977-14.2-5.647-19.291-6.538-25.91-13.527-25.91-27.185 0-16.225 14.214-28.41 32.846-28.41zm234.723 1.728h22.437l28.084 66.592 28.446-66.592h22.267l-45.494 101.686h-11.053l-44.687-101.686zm-397.348.152h30.15c33.312 0 56.534 20.382 56.534 49.641 0 14.59-7.104 28.696-19.118 38.057-10.108 7.901-21.626 11.445-37.574 11.445H67.414V164.4zm96.135 0h20.54v99.143h-20.54V164.4zm411.734 0h58.252v16.8H595.81v22.005h36.336v16.791h-36.336v26.762h37.726v16.785h-58.252V164.4zm71.858 0h30.455c23.69 0 37.265 10.71 37.265 29.272 0 15.18-8.514 25.14-23.986 28.105l33.148 41.766h-25.26l-28.429-39.828h-2.678v39.828h-20.515V164.4zm20.515 15.616v30.025h6.002c13.117 0 20.069-5.362 20.069-15.328 0-9.648-6.954-14.697-19.745-14.697h-6.326zM87.94 181.199v65.559h5.512c13.273 0 21.656-2.394 28.11-7.88 7.103-5.955 11.376-15.465 11.376-24.98 0-9.499-4.273-18.725-11.376-24.681-6.785-5.78-14.837-8.018-28.11-8.018H87.94z",fill:"#FFF"}),(0,d.jsx)("path",{d:"m415.13 161.21c30.941 0 56.022 23.58 56.022 52.709v0.033c0 29.13-25.081 52.742-56.021 52.742s-56.022-23.613-56.022-52.742v-0.033c0-29.13 25.082-52.71 56.022-52.71zm364.85 127.15c-26.05 18.33-221.08 149.34-558.75 212.62h503.76c30.365 0 54.992-24.63 54.992-55.004v-157.62z",fill:"#F47216"})]})})]})};var j=c(55682),k=c(83318);let l=(0,j.J1)`
  query PaymentMethods {
    page(slug: "payment-methods") {
      id
      metadata {
        key
        value
      }
    }
  }
`,m=async()=>{if(!process.env.NEXT_PUBLIC_API_URL)return console.warn("API URL not configured, skipping payment methods fetch"),null;try{let a=(0,k.A)(),b=new Promise((a,b)=>setTimeout(()=>b(Error("Payment methods fetch timeout")),5e3)),c=a.query({query:l,fetchPolicy:"network-only",errorPolicy:"ignore"}),d=await Promise.race([c,b]);return d?.data?.page??null}catch(a){return console.warn("Failed to fetch payment methods:",a instanceof Error?a.message:"Unknown error"),null}};var n=c(14299);let o=[{image:"http://wsm-saleor-assets.s3.us-west-2.amazonaws.com/sparktec-motorsports/badges/comodo.png"},{image:"https://wsm-saleor-assets.s3.us-west-2.amazonaws.com/sparktec-motorsports/badges/bbb.png"},{image:"https://wsm-saleor-assets.s3.us-west-2.amazonaws.com/sparktec-motorsports/badges/sema.png"}],p={VISA:"Visa",MasterCard:"Mastercard",Amex:"Americanexpress",PayPal:"Paypal",GooglePay:"Gpay",ApplePay:"Applepay",Discover:"Discover"};async function q({fallback:a}){let b=await m(),c=null;b?.metadata?.length&&(c=b.metadata.filter(a=>"true"===String(a.value).trim().toLowerCase()).map(a=>a.key).map(a=>{let b=p[a];return b&&b in i?{name:b,href:({Visa:"https://visa.com",Mastercard:"https://mastercard.com",Americanexpress:"https://americanexpress.com",Paypal:"https://paypal.com",Gpay:"https://pay.google.com",Applepay:"https://www.apple.com/apple-pay/",Discover:"https://discover.com"})[b],icon:b}:null}).filter(Boolean));let e=c&&c.length>0?c:a||[];return e.length?(0,d.jsxs)("div",{className:"flex gap-2 items-center justify-center lg:justify-end flex-wrap w-fit",children:[e.map(a=>{let b=i[a.icon];return b?(0,d.jsx)(h(),{href:a.href,target:"_blank",rel:"noopener noreferrer","aria-label":a.name,className:"hover:opacity-80 transition-opacity",children:(0,d.jsx)("span",{className:"w-8 h-7",children:b})},a.name):null}),o.map(a=>(0,d.jsx)(n.default,{src:a.image,alt:"Badge",width:50,height:30,quality:85,sizes:"100vw",className:"h-7 w-auto object-contain"},a.image))]}):null}let r=(0,j.J1)`
  query SiteInfo {
    page(slug: "site-info") {
      id
      metadata {
        key
        value
      }
    }
  }
`,s=async()=>{if(!process.env.NEXT_PUBLIC_API_URL)return console.warn("API URL not configured, skipping site info fetch"),null;try{let a=(0,k.A)(),b=new Promise((a,b)=>setTimeout(()=>b(Error("Site info fetch timeout")),5e3)),c=a.query({query:r,fetchPolicy:"network-only",errorPolicy:"ignore"}),d=await Promise.race([c,b]);return d?.data?.page??null}catch(a){return console.warn("Failed to fetch site info:",a instanceof Error?a.message:"Unknown error"),null}};function t(a){return a.split(/\r?\n/).filter(Boolean)}async function u(){let a=await s(),b=b=>a?.metadata?.find(a=>a.key.toLowerCase()===b.toLowerCase())?.value?.trim()||"",c=b("Address"),e=b("Email"),f=b("Phone"),g=b("Timings");return[c,e,f,g].every(a=>!a)?null:(0,d.jsxs)("div",{className:"flex flex-col w-full gap-3",children:[(0,d.jsx)("span",{style:{color:"var(--color-primary-600)"},className:"font-semibold text-lg text-center md:text-left lg:text-right",children:"SITE INFO"}),(0,d.jsxs)("div",{className:"flex flex-col gap-2",children:[c&&(0,d.jsx)("div",{className:"text-base text-center md:text-left lg:text-right text-[var(--color-secondary-100)] hover:text-white transition-all ease-in-out duration-300 cursor-pointer",children:t(c).map((a,b)=>(0,d.jsx)("div",{children:a},b))}),e&&(0,d.jsx)(h(),{prefetch:!1,href:`mailto:${e}`,className:"text-base text-[var(--color-secondary-100)] hover:text-white transition-all ease-in-out duration-300 cursor-pointer text-center md:text-left lg:text-right",children:e}),f&&(0,d.jsx)("div",{className:"text-base text-center md:text-left lg:text-right text-[var(--color-secondary-100)] hover:text-white transition-all ease-in-out duration-300 cursor-pointer",children:(()=>{let a=t(f),b=a[a.length-1],c=function(a){let b=a.replace(/[^\d+]/g,"");return b?`tel:${b}`:null}(b||f);return(0,d.jsxs)(d.Fragment,{children:[a.slice(0,-1).map((a,b)=>(0,d.jsx)("div",{children:a},b)),b&&c?(0,d.jsx)(h(),{prefetch:!1,href:c,className:"text-[var(--color-secondary-100)] hover:text-white transition-all ease-in-out duration-300 cursor-pointer",children:b}):b&&(0,d.jsx)("div",{children:b})]})})()}),g&&(0,d.jsx)("div",{className:"text-base text-center md:text-left lg:text-right text-[var(--color-secondary-100)] hover:text-white transition-all ease-in-out duration-300 cursor-pointer",children:g})]})]})}let v=(0,j.J1)`
  query GetMenuBySlug($slug: String!) {
    menu(slug: $slug) {
      id
      name
      slug
      items {
        id
        level
        name
        url
        metadata {
          key
          value
        }
        children {
          id
          name
          level
          url
          metadata {
            key
            value
          }
          children {
            id
            name
            level
            url
            metadata {
              key
              value
            }
            children {
              id
              name
              level
              url
              metadata {
                key
                value
              }
            }
          }
        }
      }
    }
  }
`,w=async a=>{if(!process.env.NEXT_PUBLIC_API_URL)return console.warn(`API URL not configured, skipping menu fetch for [${a}]`),null;try{let b=(0,k.A)(),c=new Promise((a,b)=>{setTimeout(()=>b(Error("Menu fetch timeout")),5e3)}),d=b.query({query:v,variables:{slug:a},fetchPolicy:"network-only",errorPolicy:"ignore"}),{data:e}=await Promise.race([d,c]);return e?.menu||null}catch(b){return console.warn(`Failed to fetch menu [${a}]:`,b instanceof Error?b.message:"Unknown error"),null}},x=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:[(0,d.jsx)("rect",{width:256,height:256,fill:"none"}),(0,d.jsx)("polygon",{points:"48 40 96 40 208 216 160 216 48 40",fill:"none",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),(0,d.jsx)("line",{x1:"113.88",y1:"143.53",x2:48,y2:216,fill:"black",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),(0,d.jsx)("line",{x1:208,y1:40,x2:"142.12",y2:"112.47",fill:"black",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16})]}),y=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:[(0,d.jsx)("rect",{width:256,height:256,fill:"none"}),(0,d.jsx)("circle",{cx:128,cy:128,r:96,fill:"black",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),(0,d.jsx)("path",{d:"M168,88H152a24,24,0,0,0-24,24V224",fill:"black",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),(0,d.jsx)("line",{x1:96,y1:144,x2:160,y2:144,fill:"black",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16})]}),z=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:[(0,d.jsx)("rect",{width:256,height:256,fill:"none"}),(0,d.jsx)("circle",{cx:128,cy:128,r:40,fill:"none",stroke:"black",strokeMiterlimit:10,strokeWidth:16}),(0,d.jsx)("rect",{x:32,y:32,width:192,height:192,rx:48,fill:"none",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),(0,d.jsx)("circle",{cx:180,cy:76,r:12})]}),A=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",children:[(0,d.jsx)("rect",{width:256,height:256,fill:"none"}),(0,d.jsx)("polygon",{points:"160 128 112 96 112 160 160 128",fill:"none",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16}),(0,d.jsx)("path",{d:"M24,128c0,29.91,3.07,47.45,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47s-3.07-47.45-5.41-56.47a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128Z",fill:"none",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:16})]}),B=a=>{if(!a)return a;try{if(a.startsWith("http://")||a.startsWith("https://")){let b=new URL(a);return b.pathname+b.search+b.hash}return a}catch{return a}},C=({children:a})=>(0,d.jsx)("span",{style:{color:"var(--color-primary-600)"},className:"font-semibold text-lg text-center md:text-left lg:text-right",children:a}),D=[{icon:y,link:"https://www.facebook.com/Sparktecmotorsports/",label:"Facebook"},{icon:A,link:"https://www.youtube.com/user/sparktecmotorsports",label:"YouTube"},{icon:x,link:"https://x.com/sparktec",label:"X (Twitter)"},{icon:z,link:"https://www.instagram.com/sparktec_motorsports/",label:"Instagram"}],E=[{id:"learn-more",name:"LEARN MORE",children:[{id:"about",name:"About Us",href:"/about"},{id:"faqs",name:"FAQ",href:"/frequently-asked-questions"},{id:"privacy-policy",name:"Privacy Policy",href:"/privacy-policy"},{id:"terms-and-conditions",name:"Terms & Conditions",href:"/terms-and-conditions"}]},{id:"support",name:"SUPPORT",children:[{id:"contact-us",name:"Contact Us",href:"/contact-us"},{id:"warranty",name:"Warranty",href:"/warranty"},{id:"shipping-returns",name:"Shipping & Returns",href:"/shipping-returns"}]}],F=a=>{let b=a?.find(a=>"target"===a.key);return b?.value==="_blank"?"_blank":"_self"},G=async()=>{let a=new Date().getFullYear(),b=await w("footer"),c=b&&"object"==typeof b&&"items"in b&&Array.isArray(b.items)&&b.items.length>0?b.items.map(a=>({id:a.id,name:a.name,url:a.url,children:a.children?.map(a=>({id:a.id,name:a.name,href:a.href,url:a.url,metadata:a.metadata}))||[]})):[],e=c.length>0?c:E;return(0,d.jsx)("footer",{style:{backgroundColor:"var(--color-secondary-950)"},children:(0,d.jsxs)("div",{className:"bg-[url('/images/footer-background.png')] container mx-auto px-6 pt-6 md:pt-20 pb-6",children:[(0,d.jsxs)("div",{className:"flex flex-col lg:flex-row justify-between gap-8 lg:gap-24 pb-20",children:[(0,d.jsx)(n.default,{src:"/Logo.png",alt:"Logo icon",width:80,height:80,quality:85,sizes:"100vw",className:"w-28 h-28 lg:w-44 lg:h-44 object-contain"}),(0,d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-secondary gap-6 lg:gap-4 xl:gap-6 w-full -tracking-wide",children:[e.map(a=>(0,d.jsxs)("div",{className:"flex flex-col w-full gap-3",children:[(0,d.jsx)(C,{children:(0,d.jsx)(h(),{href:B(a.url||""),children:a.name})}),(0,d.jsx)("div",{className:"flex flex-col gap-2",children:a.children.map(a=>{let b=B(a.url||a.href||"#");return(0,d.jsx)(h(),{prefetch:!1,href:b,target:F(a.metadata),rel:"_blank"===F(a.metadata)?"noopener noreferrer":void 0,className:"text-base text-[var(--color-secondary-50)] hover:text-[var(--color-primary)] transition-all ease-in-out duration-300 cursor-pointer text-center md:text-left lg:text-right",children:a.name},a.id)})})]},a.id)),(0,d.jsx)(u,{})]})]}),(0,d.jsxs)("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-6",children:[(0,d.jsx)("div",{className:" flex gap-3 2xl:min-w-[422px]",children:D.map(a=>(0,d.jsx)(h(),{href:a.link,target:"_blank",rel:"noopener noreferrer","aria-label":`Follow us on ${a.label}`,className:"[&>svg]:size-5 [&>svg]:block [&>svg]:shrink-0 [&>svg]:text-white block bg-white hover:scale-105 transition-all ease-in-out duration-300 p-1.5 rounded-full",children:a.icon},a.link))}),(0,d.jsx)(q,{})]}),(0,d.jsx)("div",{className:"flex flex-col items-center justify-center gap-2",children:(0,d.jsxs)("p",{className:"font-normal text-center text-xs font-secondary text-[var(--color-secondary-50)] uppercase",children:[(0,d.jsxs)("strong",{children:[" ","Copyright \xa9 ",a," Sparktec Motorsports. All Rights Reserved. ",(0,d.jsx)("br",{}),"\xa0"]}),(0,d.jsx)(h(),{href:"https://www.webshopmanager.com/",target:"_blank",rel:"nofollow",className:"hover:underline",children:"Powered by\xa0Web Shop Manager."})]})})]})})};var H=c(65208),I=c(36739);function J(a){return(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...a,children:[(0,d.jsx)("path",{d:"M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"}),(0,d.jsx)("path",{d:"m22 6-10 7L2 6"})]})}function K(a){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...a,children:(0,d.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.14a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z"})})}function L(a){return(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:14,height:14,fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...a,children:[(0,d.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,d.jsx)("path",{d:"M12 6v6l4 2"})]})}async function M(){let a=await s(),b=b=>a?.metadata?.find(a=>a.key.toLowerCase()===b.toLowerCase())?.value?.trim()||"",c=b("Email"),e=b("Phone"),f=b("Timings");if(![c,e,f].some(Boolean))return null;let g=e?function(a){let b=a.replace(/[^\d+]/g,"");return b?`tel:${b}`:null}(e.split(/\r?\n/).pop()||e):null;return(0,d.jsx)("div",{className:"w-full border-b",style:{backgroundColor:"var(--color-secondary-950)",borderColor:"var(--color-secondary-800)"},children:(0,d.jsx)("div",{className:"container mx-auto px-4 md:px-6",children:(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 py-2 md:py-2.5",children:[(0,d.jsxs)("div",{className:"flex items-center gap-4 text-xs sm:text-sm",style:{color:"var(--color-secondary-50)"},children:[c&&(0,d.jsxs)("div",{className:"group flex items-center gap-1.5",children:[(0,d.jsx)(J,{className:"text-white group-hover:text-[var(--color-primary)] transition-colors"}),(0,d.jsx)(h(),{"aria-label":"Email",prefetch:!1,href:`mailto:${c}`,className:"text-white hover:text-[var(--color-primary)] transition-colors",children:c})]}),e&&(0,d.jsxs)("div",{className:"group flex items-center gap-1.5",children:[(0,d.jsx)(K,{className:"text-white group-hover:text-[var(--color-primary)] transition-colors"}),g?(0,d.jsx)(h(),{"aria-label":"Phone",prefetch:!1,href:g,className:"text-white group-hover:text-[var(--color-primary)] transition-colors",children:e}):(0,d.jsx)("span",{className:"text-white group-hover:text-[var(--color-primary)] transition-colors",children:e})]})]}),f&&(0,d.jsxs)("div",{className:"group flex items-center gap-1.5 text-xs sm:text-sm",style:{color:"var(--color-secondary-50)"},children:[(0,d.jsx)("div",{className:"mb-[2px]",children:(0,d.jsx)(L,{className:"opacity-80 transition-colors group-hover:text-[var(--color-primary-500)]"})}),(0,d.jsx)("span",{className:"transition-colors group-hover:text-[var(--color-primary-500)]",children:f})]})]})})})}let N=process.env.NEXT_PUBLIC_SEARCH_URL||"",O=process.env.NEXT_PUBLIC_PARTSLOGIC_URL||"",P="fuelab"==process.env.NEXT_PUBLIC_TENANT_NAME?"aet":process.env.NEXT_PUBLIC_TENANT_NAME;async function Q(a){let b;if(!N)throw Error("Missing NEXT_PUBLIC_SEARCH_URL");let c=a.startsWith("/")?a:`/${a}`,d=`${N}${c}`;try{b=await fetch(d,{cache:"no-store",headers:{"Content-Type":"application/json"}})}catch(a){throw Error(`GET ${d} network error: ${a instanceof Error?a.message:String(a)}`)}if(!b.ok){let a=b.statusText;try{let c=await b.json();a=c?.message||a}catch{}throw Error(`GET ${d} failed: ${b.status} ${a}`)}return b.json()}async function R(a){let b;if(!O)throw Error("Missing NEXT_PUBLIC_PARTSLOGIC_URL");let c=a.startsWith("/")?a:`/${a}`,d=`${O}${c}`;try{b=await fetch(d,{cache:"no-store",headers:{"Content-Type":"application/json",Accept:"application/json"}})}catch(a){throw Error(`GET ${d} network error: ${a instanceof Error?a.message:String(a)}`)}if(!b.ok){let a=b.statusText;try{let c=await b.json();a=c?.message||a}catch{}throw Error(`GET ${d} failed: ${b.status} ${a}`)}return b.json()}function S(a){let b=new URLSearchParams;return Object.entries(a).forEach(([a,c])=>{void 0!==c&&""!==c&&b.set(a,String(c))}),b.toString()}async function T(a,b,c="graphql"){let d,e,f=function(a){if(!a)throw Error("NEXT_PUBLIC_API_URL is not configured");let b=a.trim();return/\/graphql\/?$/.test(b.toLowerCase())?b:b.replace(/\/+$/,"")+"/graphql"}(process.env.NEXT_PUBLIC_API_URL);try{d=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a,variables:b})})}catch(d){let a=d instanceof Error?d.message:String(d);throw console.error(`[${c}] network error`,a,{url:f,variables:b}),Error(`${c}: network error: ${a}`)}let g=await d.text();if(!d.ok)throw console.error(`[${c}] HTTP ${d.status}`,g.slice(0,500)),Error(`${c}: HTTP ${d.status}`);try{e=JSON.parse(g)}catch{throw console.error(`[${c}] invalid JSON`,g.slice(0,500)),Error(`${c}: invalid JSON`)}let h=e;if(h.errors?.length)throw console.error(`[${c}] GraphQL errors`,h.errors),Error(`${c}: ${h.errors[0]?.message||"GraphQL error"}`);if(!h.data)throw console.error(`[${c}] missing data`,e),Error(`${c}: invalid response (no data)`);return h.data}let U=`
  query Order($id: ID!) {
    order(id: $id) {
      id
      number
      created
      status
      paymentStatus
      total {
        gross { amount currency }
      }
      lines {
        id
        productName
        variantName
        quantity
        thumbnail { url }
        totalPrice {
          gross { amount currency }
        }
      }
    }
  }
`,V=`
  query ProductsByCategoriesAndProductTypes(
    $categoryIds: [ID!], 
    $productTypeIds: [ID!], 
    $channel: String!,
    $first: Int!,
    $after: String,
    $sortField: ProductOrderField!,
    $sortDirection: OrderDirection!
  ) {
    products(
      filter: {
        categories: $categoryIds
        productTypes: $productTypeIds
      }, 
      channel: $channel,
      first: $first,
      after: $after,
      sortBy: {
        field: $sortField,
        direction: $sortDirection
      }
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          name
          slug
          description
          category {
            id
            name
          }
          productType {
            id
            name
          }
          media {
            id
            url
            alt
          }
          pricing {
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
          }
        }
      }
    }
  }
`,W=`
  query GetAllCategories(
    $channel: String!
    $first: Int!
    $after: String
    $sortBy: CategorySortingInput
  ) {
    categories(
      first: $first
      after: $after
      sortBy: $sortBy
    ) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          slug
          level
          parent {
            id
            name
          }
          backgroundImage {
            url
            alt
          }
          products(channel: $channel) {
            totalCount
          }
        }
      }
    }
  }
`,X=`
  query GetCategoryBySlug($slug: String!, $channel: String!) {
    categories(first: 1, filter: { search: $slug }) {
      edges {
        node {
          id
          name
          slug
          level
          parent {
            id
            name
          }
          backgroundImage {
            url
            alt
          }
          products(channel: $channel) {
            totalCount
          }
        }
      }
    }
  }
`,Y=`
  query GetAllProductTypesWithCounts($first: Int!) {
    productTypes(first: $first) {
      totalCount
      edges {
        node {
          id
          name
          slug
          hasVariants
          isShippingRequired
          kind
          metadata {
            key
            value
          }
          products(channel: "default-channel") {
            totalCount
          }
        }
      }
    }
  }
`,Z=`
  query GetProductsByCategory(
    $categoryIds: [ID!]
    $channel: String!
    $first: Int!
    $after: String
    $search: String
  ) {
    products(
      filter: { 
        categories: $categoryIds
      }
      search: $search
      channel: $channel
      first: $first
      after: $after
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          id
          name
          slug
          description
          category {
            id
            name
          }
          productType {
            id
            name
          }
          media {
            id
            url
            alt
          }
          pricing {
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
          }
        }
      }
    }
  }
`,$=`
  query GetProductsByProductType(
    $productTypeIds: [ID!]
    $channel: String!
    $first: Int!
    $after: String
    $search: String
  ) {
    products(
      filter: { 
        productTypes: $productTypeIds
      }
      search: $search
      channel: $channel
      first: $first
      after: $after
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          id
          name
          slug
          description
          category {
            id
            name
          }
          productType {
            id
            name
          }
          media {
            id
            url
            alt
          }
          pricing {
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
          }
        }
      }
    }
  }
`,_=`
  query GlobalSearchStorefront(
    $query: String!
    $channel: String!
    $includeProducts: Boolean!
    $includeCategories: Boolean!
    $includeCollections: Boolean!
    $includeProductTypes: Boolean!
  ) {
    products(first: 10, channel: $channel, filter: { search: $query }) @include(if: $includeProducts) {
      edges {
        node {
          id
          name
          slug
          updatedAt
          category {
            id
            name
          }
          thumbnail(size: 64) {
            url
            alt
          }
        }
      }
    }

    categories(first: 10, filter: { search: $query }) @include(if: $includeCategories) {
      edges {
        node {
          id
          name
          slug
          level
          parent {
            id
            name
          }
          backgroundImage(size: 64) {
            url
            alt
          }
          products(first: 1, channel: $channel) {
            totalCount
          }
        }
      }
    }

    collections(first: 10, channel: $channel, filter: { search: $query }) @include(if: $includeCollections) {
      edges {
        node {
          id
          name
          slug
          backgroundImage(size: 64) {
            url
            alt
          }
          products(first: 1) {
            totalCount
          }
        }
      }
    }

    productTypes(first: 10, filter: { search: $query }) @include(if: $includeProductTypes) {
      edges {
        node {
          id
          name
          slug
          hasVariants
        }
      }
    }
  }
`,aa={getOrderById:async function({orderId:a}){let b=await T(U,{id:a},"order");if(!b.order)throw Error("Order not found");return b.order},getProductsByCategoriesAndProductTypes:async function({categoryIds:a,productTypeIds:b,channel:c,first:d,after:e,sortField:f="DATE",sortDirection:g="ASC"}){let h={categoryIds:a?.length?a:null,productTypeIds:b?.length?b:null,channel:c,first:d,sortField:f,sortDirection:g};return e&&(h.after=e),await T(V,h,"products")},getGraphQLCategories:async function({channel:a,first:b=100,after:c}){let d={channel:a,first:b,sortBy:{field:"PRODUCT_COUNT",direction:"DESC"}};return c&&(d.after=c),await T(W,d,"categories")},getCategoryBySlug:async function({slug:a,channel:b}){let c=await T(X,{slug:a,channel:b},"category"),d=c.categories.edges[0]?.node;if(d&&d.slug===a)return d;let e=!0,f=null;for(;e;){let c={channel:b,first:100};f&&(c.after=f);let d=await T(W,c,"categories"),g=d.categories.edges.find(b=>b.node.slug===a);if(g)return g.node;e=d.categories.pageInfo.hasNextPage,f=d.categories.pageInfo.endCursor}return null},getGraphQLProductTypes:async function({first:a=100}){return await T(Y,{first:a},"productTypes")},getProductsByCategory:async function({categoryIds:a,channel:b,first:c=100,after:d,search:e}){let f={categoryIds:a,channel:b,first:c};return d&&(f.after=d),e&&e.trim()&&(f.search=e),await T(Z,f,"products")},getProductsByProductType:async function({productTypeIds:a,channel:b,first:c=100,after:d,search:e}){let f={productTypeIds:a,channel:b,first:c};return d&&(f.after=d),e&&e.trim()&&(f.search=e),await T($,f,"products")},globalSearchStorefront:async function({query:a,channel:b="default-channel",includeProducts:c=!0,includeCategories:d=!0,includeCollections:e=!1,includeProductTypes:f=!0}){return await T(_,{query:a,channel:b,includeProducts:c,includeCategories:d,includeCollections:e,includeProductTypes:f},"globalSearch")},async getCategories(){let a=S({tenant:P});return Q(`/search/api/categories?${a}`)},async getBrands(){let a=S({tenant:P});return Q(`/search/api/brands?${a}`)},async getYMMCombinations(){let a=S({tenant:P});return Q(`/search/api/ymm/combinations?${a}`)},async getProductById(a){let b=S({tenant:P});return Q(`/search/api/products/${a}?${b}`)},async searchProducts(a={}){let b=a=>Array.isArray(a)?a.join(","):a,c=S({q:a.q??"*",tenant:P,category:b(a.category),brand:b(a.brand),years:b(a.years),makes:b(a.makes),models:b(a.models),per_page:a.per_page??10,page:a.page??1,sort:a.sort,in_stock:a.in_stock,min_price:a.min_price,max_price:a.max_price});return Q(`/search/api/search/multi-tenant?${c}`)},pingYMM:async()=>R("/ping"),getYears:async()=>R("/api/search/fitments/years"),getRootTypes:async()=>R("/api/fitment-search/root-types"),getFitmentValuesId:async a=>R(`/api/products/${a}/fitment-groups`),getFitmentValuesApi:async a=>R(`/api/fitment-search/values/${a}`),getFitmentChildAPI:async a=>R(`/api/fitment-search/child-types/${a}`),getMakes:async a=>R(`/api/search/fitments/makes?year_id=${a}`),getModels:async(a,b)=>R(`/api/search/fitments/models?year_id=${a}&make_id=${b}`),async searchProductsPL(a){let b=S({q:a.q,fitment_pairs:a.fitment_pairs,page:a.page??1,per_page:a.per_page??20});return R(`/api/search/products?${b}`)},categoryProductPL:async()=>R("/api/categories?page=1&per_page=100"),brandsProductPL:async()=>R("/api/brands?page=1&per_page=100"),async getProductsBySlug({slug:a,page:b=1,per_page:c=20,search:d,filterType:e="category_slug"}){let f=S({q:d||void 0,[e]:a,page:b,per_page:c});return R(`/api/search/products?${f}`)}},ab=(a,b=null)=>a.filter(a=>null===b?!a.parent:a.parent?.id===b).map(b=>({id:b.id,name:b.name,slug:b.slug,children:ab(a,b.id)})).sort((a,b)=>a.name.localeCompare(b.name));async function ac(){try{let a=(await aa.getGraphQLCategories({channel:"default-channel"})).categories.edges.map(a=>a.node);return ab(a)}catch(a){return console.error("Failed to fetch categories from GraphQL API:",a),[]}}async function ad(){try{let a=await w("navbar");if(a&&"object"==typeof a&&"items"in a&&Array.isArray(a.items))return a.items;return[]}catch(a){return console.error("Failed to fetch menu items:",a),[]}}async function ae(){let[a,b]=await Promise.allSettled([ac(),ad()]);return{categories:"fulfilled"===a.status?a.value:[],menuItems:"fulfilled"===b.status?b.value:[]}}let af=async()=>{let a=await (0,H.UL)(),b=a.get("isLoggedIn")?.value==="1"||!!a.get("token"),{categories:c,menuItems:f}=await ae();return(0,d.jsxs)("header",{className:"w-full",children:[(0,d.jsx)(e.Suspense,{fallback:(0,d.jsx)("div",{className:"w-full",style:{backgroundColor:"var(--color-secondary-900)",height:36}}),children:(0,d.jsx)(M,{})}),(0,d.jsx)(I.NavBar,{initialIsLoggedIn:b,initialCategories:c,initialMenuItems:f})]})};function ag({children:a}){return(0,d.jsx)(f,{header:(0,d.jsx)(af,{}),footer:(0,d.jsx)(G,{}),children:a})}function ah(a){return!a||"object"!=typeof a||Array.isArray(a)?{}:a}function ai(a){return a.replace(/\/+$/,"")}c(41938),c(4235);var aj=c(31249),ak=c(44588),al=c(50869),am=c(17042),an=c.n(am),ao=c(77356),ap=c.n(ao);c(78840),c(23181),c(6600),c(33346);var aq=c(5519),ar=c(53087),as=c(75871),at=c(54450),au=c(2242);let av=null;async function aw(){if(av&&Date.now()-av.timestamp<1e4)return av.data;try{let a,b=process.env.NEXT_PUBLIC_API_URL;if(!b)throw Error("NEXT_PUBLIC_API_URL not configured");let c=`https://wsm-migrator-api.alphasquadit.com/app/get-configuration?tenant=${encodeURIComponent(b)}`,d=await fetch(c,{method:"GET",headers:{"Content-Type":"application/json"},signal:AbortSignal.timeout(1e4)});if(!d.ok)throw Error(`Failed to fetch configuration: ${d.status}`);let e=await d.json();return av={data:a=0===e.length?ax():function(a){let b=[],c=[];return a.forEach(a=>{a.configurations||"tiered_pricing"!==a.app_name?["dealer_locator","google_recaptcha","google_tag_manager","google_maps","google_analytics","google_adsense","google_search_console","will-call"].includes(a.app_name)&&c.push({app_name:a.app_name,configurations:a.configurations||{},is_active:a.is_active}):b.push({app_name:a.app_name,is_active:a.is_active})}),{internal:b,external:c}}(e),timestamp:Date.now()},a}catch(a){return console.error("Failed to fetch app configuration:",a),ax()}}function ax(){return{internal:[{app_name:"tiered_pricing",is_active:!1}],external:[{app_name:"dealer_locator",configurations:{token:""},is_active:!1},{app_name:"google_recaptcha",configurations:{site_key:"",locations:{login:!1,signup:!1,checkout:!1}},is_active:!1},{app_name:"google_tag_manager",configurations:{container_id:""},is_active:!1},{app_name:"google_maps",configurations:{api_key:""},is_active:!1},{app_name:"google_analytics",configurations:{measurement_id:""},is_active:!1},{app_name:"google_adsense",configurations:{publisher_id:""},is_active:!1}]}}let ay=(0,e.cache)(async()=>{try{return await aw()}catch(a){return console.error("Server-side configuration fetch failed:",a),{internal:[{app_name:"tiered_pricing",is_active:!1}],external:[{app_name:"dealer_locator",configurations:{token:""},is_active:!1},{app_name:"google_recaptcha",configurations:{site_key:"",locations:{login:!1,signup:!1,checkout:!1}},is_active:!1},{app_name:"google_tag_manager",configurations:{container_id:""},is_active:!1},{app_name:"google_maps",configurations:{api_key:""},is_active:!1},{app_name:"google_analytics",configurations:{measurement_id:""},is_active:!1},{app_name:"google_adsense",configurations:{publisher_id:""},is_active:!1}]}}});async function az(){let a=await ay(),b=b=>a.external?.find(a=>a.app_name===b);return{features:{dealer_locator:b("dealer_locator")?.is_active??!1,tiered_pricing:a.internal?.find(a=>"tiered_pricing"===a.app_name)?.is_active??!1,will_call:b("will-call")?.is_active??!1},dealer_locator:{token:(()=>{let a=b("dealer_locator");return a?.is_active&&a.configurations&&a.configurations.token||null})()},google:{recaptcha_site_key:(()=>{let a=b("google_recaptcha");return a?.is_active&&a.configurations&&a.configurations.site_key||null})(),recaptcha_locations:(()=>{let a=b("google_recaptcha");if(a?.is_active&&a.configurations){let b=a.configurations;return{login:b.locations?.login??!1,signup:b.locations?.signup??!1,checkout:b.locations?.checkout??!1}}return{login:!1,signup:!1,checkout:!1}})(),tag_manager_container_id:(()=>{let a=b("google_tag_manager");return a?.is_active&&a.configurations&&a.configurations.container_id||null})(),maps_api_key:(()=>{let a=b("google_maps");return a?.is_active&&a.configurations&&a.configurations.api_key||null})(),analytics_measurement_id:(()=>{let a=b("google_analytics");return a?.is_active&&a.configurations&&a.configurations.measurement_id||null})(),adsense_publisher_id:(()=>{let a=b("google_adsense");return a?.is_active&&a.configurations&&a.configurations.publisher_id||null})(),search_console_verification_content:(()=>{let a=b("google_search_console");if(a?.is_active&&a.configurations){let b=a.configurations.verification_meta_tag;if(b){let a=b.match(/content="([^"]+)"/);return a?a[1]:b}}return null})()}}}var aA=c(90753);c(14276);var aB=c(61453),aC=c(86251),aD=c(92256);function aE(){return process.env.NEXT_PUBLIC_TENANT_NAME||"default"}let aF={branding:{tenantName:aE(),storeName:function(){let a=aE();return a.charAt(0).toUpperCase()+a.slice(1).replace(/-/g," ")+" Store"}(),appIconUrl:"/favicon.ico"},theme:{palette:process.env.NEXT_PUBLIC_THEME_PALETTE||"base-template"},integrations:{apiUrl:process.env.NEXT_PUBLIC_API_URL||"",siteUrl:process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000",searchUrl:process.env.NEXT_PUBLIC_SEARCH_URL},head:{canonicalPath:"/"}},aG=function(a){let b=ai(a.integrations.siteUrl),c=function(a,b){if(!b)return"/";if(b.startsWith("http://")||b.startsWith("https://"))return b;let c=ai(a),d=b.startsWith("/")?b:`/${b}`;return`${c}${d}`}(b,a.head?.canonicalPath??"/"),d=a.head?.title||a.branding.storeName,e=a.head?.description||"Discover featured products, best sellers, and exclusive offers.",f=a.branding.appIconUrl||"/favicon.ico";return{metadataBase:new URL(b),title:{default:d,template:`%s | ${a.branding.storeName}`},description:e,authors:[{name:a.branding.storeName}],creator:a.branding.storeName,publisher:a.branding.storeName,icons:{icon:[{url:f}],shortcut:[{url:f}]},alternates:{canonical:c},openGraph:{type:"website",siteName:a.branding.storeName,title:d,description:e,url:c},twitter:{card:"summary_large_image",title:d,description:e},robots:{index:a.head?.robots?.index??!0,follow:a.head?.robots?.follow??!0}}}(aF),aH=function(a="#ffffff",b="#0a0a0a"){return{width:"device-width",initialScale:1,themeColor:[{media:"(prefers-color-scheme: light)",color:a},{media:"(prefers-color-scheme: dark)",color:b}]}}(),aI=function(a,b){return b?{...a,...b,alternates:{...ah(a.alternates),...ah(b.alternates)},icons:{...ah(a.icons),...ah(b.icons)},openGraph:{...ah(a.openGraph),...ah(b.openGraph)},twitter:{...ah(a.twitter),...ah(b.twitter)},robots:{...ah(a.robots),...ah(b.robots)}}:a}(aG,{description:"Your premier online destination for quality products with fast shipping and exceptional service",manifest:"/site.webmanifest",formatDetection:{email:!1,address:!1,telephone:!1},openGraph:{locale:"en_US",images:[{url:"/og-default.png",width:1200,height:630,alt:aF.branding.storeName}]},twitter:{card:"summary_large_image",images:["/og-default.png"]},alternates:{canonical:"/"}});async function aJ({children:a}){let b=await az(),c=function(a){let b=[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"dns-prefetch",href:"https://www.googletagmanager.com"},{rel:"dns-prefetch",href:"https://www.google-analytics.com"},{rel:"dns-prefetch",href:"https://www.google.com"},{rel:"preconnect",href:"https://wsmsaleormedia.s3.us-east-1.amazonaws.com",crossOrigin:"anonymous"},{rel:"preconnect",href:"https://wsm-saleor-assets.s3.us-west-2.amazonaws.com",crossOrigin:"anonymous"},{rel:"preload",as:"image",href:"/images/heroSection-fallback.webp",type:"image/webp"}],c=function(a){if(!a)return null;try{return new URL(a).origin}catch{return null}}(a);return c&&b.splice(5,0,{rel:"preconnect",href:c}),b}(process.env.NEXT_PUBLIC_API_URL);return(0,d.jsxs)("html",{lang:"en",className:`${an().variable} ${ap().variable}`,children:[(0,d.jsxs)("head",{children:[c.map(a=>(0,d.jsx)("link",{rel:a.rel,href:a.href,as:a.as,type:a.type,crossOrigin:a.crossOrigin},`${a.rel}:${a.href}`)),b?.google?.search_console_verification_content&&(0,d.jsx)("meta",{name:"google-site-verification",content:b.google.search_console_verification_content})]}),(0,d.jsx)("body",{className:"min-h-screen bg-background font-sans antialiased",children:(0,d.jsx)(as.default,{children:(0,d.jsxs)(au.ServerAppConfigurationProvider,{configuration:b,children:[(0,d.jsx)(al.default,{}),(0,d.jsx)(aj.ThemeProvider,{defaultTheme:"base-template",children:(0,d.jsxs)(aA.default,{children:[(0,d.jsx)(aq.default,{}),(0,d.jsx)(aB.default,{children:(0,d.jsxs)(at.default,{children:[(0,d.jsx)(aC.default,{}),(0,d.jsx)(ar.TokenExpirationHandler,{}),(0,d.jsx)(aD.default,{}),(0,d.jsx)(ag,{children:a})]})})]})}),(0,d.jsx)(ak.default,{})]})})})]})}},716:(a,b,c)=>{Promise.resolve().then(c.bind(c,84423))},2023:(a,b,c)=>{"use strict";c.d(b,{default:()=>e});var d=c(13486);function e({children:a}){return(0,d.jsx)(d.Fragment,{children:a})}},2242:(a,b,c)=>{"use strict";c.d(b,{ServerAppConfigurationProvider:()=>e});var d=c(66352);let e=(0,d.registerClientReference)(function(){throw Error("Attempted to call ServerAppConfigurationProvider() from the server but ServerAppConfigurationProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/ServerAppConfigurationProvider.tsx","ServerAppConfigurationProvider");(0,d.registerClientReference)(function(){throw Error("Attempted to call useAppConfiguration() from the server but useAppConfiguration is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/ServerAppConfigurationProvider.tsx","useAppConfiguration")},2500:(a,b,c)=>{"use strict";c.d(b,{cn:()=>f,m_:()=>g});var d=c(4627),e=c(55855);function f(...a){return(0,e.QP)((0,d.$)(a))}function g(a){if(!a)return"";if(a.startsWith("http://")||a.startsWith("https://")||a.endsWith("/no-image-avail-large.png"))return a;let b=a.startsWith("/")?a.slice(1):a;return`https://wsm-saleor-assets.s3.us-west-2.amazonaws.com/${b}`}},5519:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/analytics/AnalyticsScripts.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/analytics/AnalyticsScripts.tsx","default")},5962:(a,b,c)=>{Promise.resolve().then(c.bind(c,80765))},7657:(a,b,c)=>{"use strict";c.d(b,{D:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,d.jsx)("g",{clipPath:"url(#clip0_944_758)",children:(0,d.jsx)("path",{d:"M13 6L8 11L3 6",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_944_758",children:(0,d.jsx)("rect",{width:16,height:16,fill:"white"})})})]})},9258:(a,b,c)=>{"use strict";c.d(b,{q:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",fill:"none",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_1768_20842)",children:[(0,d.jsx)("path",{opacity:"0.2",d:"M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z",fill:"#262626"}),(0,d.jsx)("path",{d:"M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z",stroke:"#262626",strokeWidth:2,strokeMiterlimit:10}),(0,d.jsx)("path",{d:"M11.5 15C12.3284 15 13 14.3284 13 13.5C13 12.6716 12.3284 12 11.5 12C10.6716 12 10 12.6716 10 13.5C10 14.3284 10.6716 15 11.5 15Z",fill:"#262626"}),(0,d.jsx)("path",{d:"M20.5 15C21.3284 15 22 14.3284 22 13.5C22 12.6716 21.3284 12 20.5 12C19.6716 12 19 12.6716 19 13.5C19 14.3284 19.6716 15 20.5 15Z",fill:"#262626"}),(0,d.jsx)("path",{d:"M21 22C19.9625 20.2062 18.2213 19 16 19C13.7787 19 12.0375 20.2062 11 22",stroke:"#262626",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_1768_20842",children:(0,d.jsx)("rect",{width:32,height:32,fill:"white"})})})]})},10716:(a,b,c)=>{"use strict";c.d(b,{A:()=>f});var d=c(13486),e=c(2500);c(60159);let f=({onClick:a,content:b,className:c,disabled:f,type:g,variant:h,children:i})=>(0,d.jsx)("button",{onClick:a,className:(0,e.cn)("disabled:pointer-events-none disabled:bg-[var(--color-secondary-300)] disabled:text-[var(--color-secondary-400)]","primary"===h?"bg-[var(--color-primary-600)] text-white hover:bg-white hover:text-[var(--color-primary)] ring-1 ring-[var(--color-primary)]":"","secondary"===h?"bg-[var(--color-secondary-200)] text-[var(--color-secondary-800)] hover:bg-[var(--color-secondary-300)]":"","tertiary"===h?"bg-transparent text-[var(--color-secondary-800)] hover:text-[var(--color-primary-600)] underline underline-offset-4":"","tertiarySecondary"===h?"bg-transparent hover:text-[var(--color-secondary-800)] text-[var(--color-primary-600)] underline underline-offset-4":"","py-3.5 px-4 font-secondary font-semibold cursor-pointer uppercase text-base -tracking-[0.04px] transition-all ease-in-out duration-300",c),disabled:f,type:g,children:b||i})},14276:()=>{},15549:(a,b,c)=>{"use strict";c.d(b,{default:()=>h});var d=c(13486),e=c(60159),f=c(2984);c(58513);var g=c(40);function h({children:a}){(0,f.usePathname)();let{isAppActive:b,getGoogleTagManagerConfig:c}=(0,g.h)(),h=b("google_tag_manager"),i=c();return h&&i?.container_id,(0,e.useRef)(Date.now()),(0,e.useRef)(new Set),(0,e.useRef)(Date.now()),(0,e.useRef)(null),(0,d.jsx)(d.Fragment,{children:a})}},19203:(a,b,c)=>{"use strict";c.d(b,{K:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_2168_118579)",children:[(0,d.jsx)("path",{opacity:"0.2",d:"M11.9926 26.1687C12.1387 26.6951 12.4532 27.1592 12.8881 27.4899C13.3229 27.8206 13.8541 27.9998 14.4004 28H29.8441C30.3907 28.0001 30.9223 27.8211 31.3574 27.4904C31.7925 27.1596 32.1073 26.6954 32.2535 26.1687L36.2504 11.75H7.98633L11.9926 26.1687Z",fill:"#525252"}),(0,d.jsx)("path",{d:"M13.75 36.75C15.1307 36.75 16.25 35.6307 16.25 34.25C16.25 32.8693 15.1307 31.75 13.75 31.75C12.3693 31.75 11.25 32.8693 11.25 34.25C11.25 35.6307 12.3693 36.75 13.75 36.75Z",fill:"#525252"}),(0,d.jsx)("path",{d:"M30 36.75C31.3807 36.75 32.5 35.6307 32.5 34.25C32.5 32.8693 31.3807 31.75 30 31.75C28.6193 31.75 27.5 32.8693 27.5 34.25C27.5 35.6307 28.6193 36.75 30 36.75Z",fill:"#525252"}),(0,d.jsx)("path",{d:"M2.5 5.5H6.25L11.9922 26.1687C12.1383 26.6951 12.4529 27.1592 12.8877 27.4899C13.3225 27.8206 13.8537 27.9998 14.4 28H29.8438C30.3903 28.0001 30.9219 27.8211 31.357 27.4904C31.7921 27.1596 32.1069 26.6954 32.2531 26.1687L36.25 11.75H7.98594",stroke:"#525252",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_2168_118579",children:(0,d.jsx)("rect",{width:"40",height:"40",fill:"white",transform:"translate(0 0.5)"})})})]})},24744:(a,b,c)=>{"use strict";c.d(b,{$t:()=>h,Sr:()=>e,VZ:()=>g,tK:()=>f});var d=c(93283);let e=`
  mutation CheckoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout { 
        id 
        token
        availablePaymentGateways {
          id
          name
          config {
            field
            value
          }
        }
      }
      errors { field message }
    }
  }
`;(0,d.J1)`
  query CheckoutById($id: ID!) {
    checkout(id: $id) {
      id
      token
      availablePaymentGateways {
        id
        name
        config {
          field
          value
        }
      }
    }
  }
`;let f=`
  mutation CheckoutLinesAdd($id: ID!, $lines: [CheckoutLineInput!]!) {
    checkoutLinesAdd(id: $id, lines: $lines) {
      checkout {
        id
        token
        totalPrice { gross { amount currency } }
        subtotalPrice { gross { amount currency } }
        lines {
          id
          quantity
          totalPrice { gross { amount currency } }
          variant {
            id
            name
            sku
            product {
              name
              thumbnail { url }
            }
            pricing {
              price { gross { amount currency } }
            }
          }
        }
      }
      errors { field message }
    }
  }
`,g=`
  mutation CheckoutLinesUpdate($id: ID!, $lines: [CheckoutLineUpdateInput!]!) {
    checkoutLinesUpdate(id: $id, lines: $lines) {
      checkout {
        id
        token
        totalPrice { gross { amount currency } }
        subtotalPrice { gross { amount currency } }
        lines {
          id
          quantity
          totalPrice { gross { amount currency } }
          variant {
            id
            name
            sku
            product {
              name
              thumbnail { url }
            }
            pricing {
              price { gross { amount currency } }
            }
          }
        }
      }
      errors { field message }
    }
  }
`,h=`
  mutation CheckoutLinesDelete($id: ID!, $linesIds: [ID!]!) {
    checkoutLinesDelete(id: $id, linesIds: $linesIds) {
      checkout {
        id
        token
        totalPrice { gross { amount currency } }
        subtotalPrice { gross { amount currency } }
        lines {
          id
          quantity
          totalPrice { gross { amount currency } }
          variant {
            id
            name
            sku
            product {
              name
              thumbnail { url }
            }
            pricing {
              price { gross { amount currency } }
            }
          }
        }
      }
      errors { field message }
    }
  }
`},26061:(a,b,c)=>{"use strict";c.d(b,{default:()=>e}),c(60159);var d=c(53624);function e(){return(0,d.o)(a=>a.checkYMMStatus),null}},29675:(a,b,c)=>{"use strict";c.d(b,{ThemeProvider:()=>h});var d=c(13486),e=c(60159);let f=(0,e.createContext)(void 0),g=["asphalt","racing-red","chrome","sunset","forest-green","ocean-blue"];function h({children:a,defaultTheme:b,storageKey:c="ui-theme"}){let h=b||function(){let a=process.env.NEXT_PUBLIC_THEME_PALETTE;return g.includes(a)?a:"asphalt"}(),[i,j]=(0,e.useState)(h);return(0,d.jsx)(f.Provider,{value:{theme:i,setTheme:a=>{g.includes(a)&&(document.documentElement.setAttribute("data-theme",a),localStorage.setItem(c,a),j(a))}},children:a})}},29826:(a,b,c)=>{"use strict";c.d(b,{default:()=>g});var d=c(13486),e=c(86558),f=c(40);function g(){let{getGoogleAnalyticsConfig:a}=(0,f.h)(),b=a();return b?.measurement_id?(0,d.jsx)(e.GoogleAnalytics,{gaId:b.measurement_id}):null}},31249:(a,b,c)=>{"use strict";c.d(b,{ThemeProvider:()=>e});var d=c(66352);let e=(0,d.registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/theme/theme-provider.tsx","ThemeProvider");(0,d.registerClientReference)(function(){throw Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/theme/theme-provider.tsx","useTheme")},31992:(a,b,c)=>{"use strict";c.d(b,{W:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_476_23728)",children:[(0,d.jsx)("path",{d:"M8.75 15C12.2018 15 15 12.2018 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M13.1696 13.1696L17.5 17.5",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_476_23728",children:(0,d.jsx)("rect",{width:20,height:20,fill:"white"})})})]})},32613:(a,b,c)=>{Promise.resolve().then(c.bind(c,5519)),Promise.resolve().then(c.bind(c,44588)),Promise.resolve().then(c.bind(c,50869)),Promise.resolve().then(c.bind(c,53087)),Promise.resolve().then(c.bind(c,36739)),Promise.resolve().then(c.bind(c,75871)),Promise.resolve().then(c.bind(c,61453)),Promise.resolve().then(c.bind(c,54450)),Promise.resolve().then(c.bind(c,90753)),Promise.resolve().then(c.bind(c,2242)),Promise.resolve().then(c.bind(c,86251)),Promise.resolve().then(c.bind(c,92256)),Promise.resolve().then(c.bind(c,31249)),Promise.resolve().then(c.t.bind(c,42671,23)),Promise.resolve().then(c.t.bind(c,56082,23))},36739:(a,b,c)=>{"use strict";c.d(b,{NavBar:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call NavBar() from the server but NavBar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/layout/header/navBar.tsx","NavBar")},38948:(a,b,c)=>{"use strict";c.d(b,{D:()=>e});var d=c(93283);let e=(0,d.J1)`
  query MeAddresses {
    me {
      id
      email
      defaultShippingAddress { id }
      defaultBillingAddress { id }
      addresses {
        id
        firstName
        lastName
        phone
        companyName
        streetAddress1
        streetAddress2
        city
        postalCode
        country { code country }
        countryArea
      }
    }
  }
`},41364:(a,b,c)=>{"use strict";c.d(b,{A:()=>f});var d=c(13486),e=c(2500);c(60159);let f=({content:a,type:b,onClick:c,className:f="",disabled:g=!1})=>(0,d.jsx)("button",{onClick:c,type:b,disabled:g,className:(0,e.cn)("font-secondary border border-[var(--color-secondary-900)] bg-[var(--color-secondary-900)] disabled:pointer-events-none text-[var(--color-secondary-50)] hover:text-black hover:bg-zinc-300 transition-all ease-in-out duration-300 font-semibold cursor-pointer -tracking-[0.04px] px-4 py-2",f),children:a})},41971:(a,b,c)=>{"use strict";c.d(b,{default:()=>m});var d=c(13486),e=c(60159),f=c(2984),g=c(86558);let h=(a,b,c)=>{(void 0!==c?c:null)&&(0,g.sendGAEvent)({event:"page_view",page_title:b||document.title,page_location:a})},i=(a,b,c)=>{(void 0!==c?c:null)&&(0,g.sendGAEvent)({event:a,custom_parameter:!0,...b})},j=(a,b)=>{(void 0!==b?b:null)&&(0,g.sendGAEvent)({event:"user_engagement",engagement_time_msec:a})},k=(a,b,c,d)=>{(void 0!==d?d:null)&&(0,g.sendGAEvent)({event:"timing_complete",name:a,value:b,event_category:c||"performance"})};var l=c(40);function m({children:a}){let{isAppActive:b,getGoogleAnalyticsConfig:c}=(0,l.h)(),m=b("google_analytics"),n=c();(a=>{let b=(0,f.usePathname)(),c=(0,e.useRef)(Date.now()),d=(0,e.useRef)(0),i=(0,e.useRef)(null),[l,m]=(0,e.useState)(0);return(0,e.useEffect)(()=>{c.current=Date.now(),m(0),h(window.location.href,void 0,a);let b=()=>{var b,c;let e=Math.round((window.pageYOffset||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-window.innerHeight)*100);e>d.current&&e%25==0&&(d.current=e,b=e,(void 0!==(c=a)?c:null)&&(0,g.sendGAEvent)({event:"scroll",percent_scrolled:b}))},e=()=>{let b=Date.now()-c.current;k("time_on_page",b,"engagement",a),j(b,a)},f=()=>{"hidden"===document.visibilityState?j(Date.now()-c.current,a):c.current=Date.now()};return i.current=setInterval(()=>{m(Date.now()-c.current)},1e3),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("beforeunload",e),document.addEventListener("visibilitychange",f),()=>{i.current&&clearInterval(i.current);let d=Date.now()-c.current;k("time_on_page",d,"engagement",a),j(d,a),window.removeEventListener("scroll",b),window.removeEventListener("beforeunload",e),document.removeEventListener("visibilitychange",f)}},[b,a])})(m?n?.measurement_id:null);var o=m?n?.measurement_id:null;let p=(0,f.usePathname)();(0,e.useEffect)(()=>{let a=document.referrer;if(!a||!a.includes(window.location.hostname)){h(window.location.href,void 0,o);let b=new URLSearchParams(window.location.search),c=b.get("utm_source"),d=b.get("utm_medium"),e=b.get("utm_campaign");(c||d||e)&&i("entrance_with_utm",{utm_source:c,utm_medium:d,utm_campaign:e,page_location:window.location.href},o),i("page_entrance",{entrance_page:p,referrer:a||"direct",is_new_session:!0},o)}},[p,o]);var q=m?n?.measurement_id:null;let r=(0,f.usePathname)();return(0,e.useEffect)(()=>{let a=()=>{i("page_exit",{exit_page:r,time_on_page:Date.now()-performance.now()},q)},b=()=>{"hidden"===document.visibilityState&&i("page_exit",{exit_page:r,exit_type:"tab_hidden"},q)};return window.addEventListener("beforeunload",a),document.addEventListener("visibilitychange",b),()=>{window.removeEventListener("beforeunload",a),document.removeEventListener("visibilitychange",b)}},[r,q]),(0,d.jsx)(d.Fragment,{children:a})}},44588:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/analytics/ConditionalGoogleAnalytics.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/analytics/ConditionalGoogleAnalytics.tsx","default")},45765:(a,b,c)=>{Promise.resolve().then(c.bind(c,76969)),Promise.resolve().then(c.bind(c,29826)),Promise.resolve().then(c.bind(c,55959)),Promise.resolve().then(c.bind(c,63520)),Promise.resolve().then(c.bind(c,78858)),Promise.resolve().then(c.bind(c,61861)),Promise.resolve().then(c.bind(c,41971)),Promise.resolve().then(c.bind(c,15549)),Promise.resolve().then(c.bind(c,2023)),Promise.resolve().then(c.bind(c,40)),Promise.resolve().then(c.bind(c,26061)),Promise.resolve().then(c.bind(c,98470)),Promise.resolve().then(c.bind(c,29675)),Promise.resolve().then(c.t.bind(c,49989,23)),Promise.resolve().then(c.t.bind(c,75636,23))},46529:(a,b,c)=>{"use strict";c.d(b,{A:()=>m});var d=c(86377),e=c(89055),f=c(54383),g=c(36831),h=c(26575),i=c(84106);c(35156);let j=(0,d.$)({uri:()=>(function(){{let a=function(a){if(!a)return;let b=a.trim(),c=b.toLowerCase();return c.endsWith("/graphql")||c.endsWith("/graphql/")||(b=b.replace(/\/+$/,"")+"/graphql/"),b}(process.env.NEXT_PUBLIC_API_URL);return a||(console.error("[Apollo SSR] NEXT_PUBLIC_API_URL is not set"),"https://placeholder-ssr-endpoint.invalid/graphql/")}})()}),k=(0,h.o)((a,{headers:b})=>({headers:b})),l=(0,i.S)(({graphQLErrors:a,operation:b,forward:c})=>{}),m=new e.R({link:(0,f.H)([l,k,j]),cache:new g.D,ssrMode:!0,defaultOptions:{watchQuery:{fetchPolicy:"cache-first",errorPolicy:"all"},query:{fetchPolicy:"network-only",errorPolicy:"all"},mutate:{errorPolicy:"all"}}})},47054:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,30385,23)),Promise.resolve().then(c.t.bind(c,33737,23)),Promise.resolve().then(c.t.bind(c,1904,23)),Promise.resolve().then(c.t.bind(c,35856,23)),Promise.resolve().then(c.t.bind(c,55492,23)),Promise.resolve().then(c.t.bind(c,89082,23)),Promise.resolve().then(c.t.bind(c,45812,23)),Promise.resolve().then(c.bind(c,3220))},50869:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/analytics/ConditionalGTMNoscript.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/analytics/ConditionalGTMNoscript.tsx","default")},53087:(a,b,c)=>{"use strict";c.d(b,{TokenExpirationHandler:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call TokenExpirationHandler() from the server but TokenExpirationHandler is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/auth/TokenExpirationHandler.tsx","TokenExpirationHandler")},53624:(a,b,c)=>{"use strict";c.d(b,{A:()=>j,o:()=>i});var d=c(68208),e=c(61009),f=c(24744);let g=a=>({totalItems:a.reduce((a,b)=>a+b.quantity,0),totalAmount:a.reduce((a,b)=>a+b.price*b.quantity,0)});async function h(){}let i=(0,d.v)()((0,e.Zr)(a=>({isLoggedIn:!1,user:null,hydrated:!1,guestEmail:"",guestShippingInfo:{firstName:"",lastName:"",address:"",city:"",state:"",zipCode:"",country:"",phone:""},cartItems:[],totalItems:0,totalAmount:0,checkoutId:null,checkoutToken:null,selectedShippingMethodId:null,syncingCart:!1,isYMMActive:!1,ymmYears:[],ymmYearsLoaded:!1,login:b=>{a({isLoggedIn:!0,user:b}),setTimeout(()=>{i.getState().loadCartFromSaleor().catch(console.error)},100)},logout:async()=>{let b=i.getState(),c=b.checkoutId,d=b.checkoutToken;a({isLoggedIn:!1,user:null,cartItems:[],totalItems:0,totalAmount:0,checkoutId:null,checkoutToken:null,selectedShippingMethodId:null,guestEmail:"",guestShippingInfo:{firstName:"",lastName:"",address:"",city:"",state:"",zipCode:"",country:"",phone:""}}),await h();let e=window.location.pathname,f=e.includes("/checkout")||e.includes("/cart");if(c&&f)try{localStorage.setItem("checkoutId",c),d&&localStorage.setItem("checkoutToken",d)}catch{}else try{localStorage.removeItem("checkoutId"),localStorage.removeItem("checkoutToken"),localStorage.removeItem("selectedShippingMethodId")}catch{}},initAuthFromToken:()=>{},setHydrated:b=>a({hydrated:b}),setGuestEmail:b=>a({guestEmail:b}),setGuestShippingInfo:b=>a(a=>({guestShippingInfo:{...a.guestShippingInfo,...b}})),addToCart:async b=>{let c=i.getState();if(process.env.NEXT_PUBLIC_API_URL)try{{let d=localStorage.getItem("token"),e=c.checkoutId;if(e){let g=await fetch(process.env.NEXT_PUBLIC_API_URL||"/api/graphql",{method:"POST",headers:{"Content-Type":"application/json",...d&&{Authorization:`Bearer ${d}`}},body:JSON.stringify({query:f.tK,variables:{id:e,lines:[{variantId:b.id,quantity:b.quantity}]}})});if(g.ok){let b=await g.json(),d=b?.data?.checkoutLinesAdd?.checkout,e=b?.data?.checkoutLinesAdd?.errors;if(e?.length>0)throw Error(`GraphQL add to cart errors: ${e.map(a=>a.message).join(", ")}`);if(d){a({checkoutId:d.id,checkoutToken:d.token});try{localStorage.setItem("checkoutId",d.id),d.token&&localStorage.setItem("checkoutToken",d.token)}catch{}c.storeCheckoutInUserMetadata(d.id,d.token).catch(console.error)}}else throw Error("Failed to add item to checkout via GraphQL")}else{let g=await fetch(process.env.NEXT_PUBLIC_API_URL||"/api/graphql",{method:"POST",headers:{"Content-Type":"application/json",...d&&{Authorization:`Bearer ${d}`}},body:JSON.stringify({query:f.Sr,variables:{input:{channel:"default-channel",lines:[{variantId:b.id,quantity:b.quantity}]}}})});if(g.ok){let b=await g.json(),d=b?.data?.checkoutCreate?.checkout,f=b?.data?.checkoutCreate?.errors;if(f?.length>0)throw Error(`GraphQL checkout creation errors: ${f.map(a=>a.message).join(", ")}`);if(d){e=d.id,a({checkoutId:d.id,checkoutToken:d.token});try{localStorage.setItem("checkoutId",d.id),d.token&&localStorage.setItem("checkoutToken",d.token)}catch{}c.storeCheckoutInUserMetadata(d.id,d.token).catch(console.error)}}else throw Error("Failed to create checkout via GraphQL")}a(a=>{let c=a.cartItems.find(a=>a.id===b.id)?a.cartItems.map(a=>a.id===b.id?{...a,quantity:a.quantity+b.quantity}:a):[...a.cartItems,b],{totalItems:d,totalAmount:e}=g(c);return{cartItems:c,totalItems:d,totalAmount:e}})}}catch(a){throw console.error(a),a}},removeFromCart:b=>{let c=i.getState();c.checkoutId&&c.syncCartRemovalWithSaleor(b).catch(console.error),a(a=>{let c=a.cartItems.filter(a=>a.id!==b),{totalItems:d,totalAmount:e}=g(c);if(0===c.length){try{localStorage.removeItem("checkoutId"),localStorage.removeItem("checkoutToken")}catch{}return{cartItems:c,totalItems:d,totalAmount:e,checkoutId:null,checkoutToken:null}}return{cartItems:c,totalItems:d,totalAmount:e}})},updateQuantity:(b,c)=>{let d=i.getState().cartItems.find(a=>a.id===b),e=d?.quantity||0;a(a=>{let d=a.cartItems.map(a=>a.id===b?{...a,quantity:Math.max(0,c)}:a).filter(a=>a.quantity>0),{totalItems:e,totalAmount:f}=g(d);if(0===d.length){console.log("[Store] Cart is now empty after quantity update, clearing checkout info");try{localStorage.removeItem("checkoutId"),localStorage.removeItem("checkoutToken")}catch{}return{cartItems:d,totalItems:e,totalAmount:f,checkoutId:null,checkoutToken:null}}return{cartItems:d,totalItems:e,totalAmount:f}});let f=i.getState();f.checkoutId&&e!==c&&(0===c?f.syncCartRemovalWithSaleor(b).catch(console.error):f.syncCartQuantityWithSaleor(b,c,e).catch(console.error))},clearCart:()=>{try{localStorage.removeItem("checkoutId"),localStorage.removeItem("checkoutToken")}catch{}a({cartItems:[],totalItems:0,totalAmount:0,checkoutId:null,checkoutToken:null})},setCheckoutId:b=>a({checkoutId:b}),setCheckoutToken:b=>a({checkoutToken:b}),setSelectedShippingMethodId:b=>a({selectedShippingMethodId:b}),setSyncingCart:b=>a({syncingCart:b}),setIsYMMActive:b=>a({isYMMActive:b}),checkYMMStatus:async()=>{},loadYMMYears:async()=>{},loadCartFromSaleor:async()=>{},syncCartWithSaleor:async()=>{},storeCheckoutInUserMetadata:async(a,b)=>{},loadCheckoutFromUserMetadata:async()=>null,finalizeCheckoutCleanup:async()=>{let b=i.getState();b.clearCart(),a({checkoutId:null,checkoutToken:null,selectedShippingMethodId:null}),b.isLoggedIn||a({guestEmail:"",guestShippingInfo:{firstName:"",lastName:"",address:"",city:"",state:"",zipCode:"",country:"",phone:""}}),console.log("Clearing shipping method selection for fresh start");try{localStorage.removeItem("checkoutId"),localStorage.removeItem("checkoutToken"),localStorage.removeItem("selectedShippingMethodId"),localStorage.removeItem("pendingCheckoutId"),localStorage.removeItem("pendingTransactionId")}catch{}try{sessionStorage.removeItem("checkoutId"),sessionStorage.removeItem("transactionId")}catch{}try{let a=localStorage.getItem("token");a&&await fetch(process.env.NEXT_PUBLIC_API_URL||"/api/graphql",{method:"POST",headers:{"Content-Type":"application/json",...a&&{Authorization:`Bearer ${a}`}},body:JSON.stringify({query:`
                  mutation AccountUpdate($input: AccountInput!) {
                    accountUpdate(input: $input) {
                      user { id }
                      errors { field message }
                    }
                  }
                `,variables:{input:{metadata:[{key:"activeCheckoutId",value:""},{key:"activeCheckoutToken",value:""}]}}})})}catch(a){console.warn("[checkout cleanup] failed to clear user metadata",a)}},syncCartQuantityWithSaleor:async(a,b,c)=>{},syncCartRemovalWithSaleor:async a=>{}}),{name:"wsm-global-store",storage:(0,e.KU)(()=>localStorage)})),j=i},54450:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/GoogleTagManagerProvider.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/GoogleTagManagerProvider.tsx","default")},55959:(a,b,c)=>{"use strict";c.d(b,{default:()=>f});var d=c(13486),e=c(40);function f(){let{getGoogleTagManagerConfig:a}=(0,e.h)(),b=a();return b?.container_id?(0,d.jsx)("noscript",{children:(0,d.jsx)("iframe",{src:`https://www.googletagmanager.com/ns.html?id=${b.container_id}`,height:"0",width:"0",style:{display:"none",visibility:"hidden"}})}):null}},58513:(a,b,c)=>{"use strict";c.d(b,{HO:()=>g,Lg:()=>m,PC:()=>l,WP:()=>h,dz:()=>f,i7:()=>k,pF:()=>e,uP:()=>i,uR:()=>j,vV:()=>n});let d=a=>{},e=(a,b="USD",c,e)=>{a.length&&d({event:"view_item",currency:b,value:c||a.reduce((a,b)=>a+(b.price||0)*(b.quantity||1),0),items:a})},f=(a,b="USD",c,e)=>{a.length&&d({event:"add_to_cart",currency:b,value:c||a.reduce((a,b)=>a+(b.price||0)*(b.quantity||1),0),items:a})},g=(a,b="USD",c,e)=>{a.length&&d({event:"remove_from_cart",currency:b,value:c||a.reduce((a,b)=>a+(b.price||0)*(b.quantity||1),0),items:a})},h=(a,b="USD",c,e)=>{a.length&&d({event:"view_cart",currency:b,value:c||a.reduce((a,b)=>a+(b.price||0)*(b.quantity||1),0),items:a})},i=(a,b="USD",c,e,f)=>{a.length&&d({event:"begin_checkout",currency:b,value:c||a.reduce((a,b)=>a+(b.price||0)*(b.quantity||1),0),coupon:e,items:a})},j=(a,b="USD",c,e,f,g,h)=>{a.length&&d({event:"add_shipping_info",currency:b,value:c||a.reduce((a,b)=>a+(b.price||0)*(b.quantity||1),0),coupon:e,shipping_tier:f,items:a,...g})},k=(a,b)=>{d({event:"purchase",transaction_id:a.transaction_id,affiliation:a.affiliation,value:a.value,tax:a.tax,shipping:a.shipping,currency:a.currency||"USD",coupon:a.coupon,items:a.items})},l=(a,b,c="USD",e)=>{d({event:"enhanced_conversion",enhanced_conversion_data:a,value:b,currency:c})},m=(a,b)=>{d({event:"user_engagement",engagement_time_msec:a})},n=(a,b,c)=>{d({event:"scroll",scroll_depth:a,page_path:b||window.location.pathname})}},60473:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>g});var d=c(13486),e=c(49989),f=c.n(e);function g({error:a,reset:b}){return(0,d.jsx)("html",{lang:"en",children:(0,d.jsx)("body",{children:(0,d.jsx)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"1rem",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"},children:(0,d.jsxs)("div",{style:{textAlign:"center",maxWidth:"500px"},children:[(0,d.jsx)("h1",{style:{fontSize:"4rem",fontWeight:"bold",color:"#dc2626",margin:"0 0 1rem 0"},children:"500"}),(0,d.jsx)("h2",{style:{fontSize:"1.5rem",fontWeight:"600",color:"#1f2937",margin:"0 0 1rem 0"},children:"Server Error"}),(0,d.jsx)("p",{style:{color:"#6b7280",marginBottom:"2rem"},children:"An unexpected error occurred. Our team has been notified and we are working to fix the issue."}),(0,d.jsxs)("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[(0,d.jsx)("button",{onClick:b,style:{padding:"0.75rem 1.5rem",backgroundColor:"#2563eb",color:"white",border:"none",fontWeight:"500",cursor:"pointer"},children:"Try Again"}),(0,d.jsx)(f(),{href:"/",style:{padding:"0.75rem 1.5rem",border:"1px solid #d1d5db",color:"#374151",textDecoration:"none",fontWeight:"500"},children:"Go to Home"})]}),!1]})})})})}c(60159)},61453:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/GoogleAnalyticsProvider.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/GoogleAnalyticsProvider.tsx","default")},61861:(a,b,c)=>{"use strict";c.d(b,{default:()=>j});var d=c(13486),e=c(89055),f=c(36831),g=c(23522);c(46529);var h=c(60159);let i=new e.R({cache:new f.D,ssrMode:!0});function j({children:a}){let[b,c]=(0,h.useState)(i);return(0,d.jsx)(g.X,{client:b,children:a})}},63520:(a,b,c)=>{"use strict";c.d(b,{TokenExpirationHandler:()=>f});var d=c(60159),e=c(53624);function f(){return(0,e.o)(a=>a.logout),(0,d.useRef)(null),null}c(41536)},69010:(a,b,c)=>{Promise.resolve().then(c.bind(c,96583))},71825:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,42671,23))},72105:(a,b,c)=>{"use strict";c.d(b,{Q:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[(0,d.jsx)("g",{clipPath:"url(#clip0_1262_28610)",children:(0,d.jsx)("path",{d:"M6.5 12H17.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_1262_28610",children:(0,d.jsx)("rect",{width:16,height:16,fill:"white",transform:"translate(4 4)"})})})]})},75871:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/ApolloWrapper.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/ApolloWrapper.tsx","default")},75944:(a,b,c)=>{"use strict";c.d(b,{A:()=>f});var d=c(13486),e=c(2500);c(60159);let f=({content:a,onClick:b,className:c="",type:f="button",disabled:g=!1})=>(0,d.jsx)("button",{onClick:b,type:f,disabled:g,className:(0,e.cn)("px-4 py-2 font-secondary ring-1 ring-[var(--color-primary)] hover:ring-[var(--color-primary)] hover:text-[var(--color-primary)] bg-[var(--color-primary)] hover:bg-white transition-all ease-in-out duration-300 text-white disabled:ring-zinc-400 disabled:pointer-events-none disabled:text-[var(--color-secondary-400)] disabled:bg-[var(--color-secondary-300)] font-semibold cursor-pointer uppercase text-base -tracking-[0.04px] ",c),children:a})},76969:(a,b,c)=>{"use strict";c.d(b,{default:()=>e}),c(60159);var d=c(40);function e(){let{getGoogleTagManagerConfig:a,getGoogleAdSenseConfig:b}=(0,d.h)();return null}},77318:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,69355,23)),Promise.resolve().then(c.t.bind(c,54439,23)),Promise.resolve().then(c.t.bind(c,94730,23)),Promise.resolve().then(c.t.bind(c,19774,23)),Promise.resolve().then(c.t.bind(c,53170,23)),Promise.resolve().then(c.t.bind(c,20968,23)),Promise.resolve().then(c.t.bind(c,78298,23)),Promise.resolve().then(c.t.bind(c,10282,23))},77697:(a,b,c)=>{"use strict";c.d(b,{c:()=>e});var d=c(13486);let e=(0,d.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_1262_28618)",children:[(0,d.jsx)("path",{d:"M6.5 12H17.5",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M12 6.5V17.5",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_1262_28618",children:(0,d.jsx)("rect",{width:"16",height:"16",fill:"white",transform:"translate(4 4)"})})})]})},78449:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,49989,23))},78858:(a,b,c)=>{"use strict";c.d(b,{NavBar:()=>aa});var d=c(13486),e=c(60159),f=c.n(e),g=c(53624),h=c(2500),i=c(2984),j=c(7657),k=c(75944),l=c(41364),m=c(40),n=c(49989),o=c.n(n);let p=a=>{if(!a)return a;try{if(a.startsWith("http://")||a.startsWith("https://")){let b=new URL(a);return b.pathname+b.search+b.hash}return a}catch{return a}},q=[{name:"Home",href:"/"},{name:"Shop By Category",href:"/products/all"},{name:"About",href:"/about"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact-us"}],r=({isHamMenuOpen:a,setIsHamMenuOpen:b,menuItems:c=[]})=>{let f=(0,i.useRouter)(),{isDealerLocatorEnabled:n}=(0,m.h)(),r=(0,g.A)(a=>a.isLoggedIn),s=(0,g.A)(a=>a.logout),[t,u]=(0,e.useState)(new Set),[v,w]=(0,e.useState)(!1),x="true"===process.env.NEXT_PUBLIC_BLOCK_CHECKOUT,y=(0,i.usePathname)(),z=new Set(q.map(a=>a.name.toLowerCase())),A=c.filter(a=>!z.has(a.name.toLowerCase())),B=(a,c)=>{b(!1);let d=(a=>{let b=a?.find(a=>"target"===a.key);return b?.value==="_blank"?"_blank":"_self"})(c),e=p(a);"_blank"===d?window.open(e,"_blank","noopener,noreferrer"):f.push(e)},C=async()=>{if(!v)try{w(!0),b(!1),await s()}catch{window.location.href="/"}finally{w(!1)}};return(0,e.useEffect)(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[a]),(0,d.jsx)("div",{className:(0,h.cn)("fixed top-[140px] sm:top-[121px] md:top-[125px] left-0 w-full h-full bg-white z-40 transition-all duration-[400ms] ease-in-out",a?"translate-x-0":"-translate-x-full"),children:(0,d.jsxs)("div",{className:"py-6 px-4 md:px-6 flex flex-col",children:[q.map(a=>(0,d.jsx)("div",{onClick:()=>B(a.href),className:`block pb-4 hover:text-[var(--color-primary-500)] transition-all duration-300 ease-in-out cursor-pointer ${a.href===y?"text-[var(--color-primary-500)]":""}`,children:a.name},a.href)),A.map(a=>(0,d.jsx)("div",{children:a.children&&a.children.length>0?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex items-center justify-between pb-4 hover:text-[var(--color-primary-500)] transition-all duration-300 ease-in-out cursor-pointer",onClick:()=>(a=>{u(b=>{let c=new Set(b);return c.has(a)?c.delete(a):c.add(a),c})})(a.id),children:[(0,d.jsx)("span",{children:a.name}),(0,d.jsx)("span",{className:`size-4 transition-transform duration-300 ${t.has(a.id)?"rotate-180":""}`,children:j.D})]}),t.has(a.id)&&(0,d.jsx)("div",{className:"ml-4 border-l border-gray-200 mb-6",children:a.children.map(a=>(0,d.jsx)("div",{onClick:()=>B(a.url,a.metadata),className:"block py-3 pl-4 hover:text-[var(--color-primary-500)] transition-all duration-300 ease-in-out cursor-pointer text-sm",children:a.name},a.id))})]}):(0,d.jsx)("div",{onClick:()=>B(a.url,a.metadata),className:`block pb-4 hover:text-[var(--color-primary-500)] transition-all duration-300 ease-in-out cursor-pointer ${"/contact-us"===y&&"Contact"===a.name||"/frequently-asked-questions"===y&&"FAQ"===a.name?"text-[var(--color-primary-500)]":""}`,children:a.name})},a.id)),x?null:r?(0,d.jsxs)("div",{className:"mt-3 pt-3 border-t border-gray-400",children:[(0,d.jsxs)("div",{onClick:()=>B("/account"),className:"flex items-center gap-2 py-3 hover:bg-gray-100 hover:text-[var(--color-primary-500)] transition-all duration-300 ease-in-out cursor-pointer rounded",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})}),(0,d.jsx)("span",{children:"Account Dashboard"})]}),(0,d.jsxs)("div",{onClick:C,className:"flex items-center gap-2 py-3 hover:bg-gray-100 hover:text-[var(--color-primary-500)] transition-all duration-300 ease-in-out cursor-pointer rounded",children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"})}),(0,d.jsx)("span",{children:v?"Logging out...":"Logout"})]})]}):(0,d.jsx)("div",{className:"mt-6 pt-6 border-t border-gray-400",children:(0,d.jsx)(o(),{href:"/account/login",onClick:()=>b(!1),children:(0,d.jsx)(l.A,{className:"w-full text-base",content:"LOGIN"})})}),n()&&(0,d.jsx)("div",{className:"mt-6 pt-6 border-t border-gray-400",children:(0,d.jsx)(k.A,{className:"w-full text-base",content:"FIND A DEALER",onClick:()=>B("/locator")})})]})})};var s=c(31992);let t=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 20",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_968_1434)",children:[(0,d.jsx)("path",{d:"M16.125 4.375L4.875 15.625",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M16.125 15.625L4.875 4.375",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_968_1434",children:(0,d.jsx)("rect",{width:20,height:20,fill:"white",transform:"translate(0.5)"})})})]}),u=(0,d.jsx)("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:(0,d.jsx)("path",{d:"M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10ZM3.125 5.625H16.875C17.0408 5.625 17.1997 5.55915 17.3169 5.44194C17.4342 5.32473 17.5 5.16576 17.5 5C17.5 4.83424 17.4342 4.67527 17.3169 4.55806C17.1997 4.44085 17.0408 4.375 16.875 4.375H3.125C2.95924 4.375 2.80027 4.44085 2.68306 4.55806C2.56585 4.67527 2.5 4.83424 2.5 5C2.5 5.16576 2.56585 5.32473 2.68306 5.44194C2.80027 5.55915 2.95924 5.625 3.125 5.625ZM16.875 14.375H3.125C2.95924 14.375 2.80027 14.4408 2.68306 14.5581C2.56585 14.6753 2.5 14.8342 2.5 15C2.5 15.1658 2.56585 15.3247 2.68306 15.4419C2.80027 15.5592 2.95924 15.625 3.125 15.625H16.875C17.0408 15.625 17.1997 15.5592 17.3169 15.4419C17.4342 15.3247 17.5 15.1658 17.5 15C17.5 14.8342 17.4342 14.6753 17.3169 14.5581C17.1997 14.4408 17.0408 14.375 16.875 14.375Z",fill:"currentColor"})}),v=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_476_23733)",children:[(0,d.jsx)("path",{d:"M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M2.5 16.875C4.01328 14.2602 6.76172 12.5 10 12.5C13.2383 12.5 15.9867 14.2602 17.5 16.875",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_476_23733",children:(0,d.jsx)("rect",{width:20,height:20,fill:"white"})})})]}),w=(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_412_11594)",children:[(0,d.jsx)("path",{d:"M6.875 18.125C7.56536 18.125 8.125 17.5654 8.125 16.875C8.125 16.1846 7.56536 15.625 6.875 15.625C6.18464 15.625 5.625 16.1846 5.625 16.875C5.625 17.5654 6.18464 18.125 6.875 18.125Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M15 18.125C15.6904 18.125 16.25 17.5654 16.25 16.875C16.25 16.1846 15.6904 15.625 15 15.625C14.3096 15.625 13.75 16.1846 13.75 16.875C13.75 17.5654 14.3096 18.125 15 18.125Z",fill:"currentColor"}),(0,d.jsx)("path",{d:"M1.25 2.5H3.125L5.99609 12.8344C6.06916 13.0976 6.22643 13.3296 6.44384 13.4949C6.66126 13.6603 6.92685 13.7499 7.2 13.75H14.9219C15.1952 13.7501 15.4609 13.6605 15.6785 13.4952C15.8961 13.3298 16.0535 13.0977 16.1266 12.8344L18.125 5.625H3.99297",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_412_11594",children:(0,d.jsx)("rect",{width:20,height:20,fill:"white"})})})]});var x=c(95774),y=c(15917),z=c.n(y);let A=f().forwardRef(({label:a,name:b,error:c,suffix:e,className:f="",...g},h)=>{let i=b?`${b}-error`:void 0;return(0,d.jsxs)("div",{className:"jsx-a0da2668211ac59f flex flex-col gap-1.5 w-full",children:[a&&(0,d.jsx)("label",{style:{color:"var(--color-secondary-200)"},htmlFor:b,className:"jsx-a0da2668211ac59f text-sm font-secondary -tracking-wide",children:a}),(0,d.jsxs)("div",{className:"jsx-a0da2668211ac59f relative",children:[(0,d.jsx)("input",{style:{backgroundColor:"white",border:c?"var(--color-primary-600)":"var(--color-secondary-600)"},autoComplete:"off",id:b,name:b,ref:h,"aria-invalid":c?"true":void 0,"aria-describedby":c&&i?i:void 0,...g,className:"jsx-a0da2668211ac59f "+(g&&null!=g.className&&g.className||`border font-secondary !placeholder-[var(--color-secondary-400)] placeholder:font-normal px-4 py-3 text-sm leading-6
            focus:outline-none custom-placeholder !bg-transparent w-full
            ${e?"pr-12":""}
            ${f}`)}),e&&(0,d.jsx)("div",{"aria-hidden":"true",style:{color:"var(--color-secondary-400)"},className:"jsx-a0da2668211ac59f absolute right-3 top-1/2 transform -translate-y-1/2 text-sm pointer-events-none",children:e})]}),c&&(0,d.jsx)("p",{id:i,role:"alert",className:"jsx-a0da2668211ac59f text-xs text-red-500",children:c}),(0,d.jsx)(z(),{id:"a0da2668211ac59f",children:".custom-placeholder.jsx-a0da2668211ac59f::placeholder{color:var(--color-secondary-500)}"})]})});A.displayName="InputField";let B=(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"7",viewBox:"0 0 12 7",fill:"none","aria-hidden":"true",focusable:"false",children:(0,d.jsx)("path",{d:"M11 6L6 1L1 6",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),C=({className:a})=>{let b=(0,i.useRouter)(),c=(0,i.usePathname)(),f=(0,g.o)(a=>a.isYMMActive),j=(0,i.useSearchParams)().get("fitment_pairs"),[k,l]=(0,e.useState)(""),[m,n]=(0,e.useState)(!1),[o,p]=(0,e.useState)(!1),[q,r]=(0,e.useState)([]),[t,u]=(0,e.useState)([]),[v,w]=(0,e.useState)([]),y=(0,e.useRef)(null),z=(0,e.useRef)(null),C=(0,e.useRef)(!1);return(0,e.useEffect)(()=>{if(C.current){C.current=!1;return}if(!k||k.trim().length<2){r([]),u([]),w([]),p(!1);return}p(!0),k.trim().length>=2&&n(!0);let a=new AbortController;y.current?.abort(),y.current=a;let b=setTimeout(async()=>{try{if(f){let b=await x.z4.searchProductsPL({q:k.trim(),page:1,per_page:10,fitment_pairs:j||""});if(!a.signal.aborted){let a=b.products.map(a=>({id:a.id,name:a.name,slug:a.slug,updatedAt:"",category:a.category||(a.category_name?{id:a.category_id||"",name:a.category_name}:null),thumbnail:a.thumbnail||(a.primary_image?{url:a.primary_image,alt:a.name}:null)})),c=b.facets.categories.map(a=>({id:a.id,name:a.value,slug:a.value.toLowerCase().replace(/\s+/g,"-"),level:0,parent:null,backgroundImage:a.media?{url:a.media,alt:a.value}:null,products:{totalCount:a.count}})),d=b.facets.brands.map(a=>({id:a.id,name:a.value,slug:a.value.toLowerCase().replace(/\s+/g,"-"),hasVariants:!1}));r(a),u(c),w(d)}}else{let b=await x.z4.globalSearchStorefront({query:k.trim(),channel:"default-channel",includeProducts:!0,includeCategories:!0,includeCollections:!1,includeProductTypes:!0});a.signal.aborted||(r(b.products?.edges.map(a=>a.node)||[]),u(b.categories?.edges.map(a=>a.node)||[]),w(b.productTypes?.edges.map(a=>a.node)||[]))}}catch{a.signal.aborted||(r([]),u([]),w([]))}finally{a.signal.aborted||p(!1)}},300);return()=>{clearTimeout(b),a.abort()}},[k,f]),(0,e.useEffect)(()=>{let a=a=>{if(!m)return;let b=a.target;z.current&&!z.current.contains(b)&&n(!1)},b=a=>{"Escape"===a.key&&n(!1)};return document.addEventListener("click",a),document.addEventListener("keydown",b),()=>{document.removeEventListener("click",a),document.removeEventListener("keydown",b)}},[m]),(0,d.jsxs)("div",{ref:z,style:{border:"1px solid black",backgroundColor:"white"},className:(0,h.cn)("flex items-center relative max-w-[560px] px-4 py-2.5 max-h-10 justify-between w-full",a),children:[(0,d.jsxs)("form",{onSubmit:a=>{a.preventDefault(),k.trim()&&(a=>{if("/products/all"===c){let c=new URLSearchParams;a.q&&c.set("q",a.q);let d=c.toString()?`/products/all?${c.toString()}`:"/products/all";b.replace(d,{scroll:!1})}else{let c=new URLSearchParams;a.q&&c.set("q",a.q);let d=c.toString()?`/products/all?${c.toString()}`:"/products/all";b.push(d)}n(!1)})({q:k.trim()})},className:"flex items-center w-full bg-transparent h-full justify-center",role:"search",children:[(0,d.jsx)("label",{htmlFor:"header-search",className:"sr-only",children:"Search products"}),(0,d.jsx)(A,{className:"leading-none !bg-transparent w-full !px-0 !py-0 ",name:"header-search",type:"search",placeholder:"Search product",value:k,onChange:a=>l(a.target.value),onFocus:()=>k.trim().length>=2&&n(!0)}),(0,d.jsx)("button",{type:"submit",className:"h-full","aria-label":"Search",children:(0,d.jsx)("span",{className:"text-black","aria-hidden":"true",children:s.W})})]}),m&&k?.length>1&&(0,d.jsx)("div",{className:"absolute top-full left-0 right-0 mt-2 bg-white border shadow-[0_10px_20px_0_rgba(0,0,0,0.10)] border-[var(--color-secondary-200)] z-40",children:(0,d.jsxs)("div",{className:" max-h-80 flex flex-col gap-2 overflow-auto p-3",children:[q.length>0&&(0,d.jsxs)("div",{className:"border-b border-gray-200 pb-2 mb-2",children:[(0,d.jsx)("div",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",children:"Products"}),q.slice(0,8).map(a=>(0,d.jsxs)("button",{onClick:c=>{c.stopPropagation();let d=a.id?`/product/${a.slug}?pid=${encodeURIComponent(a.id)}`:`/product/${a.slug}`;b.push(d),n(!1)},className:"w-full font-secondary p-3 text-left hover:bg-[var(--color-secondary-200)] flex items-center justify-between -tracking-[0.035px] text-[var(--color-secondary-800)] text-base transition-colors duration-200",children:[(0,d.jsxs)("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[(0,d.jsx)("div",{className:"w-12 h-12 flex-shrink-0 bg-gray-100 rounded overflow-hidden",children:a.thumbnail?(0,d.jsx)("img",{src:(0,h.m_)(a.thumbnail.url),alt:a.thumbnail.alt||a.name,className:"w-full h-full object-cover",onError:a=>{let b=a.target;b.style.display="none",b.parentElement.innerHTML='<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">No Image</div>'}}):(0,d.jsx)("div",{className:"w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs",children:"No Image"})}),(0,d.jsxs)("div",{className:"flex-1 min-w-0",children:[(0,d.jsx)("div",{className:"truncate font-medium text-sm",children:a.name}),a.category&&(0,d.jsxs)("div",{className:"text-xs text-gray-500 mt-1",children:["Category: ",a.category.name]}),(0,d.jsx)("div",{className:"text-xs text-blue-600 mt-1",children:"View Product Details →"})]})]}),(0,d.jsx)("span",{className:"rotate-90 ml-2 text-gray-400",children:B})]},a.id))]}),t.length>0&&(0,d.jsxs)("div",{className:"border-b border-gray-200 pb-2 mb-2",children:[(0,d.jsx)("div",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",children:"Categories"}),t.slice(0,4).map(a=>(0,d.jsxs)("button",{onClick:c=>{c.stopPropagation(),C.current=!0,l(a.name),n(!1);try{document.activeElement?.blur()}catch{}b.push(`/category/${encodeURIComponent(a.slug)}`)},className:"w-full font-secondary p-2 text-left hover:bg-[var(--color-secondary-200)] flex items-center justify-between -tracking-[0.035px] text-[var(--color-secondary-800)] text-base ",children:[(0,d.jsxs)("div",{className:"flex items-center gap-3 flex-1",children:[a.backgroundImage?.url&&(0,d.jsx)("div",{className:"w-10 h-10 flex-shrink-0 bg-gray-100 rounded overflow-hidden",children:(0,d.jsx)("img",{src:(0,h.m_)(a.backgroundImage.url),alt:a.backgroundImage.alt||a.name,className:"w-full h-full object-cover",onError:a=>{a.target.style.display="none"}})}),(0,d.jsxs)("div",{className:"flex items-center justify-between flex-1",children:[(0,d.jsx)("span",{children:a.name}),(0,d.jsxs)("span",{className:"text-xs text-gray-500",children:["(",a.products.totalCount,")"]})]})]}),(0,d.jsx)("span",{className:" rotate-90 ml-2",children:B})]},`cat-${a.id}`))]}),v.length>0&&(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2",children:"Product Types"}),v.slice(0,3).map(a=>(0,d.jsxs)("button",{onClick:c=>{c.stopPropagation(),C.current=!0,l(a.name),n(!1);try{document.activeElement?.blur()}catch{}b.push(`/brand/${encodeURIComponent(a.slug)}`)},className:"w-full font-secondary p-2 text-left hover:bg-[var(--color-secondary-200)] flex items-center justify-between -tracking-[0.035px] text-[var(--color-secondary-800)] text-base ",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,d.jsx)("span",{children:a.name}),(0,d.jsx)("span",{className:"text-xs text-gray-500 bg-blue-100 px-1 rounded",children:"Type"})]}),(0,d.jsx)("span",{className:" rotate-90 ml-2",children:B})]},`pt-${a.id}`))]}),!o&&!q.length&&!t.length&&!v.length&&k.trim().length>=2&&(0,d.jsx)("div",{className:" text-sm text-gray-500",children:"No Results found"}),o&&(0,d.jsx)("div",{className:"text-sm text-gray-500 font-secondary",children:"Searching…"})]})})]})};var D=c(49933);let E={navLinkBase:"font-secondary font-medium w-auto text-black hover:text-[var(--color-primary-500)] transition-all ease-in-out duration-300 relative group",navLinkActive:"text-[var(--color-primary)] after:w-full",navLinkInactive:"text-[var(--color-secondary-50)]",navLinkWithUnderline:"after:bg-[var(--color-primary-500)] after:transition-all after:duration-300",iconBtnBase:"cursor-pointer transition-all text-black ease-in-out duration-300 hover:bg-[var(--color-secondary-900)] hover:text-[var(--color-primary-500)]",mobileContainer:"xl:hidden flex items-center py-5 px-6 bg-white border-b-4 border-[var(--color-primary-500)] text-sm font-semibold",desktopContainer:"hidden xl:flex w-full items-center justify-between gap-10 py-5 px-20 bg-white border-b-4 border-[var(--color-primary-500)] text-sm font-semibold",linksContainer:"grid auto-cols-auto grid-flow-col gap-10 items-center w-auto",actionsContainer:"ml-auto flex w-full items-center gap-2",brandContainer:"flex-shrink-0 relative w-[133px] flex items-center h-[40px]",dropdown:{container:"absolute top-full left-0 mt-2 p-2 bg-white shadow-lg rounded-md  min-w-48 z-50",item:"block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[var(--color-primary-500)] transition-colors"},cartBadge:"absolute -right-0.5 -top-1.5 lg:-right-1 lg:-top-1.5 flex size-5 items-center justify-center rounded-full text-xs bg-[var(--color-primary-600)] text-[var(--color-secondary-800)]"},F=({logo:a,brandName:b,width:c=133,height:e=40})=>(0,d.jsx)(o(),{href:"/",prefetch:!1,className:E.brandContainer,"aria-label":`${b} Home`,children:(0,d.jsx)(D.default,{src:a,alt:b,width:c,height:e,priority:!0})}),G=({count:a})=>a<=0?null:(0,d.jsx)("span",{className:E.cartBadge,"aria-label":`${a} items in cart`,children:a}),H=({isEnableSearch:a,toggleSearch:b,isHamMenuOpen:c,toggleHamMenu:e,logo:f,brandName:g,isLoggedIn:h,totalItems:i,syncingCart:j,isActive:k})=>(0,d.jsx)("div",{className:E.mobileContainer,children:a?(0,d.jsxs)("div",{className:"flex items-center w-full gap-2",children:[(0,d.jsx)(C,{className:"w-full max-w-none"}),(0,d.jsx)("button",{onClick:b,className:"[&>svg]:size-5 py-2.5 text-black cursor-pointer","aria-label":"Close search",children:t})]}):(0,d.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,d.jsxs)("div",{className:"flex items-center gap-3",children:[(0,d.jsx)("button",{onClick:e,className:"[&>svg]:size-5 py-2.5 text-black cursor-pointer","aria-label":c?"Close menu":"Open menu","aria-expanded":c,children:c?t:u}),(0,d.jsx)(F,{logo:f,brandName:g,width:107,height:32})]}),(0,d.jsxs)("div",{className:"flex w-fit items-center gap-4",children:[(0,d.jsx)("button",{onClick:b,className:"text-black py-2.5 hover:text-[var(--color-primary-500)] cursor-pointer transition-all ease-in-out duration-300","aria-label":"Open search",children:s.W}),h?(0,d.jsx)(o(),{href:"/account",prefetch:!1,className:`flex items-center !bg-transparent ${E.iconBtnBase} ${k("/account")?"text-[var(--color-primary-500)]":E.navLinkInactive} relative`,"aria-label":"User Account",children:v}):(0,d.jsx)(o(),{href:"/account/login",prefetch:!1,children:(0,d.jsx)(l.A,{className:"text-xs md:text-base px-4",content:"LOGIN"})}),(0,d.jsxs)(o(),{href:"/cart",prefetch:!1,className:`flex items-center py-2.5 !bg-transparent ${E.iconBtnBase} ${k("/cart")?"text-[var(--color-primary-500)]":E.navLinkInactive} relative`,"aria-label":`Cart with ${i} items`,children:[w,j?(0,d.jsx)("div",{className:"absolute -top-1 -right-1 w-3 h-3 border border-[var(--color-primary-600)] rounded-full border-t-transparent animate-spin","aria-label":"Syncing cart"}):(0,d.jsx)(G,{count:i})]})]})]})});var I=c(9258);let J=["EZ Oil Drain Valve","Optional Hose Ends","Threaded Hose Ends","Adapters","Accessories"];function K({isOpen:a,categories:b,onClose:c,onMouseEnter:e,onMouseLeave:f}){return(0,d.jsx)("div",{style:{backgroundColor:"white"},className:`absolute top-full max-h-[400px] overflow-y-auto left-0 shadow-[0_10px_20px_0_rgba(0,0,0,0.10)] px-6 py-8 z-50 mt-1 ${a?"opacity-100":"opacity-0 pointer-events-none"}`,onMouseEnter:e,onMouseLeave:f,children:(0,d.jsx)("div",{className:"min-w-[304px] mx-auto",children:0===b.length?(0,d.jsxs)("div",{className:"flex flex-col items-center justify-center py-8",children:[(0,d.jsx)("div",{className:"rounded-full bg-[var(--color-secondary-200)] p-6",children:(0,d.jsx)("span",{children:I.q})}),(0,d.jsx)("h3",{className:"text-sm font-semibold uppercase text-[var(--color-secondary-800)] mt-4 -tracking-[0.05px] font-secondary",children:"No Categories Found"}),(0,d.jsx)("p",{className:"text-xs text-[var(--color-secondary-600)] mt-1 -tracking-[0.035px] font-secondary",children:"Categories will appear here when available."})]}):(0,d.jsxs)("div",{className:"space-y-6",children:[(0,d.jsx)("div",{className:"grid grid-cols-1 gap-12",children:b.map(a=>(0,d.jsxs)("div",{className:"group/category",children:[(0,d.jsx)(o(),{href:`/category/${encodeURIComponent(a.slug||a.id)}`,onClick:c,className:"text-sm font-semibold uppercase leading-4 tracking-[-0.03px] inline-block hover:text-[var(--color-primary-500)]  transition-all duration-300 relative group",children:(0,d.jsx)("span",{className:"relative",children:a.name})}),a.children?.length?(0,d.jsx)("ul",{className:"space-y-2 mt-3",children:[...a.children].sort((a,b)=>{let c=J.indexOf(a.name),d=J.indexOf(b.name);return -1===c&&-1===d?0:-1===c?1:-1===d?-1:c-d}).map(a=>(0,d.jsx)("li",{className:"text-sm leading-4 tracking-[-0.03px]",children:(0,d.jsx)(o(),{href:`/category/${encodeURIComponent(a.slug||a.id)}`,onClick:c,className:"text-[var(--color-secondary-600)] hover:text-[var(--color-primary-500)]  transition-all duration-300 inline-block  relative group",children:(0,d.jsx)("span",{className:"relative",children:a.name})})},a.id))}):null]},a.id))}),(0,d.jsx)("div",{className:"flex justify-center pt-2",children:(0,d.jsx)(o(),{href:"/products/all",onClick:c,className:"px-6 py-2 text-sm font-medium text-white hover:text-[var(--color-primary-600)] border hover:border-[var(--color-primary)] hover:bg-transparent bg-[var(--color-secondary-100)] transition-all duration-300",children:"View All Products"})})]})})})}let L=(a=300)=>{let[b,c]=(0,e.useState)(!1),d=(0,e.useRef)(null),f=(0,e.useCallback)(()=>{d.current&&(clearTimeout(d.current),d.current=null)},[]),g=(0,e.useCallback)(()=>{f(),c(!0)},[f]),h=(0,e.useCallback)(()=>{f(),d.current=setTimeout(()=>{c(!1)},a)},[f,a]),i=(0,e.useCallback)(()=>{f(),c(!1)},[f]);return(0,e.useEffect)(()=>()=>{f()},[f]),{isOpen:b,handleMouseEnter:g,handleMouseLeave:h,close:i,setIsOpen:c}},M=({item:a,isActive:b})=>{let{isOpen:c,handleMouseEnter:e,handleMouseLeave:f}=L(300),g=p(a.url);return(0,d.jsxs)("div",{className:"relative",onMouseEnter:e,onMouseLeave:f,children:[(0,d.jsx)(o(),{href:g,prefetch:!1,className:`${E.navLinkBase} ${b(g)?E.navLinkActive:E.navLinkInactive} whitespace-nowrap`,"aria-expanded":c,"aria-haspopup":"menu",children:(0,d.jsxs)("div",{className:"flex items-center  gap-2 transition-all ease-in-out duration-300",children:[(0,d.jsx)("span",{children:a.name}),(0,d.jsx)("span",{className:`size-4 transition-transform duration-300 ${c?"rotate-180":""}`,"aria-hidden":"true",children:j.D})]})}),c&&(0,d.jsx)("div",{className:E.dropdown.container,onMouseEnter:e,onMouseLeave:f,role:"menu","aria-label":`${a.name} submenu`,children:a.children?.map(a=>(0,d.jsx)(o(),{href:p(a.url),prefetch:!1,className:E.dropdown.item,role:"menuitem",children:a.name},a.id))})]})},N=[{name:"Shop By Category",href:"/products/all"},{name:"About",href:"/about"},{name:"Blog",href:"/blog"},{name:"Contact",href:"/contact-us"}],O=({categories:a,menuItems:b,isActive:c})=>{let f=L(50),g=(0,i.usePathname)(),h=(0,e.useMemo)(()=>b.map(a=>({...a,hasChildren:a.children&&a.children.length>0})),[b]),k=a=>`${E.navLinkBase} ${c(a)?E.navLinkActive:E.navLinkInactive} ${E.navLinkWithUnderline}`,l=a=>{let b=a?.find(a=>"target"===a.key);return b?.value==="_blank"?"_blank":"_self"};return(0,d.jsxs)(d.Fragment,{children:[N.map(b=>"Shop By Category"===b.name?(0,d.jsxs)("div",{className:"relative",onMouseEnter:f.handleMouseEnter,onMouseLeave:f.handleMouseLeave,children:[(0,d.jsx)(o(),{href:b.href,className:`${E.navLinkBase} ${c(b.href)||g.startsWith("/category")?E.navLinkActive:E.navLinkInactive}`,"aria-expanded":f.isOpen,"aria-haspopup":"menu",children:(0,d.jsxs)("div",{className:"flex items-center gap-2 whitespace-nowrap transition-all ease-in-out duration-300",children:[(0,d.jsx)("span",{children:b.name}),(0,d.jsx)("span",{className:`size-4 transition-transform duration-300 ${f.isOpen?"rotate-180":""}`,"aria-hidden":"true",children:j.D})]})}),(0,d.jsx)(K,{isOpen:f.isOpen,categories:a,onClose:f.close,onMouseEnter:f.handleMouseEnter,onMouseLeave:f.handleMouseLeave})]},b.href):h&&h.length>0?null:(0,d.jsx)(o(),{href:b.href,className:`${g===b.href?"text-[var(--color-primary-500)]":k(b.href)}`,children:b.name},b.href)),h.map(a=>{let b=p(a.url);return a.hasChildren?(0,d.jsx)(M,{item:a,isActive:c},a.id):b?(0,d.jsx)(o(),{href:b,target:l(a.metadata),rel:"_blank"===l(a.metadata)?"noopener noreferrer":void 0,className:`${"/contact-us"===g&&"Contact"===a.name||"/frequently-asked-questions"===g&&"FAQ"===a.name?"text-[var(--color-primary-500)]":k(b)} whitespace-nowrap`,children:a.name},a.id):null})]})},P=(0,d.jsxs)("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_1333_44203)",children:[(0,d.jsx)("path",{d:"M7 2.5H3V13.5H7",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M7 8H14",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),(0,d.jsx)("path",{d:"M11.5 5.5L14 8L11.5 10.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_1333_44203",children:(0,d.jsx)("rect",{width:16,height:16,fill:"white"})})})]});function Q({isAccountOpen:a,isLoggingOut:b,handleLogout:c}){return a?(0,d.jsxs)("div",{role:"menu","aria-label":"Account menu",style:{backgroundColor:"white"},className:"absolute right-0 mt-2 w-52 shadow-[0_10px_20px_0_rgba(0,0,0,0.10)] z-50",children:[(0,d.jsxs)(o(),{href:"/account/settings",className:"flex w-full items-center gap-2 font-secondary transition-all ease-in-out duration-300 border-b border-[var(--color-secondary-200)] rounded-md font-normal px-4 py-3 text-sm text-[var(--color-secondary-900)] hover:text-[var(--color-primary-500)]",role:"menuitem",children:[(0,d.jsx)("span",{className:"[&>svg]:size-4 text-[var(--color-primary-600)]",children:v}),"Account Dashboard"]}),(0,d.jsxs)("button",{onClick:c,disabled:b,className:"flex w-full items-center gap-2 font-secondary transition-all ease-in-out duration-300 rounded-md font-normal px-4 py-3 text-left text-sm text-[var(--color-secondary-900)] hover:text-[var(--color-primary-500)] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",role:"menuitem",children:[(0,d.jsx)("span",{className:"[&>svg]:size-4 text-[var(--color-primary-600)]",children:P}),b?"Signing Out...":"Logout"]})]}):null}var R=c(24744),S=c(38948),T=c(4308),U=c(10716),V=c(87249),W=c(19203),X=c(77697),Y=c(72105),Z=c(58513);function $(){let{cartItems:a,totalAmount:b,removeFromCart:c,updateQuantity:f,addToCart:h,checkoutId:j,setCheckoutId:k,setCheckoutToken:l,isLoggedIn:n,user:o,guestEmail:p}=(0,g.o)(),{getGoogleTagManagerConfig:q}=(0,m.h)(),r=(0,i.useRouter)(),[s,t]=(0,e.useState)(!1),[u,v]=(0,e.useState)(null),[w,x]=(0,e.useState)([]),[y,z]=(0,e.useState)({totalItems:0,totalAmount:0}),[A,B]=(0,e.useState)(!1),[C,E]=(0,e.useState)({}),{data:F,loading:G}=(0,T.IT)(S.D,{skip:!n}),H=(0,e.useMemo)(()=>{let a=F?.me;if(!a||!a.addresses?.length)return null;let b=a.defaultShippingAddress?.id;return(b?a.addresses.find(a=>a.id===b):a.addresses[0])||null},[F]),I=(0,e.useMemo)(()=>{let a=F?.me;if(!a||!a.addresses?.length)return null;let b=a.defaultBillingAddress?.id;return(b?a.addresses.find(a=>a.id===b):H||a.addresses[0])||null},[F,H]),J=(0,e.useMemo)(()=>{let a=(process.env.NEXT_PUBLIC_API_URL||"/api/graphql").trim();return/\/graphql\/?$/i.test(a)||(a=a.replace(/\/+$/,"")+"/graphql"),a},[]),K=A?w:a,L=A?y.totalAmount:b,M=(0,e.useCallback)(async b=>{E(a=>({...a,[b]:{...a[b],remove:!0}}));let d=q(),e=(A?w:a).find(a=>a.id===b);if(e){let a={item_id:e.id,item_name:e.name,item_category:e.category||"Products",price:e.price,quantity:e.quantity,currency:"USD",index:0},b=e.price*e.quantity;(0,Z.HO)([a],"USD",b,d?.container_id)}try{A&&(x(a=>a.filter(a=>a.id!==b)),z(()=>{let a=w.filter(a=>a.id!==b),c=a.reduce((a,b)=>a+b.quantity,0),d=a.reduce((a,b)=>a+b.price*b.quantity,0);return{totalItems:c,totalAmount:d}})),c(b),await new Promise(a=>setTimeout(a,500))}finally{E(a=>({...a,[b]:{...a[b],remove:!1}}))}},[A,w,c]),N=(0,e.useCallback)(async(a,b)=>{E(b=>({...b,[a]:{...b[a],minus:!0}}));try{A&&x(c=>{let d=c.map(c=>c.id===a?{...c,quantity:Math.max(0,b)}:c).filter(a=>a.quantity>0),e=d.reduce((a,b)=>a+b.quantity,0),f=d.reduce((a,b)=>a+b.price*b.quantity,0);return z({totalItems:e,totalAmount:f}),d}),f(a,b),await new Promise(a=>setTimeout(a,500))}finally{E(b=>({...b,[a]:{...b[a],minus:!1}}))}},[A,f]),O=(0,e.useCallback)(async a=>{E(b=>({...b,[a.id]:{...b[a.id],plus:!0}}));try{await h({id:a.id,name:a.name,price:a.price,image:a.image,quantity:1,sku:a.sku,category:a.category}),B(!1)}catch(a){console.error("[CartDropdown] Failed to add item to cart:",a)}finally{E(b=>({...b,[a.id]:{...b[a.id],plus:!1}}))}},[h]),P=(0,e.useCallback)(async()=>{if(v(null),n&&G)return;let a=q();if(K.length>0){let b=K.map((a,b)=>({item_id:a.id,item_name:a.name,item_category:a.category||"Products",price:a.price,quantity:a.quantity,currency:"USD",index:b})),c=K.reduce((a,b)=>a+b.price*b.quantity,0);(0,Z.uP)(b,"USD",c,void 0,a?.container_id)}j&&k(null);try{localStorage.removeItem("checkoutId"),localStorage.removeItem("checkoutToken")}catch{}t(!0);try{let a=K.map(a=>({quantity:a.quantity,variantId:a.id}));if(0===a.length)return void t(!1);let b=(n?o?.email||F?.me?.email||"":p)||"guest@example.com",c=R.Sr,d={channel:process.env.NEXT_PUBLIC_SALEOR_CHANNEL||"default-channel",email:b,lines:a},e=await fetch(J,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:c,variables:{input:d}})});if(!e.ok)throw Error("Failed to create checkout");let f=await e.json(),g=f.data?.checkoutCreate?.errors;if(g&&g.length)throw Error(g[0]?.message||"Checkout creation error");let h=f.data?.checkoutCreate?.checkout?.id,i=f.data?.checkoutCreate?.checkout?.token;if(!h)throw Error("No checkout id returned");k(h),i&&l(i);try{localStorage.setItem("checkoutId",h),i&&localStorage.setItem("checkoutToken",i)}catch{}r.push(`/checkout?checkoutId=${encodeURIComponent(h)}`)}catch(b){let a=b instanceof Error?b.message:"Unable to proceed to checkout";console.error("[Cart] handleProceed error:",b),v(a)}finally{t(!1)}},[I,H,j,J,p,n,K,F,G,r,k,l,o?.email]);return 0===K.length?(0,d.jsx)("div",{className:"max-w-md w-full absolute right-20 top-20 pt-7",children:(0,d.jsxs)("div",{className:"bg-white shadow-[0_10px_20px_0_#0000001A] p-4",children:[(0,d.jsx)("p",{className:"border-b border-[var(--color-secondary-200)] pb-2 font-secondary font-semibold text-xl text-[var(--color-secondary-800)]",children:"MY CART"}),(0,d.jsx)(V.A,{icon:W.K,iconContainer:"p-5",text:"YOUR CART IS EMPTY",textParagraph:"Browse parts and accessories to get started.",className:"min-h-96"})]})}):(0,d.jsx)("div",{className:"max-w-md w-full absolute right-20 top-20 pt-7",children:(0,d.jsx)("div",{className:"bg-white shadow-[0_10px_20px_0_#0000001A] p-4",children:(0,d.jsxs)("div",{className:"space-y-5",children:[(0,d.jsx)("p",{className:"border-b border-[var(--color-secondary-200)] pb-2 font-secondary font-semibold text-xl text-[var(--color-secondary-800)]",children:"MY CART"}),(0,d.jsx)("div",{className:"space-y-4 overflow-y-auto max-h-80 pr-2",children:K.map(a=>(0,d.jsxs)("div",{className:"flex items-center gap-4 border-b border-[var(--color-secondary-200)] last:border-b-0 pb-4 last:pb-0",children:[(0,d.jsxs)("div",{className:"w-full items-center gap-2 flex",children:[(0,d.jsx)("div",{className:"relative size-[100px] flex-shrink-0",children:(0,d.jsx)(D.default,{src:a?.image||"/no-image-avail-large.png",alt:a?.name||"Product Image",fill:!0,className:"object-contain"})}),(0,d.jsxs)("div",{className:"space-y-4",children:[(0,d.jsxs)("div",{className:"space-y-1",children:[(0,d.jsx)("p",{className:"text-xs font-normal text-[var(--color-secondary-800)]",children:a.category??"N/A"}),(0,d.jsx)("h3",{className:"font-medium font-secondary text-sm text-[var(--color-secondary-800)] line-clamp-2",children:a.name})]}),(0,d.jsxs)("p",{className:"font-semibold text-base text-[var(--color-primary-600)] font-secondary",children:["$",(a.price*a.quantity).toFixed(2)]})]})]}),(0,d.jsxs)("div",{className:"flex flex-col items-end gap-8",children:[(0,d.jsx)(U.A,{onClick:()=>M(a.id),disabled:C[a.id]?.remove||C[a.id]?.plus||C[a.id]?.minus,variant:"tertiary",className:"p-0",children:C[a.id]?.remove?"Removing...":"Remove"}),(0,d.jsxs)("div",{className:"flex items-center border border-[var(--color-secondary-200)] bg-[var(--color-secondary-50)] px-2 py-3 gap-2 min-w-32 justify-between",children:[(0,d.jsx)("button",{onClick:()=>N(a.id,a.quantity-1),disabled:C[a.id]?.minus||C[a.id]?.plus||C[a.id]?.remove,className:`border-r border-[var(--color-secondary-200)] [&>svg]:size-6 pr-2 transition-opacity ${C[a.id]?.minus||C[a.id]?.plus||C[a.id]?.remove?"cursor-not-allowed opacity-50":"cursor-pointer hover:opacity-75"}`,children:C[a.id]?.minus?(0,d.jsxs)("svg",{className:"animate-spin size-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,d.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,d.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):Y.Q}),(0,d.jsx)("span",{className:"font-normal text-base font-secondary text-[var(--color-secondary-800)]",children:a.quantity}),(0,d.jsx)("button",{onClick:()=>O(a),disabled:C[a.id]?.plus||C[a.id]?.minus||C[a.id]?.remove,className:`border-l border-[var(--color-secondary-200)] [&>svg]:size-6 pl-2 transition-opacity ${C[a.id]?.plus||C[a.id]?.minus||C[a.id]?.remove?"cursor-not-allowed opacity-50":"cursor-pointer hover:opacity-75"}`,children:C[a.id]?.plus?(0,d.jsxs)("svg",{className:"animate-spin size-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,d.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,d.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):X.c})]})]})]},a.id))}),(0,d.jsxs)("div",{className:"gap-2 flex flex-col mb-4 font-normal text-base font-secondary text-[var(--color-secondary-600)] border-t border-[var(--color-secondary-200)] pt-4",children:[(0,d.jsxs)("div",{className:"flex justify-between",children:[(0,d.jsx)("span",{children:"Subtotal"}),(0,d.jsxs)("span",{className:"font-medium",children:["$",L.toFixed(2)]})]}),(0,d.jsxs)("div",{className:"border-t border-[var(--color-secondary-200)] pt-4 flex justify-between text-xl text-[var(--color-secondary-600)] font-medium ",children:[(0,d.jsx)("span",{children:"TOTAL"}),(0,d.jsxs)("span",{className:"font-semibold text-[var(--color-secondary-800)]",children:["$",L.toFixed(2)]})]})]}),u&&(0,d.jsx)("div",{className:"mb-3 text-sm text-red-600",children:u}),(0,d.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,d.jsx)(U.A,{onClick:()=>r.push("/cart"),variant:"secondary",children:"VIEW CART"}),(0,d.jsx)(U.A,{onClick:P,disabled:s||n&&G,variant:"primary",children:s?"Loading..":n&&G?"Loading your address...":"CHECKOUT"})]})]})})})}let _=({isLoggedIn:a,isAccountOpen:b,setIsAccountOpen:c,isLoggingOut:f,handleLogout:g,totalItems:h,syncingCart:i,toggleAccount:j,isActive:n})=>{let p=(0,e.useRef)(null),{isDealerLocatorEnabled:q}=(0,m.h)();return(0,e.useEffect)(()=>{let a=a=>{if(!b)return;let d=a.target;p.current&&d&&!p.current.contains(d)&&c(!1)};return document.addEventListener("pointerdown",a),()=>{document.removeEventListener("pointerdown",a)}},[b,c]),(0,d.jsxs)("div",{className:E.actionsContainer,children:[(0,d.jsx)("div",{className:"flex w-full items-center justify-end",children:(0,d.jsx)(C,{})}),a?(0,d.jsxs)("div",{className:"relative",ref:p,children:[(0,d.jsx)("button",{onClick:j,className:`cursor-pointer size-10 flex items-center justify-center ${E.iconBtnBase} ${b?"bg-[var(--color-secondary-900)] text-white":E.navLinkInactive}`,"aria-label":"User Account","aria-expanded":b,"aria-haspopup":"menu",disabled:f,children:v}),(0,d.jsx)(Q,{isAccountOpen:b,isLoggingOut:f,handleLogout:g})]}):(0,d.jsx)(o(),{href:"/account/login",prefetch:!1,children:(0,d.jsx)(l.A,{className:"text-base",content:"LOGIN"})}),q()&&(0,d.jsx)(o(),{href:"/locator",prefetch:!1,children:(0,d.jsx)(k.A,{className:"text-base whitespace-nowrap",content:"Find A Dealer"})}),(0,d.jsxs)("div",{className:"group cursor-pointer",children:[(0,d.jsxs)(o(),{href:"/cart",prefetch:!1,className:`size-10 flex items-center justify-center group-hover:bg-[var(--color-secondary-900)] group-hover:text-[var(--color-primary-500)] ${E.iconBtnBase} ${n("/cart")?"bg-[var(--color-secondary-900)] text-white":E.navLinkInactive} relative`,"aria-label":`Cart with ${h} items`,children:[w,i?(0,d.jsx)("div",{className:"absolute -top-1 -right-1 w-3 h-3 border border-[var(--color-primary-600)] rounded-full border-t-transparent animate-spin","aria-label":"Syncing cart"}):(0,d.jsx)(G,{count:h})]}),(0,d.jsx)("div",{className:"opacity-0 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100",children:(0,d.jsx)($,{})})]})]})},aa=({initialCategories:a=[],initialMenuItems:b=[]})=>{let{categories:c,menuItems:f}=(({initialCategories:a=[],initialMenuItems:b=[]}={})=>({categories:(0,e.useMemo)(()=>a.map(a=>({...a,children:a.children||[]})),[a]),menuItems:b,hasData:a.length>0||b.length>0}))({initialCategories:a,initialMenuItems:b}),{isAccountOpen:h,setIsAccountOpen:j,isLoggingOut:k,setIsLoggingOut:l,isHamMenuOpen:m,setIsHamMenuOpen:n,isEnableSearch:o,isActive:p,toggleAccount:q,toggleHamMenu:s,toggleSearch:t}=(()=>{let[a,b]=(0,e.useState)(!1),[c,d]=(0,e.useState)(!1),[f,g]=(0,e.useState)(()=>!1),[h,j]=(0,e.useState)(()=>!1),k=(0,i.usePathname)();(0,e.useEffect)(()=>{b(!1)},[k]),(0,e.useEffect)(()=>{let a=a=>{"Escape"===a.key&&b(!1)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[]);let l=(0,e.useCallback)(a=>k===a||k.startsWith(`${a}/`),[k]),m=(0,e.useCallback)(()=>{b(a=>!a)},[]),n=(0,e.useCallback)(()=>{g(a=>!a)},[]),o=(0,e.useCallback)(()=>{j(a=>!a)},[]);return{isAccountOpen:a,setIsAccountOpen:b,isLoggingOut:c,setIsLoggingOut:d,isHamMenuOpen:f,setIsHamMenuOpen:g,isEnableSearch:h,setIsEnableSearch:j,pathName:k,isActive:l,toggleAccount:m,toggleHamMenu:n,toggleSearch:o}})(),u=(0,g.A)(a=>a.logout),v=(0,g.A)(a=>a.isLoggedIn),w=(0,g.A)(a=>a.totalItems),{syncingCart:x}=function(){let{isLoggedIn:a,syncingCart:b,loadCartFromSaleor:c}=(0,g.o)();return{syncingCart:b}}(),y=(0,e.useMemo)(()=>({brandName:process.env.NEXT_PUBLIC_TENANT_NAME||"default",logo:process.env.NEXT_PUBLIC_LOGO_URL||"https://webshopmanager.com/files/images/logo.png"}),[]),z=(0,e.useCallback)(async()=>{if(!k)try{l(!0),j(!1),await u()}catch{window.location.href="/"}finally{l(!1)}},[k,u,j,l]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(H,{...y,isEnableSearch:o,toggleSearch:t,isHamMenuOpen:m,toggleHamMenu:s,isLoggedIn:v,totalItems:w,syncingCart:x,isActive:p}),(0,d.jsxs)("nav",{className:E.desktopContainer,children:[(0,d.jsxs)("div",{className:E.linksContainer,children:[(0,d.jsx)(F,{...y}),(0,d.jsx)(O,{categories:c,menuItems:f,isActive:p})]}),(0,d.jsx)(_,{isLoggedIn:v,isAccountOpen:h,setIsAccountOpen:j,isLoggingOut:k,handleLogout:z,totalItems:w,syncingCart:x,toggleAccount:q,isActive:p})]}),(0,d.jsx)(r,{isHamMenuOpen:m,setIsHamMenuOpen:n,menuItems:f})]})}},80765:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/error.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/error.tsx","default")},83318:(a,b,c)=>{"use strict";c.d(b,{A:()=>g});var d=c(76299),e=c(12899),f=c(61428);let g=()=>{try{let a=process.env.NEXT_PUBLIC_API_URL||"http://localhost:3000/api/graphql";console.log(`[APOLLO] Creating client with URL: ${a}`);let b=(a=>{let b=a.trim(),c=b.toLowerCase();return c.endsWith("/graphql")||c.endsWith("/graphql/")||(b=b.replace(/\/+$/,"")+"/graphql/"),b})(a);console.log(`[APOLLO] Normalized URL: ${b}`);let c=(0,d.$)({uri:b}),g=new e.R({link:c,cache:new f.D,ssrMode:!0,defaultOptions:{query:{errorPolicy:"ignore",fetchPolicy:"no-cache"}}});return console.log("[APOLLO] Client created successfully"),g}catch(b){console.error("[APOLLO] Failed to create Apollo client:",b);let a=(0,d.$)({uri:"http://localhost:3000/api/graphql"});return new e.R({link:a,cache:new f.D,ssrMode:!0})}}},84423:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/global-error.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/global-error.tsx","default")},86251:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/YMMStatusProvider.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/YMMStatusProvider.tsx","default")},87239:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>h,metadata:()=>g});var d=c(38828),e=c(42671),f=c.n(e);let g={title:"Page Not Found",description:"The page you are looking for could not be found.",robots:{index:!1,follow:!0}};function h(){return(0,d.jsx)("main",{className:"min-h-[60vh] flex items-center justify-center px-4 py-16 md:py-24",children:(0,d.jsxs)("div",{className:"text-center max-w-lg mx-auto",children:[(0,d.jsx)("p",{className:"text-[var(--color-primary-600)] font-semibold text-lg mb-2",children:"404"}),(0,d.jsx)("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-primary text-[var(--color-secondary-800)] mb-4",children:"PAGE NOT FOUND"}),(0,d.jsx)("p",{className:"text-[var(--color-secondary-600)] font-secondary text-base md:text-lg mb-8",children:"Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or never existed."}),(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[(0,d.jsx)(f(),{href:"/",className:"inline-flex items-center justify-center px-6 py-3 bg-[var(--color-primary-600)] text-white font-secondary font-medium hover:bg-[var(--color-primary-700)] transition-colors",children:"Back to Home"}),(0,d.jsx)(f(),{href:"/products/all",className:"inline-flex items-center justify-center px-6 py-3 border border-[var(--color-secondary-300)] text-[var(--color-secondary-800)] font-secondary font-medium hover:bg-[var(--color-secondary-100)] transition-colors",children:"Browse Products"})]}),(0,d.jsxs)("div",{className:"mt-12 pt-8 border-t border-[var(--color-secondary-200)]",children:[(0,d.jsx)("p",{className:"text-[var(--color-secondary-500)] font-secondary text-sm mb-4",children:"Looking for something specific?"}),(0,d.jsxs)("div",{className:"flex flex-wrap gap-3 justify-center text-sm",children:[(0,d.jsx)(f(),{href:"/category",className:"text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] hover:underline",children:"Categories"}),(0,d.jsx)("span",{className:"text-[var(--color-secondary-300)]",children:"|"}),(0,d.jsx)(f(),{href:"/brands",className:"text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] hover:underline",children:"Brands"}),(0,d.jsx)("span",{className:"text-[var(--color-secondary-300)]",children:"|"}),(0,d.jsx)(f(),{href:"/contact-us",className:"text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] hover:underline",children:"Contact Us"})]})]})]})})}},87249:(a,b,c)=>{"use strict";c.d(b,{A:()=>h});var d=c(13486),e=c(2500),f=c(9258);c(60159);var g=c(10716);let h=({text:a,textParagraph:b,className:c,buttonLabel:h,buttonVariant:i,icon:j,onClick:k,iconContainer:l})=>(0,d.jsxs)("div",{className:(0,e.cn)("flex items-center justify-center h-[20vh] flex-col gap-6 text-gray-600",c),children:[(0,d.jsxs)("div",{className:"space-y-4 flex flex-col items-center",children:[(0,d.jsx)("div",{className:(0,e.cn)("p-7 rounded-full border border-[var(--color-secondary-300)] bg-[var(--color-secondary-300)] w-fit",l),children:(0,d.jsx)("span",{className:"size-24",children:j||f.q})}),(0,d.jsxs)("div",{className:"space-y-2 text-[var(--color-secondary-75)] font-secondary text-center",children:[(0,d.jsx)("p",{className:"font-semibold text-xl ",children:a}),b&&(0,d.jsx)("p",{className:"font-normal text-sm",children:b})]})]}),h&&(0,d.jsx)(g.A,{onClick:k,content:h,variant:i||"primary"})]})},90444:(a,b,c)=>{Promise.resolve().then(c.bind(c,60473))},90753:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/RecaptchaProvider.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/providers/RecaptchaProvider.tsx","default")},92256:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(66352).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/RouteAnnouncer.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/arslankhan/Sites/projects/saleor-store-front/wsm-base-template/apps/example-tenant/src/app/components/RouteAnnouncer.tsx","default")},95774:(a,b,c)=>{"use strict";c.d(b,{z4:()=>s});let d=process.env.NEXT_PUBLIC_SEARCH_URL||"",e=process.env.NEXT_PUBLIC_PARTSLOGIC_URL||"",f="fuelab"==process.env.NEXT_PUBLIC_TENANT_NAME?"aet":process.env.NEXT_PUBLIC_TENANT_NAME;async function g(a){let b;if(!d)throw Error("Missing NEXT_PUBLIC_SEARCH_URL");let c=a.startsWith("/")?a:`/${a}`,e=`${d}${c}`;try{b=await fetch(e,{cache:"no-store",headers:{"Content-Type":"application/json"}})}catch(a){throw Error(`GET ${e} network error: ${a instanceof Error?a.message:String(a)}`)}if(!b.ok){let a=b.statusText;try{let c=await b.json();a=c?.message||a}catch{}throw Error(`GET ${e} failed: ${b.status} ${a}`)}return b.json()}async function h(a){let b;if(!e)throw Error("Missing NEXT_PUBLIC_PARTSLOGIC_URL");let c=a.startsWith("/")?a:`/${a}`,d=`${e}${c}`;try{b=await fetch(d,{cache:"no-store",headers:{"Content-Type":"application/json",Accept:"application/json"}})}catch(a){throw Error(`GET ${d} network error: ${a instanceof Error?a.message:String(a)}`)}if(!b.ok){let a=b.statusText;try{let c=await b.json();a=c?.message||a}catch{}throw Error(`GET ${d} failed: ${b.status} ${a}`)}return b.json()}function i(a){let b=new URLSearchParams;return Object.entries(a).forEach(([a,c])=>{void 0!==c&&""!==c&&b.set(a,String(c))}),b.toString()}async function j(a,b,c="graphql"){let d,e,f=function(a){if(!a)throw Error("NEXT_PUBLIC_API_URL is not configured");let b=a.trim();return/\/graphql\/?$/.test(b.toLowerCase())?b:b.replace(/\/+$/,"")+"/graphql"}(process.env.NEXT_PUBLIC_API_URL);try{d=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a,variables:b})})}catch(d){let a=d instanceof Error?d.message:String(d);throw console.error(`[${c}] network error`,a,{url:f,variables:b}),Error(`${c}: network error: ${a}`)}let g=await d.text();if(!d.ok)throw console.error(`[${c}] HTTP ${d.status}`,g.slice(0,500)),Error(`${c}: HTTP ${d.status}`);try{e=JSON.parse(g)}catch{throw console.error(`[${c}] invalid JSON`,g.slice(0,500)),Error(`${c}: invalid JSON`)}let h=e;if(h.errors?.length)throw console.error(`[${c}] GraphQL errors`,h.errors),Error(`${c}: ${h.errors[0]?.message||"GraphQL error"}`);if(!h.data)throw console.error(`[${c}] missing data`,e),Error(`${c}: invalid response (no data)`);return h.data}let k=`
  query Order($id: ID!) {
    order(id: $id) {
      id
      number
      created
      status
      paymentStatus
      total {
        gross { amount currency }
      }
      lines {
        id
        productName
        variantName
        quantity
        thumbnail { url }
        totalPrice {
          gross { amount currency }
        }
      }
    }
  }
`,l=`
  query ProductsByCategoriesAndProductTypes(
    $categoryIds: [ID!], 
    $productTypeIds: [ID!], 
    $channel: String!,
    $first: Int!,
    $after: String,
    $sortField: ProductOrderField!,
    $sortDirection: OrderDirection!
  ) {
    products(
      filter: {
        categories: $categoryIds
        productTypes: $productTypeIds
      }, 
      channel: $channel,
      first: $first,
      after: $after,
      sortBy: {
        field: $sortField,
        direction: $sortDirection
      }
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          name
          slug
          description
          category {
            id
            name
          }
          productType {
            id
            name
          }
          media {
            id
            url
            alt
          }
          pricing {
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
          }
        }
      }
    }
  }
`,m=`
  query GetAllCategories(
    $channel: String!
    $first: Int!
    $after: String
    $sortBy: CategorySortingInput
  ) {
    categories(
      first: $first
      after: $after
      sortBy: $sortBy
    ) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          slug
          level
          parent {
            id
            name
          }
          backgroundImage {
            url
            alt
          }
          products(channel: $channel) {
            totalCount
          }
        }
      }
    }
  }
`,n=`
  query GetCategoryBySlug($slug: String!, $channel: String!) {
    categories(first: 1, filter: { search: $slug }) {
      edges {
        node {
          id
          name
          slug
          level
          parent {
            id
            name
          }
          backgroundImage {
            url
            alt
          }
          products(channel: $channel) {
            totalCount
          }
        }
      }
    }
  }
`,o=`
  query GetAllProductTypesWithCounts($first: Int!) {
    productTypes(first: $first) {
      totalCount
      edges {
        node {
          id
          name
          slug
          hasVariants
          isShippingRequired
          kind
          metadata {
            key
            value
          }
          products(channel: "default-channel") {
            totalCount
          }
        }
      }
    }
  }
`,p=`
  query GetProductsByCategory(
    $categoryIds: [ID!]
    $channel: String!
    $first: Int!
    $after: String
    $search: String
  ) {
    products(
      filter: { 
        categories: $categoryIds
      }
      search: $search
      channel: $channel
      first: $first
      after: $after
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          id
          name
          slug
          description
          category {
            id
            name
          }
          productType {
            id
            name
          }
          media {
            id
            url
            alt
          }
          pricing {
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
          }
        }
      }
    }
  }
`,q=`
  query GetProductsByProductType(
    $productTypeIds: [ID!]
    $channel: String!
    $first: Int!
    $after: String
    $search: String
  ) {
    products(
      filter: { 
        productTypes: $productTypeIds
      }
      search: $search
      channel: $channel
      first: $first
      after: $after
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        cursor
        node {
          id
          name
          slug
          description
          category {
            id
            name
          }
          productType {
            id
            name
          }
          media {
            id
            url
            alt
          }
          pricing {
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
          }
        }
      }
    }
  }
`,r=`
  query GlobalSearchStorefront(
    $query: String!
    $channel: String!
    $includeProducts: Boolean!
    $includeCategories: Boolean!
    $includeCollections: Boolean!
    $includeProductTypes: Boolean!
  ) {
    products(first: 10, channel: $channel, filter: { search: $query }) @include(if: $includeProducts) {
      edges {
        node {
          id
          name
          slug
          updatedAt
          category {
            id
            name
          }
          thumbnail(size: 64) {
            url
            alt
          }
        }
      }
    }

    categories(first: 10, filter: { search: $query }) @include(if: $includeCategories) {
      edges {
        node {
          id
          name
          slug
          level
          parent {
            id
            name
          }
          backgroundImage(size: 64) {
            url
            alt
          }
          products(first: 1, channel: $channel) {
            totalCount
          }
        }
      }
    }

    collections(first: 10, channel: $channel, filter: { search: $query }) @include(if: $includeCollections) {
      edges {
        node {
          id
          name
          slug
          backgroundImage(size: 64) {
            url
            alt
          }
          products(first: 1) {
            totalCount
          }
        }
      }
    }

    productTypes(first: 10, filter: { search: $query }) @include(if: $includeProductTypes) {
      edges {
        node {
          id
          name
          slug
          hasVariants
        }
      }
    }
  }
`,s={getOrderById:async function({orderId:a}){let b=await j(k,{id:a},"order");if(!b.order)throw Error("Order not found");return b.order},getProductsByCategoriesAndProductTypes:async function({categoryIds:a,productTypeIds:b,channel:c,first:d,after:e,sortField:f="DATE",sortDirection:g="ASC"}){let h={categoryIds:a?.length?a:null,productTypeIds:b?.length?b:null,channel:c,first:d,sortField:f,sortDirection:g};return e&&(h.after=e),await j(l,h,"products")},getGraphQLCategories:async function({channel:a,first:b=100,after:c}){let d={channel:a,first:b,sortBy:{field:"PRODUCT_COUNT",direction:"DESC"}};return c&&(d.after=c),await j(m,d,"categories")},getCategoryBySlug:async function({slug:a,channel:b}){let c=await j(n,{slug:a,channel:b},"category"),d=c.categories.edges[0]?.node;if(d&&d.slug===a)return d;let e=!0,f=null;for(;e;){let c={channel:b,first:100};f&&(c.after=f);let d=await j(m,c,"categories"),g=d.categories.edges.find(b=>b.node.slug===a);if(g)return g.node;e=d.categories.pageInfo.hasNextPage,f=d.categories.pageInfo.endCursor}return null},getGraphQLProductTypes:async function({first:a=100}){return await j(o,{first:a},"productTypes")},getProductsByCategory:async function({categoryIds:a,channel:b,first:c=100,after:d,search:e}){let f={categoryIds:a,channel:b,first:c};return d&&(f.after=d),e&&e.trim()&&(f.search=e),await j(p,f,"products")},getProductsByProductType:async function({productTypeIds:a,channel:b,first:c=100,after:d,search:e}){let f={productTypeIds:a,channel:b,first:c};return d&&(f.after=d),e&&e.trim()&&(f.search=e),await j(q,f,"products")},globalSearchStorefront:async function({query:a,channel:b="default-channel",includeProducts:c=!0,includeCategories:d=!0,includeCollections:e=!1,includeProductTypes:f=!0}){return await j(r,{query:a,channel:b,includeProducts:c,includeCategories:d,includeCollections:e,includeProductTypes:f},"globalSearch")},async getCategories(){let a=i({tenant:f});return g(`/search/api/categories?${a}`)},async getBrands(){let a=i({tenant:f});return g(`/search/api/brands?${a}`)},async getYMMCombinations(){let a=i({tenant:f});return g(`/search/api/ymm/combinations?${a}`)},async getProductById(a){let b=i({tenant:f});return g(`/search/api/products/${a}?${b}`)},async searchProducts(a={}){let b=a=>Array.isArray(a)?a.join(","):a,c=i({q:a.q??"*",tenant:f,category:b(a.category),brand:b(a.brand),years:b(a.years),makes:b(a.makes),models:b(a.models),per_page:a.per_page??10,page:a.page??1,sort:a.sort,in_stock:a.in_stock,min_price:a.min_price,max_price:a.max_price});return g(`/search/api/search/multi-tenant?${c}`)},pingYMM:async()=>h("/ping"),getYears:async()=>h("/api/search/fitments/years"),getRootTypes:async()=>h("/api/fitment-search/root-types"),getFitmentValuesId:async a=>h(`/api/products/${a}/fitment-groups`),getFitmentValuesApi:async a=>h(`/api/fitment-search/values/${a}`),getFitmentChildAPI:async a=>h(`/api/fitment-search/child-types/${a}`),getMakes:async a=>h(`/api/search/fitments/makes?year_id=${a}`),getModels:async(a,b)=>h(`/api/search/fitments/models?year_id=${a}&make_id=${b}`),async searchProductsPL(a){let b=i({q:a.q,fitment_pairs:a.fitment_pairs,page:a.page??1,per_page:a.per_page??20});return h(`/api/search/products?${b}`)},categoryProductPL:async()=>h("/api/categories?page=1&per_page=100"),brandsProductPL:async()=>h("/api/brands?page=1&per_page=100"),async getProductsBySlug({slug:a,page:b=1,per_page:c=20,search:d,filterType:e="category_slug"}){let f=i({q:d||void 0,[e]:a,page:b,per_page:c});return h(`/api/search/products?${f}`)}}},96583:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>g});var d=c(13486);c(60159);var e=c(49989),f=c.n(e);function g({error:a,reset:b}){return(0,d.jsx)("div",{className:"min-h-[60vh] flex flex-col items-center justify-center px-4 py-16",children:(0,d.jsxs)("div",{className:"text-center max-w-lg",children:[(0,d.jsx)("h1",{className:"text-6xl font-bold text-[var(--color-primary)] mb-4",children:"Oops!"}),(0,d.jsx)("h2",{className:"text-2xl font-semibold text-[var(--color-secondary-800)] mb-4",children:"Something went wrong"}),(0,d.jsx)("p",{className:"text-[var(--color-secondary-600)] mb-8",children:"We encountered an unexpected error. Please try again or return to the home page."}),(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[(0,d.jsx)("button",{onClick:b,className:"px-6 py-3 bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-600)] transition-colors duration-200",children:"Try Again"}),(0,d.jsx)(f(),{href:"/",className:"px-6 py-3 border border-[var(--color-secondary-300)] text-[var(--color-secondary-700)] font-medium hover:bg-[var(--color-secondary-100)] transition-colors duration-200",children:"Go to Home"})]}),!1]})})}},98470:(a,b,c)=>{"use strict";c.d(b,{default:()=>g});var d=c(13486),e=c(2984),f=c(60159);function g(){(0,e.usePathname)();let[a,b]=(0,f.useState)("");return(0,d.jsx)("div",{role:"status","aria-live":"assertive","aria-atomic":"true",className:"sr-only",children:a})}}};