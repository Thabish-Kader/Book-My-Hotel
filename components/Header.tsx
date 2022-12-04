import React from "react";
import { IoSearchCircle } from "react-icons/io5";
import { FaBars, FaHotel } from "react-icons/fa";
import { BsGlobe, BsFillPersonFill } from "react-icons/bs";
import Image from "next/image";
import logo from "../public/assets/logo.jpg";
type Props = {};

export const Header = (props: Props) => {
	return (
		<nav className="sticky top-0 z-50 grid grid-cols-3  py-5 px-5 md:px-10">
			{/* left */}
			<div className="flex items-center">
				<FaHotel size={30} className="text-green-500" />
			</div>
			{/* middle == search */}
			<div className="flex items-center md:border-2 rounded-full  md:shadow-sm">
				<input
					type="text"
					className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
					placeholder="Start your search.."
				/>
				<IoSearchCircle
					size={50}
					className=" text-green-400 cursor-pointer hidden md:inline-flex "
				/>
			</div>

			{/* right */}
			<div className="flex space-x-4 items-center  text-gray-500 justify-end">
				<p className="hidden md:inline cursor-pointer">Travel</p>
				<BsGlobe size={30} className="cursor-pointer text-green-400" />

				<div className="flex space-x-2 border-2 p-2 rounded-full bg-green-400">
					<FaBars size={30} />
					<BsFillPersonFill size={30} />
				</div>
			</div>
		</nav>
	);
};
