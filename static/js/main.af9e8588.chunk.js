(this["webpackJsonpunit-testing-jest"]=this["webpackJsonpunit-testing-jest"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);c(0);var i=c(13),r=c.n(i),s=c(8),n=c(20),a=c(11),o=c(3),d={addToCart:function(e){return{type:"ADD_TO_CART",payload:e}},removeFromCart:function(e){return{type:"REMOVE_FROM_CART",payload:e}}},l=c(1),j=function(e){var t=e.product,c=e.handleAddToCart;return Object(l.jsxs)("div",{className:"Products-item",children:[Object(l.jsx)("img",{src:t.image,alt:t.title}),Object(l.jsxs)("div",{className:"Products-item-info",children:[Object(l.jsxs)("h2",{children:[t.title,Object(l.jsxs)("span",{children:["$",t.price]})]}),Object(l.jsx)("p",{children:t.description})]}),Object(l.jsx)("button",{type:"button",onClick:c(t),children:"Comprar"})]})},u={addToCart:d.addToCart},p=Object(s.b)((function(e){return{products:e.products}}),u)((function(e){var t=e.products,c=e.addToCart,i=function(e){return function(){c(e)}};return Object(l.jsx)("div",{className:"Products",children:Object(l.jsx)("div",{className:"Products-items",children:t.map((function(e){return Object(l.jsx)(j,{product:e,handleAddToCart:i},e.id)}))})})})),m=function(){return Object(l.jsx)(p,{})},h={removeFromCart:d.removeFromCart},b=Object(s.b)((function(e){return{cart:e.cart}}),h)((function(e){var t=e.cart,c=e.removeFromCart;return Object(l.jsxs)("div",{className:"Checkout",children:[Object(l.jsxs)("div",{className:"Checkout-content",children:[t.length>0?Object(l.jsx)("h3",{children:"Lista de Pedidos:"}):Object(l.jsx)("h2",{children:"Sin Pedidos"}),t.map((function(e){return Object(l.jsxs)("div",{className:"Checkout-item",children:[Object(l.jsxs)("div",{className:"Checkout-element",children:[Object(l.jsx)("h4",{children:e.title}),Object(l.jsxs)("span",{children:["$",e.price]})]}),Object(l.jsx)("button",{type:"button",onClick:(t=e,function(){c(t)}),children:Object(l.jsx)("i",{className:"fas fa-trash-alt"})})]},e.title);var t}))]}),t.length>0&&Object(l.jsx)("div",{className:"Checkout-sidebar",children:Object(l.jsx)("h3",{children:"Precio Total: $ ".concat(t.reduce((function(e,t){return e+t.price}),0))})})]})})),O=Object(s.b)((function(e){return{cart:e.cart}}),null)((function(e){var t=e.cart;return Object(l.jsxs)("div",{className:"Header",children:[Object(l.jsx)("h1",{className:"Header-title",children:Object(l.jsx)(a.b,{to:"/",children:"Platzi Store"})}),Object(l.jsxs)("div",{className:"Header-checkout",children:[Object(l.jsx)(a.b,{to:"/checkout",children:Object(l.jsx)("i",{className:"fas fa-shopping-basket"})}),t.length>0&&Object(l.jsx)("div",{className:"Header-alert",children:t.length})]})]})})),x=function(){return Object(l.jsxs)("div",{className:"Footer",children:[Object(l.jsx)("p",{className:"Footer-title",children:"Platzi Store"}),Object(l.jsx)("p",{className:"Footer-copy",children:"Todos los Izquierdos Reservados"})]})},g=function(e){var t=e.children;return Object(l.jsxs)("div",{className:"Main",children:[Object(l.jsx)(O,{}),t,Object(l.jsx)(x,{})]})},f=function(){return Object(l.jsx)("h1",{children:"NotFound"})},v=function(){return Object(l.jsx)(a.a,{children:Object(l.jsx)(g,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(l.jsx)(o.a,{exact:!0,path:"/checkout",component:b}),Object(l.jsx)(o.a,{component:f})]})})})},C=c(19),N=c(12),k=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(N.a)(Object(N.a)({},e),{},{cart:[].concat(Object(C.a)(e.cart),[t.payload])});case"REMOVE_FROM_CART":return Object(N.a)(Object(N.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});default:return e}},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),i(e),r(e),s(e),n(e)}))},F=(c(35),Object(n.a)(k,{cart:[],products:[{id:"1",image:"https://arepa.s3.amazonaws.com/camiseta.png",title:"Camiseta",price:25,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"3",image:"https://arepa.s3.amazonaws.com/mug.png",title:"Mug",price:10,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"4",image:"https://arepa.s3.amazonaws.com/pin.png",title:"Pin",price:4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"5",image:"https://arepa.s3.amazonaws.com/stickers1.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"6",image:"https://arepa.s3.amazonaws.com/stickers2.png",title:"Stickers",price:2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},{id:"7",image:"https://arepa.s3.amazonaws.com/hoodie.png",title:"Hoodie",price:35,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}]}));r.a.render(Object(l.jsx)(s.a,{store:F,children:Object(l.jsx)(v,{})}),document.getElementById("root")),T()}},[[36,1,2]]]);
//# sourceMappingURL=main.af9e8588.chunk.js.map