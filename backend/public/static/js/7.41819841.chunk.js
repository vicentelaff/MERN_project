(this.webpackJsonpappli_mobile=this.webpackJsonpappli_mobile||[]).push([[7],{44:function(e,t,c){"use strict";c(0),c(50);var n=c(1);t.a=function(e){return Object(n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},50:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(48),a=c.n(n),r=c(49),s=c(11),i=c(0),o=c.n(i),l=c(2),j=c(44),d=c(46),u=c(60),p=(c(67),c(1)),b=function(e){var t=Object(i.useRef)(),c=e.center,n=e.zoom;return Object(i.useEffect)((function(){var e=new window.google.maps.Map(t.current,{center:c,zoom:n});new window.google.maps.Marker({position:c,map:e})}),[c,n]),Object(p.jsx)("div",{ref:t,className:"map props.className",style:e.style})},h=c(51),m=c(17),O=c(12),f=c(52),x=(c(68),function(e){var t=Object(f.a)(),c=t.isLoading,n=t.error,l=t.sendRequest,x=t.clearError,v=Object(i.useContext)(O.a),g=Object(i.useState)(!1),w=Object(s.a)(g,2),E=w[0],C=w[1],N=Object(i.useState)(!1),_=Object(s.a)(N,2),k=_[0],y=_[1],D=function(){return C(!1)},I=function(){y(!1)},L=function(){var t=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y(!1);try{l("https://c2v-mern-project.herokuapp.com/api"+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+v.token}),e.onDelete(e.id)}catch(c){}case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)(h.a,{error:n,onClear:x}),Object(p.jsx)(u.a,{show:E,onCancel:D,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:Object(p.jsx)(d.a,{onClick:D,children:"CLOSE"}),children:Object(p.jsx)("div",{className:"map-container",children:Object(p.jsx)(b,{center:e.coordinates,zoom:16})})}),Object(p.jsx)(u.a,{show:k,onCancel:I,header:"Delete confirmation",footerClass:"place-item__modal-actions",footer:Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)(d.a,{inverse:!0,onClick:I,children:"CANCEL"}),Object(p.jsx)(d.a,{danger:!0,onClick:L,children:"DELETE"})]}),children:Object(p.jsx)("p",{children:"Are you sure you want to delete this place?"})}),Object(p.jsx)("li",{className:"place-item",children:Object(p.jsxs)(j.a,{className:"place-item__content",children:[c&&Object(p.jsx)(m.a,{asOverlay:!0}),Object(p.jsx)("div",{className:"place-item__image",children:Object(p.jsx)("img",{src:"".concat("https://c2v-mern-project.herokuapp.com","/").concat(e.image),alt:e.title})}),Object(p.jsxs)("div",{className:"place-item__info",children:[Object(p.jsx)("h2",{children:e.title}),Object(p.jsx)("h3",{children:e.address}),Object(p.jsx)("p",{children:e.description})]}),Object(p.jsxs)("div",{className:"place-item__actions",children:[Object(p.jsx)(d.a,{inverse:!0,onClick:function(){return C(!0)},children:"VIEW ON MAP"}),v.userId===e.creatorId&&Object(p.jsx)(d.a,{to:"/places/".concat(e.id),children:"EDIT"}),v.userId===e.creatorId&&Object(p.jsx)(d.a,{danger:!0,onClick:function(){y(!0)},children:"DELETE"})]})]})})]})}),v=(c(69),function(e){return 0===e.items.length?Object(p.jsx)("div",{className:"place-list center",children:Object(p.jsxs)(j.a,{children:[Object(p.jsx)("h2",{children:"No places found. Go create a new one!"}),Object(p.jsx)(d.a,{to:"/places/new",children:"Share Place"})]})}):Object(p.jsx)("ul",{className:"place-list",children:e.items.map((function(t){return Object(p.jsx)(x,{id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace},t.id)}))})});t.default=function(){var e=Object(i.useState)(),t=Object(s.a)(e,2),c=t[0],n=t[1],j=Object(f.a)(),d=j.isLoading,u=j.error,b=j.sendRequest,O=j.clearError,x=Object(l.h)().userId;Object(i.useEffect)((function(){(function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("".concat("https://c2v-mern-project.herokuapp.com/api","/places/user/").concat(x));case 3:t=e.sent,n(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[b,x]);return Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)(h.a,{error:u,onClear:O}),d&&Object(p.jsx)("div",{className:"center",children:Object(p.jsx)(m.a,{})}),!d&&c&&Object(p.jsx)(v,{items:c,onDeletePlace:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}),";"]})}}}]);
//# sourceMappingURL=7.41819841.chunk.js.map