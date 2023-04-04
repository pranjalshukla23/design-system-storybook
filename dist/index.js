"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));exports.Badge=({label:e="hello",color:t="primary",ratingIcon:l,placeIcon:r="right",style:a})=>React.createElement("div",{className:" max-w-fit text-black rounded-lg px-2 py-1 text-center flex justify-between items-center text-xs "+("primary"===t?"bg-[#E9EBFF]":"secondary"===t?"bg-[#1B2054]":"success"===t?"bg-green-300":"error"===t?"bg-red-500":"bg-inherit"),style:a},React.createElement("div",{className:`w-full flex ${"left"===r?"flex-row-reverse":"flex-row"} items-center justify-between gap-1`},React.createElement("span",null,e),"hidden"!==r&&React.createElement(React.Fragment,null,l))),exports.Button=({label:e="Submit",color:l="primary",size:r="lg",icon:a,onClick:n,onMouseOver:s,onMouseOut:o,style:c,placeIcon:i="right"})=>{let d=1;"sm"===r&&(d=.95),"lg"===r&&(d=1.5);const u={...c,padding:`${.5*d}rem ${1*d}rem`};return t.default.createElement("button",{onClick:n,onMouseOver:s,onMouseOut:o,className:` text-base  font-bold rounded-lg ${"sm"===r?"w-32":"md"===r?"w-52":"w-60"}\n        ${"success"===l?" text-white   bg-green-500":"secondary"===l?" text-white  bg-purple-400":"error"===l?" text-white   font-bold bg-red-500":"primary"===l?" text-white bg-[#1B2054]":" text-black bg-none border-2"}\n\n      `,style:u},t.default.createElement("div",{className:`w-full flex ${"left"===i?"flex-row-reverse":"flex-row"} items-center justify-between gap-1`},t.default.createElement("span",{className:"w-full  flex justify-center items-center"},e),"hidden"!==i&&t.default.createElement(t.default.Fragment,null,a)))},exports.Card=({children:e,style:t})=>React.createElement("div",{className:"w-72 rounded-2xl flex flex-col justify-between items-center   box-border shadow-3xl gap-2.5 p-4 text-black",style:t},e),exports.Checkbox=({label:e="hello",id:t,name:l,value:r,onChange:a,color:n="primary",style:s})=>React.createElement("div",{style:s},React.createElement("label",{className:"flex justify-between items-center gap-2 max-w-fit "},React.createElement("input",{type:"checkbox",id:t,name:l,value:r,onChange:a,class:("primary"===n?"text-[#1B2054]":"text-pink-600")+" focus:ring-0 rounded-full w-5 h-5 border-2 border-[#1B2054]"})," ",React.createElement("span",{className:"leading-3"},e))),exports.Input=({className:e,id:l,name:r,variant:a="outlined",type:n="text",size:s="sm",value:o,onChange:c,fullWidth:i,style:d,placeholder:u="Enter something here"})=>{let m=1;"sm"===s&&(m=.75),"lg"===s&&(m=1.5);const b={...d,padding:`${.5*m}rem ${1*m}rem`};return t.default.createElement("div",{className:`${e} relative`},t.default.createElement("input",{id:l,name:r,type:n,value:o,onChange:e=>c(e.target.value),placeholder:u,className:` font-normal rounded-xl outline-0 focus:border-[3px] focus:border-blue-500 focus:ring-0 focus:ring-inherit bg-white ${"standard"===a?"border-b-2 border-b-slate-300 ":"filled"===a?"border-b-2 border-b-gray-500 bg-blue-500":"border-1 border-bcolor"} ${i?"w-full":""}\n        \n       `,style:b}))},exports.Typography=({children:e,style:t,variant:l="default"})=>(console.log(l),React.createElement("div",{className:" leading-4 "+("h1"===l?"text-6xl":"h2"===l?"text-4xl":"h3"===l?"text-3xl":"h4"===l?"text-2xl":"h5"===l?"text-xl":"h6"===l?"text-lg":"text-base"),style:t},e));
