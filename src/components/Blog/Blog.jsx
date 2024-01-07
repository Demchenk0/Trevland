import React from 'react';
import s from './Blog.module.scss';
import Image from 'next/image';
import Canada from '../../img/canada.jpg';
import Japan from '../../img/japan.jpg';
import Naltar from '../../img/Naltar.jpg';
import India from '../../img/india-top.jpg';
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
				<ul className={s.list}>
					{/* <div className={s.boxTcard}> */}
					<li className={s.grid1}>
						<Image width={554} height={397} src={Canada} alt="photo" />
						<h3 className={s.title1}>Banff National Park</h3>
						<p className={s.text}>
							Banff National Park lies in the heart of the majestic Rocky
							Mountains in the province of Alberta, and showcases some of
							Canada's most beautiful scenery. Turquoise-colored lakes,
							snow-capped peaks, and glaciers are all easily accessible
						</p>
						<span className={s.mail}>
						@thomasalva_adison
						</span>
					</li>
					{/* </div> */}
					<div className={s.boxLi}>
						<li className={s.grid2}>
							<Image width={260} height={200} src={Japan} alt="photo" />
							<div className={s.boxTcard}>
								<h3 className={s.title1}>The Hiroshima Peace!</h3>
								<p className={s.text}>
									It was formally opened to the public in August that year.
								</p>
								<span >
						@shova_bd88
						</span>
							</div>
						</li>
						<li className={s.grid2}>
							<Image width={260} height={200} src={India} alt="photo" />
							<div className={s.boxTcard}>
								<h3 className={s.title1}>The faithful prayers!</h3>
								<p className={s.text}>
									A major pilgrimage center for Hindus, the holy city.
								</p>
								<span >
								@adem/smith
						</span>
							</div>
						</li>
						<li className={s.grid2}>
							<Image width={260} height={200} src={Naltar} alt="photo" />
							<div className={s.boxTcard}>
								<h3 className={s.title1}>Colourful waters!</h3>
								<p className={s.text}>
									Forest-driven water and energy cycles are poorly.
								</p>
								<span >
								@jhon7leew
						</span>
							</div>
						</li>
					</div>
				</ul>
			</div>
		</section>
	);
};

export default Blog;
