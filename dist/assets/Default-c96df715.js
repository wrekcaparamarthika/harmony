import{n as $,j as n,a as w,r as K,L as Q,G as U,g as V,A as Y}from"./index-2b280313.js";import{c as F}from"./index-85b66e65.js";const ee=$.div`
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
`,ne=()=>n.jsxs(ee,{children:[n.jsx("div",{children:n.jsx(w,{to:"/ticket",children:"ticket"})}),n.jsx("div",{children:n.jsx(w,{to:"/lineup",children:"lineup"})}),n.jsx("div",{children:n.jsx(w,{to:"rundown",children:"rundown"})}),n.jsx("div",{children:n.jsx(w,{to:"merchandise",children:"merchandise"})})]});var W={};function te(a){if(!a||typeof window>"u")return;const i=document.createElement("style");return i.setAttribute("type","text/css"),i.innerHTML=a,document.head.appendChild(i),a}Object.defineProperty(W,"__esModule",{value:!0});var e=K;function re(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var s=re(e);te(`.marquee-container {
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
}`);const ae=e.forwardRef(function({style:i={},className:h="",autoFill:o=!1,play:u=!0,pauseOnHover:j=!1,pauseOnClick:b=!1,direction:t="left",speed:p=50,delay:z=0,loop:E=0,gradient:G=!1,gradientColor:q=[255,255,255],gradientWidth:v=200,onFinish:I,onCycleComplete:X,onMount:N,children:x},D){const[M,P]=e.useState(0),[y,O]=e.useState(0),[g,A]=e.useState(1),[R,T]=e.useState(!1),Z=e.useRef(null),l=D||Z,f=e.useRef(null),m=e.useCallback(()=>{if(f.current&&l.current){const r=l.current.getBoundingClientRect(),_=f.current.getBoundingClientRect();let c=r.width,d=_.width;(t==="up"||t==="down")&&(c=r.height,d=_.height),A(o&&c&&d&&d<c?Math.ceil(c/d):1),P(c),O(d)}},[o,l,t]);e.useEffect(()=>{if(R&&(m(),f.current&&l.current)){const r=new ResizeObserver(()=>m());return r.observe(l.current),r.observe(f.current),()=>{r&&r.disconnect()}}},[m,l,R]),e.useEffect(()=>{m()},[m,x]),e.useEffect(()=>{T(!0)},[]),e.useEffect(()=>{typeof N=="function"&&N()},[]);const C=e.useMemo(()=>o?y*g/p:y<M?M/p:y/p,[o,M,y,g,p]),S=`rgba(${q[0]}, ${q[1]}, ${q[2]}`,H=e.useMemo(()=>Object.assign(Object.assign({},i),{["--pause-on-hover"]:!u||j?"paused":"running",["--pause-on-click"]:!u||j&&!b||b?"paused":"running",["--width"]:t==="up"||t==="down"?"100vh":"100%",["--transform"]:t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[i,u,j,b,t]),J=e.useMemo(()=>({["--gradient-color"]:`${S}, 1), ${S}, 0)`,["--gradient-width"]:typeof v=="number"?`${v}px`:v}),[S,v]),L=e.useMemo(()=>({["--play"]:u?"running":"paused",["--direction"]:t==="left"?"normal":"reverse",["--duration"]:`${C}s`,["--delay"]:`${z}s`,["--iteration-count"]:E?`${E}`:"infinite",["--min-width"]:o?"auto":"100%"}),[u,t,C,z,E,o]),k=e.useMemo(()=>({["--transform"]:t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),B=e.useCallback(r=>[...Array(Number.isFinite(r)&&r>=0?r:0)].map((_,c)=>s.default.createElement(e.Fragment,{key:c},e.Children.map(x,d=>s.default.createElement("div",{style:k,className:"child"},d)))),[k,x]);return R?s.default.createElement("div",{ref:l,style:H,className:"marquee-container "+h},G&&s.default.createElement("div",{style:J,className:"overlay"}),s.default.createElement("div",{className:"marquee",style:L,onAnimationIteration:X,onAnimationEnd:I},s.default.createElement("div",{className:"initial-child-container",ref:f},e.Children.map(x,r=>s.default.createElement("div",{style:k,className:"child"},r))),B(g-1)),s.default.createElement("div",{className:"marquee",style:L},B(g))):null});var ie=W.default=ae;const oe=$.div`
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
`,se=()=>n.jsx(oe,{children:n.jsx(ie,{children:Array.from({length:1}).map((a,i)=>n.jsxs("section",{children:[n.jsx("h1",{children:"contact person for order merchandise :"}),F.map((h,o)=>n.jsx("div",{children:n.jsx(Q,{to:h.cp,children:h.name})},o)),n.jsx("h1",{children:"harmony vol#2"})]},i))})}),le=$.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`,ue=()=>n.jsxs(le,{children:[n.jsx(U,{styles:V}),n.jsx(ne,{}),n.jsx(Y,{opacity:"100%"}),n.jsx(se,{})]});export{ue as Default};
