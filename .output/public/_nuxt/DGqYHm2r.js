import{d as m,r as h,G as v,c as _,t as r,v as c,x as e,y as o,B as t,ae as p,C as b,D as g,_ as f}from"./rA0nG8O0.js";import{a as y}from"./DRCOscTl.js";const w=""+new URL("globe.BPU9I-IN.gif",import.meta.url).href,a=i=>(b("data-v-d99189da"),i=i(),g(),i),x={key:0},k={class:"mt-4"},I={class:"text-4xl font-bold ml-4"},T={class:"ml-4 border-bottom-1 border-200"},N={class:"grid nested-grid"},S={class:"col-6"},B={class:"h-full ml-4 mt-4"},O=a(()=>e("br",null,null,-1)),$=a(()=>e("h3",null,"Geography and Borders",-1)),z=a(()=>e("br",null,null,-1)),C=a(()=>e("h3",null,"Language and Culture",-1)),D=a(()=>e("br",null,null,-1)),E=a(()=>e("h3",null,"Economy and Currency",-1)),G=a(()=>e("br",null,null,-1)),U=a(()=>e("h3",null,"Government and International Relations",-1)),A=a(()=>e("br",null,null,-1)),F=a(()=>e("h3",null,"National Symbols",-1)),M=a(()=>e("br",null,null,-1)),R=a(()=>e("h3",null,"Transportation and Time Zone",-1)),L=a(()=>e("br",null,null,-1)),P=a(()=>e("br",null,null,-1)),V=a(()=>e("h3",null,"Exploration and Tourism",-1)),j=a(()=>e("br",null,null,-1)),q=a(()=>e("br",null,null,-1)),W={href:"https://goo.gl/maps/DFsme2xEeugUAsCx5",target:"_blank"},Z={href:"https://www.openstreetmap.org/relation/287083",target:"_blank"},H={class:"col-6"},J={class:"grid mt-3"},K={class:"col-6"},Q={class:""},X={class:""},Y=["src","alt"],ee={class:"col-6"},ne={class:""},te={class:"text-center h-full"},oe=["src","alt"],ae={key:1,class:"text-xs"},le={class:"col-12"},se={class:""},ie=["src"],re={key:1,class:"centered-content",style:{width:"60vw",height:"30vh"}},ce=a(()=>e("div",{class:"text-center",style:{"margin-top":"35%"}},[t(" Please select a country from the list. "),e("br"),e("img",{src:w,alt:"",width:"50px"})],-1)),ue=[ce],de=m({__name:"Overview",props:{countryName:{}},setup(i){const u=i,n=h(null);v(()=>u.countryName,async s=>{if(s)try{const l=await y(s);n.value=l[0]}catch(l){console.error("Error fetching country details:",l)}});const d=_(()=>{const s=n.value.latlng[0],l=n.value.latlng[1];return`https://www.openstreetmap.org/export/embed.html?bbox=${`${l-2},${s-2},${l+2},${s+2}`}&layer=mapnik&marker=${s},${l}`});return(s,l)=>n.value?(r(),c("div",x,[e("div",k,[e("div",I,o(n.value.name.common),1),e("div",T,o(n.value.name.official),1)]),e("div",N,[e("div",S,[e("div",B,[e("b",null,o(n.value.name.common),1),t(", officially known as "),e("b",null,o(n.value.name.official),1),t(", is a country situated in "),e("b",null,o(n.value.subregion),1),t(". Its common name, "),e("b",null,o(n.value.name.common),1),t(", reflects its rich cultural and geographical heritage. Bordered by "),e("b",null,o(n.value.borders),1),t(", "),e("b",null,o(n.value.name.common),1),t(" boasts a diverse landscape that spans across "),e("b",null,o(n.value.region),1),t(". "),O,$,t(" Covering an area of "),e("b",null,o(n.value.area),1),t(" square kilometers, "),e("b",null,o(n.value.name.common),1),t(" is a vibrant nation with a population of approximately "),e("b",null,o(n.value.population),1),t(" people. The country is characterized by its captivating natural beauty, attracting visitors from around the globe. Its capital city, "),e("b",null,o(n.value.capital),1),t(", serves as the political and economic hub, situated at a latitude and longitude of "),e("b",null,o(n.value.capitalInfo.latlng[0]),1),t(" and "),e("b",null,o(n.value.capitalInfo.latlng[1]),1),t(", respectively. "),z,C,e("b",null,o(n.value.languages.eng),1),t(" is the official language of "),e("b",null,o(n.value.name.common),1),t(", reflecting its colonial history. The "),e("b",null,o(n.value.demonyms.eng.m),1),t(" people, who are renowned for their warmth and hospitality. The nation celebrates a rich tapestry of cultures, with influences from "),e("b",null,o(n.value.region),1),t(" communities. "),D,E,t(" The "),e("b",null,[e("b",null,o(n.value.currencies[Object.keys(n.value.currencies)[0]].name),1)]),t(" serves as the official currency of "),e("b",null,o(n.value.name.common),1),t(". The nation's economy is driven by industries such as "),e("b",null,o(n.value.region),1),t(", with significant natural resource reserves contributing to its economic growth. "),G,U,e("b",null,o(n.value.name.common),1),t(" is an independent republic, recognized as a member of the United Nations and other international organizations. Governed as a "),e("b",null,o(n.value.status),1),t(" republic, "),e("b",null,o(n.value.name.common),1),t(" has a proud tradition of democratic governance and participation in global affairs. "),A,F,t(" The flag of "),e("b",null,o(n.value.name.common),1),t(" is a striking representation of its identity. The coat of arms further embodies the nation's spirit, depicting symbols of its heritage and aspirations. "),M,R,e("b",null,o(n.value.name.common),1),t(" follows a "),e("b",null,o(n.value.car.side),1),t('-hand driving system, with vehicle registration signs displaying "'),e("b",null,o(n.value.car.signs[0]),1),t('." The nation operates on the '),e("b",null,o(n.value.timezones[0]),1),t(" time zone, ensuring synchronization with international standards. Visitors can explore "),e("b",null,o(n.value.name.common),1),t("'s diverse landscapes and vibrant culture through various transportation networks. "),L,t(" International Recognition and Sports "),e("b",null,o(n.value.name.common),1),t(" participates in international events such as "),e("b",null,o(n.value.fifa),1),t(", representing the nation's passion for sports and competition. Its rich sporting heritage contributes to its global recognition and fosters connections with other nations. "),P,V,e("b",null,o(n.value.name.common),1),t("'s enchanting landscapes, diverse wildlife, and vibrant culture make it a destination worth exploring. Whether trekking through its pristine "),e("b",null,o(n.value.region),1),t(" or immersing in its rich history, visitors to "),e("b",null,o(n.value.name.common),1),t(" are sure to be captivated by its charm and allure. "),j,t(" For more information on "),e("b",null,o(n.value.name.common),1),t(", including maps and historical context, please visit the following links: "),q,e("ul",null,[e("li",null,[t(" Google Maps: "),e("a",W," Explore "+o(n.value.name.common),1)]),e("li",null,[t(" OpenStreetMaps: "),e("a",Z," Discover "+o(n.value.name.common),1)])])])]),e("div",H,[e("div",J,[e("div",K,[e("div",Q,[e("div",X,[e("img",{class:"w-15rem border-1 border-200",src:n.value.flags.png,alt:n.value.name.common},null,8,Y)])])]),e("div",ee,[e("div",ne,[e("div",te,[n.value.coatOfArms&&n.value.coatOfArms.png?(r(),c("img",{key:0,class:"h-5rem",src:n.value.coatOfArms.png,alt:n.value.name.common},null,8,oe)):(r(),c("span",ae,"No coat of arms"))])])]),e("div",le,[e("div",se,[e("iframe",{width:"600",height:"600",frameborder:"0",style:{border:"0"},src:p(d),allowfullscreen:""},null,8,ie)])])])])])])):(r(),c("div",re,ue))}}),_e=f(de,[["__scopeId","data-v-d99189da"]]);export{_e as default};