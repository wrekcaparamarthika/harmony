import Banner from '../components/Banner';
import { Global } from '@emotion/react';
import globalInject from '../style/DefaultStyle';
import styled from '@emotion/styled';
import Artwork from '../components/Artwork';
const MainStyle = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;
const latarText = {
	paragraph1: `Mengacu pada dampak dari Pandemi Covid - 19 di indonesia
	yang hampir 3 (tiga) tahun melanda dunia baik Ekonomi,
	Sosial maupun Budaya menjadi tidak stabil, dimana banyak
	masyarakat meminimalisir untuk berinterkasi antara satu
	sama lain, hal ini membuat semua sektor baik Ekonomi,
	Sosial dan Budaya menjadai down.`,
	paragraph2: `Melihat perkembangan kasus Covid - 19 di Indonesia,
	khususnya di bali semakin menurun dan kelonggaran
	peraturan PPKM membuat interaksi masyarakat satu sama
	lain mulai bergeliat. Namun hal tersebut belum dapat
	membuat sektor Ekonomi, Sosial, dan Budaya berjalan
	optimal.`,
	paragraph3: `Maka, kami selaku generasi penerus ingin membuat suatu
	program yang mampu mendorong sektor Ekonomi, Sosial dan
	Budaya agar dapat bergeliat kembali secara normal dengan
	memberdayakan UMKM, menumbuhkan kesadaran sosial bagi
	masyarakat, serta menggeliatkan kembali sektor
	kebudayaan di masyarakat yang kami rangkum dalam tema`,
};
const LatarStyle = styled.div`
	position: fixed;
	top: 10%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	div {
		background-color: #a6373e;
		border-radius: 2.5rem;
		padding: 1rem;
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
`;
const Default = () => {
	return (
		<MainStyle>
			<Global styles={globalInject} />
			<LatarStyle>
				<div>
					<p>{latarText.paragraph1}</p>
					<p>{latarText.paragraph2}</p>
					<p>{latarText.paragraph3}</p>
				</div>
				<h1>"bangkit dalam harmoni vol. II"</h1>
			</LatarStyle>
			<Banner />
			<Artwork />
		</MainStyle>
	);
};
export default Default;
