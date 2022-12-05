import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { FaBars, FaHotel } from "react-icons/fa";
import { BsGlobe, BsFillPersonFill } from "react-icons/bs";
import "react-date-range-ts/dist/styles.css"; // main style file
import "react-date-range-ts/dist/theme/default.css"; // theme css file
import Link from "next/link";
import { DateRangePicker } from "react-date-range-ts";

type Props = {};

export const Header = (props: Props) => {
	const [searchInput, setSearchInput] = useState<string>("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleSelect = (ranges: any) => {
		console.log(ranges);
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	return (
		<nav className="sticky bg-white top-0 z-50 grid grid-cols-3  py-5 px-5 md:px-10">
			{/* left */}
			<div className="flex items-center">
				<FaHotel size={30} className="" />
				<h1 className="text-4xl font-bold hidden lg:inline-flex">
					La Masison
				</h1>
			</div>
			{/* middle == search */}
			<div className="flex items-center md:border-2 rounded-full  md:shadow-sm">
				<input
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					type="text"
					className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
					placeholder="Start your search.."
				/>
				<IoSearchCircle
					size={50}
					className="  cursor-pointer hidden md:inline-flex "
				/>
			</div>

			{/* right */}
			<div className="flex space-x-4 items-center  text-gray-500 justify-end">
				<Link className="hidden lg:inline-block" href="/#explore">
					Explore
				</Link>
				<Link href="/#footer">
					<BsGlobe size={30} className="cursor-pointer" />
				</Link>

				<div className="flex space-x-2 border-2 p-2 rounded-full bg-black text-white ">
					<Link href="/#destinations">Destinations</Link>
				</div>
			</div>
			{searchInput && (
				<div className=" p-4 mt-4 bg-gray-200 col-span-3 mx-auto">
					<DateRangePicker
						ranges={[selectionRange]}
						onChange={handleSelect}
						minDate={new Date()}
					/>
				</div>
			)}
		</nav>
	);
};
