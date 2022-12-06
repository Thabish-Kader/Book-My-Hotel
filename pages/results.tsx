import { GetServerSideProps } from "next";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type Props = {
	locationResults: LocationInfo[];
};

export default function Results({ locationResults }: Props) {
	return (
		<>
			<Header />
			<main className="p-4">
				<div>
					<p>06-December-2022</p>
					<h1 className="text-2xl font-bold">Locations in Ohio</h1>
					{/* buttons */}
					<div className="flex space-x-3 my-2">
						<button className="results-button">
							Cancel Anytime
						</button>
						<button className="results-button">Luxury</button>
						<button className="results-button">Price</button>
						<button className="results-button">
							Rooms and Beds
						</button>
						<button className="results-button">Filter</button>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export const getServerSideProps = async () => {
	const locationResults = await fetch(
		"https://www.jsonkeeper.com/b/5NPS"
	).then((res) => res.json());

	return {
		props: {
			locationResults,
		},
	};
};
