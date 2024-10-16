import React from 'react';
import styles from './Menu.module.css';

function Menu({ menuOn, setMenuOn }) {
	return (
		<div
			className={
				menuOn === true
					? `${styles.container} ${styles.menu}`
					: styles.container
			}
		>
			<ul>
				<li>
					<sup>01</sup>
					<a href="/">Home</a>
				</li>
				<li>
					<sup>02</sup>
					<a href="/">About</a>
				</li>
				<li>
					<sup>03</sup>
					<a href="/">Work</a>
				</li>
				<li>
					<sup>04</sup>
					<a href="/">Journal</a>
				</li>
				<li>
					<sup>05</sup>
					<a href="/">Contact</a>
				</li>
				<li>
					<sup>06</sup>
					<a href="/">Buy Template</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
