import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopNavBar from "./shared-components/TopNavBar.jsx";
import ListingHeader from "./ListingHeader.jsx";
import ListingDetails from "./ListingDetails.jsx";
import ListingLocation from "./ListingLocation.jsx";
import Footer from "./shared-components/Footer.jsx";

export default function Listing() {
  const { listingID } = useParams();
  console.log("Listing ID:", listingID);
  const [listingData, setItemData] = useState();

  useEffect(() => {
    console.log("Fetching data for listingID:", listingID);

    const apiUrl = `http://localhost:8080/api/listing/${listingID}`;
    console.log("API URL:", apiUrl);

    fetch(apiUrl)
      .then((response) => {
        console.log("API Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Received data:", data);
        setItemData(data);
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [listingID]);

  return (
    <div>
      <TopNavBar />
      <ListingHeader listingData={listingData} />
      <ListingDetails listingData={listingData} />
      <ListingLocation listingData={listingData} />
      <Footer />
    </div>
  );
}
