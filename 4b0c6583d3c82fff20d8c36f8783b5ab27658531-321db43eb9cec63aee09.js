(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[340],{3378:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(15).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},2283:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(15).Z)("external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]])},4950:function(e,n,t){!function(e,n){"use strict";function t(e){return e*Math.PI/180}function o(e,n,t){return e>t?t:e<n?n:e}function i(e,n){return n/100*e}function l(e,n){return e+n/2}function a(e,n){var o=t(e);return{dx:n*Math.cos(o),dy:n*Math.sin(o)}}function d(e){return"number"==typeof e}function r(e,n){return"function"==typeof e?e(n):e}function s(e,n){var t=Object.assign({},n,e);for(var o in n)void 0===e[o]&&(t[o]=n[o]);return t}function g(e){for(var n=0,t=0;t<e.length;t++)n+=e[t].value;return n}function u(e){for(var n=e.data,t=e.lengthAngle,l=e.totalValue,a=e.paddingAngle,d=e.startAngle,r=l||g(n),s=o(t,-360,360),u=360===Math.abs(s)?n.length:n.length-1,c=Math.abs(a)*Math.sign(t),A=s-c*u,m=0,C=[],B=0;B<n.length;B++){var p=n[B],v=0===r?0:p.value/r*100,I=i(A,v),h=m+d;m=m+I+c,C.push(Object.assign({percentage:v,startAngle:h,degrees:I},p))}return C}function c(e,n){if(null==e)return{};var t,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}function A(e){var t=e.renderLabel,o=e.labelProps,i=t(o);if("string"==typeof i||"number"==typeof i){o.dataEntry,o.dataIndex;var l=c(o,["dataEntry","dataIndex"]);return n.createElement("text",Object.assign({dominantBaseline:"central"},l),i)}return n.isValidElement(i)?i:null}function m(e){var n=1e14;return Math.round((e+Number.EPSILON)*n)/n}function C(e){var n=e.labelPosition,t=e.lineWidth,o=m(e.labelHorizontalShift);return 0===o?"middle":n>100?o>0?"start":"end":n<100-t?o>0?"end":"start":"middle"}function B(e,n){return e.map((function(e,t){var o,d=null!=(o=r(n.segmentsShift,t))?o:0,s=i(n.radius,n.labelPosition)+d,g=a(l(e.startAngle,e.degrees),s),u=g.dx,c=g.dy;return{x:n.center[0],y:n.center[1],dx:u,dy:c,textAnchor:C({labelPosition:n.labelPosition,lineWidth:n.lineWidth,labelHorizontalShift:u}),dataEntry:e,dataIndex:t,style:r(n.labelStyle,t)}}))}function p(e,t){var o=t.label;if(o)return B(e,t).map((function(e,t){return n.createElement(A,{key:"label-"+(e.dataEntry.key||t),renderLabel:o,labelProps:e})}))}var v=function(e,n,t,o,i){var l=i-o;if(0===l)return[];var a=t*Math.cos(o)+e,d=t*Math.sin(o)+n,r=t*Math.cos(i)+e,s=t*Math.sin(i)+n;return[["M",a,d],["A",t,t,0,Math.abs(l)<=Math.PI?"0":"1",l<0?"0":"1",r,s]]};function I(e,n,i,l,a){var d=o(l,-359.999,359.999);return v(e,n,a,t(i),t(i+d)).map((function(e){return e.join(" ")})).join(" ")}function h(e){var o,r,s=e.cx,g=e.cy,u=e.lengthAngle,A=e.lineWidth,m=e.radius,C=e.shift,B=void 0===C?0:C,p=e.reveal,v=e.rounded,h=e.startAngle,F=e.title,W=c(e,["cx","cy","lengthAngle","lineWidth","radius","shift","reveal","rounded","startAngle","title"]),x=m-A/2,Y=a(l(h,u),B),b=I(s+Y.dx,g+Y.dy,h,u,x);if(d(p)){var j=t(x)*u;r=(o=Math.abs(j))-i(o,p)}return n.createElement("path",Object.assign({d:b,fill:"none",strokeWidth:A,strokeDasharray:o,strokeDashoffset:r,strokeLinecap:v?"round":void 0},W),F&&n.createElement("title",null,F))}function F(e,n,t){var o="stroke-dashoffset "+e+"ms "+n;return t&&t.transition&&(o=o+","+t.transition),{transition:o}}function W(e){return e.animate&&!d(e.reveal)?100:e.reveal}function x(e,n){return e&&function(t){e(t,n)}}function Y(e,t,o){var l=null!=o?o:W(t),a=t.radius,d=t.center,s=d[0],g=d[1],u=i(a,t.lineWidth),c=e.map((function(e,o){var i=r(t.segmentsStyle,o);return n.createElement(h,{cx:s,cy:g,key:e.key||o,lengthAngle:e.degrees,lineWidth:u,radius:a,rounded:t.rounded,reveal:l,shift:r(t.segmentsShift,o),startAngle:e.startAngle,title:e.title,style:Object.assign({},i,t.animate&&F(t.animationDuration,t.animationEasing,i)),stroke:e.color,tabIndex:t.segmentsTabIndex,onBlur:x(t.onBlur,o),onClick:x(t.onClick,o),onFocus:x(t.onFocus,o),onKeyDown:x(t.onKeyDown,o),onMouseOver:x(t.onMouseOver,o),onMouseOut:x(t.onMouseOut,o)})}));return t.background&&c.unshift(n.createElement(h,{cx:s,cy:g,key:"bg",lengthAngle:t.lengthAngle,lineWidth:u,radius:a,rounded:t.rounded,startAngle:t.startAngle,stroke:t.background})),c}var b={animationDuration:500,animationEasing:"ease-out",center:[50,50],data:[],labelPosition:50,lengthAngle:360,lineWidth:100,paddingAngle:0,radius:50,startAngle:0,viewBoxSize:[100,100]};function j(e){var t=s(e,b),o=n.useState(t.animate?0:null),i=o[0],l=o[1];n.useEffect((function(){t.animate&&l(null)}),[]);var a=u(t);return n.createElement("svg",{viewBox:"0 0 "+t.viewBoxSize[0]+" "+t.viewBoxSize[1],width:"100%",height:"100%",className:t.className,style:t.style},Y(a,t,i),p(a,t),t.children)}e.PieChart=j,e.pieChartDefaultProps=b}(n,t(7294))},7150:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ne}});var o={};t.r(o),t.d(o,{addToCatalogusContainer:function(){return u},backButton:function(){return c},badgeLayout:function(){return A},buttonIcon:function(){return m},cardsContainer:function(){return C},componentName:function(){return B},components:function(){return p},container:function(){return v},dataCategory:function(){return I},dataLayer:function(){return h},dependenciesDisplaySwitchButtons:function(){return F},description:function(){return W},externalLink:function(){return x},headingContainer:function(){return Y},headingContent:function(){return b},icon:function(){return j},infoCard:function(){return f},integrationCategory:function(){return y},integrationLayer:function(){return w},interactionCategory:function(){return U},interactionLayer:function(){return G},interfaceCategory:function(){return E},interfaceLayer:function(){return S},layerAndCategoryContainer:function(){return D},link:function(){return L},logo:function(){return Q},logoContainer:function(){return N},noOrganizationCardAvailable:function(){return R},noRatingStyle:function(){return T},organizationCardContainer:function(){return k},organizations:function(){return V},overlay:function(){return O},popup:function(){return K},procesCategory:function(){return Z},processCategory:function(){return J},processLayer:function(){return P},processsLayer:function(){return M},ratingIndicatorContainer:function(){return z},serviceCategory:function(){return H},serviceLayer:function(){return q},servicesCategory:function(){return X},servicesLayer:function(){return _},tags:function(){return $},title:function(){return ee},unknownCategory:function(){return ne},unknownLayer:function(){return te}});var i=t(9833),l=t.n(i),a=t(8929),d=t.n(a),r=t(1700),s=t.n(r),g=t(7294),u="ComponentsDetailTemplate-module--addToCatalogusContainer--a740a",c="ComponentsDetailTemplate-module--backButton--16d32",A="ComponentsDetailTemplate-module--badgeLayout--82ffe",m="ComponentsDetailTemplate-module--buttonIcon--a0270",C="ComponentsDetailTemplate-module--cardsContainer--8ff3d",B="ComponentsDetailTemplate-module--componentName--6d69c",p="ComponentsDetailTemplate-module--components--f156e",v="ComponentsDetailTemplate-module--container--57e2b",I="ComponentsDetailTemplate-module--dataCategory--8034a",h="ComponentsDetailTemplate-module--dataLayer--56464",F="ComponentsDetailTemplate-module--dependenciesDisplaySwitchButtons--0c4c0",W="ComponentsDetailTemplate-module--description--2d0e6",x="ComponentsDetailTemplate-module--externalLink--90f5d",Y="ComponentsDetailTemplate-module--headingContainer--cac51",b="ComponentsDetailTemplate-module--headingContent--ef894",j="ComponentsDetailTemplate-module--icon--4805c",f="ComponentsDetailTemplate-module--infoCard--b1704",y="ComponentsDetailTemplate-module--integrationCategory--56f79",w="ComponentsDetailTemplate-module--integrationLayer--cf45f",U="ComponentsDetailTemplate-module--interactionCategory--40b6f",G="ComponentsDetailTemplate-module--interactionLayer--9319d",E="ComponentsDetailTemplate-module--interfaceCategory--ab368",S="ComponentsDetailTemplate-module--interfaceLayer--63f84",D="ComponentsDetailTemplate-module--layerAndCategoryContainer--fe0c6",L="ComponentsDetailTemplate-module--link--c9a9b",Q="ComponentsDetailTemplate-module--logo--35a04",N="ComponentsDetailTemplate-module--logoContainer--ac052",R="ComponentsDetailTemplate-module--noOrganizationCardAvailable--4a018",T="ComponentsDetailTemplate-module--noRatingStyle--ff849",k="ComponentsDetailTemplate-module--organizationCardContainer--71246",V="ComponentsDetailTemplate-module--organizations--1770f",O="ComponentsDetailTemplate-module--overlay--0eb8d",K="ComponentsDetailTemplate-module--popup--8270b",Z="ComponentsDetailTemplate-module--procesCategory--e94df",J="ComponentsDetailTemplate-module--processCategory--1d5f7",P="ComponentsDetailTemplate-module--processLayer--e03ca",M="ComponentsDetailTemplate-module--processsLayer--36e51",z="ComponentsDetailTemplate-module--ratingIndicatorContainer--88cfb",H="ComponentsDetailTemplate-module--serviceCategory--e3fb7",q="ComponentsDetailTemplate-module--serviceLayer--e23f5",X="ComponentsDetailTemplate-module--servicesCategory--db518",_="ComponentsDetailTemplate-module--servicesLayer--524f3",$="ComponentsDetailTemplate-module--tags--3d9e1",ee="ComponentsDetailTemplate-module--title--ff90e",ne="ComponentsDetailTemplate-module--unknownCategory--f96f2",te="ComponentsDetailTemplate-module--unknownLayer--d8a22",oe=t(1800),ie=t(9885),le=t(1082),ae=t(3378),de=t(2283),re=t(6505),se=(0,t(15).Z)("phone","IconPhone",[["path",{d:"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",key:"svg-0"}]]),ge=t(5019),ue=t(5),ce=t(686),Ae=t(7177);var me=t(5587),Ce="--web-app-rating-active-color",Be=t(4950),pe=t(8272),ve=t(5505),Ie=t(5893);const he=e=>{let{maxRating:n,rating:t,layoutClassName:o}=e;return(0,Ie.jsx)("div",{className:(0,ve.Z)("RatingIndicatorTemplate-module--container--743d0",[o&&o]),children:(0,Ie.jsx)(Be.PieChart,{className:"RatingIndicatorTemplate-module--ratingPieChart--f6c09",data:[{value:1,key:1,color:(0,pe.W)(Ce),title:`${t}/${n}`}],reveal:t/n*100,lineWidth:20,background:(0,pe.W)("--web-app-rating-disable-color"),startAngle:270,lengthAngle:360,rounded:!0,animate:!0,animationDuration:1750,label:e=>{let{dataEntry:n}=e;return n.title},labelStyle:{fontSize:(0,pe.W)("--web-app-font-size-xl"),fontFamily:(0,pe.W)("--web-app-primary-font-family"),fill:(0,pe.W)(Ce)},labelPosition:0})})};var Fe=t(7606),We=t(3168),xe=t(4344),Ye=t(3417),be=t(7920),je=t(549),fe=t(5983),ye=t(3760),we=t(192);const Ue=e=>{let{layoutClassName:n,icon:t,label:o,sizeKb:i}=e;const{t:l}=(0,ge.$)(),{screenSize:a}=g.useContext(we.h),d=ie.oI.controller,r=ie.oI.NotificationPopUp,{isVisible:s,show:u,hide:c}=d();return(0,Ie.jsxs)("div",{className:(0,ve.Z)([n&&n],"mobile"===a&&"DownloadTemplate-module--downloadName--12d05"),children:[(0,Ie.jsx)(ie.iG,{label:o,sizeKb:i,downloadLabel:"Download",icon:t,handleClick:()=>{u()}}),s&&(0,Ie.jsx)("div",{className:"DownloadTemplate-module--overlay--06233",children:(0,Ie.jsx)(r,{hide:c,isVisible:s,title:`${l("Warning")}!`,description:l("This file comes from a 3rd party and can potentially be harmfull for your PC. Are you sure you want to download this?"),primaryButton:{label:"Download",icon:(0,Ie.jsx)(Fe.G,{icon:We.q7m}),handleClick:()=>({})},secondaryButton:{label:l("Go back"),icon:(0,Ie.jsx)(Fe.G,{icon:We.acZ}),handleClick:()=>({})},layoutClassName:"DownloadTemplate-module--popup--3e99d"})})]})};var Ge=t(9832);const Ee=e=>{var n,t,o,i,l,a,d,r,s,g,u,c,A,m,C,B,p,v;let{getComponent:I}=e;return(0,Ie.jsxs)(Ie.Fragment,{children:[(null===(n=I.data.embedded)||void 0===n||null===(t=n.rating)||void 0===t?void 0:t.rating)&&(0,Ie.jsx)("span",{children:`${null===(o=I.data.embedded)||void 0===o||null===(i=o.rating)||void 0===i?void 0:i.rating}/${null===(l=I.data.embedded)||void 0===l||null===(a=l.rating)||void 0===a?void 0:a.maxRating}`}),!(null!==(d=I.data.embedded)&&void 0!==d&&null!==(r=d.rating)&&void 0!==r&&r.rating)&&(0,Ie.jsx)("span",{children:(0,Ge.t)("No rating available")}),(0,Ie.jsx)("div",{className:"RatingOverview-module--popupDescription--06788",children:(0,Ie.jsxs)(oe.QI,{children:[(null===(s=I.data.embedded)||void 0===s||null===(g=s.rating)||void 0===g?void 0:g.rating)>=1&&(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)("li",{children:"Behaalde punten"}),null===(u=I.data.embedded)||void 0===u||null===(c=u.rating)||void 0===c?void 0:c.results.filter((e=>!/^Cannot rate the/.test(e))).map((e=>(0,Ie.jsx)("ul",{children:(0,Ie.jsx)("li",{children:e})})))]}),(null===(A=I.data.embedded)||void 0===A||null===(m=A.rating)||void 0===m?void 0:m.rating)!==(null===(C=I.data.embedded)||void 0===C||null===(B=C.rating)||void 0===B?void 0:B.maxRating)&&(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)("li",{children:"Onbehaalde punten"}),null===(p=I.data.embedded)||void 0===p||null===(v=p.rating)||void 0===v?void 0:v.results.filter((e=>/^Cannot rate the/.test(e))).map((e=>(0,Ie.jsx)("ul",{children:(0,Ie.jsx)("li",{children:e})})))]})]})})]})};var Se=t(4799),De=t(5040),Le=t(6052);const Qe=e=>{var n,t,i,a,r,m,I,h,x,j,y,w,U,G,E,S,Z,J,P,M,H,q,X,_,ne,te,Ce,Be,pe,ve,we,Ge,Qe,Ne,Re,Te,ke,Ve,Oe,Ke,Ze,Je,Pe,Me,ze,He,qe,Xe,_e,$e,en,nn,tn,on,ln,an,dn,rn,sn,gn,un,cn,An,mn,Cn,Bn,pn,vn,In,hn,Fn,Wn,xn,Yn,bn,jn,fn,yn,wn,Un,Gn,En,Sn,Dn,Ln,Qn,Nn,Rn,Tn,kn,Vn,On,Kn,Zn,Jn,Pn,Mn;let{componentId:zn,sizeKb:Hn}=e;const{t:qn}=(0,ge.$)(),[Xn]=g.useContext(fe.oh),_n=ie.oI.controller,$n=ie.oI.NotificationPopUp,{isVisible:et,show:nt,hide:tt}=_n(),ot=(e=>{const n=g.useContext(Ae.Z);return{getOne:t=>(0,ce.useQuery)(["components",t],(()=>null==n?void 0:n.Component.getOne(t)),{initialData:()=>{var n;return null===(n=e.getQueryData("components"))||void 0===n?void 0:n.find((e=>e.id===t))},onError:e=>{throw new Error(e.message)},enabled:!!t}),getAll:e=>(0,ce.useQuery)(["components",e],(()=>null==n?void 0:n.Component.getAll(e)),{onError:e=>{throw new Error(e.message)}}),getCount:e=>(0,ce.useQuery)(["components_count",e],(()=>null==n?void 0:n.Component.getCount(e)),{onError:e=>{throw new Error(e.message)},refetchOnWindowFocus:!1,refetchOnReconnect:!1,retry:!1,staleTime:6e5})}})(new ce.QueryClient),it=ot.getOne(zn),lt=qn(s()(null===(n=it.data)||void 0===n||null===(t=n.embedded)||void 0===t||null===(i=t.nl)||void 0===i||null===(a=i.embedded)||void 0===a?void 0:a.commonground.layerType)),at=lt&&(null===(r=it.data)||void 0===r?void 0:r.categories.map((e=>{var n;return null===(n=xe.b[lt])||void 0===n?void 0:n.find((n=>n.value===e))})));if(it.isError)return(0,Ie.jsx)(Ie.Fragment,{children:"Something went wrong..."});const dt=null==it||null===(m=it.data)||void 0===m||null===(I=m.embedded)||void 0===I||null===(h=I.url)||void 0===h||null===(x=h.embedded)||void 0===x?void 0:x.organisation;return(0,Ie.jsxs)(ie.W2,{layoutClassName:v,children:[(0,Ie.jsxs)(oe.rU,{className:c,onClick:()=>(0,le.c4)("/components"),children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(ae.Z,{})}),qn("Back to components")]}),it.isSuccess&&(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsxs)("div",{className:Y,children:[(0,Ie.jsxs)("div",{className:b,children:[(0,Ie.jsx)(oe.X6,{level:1,className:B,children:it.data.name}),(0,Ie.jsx)(De.z,{description:null!==(j=null===(y=it.data.embedded)||void 0===y||null===(w=y.description)||void 0===w?void 0:w.longDescription)&&void 0!==j?j:qn("No description available")}),(0,Ie.jsxs)("div",{className:D,children:[(0,Ie.jsxs)(oe.Ou,{"data-tooltip-id":Le.TOOLTIP_ID,"data-tooltip-content":"Laag",className:o[d()(qn(`${null!==(U=null===(G=it.data.embedded)||void 0===G||null===(E=G.nl)||void 0===E||null===(S=E.embedded)||void 0===S?void 0:S.commonground.layerType)&&void 0!==U?U:"Unknown"} layer`))],children:[(0,Ie.jsx)(Fe.G,{icon:We.Krp}),qn(s()(null!==(Z=null===(J=it.data.embedded)||void 0===J||null===(P=J.nl)||void 0===P||null===(M=P.embedded)||void 0===M?void 0:M.commonground.layerType)&&void 0!==Z?Z:"Unknown"))]}),(null===(H=it.data)||void 0===H?void 0:H.categories)&&at&&at.map((e=>{var n,t;return e&&(0,Ie.jsxs)(oe.Ou,{"data-tooltip-id":Le.TOOLTIP_ID,"data-tooltip-content":"Categorie",className:o[d()(`${null===(n=it.data.embedded)||void 0===n||null===(t=n.nl.embedded)||void 0===t?void 0:t.commonground.layerType} category`)],children:[null==e?void 0:e.icon,s()(null==e?void 0:e.title)]})}))]}),(0,Ie.jsxs)("div",{className:$,children:[it.data.developmentStatus&&(0,Ie.jsxs)(oe.Ou,{"data-tooltip-id":Le.TOOLTIP_ID,"data-tooltip-content":"Status",children:[(0,Ie.jsx)(Fe.G,{icon:We.sqG}),qn(s()(it.data.developmentStatus))]}),(0,Ie.jsxs)(oe.Ou,{"data-tooltip-id":Le.TOOLTIP_ID,"data-tooltip-content":"Installaties",children:[(0,Ie.jsx)(Fe.G,{icon:We.jHE}),l()(null!==(q=null===(X=it.data.usedBy)||void 0===X?void 0:X.length)&&void 0!==q?q:"0")]}),(null==dt?void 0:dt.name)&&(0,Ie.jsxs)(oe.Ou,{"data-tooltip-id":Le.TOOLTIP_ID,"data-tooltip-content":"Organisatie",children:[(0,Ie.jsx)(Fe.G,{icon:We.wp6}),dt.name]}),(null===(_=it.data.embedded)||void 0===_||null===(ne=_.legal)||void 0===ne?void 0:ne.license)&&(0,Ie.jsxs)(oe.Ou,{"data-tooltip-id":Le.TOOLTIP_ID,"data-tooltip-content":"Licentie",children:[(0,Ie.jsx)(Fe.G,{icon:We.tx1}),null===(te=it.data.embedded)||void 0===te?void 0:te.legal.license]}),it.data.softwareType&&(0,Ie.jsxs)(oe.Ou,{"data-tooltip-id":Le.TOOLTIP_ID,"data-tooltip-content":"Software type",children:[(0,Ie.jsx)(Fe.G,{icon:We.aNY}),it.data.softwareType]}),(null===(Ce=it.data.embedded)||void 0===Ce||null===(Be=Ce.maintenance)||void 0===Be?void 0:Be.type)&&(0,Ie.jsxs)(oe.Ou,{"data-tooltip-id":Le.TOOLTIP_ID,"data-tooltip-content":"Onderhoudstype",children:[(0,Ie.jsx)(Fe.G,{icon:We.klh}),it.data.embedded.maintenance.type]})]})]}),(0,Ie.jsxs)("div",{className:u,children:[(0,Ie.jsx)("div",{className:N,children:(0,Ie.jsx)("img",{src:(e=>{try{const n=new URL(e);return"htpp:"===n.protocol||"https:"===n.protocol}catch(n){return!1}})(null===(pe=it.data)||void 0===pe||null===(ve=pe.embedded)||void 0===ve||null===(we=ve.url)||void 0===we||null===(Ge=we.embedded)||void 0===Ge||null===(Qe=Ge.component)||void 0===Qe?void 0:Qe.logo)?null===(Ne=it.data)||void 0===Ne||null===(Re=Ne.embedded)||void 0===Re||null===(Te=Re.url)||void 0===Te||null===(ke=Te.embedded)||void 0===ke||null===(Ve=ke.component)||void 0===Ve?void 0:Ve.logo:ue.Z,className:Q})}),(0,Ie.jsxs)(oe.zx,{children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(de.Z,{})})," ","Toevoegen aan catalogus"]}),(null===(Oe=it.data.embedded)||void 0===Oe||null===(Ke=Oe.url)||void 0===Ke?void 0:Ke.url)&&(0,Ie.jsxs)(oe.zx,{appearance:"secondary-action-button",onClick:()=>{var e,n;return open(null===(e=it.data.embedded)||void 0===e||null===(n=e.url)||void 0===n?void 0:n.url)},children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(be.c,{})})," ",qn("View Repository")]})]})]}),(0,Ie.jsxs)("div",{className:C,children:[dt&&(0,Ie.jsx)(Ye.$,{title:{label:dt.name,href:`/organizations/${dt._self.id}`},description:dt.description,website:dt.website,logo:dt.logo,components:{owned:null!==(Ze=null===(Je=dt.owns)||void 0===Je?void 0:Je.length.toString())&&void 0!==Ze?Ze:"0",supported:null!==(Pe=null===(Me=dt.supports)||void 0===Me?void 0:Me.length.toString())&&void 0!==Pe?Pe:"0",used:null!==(ze=null===(He=dt.uses)||void 0===He?void 0:He.length.toString())&&void 0!==ze?ze:"0"},gitHub:dt.github,gitLab:dt.gitlab,type:dt.type,layoutClassName:k}),!(null!=it&&null!==(qe=it.data)&&void 0!==qe&&null!==(Xe=qe.embedded)&&void 0!==Xe&&null!==(_e=Xe.url)&&void 0!==_e&&null!==($e=_e.embedded)&&void 0!==$e&&$e.organisation)&&(0,Ie.jsx)("span",{className:R,children:qn("No organization found")}),(0,Ie.jsx)(ie.rJ,{title:"",content:(0,Ie.jsxs)(Ie.Fragment,{children:[(null===(en=it.data.embedded)||void 0===en?void 0:en.rating)&&(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)(he,{layoutClassName:z,maxRating:null===(nn=it.data.embedded)||void 0===nn||null===(tn=nn.rating)||void 0===tn?void 0:tn.maxRating,rating:null===(on=it.data.embedded)||void 0===on||null===(ln=on.rating)||void 0===ln?void 0:ln.rating}),(0,Ie.jsx)("span",{className:L,children:(0,Ie.jsxs)(oe.rU,{onClick:nt,children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(re.Z,{})}),"Rating"]})})]}),!(null!==(an=it.data.embedded)&&void 0!==an&&an.rating)&&(0,Ie.jsx)("div",{className:T,children:qn("No rating available")})]}),layoutClassName:f}),et&&(0,Ie.jsx)("div",{className:O,children:(0,Ie.jsx)($n,{hide:tt,isVisible:et,title:"Rating",description:(0,Ie.jsx)(Ee,{getComponent:it}),primaryButton:{label:qn("Score calculation"),handleClick:()=>{(0,le.c4)("/documentation/about#score-calculation")}},secondaryButton:{label:qn("Close"),icon:(0,Ie.jsx)(Fe.G,{icon:We.acZ}),handleClick:()=>{}},layoutClassName:K})})]}),(0,Ie.jsx)("div",{children:(0,Ie.jsxs)(ie.mQ,{children:[(0,Ie.jsxs)(ie.td,{children:[(0,Ie.jsxs)(ie.OK,{children:[(0,Ie.jsx)("span",{children:"Componenten & Afhankelijkheden"}),(0,Ie.jsx)(oe.Ro,{className:A,children:null!==(dn=null===(rn=it.data.embedded)||void 0===rn||null===(sn=rn.dependsOn)||void 0===sn||null===(gn=sn.embedded)||void 0===gn?void 0:gn.open.length)&&void 0!==dn?dn:0})]}),(0,Ie.jsx)(ie.OK,{children:(0,Ie.jsx)("span",{children:qn("Suppliers")})}),(0,Ie.jsx)(ie.OK,{children:(0,Ie.jsx)("span",{children:qn("Reuse")})}),(0,Ie.jsxs)(ie.OK,{children:[(0,Ie.jsx)("span",{children:qn("Schema's")}),(0,Ie.jsx)(oe.Ro,{className:A,children:null!==(un=null===(cn=it.data.embedded)||void 0===cn||null===(An=cn.dependsOn)||void 0===An||null===(mn=An.embedded)||void 0===mn?void 0:mn.open.length)&&void 0!==un?un:0})]}),(0,Ie.jsxs)(ie.OK,{children:[(0,Ie.jsx)("span",{children:qn("Processes")}),(0,Ie.jsx)(oe.Ro,{className:A,children:null!==(Cn=null===(Bn=it.data.embedded)||void 0===Bn||null===(pn=Bn.dependsOn)||void 0===pn||null===(vn=pn.embedded)||void 0===vn?void 0:vn.open.length)&&void 0!==Cn?Cn:0})]})]}),(0,Ie.jsx)(ie.x4,{children:(0,Ie.jsxs)("div",{className:p,children:[(null===(In=it.data.embedded)||void 0===In||null===(hn=In.dependsOn)||void 0===hn?void 0:hn.embedded.open)&&(0,Ie.jsx)(Se.Z,{resultsDisplayType:"dependenciesDisplayLayout",layoutClassName:F}),(0,Ie.jsx)(je.i,{type:Xn.dependenciesDisplayLayout,components:null!==(Fn=null===(Wn=it.data.embedded)||void 0===Wn||null===(xn=Wn.dependsOn)||void 0===xn||null===(Yn=xn.embedded)||void 0===Yn?void 0:Yn.open)&&void 0!==Fn?Fn:[],mainComponent:{id:zn,name:it.data.name,layer:null===(bn=it.data.embedded)||void 0===bn||null===(jn=bn.nl)||void 0===jn||null===(fn=jn.embedded)||void 0===fn?void 0:fn.commonground.layerType}})]})}),(0,Ie.jsx)(ie.x4,{children:(0,Ie.jsx)(oe.iA,{children:(0,Ie.jsxs)(oe.RM,{children:[(0,Ie.jsxs)(oe.SC,{children:[(0,Ie.jsx)(oe.pj,{children:"Gemeente Rotterdam"}),(0,Ie.jsx)(oe.pj,{children:(0,Ie.jsxs)(oe.rU,{children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(be.c,{})}),"Componenten GitHub"]})}),(0,Ie.jsx)(oe.pj,{children:(0,Ie.jsxs)(oe.rU,{children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(se,{})}),"010 - 123 456 7"]})}),(0,Ie.jsx)(oe.pj,{children:(0,Ie.jsxs)(oe.rU,{onClick:()=>(0,le.c4)("/organizations/5b9e0b17-00ca-433c-961b-913270643e6d"),children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(re.Z,{})}),qn("Details")]})})]}),(0,Ie.jsxs)(oe.SC,{children:[(0,Ie.jsx)(oe.pj,{children:"Conduction"}),(0,Ie.jsx)(oe.pj,{children:(0,Ie.jsxs)(oe.rU,{children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(be.c,{})}),"Componenten GitHub"]})}),(0,Ie.jsx)(oe.pj,{children:(0,Ie.jsxs)(oe.rU,{children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(se,{})}),"020 - 123 456 7"]})}),(0,Ie.jsx)(oe.pj,{children:(0,Ie.jsxs)(oe.rU,{onClick:()=>(0,le.c4)("/organizations/5b9e0b17-00ca-433c-961b-913270643e6d"),children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(re.Z,{})}),qn("Details")]})})]}),(0,Ie.jsxs)(oe.SC,{children:[(0,Ie.jsx)(oe.pj,{children:"Gemeente Utrecht"}),(0,Ie.jsx)(oe.pj,{children:(0,Ie.jsxs)(oe.rU,{children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(be.c,{})}),"Componenten GitHub"]})}),(0,Ie.jsx)(oe.pj,{children:(0,Ie.jsxs)(oe.rU,{children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(se,{})}),"030 - 123 456 7"]})}),(0,Ie.jsx)(oe.pj,{children:(0,Ie.jsxs)(oe.rU,{onClick:()=>(0,le.c4)("/organizations/5b9e0b17-00ca-433c-961b-913270643e6d"),children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(re.Z,{})}),qn("Details")]})})]})]})})}),(0,Ie.jsx)(ie.x4,{children:(0,Ie.jsxs)(Ie.Fragment,{children:[(null===(yn=it.data)||void 0===yn||null===(wn=yn.usedBy)||void 0===wn?void 0:wn.length)>0&&(0,Ie.jsx)("div",{className:V,children:it.data.usedBy.map((e=>{var n,t,o,i,l,a;return(0,Ie.jsx)(Ye.$,{title:{label:null==e?void 0:e.name,href:"#"},description:null==e?void 0:e.description,website:null==e?void 0:e.website,logo:null==e?void 0:e.logo,components:{owned:null!==(n=null==e||null===(t=e.owns)||void 0===t?void 0:t.length.toString())&&void 0!==n?n:"0",supported:null!==(o=null==e||null===(i=e.supports)||void 0===i?void 0:i.length.toString())&&void 0!==o?o:"0",used:null!==(l=null==e||null===(a=e.uses)||void 0===a?void 0:a.length.toString())&&void 0!==l?l:"0"},gitHub:null==e?void 0:e.github,gitLab:null==e?void 0:e.gitlab,type:null==e?void 0:e.type,layoutClassName:k},e.id)}))}),(null===(Un=it.data)||void 0===Un||null===(Gn=Un.usedBy)||void 0===Gn?void 0:Gn.length)<1&&(0,Ie.jsx)(Ie.Fragment,{children:"Er zijn geen hergebruikers van dit component."})]})}),(0,Ie.jsx)(ie.x4,{children:(0,Ie.jsx)(ye.A,{components:null!==(En=null===(Sn=it.data.embedded)||void 0===Sn||null===(Dn=Sn.dependsOn)||void 0===Dn||null===(Ln=Dn.embedded)||void 0===Ln?void 0:Ln.open)&&void 0!==En?En:[]})}),(0,Ie.jsx)(ie.x4,{children:(0,Ie.jsx)(ye.A,{components:null!==(Qn=null===(Nn=it.data.embedded)||void 0===Nn||null===(Rn=Nn.dependsOn)||void 0===Rn||null===(Tn=Rn.embedded)||void 0===Tn?void 0:Tn.open)&&void 0!==Qn?Qn:[]})})]})}),(0,Ie.jsx)(Ue,{label:it.data.name,icon:(0,Ie.jsx)(Fe.G,{icon:We.t5N}),sizeKb:Hn}),(0,Ie.jsxs)("div",{children:[(0,Ie.jsx)("h2",{className:ee,children:"Meer informatie"}),(0,Ie.jsx)(oe.iA,{children:(0,Ie.jsxs)(oe.RM,{children:[(0,Ie.jsxs)(oe.SC,{children:[(0,Ie.jsx)(oe.pj,{className:ee,children:"Gemma"}),(0,Ie.jsx)(oe.pj,{className:W,children:"Op dit moment is er geen gemma data beschikbaar."})]}),(0,Ie.jsxs)(oe.SC,{children:[(0,Ie.jsx)(oe.pj,{className:ee,children:qn("Products")}),(0,Ie.jsxs)(oe.pj,{children:[(null===(kn=it.data.embedded)||void 0===kn||null===(Vn=kn.nl)||void 0===Vn?void 0:Vn.upl)&&(null===(On=it.data.embedded)||void 0===On||null===(Kn=On.nl)||void 0===Kn?void 0:Kn.upl.map(((e,n)=>(0,Ie.jsx)("span",{children:(0,Ie.jsxs)(oe.rU,{target:"_new",href:"http://standaarden.overheid.nl/owms/terms/AangifteVertrekBuitenland",children:[(0,Ie.jsx)(oe.JO,{children:(0,Ie.jsx)(de.Z,{})}),e,","," "]})},n)))),(!(null!==(Zn=it.data.embedded)&&void 0!==Zn&&null!==(Jn=Zn.nl)&&void 0!==Jn&&Jn.upl)||!(null!==(Pn=it.data.embedded)&&void 0!==Pn&&null!==(Mn=Pn.nl)&&void 0!==Mn&&Mn.upl.length))&&(0,Ie.jsx)("span",{className:W,children:"Op dit moment zijn er geen producten beschikbaar."})]})]}),(0,Ie.jsxs)(oe.SC,{children:[(0,Ie.jsx)(oe.pj,{className:ee,children:"Standaarden"}),(0,Ie.jsx)(oe.pj,{className:W,children:"Op dit moment zijn er geen standaarden beschikbaar."})]}),(0,Ie.jsxs)(oe.SC,{children:[(0,Ie.jsx)(oe.pj,{className:ee,children:"Wet en regelgeving"}),(0,Ie.jsx)(oe.pj,{className:W,children:"Op dit moment zijn er geen wetten en regelgevingen beschikbaar."})]})]})})]})]}),it.isLoading&&(0,Ie.jsx)(me.Z,{height:"200px"})]})};var Ne=e=>(0,Ie.jsx)(Qe,{componentId:e.params.componentId,sizeKb:l()(Math.floor(204800*Math.random())+103598)})},5:function(e,n){"use strict";n.Z="data:image/png;base64,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"}}]);
//# sourceMappingURL=4b0c6583d3c82fff20d8c36f8783b5ab27658531-321db43eb9cec63aee09.js.map