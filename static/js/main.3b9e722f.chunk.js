(this["webpackJsonpreact-web-shop"]=this["webpackJsonpreact-web-shop"]||[]).push([[0],{124:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(13),s=n.n(i),r=(n(124),n(19)),l=n(7),o=n(14),j=n(15),d=n(192),b=n(185),u=n(208),h=n(212),p=n(188),O=n(190),x=n(148),m=n(206),g=n(189),f=n(82),v=n.n(f),y=n.p+"static/media/img1.8841cc32.jpg",w=n.p+"static/media/img2.2ac3216a.jpg",S=n.p+"static/media/img3.d9f21c5a.jpg",k=n.p+"static/media/img4.09792c9b.jpg",C=n.p+"static/media/img5.34bbcd29.jpg",N=n.p+"static/media/img6.baa82507.jpg",P=n.p+"static/media/img11.f7767d0c.png",I=n.p+"static/media/img12.778058f4.png",L=n.p+"static/media/img13.f45668d2.png",R=n.p+"static/media/img14.f1bfd080.png",A=n.p+"static/media/img15.098bb3e8.png",W=(n(125),n(36)),D=n.n(W),E=n(191),z=n(211),F=n(1),M=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(2)}},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},top:{color:"#1af0ff",animationDuration:"550ms",textAlign:"center"},circle:{strokeLinecap:"round"},main:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:20,padding:20,margin:"0 auto",maxWidth:1500,"& > *":{padding:20}},favoriteIcon:{width:40,height:40,position:"absolute",right:20,bottom:20},paper:{position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between","& *":{margin:0},"& small":{display:"block"},"& aside":{display:"inline-block","& p":{color:"black",fontWeight:500}}},link:{display:"flex",textDecoration:"none",color:"black","& aside":{paddingLeft:20,"& h5:nth-child(2)":{padding:"20px 0 5px 0"},"& small":{color:"#1c54b2",lineHeight:1.6}}}}}));function T(e){var t=M(),n=e.product,a=e.maxprice,i=e.newData,s=e.loading,r=e.sorting,b=e.keyword,f=Object(c.useState)(!0),W=Object(l.a)(f,1)[0],T=Object(c.useState)(1),B=Object(l.a)(T,2),U=B[0],H=B[1],G=Math.ceil(i.length/19);function V(e,t){H(t)}var Y=Object(j.g)(),J=Object(j.h)(),K=parseInt(J.pathname.replace(/^\D+/g,""));Object(c.useEffect)((function(){Math.ceil(i.length/19)<K&&Y.push("/")}),[a,b,Y,i.length,K]),setTimeout((function(){"/"!==J.pathname&&""===n||(K=1),V(0,K)}),100);var Q=i.sort(function(e){var t=1;"-"===e[0]&&(t=-1,e=e.substr(1));return function(n,c){return(n[e]<c[e]?-1:n[e]>c[e]?1:0)*t}}(1===r?"":2===r?"price":"-price")).slice(19*(U-1),19*U);return Object(F.jsxs)(F.Fragment,{children:[s&&Object(F.jsx)("div",{children:Object(F.jsx)(h.a,{className:t.backdrop,open:W,children:Object(F.jsx)(p.a,{variant:"indeterminate",disableShrink:!0,className:t.top,classes:{circle:t.circle},size:40,thickness:4})})}),i&&Object(F.jsxs)("main",{className:t.main,children:[Object(F.jsx)(m.a,{style:{gridColumn:"3/5",gridRow:"1/3",padding:0},children:Object(F.jsxs)(v.a,{autoPlay:5e3,infinite:!0,animationSpeed:1e3,children:[Object(F.jsx)("img",{src:y,alt:""}),Object(F.jsx)("img",{src:w,alt:""}),Object(F.jsx)("img",{src:S,alt:""}),Object(F.jsx)("img",{src:k,alt:""}),Object(F.jsx)("img",{src:C,alt:""}),Object(F.jsx)("img",{src:N,alt:""})]})}),Object(F.jsx)(m.a,{style:{gridColumn:"1/5",gridRow:"7/8",padding:0},children:Object(F.jsxs)(v.a,{autoPlay:5e3,infinite:!0,animationSpeed:1e3,slidesPerPage:1,slidesPerScroll:1,children:[Object(F.jsx)("img",{src:P,alt:""}),Object(F.jsx)("img",{src:I,alt:""}),Object(F.jsx)("img",{src:L,alt:""}),Object(F.jsx)("img",{src:R,alt:""}),Object(F.jsx)("img",{src:A,alt:""})]})}),Q.map((function(e,n){return n%10===0&&0!==n?Object(F.jsxs)(x.a,{elevation:3,className:t.paper,data:n,style:{gridColumn:"1/3",gridRow:"4/5"},children:[Object(F.jsx)("div",{style:{display:"none"},className:"item-id",children:"id"}),Object(F.jsx)("div",{style:{display:"none"},className:"info",children:"info"}),Object(F.jsx)("h4",{children:e.name}),Object(F.jsxs)(o.b,{to:"/details/".concat(e.name),onClick:function(){return window.scrollTo(0,0)},className:t.link,children:[""===e.image[0]?Object(F.jsx)("img",{src:"no-image.png",alt:"",style:{maxHeight:310}}):Object(F.jsx)("img",{src:"/react-web-shop/"+e.image[0],alt:"",style:{maxHeight:310}}),Object(F.jsxs)("aside",{children:[Object(F.jsxs)("h5",{children:["Description: ",e.description]}),Object(F.jsx)("h5",{children:"Specifications:"}),Object(F.jsx)(g.a,{style:{maxWidth:200}}),e.specs.map((function(e,t){return Object(F.jsx)("small",{children:e},t)}))]})]}),Object(F.jsxs)("div",{children:[Object(F.jsxs)("small",{children:["In stock:",Object(F.jsxs)("span",{className:"item-stock",children:[" ",e.stock]})]}),Object(F.jsxs)("p",{children:["Price:",Object(F.jsxs)("strong",{style:{color:"#ff5722"},children:[Object(F.jsxs)("span",{className:"price-item",children:[" ",e.price.toLocaleString("ro")," "]}),"RON"]})]})]}),Object(F.jsx)(O.a,{color:"primary","aria-label":"like",className:t.favoriteIcon,children:Object(F.jsx)(E.a,{control:Object(F.jsx)(z.a,{icon:Object(F.jsx)(D.a,{style:{color:"white"}}),checkedIcon:Object(F.jsx)(D.a,{}),name:"checkedH"})})})]},n):Object(F.jsxs)(x.a,{elevation:1,className:t.paper,data:n,children:[Object(F.jsx)("div",{style:{display:"none"},className:"item-id",children:"id"}),Object(F.jsx)("div",{style:{display:"none"},className:"info",children:"info"}),Object(F.jsx)("h4",{children:e.name}),Object(F.jsx)(o.b,{to:"/details/".concat(e.name),children:""===e.image[0]?Object(F.jsx)("img",{src:"no-image.png",alt:"",style:{maxWidth:"100%"}}):Object(F.jsx)("img",{src:window.location.origin+e.image[0],alt:"",style:{maxWidth:"100%"}})}),Object(F.jsxs)("div",{children:[Object(F.jsxs)("small",{children:["In stock:",Object(F.jsxs)("span",{className:"item-stock",children:[" ",e.stock]})]}),Object(F.jsxs)("p",{children:["Price:",Object(F.jsxs)("strong",{style:{color:"#ff5722"},children:[Object(F.jsxs)("span",{className:"price-item",children:[" ",e.price.toLocaleString("ro")," "]}),"RON"]})]})]}),Object(F.jsx)(O.a,{color:"primary","aria-label":"like",className:t.favoriteIcon,children:Object(F.jsx)(E.a,{control:Object(F.jsx)(z.a,{icon:Object(F.jsx)(D.a,{style:{color:"white"}}),checkedIcon:Object(F.jsx)(D.a,{}),name:"checkedH"})})})]},n)}))]}),Object(F.jsx)(d.a,{container:!0,justify:"center",children:Object(F.jsx)("div",{className:t.root,children:Object(F.jsx)(u.a,{onChange:V,count:G,page:U,defaultPage:U,color:"primary",hideNextButton:!0,hidePrevButton:!0,onClick:function(e){!function(e){Y.push(e)}(e.target.innerText),window.scrollTo(0,0)}})})})]})}function B(){Object(j.i)();return Object(F.jsx)("div",{children:Object(F.jsx)("h1",{children:"Wishlist"})})}function U(){return Object(F.jsx)("div",{children:Object(F.jsx)("h1",{children:"Cart"})})}var H=n(31),G=n.n(H),V=n(47),Y=n(150),J=n(210),K=n(94),Q=(n(136),K.a.initializeApp({apiKey:"AIzaSyBiGpZD-XDZQJxbehzESPFWpxE15PMRdNE",authDomain:"online-shop-424e1.firebaseapp.com",databaseURL:"https://online-shop-424e1-default-rtdb.europe-west1.firebasedatabase.app",projectId:"online-shop-424e1",storageBucket:"online-shop-424e1.appspot.com",messagingSenderId:"284098229158",appId:"1:284098229158:web:a1ba52c92ffc5ae63c5567"})),X=Q.auth(),Z=a.a.createContext();function q(){return Object(c.useContext)(Z)}function _(e){var t=e.children,n=Object(c.useState)(),a=Object(l.a)(n,2),i=a[0],s=a[1],r=Object(c.useState)(!0),o=Object(l.a)(r,2),j=o[0],d=o[1];Object(c.useEffect)((function(){return X.onAuthStateChanged((function(e){s(e),d(!1)}))}),[]);var b={currentUser:i,signup:function(e,t){return X.createUserWithEmailAndPassword(e,t)},signin:function(e,t){return X.signInWithEmailAndPassword(e,t)},signout:function(){return X.signOut()}};return Object(F.jsx)(Z.Provider,{value:b,children:!j&&t})}var $=n(193),ee=n(217),te=Object(b.a)((function(e){return{root:{padding:e.spacing(2),display:"flex",flexDirection:"column","& > *":{margin:e.spacing(1)},"& .MuiOutlinedInput-input":{fontSize:"1em"}}}}));function ne(){var e=te(),t=Object(c.useRef)(),n=Object(c.useRef)(),a=Object(c.useRef)(),i=q(),s=i.currentUser,r=i.updateEmail,o=i.updatePassword,j=Object(c.useState)(""),d=Object(l.a)(j,2),b=d[0],u=d[1],h=Object(c.useState)(""),p=Object(l.a)(h,2),O=p[0],g=p[1],f=Object(c.useState)(!1),v=Object(l.a)(f,2),y=v[0],w=v[1];return Object(F.jsx)($.a,{style:{placeSelf:"center",maxWidth:400},children:Object(F.jsx)(x.a,{children:Object(F.jsxs)("form",{className:e.root,autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),n.current.value!==a.current.value)return u("Passwords do not match.");var c=[];w(!0),g(""),u(""),t.current.value!==s.email&&c.push(r(t.current.value)),n.current.value&&c.push(o(n.current.value)),Promise.all(c).then((function(){g("Your profile has been updated, close this message to see the changes.")})).catch((function(){g(""),u("Failed to update profile.")})).finally((function(){w(!1)})),e.target.reset()},children:[Object(F.jsx)("h2",{children:"Update Profile"}),b&&Object(F.jsx)(J.a,{severity:"error",children:b}),O&&Object(F.jsx)(J.a,{severity:"success",children:O}),Object(F.jsx)(m.a,{children:Object(F.jsx)(ee.a,{label:"Email",type:"email",variant:"outlined",autoFocus:"true",fullWidth:"true",inputRef:t,defaultValue:s&&s.email})}),Object(F.jsx)(m.a,{children:Object(F.jsx)(ee.a,{label:"Password",type:"password",variant:"outlined",fullWidth:"true",inputRef:n,placeholder:"Change (Optional)"})}),Object(F.jsx)(m.a,{children:Object(F.jsx)(ee.a,{label:"Password Confirmation",type:"password",variant:"outlined",fullWidth:"true",inputRef:a,placeholder:"Confirm Change"})}),Object(F.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",disabled:y,children:"Confirm Changes"})]})})})}var ce=n(209),ae=Object(b.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},container:{"& > *":{margin:e.spacing(1)}}}}));function ie(){var e=ae(),t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1],s=q(),r=s.currentUser,o=s.signout,d=Object(j.g)(),b=function(){var e=Object(V.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.prev=1,e.next=4,o();case 4:d.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i("Failed to sign out.");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),u=Object(c.useState)(!1),h=Object(l.a)(u,2),p=h[0],O=h[1];return Object(F.jsxs)("div",{className:e.root,children:[Object(F.jsx)("h1",{children:"Account"}),a&&Object(F.jsx)(J.a,{severity:"error",children:a}),Object(F.jsx)("strong",{children:"Email: "}),r.email,Object(F.jsxs)($.a,{className:e.container,children:[Object(F.jsx)(Y.a,{variant:"contained",color:"primary",onClick:function(){O(!0)},children:"Update Profile"}),Object(F.jsx)(Y.a,{variant:"outlined",color:"primary",onClick:b,children:"Sign Out"}),Object(F.jsx)(ce.a,{open:p,onClose:function(){O(!1)},style:{display:"flex"},children:Object(F.jsx)(ne,{})})]}),r&&"admin@admin.com"===r.email?Object(F.jsx)("h1",{children:"Adfsdfsdf"}):""]})}var se=n.p+"static/media/logo3.5c2fe216.svg",re=n(96),le=n.n(re),oe=n(66),je=n.n(oe),de=n(97),be=n.n(de),ue=n(199),he=n(103),pe=n(149),Oe=n(95),xe=n.n(Oe),me=n(198),ge=Object(b.a)((function(e){return{root:{padding:e.spacing(2),display:"flex",flexDirection:"column","& > *":{margin:e.spacing(1)},"& .MuiOutlinedInput-input":{padding:"15px 14px",fontSize:"1.3em"}}}}));function fe(e){var t=e.setAction,n=e.handleClose,a=ge(),i=Object(c.useRef)(),s=Object(c.useRef)(),r=q().signin,o=Object(c.useState)(""),d=Object(l.a)(o,2),b=d[0],u=d[1],h=Object(c.useState)(!1),p=Object(l.a)(h,2),O=p[0],g=p[1],f=Object(j.g)(),v=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,u(""),g(!0),e.next=6,r(i.current.value,s.current.value);case 6:f.push("/account"),n(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),u("Failed to sign in.");case 13:g(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsx)($.a,{style:{placeSelf:"center",maxWidth:400},children:Object(F.jsx)(x.a,{children:Object(F.jsxs)("form",{className:a.root,autoComplete:"off",onSubmit:v,children:[Object(F.jsx)("h2",{children:"Sign In"}),b&&Object(F.jsx)(J.a,{severity:"error",children:b}),Object(F.jsx)(m.a,{children:Object(F.jsx)(ee.a,{label:"Email",type:"email",variant:"outlined",autoFocus:"true",fullWidth:"true",inputRef:i})}),Object(F.jsx)(m.a,{children:Object(F.jsx)(ee.a,{label:"Password",type:"password",variant:"outlined",fullWidth:"true",inputRef:s})}),Object(F.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",disabled:O,children:"Sign In"}),Object(F.jsxs)(m.a,{style:{margin:"0 auto"},children:[Object(F.jsx)(me.a,{to:"",onClick:function(){return t("signup")},children:"Create an account."})," /\xa0",Object(F.jsx)(me.a,{to:"",onClick:function(){return t("forgotPassword")},children:"Forgot password."})]})]})})})}var ve=Object(b.a)((function(e){return{root:{padding:e.spacing(2),display:"flex",flexDirection:"column","& > *":{margin:e.spacing(1)},"& .MuiOutlinedInput-input":{padding:"15px 14px",fontSize:"1.3em"}}}}));function ye(e){var t=e.setAction,n=e.handleClose,a=ve(),i=Object(c.useRef)(),s=Object(c.useRef)(),r=Object(c.useRef)(),o=q().signup,d=Object(c.useState)(""),b=Object(l.a)(d,2),u=b[0],h=b[1],p=Object(c.useState)(!1),O=Object(l.a)(p,2),g=O[0],f=O[1],v=Object(j.g)(),y=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s.current.value===r.current.value){e.next=3;break}return e.abrupt("return",h("Passwords do not match."));case 3:return e.prev=3,h(""),f(!0),e.next=8,o(i.current.value,s.current.value);case 8:v.push("/account"),n(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),h("Failed to create an account.");case 15:f(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsx)($.a,{style:{placeSelf:"center",maxWidth:400},children:Object(F.jsx)(x.a,{children:Object(F.jsxs)("form",{className:a.root,autoComplete:"off",onSubmit:y,children:[Object(F.jsx)("h2",{children:"Sign Up"}),u&&Object(F.jsx)(J.a,{severity:"error",children:u}),Object(F.jsx)(m.a,{children:Object(F.jsx)(ee.a,{label:"Email",type:"email",variant:"outlined",autoFocus:"true",fullWidth:"true",inputRef:i})}),Object(F.jsx)(m.a,{children:Object(F.jsx)(ee.a,{label:"Password",type:"password",variant:"outlined",fullWidth:"true",inputRef:s})}),Object(F.jsx)(m.a,{children:Object(F.jsx)(ee.a,{label:"Password Confirmation",type:"password",variant:"outlined",fullWidth:"true",inputRef:r})}),Object(F.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",disabled:g,children:"Sign Up"}),Object(F.jsx)(me.a,{to:"",style:{margin:"0 auto"},onClick:function(){return t("signin")},children:"Already have an account? Sign In."})]})})})}var we=Object(b.a)((function(e){return{root:{padding:e.spacing(2),display:"flex",flexDirection:"column","& > *":{margin:e.spacing(1)},"& .MuiOutlinedInput-input":{padding:"15px 14px",fontSize:"1.3em"}}}}));function Se(e){var t=e.setAction,n=(e.handleClose,we()),a=Object(c.useRef)(),i=q().changePassword,s=Object(c.useState)(""),r=Object(l.a)(s,2),o=r[0],j=r[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),u=b[0],h=b[1],p=Object(c.useState)(!1),O=Object(l.a)(p,2),g=O[0],f=O[1],v=function(){var e=Object(V.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,h(""),j(""),f(!0),e.next=7,i(a.current.value);case 7:h("Check your inbox to change your password."),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),j("Failed to change password.");case 13:f(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsx)($.a,{style:{placeSelf:"center",maxWidth:400},children:Object(F.jsx)(x.a,{children:Object(F.jsxs)("form",{className:n.root,autoComplete:"off",onSubmit:v,children:[Object(F.jsx)("h2",{children:"Change Password"}),o&&Object(F.jsx)(J.a,{severity:"error",children:o}),u&&Object(F.jsx)(J.a,{severity:"info",children:u}),Object(F.jsx)(m.a,{children:Object(F.jsx)(ee.a,{label:"Email",type:"email",variant:"outlined",autoFocus:"true",fullWidth:"true",inputRef:a})}),Object(F.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",disabled:g,children:"Change Password"}),Object(F.jsx)(m.a,{style:{margin:"0 auto"},children:Object(F.jsx)(me.a,{onClick:function(){return t("signin")},children:"Sign In"})})]})})})}var ke=Object(b.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%",height:55,marginLeft:180},input:{marginLeft:e.spacing(1),flex:1,fontSize:"1.4rem"},iconButton:{padding:10,"& > * ":{padding:10}},divider:{height:28,margin:4},button:{padding:0}}}));function Ce(e){var t=ke(),n=Object(j.g)(),a=e.keyword,i=e.handleSearch,s=Object(c.useState)(a),r=Object(l.a)(s,2),d=r[0],b=r[1],u=Object(c.useState)(0),h=Object(l.a)(u,2),p=h[0],O=h[1],f=q().currentUser,v=Object(c.useState)(!1),y=Object(l.a)(v,2),w=y[0],S=y[1],k=Object(c.useState)("signin"),C=Object(l.a)(k,2),N=C[0],P=C[1],I=function(){S(!1)};return Object(F.jsxs)(m.a,{component:"span",m:1,display:"flex",className:"nav-bar",children:[Object(F.jsx)("img",{src:se,alt:"tech supplies logo",className:"logo"}),Object(F.jsxs)(x.a,{component:"form",className:t.root,children:[Object(F.jsx)(he.a,{className:t.input,placeholder:"Search products...",value:d,onChange:function(e){p&&clearTimeout(p),b(e.target.value),console.log(e.target.value),O(setTimeout((function(){i(e.target.value)}),1e3))}}),Object(F.jsx)(g.a,{className:t.divider,orientation:"vertical"}),Object(F.jsx)(pe.a,{type:"submit",className:t.iconButton,"aria-label":"search",onClick:function(e){e.preventDefault()},children:Object(F.jsx)(xe.a,{})})]}),Object(F.jsx)("div",{className:"nav-links",children:Object(F.jsxs)(ue.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(F.jsx)(Y.a,{className:t.button,children:Object(F.jsxs)(o.b,{to:"/",children:["Home",Object(F.jsx)(le.a,{fontSize:"small"})]})}),Object(F.jsx)(Y.a,{className:t.button,children:Object(F.jsxs)(o.b,{to:"/wishlist",children:["Wishlist",Object(F.jsx)(D.a,{fontSize:"small"})]})}),Object(F.jsx)(Y.a,{className:t.button,children:Object(F.jsxs)(o.b,{to:"/cart",children:["Cart",Object(F.jsx)(je.a,{fontSize:"small"})]})}),Object(F.jsx)(Y.a,{className:t.button,onClick:function(){f&&f.email?n.push("/account"):S(!0)},children:Object(F.jsxs)(o.b,{to:"",children:["Account",Object(F.jsx)(be.a,{fontSize:"small"})]})}),Object(F.jsx)(ce.a,{open:w,onClose:I,style:{display:"flex"},children:"signin"===N?Object(F.jsx)(fe,{setAction:P,handleClose:I}):"signup"===N?Object(F.jsx)(ye,{setAction:P,handleClose:I}):Object(F.jsx)(Se,{setAction:P,handleClose:I})})]})})]})}var Ne=n(213),Pe=n(196),Ie=n(207),Le=n(85),Re=n.n(Le),Ae=n(214),We=n(102),De=n(215),Ee=n(98),ze=n.n(Ee),Fe=Object(b.a)((function(e){return{root:{width:300},formControl:{margin:e.spacing(1),minWidth:120,spacing:8,fontSize:"0.5rem",backgroundColor:"#e1e1e1","& .MuiInputBase-root":{color:"#3f51b5",fontWeight:500,height:"30px"},"& .MuiFormLabel-root":{marginTop:"-14px"},"& .MuiInputLabel-shrink":{marginTop:"0px"}},selectEmpty:{marginTop:e.spacing(2)},divider:{height:28,margin:4},inputNumber:{"& input":{color:"#3f51b5"}}}}));function Me(e){var t=Fe(),n=e.product,c=e.handleFiltered,a=e.maxprice,i=e.handleMaxprice,s=e.handleSort,r=e.sorting;return Object(F.jsxs)("div",{className:"filter-bar",children:[Object(F.jsxs)(Pe.a,{variant:"outlined",className:t.formControl,children:[Object(F.jsx)(Ne.a,{id:"demo-simple-select-outlined-label",children:"Phones"}),Object(F.jsxs)(Ie.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:n,onChange:c,label:"Phones",children:[Object(F.jsx)(Ae.a,{value:"",children:Object(F.jsx)("em",{children:"None"})}),Object(F.jsx)(Ae.a,{value:"Phone Samsung",children:"Samsung"}),Object(F.jsx)(Ae.a,{value:"Phone Apple",children:"Apple"}),Object(F.jsx)(Ae.a,{value:"Phone Huawei",children:"Huawei"})]})]}),Object(F.jsxs)(Pe.a,{variant:"outlined",className:t.formControl,children:[Object(F.jsx)(Ne.a,{id:"demo-simple-select-outlined-label",children:"Laptops"}),Object(F.jsxs)(Ie.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:n,onChange:c,label:"Laptops",children:[Object(F.jsx)(Ae.a,{value:"",children:Object(F.jsx)("em",{children:"None"})}),Object(F.jsx)(Ae.a,{value:"Laptop Asus",children:"Asus"}),Object(F.jsx)(Ae.a,{value:"Laptop Acer",children:"Acer"}),Object(F.jsx)(Ae.a,{value:"Laptop HP",children:"HP"})]})]}),Object(F.jsxs)(Pe.a,{variant:"outlined",className:t.formControl,children:[Object(F.jsx)(Ne.a,{id:"demo-simple-select-outlined-label",children:"TV's"}),Object(F.jsxs)(Ie.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:n,onChange:c,label:"TV's",children:[Object(F.jsx)(Ae.a,{value:"",children:Object(F.jsx)("em",{children:"None"})}),Object(F.jsx)(Ae.a,{value:"Tv Samsung",children:"Samsung"}),Object(F.jsx)(Ae.a,{value:"Tv LG",children:"LG"}),Object(F.jsx)(Ae.a,{value:"Tv Philips",children:"Philips"})]})]}),Object(F.jsx)(g.a,{className:t.divider,orientation:"vertical"}),Object(F.jsx)(We.a,{id:"discrete-slider",color:"primary",children:"Max\xa0price:"}),Object(F.jsx)(De.a,{"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",value:a,onChange:i,step:1e3,marks:[{value:1e3,label:"1000 RON"},{value:8e3,label:"8.000 RON"},{value:16e3,label:"ALL"}],min:1e3,max:16e3,style:{margin:"-20px 160px 0 40px"}}),Object(F.jsx)(Y.a,{variant:"outlined",color:"primary",style:{position:"absolute",right:10,height:30},onClick:s,children:1===r?Object(F.jsxs)(F.Fragment,{children:["No Sort\xa0\xa0\xa0\xa0",Object(F.jsx)(ze.a,{})]}):2===r?Object(F.jsxs)(F.Fragment,{children:["Sort Asc\xa0\xa0",Object(F.jsx)(Re.a,{style:{transform:"rotate(180deg)"}})]}):Object(F.jsxs)(F.Fragment,{children:["Sort Desc",Object(F.jsx)(Re.a,{})]})})]})}var Te=n(200),Be=n(197),Ue=n.p+"static/media/xr_1.c408715b.jpg",He=n.p+"static/media/img.38bc77a3.jpg",Ge=Object(b.a)((function(e){return{root:{paddingBottom:20},container:{display:"flex",overflowY:"hidden",overflowX:"auto",gap:20,padding:"0 20px",margin:"0 auto",maxWidth:1500,"& > *":{padding:10,minWidth:200},"& *":{margin:0}}}}));function Ve(){var e=Ge(),t=a.a.useState(!1),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(F.jsx)("section",{className:"recent-viewed-bar",children:Object(F.jsxs)("div",{className:e.root,children:[Object(F.jsx)(E.a,{control:Object(F.jsx)(Te.a,{checked:c,onChange:function(){i((function(e){return!e}))}}),label:"Recent viewed products.",style:{marginLeft:20}}),Object(F.jsxs)("div",{className:e.container,children:[Object(F.jsx)(Be.a,{in:c,children:Object(F.jsxs)(x.a,{elevation:1,children:[Object(F.jsx)("h5",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?"}),Object(F.jsx)(o.b,{to:"details.html?index={index}",children:Object(F.jsx)("img",{alt:"",src:He,style:{width:"100%"}})})]})}),Object(F.jsx)(Be.a,Object(r.a)(Object(r.a)({in:c,style:{transformOrigin:"0 0 0"}},c?{timeout:1e3}:{}),{},{children:Object(F.jsxs)(x.a,{elevation:1,children:[Object(F.jsx)("h5",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?"}),Object(F.jsx)(o.b,{to:"details.html?index={index}",children:Object(F.jsx)("img",{alt:"",src:Ue,style:{width:"100%"}})})]})})),Object(F.jsx)(Be.a,Object(r.a)(Object(r.a)({in:c,style:{transformOrigin:"0 0 0"}},c?{timeout:1200}:{}),{},{children:Object(F.jsxs)(x.a,{elevation:1,children:[Object(F.jsx)("h5",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?"}),Object(F.jsx)(o.b,{to:"details.html?index={index}",children:Object(F.jsx)("img",{alt:"",src:He,style:{width:"100%"}})})]})})),Object(F.jsx)(Be.a,Object(r.a)(Object(r.a)({in:c,style:{transformOrigin:"0 0 0"}},c?{timeout:1400}:{}),{},{children:Object(F.jsxs)(x.a,{elevation:1,children:[Object(F.jsx)("h5",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?"}),Object(F.jsx)(o.b,{to:"details.html?index={index}",children:Object(F.jsx)("img",{alt:"",src:Ue,style:{width:"100%"}})})]})})),Object(F.jsx)(Be.a,Object(r.a)(Object(r.a)({in:c,style:{transformOrigin:"0 0 0"}},c?{timeout:1600}:{}),{},{children:Object(F.jsxs)(x.a,{elevation:1,children:[Object(F.jsx)("h5",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?"}),Object(F.jsx)(o.b,{to:"details.html?index={index}",children:Object(F.jsx)("img",{alt:"",src:He,style:{width:"100%"}})})]})})),Object(F.jsx)(Be.a,Object(r.a)(Object(r.a)({in:c,style:{transformOrigin:"0 0 0"}},c?{timeout:1800}:{}),{},{children:Object(F.jsxs)(x.a,{elevation:1,children:[Object(F.jsx)("h5",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, repellendus?"}),Object(F.jsx)(o.b,{to:"details.html?index={index}",children:Object(F.jsx)("img",{alt:"",src:Ue,style:{width:"100%"}})})]})}))]})]})})}var Ye=n(86),Je=n.n(Ye),Ke=Object(b.a)((function(){return{footerButton:{"& > *":{width:"100%",margin:0,borderRadius:0,fontSize:10,padding:10,backgroundColor:"rgb(34 37 63)","&:hover":{backgroundColor:"rgb(44 48 82)"}}},footer:{display:"flex",width:"100%",maxWidth:1200,margin:"0 auto",color:"grey",flexWrap:"wrap","& h4":{letterSpacing:1,margin:"10px 0",textAlign:"center",textDecoration:"underline"},"& > div":{display:"flex",flex:"1 1 400px",justifyContent:"space-around",margin:"40px 0"}},links:{display:"flex",flexDirection:"column","& span":{lineHeight:1.5,textAlign:"center","&:hover":{color:"lightgrey",cursor:"pointer"}}}}}));function Qe(){var e=Ke(),t=Object(j.h)();return Object(F.jsxs)("section",{style:{backgroundColor:"rgb(25 28 49)"},children:[Object(F.jsx)("div",{className:e.footerButton,children:t.pathname.length<=2?Object(F.jsx)(Y.a,{href:"",style:{color:"white"},onClick:function(){return window.scrollTo(0,0)},endIcon:Object(F.jsx)(Je.a,{style:{fontSize:16}}),children:Object(F.jsx)("p",{children:"Back to top"})}):Object(F.jsx)(Y.a,{disabled:!0,style:{color:"grey"},endIcon:Object(F.jsx)(Je.a,{style:{fontSize:16}}),children:Object(F.jsx)("p",{children:"Back to top"})})}),Object(F.jsxs)("div",{className:e.footer,children:[Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("h4",{children:"POPULAR SEARCHES"}),Object(F.jsxs)("div",{className:e.links,children:[Object(F.jsx)("span",{children:"Cheap phones"}),Object(F.jsx)("span",{children:"Chinesse laptops"}),Object(F.jsx)("span",{children:"4K TV's"}),Object(F.jsx)("span",{children:"Gaming laptops"})]})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h4",{children:"OUR COMPANY"}),Object(F.jsxs)("div",{className:e.links,children:[Object(F.jsx)("span",{children:"About Us"}),Object(F.jsx)("span",{children:"Contact Us"}),Object(F.jsx)("span",{children:"Health & Safety"}),Object(F.jsx)("span",{children:"Media Center"}),Object(F.jsx)("span",{children:"Trade Enquiries"}),Object(F.jsx)("span",{children:"Latest News"})]})]})]}),Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("h4",{children:"YOUR ORDER"}),Object(F.jsxs)("div",{className:e.links,children:[Object(F.jsx)("span",{children:"Delivery & Return"}),Object(F.jsx)("span",{children:"Terms & Conditions"}),Object(F.jsx)("span",{children:"Saved Items"})]})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("h4",{children:"HELP & INFORMATION"}),Object(F.jsxs)("div",{className:e.links,children:[Object(F.jsx)("span",{children:"Price Promise"}),Object(F.jsx)("span",{children:"Cookie Policy"}),Object(F.jsx)("span",{children:"Privacy Policy"}),Object(F.jsx)("span",{children:"Site Map"}),Object(F.jsx)("span",{children:"Quality Policy"})]})]})]})]})]})}var Xe=n(216);function Ze(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(!0),r=Object(l.a)(s,2),o=r[0],j=r[1],d=Object(c.useState)(null),b=Object(l.a)(d,2),u=b[0],h=b[1];return Object(c.useEffect)((function(){console.log("fetching data");var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Couldn't get the data from the server.");return e.json()})).then((function(e){i(e.filter(Boolean)),j(!1),h(null)})).catch((function(e){"AbortError"===e.name&&console.log("fetch aborted"),h(e.message),j(!1)})),function(){return t.abort()}}),[e]),{data:a,loading:o,error:u}}var qe=n(99),_e=n.n(qe);function $e(e){for(var t=e.product,n=[],c=0;c<t.image.length;c++){if(""===t.image[1]){n.push({original:"/no-image.png",thumbnail:"/no-image.png"});break}""!==t.image[c]&&n.push({original:t.image[c],thumbnail:t.image[c]})}return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(_e.a,Object(r.a)(Object(r.a)({},{autoPlay:!0,showIndex:!0,showBullets:!0,infinite:!0,showThumbnails:!0,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!0,showNav:!0,isRTL:!1,slideDuration:500,slideInterval:4e3,slideOnThumbnailOver:!1,thumbnailPosition:"bottom",showVideo:{},useWindowKeyDown:!0,lazyLoad:!0}),{},{items:n}))})}var et=n(194),tt=n(100),nt=n.n(tt),ct=n(201),at=Object(b.a)((function(e){return{root:{"& h3":{margin:"5px 0"}},input:{width:42},buttons:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{margin:e.spacing(1)},"& > div":{width:"100%",display:"flex"},"& button":{flex:1,color:"white","& svg":{marginLeft:5}}}}}));function it(e){var t=e.product,n=at(),i=a.a.useState(0),s=Object(l.a)(i,2),r=s[0],o=s[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),u=b[0],h=b[1],p=Object(c.useState)(!1),O=Object(l.a)(p,2),x=O[0],m=O[1];return Object(F.jsxs)("section",{className:n.root,children:[Object(F.jsxs)("div",{children:[Object(F.jsxs)("small",{children:["In stock:",Object(F.jsxs)("span",{children:[" ",t.stock]})]}),Object(F.jsxs)("h3",{children:["Price:",Object(F.jsxs)("strong",{style:{color:"#ff5722"},children:[Object(F.jsxs)("span",{children:[" ",t.price.toLocaleString("ro")," "]}),"RON"]})]})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)(We.a,{gutterBottom:!0,children:"Quantity:"}),Object(F.jsxs)(d.a,{container:!0,spacing:2,alignItems:"center",children:[Object(F.jsx)(d.a,{item:!0,children:Object(F.jsx)(nt.a,{color:"primary",fontSize:"medium"})}),Object(F.jsx)(d.a,{item:!0,xs:!0,children:Object(F.jsx)(De.a,{value:"number"===typeof r?r:0,onChange:function(e,t){o(t)},"aria-labelledby":"input-slider",max:t.stock})}),Object(F.jsx)(d.a,{item:!0,children:Object(F.jsx)(et.a,{className:n.input,value:r,margin:"dense",onChange:function(e){o(""===e.target.value?"":Number(e.target.value))},onBlur:function(){r<0?o(0):r>t.stock&&o(t.stock)},inputProps:{step:1,min:0,max:t.stock,type:"number","aria-labelledby":"input-slider"}})})]}),Object(F.jsxs)("div",{className:n.buttons,children:[Object(F.jsx)(Y.a,{variant:"contained",color:"primary",style:{padding:0},children:Object(F.jsxs)(ct.a,{selected:u,onChange:function(){h(!u)},children:[Object(F.jsx)(We.a,{style:{color:"white"},children:"Add to Cart"}),u?Object(F.jsx)(je.a,{style:{color:"lightgreen"}}):Object(F.jsx)(je.a,{})]})}),Object(F.jsx)(Y.a,{variant:"contained",style:{padding:0},children:Object(F.jsxs)(ct.a,{selected:x,onChange:function(){m(!x)},children:[Object(F.jsx)(We.a,{style:{color:"white"},children:"Add to Wishlist"}),x?Object(F.jsx)(D.a,{color:"secondary"}):Object(F.jsx)(D.a,{})]})})]})]})]})}var st=Object(b.a)((function(e){return{root:{display:"flex",padding:20,gap:20,margin:"0 auto",maxWidth:1500},aside:{minWidth:500,display:"flex",flexDirection:"column",justifyContent:"space-between","& h3, & h2":{margin:"20px 0 5px 0"},"& p":{letterSpacing:1,wordSpacing:2,lineHeight:1,color:"#1c54b2",fontWeight:500}},rating:{margin:"20px 0",width:200,display:"flex",alignItems:"center","& > span":{color:"#33c9dc",textDecoration:"underline"}},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},top:{color:"#1af0ff",animationDuration:"550ms",textAlign:"center"},circle:{strokeLinecap:"round"}}})),rt={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function lt(){var e=Ze("https://online-shop-424e1-default-rtdb.europe-west1.firebasedatabase.app/Products/.json"),t=e.data,n=e.loading,a=Object(c.useState)(!0),i=Object(l.a)(a,1)[0],s=Object(j.h)(),r=decodeURI(s.pathname.substr(9)),o=t.findIndex((function(e){return e.name===r})),d=t[o],b=function(e){var t=Object.keys(e);return t[Math.floor(Math.random()*t.length)]}(rt),u=st(),O=Object(c.useState)(b),x=Object(l.a)(O,1)[0],f=Object(c.useState)(-1),v=Object(l.a)(f,1)[0];return Object(F.jsxs)("main",{className:u.root,children:[n&&Object(F.jsx)("div",{children:Object(F.jsx)(h.a,{className:u.backdrop,open:i,children:Object(F.jsx)(p.a,{variant:"indeterminate",disableShrink:!0,className:u.top,classes:{circle:u.circle},size:40,thickness:4})})}),d&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("aside",{className:u.aside,children:Object(F.jsx)($e,{product:d})}),Object(F.jsxs)("aside",{className:u.aside,children:[Object(F.jsxs)("section",{children:[Object(F.jsx)("h2",{children:d.name}),Object(F.jsx)("i",{children:d.description}),Object(F.jsx)(g.a,{style:{maxWidth:"100%"}}),Object(F.jsxs)("div",{className:u.rating,children:[Object(F.jsx)(Xe.a,{name:"hover-feedback",value:b,precision:.5}),null!==x&&Object(F.jsx)(m.a,{ml:2,mr:2,style:{fontStyle:"italic"},children:rt[-1!==v?v:x]}),Object(F.jsx)("span",{children:Math.floor(1558*Math.random())}),Object(F.jsx)("span",{children:"\xa0ratings"})]}),Object(F.jsx)("h3",{children:"Specifications:"}),Object(F.jsx)(g.a,{style:{maxWidth:"100%"}}),d.specs.map((function(e){return Object(F.jsx)("p",{children:e})}))]}),Object(F.jsx)(it,{product:d})]})]})]})}var ot=n(205),jt=n(204),dt=n(202),bt=n(203),ut=n(3);function ht(e){var t=e.component,n=Object(ut.a)(e,["component"]),c=q().currentUser;return Object(F.jsx)(j.b,Object(r.a)(Object(r.a)({},n),{},{render:function(e){return c?Object(F.jsx)(t,Object(r.a)({},e)):Object(F.jsx)(j.a,{to:"/"})}}))}var pt=function(){var e=Ze("https://online-shop-424e1-default-rtdb.europe-west1.firebasedatabase.app/Products/.json"),t=e.data,n=e.loading,i=Object(c.useState)(""),s=Object(l.a)(i,2),d=s[0],b=s[1],u=Object(c.useState)(""),h=Object(l.a)(u,2),p=h[0],O=h[1],x=Object(c.useState)(16e3),m=Object(l.a)(x,2),g=m[0],f=m[1],v=Object(c.useState)(1),y=Object(l.a)(v,2),w=y[0],S=y[1],k=t.filter((function(e){return e.id.includes(p)})).filter((function(e){return 0===g?e.price>0:e.price<=g})).filter((function(e){return e.name.replace(/\s/g,"").toLowerCase().match(d.replace(/\s/g,"").toLowerCase())||e.specs.some((function(e){return e.replace(/\s/g,"").toLowerCase().match(d.replace(/\s/g,"").toLowerCase())}))||e.description.replace(/\s/g,"").toLowerCase().match(d.replace(/\s/g,"").toLowerCase())})),C={keyword:d,handleSearch:function(e){b(e)}},N={product:p,maxprice:g,handleFiltered:function(e){O(e.target.value)},handleMaxprice:function(e,t){f(t)},handleSort:function(){S(1===w?2:2===w?3:1)},sorting:w},P={product:p,maxprice:g,newData:k,loading:n,sorting:w,keyword:d};function I(e){var t=e.children,n=e.window,c=Object(dt.a)({target:n?n():void 0});return Object(F.jsx)(bt.a,{appear:!1,direction:"down",in:!c,children:t})}return Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(o.a,{basename:"/react-web-shop",children:Object(F.jsx)(a.a.Fragment,{children:Object(F.jsxs)(_,{children:[Object(F.jsx)(jt.a,{}),Object(F.jsx)(I,{children:Object(F.jsxs)(ot.a,{children:[Object(F.jsx)(Ce,Object(r.a)({},C)),Object(F.jsx)(Me,Object(r.a)({},N))]})}),Object(F.jsxs)(j.d,{children:[Object(F.jsx)(j.b,{path:"/wishlist",children:Object(F.jsx)(B,{})}),Object(F.jsx)(j.b,{path:"/cart",children:Object(F.jsx)(U,{})}),Object(F.jsx)(ht,{path:"/account",children:Object(F.jsx)(ie,{})}),Object(F.jsx)(j.b,{path:"/details",children:Object(F.jsx)(lt,{})}),Object(F.jsx)(j.b,{path:["/","/1"],children:Object(F.jsx)(T,Object(r.a)({},P))})]}),Object(F.jsx)(Ve,{}),Object(F.jsx)(Qe,{})]})})})})};s.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(pt,{})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.3b9e722f.chunk.js.map