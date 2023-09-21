import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

export default function FindOutButton() {
  return (
    <div className="mt-4">
      <button
        className="w-[155px] h-[40px] bg-themered rounded-2xl text-white text font-bold  active:bg-violet-700"
        style={{
          boxShadow: "0 5px 8px #c2c0c0",
          borderColor: "#808080",
        }}
      >
        <div className="flex justify-evenly">
          <div>Filters</div>
          <div>
            <FontAwesomeIcon icon={faSliders} style={{ color: "#ffffff" }} />
          </div>
        </div>
      </button>
    </div>
  );
}
