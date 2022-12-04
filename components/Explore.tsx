import React from "react";
import { exploreData } from "../data";
import { ExploreCards } from "./ExploreCards";
type Props = {};

export const Explore = (props: Props) => {
	return (
		<section className="pt-6 max-w-7xl mx-auto px-8 sm:px-16">
			<h2 className="text-4xl font-semibold pb-5">Destinations</h2>

			{/* Pull some data from server  */}
			<div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
				{exploreData.map((item, i) => (
					<ExploreCards
						key={i}
						img={item.img}
						distance={item.distance}
						location={item.location}
					/>
				))}
			</div>
		</section>
	);
};
