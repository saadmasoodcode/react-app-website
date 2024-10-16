import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import styles from './Footer.module.css';
import { FaArrowRight } from 'react-icons/fa';

function Footer() {
	return (
		<div className={styles.container}>
			<h1>Let’s create your next big idea.</h1>
			<button>
				Schedule a call <FaArrowRight />
			</button>
			<div className={styles.links}>
				<a href="/">Home</a>
				<a href="/">Case Studies</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
				<a href="/">Blog</a>
				<a href="/">Terms</a>
			</div>
			<h5>
				<FaRegCopyright />
				2088 Nayzak Design
			</h5>
		</div>
	);
}

export default Footer;
