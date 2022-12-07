import { format, parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LocationCards } from "../components/locationCards";
import { Maps } from "../components/Maps";

type Props = {
	locationResults: LocationInfo[];
};

export default function Results({ locationResults }: Props) {
	const {
		query: { search, startDate, endDate, guest },
	} = useRouter();

	const formatedStartDate = format(
		parseISO(startDate as string),
		"dd-MMMM-yyyy"
	);
	const formatedEndDate = format(parseISO(endDate as string), "dd-MMMM-yyyy");

	return (
		<>
			<Header />
			<main className="flex p-4">
				<section className="flex-grow pt-14 px-6 h-screen overflow-y-scroll">
					<div className="ml-6 lg:ml-10">
						<p>{`${formatedStartDate} - ${formatedEndDate}`}</p>
						<h1 className="text-2xl font-bold">
							Locations in {search}
						</h1>
						<p className="text-sm text-gray-500">
							Number of Guests: {guest}
						</p>
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

					<div className="flexflex-col p-5 space-y-10">
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
				</section>
				{/* Maps */}
				<section className="h-full w-[50%] hidden xl:inline-flex">
					<Maps />
				</section>
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
