(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(10),c=n.n(s),r=n(8),a=n.n(r),o=n(11),i=n(2),l=n(3),d=n(5),u=n(4),h=n(1),j=n.n(h),p=(n(17),n(18),n(6)),b=(n(19),n(9)),f=n.n(b),O=n(0),m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={title:"",select:"all"},e.handleInputChange=function(t){e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{title:t.target.value})}))},e.handleSelectChange=function(t){e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{select:t.target.value})}))},e.filterTodos=function(t){return t.filter((function(t){return t.title.toLowerCase().includes(e.state.title.toLowerCase())}))},e.readyTodos=function(){var t=e.props.todos;switch(e.state.select){case"all":return e.filterTodos(t);case"completed":return e.filterTodos(t.filter((function(e){return e.completed})));case"active":return e.filterTodos(t.filter((function(e){return!e.completed})));default:throw new Error("Error")}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.selectedUserId,n=e.selectUser,s=this.state.title;return Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsx)("input",{type:"text",value:s,onChange:this.handleInputChange}),Object(O.jsxs)("select",{onChange:this.handleSelectChange,children:[Object(O.jsx)("option",{value:"all",children:"all"}),Object(O.jsx)("option",{value:"completed",children:"completed"}),Object(O.jsx)("option",{value:"active",children:"active"})]}),Object(O.jsx)("h2",{children:"Todos:"}),Object(O.jsx)("div",{className:"TodoList__list-container",children:Object(O.jsx)("ul",{className:"TodoList__list",children:this.readyTodos().map((function(e){return Object(O.jsxs)("li",{className:f()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(O.jsxs)("label",{htmlFor:"checkbox",children:[Object(O.jsx)("input",{type:"checkbox",id:"checkbox",checked:e.completed,readOnly:!0}),Object(O.jsx)("p",{children:e.title})]}),Object(O.jsxs)("button",{className:f()("TodoList__user-button","TodoList__user-button--selected","button",{active:t===e.userId}),type:"button",onClick:function(){return n(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})})]})}}]),n}(j.a.Component),v=function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){if(!e.ok)throw new Error("Server is not response ".concat(e.status));return e.json()}))},x=(n(21),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={user:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.loadUser()}},{key:"loadUser",value:function(){var e,t=this;(e=this.props.userId,v("/users/".concat(e))).then((function(e){return t.setState({user:e})}))}},{key:"render",value:function(){var e=this.props.userId,t=this.state.user;return t?Object(O.jsxs)("div",{className:"CurrentUser",children:[Object(O.jsx)("h2",{className:"CurrentUser__title",children:Object(O.jsx)("span",{children:"Selected user: ".concat(e)})}),Object(O.jsx)("h3",{className:"CurrentUser__name",children:t.name}),Object(O.jsx)("p",{className:"CurrentUser__email",children:t.email}),Object(O.jsx)("p",{className:"CurrentUser__phone",children:t.phone})]}):"Dont loadded"}}]),n}(j.a.Component)),_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedUserId:0,todos:[]},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearUserId=function(){e.setState({selectedUserId:0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.todos;return 0===n.length?"":Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"App__sidebar",children:Object(O.jsx)(m,{todos:n,selectUser:this.selectUser,selectedUserId:t})}),Object(O.jsxs)("div",{className:"App__content",children:[Object(O.jsx)("div",{className:"App__content-container",children:t?Object(O.jsx)(x,{userId:t}):"No user selected"}),!!t&&Object(O.jsx)("button",{type:"button",className:"",onClick:this.clearUserId,children:"Clear"})]})]})}}]),n}(j.a.Component),y=_;c.a.render(Object(O.jsx)(y,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.5bedb0ae.chunk.js.map