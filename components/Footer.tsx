import React from "react";

type Props = {};

export const Footer = (props: Props) => {
	return (
		<footer className="grid grid-cols-1 md:grid-cols-4  px-32 py-14 gap-y-10 bg-gray-100">
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">LEARN</h5>
				<p>How We Operate</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Delux</p>
				<p>About us</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">COMMUNITY</h5>
				<p>How We Operate</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Delux</p>
				<p>About us</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">HOST</h5>
				<p>How We Operate</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Delux</p>
				<p>About us</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold">SUPPORT</h5>
				<p>How We Operate</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Delux</p>
				<p>About us</p>
			</div>
		</footer>
	);
};
