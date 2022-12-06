import Image, { StaticImageData } from "next/image";
import React from "react";
import hero2 from "../public/assets/heroImg.webp";

type Props = {};

export const Hero = (props: Props) => {
	return (
		<section
			id="hero"
			className="snap-center relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
		>
			<Image
				src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hawaii-vrbo-vacation-rental-1653063882.png"
				alt="/heroImg"
				fill
				className="object-cover rounded-lg"
			/>

			<div className="absolute top-1/2 w-full text-center">
				<p className="text-lg sm:text-xl uppercase font-bold tracking-wider">
					Experience what the world has to offer
				</p>

				<button className="text-white hover:bg-black  px-10 py-4 shadow-sm rounded-full  font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 border-2">
					Lets Go!!!
				</button>
			</div>
		</section>
	);
};
