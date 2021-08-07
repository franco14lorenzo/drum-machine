(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{32:function(e,a,r){},33:function(e,a,r){},39:function(e,a,r){"use strict";r.r(a);var c=r(0),s=r.n(c),d=r(10),i=r.n(d),t=(r(32),r(19)),n=(r(33),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),o=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],m=r(56),u=r(55),l=r(2);var p=function(){var e,a=Object(c.useRef)(),r=Object(c.useRef)(),s=Object(c.useRef)(),d=Object(c.useRef)(),i=Object(c.useRef)(),p=Object(c.useRef)(),k=Object(c.useRef)(),b=Object(c.useRef)(),j=Object(c.useRef)();window.document.onkeyup=function(e){switch(e.key){case"q":w("Q");break;case"w":w("W");break;case"e":w("E");break;case"a":w("A");break;case"s":w("S");break;case"d":w("D");break;case"z":w("Z");break;case"x":w("X");break;case"c":w("C");break;default:return}};var h=Object(c.useState)("ON"),f=Object(t.a)(h,2),C=f[0],O=f[1],g=Object(c.useState)(n),y=Object(t.a)(g,2),x=y[0],v=y[1],w=function(c){switch(c){case"Q":e=a;break;case"W":e=r;break;case"E":e=s;break;case"A":case"S":e=d;break;case"D":e=p;break;case"Z":e=k;break;case"X":e=b;break;case"C":e=j;break;default:return e}var i=x.find((function(e){return e.keyTrigger===c}));O(i.id),e.current.src=i.url,e.current.play()};return Object(l.jsxs)("div",{className:"App",id:"drum-machine",children:[Object(l.jsxs)("div",{id:"machine",children:[Object(l.jsx)("div",{className:"App-header",id:"display",children:C}),Object(l.jsxs)("div",{id:"selector",children:[Object(l.jsx)("p",{children:"Bank One"}),Object(l.jsx)(m.a,{defaultChecked:!0,color:"default",inputProps:{"aria-label":"checkbox with default color"},id:"switch-bank",onClick:function(){v((function(e){return e===n?o:n}))}}),Object(l.jsx)("p",{children:"Bank Two"})]}),Object(l.jsxs)("div",{className:"pad",children:[Object(l.jsxs)(u.a,{disableElevation:!0,variant:"contained",className:"drum-pad",id:"drum-q",onClick:function(){return w("Q")},children:["Q",Object(l.jsx)("audio",{src:"",className:"clip",id:"Q",ref:a})]}),Object(l.jsxs)(u.a,{disableElevation:!0,variant:"contained",className:"drum-pad",id:"drum-w",onClick:function(){return w("W")},children:["W",Object(l.jsx)("audio",{src:"",className:"clip",id:"W",ref:r})]}),Object(l.jsxs)(u.a,{disableElevation:!0,variant:"contained",className:"drum-pad",id:"drum-e",onClick:function(){return w("E")},children:["E",Object(l.jsx)("audio",{src:"",className:"clip",id:"E",ref:s})]}),Object(l.jsxs)(u.a,{disableElevation:!0,variant:"contained",className:"drum-pad",id:"drum-a",onClick:function(){return w("A")},children:["A",Object(l.jsx)("audio",{src:n[1].url,className:"clip",id:"A",ref:d})]}),Object(l.jsxs)(u.a,{disableElevation:!0,variant:"contained",className:"drum-pad",id:"drum-s",onClick:function(){return w("S")},children:["S",Object(l.jsx)("audio",{src:"",className:"clip",id:"S",ref:i})]}),Object(l.jsxs)(u.a,{disableElevation:!0,variant:"contained",className:"drum-pad",id:"drum-d",onClick:function(){return w("D")},children:["D",Object(l.jsx)("audio",{src:"",className:"clip",id:"D",ref:p})]}),Object(l.jsxs)(u.a,{disableElevation:!0,variant:"contained",className:"drum-pad",id:"drum-z",onClick:function(){return w("Z")},children:["Z",Object(l.jsx)("audio",{src:"",className:"clip",id:"Z",ref:k})]}),Object(l.jsxs)(u.a,{disableElevation:!0,variant:"contained",className:"drum-pad",id:"drum-x",onClick:function(){return w("X")},children:["X",Object(l.jsx)("audio",{src:"",className:"clip",id:"X",ref:b})]}),Object(l.jsxs)(u.a,{disableElevation:!0,variant:"contained",className:"drum-pad",id:"drum-c",onClick:function(){return w("C")},children:["C",Object(l.jsx)("audio",{src:"",className:"clip",id:"C",ref:j})]})]})]}),Object(l.jsxs)("div",{class:"footer",children:["by ",Object(l.jsx)("a",{href:"https://github.com/franco14lorenzo",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("u",{children:"Franco Lorenzo"})})]})]})},k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,57)).then((function(a){var r=a.getCLS,c=a.getFID,s=a.getFCP,d=a.getLCP,i=a.getTTFB;r(e),c(e),s(e),d(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.dc0260c8.chunk.js.map