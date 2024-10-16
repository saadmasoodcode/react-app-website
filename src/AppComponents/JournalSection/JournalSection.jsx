import React from 'react';
import servicesIcon from '../../img/3b8QXeZBa3UU0wTjhDyYPc2U.svg';
import styles from './JournalSection.module.css';
import journal1 from '../../img/journal1.avif';
import journal2 from '../../img/journal2.avif';
import journal3 from '../../img/journal3.avif';
import JournalCard from './JournalCard';

function JournalSection() {
	const journalData = [
		{
			img: journal1,
			date: 'Apr 8, 2022',
			desc: '20 psychological principles applied to product design',
		},
		{
			img: journal2,
			date: 'Apr 8, 2022',
			desc: 'Level Up Your Coding Skills: Discover the Best Resources to Enhance Your Expertise',
		},
		{
			img: journal3,
			date: 'Apr 8, 2022',
			desc: 'Resources Galore: A Curated Collection of Top-Notch Coding Resources',
		},
	];

	return (
		<div className={styles.container}>
			<h4>
				<img src={servicesIcon} alt="img" /> Journal
			</h4>
			<div className={styles.journal_cards}>
				{journalData.map((x, i) => {
					return <JournalCard img={x.img} date={x.date} desc={x.desc} />;
				})}
			</div>
		</div>
	);
}

export default JournalSection;
