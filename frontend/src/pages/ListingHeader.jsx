import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import listing1 from "../images/listing1.png";
// import listing2 from "../images/listing2.png";
// import listing3 from "../images/listing3.png";
// import listing4 from "../images/listing4.png";
// import listing5 from "../images/listing5.png";

export default function ListingHeader() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/listing")
      .then((response) => {
        console.log("Received data from backend:", response.data);
        setDocuments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center min-w-fit">
      <div className="w-[1440px]">
        <div className="flex flex-col ml-24">
          <div className="flex items-center">
            <FontAwesomeIcon className="mr-4 my-10 w-4 h-5" icon={faArrowLeft} />
            <h1 className="font-medium text-lg">Return to Search Results</h1>
          </div>
          <h1 className="font-semibold text-5xl">{documents[0].address}</h1>
        </div>
        <div className="flex justify-center">
          <div className="w-[1350px] h-[680px] grid grid-cols-4 grid-rows-2 gap-6 mt-4" style={{ gridTemplateColumns: "150px 1fr 1fr 1fr" }}>
            <div className="col-span-2 row-span-2 bg-gray-300" style={{ borderBottomLeftRadius: "60px", borderTopLeftRadius: "60px" }}>
              <img className="object-" src={documents[0].image1} alt="" />
            </div>
            <div className="bg-gray-300">
              <img src={documents[0].image2} alt="" />
            </div>
            <div className="bg-gray-300" style={{ borderTopRightRadius: "30px" }}>
              <img src={documents[0].image4} alt="" />
            </div>
            <div className="bg-gray-300">
              <img src={documents[0].image3} alt="" />
            </div>
            <div className="bg-gray-300" style={{ borderBottomRightRadius: "30px" }}>
              <img src={documents[0].image5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
