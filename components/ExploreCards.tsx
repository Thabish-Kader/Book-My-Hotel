import Image from "next/image";
import React, { FC } from "react";

type Props = {};

export const ExploreCards: FC<ExploreCardProps> = ({ img, title }) => {
	return (
		<div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
			<div className="relative h-80 w-80">
				<Image
					src={img}
					alt="/"
					fill
					className="rounded-xl object-cover"
				/>
			</div>
			<h3 className="text-2xl mt-3 ">{title}</h3>
		</div>
	);
};
