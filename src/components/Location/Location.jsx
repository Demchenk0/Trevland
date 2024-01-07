import React from 'react';
import s from './Locatont.module.scss';
import Image from 'next/image';
import Photo1 from '../../img/image45.jpg';
import Photo3 from '../../img/image47.jpg';
import Photo2 from '../../img/image48.jpg';
const Location = () => {
	return (
		<section>
			<div className={s.container}>
            <div className={s.boxText}>
				<h2 className={s.title}>Popular Location</h2>
				<p className={s.text}>
					For every one of us, travel came first. We’ve spent years living as
					nomads, pioneers, and voyagers— from island hopping in the
				</p>
                </div>
				<ul className={s.list}>
					<li>
						<Image width={360} height={330} src={Photo1} alt="photo" />
                        <div className={s.boxTcard}>
						<h3 className={s.title1}>Istanbul, Turkey</h3>
						<p className={s.text}>Istanbul is a major city in Turkey that straddles Europe. </p>
                        </div>
					</li>
                    <li>
						<Image width={360} height={330} src={Photo2} alt="photo" />
                        <div  className={s.boxTcard}>
						<h3 className={s.title1}>Kuala Lumpur, malaysia</h3>
						<p className={s.text}>A 272-step long trek leads you to this century.</p>
                        </div>
					</li>
                    <li>
						<Image width={360} height={330} src={Photo3} alt="photo" />
                        <div  className={s.boxTcard}>
						<h3 className={s.title1}>Seoul, South Korea</h3>
						<p className={s.text}>South Korea officially the Republic of Korea is a country in East Asia.</p>
                        </div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Location;
