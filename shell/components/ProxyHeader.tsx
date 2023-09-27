import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const Header: ComponentType<HeaderProps> = dynamic(() => import('content/Header'), { ssr: false });

interface ProxyHeaderProps {
	header_msg: string;
}

interface HeaderProps {
	logo_msg: string;
}

function ProxyHeader({ header_msg }: ProxyHeaderProps) {
	return <Header logo_msg={header_msg} />;
}

export default ProxyHeader;
