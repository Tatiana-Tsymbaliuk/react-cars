"use strict";(self.webpackChunkreact_cars=self.webpackChunkreact_cars||[]).push([[622],{268:function(e,s,a){a.d(s,{Z:function(){return p}});var n=a(439),r=a(791),t=a(184),i=function(e){var s=e.openModal;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("button",{type:"button",className:"ButtonLearn",onClick:s,children:"Learn more"})})},c=a(87),l=function(e){var s,a,i,l=e.isOpen,o=e.onClose,m=e.car,d=(0,r.useState)(!1),u=(0,n.Z)(d,2),f=u[0],h=u[1];return(0,r.useEffect)((function(){var e=function(e){"Escape"===e.key&&h(!0)};return l&&window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[l]),(0,r.useEffect)((function(){f&&o()}),[f,o]),l?(0,t.jsx)("div",{className:"modalBackdrop",onClick:o,children:(0,t.jsxs)("div",{className:"modalContent",onClick:function(e){return e.stopPropagation()},children:[(0,t.jsx)("button",{className:"closeButton",onClick:o,children:"\xd7"}),(0,t.jsx)("img",{src:m.img,alt:m.model,className:"carsListItemModal-image"}),(0,t.jsxs)("div",{className:"itemContainerModal",children:[(0,t.jsxs)("div",{className:"itemContainerTitlePrice",children:[(0,t.jsxs)("h2",{className:"itemTitleModal",children:[m.make," ",m.model,", ",m.year]}),(0,t.jsx)("h2",{className:"itemPriceModal",children:m.rentalPrice})]}),(0,t.jsxs)("ul",{className:"itemInfoModal",children:[(0,t.jsx)("li",{className:"itemInfoItemModal",children:(i=m.address,i.split(", ").slice(1,-1).toString())}),(0,t.jsx)("li",{className:"itemInfoItemModal",children:function(e){return e.split(", ").slice(2).toString()}(m.address)}),(0,t.jsx)("li",{className:"itemInfoItemModal",children:m.rentalCompany}),(0,t.jsx)("li",{className:"itemInfoItemModal",children:"Premium"}),(0,t.jsx)("li",{className:"itemInfoItemModal",children:m.type}),(0,t.jsx)("li",{className:"itemInfoItemModal",children:m.model}),(0,t.jsx)("li",{className:"itemInfoItemModal",children:m.id}),(0,t.jsx)("li",{className:"itemInfoItemLastModal",children:m.accessories[2]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("p",{className:"itemDescription",children:m.description})}),(0,t.jsxs)("div",{className:"itemAccessoriesInfo",children:[(0,t.jsx)("p",{className:"itemAccessories",children:"Accessories and functionalities:"}),(0,t.jsx)("ul",{className:"itemInfoModal",children:m.accessories.map((function(e){return(0,t.jsx)("li",{className:"itemInfoItemModal",children:e})}))}),(0,t.jsx)("ul",{className:"itemInfoModal",children:m.functionalities.map((function(e){return(0,t.jsx)("li",{className:"itemInfoItemModal",children:e})}))})]}),(0,t.jsxs)("div",{className:"rentalDescr",children:[(0,t.jsx)("h4",{className:"rentalDescrTitle",children:"Rental Conditions: "}),(0,t.jsxs)("ul",{className:"rentalDescrArray",children:[(a=m.rentalConditions,a.split("\n")).map((function(e,s){return e.includes(":")?(0,t.jsxs)("li",{className:"rentalDescrArrayItem",children:[" ",e.split(":")[0],":"," ",(0,t.jsx)("span",{className:"rentalDescrArrayItemSpan",children:e.split(":")[1]})," "]},s):(0,t.jsx)("li",{className:"rentalDescrArrayItem",children:e},s)})),(0,t.jsxs)("li",{className:"rentalDescrArrayItem",children:["Mileage:"," ",(0,t.jsx)("span",{className:"rentalDescrArrayItemSpan",children:(s=m.mileage,s.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})]}),(0,t.jsxs)("li",{className:"rentalDescrArrayItem",children:["Price:"," ",(0,t.jsx)("span",{className:"rentalDescrArrayItemSpan",children:m.rentalPrice})]})]})]}),(0,t.jsx)("div",{className:"rentCarBtn",children:(0,t.jsx)(c.rU,{className:"rentCarBtnLink","data-rel":"external",to:"tel:+380730000000",target:"blank",children:"Rental car"})})]})]})}):null},o=a(861),m=a(757),d=a.n(m),u={favoriteButton:"AddCar_favoriteButton__Mffnd",favorite:"AddCar_favorite__mZa4e",IconHeard:"AddCar_IconHeard__qhzSq",iconHeard:"AddCar_iconHeard__z2gb0"},f=a(135),h=a(243),x=function(e){var s=e.car,a=(0,r.useState)(s.favorite),i=(0,n.Z)(a,2),c=i[0],l=i[1],m=function(){var e=(0,o.Z)(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.put("https://64a05432ed3c41bdd7a73763.mockapi.io/cars/".concat(s.id),{favorite:!c});case 3:200===e.sent.status&&l(!c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f favorite",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,t.jsx)("button",{onClick:m,className:"".concat(u.favoriteButton," ").concat(c?u.favorite:""),children:(0,t.jsx)(f.$0H,{className:u.iconHeart})})},j=function(e){var s,a=e.car,c=(0,r.useState)(!1),o=(0,n.Z)(c,2),m=o[0],d=o[1];return(0,t.jsxs)("li",{className:"carsListItem",children:[(0,t.jsx)(x,{className:"addCar",car:a}),(0,t.jsx)("img",{src:a.img,alt:a.model,className:"carsListItem-image"}),(0,t.jsxs)("div",{className:"itemContainer",children:[(0,t.jsxs)("div",{className:"itemContainerTitlePrice",children:[(0,t.jsxs)("h2",{className:"itemTitle",children:[a.make," ",a.model,", ",a.year]}),(0,t.jsx)("h2",{className:"itemPrice",children:a.rentalPrice})]}),(0,t.jsxs)("ul",{className:"itemInfo",children:[(0,t.jsx)("li",{className:"itemInfoItem",children:(s=a.address,s.split(", ").slice(1,-1).toString())}),(0,t.jsx)("li",{className:"itemInfoItem",children:function(e){return e.split(", ").slice(2).toString()}(a.address)}),(0,t.jsx)("li",{className:"itemInfoItem",children:a.rentalCompany}),(0,t.jsx)("li",{className:"itemInfoItem",children:"Premium"}),(0,t.jsx)("li",{className:"itemInfoItem",children:a.type}),(0,t.jsx)("li",{className:"itemInfoItem",children:a.model}),(0,t.jsx)("li",{className:"itemInfoItem",children:a.id}),(0,t.jsx)("li",{className:"itemInfoItemLast",children:a.accessories[2]})]}),(0,t.jsx)(i,{openModal:function(){d(!0)}}),(0,t.jsx)(l,{isOpen:m,onClose:function(){d(!1)},car:a})]})]})},p=function(e){var s=e.cars;return console.log(s),(0,t.jsx)("div",{className:"conteiner",children:(0,t.jsx)("ul",{className:"carsImageGallery",children:s.map((function(e){return(0,t.jsx)(j,{car:e},e.id)}))})})}},622:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var n=a(861),r=a(439),t=a(757),i=a.n(t),c=a(791),l=a(268),o=a(243),m=a(184),d=function(){var e=(0,c.useState)([]),s=(0,r.Z)(e,2),a=s[0],t=s[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://64a05432ed3c41bdd7a73763.mockapi.io/cars",{params:{favorite:!0}});case 3:s=e.sent,t(s.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0438\u0445 \u043e\u0433\u043e\u043b\u043e\u0448\u0435\u043d\u044c",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsx)("div",{children:0!==a.length?(0,m.jsx)(l.Z,{cars:a}):(0,m.jsx)(m.Fragment,{children:" "})})}}}]);
//# sourceMappingURL=622.4bb21525.chunk.js.map