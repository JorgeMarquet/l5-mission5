import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../styling/listingMap.css";

export default function ListingMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDFTAtJbWdUcTogwlMFzLgFh01dMspGw6E",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: -36.846199980733424, lng: 174.76565530612925 }), []);

  return (
    <div className="flex justify-center">
      <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}
