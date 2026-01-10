import React from "react";

const Popup = ({ popup, setPopup }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg
      animate-scaleIn`}
      >
        <div
          className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full
        ${popup.type === "success" ? "bg-green-100" : "bg-red-100"}`}
        >
          {popup.type === "success" ? (
            <span className="text-green-600 text-3xl">✓</span>
          ) : (
            <span className="text-red-600 text-3xl">✕</span>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-2">
          {popup.type === "success" ? "Success" : "Error"}
        </h2>

        <p className="text-gray-600 mb-6">{popup.message}</p>

        <button
          onClick={() => setPopup({ ...popup, show: false })}
          className={`px-6 py-2 rounded text-white
        ${popup.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
