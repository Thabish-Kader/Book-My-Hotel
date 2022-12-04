import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Find My Hotel</title>
			</Head>

			<main>
				<Navbar />
				<Hero />
			</main>
		</div>
	);
}
