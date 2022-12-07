import React, { useContext, useState } from "react";
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";
import { Context } from "../pages/results";

export const Maps = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
	});

	if (!isLoaded) return <p>Loading...</p>;
	return <Map />;
};

function Map() {
	const context = useContext(Context);

	// console.log(context);
	// transforming the array to match the code from https://codesandbox.io/s/react-google-mapsapi-multiple-markers-infowindow-h6vlq?file=/src/Map.js:114-544
	const markers = context?.map((location, i) => ({
		id: i,
		name: location.title,
		position: { lat: location.lat, lng: location.long },
	}));

	const [activeMarker, setActiveMarker] = useState(null);

	const handleActiveMarker = (marker: any) => {
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	const handleOnLoad = (map: any) => {
		const bounds = new google.maps.LatLngBounds();
		markers.forEach(({ position }) => bounds.extend(position));
		map.fitBounds(bounds);
	};

	return (
		<GoogleMap
			onLoad={handleOnLoad}
			onClick={() => setActiveMarker(null)}
			mapContainerStyle={{ width: "100vw", height: "100vh" }}
		>
			{markers.map(({ id, name, position }) => (
				<Marker
					key={id}
					position={position}
					onClick={() => handleActiveMarker(id)}
				>
					{activeMarker === id ? (
						<InfoWindow onCloseClick={() => setActiveMarker(null)}>
							<div>{name}</div>
						</InfoWindow>
					) : null}
				</Marker>
			))}
		</GoogleMap>
	);
}
