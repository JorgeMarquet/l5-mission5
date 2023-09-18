import React from "react";

export default function SendMessageLong() {
  return (
    <div className="mt-4">
      <button
        className="w-full h-[40px] bg-themered rounded-lg text-white text-sm font-semibold  active:bg-violet-700"
        style={{
          boxShadow: "0 5px 8px #c2c0c0",
          borderColor: "#808080",
        }}
      >
        Send message
      </button>
    </div>
  );
}
