import React from "react";

export default function FindOutButton() {
  return (
    <div className="mt-4">
      <button
        className="w-[288px] h-[48px] bg-themered rounded-2xl text-white text-xl font-bold  active:bg-violet-700"
        style={{
          boxShadow: "0 5px 8px #c2c0c0",
          borderColor: "#808080",
        }}
      >
        Find out more
      </button>
    </div>
  );
}
