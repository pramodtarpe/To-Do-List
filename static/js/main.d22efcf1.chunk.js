(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={backdrop:"NewTask_backdrop__3W_uN","task-form-container":"NewTask_task-form-container__1qkyn"}},,function(e,t,a){e.exports={card:"Card_card__2zX8D"}},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(8),c=a.n(s),i=(a(15),a(5)),o=a(10),r=a(2),l=a(9),d=a.n(l),j=a(0),b=function(e){return Object(j.jsx)("div",{className:"".concat(d.a.card," ").concat(e.className),children:e.children})},u=(a(17),function(e){var t=new Date,a=String(t.getDate()).padStart(2,"0"),s=String(t.getMonth()+1).padStart(2,"0"),c=t.getFullYear();t=c+"-"+s+"-"+a;var o=Object(n.useState)(""),l=Object(r.a)(o,2),d=l[0],b=l[1],u=Object(n.useState)(t),f=Object(r.a)(u,2),h=f[0],k=f[1];return Object(j.jsx)("div",{className:"form-container",children:Object(j.jsxs)("form",{onSubmit:function(a){if(a.preventDefault(),0!==d.trim().length){var n,s=new Date,c=(new Date(h).getTime()-new Date(s.toLocaleDateString()).getTime())/864e5,o=function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++)t=(257*t+e.charCodeAt(a))%0x10000000000000000;return t}(d),r={id:o,taskTitle:d,taskDaysLeft:parseInt(c),isMarked:!1},l=Object(i.a)(e.toDoList);try{for(l.s();!(n=l.n()).done;){if(n.value.id===o)return void console.log("Task with same id already exits")}}catch(j){l.e(j)}finally{l.f()}e.onSaveTaskForm(r),b(""),k(t),e.onClose(!1)}},children:[Object(j.jsxs)("div",{className:"form-input__control",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{forhtml:"taskname",children:"Task name"}),Object(j.jsx)("input",{id:"taskname",type:"text",value:d,onChange:function(e){b(e.target.value)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{forhtml:"taskdate",children:"Due date"}),Object(j.jsx)("input",{id:"taskdate",type:"date",min:h,value:h,onChange:function(e){k(e.target.value)}})]})]}),Object(j.jsx)("div",{className:"btn",children:Object(j.jsx)("button",{className:"btn-tag",type:"submit",children:Object(j.jsx)("h1",{children:"Add"})})})]})})}),f=a(7),h=a.n(f),k=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:h.a.backdrop,onClick:e.onNewTask}),Object(j.jsx)(b,{className:h.a["task-form-container"],children:Object(j.jsx)(u,{onClose:function(){e.onNewTask(!1)},onSaveTaskForm:function(t){e.onSaveNewTask(t)},toDoList:e.allTasks})})]})},O=(a(18),function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],c=a[1];return Object(j.jsxs)("div",{className:"task-item-container ".concat(s&&"task-item-container-selected"),onClick:function(t){t.stopPropagation(),c(!0^s),e.onSelected(e.title)},children:[Object(j.jsx)("div",{className:"task-item-checkbox",children:Object(j.jsx)("i",{className:"fas fa-check-circle checkbox",style:s?{}:{visibility:"hidden"}})}),Object(j.jsxs)("div",{className:"task-data-container",children:[Object(j.jsx)("div",{className:"task-title",style:s?{textDecoration:"underline"}:{},children:e.title}),Object(j.jsxs)("div",{className:"task-btn-container",children:[Object(j.jsx)("div",{className:"edit-task-title",onClick:function(e){e.stopPropagation()},children:Object(j.jsx)("i",{className:"fas fa-edit"})}),Object(j.jsx)("div",{className:"task-item-days-left",type:"button",children:e.daysLeft+" Days left"})]})]})]})}),m=(a(19),function(e){var t=e.allTasks,a=function(t){e.onSaveSelected(t)},n=t.map((function(e){return Object(j.jsx)(O,{onSelected:a,title:e.taskTitle,daysLeft:e.taskDaysLeft},"".concat(e.id))}));return 0===t.length&&(n=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"no-task",children:"No Tasks Found!"}),Object(j.jsxs)("p",{className:"no-task-guide",children:["Oops ! No task found. To begin, start by adding a new task by clicking on the plus ",Object(j.jsx)("i",{className:"fas fa-plus-circle"})," icon on the header section of the to-do-list.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"To delete, first select the task(s) you want to delete and then press the minus ",Object(j.jsx)("i",{className:"fas fa-minus-circle"})," icon on the header section of the to-do-list."]})]})),Object(j.jsx)(b,{children:Object(j.jsx)("div",{className:"task-list-container",children:n})})}),x=(a(20),function(e){return Object(j.jsx)(b,{children:Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsx)("h1",{className:"header-title",children:"TO - DO LIST"}),Object(j.jsxs)("div",{className:"header-button-container",children:[Object(j.jsx)("button",{className:"header-button",type:"button",onClick:function(){e.onNewTask(!0)},children:Object(j.jsx)("i",{className:"fas fa-plus-circle"})}),Object(j.jsx)("button",{className:"header-button",type:"button",onClick:function(){var t=e.allTasks.filter((function(e){return!1===e.isMarked}));e.onDeletedMarked(t)},children:Object(j.jsx)("i",{className:"fas fa-minus-circle"})})]})]})})});var v=function(){var e=Object(n.useState)([{taskTitle:"Learn React",taskDaysLeft:"13",isMarked:!1}]),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),l=Object(r.a)(c,2),d=l[0],b=l[1],u=function(e){b(e=!0===e&&e)};return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{onNewTask:u,onDeletedMarked:function(e){s(e)},allTasks:a}),d&&Object(j.jsx)(k,{onNewTask:u,onSaveNewTask:function(e){s((function(t){return[e].concat(Object(o.a)(t))}))},allTasks:a}),Object(j.jsx)(m,{onSaveSelected:function(e){var t,n=Object(i.a)(a);try{for(n.s();!(t=n.n()).done;){var c=t.value;c.taskTitle===e&&(c.isMarked=!c.isMarked)}}catch(o){n.e(o)}finally{n.f()}s(a)},allTasks:a})]})};c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.d22efcf1.chunk.js.map