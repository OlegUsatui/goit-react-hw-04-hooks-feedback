(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),i=(c(9),c(2)),o=(c(10),c(0)),j=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(o.jsx)(o.Fragment,{children:t.map((function(e){return Object(o.jsx)("button",{type:"button",onClick:c,name:e,children:e})}))})},b=function(e){var t=e.title,c=e.children;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h2",{children:t}),c]})},d=function(e){var t=e.message;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{children:t})})},l=function(e){var t=e.good,c=e.neutral,n=e.bad,r=e.total,a=e.positivePercentage;return r<1?Object(o.jsx)(d,{message:"No feedback given"}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["Good: ",t]}),Object(o.jsxs)("p",{children:["Neutral: ",c]}),Object(o.jsxs)("p",{children:["Bad: ",n]}),Object(o.jsxs)("p",{children:["Total: ",r]}),Object(o.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})},u=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(i.a)(a,2),d=s[0],u=s[1],h=Object(n.useState)(0),O=Object(i.a)(h,2),x=O[0],p=O[1],f=function(){return c+d+x};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{title:"Please leave feedback",children:Object(o.jsx)(j,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.name){case"good":r(c+1);break;case"neutral":u(d+1);break;case"bad":p(x+1);break;default:alert("error")}}})}),Object(o.jsx)(b,{title:"Statistics",children:Object(o.jsx)(l,{good:c,neutral:d,bad:x,total:f(),positivePercentage:function(){var e=f(),t=100*c/e;return Math.round(t)}()})})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.555b2942.chunk.js.map