import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../styling/listingMap.css";

export default function ListingMap({ listingData }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDFTAtJbWdUcTogwlMFzLgFh01dMspGw6E",
  });

  const center = useMemo(() => ({ lat: -36.846199980733424, lng: 174.76565530612925 }), []);

  if (!isLoaded) return <div></div>;

  return (
    <div className="flex justify-center">
      <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}
