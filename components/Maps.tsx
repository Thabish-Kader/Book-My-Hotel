import React, { useState } from "react";
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from "@react-google-maps/api";

type Props = {
	locationResults: LocationInfo[];
};

// const markers = [
// 	{
// 		id: 1,
// 		name: "Chicago, Illinois",
// 		position: { lat: 41.881832, lng: -87.623177 },
// 	},
// 	{
// 		id: 2,
// 		name: "Denver, Colorado",
// 		position: { lat: 39.739235, lng: -104.99025 },
// 	},
// 	{
// 		id: 3,
// 		name: "Los Angeles, California",
// 		position: { lat: 34.052235, lng: -118.243683 },
// 	},
// 	{
// 		id: 4,
// 		name: "New York, New York",
// 		position: { lat: 40.712776, lng: -74.005974 },
// 	},
// ];

export const Maps = ({ locationResults }: Props) => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
	});

	if (!isLoaded) return <p>Loading...</p>;
	return <Map locationResults={locationResults} />;
};

function Map({ locationResults }: Props) {
	const markers = locationResults?.map((location, i) => ({
		id: i,
		name: location.title,
		position: { lat: location.lat, lng: location.long },
	}));
	console.log(markers);
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
