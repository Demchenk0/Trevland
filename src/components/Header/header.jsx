import React from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import s from './Header.module.scss';
// import { Link } from 'react-scroll';
const Header = () => {
  // const [nav, setNav] = useState(false);

	// const handleNav = () => {
	// 	setNav(!nav);
	// };

	// const [isScrolled, setIsScrolled] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.scrollY > 0) {
	// 			setIsScrolled(true);
	// 		} else {
	// 			setIsScrolled(false);
	// 		}
	// 	};

	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);
  return (
    <header className={s.header}>
		<div  className={s.container}>
      <a className={s.a} href="/">Travlend</a>
      <nav>
        <ul className={s.list}>
          <li className={s.item}>Home</li>
          <li className={s.item}>Location</li>
          <li className={s.item}>Blog</li>
          <li className={s.item}>About</li>
          <li className={s.item}>Contact</li>
        </ul>
      </nav>
      <button className={s.btn}>Booking now</button>
    </div>
		</header>
  )
}

export default Header
