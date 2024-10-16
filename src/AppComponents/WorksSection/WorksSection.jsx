import React, { useState } from 'react';
import servicesIcon from '../../img/3b8QXeZBa3UU0wTjhDyYPc2U.svg';
import styles from './WorksSection.module.css';
import WorksCard1 from '../../img/WorksCard1.avif';
import WorksCard2 from '../../img/WorksCard2.avif';
import WorksCard3 from '../../img/WorksCard3.png';
import WorksCard4 from '../../img/WorksCard4.avif';
import WorksCard5 from '../../img/WorksCard5.avif';
import WorksCard6 from '../../img/WorksCard6.avif';
import WorksSectionCard from './WorksSectionCard';
import { FaArrowRight } from 'react-icons/fa';

function WorksSection() {
	const [data, setData] = useState([
		{
			img: WorksCard1,
			txt: 'FireFly',
		},
		{
			img: WorksCard2,
			txt: 'Prola',
		},
		{
			img: WorksCard3,
			txt: 'Kozma',
		},
		{
			img: WorksCard4,
			txt: 'Slate AI',
		},
		{
			img: WorksCard5,
			txt: 'Go Jarvis',
		},
		{
			img: WorksCard6,
			txt: 'Trinity',
		},
	]);

	return (
		<div className={styles.container}>
			<h4>
				<img src={servicesIcon} alt="img" /> Works
			</h4>
			<br />
			<br />
			<div className={styles.cards_container}>
				{data.map((x, i) => {
					return <WorksSectionCard key={i} img={x.img} txt={x.txt} />;
				})}
			</div>
			<button className={styles.last_btn}>
				All Case Studies <FaArrowRight className={styles.arrow} />
			</button>
		</div>
	);
}

export default WorksSection;
