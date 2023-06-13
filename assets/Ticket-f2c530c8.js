import{n as s,R as t,j as e,G as o,g as i,a as n,N as c,A as a}from"./index-cd2ae4f4.js";const l=""+new URL("presale-2d06193a.png",import.meta.url).href,d=""+new URL("spot-04853145.png",import.meta.url).href,m=s.div`
	position: absolute;
	z-index: 999;
	background-color: #00000060;
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0%;
	h1 {
		font-size: medium;
		font-style: italic;
		color: #fffef4;
		text-transform: capitalize;
		background-color: #a6373e;
		padding: 0.5rem;
		a {
			color: #fffef4;
		}
	}
`,x=({title:r="title"})=>(t.useEffect(()=>(document.body.style.overflow="hidden",document.title="go back soon!",()=>{document.title="Harmony",document.body.style.overflow="unset"}),[]),e.jsxs(t.Fragment,{children:[e.jsx(o,{styles:i}),e.jsx(m,{children:e.jsxs("h1",{children:[r," under maintenance",e.jsx("br",{}),e.jsx(n,{to:"/",children:"go back to home!"})]})})]})),f=s.div`
	position: fixed;
	bottom: 20%;
	left: 50%;
	transform: translateX(-50%);
	a {
		section {
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 320px;
			}
		}
	}
`,h=()=>e.jsxs(t.Fragment,{children:[e.jsx(o,{styles:i}),e.jsx(x,{title:"ticket"}),e.jsx(c,{title:"ticket"}),e.jsxs(f,{children:[e.jsx(n,{to:"#",children:e.jsx("section",{children:e.jsx("img",{src:l})})}),e.jsx(n,{to:"#",children:e.jsx("section",{children:e.jsx("img",{src:d})})})]}),e.jsx(a,{})]});export{h as Ticket};
