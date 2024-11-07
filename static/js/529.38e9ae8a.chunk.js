"use strict";(self.webpackChunkreact_cars=self.webpackChunkreact_cars||[]).push([[529],{671:(e,s,a)=>{a.d(s,{A:()=>x});var l=a(43),i=a(579);const t=e=>{let{openModal:s}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("button",{type:"button",className:"ButtonLearn",onClick:s,children:"Learn more"})})};var r=a(475);const c=e=>{let{isOpen:s,onClose:a,car:t}=e;const[c,n]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=e=>{"Escape"===e.key&&n(!0)};return s&&window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[s]),(0,l.useEffect)((()=>{c&&a()}),[c,a]),s?(0,i.jsx)("div",{className:"modalBackdrop",onClick:a,children:(0,i.jsxs)("div",{className:"modalContent",onClick:e=>e.stopPropagation(),children:[(0,i.jsx)("button",{className:"closeButton",onClick:a,children:"\xd7"}),(0,i.jsx)("img",{src:t.img,alt:t.model,className:"carsListItemModal-image"}),(0,i.jsxs)("div",{className:"itemContainerModal",children:[(0,i.jsxs)("div",{className:"itemContainerTitlePrice",children:[(0,i.jsxs)("h2",{className:"itemTitleModal",children:[t.make," ",t.model,", ",t.year]}),(0,i.jsx)("h2",{className:"itemPriceModal",children:t.rentalPrice})]}),(0,i.jsxs)("ul",{className:"itemInfoModal",children:[(0,i.jsx)("li",{className:"itemInfoItemModal",children:(o=t.address,o.split(", ").slice(1,-1).toString())}),(0,i.jsx)("li",{className:"itemInfoItemModal",children:(e=>e.split(", ").slice(2).toString())(t.address)}),(0,i.jsx)("li",{className:"itemInfoItemModal",children:t.rentalCompany}),(0,i.jsx)("li",{className:"itemInfoItemModal",children:"Premium"}),(0,i.jsx)("li",{className:"itemInfoItemModal",children:t.type}),(0,i.jsx)("li",{className:"itemInfoItemModal",children:t.model}),(0,i.jsx)("li",{className:"itemInfoItemModal",children:t.id}),(0,i.jsx)("li",{className:"itemInfoItemLastModal",children:t.accessories[2]})]}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{className:"itemDescription",children:t.description})}),(0,i.jsxs)("div",{className:"itemAccessoriesInfo",children:[(0,i.jsx)("p",{className:"itemAccessories",children:"Accessories and functionalities:"}),(0,i.jsx)("ul",{className:"itemInfoModal",children:t.accessories.map((e=>(0,i.jsx)("li",{className:"itemInfoItemModal",children:e})))}),(0,i.jsx)("ul",{className:"itemInfoModal",children:t.functionalities.map((e=>(0,i.jsx)("li",{className:"itemInfoItemModal",children:e})))})]}),(0,i.jsxs)("div",{className:"rentalDescr",children:[(0,i.jsx)("h4",{className:"rentalDescrTitle",children:"Rental Conditions: "}),(0,i.jsxs)("ul",{className:"rentalDescrArray",children:[(d=t.rentalConditions,d.split("\n")).map(((e,s)=>e.includes(":")?(0,i.jsxs)("li",{className:"rentalDescrArrayItem",children:[" ",e.split(":")[0],":"," ",(0,i.jsx)("span",{className:"rentalDescrArrayItemSpan",children:e.split(":")[1]})," "]},s):(0,i.jsx)("li",{className:"rentalDescrArrayItem",children:e},s))),(0,i.jsxs)("li",{className:"rentalDescrArrayItem",children:["Mileage:"," ",(0,i.jsx)("span",{className:"rentalDescrArrayItemSpan",children:(m=t.mileage,m.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})]}),(0,i.jsxs)("li",{className:"rentalDescrArrayItem",children:["Price:"," ",(0,i.jsx)("span",{className:"rentalDescrArrayItemSpan",children:t.rentalPrice})]})]})]}),(0,i.jsx)("div",{className:"rentCarBtn",children:(0,i.jsx)(r.N_,{className:"rentCarBtnLink","data-rel":"external",to:"tel:+380730000000",target:"blank",children:"Rental car"})})]})]})}):null;var m,d,o},n={favoriteButton:"AddCar_favoriteButton__Mffnd",favorite:"AddCar_favorite__mZa4e",IconHeard:"AddCar_IconHeard__qhzSq",iconHeard:"AddCar_iconHeard__z2gb0"};var m=a(774),d=a(497);const o=e=>{let{car:s}=e;const[a,t]=(0,l.useState)(s.favorite);return(0,i.jsx)("button",{onClick:async()=>{try{200===(await d.A.put(`https://64a05432ed3c41bdd7a73763.mockapi.io/cars/${s.id}`,{favorite:!a})).status&&t(!a)}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f favorite",e)}},className:`${n.favoriteButton} ${a?n.favorite:""}`,children:(0,i.jsx)(m.Mbv,{className:n.iconHeart})})},h=e=>{let{car:s}=e;const[a,r]=(0,l.useState)(!1);return(0,i.jsxs)("li",{className:"carsListItem",children:[(0,i.jsx)(o,{className:"addCar",car:s}),(0,i.jsx)("img",{src:s.img,alt:s.model,className:"carsListItem-image"}),(0,i.jsxs)("div",{className:"itemContainer",children:[(0,i.jsxs)("div",{className:"itemContainerTitlePrice",children:[(0,i.jsxs)("h2",{className:"itemTitle",children:[s.make," ",s.model,", ",s.year]}),(0,i.jsx)("h2",{className:"itemPrice",children:s.rentalPrice})]}),(0,i.jsxs)("ul",{className:"itemInfo",children:[(0,i.jsx)("li",{className:"itemInfoItem",children:(n=s.address,n.split(", ").slice(1,-1).toString())}),(0,i.jsx)("li",{className:"itemInfoItem",children:(e=>e.split(", ").slice(2).toString())(s.address)}),(0,i.jsx)("li",{className:"itemInfoItem",children:s.rentalCompany}),(0,i.jsx)("li",{className:"itemInfoItem",children:"Premium"}),(0,i.jsx)("li",{className:"itemInfoItem",children:s.type}),(0,i.jsx)("li",{className:"itemInfoItem",children:s.model}),(0,i.jsx)("li",{className:"itemInfoItem",children:s.id}),(0,i.jsx)("li",{className:"itemInfoItemLast",children:s.accessories[2]})]}),(0,i.jsx)(t,{openModal:()=>{r(!0)}}),(0,i.jsx)(c,{isOpen:a,onClose:()=>{r(!1)},car:s})]})]});var n},x=e=>{let{cars:s}=e;return console.log(s),(0,i.jsx)("div",{className:"conteiner",children:(0,i.jsx)("ul",{className:"carsImageGallery",children:s.map((e=>(0,i.jsx)(h,{car:e},e.id)))})})}},529:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var l=a(43),i=a(671),t=a(497),r=a(579);const c=()=>{const[e,s]=(0,l.useState)([]);return(0,l.useEffect)((()=>{(async()=>{try{const e=await t.A.get("https://64a05432ed3c41bdd7a73763.mockapi.io/cars",{params:{favorite:!0}});s(e.data)}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0438\u0445 \u043e\u0433\u043e\u043b\u043e\u0448\u0435\u043d\u044c",e)}})()}),[]),(0,r.jsx)("div",{children:0!==e.length?(0,r.jsx)(i.A,{cars:e}):(0,r.jsx)(r.Fragment,{children:" "})})}}}]);
//# sourceMappingURL=529.38e9ae8a.chunk.js.map