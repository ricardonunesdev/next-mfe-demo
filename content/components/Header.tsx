import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import User from './User';

function Header() {
	return (
		<header>
			<div
				style={{
					display: 'flex',
					width: '100%',
					padding: '1rem',
					backgroundColor: 'lightgray',
					flexDirection: 'row',
					flexWrap: 'nowrap',
					alignContent: 'center',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Menu />
				<Logo />
				<User />
			</div>
		</header>
	);
}

export default Header;
