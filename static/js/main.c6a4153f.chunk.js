(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={backdrop:"NewTask_backdrop__3W_uN","task-form-container":"NewTask_task-form-container__1qkyn"}},,function(e,t,a){e.exports={card:"Card_card__2zX8D"}},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(8),s=a.n(c),i=(a(15),a(5)),r=a(10),o=a(2),l=a(9),d=a.n(l),j=a(0),u=function(e){return Object(j.jsx)("div",{className:"".concat(d.a.card," ").concat(e.className),children:e.children})},b=(a(17),function(e){var t=new Date,a=String(t.getDate()).padStart(2,"0"),c=String(t.getMonth()+1).padStart(2,"0"),s=t.getFullYear();t=s+"-"+c+"-"+a;var r=Object(n.useState)(""),l=Object(o.a)(r,2),d=l[0],u=l[1],b=Object(n.useState)(t),k=Object(o.a)(b,2),f=k[0],h=k[1];return Object(j.jsx)("div",{className:"form-container",children:Object(j.jsxs)("form",{onSubmit:function(a){if(a.preventDefault(),0!==d.trim().length){var n,c=new Date,s=(new Date(f).getTime()-new Date(c.toLocaleDateString()).getTime())/864e5,r=function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++)t=(257*t+e.charCodeAt(a))%0x10000000000000000;return t}(d),o={id:r,taskTitle:d,taskDaysLeft:parseInt(s),isMarked:!1},l=Object(i.a)(e.toDoList);try{for(l.s();!(n=l.n()).done;){if(n.value.id===r)return void console.log("Task with same id already exits")}}catch(j){l.e(j)}finally{l.f()}e.onSaveTaskForm(o),u(""),h(t),e.onClose(!1)}},children:[Object(j.jsxs)("div",{className:"form-input__control",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{forhtml:"taskname",children:"Task name"}),Object(j.jsx)("input",{id:"taskname",type:"text",value:d,onChange:function(e){u(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{forhtml:"taskdate",children:"Due date"}),Object(j.jsx)("input",{id:"taskdate",type:"date",min:f,value:f,onChange:function(e){h(e.target.value)}})]})]}),Object(j.jsx)("div",{className:"btn",children:Object(j.jsx)("button",{className:"btn-tag",type:"submit",children:Object(j.jsx)("h1",{children:"Add"})})})]})})}),k=a(7),f=a.n(k),h=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:f.a.backdrop,onClick:e.onNewTask}),Object(j.jsx)(u,{className:f.a["task-form-container"],children:Object(j.jsx)(b,{onClose:function(){e.onNewTask(!1)},onSaveTaskForm:function(t){e.onSaveNewTask(t)},toDoList:e.allTasks})})]})},O=(a(18),function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],s=a[1];return Object(j.jsxs)("div",{className:"task-item-container ".concat(c&&"task-item-container-selected"),onClick:function(t){t.stopPropagation(),s(!0^c),e.onSelected(e.title)},children:[Object(j.jsx)("div",{className:"task-item-checkbox",children:Object(j.jsx)("i",{className:"fas fa-check-circle checkbox",style:c?{}:{visibility:"hidden"}})}),Object(j.jsxs)("div",{className:"task-data-container",children:[Object(j.jsx)("div",{className:"task-title",style:c?{textDecoration:"underline"}:{},children:e.title}),Object(j.jsxs)("div",{className:"task-btn-container",children:[Object(j.jsx)("div",{className:"edit-task-title",onClick:function(e){e.stopPropagation()},children:Object(j.jsx)("i",{className:"fas fa-edit"})}),Object(j.jsx)("div",{className:"task-item-days-left",type:"button",children:e.daysLeft+" Days left"})]})]})]})}),m=(a(19),function(e){var t=e.allTasks,a=function(t){e.onSaveSelected(t)},n=t.map((function(e){return Object(j.jsx)(O,{onSelected:a,title:e.taskTitle,daysLeft:e.taskDaysLeft},"".concat(e.id))}));return 0===t.length&&(n=Object(j.jsx)("h1",{className:"no-task",children:"No Tasks Found!"})),Object(j.jsx)(u,{children:Object(j.jsx)("div",{className:"task-list-container",children:n})})}),x=(a(20),function(e){return Object(j.jsx)(u,{children:Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsx)("h1",{className:"header-title",children:"TO - DO LIST"}),Object(j.jsxs)("div",{className:"header-button-container",children:[Object(j.jsx)("button",{className:"header-button header-button-left",type:"button",onClick:function(){e.onNewTask(!0)},children:"Add New Task"}),Object(j.jsx)("button",{className:"header-button",type:"button",onClick:function(){var t=e.allTasks.filter((function(e){return!1===e.isMarked}));e.onDeletedMarked(t)},children:"Delete Selected"})]})]})})});var v=function(){var e=Object(n.useState)([{taskTitle:"Learn React",taskDaysLeft:"13",isMarked:!1}]),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),l=Object(o.a)(s,2),d=l[0],u=l[1],b=function(e){u(e=!0===e&&e)};return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{onNewTask:b,onDeletedMarked:function(e){c(e)},allTasks:a}),d&&Object(j.jsx)(h,{onNewTask:b,onSaveNewTask:function(e){c((function(t){return[e].concat(Object(r.a)(t))}))},allTasks:a}),Object(j.jsx)(m,{onSaveSelected:function(e){var t,n=Object(i.a)(a);try{for(n.s();!(t=n.n()).done;){var s=t.value;s.taskTitle===e&&(s.isMarked=!s.isMarked)}}catch(r){n.e(r)}finally{n.f()}c(a)},allTasks:a})]})};s.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.c6a4153f.chunk.js.map