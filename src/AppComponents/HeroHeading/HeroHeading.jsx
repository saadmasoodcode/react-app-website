import React from 'react';
import styles from './HeroHeading.module.css';

function HeroHeading() {
	return (
		<div className={styles.container}>
			<div>
				<h1>Carl Sagan. Visual designer</h1>
			</div>
			<div>
				<div>
					<h3>
						I create art that is both aesthetically pleasing and
						emotionally resonant. I also design user interfaces that are
						intuitive and user-friendly.
					</h3>
				</div>
				<div>
					<button>Dribbble</button>
					<button>Behance</button>
					<button>Figma</button>
				</div>
			</div>
		</div>
	);
}

export default HeroHeading;
