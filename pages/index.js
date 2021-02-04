import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
	return (
		<div className="">
			<Header />
			<Head>
				<title>San Antonio based Web Developer & Designer</title>
				<meta name="keywords" content="web development, programming, web design" />
			</Head>
		</div>
	);
}
