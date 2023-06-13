import{n as $,j as e,a as w,r as K,L as Q,G as U,g as V,A as Y}from"./index-4038497e.js";import{c as F}from"./index-85b66e65.js";const ee=$.div`
	position: fixed;
	width: 100%;
	left: 50%;
	transform: translateX(-50%);
	padding: 0.75rem;
	background-color: #a6373e;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	div {
		a {
			text-transform: capitalize;
			color: #fffef4;
			text-decoration: none;
			font-size: 15px;
			font-weight: bold;
		}
	}
`,ne=()=>e.jsxs(ee,{children:[e.jsx("div",{children:e.jsx(w,{to:"/ticket",children:"ticket"})}),e.jsx("div",{children:e.jsx(w,{to:"/lineup",children:"lineup"})}),e.jsx("div",{children:e.jsx(w,{to:"rundown",children:"rundown"})}),e.jsx("div",{children:e.jsx(w,{to:"merchandise",children:"merchandise"})})]});var W={};function te(a){if(!a||typeof window>"u")return;const i=document.createElement("style");return i.setAttribute("type","text/css"),i.innerHTML=a,document.head.appendChild(i),a}Object.defineProperty(W,"__esModule",{value:!0});var n=K;function re(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var s=re(n);te(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
}

.child {
  transform: var(--transform);
}`);const ae=n.forwardRef(function({style:i={},className:h="",autoFill:o=!1,play:f=!0,pauseOnHover:j=!1,pauseOnClick:b=!1,direction:t="left",speed:p=50,delay:z=0,loop:E=0,gradient:G=!1,gradientColor:q=[255,255,255],gradientWidth:x=200,onFinish:I,onCycleComplete:X,onMount:N,children:v},D){const[M,P]=n.useState(0),[y,O]=n.useState(0),[g,A]=n.useState(1),[R,T]=n.useState(!1),Z=n.useRef(null),l=D||Z,u=n.useRef(null),m=n.useCallback(()=>{if(u.current&&l.current){const r=l.current.getBoundingClientRect(),_=u.current.getBoundingClientRect();let c=r.width,d=_.width;(t==="up"||t==="down")&&(c=r.height,d=_.height),A(o&&c&&d&&d<c?Math.ceil(c/d):1),P(c),O(d)}},[o,l,t]);n.useEffect(()=>{if(R&&(m(),u.current&&l.current)){const r=new ResizeObserver(()=>m());return r.observe(l.current),r.observe(u.current),()=>{r&&r.disconnect()}}},[m,l,R]),n.useEffect(()=>{m()},[m,v]),n.useEffect(()=>{T(!0)},[]),n.useEffect(()=>{typeof N=="function"&&N()},[]);const C=n.useMemo(()=>o?y*g/p:y<M?M/p:y/p,[o,M,y,g,p]),k=`rgba(${q[0]}, ${q[1]}, ${q[2]}`,H=n.useMemo(()=>Object.assign(Object.assign({},i),{["--pause-on-hover"]:!f||j?"paused":"running",["--pause-on-click"]:!f||j&&!b||b?"paused":"running",["--width"]:t==="up"||t==="down"?"100vh":"100%",["--transform"]:t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[i,f,j,b,t]),J=n.useMemo(()=>({["--gradient-color"]:`${k}, 1), ${k}, 0)`,["--gradient-width"]:typeof x=="number"?`${x}px`:x}),[k,x]),L=n.useMemo(()=>({["--play"]:f?"running":"paused",["--direction"]:t==="left"?"normal":"reverse",["--duration"]:`${C}s`,["--delay"]:`${z}s`,["--iteration-count"]:E?`${E}`:"infinite",["--min-width"]:o?"auto":"100%"}),[f,t,C,z,E,o]),S=n.useMemo(()=>({["--transform"]:t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),B=n.useCallback(r=>[...Array(Number.isFinite(r)&&r>=0?r:0)].map((_,c)=>s.default.createElement(n.Fragment,{key:c},n.Children.map(v,d=>s.default.createElement("div",{style:S,className:"child"},d)))),[S,v]);return R?s.default.createElement("div",{ref:l,style:H,className:"marquee-container "+h},G&&s.default.createElement("div",{style:J,className:"overlay"}),s.default.createElement("div",{className:"marquee",style:L,onAnimationIteration:X,onAnimationEnd:I},s.default.createElement("div",{className:"initial-child-container",ref:u},n.Children.map(v,r=>s.default.createElement("div",{style:S,className:"child"},r))),B(g-1)),s.default.createElement("div",{className:"marquee",style:L},B(g))):null});var ie=W.default=ae;const oe=$.div`
	position: fixed;
	bottom: 0%;
	width: 100%;
	div {
		background-color: #a6373e;
		padding: 0.25rem;
		section {
			display: flex;
			gap: 0.5rem;
			padding: 0.25rem;
			color: #fffef4;
			align-items: center;
			text-transform: capitalize;
			span {
				height: 2.5rem;
				width: 1px;
				background-color: #fffef4;
			}
			h1 {
				font-size: 16px;
			}
			div {
				display: flex;
				flex-direction: column;
				a {
					color: #fffef4;
				}
			}
		}
	}
`,se=()=>e.jsx(oe,{children:e.jsx(ie,{children:Array.from({length:1}).map((a,i)=>e.jsxs("section",{children:[e.jsx("h1",{children:"contact person for order merchandise :"}),F.map((h,o)=>e.jsx("div",{children:e.jsx(Q,{to:h.cp,children:h.name})},o)),e.jsx("span",{}),e.jsx("h1",{children:"harmony vol#2"}),e.jsx("span",{}),e.jsx("h1",{children:"naff"})]},i))})}),le=$.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`,fe=()=>e.jsxs(le,{children:[e.jsx(U,{styles:V}),e.jsx(ne,{}),e.jsx(Y,{opacity:"100%"}),e.jsx(se,{})]});export{fe as Default};
