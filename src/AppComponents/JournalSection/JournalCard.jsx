import React from 'react';
import styles from './JournalCard.module.css';

function JournalCard({ img, date, desc }) {
	return (
		<div className={styles.container}>
			<img src={img} alt="journal" />
			<div>
				<h6>{date}</h6>
				<h2>{desc}</h2>
			</div>
		</div>
	);
}

export default JournalCard;
