(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),l=a(8),d=a(1),i=a(2),s=a(4),m=a(3),u=a(5),f=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todo:{content:"",id:1}},a.handleChange=function(e){a.setState({todo:{content:e.target.value,id:Math.random(2)}})},a.handleSubmit=function(e){e.preventDefault(),a.props.saveTodo(a.state.todo),a.setState({todo:{content:""}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("form",{onSubmit:this.handleSubmit,autoComplete:"off"},o.a.createElement("div",{className:" input-field col s10 m11 text-red "},o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{id:"todo",type:"text",className:"red-text",onChange:this.handleChange,value:this.state.todo.content,required:!0}),o.a.createElement("label",{htmlFor:"todo"},"todo"))),o.a.createElement("div",{className:"col s1"},o.a.createElement("button",{id:"btn",className:"btn-floating waves-effect waves-light red"},o.a.createElement("i",{className:"material-icons"},"add")))))}}]),t}(o.a.Component),h=function(e){var t=e.todo,a=e.deleteTodo,n=t.length?t.map(function(e){return o.a.createElement("a",{href:"#!",id:"redborder",className:"collection-item red-text text-darken-2",key:e.id,onClick:function(){a(e.id)}},e.content)}):o.a.createElement("a",{href:"#!",id:"redborder",className:"collection-item red-text"},"Todo list is empty");return o.a.createElement("div",{className:""},o.a.createElement("div",{className:""},o.a.createElement("ul",{className:"collection",id:"redborder"},n)))},v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todo:[]},a.saveTodo=function(e){var t=Object(l.a)(a.state.todo).concat([e]);a.setState({todo:t})},a.deleteTodo=function(e){var t=a.state.todo.filter(function(t){return t.id!==e});a.setState({todo:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col s10 offset-s1 l6 offset-l3"},o.a.createElement(f,{saveTodo:this.saveTodo}),o.a.createElement(h,{todo:this.state.todo,deleteTodo:this.deleteTodo}))))}}]),t}(n.Component);a(14);r.a.render(o.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.bc0e34c0.chunk.js.map