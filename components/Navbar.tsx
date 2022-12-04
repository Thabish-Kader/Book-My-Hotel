import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

export const Navbar = () => {
	const [nav, setNav] = useState<boolean>(false);
	const [bgColor, setBgColor] = useState<string>("transparen");
	const [textclr, setTextclr] = useState<string>("white");

	const changeColor = () => {
		if (window.scrollY >= 100) {
			setBgColor("white");
			setTextclr("black");
		} else {
			setBgColor("transparent");
			setTextclr("white");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeColor);
	});
	return (
		<nav
			style={{ backgroundColor: `${bgColor}` }}
			className="fixed top-0 left-0 z-10 w-full duration-1000 ease-in"
		>
			<div className="items center m-auto flex max-w-[1240px] justify-between p-4 text-white ">
				<Link href="/">
					<h1
						className="text-4xl font-bold"
						style={{ color: `${textclr}` }}
					>
						La Masison
					</h1>
				</Link>
				{/* Links */}
				<ul
					style={{ color: `${textclr}` }}
					className="text-l hidden sm:flex"
				>
					<li className="p-4">
						<Link href="/">Home</Link>
					</li>
					<li className="p-4">
						<Link href="/#properties">Properties</Link>
					</li>
					<li className="p-4">
						<Link href="/#available">Availaible</Link>
					</li>
					<li className="p-4">
						<Link href="/#contact">Contact</Link>
					</li>
					<li className="p-4">
						<Link href="/about">About Us</Link>
					</li>
				</ul>

				{/* Mobile button Links */}
				<div
					className="z-10 mt-2 block cursor-pointer sm:hidden"
					onClick={() => setNav(!nav)}
				>
					{nav ? (
						<AiFillCloseCircle
							style={{ color: `${textclr}` }}
							size={30}
						/>
					) : (
						<GoThreeBars
							style={{ color: `${textclr}` }}
							size={30}
						/>
					)}
				</div>

				{/* Mobile view Links */}
				<div
					onClick={() => setNav(!nav)}
					className={
						nav
							? "absolute top-0 left-0 right-0 bottom-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
							: "absolute top-0 left-[-100%] right-0 bottom-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
					}
				>
					<ul>
						<li
							onClick={() => setNav(!nav)}
							className="p-4 text-4xl hover:text-gray-500"
						>
							<Link href="/">Home</Link>
						</li>
						<li
							onClick={() => setNav(!nav)}
							className="p-4 text-4xl hover:text-gray-500"
						>
							<Link href="/#properties">Properties</Link>
						</li>
						<li
							onClick={() => setNav(!nav)}
							className="p-4 text-4xl hover:text-gray-500"
						>
							<Link href="/#available">Available</Link>
						</li>
						<li
							onClick={() => setNav(!nav)}
							className="p-4 text-4xl hover:text-gray-500"
						>
							<Link href="/#contact">Contact Info</Link>
						</li>
						<li
							onClick={() => setNav(!nav)}
							className="p-4 text-4xl hover:text-gray-500"
						>
							<Link href="/about">About Us</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
