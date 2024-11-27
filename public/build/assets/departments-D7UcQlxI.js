import{P as w}from"./PatientLayout-DvAJNbmh.js";import{r as y,aL as k,K as d,$ as s,u as h,L as e,Z as m,as as p,S as o,M as _,J as i,bP as C,R as j,Y as u,bQ as L,X as n,bS as M}from"./vue-x-iQoTBr.js";import{_ as P,a as v}from"./DropdownLink-DGhkVnCP.js";import{_ as l}from"./NavLink-QCNVgPjG.js";import{F as S}from"./vendor-DaxBAlbS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./axios-B573XCF3.js";const $={class:"bg-white border-red-200 dark:bg-red-900 fixed top-0 w-full z-50"},A={class:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"},B=["src"],D={class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},F={class:"flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"},N={class:"inline-flex rounded-md"},O={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white-500 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 hover:text-white-700 focus:outline-none transition ease-in-out duration-150"},V={class:"flex flex-col font-medium p-4 md:p-0 mt-4 border border-red-100 rounded-lg bg-red-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-red-800 md:dark:bg-red-900 dark:border-red-700"},z={id:"departments",class:"bg-gray-50 dark:bg-gray-100 py-28"},T={class:"max-w-screen-xl mx-auto px-4"},H={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"},Z=["onClick"],E=["src"],J={class:"text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center"},K={class:"max-w-screen-xl mx-auto px-16"},Q={class:"flex justify-between items-center mt-4"},R={class:"text-sm"},X={class:"text-sm"},Y={href:"#",class:"hover:underline"},q={class:"flex justify-between items-center mt-4"},G={class:"text-sm"},oe={__name:"departments",props:{headers:Array,footers:Array,departments:Array},setup(c){const x=r=>{S.get(`/departments/${r}`)},f=y(!1),b=()=>{f.value=!f.value};return(r,t)=>{const g=k("font-awesome-icon");return i(),d(m,null,[s(h(C),{title:"Patient Dashboard"}),e("header",null,[e("nav",$,[e("div",A,[(i(!0),d(m,null,p(c.headers,a=>(i(),j(h(L),{key:a.id,href:r.route("dashboard"),class:"flex items-center space-x-3 rtl:space-x-reverse"},{default:o(()=>[e("img",{src:"/headerlogo/"+a.logo,alt:"Logo",class:"h-12 w-12 rounded-full"},null,8,B),e("span",D,u(a.title),1)]),_:2},1032,["href"]))),128)),e("div",F,[e("button",{onClick:b,class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 dark:text-red-400 dark:hover:bg-red-700 dark:focus:ring-red-600","aria-controls":"navbar-cta","aria-expanded":"false"},t[0]||(t[0]=[e("span",{class:"sr-only"},"Open main menu",-1),e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})],-1)])),s(P,{align:"right",width:"48"},{trigger:o(()=>[e("span",N,[e("button",O,[n(u(r.$page.props.auth.user.name)+" ",1),t[1]||(t[1]=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:o(()=>[s(v,{href:r.route("patient.profile")},{default:o(()=>[s(g,{icon:["fas","user"],class:"me-2"}),t[2]||(t[2]=n("Profile"))]),_:1},8,["href"]),s(v,{href:r.route("logout"),method:"post",as:"button"},{default:o(()=>[s(g,{icon:["fas","right-from-bracket"],class:"me-2"}),t[3]||(t[3]=n("Log Out"))]),_:1},8,["href"])]),_:1})]),e("div",{class:_([{hidden:!f.value,flex:f.value},"items-center justify-between w-full md:flex md:w-auto md:order-1"]),id:"navbar-cta"},[e("ul",V,[e("li",null,[s(l,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:o(()=>t[4]||(t[4]=[n(" Home ")])),_:1},8,["href","active"])]),e("li",null,[s(l,{href:r.route("patient.about"),active:r.route().current("patient.about")},{default:o(()=>t[5]||(t[5]=[n(" About ")])),_:1},8,["href","active"])]),e("li",null,[s(l,{href:r.route("patient.services"),active:r.route().current("patient.services")},{default:o(()=>t[6]||(t[6]=[n(" Services ")])),_:1},8,["href","active"])]),e("li",null,[s(l,{href:r.route("patient.departments"),active:r.route().current("patient.departments")},{default:o(()=>t[7]||(t[7]=[n(" Departments ")])),_:1},8,["href","active"])]),e("li",null,[s(l,{href:r.route("patient.doctors"),active:r.route().current("patient.doctors")},{default:o(()=>t[8]||(t[8]=[n(" Doctors ")])),_:1},8,["href","active"])]),e("li",null,[s(l,{href:r.route("patient.contact"),active:r.route().current("patient.contact")},{default:o(()=>t[9]||(t[9]=[n(" Contact ")])),_:1},8,["href","active"])]),e("li",null,[s(l,{href:r.route("patient.myappointment"),active:r.route().current("patient.myappointment")},{default:o(()=>t[10]||(t[10]=[n(" My Appointment ")])),_:1},8,["href","active"])])])],2)])])]),s(w,null,{default:o(()=>[e("section",z,[e("div",T,[t[11]||(t[11]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"}," Departments ",-1)),t[12]||(t[12]=e("p",{class:"text-lg text-gray-600 dark:text-gray-400 mb-8 text-center"}," Our departments are staffed by experienced professionals dedicated to providing the best care in their fields. ",-1)),e("div",H,[(i(!0),d(m,null,p(c.departments,a=>(i(),d("div",{key:a.id,onClick:I=>x(a.id),class:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"},[e("img",{src:"/departmentimage/"+a.imagedep,alt:"Logo",class:"w-full h-20 object-contain rounded mb-4"},null,8,E),e("h3",J,u(a.titledep),1)],8,Z))),128))])])])]),_:1}),(i(!0),d(m,null,p(c.footers,a=>(i(),d("footer",{key:a.id,class:"bg-red-700 text-white py-6"},[e("div",K,[t[17]||(t[17]=M('<div class="flex justify-between items-center"><p class="text-sm"><i class="fas fa-copyright"></i> 2024 Surigao Health. All rights reserved. </p><div class="space-x-4"><a href="#" class="text-white hover:underline"><i class="fas fa-shield-alt me-1"></i> Privacy Policy </a><a href="#" class="text-white hover:underline"><i class="fas fa-file-alt me-1"></i> Terms of Service </a></div></div>',1)),e("div",Q,[e("p",R,[t[13]||(t[13]=e("i",{class:"fas fa-phone-alt me-1"},null,-1)),n(" Contact: "+u(a.contact),1)]),e("p",X,[t[14]||(t[14]=e("i",{class:"fab fa-facebook me-1"},null,-1)),t[15]||(t[15]=n(" Facebook: ")),e("a",Y,u(a.fbname),1)])]),e("div",q,[e("p",G,[t[16]||(t[16]=e("i",{class:"fas fa-map-marker-alt me-1"},null,-1)),n(" "+u(a.place),1)])])])]))),128))],64)}}};export{oe as default};