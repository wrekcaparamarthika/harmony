import{n as $,j as e,a as j,r as K,c as Q,L as U,b as V,R as Y,G as F,g as ee,A as ne}from"./index-c7264049.js";const te=$.div`
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
`,re=()=>e.jsxs(te,{children:[e.jsx("div",{children:e.jsx(j,{to:"/ticket",children:"ticket"})}),e.jsx("div",{children:e.jsx(j,{to:"/lineup",children:"lineup"})}),e.jsx("div",{children:e.jsx(j,{to:"rundown",children:"rundown"})}),e.jsx("div",{children:e.jsx(j,{to:"merchandise",children:"merchandise"})})]});var W={};function ae(a){if(!a||typeof window>"u")return;const o=document.createElement("style");return o.setAttribute("type","text/css"),o.innerHTML=a,document.head.appendChild(o),a}Object.defineProperty(W,"__esModule",{value:!0});var n=K;function ie(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var s=ie(n);ae(`.marquee-container {
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
}`);const oe=n.forwardRef(function({style:o={},className:u="",autoFill:i=!1,play:f=!0,pauseOnHover:w=!1,pauseOnClick:b=!1,direction:t="left",speed:p=50,delay:z=0,loop:E=0,gradient:G=!1,gradientColor:R=[255,255,255],gradientWidth:x=200,onFinish:I,onCycleComplete:X,onMount:N,children:v},D){const[q,P]=n.useState(0),[y,O]=n.useState(0),[g,A]=n.useState(1),[M,T]=n.useState(!1),Z=n.useRef(null),l=D||Z,m=n.useRef(null),h=n.useCallback(()=>{if(m.current&&l.current){const r=l.current.getBoundingClientRect(),_=m.current.getBoundingClientRect();let c=r.width,d=_.width;(t==="up"||t==="down")&&(c=r.height,d=_.height),A(i&&c&&d&&d<c?Math.ceil(c/d):1),P(c),O(d)}},[i,l,t]);n.useEffect(()=>{if(M&&(h(),m.current&&l.current)){const r=new ResizeObserver(()=>h());return r.observe(l.current),r.observe(m.current),()=>{r&&r.disconnect()}}},[h,l,M]),n.useEffect(()=>{h()},[h,v]),n.useEffect(()=>{T(!0)},[]),n.useEffect(()=>{typeof N=="function"&&N()},[]);const C=n.useMemo(()=>i?y*g/p:y<q?q/p:y/p,[i,q,y,g,p]),k=`rgba(${R[0]}, ${R[1]}, ${R[2]}`,H=n.useMemo(()=>Object.assign(Object.assign({},o),{["--pause-on-hover"]:!f||w?"paused":"running",["--pause-on-click"]:!f||w&&!b||b?"paused":"running",["--width"]:t==="up"||t==="down"?"100vh":"100%",["--transform"]:t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[o,f,w,b,t]),J=n.useMemo(()=>({["--gradient-color"]:`${k}, 1), ${k}, 0)`,["--gradient-width"]:typeof x=="number"?`${x}px`:x}),[k,x]),L=n.useMemo(()=>({["--play"]:f?"running":"paused",["--direction"]:t==="left"?"normal":"reverse",["--duration"]:`${C}s`,["--delay"]:`${z}s`,["--iteration-count"]:E?`${E}`:"infinite",["--min-width"]:i?"auto":"100%"}),[f,t,C,z,E,i]),S=n.useMemo(()=>({["--transform"]:t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),B=n.useCallback(r=>[...Array(Number.isFinite(r)&&r>=0?r:0)].map((_,c)=>s.default.createElement(n.Fragment,{key:c},n.Children.map(v,d=>s.default.createElement("div",{style:S,className:"child"},d)))),[S,v]);return M?s.default.createElement("div",{ref:l,style:H,className:"marquee-container "+u},G&&s.default.createElement("div",{style:J,className:"overlay"}),s.default.createElement("div",{className:"marquee",style:L,onAnimationIteration:X,onAnimationEnd:I},s.default.createElement("div",{className:"initial-child-container",ref:m},n.Children.map(v,r=>s.default.createElement("div",{style:S,className:"child"},r))),B(g-1)),s.default.createElement("div",{className:"marquee",style:L},B(g))):null});var se=W.default=oe;const le=$.div`
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
				font-size: 26px;
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
`,ce=()=>e.jsx(le,{children:e.jsx(se,{children:Array.from({length:1}).map((a,o)=>e.jsxs("section",{children:[e.jsx("h1",{children:"contact person for order merchandise :"}),Q.map((u,i)=>e.jsx("div",{children:e.jsx(U,{to:u.cp,children:u.name})},i)),e.jsx("span",{}),e.jsx("h1",{children:"harmony vol#2"}),e.jsx("span",{}),V.map((u,i)=>e.jsx(Y.Fragment,{children:e.jsx("h1",{children:u.name})},i))]},o))})}),de=$.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`,fe=()=>e.jsxs(de,{children:[e.jsx(F,{styles:ee}),e.jsx(re,{}),e.jsx(ne,{opacity:"100%"}),e.jsx(ce,{})]});export{fe as Default};
