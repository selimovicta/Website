(this.webpackJsonpservo=this.webpackJsonpservo||[]).push([[0],{62:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},90:function(e,t,a){},94:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var c,n=a(0),s=a.n(n),r=a(20),o=a.n(r),i=(a(79),a(80),a(81),a(68)),l=(a(82),a(73)),j=a(12),d=a(99),u=a(6),m=a(9),b=a(10),p=a.n(b),h=a(13),O=a(36),x=Object(O.b)("users/signupUser",function(){var e=Object(h.a)(p.a.mark((function e(t,a){var c,n,s,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.email,n=t.password,s=t.name,e.prev=1,e.next=4,fetch("".concat("http://127.0.0.1:8000","/api/accounts/sign-up"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:c,password:n,name:s})});case 4:return r=e.sent,e.next=7,r.json();case 7:if(o=e.sent,200!==r.status){e.next=20;break}return localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("userId"),localStorage.removeItem("user_name"),localStorage.setItem("token",o.token),localStorage.setItem("user",o.user),localStorage.setItem("userId",o.user.id),localStorage.setItem("user_name",o.user.name),e.abrupt("return",{user:o.user});case 20:return e.abrupt("return",a.rejectWithValue(o));case 21:e.next=26;break;case 23:return e.prev=23,e.t0=e.catch(1),e.abrupt("return",a.rejectWithValue(e.t0.response.data));case 26:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(t,a){return e.apply(this,arguments)}}()),g=Object(O.b)("users/login",function(){var e=Object(h.a)(p.a.mark((function e(t,a){var c,n,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.email,n=t.password,e.prev=1,e.next=4,fetch("".concat("http://127.0.0.1:8000","/api/accounts/login/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:c,password:n})});case 4:return s=e.sent,e.next=7,s.json();case 7:if(r=e.sent,200!==s.status){e.next=20;break}return localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("userId"),localStorage.removeItem("user_name"),localStorage.setItem("user",r.user.image),localStorage.setItem("token",r.token),localStorage.setItem("userId",r.user.id),localStorage.setItem("user_name",r.user.name),e.abrupt("return",r);case 20:return e.abrupt("return",a.rejectWithValue(r));case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),a.rejectWithValue(e.t0.response.data);case 26:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(t,a){return e.apply(this,arguments)}}()),f=Object(O.c)({name:"users",initialState:{user:"",isFetching:!1,isSuccess:!1,isError:!1,errorMessage:"",errors:{},token:""},reducers:{clearState:function(e){return e.isError=!1,e.isSuccess=!1,e.isFetching=!1,e}},extraReducers:(c={},Object(m.a)(c,x.fulfilled,(function(e,t){var a=t.payload;console.log("payload",a),e.isFetching=!1,e.isSuccess=!0,e.user=a.user,e.token=a.token})),Object(m.a)(c,x.pending,(function(e){e.isFetching=!0})),Object(m.a)(c,x.rejected,(function(e,t){var a=t.payload;e.isFetching=!1,e.isError=!0,e.errorMessage=a.message,e.errors=a.errors})),Object(m.a)(c,g.fulfilled,(function(e,t){var a=t.payload;return e.user=a.user,e.isFetching=!1,e.isSuccess=!0,e.errorMessage="",e.token=a.token,e})),Object(m.a)(c,g.rejected,(function(e,t){var a=t.payload;console.log("payload",a),e.isFetching=!1,e.isError=!0,e.errorMessage=a.error})),Object(m.a)(c,g.pending,(function(e){e.isFetching=!0})),c)}),v=f.actions.clearState,N=function(e){return e.user},y=a(24),S=a(1),E=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("user_name"),a=localStorage.getItem("userId"),c=Object(u.g)(),n=Object(y.b)();return Object(S.jsx)(i.a,{fluid:!0,className:"flex-column g-0 ",children:Object(S.jsx)(l.a,{className:"w-100 p-2 bg-light",children:Object(S.jsxs)("div",{className:"collapse navbar-collapse",children:[Object(S.jsx)("ul",{className:"navbar-nav me-auto",children:Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)("a",{href:"/users/".concat(a),className:"nav-link",children:t})})}),Object(S.jsx)("ul",{className:"navbar-nav ms-auto",children:e?Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(d.a,{className:"nav-link logout-btn",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("userId"),localStorage.removeItem("user_name"),c("/log-in"),n(v())},children:"Logout"})}):Object(S.jsxs)(s.a.Fragment,{children:[Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(j.b,{className:"nav-link",to:"/sign-up",children:"Sign up"})}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(j.b,{className:"nav-link",to:"/log-in",children:"Login"})})]})})]})})})},w=a(3),I=a(2),A=(a(90),function(e){return Object(S.jsx)("div",{className:"auth-form-holder flex-column",children:e.children})}),k=a(18),T=a(19),_=function(e){if(e.length>0){return/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(e)?"":"Please enter a valid Email"}},C=function(e){return e.length<6?"Password must be atleast 6 characters long.":e.length>255?"Password is too long max of 255 characters is allowed.":""},L=function(e){if(e.length>0){return/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(e)?"":"Please enter a valid Name"}},D={email:"",emailError:"",password:"",passwordError:"",submitReady:!1,name:"",nameError:""},G=function(e,t){switch(t.type){case"TOGGLE_SUBMIT_BTN_DISABLED":return Object(I.a)(Object(I.a)({},e),{},{submitReady:t.payload});case"EMAIL_CHANGE":return Object(I.a)(Object(I.a)({},e),{},{email:t.payload});case"VALIDATE_EMAIL":return Object(I.a)(Object(I.a)({},e),{},{emailError:_(t.payload)});case"NAME_CHANGE":return Object(I.a)(Object(I.a)({},e),{},{name:t.payload});case"VALIDATE_NAME":return Object(I.a)(Object(I.a)({},e),{},{nameError:L(t.payload)});case"PASSWORD_CHANGE":return Object(I.a)(Object(I.a)({},e),{},{password:t.payload});case"VALIDATE_PASSWORD":return Object(I.a)(Object(I.a)({},e),{},{passwordError:C(t.payload)});default:return Object(I.a)({},e)}},B=function(){var e=Object(n.useReducer)(G,D),t=Object(w.a)(e,2),a=t[0],c=t[1],s=Object(y.b)(),r=Object(u.g)(),o=Object(y.c)(N),i=o.isSuccess,l=o.isError,d=o.errors;Object(n.useEffect)((function(){return function(){c(v())}}),[]),Object(n.useEffect)((function(){""===a.emailError&&""===a.passwordError&&""===a.nameError&&a.password.length>5&&a.email.length>2?c({type:"TOGGLE_SUBMIT_BTN_DISABLED",payload:!0}):c({type:"TOGGLE_SUBMIT_BTN_DISABLED",payload:!1})}),[a.email,a.password,a.name]),Object(n.useEffect)((function(){i&&r("/")}),[i,l]);var m=function(e){"email"===e.target.name?(c({type:"VALIDATE_EMAIL",payload:e.target.value}),c({type:"EMAIL_CHANGE",payload:e.target.value})):"name"===e.target.name?(c({type:"VALIDATE_NAME",payload:e.target.value}),c({type:"NAME_CHANGE",payload:e.target.value})):(c({type:"VALIDATE_PASSWORD",payload:e.target.value}),c({type:"PASSWORD_CHANGE",payload:e.target.value}))};return Object(S.jsx)(A,{children:Object(S.jsxs)("form",{id:"sign-up-form",onSubmit:function(e){e.preventDefault();var t={email:a.email,password:a.password,name:a.name};s(x(t))},children:[Object(S.jsx)("div",{className:"form-group",children:Object(S.jsx)("h2",{className:"text-left",children:"Create Account"})}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("input",{type:"text",className:"form-control inputText \n            ".concat(a.email.length>1&&""!==a.emailError?"inputText-border-danger":"","\n            ").concat(a.email.length>1&&""===a.emailError?"inputText-border-success":"","\n            "),name:"email",value:a.email,onChange:m,required:!0}),Object(S.jsx)("span",{className:"floating-label",children:"Email"}),Object(S.jsxs)("span",{className:"text-danger mt-1 d-block",children:[""!==a.emailError&&Object(S.jsx)(k.a,{icon:T.c})," ",a.emailError,d.email]})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("input",{className:"form-control inputText \n          ".concat(a.name.length>1&&""!==a.nameError?"inputText-border-danger":"","\n          ").concat(a.name.length>1&&""===a.nameError?"inputText-border-success":"","\n          "),type:"text",name:"name",onChange:m,required:!0}),Object(S.jsx)("span",{className:"floating-label",children:"Name"}),Object(S.jsxs)("span",{className:"text-danger mt-1 d-block",children:[""!==a.nameError&&Object(S.jsx)(k.a,{icon:T.c})," ",a.nameError]})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("input",{className:"form-control inputText \n          ".concat(a.password.length>1&&""!==a.passwordError?"inputText-border-danger":"","\n          ").concat(a.password.length>1&&""===a.passwordError?"inputText-border-success":"","\n          "),type:"password",name:"password",onChange:m,required:!0}),Object(S.jsx)("span",{className:"floating-label",children:"Password"}),Object(S.jsxs)("span",{className:"text-danger mt-1 d-block",children:[""!==a.passwordError&&Object(S.jsx)(k.a,{icon:T.c})," ",a.passwordError]})]}),Object(S.jsx)("button",{className:"auth-btn btn",id:"sign-up-button",disabled:!a.submitReady,children:"Sign Up"}),Object(S.jsx)("hr",{}),Object(S.jsxs)("span",{children:["Already have an account?"," ",Object(S.jsxs)(j.b,{to:"/log-in/",children:["Sign in here ",Object(S.jsx)(k.a,{icon:T.a,size:"xs"})]})]})]})})},M={email:"",emailError:"",password:"",passwordError:"",submitReady:!1},P=function(e,t){switch(t.type){case"TOGGLE_SUBMIT_BTN_DISABLED":return Object(I.a)(Object(I.a)({},e),{},{submitReady:t.payload});case"EMAIL_CHANGE":return Object(I.a)(Object(I.a)({},e),{},{email:t.payload});case"VALIDATE_EMAIL":return Object(I.a)(Object(I.a)({},e),{},{emailError:_(t.payload)});case"PASSWORD_CHANGE":return Object(I.a)(Object(I.a)({},e),{},{password:t.payload});case"VALIDATE_PASSWORD":return Object(I.a)(Object(I.a)({},e),{},{passwordError:C(t.payload)});default:return e}},R=function(){var e=Object(n.useReducer)(P,M),t=Object(w.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){""===a.emailError&&""===a.passwordError&&a.password.length>5&&a.email.length>2?c({type:"TOGGLE_SUBMIT_BTN_DISABLED",payload:!0}):c({type:"TOGGLE_SUBMIT_BTN_DISABLED",payload:!1})}),[a.email,a.password]);var s=function(e){"email"===e.target.name?(c({type:"VALIDATE_EMAIL",payload:e.target.value}),c({type:"EMAIL_CHANGE",payload:e.target.value})):(c({type:"VALIDATE_PASSWORD",payload:e.target.value}),c({type:"PASSWORD_CHANGE",payload:e.target.value}))},r=Object(y.b)(),o=Object(u.g)(),i=Object(y.c)(N),l=(i.isFetching,i.isSuccess),d=i.isError,m=i.errorMessage;return Object(n.useEffect)((function(){l&&o("/")}),[l,d]),Object(S.jsx)(A,{children:Object(S.jsxs)("form",{id:"login-form",onSubmit:function(e){e.preventDefault();var t={email:a.email,password:a.password};r(g(t))},children:[Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("h2",{className:"text-left",children:"Sign In"}),Object(S.jsx)("span",{className:"text-danger mt-1 d-block",children:m})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("input",{type:"text",className:"form-control inputText \n            ".concat(a.email.length>1&&""!==a.emailError?"inputText-border-danger":"","\n            ").concat(a.email.length>1&&""===a.emailError?"inputText-border-success":"","\n            "),name:"email",value:a.email,onChange:s,required:!0}),Object(S.jsx)("span",{className:"floating-label",children:"Enter your Email"}),Object(S.jsxs)("span",{className:"text-danger mt-1 d-block",children:[""!==a.emailError&&Object(S.jsx)(k.a,{icon:T.c})," ",a.emailError]})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("input",{className:"form-control inputText \n            ".concat(a.password.length>1&&""!==a.passwordError?"inputText-border-danger":"","\n            ").concat(a.password.length>1&&""===a.passwordError?"inputText-border-success":"","\n            "),type:"password",name:"password",onChange:s,required:!0}),Object(S.jsx)("span",{className:"floating-label",children:"Password"}),Object(S.jsxs)("span",{className:"text-danger mt-1 d-block",children:[""!==a.passwordError&&Object(S.jsx)(k.a,{icon:T.c})," ",a.passwordError]})]}),Object(S.jsx)("button",{className:"auth-btn btn",disabled:!a.submitReady,id:"sign-in-button",children:"Sign In"}),Object(S.jsx)("hr",{}),Object(S.jsxs)("span",{children:["Dont have an account?",Object(S.jsxs)(j.b,{to:"/sign-up/",children:[" ","Sign up here ",Object(S.jsx)(k.a,{icon:T.a,size:"xs"})]})]})]})})},U=(a(94),a(29)),V=a(51),W=a(101),z=a(72),F=(a(62),function(e){var t=e.comment;return Object(S.jsx)("div",{children:Object(S.jsxs)("div",{className:"timeline-header comment-holder",children:[Object(S.jsx)("img",{src:"".concat("http://127.0.0.1:8000").concat(t.owner.image),alt:"Admin",className:" userimage"}),Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{className:"username d-block",children:Object(S.jsx)("a",{href:"/users/".concat(t.owner.id),children:t.owner.name})}),Object(S.jsx)("span",{className:"post-date",children:t.text})]})]})})}),H=function(e){var t=e.comments,a=Object(n.useState)(!1),c=Object(w.a)(a,2),s=c[0],r=c[1],o=Object(n.useState)(Object(U.a)(t.slice(-2))),i=Object(w.a)(o,2),l=i[0],j=i[1];return Object(n.useEffect)((function(){j(s?t:Object(U.a)(t.slice(-2)))}),[s,t]),Object(S.jsxs)("div",{children:[Object(S.jsx)("h5",{children:"Comments"}),l.map((function(e){return Object(S.jsx)(F,{comment:e})})),t.length>2?Object(S.jsx)("span",{onClick:function(){return r(!s)},className:"view_all_comments",children:s?"View less comments":"View all comments"}):null]})},J=function(e){var t=Object(n.useRef)(null),a=e.details,c=Object(n.useState)(a.likes),s=Object(w.a)(c,2),r=s[0],o=s[1],i=Object(n.useState)(!1),l=Object(w.a)(i,2),j=l[0],d=l[1],u=Object(n.useState)(a.comments),m=Object(w.a)(u,2),b=m[0],O=m[1],x=Object(n.useState)(""),g=Object(w.a)(x,2),f=g[0],v=g[1],N=localStorage.getItem("user"),y=localStorage.getItem("userId"),E=a.id,I=function(e){return e.liker!==y},A=function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j?(t=r.filter(I),o(t),d(!1),fetch("".concat("http://127.0.0.1:8000","/api/posts/like/").concat(E),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))):(o([].concat(Object(U.a)(r),[{liker:y}])),fetch("".concat("http://127.0.0.1:8000","/api/posts/like/").concat(E),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==f&&(O([].concat(Object(U.a)(b),[{text:f,owner:{image:localStorage.getItem("user"),name:localStorage.getItem("user_name")}}])),fetch("".concat("http://127.0.0.1:8000","/api/posts/comment/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify({text:f,post_id:a.id})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){!function(){var e,t=Object(V.a)(r);try{for(t.s();!(e=t.n()).done;)e.value.liker===y&&d(!0)}catch(a){t.e(a)}finally{t.f()}}()}),[r]);return Object(S.jsx)(W.a,{as:"ul",className:"mt-4",children:Object(S.jsx)(z.a,{as:"li",children:Object(S.jsxs)("div",{className:"timeline-body",children:[Object(S.jsxs)("div",{className:"timeline-header",children:[Object(S.jsx)("img",{src:"".concat("http://127.0.0.1:8000").concat(a.owner.image),alt:"post image",className:"rounded-circle userimage"}),Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{className:"username d-block",children:Object(S.jsx)("a",{href:"/users/".concat(a.owner.id),children:a.owner.name})}),Object(S.jsx)("span",{className:"post-date",children:a.created})]})]}),Object(S.jsxs)("div",{className:"timeline-content",children:[Object(S.jsx)("p",{children:a.text}),Object(S.jsx)("div",{className:"w-100 post-image-holder",children:a.image?Object(S.jsx)("img",{src:"".concat("http://127.0.0.1:8000").concat(a.image),alt:"Admin",className:"post-image"}):null})]}),Object(S.jsxs)("div",{className:"post-stats",children:[Object(S.jsxs)("span",{children:[" ",Object(S.jsx)(k.a,{icon:T.d,className:"comment-icon stat-icon me-1"}),r.length]}),Object(S.jsxs)("span",{children:[b.length," Comments"]})]}),Object(S.jsxs)("div",{className:"timeline-footer",children:[Object(S.jsxs)("span",{className:"footer-btn ".concat(j?"liked":"not-liked"),onClick:A,children:[Object(S.jsx)(k.a,{icon:T.d,className:"comment-icon stat-icon ".concat(j?"liked":"not-liked")}),"Like"]}),Object(S.jsxs)("span",{className:"footer-btn",onClick:function(){t.current.focus()},children:[Object(S.jsx)(k.a,{icon:T.b,className:"comment-icon stat-icon"}),"Comment"]})]}),Object(S.jsx)(H,{comments:b}),Object(S.jsxs)("div",{className:"timeline-comment-box",children:[Object(S.jsx)("div",{className:"user",children:Object(S.jsx)("img",{src:"".concat("http://127.0.0.1:8000").concat(N),alt:"Admin",className:"rounded-circle userimage"})}),Object(S.jsx)("div",{className:"input",children:Object(S.jsxs)("div",{className:"input-group",children:[Object(S.jsx)("input",{type:"text",className:"form-control rounded-corner",placeholder:"Write a comment...",value:f,onChange:function(e){var t=e.target.value;v(t)},ref:t}),Object(S.jsx)("span",{className:"input-group-btn p-l-10",children:Object(S.jsx)("button",{className:"btn btn-primary f-s-12 rounded-corner",type:"button",onClick:_,children:"Comment"})})]})})]})]})})})},q=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1],s=localStorage.getItem("user"),r=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat("http://127.0.0.1:8000","/api/posts"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[]),Object(S.jsx)(i.a,{children:a.map((function(e){return Object(S.jsx)(J,{details:e,user:s},e.id)}))})},Z=function(){return Object(S.jsx)("div",{className:"home-holder",children:Object(S.jsx)(i.a,{fluid:!0,className:"w-100 g-0 hero-holder",children:Object(S.jsx)(q,{})})})},$=a(54),K=a.n($);var Q=function(e){var t=e.setImage,a=s.a.useState([]),c=Object(w.a)(a,2),n=c[0],r=c[1];return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(K.a,{value:n,onChange:function(e,a){console.log(e,a),r(e),t(e)},maxNumber:1,dataURLKey:"data_url",children:function(e){var t=e.imageList,a=e.onImageUpload,c=e.onImageUpdate,n=e.onImageRemove,s=e.isDragging,r=e.dragProps;return Object(S.jsx)("div",{className:"upload_post_image-wrapper",children:Object(S.jsxs)("div",{className:"upload-image",children:[Object(S.jsx)("button",Object(I.a)(Object(I.a)({style:s?{color:"red"}:void 0,onClick:a},r),{},{className:"add-image-btn btn",children:"image"})),"\xa0",t.map((function(e,t){return Object(S.jsxs)("div",{className:"image-item",children:[Object(S.jsx)("img",{src:e.data_url,alt:"",width:"180",className:"m-2"}),Object(S.jsxs)("div",{className:"image-item__btn-wrapper",children:[Object(S.jsx)("button",{onClick:function(){return c(t)},children:"Update"}),Object(S.jsx)("button",{onClick:function(){return n(t)},children:"Remove"})]})]},t)}))]})})}})})},X=function(){var e=Object(n.useState)(""),t=Object(w.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(w.a)(s,2),o=r[0],i=r[1],l=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat("http://127.0.0.1:8000","/api/posts/create-post/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify({text:a,image:o[0].data_url})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),window.location.reload(!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsx)("div",{className:"upload-post container",children:Object(S.jsxs)("div",{className:"upload-post-input-holder",children:[Object(S.jsx)("textarea",{placeholder:"Write something here....",value:a,onChange:function(e){return c(e.target.value)}}),Object(S.jsxs)("div",{className:"upload-post-footer",children:[Object(S.jsx)(Q,{setImage:i}),Object(S.jsx)("button",{className:"btn btn-primary upload-btn",onClick:l,children:"Upload"})]})]})})},Y=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1],s=Object(u.h)().id,r=localStorage.getItem("user"),o=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat("http://127.0.0.1:8000","/api/posts/user/").concat(s),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(S.jsx)(i.a,{children:a.map((function(e){return Object(S.jsx)(J,{details:e,user:r},e.id)}))})};var ee=function(e){var t=e.setImage,a=s.a.useState([]),c=Object(w.a)(a,2),n=c[0],r=c[1];return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(K.a,{value:n,onChange:function(e,a){console.log(e,a),r(e),t(e)},maxNumber:1,dataURLKey:"data_url",children:function(e){var t=e.imageList,a=e.onImageUpload,c=e.onImageUpdate,n=e.onImageRemove,s=e.isDragging,r=e.dragProps;return Object(S.jsx)("div",{className:"upload__image-wrapper",children:Object(S.jsxs)("div",{className:"upload-image",children:[Object(S.jsx)("button",Object(I.a)(Object(I.a)({style:s?{color:"red"}:void 0,onClick:a},r),{},{className:"add-image-btn",children:"Add image"})),"\xa0",t.map((function(e,t){return Object(S.jsxs)("div",{className:"image-item",children:[Object(S.jsx)("img",{src:e.data_url,alt:"",width:"180",className:"m-2"}),Object(S.jsxs)("div",{className:"image-item__btn-wrapper",children:[Object(S.jsx)("button",{onClick:function(){return c(t)},children:"Update"}),Object(S.jsx)("button",{onClick:function(){return n(t)},children:"Remove"})]})]},t)}))]})})}})})},te=function(e){var t=e.name,a=e.email,c=e.bio,n=e.setName,s=(e.setPassword,e.setBio),r=e.setEmail,o=e.setImage;return Object(S.jsx)("div",{className:"card",children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsxs)("div",{className:"row mb-3",children:[Object(S.jsx)("div",{className:"col-sm-3",children:Object(S.jsx)("h6",{className:"mb-0",children:"Full Name"})}),Object(S.jsx)("div",{className:"col-sm-9 text-secondary",children:Object(S.jsx)("input",{type:"text",className:"form-control",value:t,onChange:function(e){return n(e.target.value)}})})]}),Object(S.jsxs)("div",{className:"row mb-3",children:[Object(S.jsx)("div",{className:"col-sm-3",children:Object(S.jsx)("h6",{className:"mb-0",children:"Email"})}),Object(S.jsx)("div",{className:"col-sm-9 text-secondary",children:Object(S.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){return r(e.target.value)}})})]}),Object(S.jsxs)("div",{className:"row mb-3",children:[Object(S.jsx)("div",{className:"col-sm-3",children:Object(S.jsx)("h6",{className:"mb-0",children:"Bio"})}),Object(S.jsx)("div",{className:"col-sm-9 text-secondary",children:Object(S.jsx)("textarea",{type:"text",className:"form-control",value:c,onChange:function(e){return s(e.target.value)}})})]}),Object(S.jsxs)("div",{className:"row mb-3",children:[Object(S.jsx)("div",{className:"col-sm-3",children:Object(S.jsx)("h6",{className:"mb-0",children:"Profile Picture"})}),Object(S.jsx)("div",{className:"col-sm-9 text-secondary",children:Object(S.jsx)(ee,{setImage:o})})]})]})})},ae=a(100),ce=function(e){var t=e.user,a=Object(n.useState)(!1),c=Object(w.a)(a,2),s=c[0],r=c[1],o=function(){return r(!1)},i=Object(n.useState)(""),l=Object(w.a)(i,2),j=l[0],u=l[1],m=Object(n.useState)(""),b=Object(w.a)(m,2),O=b[0],x=b[1],g=Object(n.useState)(""),f=Object(w.a)(g,2),v=f[0],N=f[1],y=Object(n.useState)(""),E=Object(w.a)(y,2),I=E[0],A=E[1];Object(n.useEffect)((function(){N(t.name),u(t.bio),x(t.email)}),[t.name,t.bio,t.email]);var k=localStorage.getItem("userId"),T=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat("http://127.0.0.1:8000","/api/accounts/update/").concat(k,"/"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},body:JSON.stringify({name:v,email:O,bio:j,image:I[0].data_url})}).then((function(e){return e.json()})).then((function(e){localStorage.removeItem("user"),localStorage.setItem("user",e.user.image),r(!1),window.location.reload(!1)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{class:"row gutters-sm p-4",children:[Object(S.jsxs)(ae.a,{show:s,onHide:o,children:[Object(S.jsx)(ae.a.Header,{closeButton:!0,children:Object(S.jsx)(ae.a.Title,{children:"Edit your details"})}),Object(S.jsx)(ae.a.Body,{children:Object(S.jsx)(te,{name:v,bio:j,email:O,setName:N,setBio:u,setEmail:x,setImage:A})}),Object(S.jsxs)(ae.a.Footer,{children:[Object(S.jsx)(d.a,{variant:"secondary",onClick:o,children:"Close"}),Object(S.jsx)(d.a,{variant:"primary",onClick:T,children:"Save Changes"})]})]}),Object(S.jsx)("div",{class:"col-md-4 mb-3",children:Object(S.jsx)("div",{class:"card",children:Object(S.jsx)("div",{class:"card-body",children:Object(S.jsxs)("div",{class:"d-flex flex-column align-items-center text-center",children:[Object(S.jsx)("img",{src:"".concat("http://127.0.0.1:8000").concat(t.image),alt:"Admin",class:"rounded-circle",width:"150",height:"150"}),Object(S.jsxs)("div",{class:"mt-3",children:[Object(S.jsx)("h4",{children:t.name}),Object(S.jsx)("p",{class:"text-muted font-size-sm",children:t.bio})]})]})})})}),Object(S.jsx)("div",{class:"col-md-8",children:Object(S.jsx)("div",{class:"card mb-3",children:Object(S.jsxs)("div",{class:"card-body",children:[Object(S.jsxs)("div",{class:"row",children:[Object(S.jsx)("div",{class:"col-sm-3",children:Object(S.jsx)("h6",{class:"mb-0",children:"Full Name"})}),Object(S.jsx)("div",{class:"col-sm-9 text-secondary",children:t.name})]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("div",{class:"row",children:[Object(S.jsx)("div",{class:"col-sm-3",children:Object(S.jsx)("h6",{class:"mb-0",children:"Email"})}),Object(S.jsx)("div",{class:"col-sm-9 text-secondary",children:t.email})]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("div",{class:"row",children:[Object(S.jsx)("div",{class:"col-sm-3",children:Object(S.jsx)("h6",{class:"mb-0",children:"Bio"})}),Object(S.jsx)("div",{class:"col-sm-9 text-secondary",children:t.bio})]}),Object(S.jsx)("hr",{}),k===t.id?Object(S.jsx)("div",{class:"row",children:Object(S.jsx)("div",{class:"col-sm-12",children:Object(S.jsx)(d.a,{class:"btn btn-info ",target:"__blank",onClick:function(){return r(!0)},children:"Edit"})})}):null]})})})]})},ne=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1],s=Object(u.h)().id,r=localStorage.getItem("userId"),o=function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat("http://127.0.0.1:8000","/api/accounts/").concat(s),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(S.jsxs)("div",{children:[Object(S.jsx)(ce,{user:a}),r===a.id?Object(S.jsx)(X,{}):null,Object(S.jsx)(Y,{})]})},se=function(e){var t=e.user,a=e.children;return t?a:Object(S.jsx)(u.a,{to:"/log-in",replace:!0})};var re=function(){Object(u.f)();var e=localStorage.getItem("token");return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(E,{}),Object(S.jsxs)(u.d,{children:[Object(S.jsx)(u.b,{path:"/",element:Object(S.jsx)(se,{user:e,children:Object(S.jsx)(Z,{})})}),Object(S.jsx)(u.b,{exact:!0,path:"/sign-up",element:Object(S.jsx)(B,{})}),Object(S.jsx)(u.b,{exact:!0,path:"/log-in",element:Object(S.jsx)(R,{})}),Object(S.jsx)(u.b,{path:"users/:id",element:Object(S.jsx)(se,{user:e,children:Object(S.jsx)(ne,{})})})]})]})},oe=Object(O.a)({reducer:{user:f.reducer}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(y.a,{store:oe,children:Object(S.jsx)(j.a,{children:Object(S.jsx)(re,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[97,1,2]]]);
//# sourceMappingURL=main.d5913df1.chunk.js.map