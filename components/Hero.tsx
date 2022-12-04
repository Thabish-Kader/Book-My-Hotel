import Image from "next/image";
import React from "react";
import hero from "../public/assets/heroImg.webp";

type Props = {};

export const Hero = (props: Props) => {
	return (
		<section
			id="hero"
			className="snap-center relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
		>
			<Image src={hero} alt="baneer" fill className="object-cover" />

			<div className="absolute top-1/2 w-full text-center">
				<p className="text-sm sm:text-lg uppercase font-bold ">
					Experience what the world has to offer
				</p>

				<button className="text-green-500 px-10 py-4 shadow-sm rounded-full bg-white font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 border-2">
					Lets Go!!!
				</button>
			</div>
		</section>
	);
};
