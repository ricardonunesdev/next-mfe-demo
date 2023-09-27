import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const Header: ComponentType<HeaderProps> = dynamic(() => import('content/Header'), { ssr: false });

interface HeaderProps {
	logo_msg: string;
}

function ProxyHeader(props: HeaderProps) {
  return (
	<Header {...props} />
  )
}

export default ProxyHeader
