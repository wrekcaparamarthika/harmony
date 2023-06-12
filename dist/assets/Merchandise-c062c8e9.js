import{n as d,R as i,j as e,G as f,g as m,N as x,L as h,A as p}from"./index-1e369e17.js";import{c as g}from"./index-36d1b027.js";const r=""+new URL("MERCHANDISE_BLACK-16b1a57c.png",import.meta.url).href,s=""+new URL("MERCHANDISE_WHITE-4ed43d83.png",import.meta.url).href,a=""+new URL("MERCHANDISE_SizeChart-190af60f.svg",import.meta.url).href,j=d.div`
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
		z-index: 999;
		position: fixed;
		width: 100%;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0%;
		flex-direction: column;
		margin: 0rem;
		display: flex;
		justify-content: center;
		padding: 0.5rem;
		h1 {
			text-align: center;
		}
		p {
			text-align: center;
		}
		div {
			display: flex;
			flex-direction: row;
			justify-content: center;
			a {
				color: #fffef4;
				text-decoration: none;
				cursor: pointer;
				font-style: italic;
				font-weight: 700;
				text-decoration: underline;
				padding: 0.5rem;
			}
		}
	}
`,y=()=>{const[t,o]=i.useState(!1),c=()=>{o(n=>!n)};return e.jsxs(i.Fragment,{children:[e.jsx(f,{styles:m}),e.jsx(x,{title:"merchandise"}),e.jsxs(j,{children:[e.jsx("button",{onClick:c,children:t?"merchandise":"size chart"}),e.jsxs("section",{children:[e.jsx("h1",{children:t?"size chart":"official merchandise"}),!t&&e.jsxs(i.Fragment,{children:[e.jsx("img",{src:s,alt:s}),e.jsx("img",{src:r,alt:r})]}),t&&e.jsx("img",{src:a,alt:a})]}),e.jsxs("section",{children:[e.jsx("h1",{children:"contact person"}),e.jsx("p",{children:"untuk preorder bisa langsung klik contact person tersebut agar nanti diarahkan ke whatsapp!"}),e.jsx("div",{children:g.map((n,l)=>e.jsx(i.Fragment,{children:e.jsx(h,{to:n.cp,children:n.name})},l))})]})]}),e.jsx(p,{})]})};export{y as Merchandise};
