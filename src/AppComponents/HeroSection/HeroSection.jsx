import React from 'react';
import HeroHeading from '../HeroHeading/HeroHeading';
import styles from './HeroSection.module.css';
import HeroDesign from '../HeroDesign/HeroDesign';

function HeroSection() {
	return (
		<div className={styles.container}>
			<HeroHeading />
			<HeroDesign />
		</div>
	);
}

export default HeroSection;
