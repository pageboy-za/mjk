"use client";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useState } from "react";

type PointOfInterest = {
  location: {
    name: string;
    address: string;
    lat: number;
    lng: number;
  }
};
const mapContainerStyle = {
  width: "100%",
  height: "350px",
};

const options = {
  disableDefaultUI: false,
  zoomControl: true,
};

export default function ShowMap({ location }: PointOfInterest) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.PUBLIC_GOOGLE_API_KEY || "",
  });

  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  const [markers] = useState([
    {
      lat: location.lat,
      lng: location.lng,
    },
  ]);

  if (loadError) return <span>Error loading maps</span>;
  if (!isLoaded) return <span>Loading Maps</span>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={18}
      center={center}
      options={options}
    >
      {markers.map((marker) => (
        <Marker key={marker.lat} position={marker} />
      ))}
      <InfoWindow position={{ lat: location.lat, lng: location.lng }}>
        <div className="p-8 bg-white border shadow-xl opacity-75">
          <div className="text-xl font-gray-900">
            <h1 className="text-center font-semi-bold">{location.name}</h1>
            <div className="text-base text-gray-700">{location.address}</div>
          </div>
        </div>
      </InfoWindow>
    </GoogleMap>
  );
}
