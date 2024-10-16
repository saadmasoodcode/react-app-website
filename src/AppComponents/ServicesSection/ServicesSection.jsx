import React from 'react';
import styles from '../ServicesSection/ServicesSection.module.css';
import servicesIcon from '../../img/3b8QXeZBa3UU0wTjhDyYPc2U.svg';
import servicesIcon1 from '../../img/QmUyqMzksTMIZz4zVU65F9A8a8.svg';
import servicesIcon2 from '../../img/e3NmqNjhjODj3TUXSM3pBIxlSgY.svg';
import servicesIcon3 from '../../img/Lz8bmhKl0dhQXbOW0PsiWVcWPFg.svg';
import servicesIcon4 from '../../img/VcfLQ257LpqcV0QnPjokLdXU00.svg';
import servicesIcon5 from '../../img/v86mRBvt2EqyqRRcngROJT1co.svg';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../../components/ui/accordion';

function ServicesSection() {
	return (
		<div className={styles.container}>
			<h4>
				<img src={servicesIcon} alt="" /> Services
			</h4>
			<br />
			<br />
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<h1>
							<img src={servicesIcon1} alt="" /> UI Design
						</h1>
					</AccordionTrigger>
					<AccordionContent>
						Our Ul design service focuses on crafting intuitive and
						visually appealing user interfaces that enhance the overall
						user experience. We pay meticulous attention to detail,
						ensuring that every element is thoughtfully designed to
						optimize usability and engagement. Whether it's for web,
						mobile, or software applications, we strive to create
						interfaces that not only look great but also function
						seamlessly.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>
						<h1>
							<img src={servicesIcon2} alt="" /> Development
						</h1>
					</AccordionTrigger>
					<AccordionContent>
						Our development service encompasses a wide range of
						capabilities, from website development to custom software
						solutions. We leverage the latest technologies and industry
						best practices to deliver robust, scalable, and
						high-performance solutions tailored to our clients' specific
						needs. Whether you're looking to build a responsive website, a
						complex web application, or streamline your business processes
						with custom software, our team of experienced developers is
						ready to bring your vision to life.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>
						<h1>
							<img src={servicesIcon3} alt="" /> Branding
						</h1>
					</AccordionTrigger>
					<AccordionContent>
						With our branding service, we help businesses establish a
						strong and memorable brand identity that sets them apart from
						the competition. From logo design to brand strategy, we work
						closely with our clients to develop cohesive brand assets that
						effectively communicate their values, personality, and vision.
						Whether you're a startup looking to make a splash or an
						established company in need of a brand refresh, we're here to
						help you make a lasting impression.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>
						<h1>
							<img src={servicesIcon4} alt="" /> Animation
						</h1>
					</AccordionTrigger>
					<AccordionContent>
						Bring your ideas to life with our animation service. Whether
						you're looking to create eye-catching explainer videos,
						dynamic motion graphics, or immersive 3D animations, we have
						the expertise to turn your concepts into captivating visual
						experiences. Our talented animators combine creativity with
						technical skill to deliver animations that engage and delight
						audiences across various platforms and mediums.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger>
						<h1>
							<img src={servicesIcon5} alt="" /> Motion
						</h1>
					</AccordionTrigger>
					<AccordionContent>
						Elevate your digital presence with our motion design service.
						From interactive website elements to captivating social media
						content, we specialize in creating dynamic motion graphics
						that enhance user engagement and brand storytelling. Whether
						it's adding subtle animations to enhance user interactions or
						producing full-motion videos to showcase your products or
						services, we'll help you stand out in today's crowded digital
						landscape.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default ServicesSection;
