import ProxyHeader from '@/federated/ProxyHeader';

function Home() {
	return (
		<>
			<main>
				<ProxyHeader header_msg='message from shell' />
				Shell
			</main>
		</>
	);
}

export default Home;
