import{n as o,j as e,R as r,G as i,g as s,N as c,L as a,A as l}from"./index-8dd7e39d.js";import{c as h}from"./index-36d1b027.js";const p=""+new URL("Merch1-36fc26d3.png",import.meta.url).href,d=""+new URL("Merch2-99c8a7d9.png",import.meta.url).href,m=""+new URL("Merch3-b433b9bd.png",import.meta.url).href,f=""+new URL("Merch4-9a1c61e2.png",import.meta.url).href,x=o.div`
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	height: 100vh;
	gap: 5rem;
	img {
		width: 320px;
	}
	section:nth-of-type(1) {
		display: flex;
		flex-direction: column;
		img:nth-of-type(2) {
			position: absolute;
			top: 10rem;
			left: 5rem;
		}
	}
	section:nth-of-type(2) {
		display: flex;
		flex-direction: column;
		img:nth-of-type(2) {
			position: absolute;
			top: 30rem;
			left: 5rem;
		}
	}
	section:nth-of-type(3) {
		background-color: #a6373e;
		color: #fffef4;
		text-transform: capitalize;
		padding: 1rem;
		height: fit-content;
		z-index: 999;
		position: fixed;
		width: 50%;
		top: 45%;
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
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
`,u=()=>e.jsxs(r.Fragment,{children:[e.jsx(i,{styles:s}),e.jsx(c,{title:"merchandise"}),e.jsxs(x,{children:[e.jsxs("section",{children:[e.jsx("img",{src:m}),e.jsx("img",{src:p})]}),e.jsxs("section",{children:[e.jsx("img",{src:f}),e.jsx("img",{src:d})]}),e.jsxs("section",{children:[e.jsx("h1",{children:"contact person"}),e.jsx("p",{children:"untuk preorder bisa langsung klik contact person tersebut agar nanti diarahkan ke whatsapp!"}),h.map((t,n)=>e.jsx(r.Fragment,{children:e.jsx(a,{to:t.cp,children:t.name})},n))]})]}),e.jsx(l,{})]});export{u as Merchandise};
