import Image from "next/image";
import React from "react";
import { BsHeart, BsStarFill } from "react-icons/bs";

export const LocationCards = ({
	img,
	location,
	title,
	description,
	star,
	price,
	total,
}: LocationInfo) => {
	return (
		<div className="flex space-x-5 border-b hover:opacity-80 hover:shadow-lg hover:scale-105 transition transform duration-300 ease-out first:border-t py-2 lg:pr-8 lg:pl-2 cursor-pointer">
			{/* img */}
			<div className="relative h-[200px] w-[300px] lg:h-[250px] lg:w-[350px]">
				<Image
					src={img}
					alt="/img"
					fill
					className="object-cover rounded-lg"
				/>
			</div>

			{/* hotel info */}
			<div className="flex flex-col flex-1 ">
				<div className="flex justify-between items-center">
					<h3>{location}</h3>
					<BsHeart />
				</div>
				<h1 className="text-xl font-semibold">{title}</h1>
				<p className="mt-5 text-sm text-gray-500">{description}</p>

				{/* rating and price */}
				<div className="flex items-center justify-between mt-14">
					<div className="flex items-center space-x-1">
						<BsStarFill className="text-yellow-500" />
						<p>{star}</p>
					</div>

					<div className="flex flex-col items-end">
						<p className="text-2xl font-bold">{price}</p>
						<p className="text-sm font-extralight">{total}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
