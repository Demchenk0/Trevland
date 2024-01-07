import React from 'react';
import s from './Blog.module.scss';
import Image from 'next/image';
import Photo1 from '../../img/canada.jpg';
import Photo3 from '../../img/image47.jpg';
import Photo2 from '../../img/image48.jpg';
import Photo4 from '../../img/image48.jpg';
const Blog = () => {
	return (
		<section>
			<div className={s.container}>
				<div className={s.boxText}>
					<h1 className={s.title}>From Blog & News</h1>
					<p className={s.text}>
						Welcome to Community Conversations, a new interview series featuring
						Intrepid travellers, creatives and activists in our community.
					</p>
				</div>
				<div>
					<ul className={s.list}>
							<div className={s.boxTcard}>
						<li>
							<Image width={554} height={397} src={Photo1} alt="photo" />
								<h3 className={s.title1}>Banff National Park</h3>
								<p className={s.text}>
                                Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canada's most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible 
								</p>
						</li>
							</div>
                        <div className={s.boxLi}>
						<li>
							<Image width={260} height={200} src={Photo1} alt="photo" />
							<div className={s.boxTcard}>
								<h3 className={s.title1}>Istanbul, Turkey</h3>
								<p className={s.text}>
									Istanbul is a major city in Turkey that straddles Europe.{' '}
								</p>
							</div>
						</li>
						<li>
							<Image width={260} height={200} src={Photo2} alt="photo" />
							<div className={s.boxTcard}>
								<h3 className={s.title1}>Kuala Lumpur, malaysia</h3>
								<p className={s.text}>
									A 272-step long trek leads you to this century.
								</p>
							</div>
						</li>
						<li>
							<Image width={260} height={200} src={Photo3} alt="photo" />
							<div className={s.boxTcard}>
								<h3 className={s.title1}>Seoul, South Korea</h3>
								<p className={s.text}>
									South Korea officially the Republic of Korea is a country in
									East Asia.
								</p>
							</div>
						</li>
                        </div>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Blog;
