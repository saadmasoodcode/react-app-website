import React from 'react';
import design1 from '../../img/8Fk6RlgtqXHopQpMemxEHY24eI8.avif';
import styles from './HeroDesign.module.css';
import video1 from '../../video/a7oLlvkswlykX0srOqFY3gx1s.mp4';
import video2 from '../../video/GBwyoZQ9MSVvWK3MBfzqg5v8NMM.mp4';
import design2 from '../../img/TJNTTWGjUItiBrVQwBNfxZzxNE.avif';
import design3 from '../../img/YAmzP6ZyEyTjm6BB2QmRLV8XYgE.avif';
import design4 from '../../img/aZ7rJFO62w29QFKecSIazsAsa5I.avif';

function HeroDesign() {
	return (
		<div className={styles.container}>
			<img className={styles.item1} src={design1} alt="" />
			<video
				autoPlay
				loop
				muted
				playsinline
				className={styles.item2}
				src={video1}
				type="video/mp4"
			></video>
			<img className={styles.item3} src={design2} alt="" />
			<img className={styles.item4} src={design3} alt="" />
			<img className={styles.item5} src={design4} alt="" />
			<video
				autoPlay
				loop
				muted
				playsinline
				className={styles.item6}
				src={video2}
				type="video/mp4"
			></video>
		</div>
	);
}

export default HeroDesign;
