import{n as d,R as r,j as e,G as m,g as f,N as h,L as p,A as x}from"./index-eaac2b68.js";import{c as g}from"./index-36d1b027.js";const i=""+new URL("MERCHANDISE_BLACK-fade9a10.png",import.meta.url).href,s=""+new URL("MERCHANDISE_WHITE-8723303b.png",import.meta.url).href,a=""+new URL("MERCHANDISE_SizeChart-32b04ed1.png",import.meta.url).href,u=d.div`
	display: flex;
	flex-direction: column;
	button {
		all: unset;
		text-transform: capitalize;
		background-color: #a6373e;
		padding: 1rem;
		align-items: center;
		justify-content: center;
		color: #fffef4;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem;
		text-transform: capitalize;
		img {
			width: 340px;
		}
		img:nth-of-type(2) {
			position: absolute;
			top: 35%;
		}
	}
	section:nth-of-type(2) {
		background-color: #a6373e;
		color: #fffef4;
		text-transform: capitalize;
		padding: 1rem;
		height: fit-content;
		z-index: 999;
		position: fixed;
		width: 50%;
		top: 65%;
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0rem;
		a {
			color: #fffef4;
			text-decoration: none;
			cursor: pointer;
			font-style: italic;
			font-weight: 700;
		}
		h1 {
			font-size: 16px;
		}
	}
`,b=()=>{const[t,o]=r.useState(!1),c=()=>{o(n=>!n)};return e.jsxs(r.Fragment,{children:[e.jsx(m,{styles:f}),e.jsx(h,{title:"merchandise"}),e.jsxs(u,{children:[e.jsx("button",{onClick:c,children:t?"merchandise":"size chart"}),e.jsxs("section",{children:[e.jsx("h1",{children:t?"size chart":"official merchandise"}),!t&&e.jsxs(r.Fragment,{children:[e.jsx("img",{src:s,alt:s}),e.jsx("img",{src:i,alt:i})]}),t&&e.jsx("img",{src:a,alt:a})]}),e.jsxs("section",{children:[e.jsx("h1",{children:"contact person"}),e.jsx("p",{children:"untuk preorder bisa langsung klik contact person tersebut agar nanti diarahkan ke whatsapp!"}),g.map((n,l)=>e.jsx(r.Fragment,{children:e.jsx(p,{to:n.cp,children:n.name})},l))]})]}),e.jsx(x,{})]})};export{b as Merchandise};
