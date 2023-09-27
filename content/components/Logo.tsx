import React from 'react';

export interface LogoProps {
	logo_msg: string;
}

function Logo({ logo_msg }: LogoProps) {
	function handleClick() {
		alert(logo_msg);
	}

	return <div onClick={handleClick}>Logo</div>;
}

export default Logo;
