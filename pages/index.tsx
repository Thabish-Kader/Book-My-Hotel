import Head from "next/head";

import { Destinations } from "../components/Destination";
import { Explore } from "../components/Explore";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Inspire } from "../components/Inspire";

export default function Home() {
	return (
		<div className="h-screen scroll-smooth snap-y snap-mandatory overflow-scroll">
			<Head>
				<title>Find My Hotel</title>
			</Head>

			<main className="max-w-7xl mx-auto">
				<Header />
				<Hero />
				<Destinations />
				<Explore />
				<Inspire
					title="The Most Thrilling Adventures"
					description="Complete your bucketlist"
					buttonText="Get Inspired"
				/>
			</main>
			<Footer />
		</div>
	);
}
