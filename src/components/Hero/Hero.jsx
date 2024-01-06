import React from 'react';
import s from './Hero.module.scss';

const Hero = () => {
	return (
		<section name="home" className={s.section}>
			<div className={s.container}>
				<h1 className={s.title}>Railtrips To Here, There And Everywhere!</h1>
				<p className={s.text}>
					We all wish to start our year the best way possible and also according
					to a common belief if you have a great start to your.
				</p>
				<button className={s.btn}>Explore more</button>
			</div>
		</section>
	);
};

export default Hero;
