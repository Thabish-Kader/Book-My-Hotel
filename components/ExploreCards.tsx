import Image from "next/image";
import React, { FC } from "react";

export const ExploreCards: FC<SmallCardProps> = ({
	img,
	distance,
	location,
}) => {
	return (
		<div className="flex flex-col items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
			{/* left */}
			<div className="relative h-[200px] w-[200px]">
				<Image
					src={img}
					alt="img"
					fill
					className="rounded-lg object-cover"
				/>
			</div>
			{/* right */}
			<div className="flex space-x-3">
				<h2>{location}</h2>
				<h3 className="text-gray-500">{distance}</h3>
			</div>
		</div>
	);
};
