import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const Header: ComponentType<HeaderProps> = dynamic(() => import('content/Header'), { ssr: false });

interface HeaderProps {
	logo_msg: string;
}

function ProxyHeader({ logo_msg }: HeaderProps) {
	return <Header logo_msg={logo_msg} />;
}

export default ProxyHeader;
