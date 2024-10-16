import React from 'react';
import styles from './WorksSectionCard.module.css';

function WorksSectionCard({ img, txt }) {
	return (
		<div className={styles.img_container}>
			<img src={img} alt="img" />
			<h2>{txt}</h2>
			<div className={styles.btns}>
				<button>UI.UX</button>
				<button>Branding</button>
				<button>Motion</button>
			</div>
		</div>
	);
}

export default WorksSectionCard;
