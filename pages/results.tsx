import { GetServerSideProps } from "next";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LocationCards } from "../components/locationCards";

type Props = {
	locationResults: LocationInfo[];
};

export default function Results({ locationResults }: Props) {
	return (
		<>
			<Header />
			<main className="p-4">
				<div>
					<div className="ml-6 lg:ml-10">
						<p>06-December-2022</p>
						<h1 className="text-2xl font-bold">
							Locations in Ohio
						</h1>
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

					<div className="flex flex-col p-5 space-y-10">
						{/* locations cards */}
						{locationResults.map((location, i) => (
							<LocationCards
								key={i}
								img={location.img}
								location={location.location}
								title={location.title}
								description={location.description}
								star={location.star}
								price={location.price}
								total={location.total}
								long={location.long}
								lat={location.lat}
							/>
						))}
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
