(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{20:function(e,t,n){e.exports=n(30)},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(18),o=n.n(r),c=n(10),u=n(1),i=function(e){return l.a.createElement("nav",{className:"indigo"},l.a.createElement("div",null,l.a.createElement("span",null," Navbar "),l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"}," Home ")," "),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/about"}," About Us ")," "),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/contact"}," Contact Us ")," "),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/todo"}," To Do List ")," "))))},m=n(5),s=n(6),d=n(8),p=n(7),E=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"Main App \x10Component"),l.a.createElement("p",null,"This app uses React Router and the Context API "))}}]),n}(a.Component),b=function(e){return l.a.createElement("div",null,l.a.createElement("h4",null,"About"),l.a.createElement("p",null,"This is the about us page"))},f=function(e){return l.a.createElement("div",null,l.a.createElement("h4",null,"Contact"),l.a.createElement("p",null,"This is the Contact Us Page "))},h=Object(a.createContext)(),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={todos:[]},e.addTodoItem=function(t){var n=e.state.todos.map((function(e){return e}));n.push(t),e.setState({todos:n})},e.deleteTodoItem=function(t){console.log(t);var n=e.state.todos.filter((function(e){return e.id!==t}));e.setState({todos:n})},e}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(h.Provider,{value:{todos:this.state.todos,addTodoItem:this.addTodoItem,deleteTodoItem:this.deleteTodoItem}},this.props.children)}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).formHandler=function(e){e.target.todo.value=""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement(h.Consumer,null,(function(t){return l.a.createElement("form",{onSubmit:function(n){n.preventDefault(),console.log(t);var a={id:t.todos.length,todo:n.target.todo.value,complete:!1};console.log(a),t.addTodoItem(a),e.formHandler(n)}},l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{id:"todo",name:"todo",type:"text"}),l.a.createElement("label",{htmlFor:"todo"},"Todo")),l.a.createElement("input",{type:"submit",value:"Add Item",className:"btn"}))}))}}]),n}(a.Component),O=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement(h.Consumer,null,(function(t){return l.a.createElement("li",{className:"collection-item"},e.props.item.todo,l.a.createElement("button",{className:"btn-flat secondary-content",onClick:function(n){t.deleteTodoItem(e.props.item.id)}},l.a.createElement("i",{className:"blue-text material-icons "}," delete ")))}))}}]),n}(a.Component),y=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement(h.Consumer,null,(function(e){return l.a.createElement("div",null,l.a.createElement("ul",{className:"collection"},e.todos.map((function(e){return l.a.createElement(O,{key:e.id,item:e})}))))}))}}]),n}(a.Component),C=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null,l.a.createElement(j,null),l.a.createElement(y,null)))}}]),n}(a.Component);var g=function(){return l.a.createElement("div",null,l.a.createElement(c.a,null,l.a.createElement(i,null),l.a.createElement("div",{className:"container"},l.a.createElement(u.a,{exact:!0,path:"/"},l.a.createElement(E,null)),l.a.createElement(u.a,{path:"/about"},l.a.createElement(b,null)),l.a.createElement(u.a,{path:"/contact"},l.a.createElement(f,null)),l.a.createElement(u.a,{path:"/todo"},l.a.createElement(C,null)))))};o.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.01541276.chunk.js.map