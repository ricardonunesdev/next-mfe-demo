import React from 'react';

function Logo() {
	function handleClick() {
		alert('You clicked the logo');
	}

	return <div onClick={handleClick}>Logo</div>;
}

export default Logo;
