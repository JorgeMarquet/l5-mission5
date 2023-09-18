import React from "react";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.2)] z-40">
      <div className="modal-overlay"></div>
      <div
        className="w-[930px] h-[450px] bg-white border-2 border-black rounded-3xl"
        style={{
          boxShadow: "0 5px 8px #c2c0c0",
          borderColor: "#FFFFFF",
        }}
      >
        <div className="flex flex-col items-center w-full h-full">
          <h1 className="mt-20 font-bold text-6xl text-themered">Thank You!</h1>
          <h1 className="mt-20 font-bold text-3xl">We Have Received Your Message!</h1>
          <h1 className="mt-4 font-semibold">Our Team Will Contact You Soon</h1>
          <button className="mt-20 bg-themered font-semibold text-white rounded-3xl w-16 h-8" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
