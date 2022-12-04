import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import Inspireimg from "../public/assets/inspireImg.webp";

export const Inspire: FC<InspireProps> = ({
	title,
	description,
	buttonText,
}) => {
	return (
		<section className="max-w-7xl mx-auto relative py-16 cursor-pointer">
			<Image
				src={Inspireimg}
				alt="/img"
				className="object-cover rounded-2xl  h-96 min-w-[300px]"
			/>

			<div className="absolute top-32 left-12">
				<h3 className="text-4xl mb-3 w-64">{title}</h3>
				<p>{description}</p>

				<button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
					{buttonText}
				</button>
			</div>
		</section>
	);
};
