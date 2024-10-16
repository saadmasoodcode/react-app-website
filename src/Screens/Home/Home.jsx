import React, { useState } from 'react';
import HeroSection from '../../AppComponents/HeroSection/HeroSection';
import ServicesSection from '../../AppComponents/ServicesSection/ServicesSection';
import WorksSection from '../../AppComponents/WorksSection/WorksSection';
import JournalSection from '../../AppComponents/JournalSection/JournalSection';
import Footer from '../../AppComponents/Footer/Footer';
import Menu from '../../AppComponents/Menu/Menu';
import Navbar from '../../AppComponents/Navbar/Navbar';

function Home() {
	const [menuOn, setMenuOn] = useState(false);

	return (
		<div>
			<Navbar menuOn={menuOn} setMenuOn={setMenuOn} />
			<Menu menuOn={menuOn} setMenuOn={setMenuOn} />
			<HeroSection />
			<ServicesSection />
			<WorksSection />
			<JournalSection />
			<Footer />
		</div>
	);
}

export default Home;
