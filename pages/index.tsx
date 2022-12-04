import Head from "next/head";
import { Destinations } from "../components/Destination";
import { Explore } from "../components/Explore";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Inspire } from "../components/Inspire";
import { Navbar } from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Find My Hotel</title>
			</Head>

			<Navbar />
			<main>
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
