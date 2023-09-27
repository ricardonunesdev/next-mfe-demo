import React from 'react';
import Menu from './Menu';
import Logo, { LogoProps } from './Logo';
import User from './User';

function Header({ logo_msg }: LogoProps) {
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
				<Logo logo_msg={logo_msg} />
				<User />
			</div>
		</header>
	);
}

export default Header;
