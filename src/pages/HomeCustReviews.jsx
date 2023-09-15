import React, { useState } from "react";
import ReviewCard from "../data/ReviewCard";
import reviewsData from "../data/ReviewData";

export default function CustomerReviews() {
  const reviewsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;

  const reviewsToDisplay = reviewsData.slice(startIndex, endIndex);

  return (
    <div className="w-screen h-[940px]">
      <div>
        <h1 className="flex justify-center mt-20 mb-20 text-5xl font-semibold">Customer Reviews</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3">
          {reviewsToDisplay.map((review) => (
            <div className="-mt-16" key={review.id}>
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} className="mr-2 px-4 py-2 bg-gray-300">
          Previous
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= reviewsData.length} className="px-4 py-2 bg-gray-300">
          Next
        </button>
      </div>
    </div>
  );
}
