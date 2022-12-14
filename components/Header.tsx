import React, { useState } from "react";
import { IoSearchCircle } from "react-icons/io5";
import { FaBars, FaHotel, FaUser } from "react-icons/fa";
import { BsGlobe, BsFillPersonFill } from "react-icons/bs";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Link from "next/link";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

type Props = {};

export const Header = (props: Props) => {
	const [searchInput, setSearchInput] = useState<string>("");
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [endDate, setEndDate] = useState<Date>(new Date());
	const [noOfGuest, setNoOfGuest] = useState<number | string>(1);

	const router = useRouter();

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: "selection",
	};

	const handleSelect = (ranges: any) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	// function for searching locations -> pushes to results page
	const searchLocation = () => {
		router.push({
			pathname: "/results",
			query: {
				search: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				guest: noOfGuest,
			},
		});
	};

	return (
		<nav className="sticky bg-white top-0 z-50 grid grid-cols-3  py-5 px-5 md:px-10">
			{/* left */}
			<div
				onClick={() => router.push("/")}
				className="cursor-pointer flex items-center"
			>
				<FaHotel size={30} />
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
				<div className=" flex flex-col col-span-3 mx-auto bg-gray-200 p-4">
					<DateRangePicker
						ranges={[selectionRange]}
						onChange={handleSelect}
						minDate={new Date()}
					/>
					<div className="flex justify-between p-2">
						<h1 className="font-bold">Number Of Guests</h1>
						<div className="flex items-center space-x-2">
							<FaUser />
							<input
								className="w-12 rounded-lg px-2"
								type="number"
								value={noOfGuest}
								onChange={(e) => setNoOfGuest(e.target.value)}
							/>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<button
							onClick={() => setSearchInput("")}
							className="bg-grey-500 border bg-black text-white border-black p-2 rounded-lg font-semibold"
						>
							Cancel
						</button>
						<button
							onClick={searchLocation}
							className="bg-green-500 p-2 rounded-lg font-semibold"
						>
							Search
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};
