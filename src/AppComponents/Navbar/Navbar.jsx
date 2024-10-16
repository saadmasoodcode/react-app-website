import React from 'react';
import logo from '../../img/Logo.svg';
import { CiMenuBurger } from 'react-icons/ci';
import styles from './Navbar.module.css';

function Navbar({ menuOn, setMenuOn }) {
	function openMenu(e) {
		console.log(menuOn);
		setMenuOn((prevState) => !prevState);
	}

	return (
		<div className={styles.container}>
			<img src={logo} alt="" />
			<CiMenuBurger onClick={openMenu} className={styles.menu} />
		</div>
	);
}

export default Navbar;
