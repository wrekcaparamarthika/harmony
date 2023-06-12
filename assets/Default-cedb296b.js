import{n as t,j as e,a as n,G as i,g as a,A as o}from"./index-772211f9.js";import{l as r}from"./index-36d1b027.js";const l=t.div`
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
`,s=()=>e.jsxs(l,{children:[e.jsx("div",{children:e.jsx(n,{to:"/ticket",children:"ticket"})}),e.jsx("div",{children:e.jsx(n,{to:"/lineup",children:"lineup"})}),e.jsx("div",{children:e.jsx(n,{to:"rundown",children:"rundown"})}),e.jsx("div",{children:e.jsx(n,{to:"merchandise",children:"merchandise"})})]}),d=t.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`,c=t.div`
	position: fixed;
	top: 10%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 1rem;
	div {
		background-color: #a6373e;
		padding: 1rem;
		height: 10rem;
		overflow-y: auto;
		p {
			text-indent: 2rem;
			text-align: justify;
			color: #fffef4;
		}
	}
	h1 {
		text-align: center;
		text-transform: uppercase;
		background-color: #a6373e;
		color: #fffef4;
	}
`,p=()=>e.jsxs(d,{children:[e.jsx(i,{styles:a}),e.jsxs(c,{children:[e.jsxs("div",{children:[e.jsx("p",{children:r.paragraph1}),e.jsx("p",{children:r.paragraph2}),e.jsx("p",{children:r.paragraph3})]}),e.jsx("h1",{children:'"bangkit dalam harmoni vol. II"'})]}),e.jsx(s,{}),e.jsx(o,{})]});export{p as Default};
