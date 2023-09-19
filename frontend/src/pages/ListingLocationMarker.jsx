import React from "react";
import { MarkerF } from "@googlemaps/react-wrapper";

export default function MyMarker({ latitude, longitude }) {
  const position = { lat: latitude, lng: longitude };

  return <MarkerF position={position} />;
}
