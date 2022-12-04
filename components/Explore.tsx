import React from "react";
import { liveAnywhere as cardData } from "../data";
import { ExploreCards } from "./ExploreCards";

type Props = {};

export const Explore = (props: Props) => {
	return (
		<section className="max-w-7xl mx-auto">
			<h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
			<div className="flex overflow-x-scroll space-x-3 scrollbar-hide p-3">
				{cardData.map((item, i) => (
					<ExploreCards key={i} img={item.img} title={item.title} />
				))}
			</div>
		</section>
	);
};
