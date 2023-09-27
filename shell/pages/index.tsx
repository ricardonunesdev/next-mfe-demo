import dynamic from 'next/dynamic';

const Header = dynamic(() => import('content/Header'), { ssr: false });

function Home() {
	return (
		<>
			<main>
				<Header />
				Shell
			</main>
		</>
	);
}

export default Home;
