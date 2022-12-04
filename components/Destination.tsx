import React from "react";
import { exploreData } from "../data";
import { DestinationCards } from "./DestinationCards";
type Props = {};

export const Destinations = (props: Props) => {
	return (
		<section id="destinations" className="snap-center pt-6  px-8 sm:px-16">
			<h2 className="text-4xl font-semibold pb-5">Destinations</h2>

			{/* Pull some data from server  */}
			<div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
				{exploreData.map((item, i) => (
					<DestinationCards
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
