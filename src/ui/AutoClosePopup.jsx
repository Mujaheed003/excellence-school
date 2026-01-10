import React, { useEffect } from "react";

const AutoClosePopup = ({ popup, setPopup }) => {
  useEffect(() => {
    if (!popup.show) return;

    // Disable background scroll
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setPopup({ ...popup, show: false });
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // restore scroll
    };
  }, [popup, setPopup]);

  if (!popup.show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 text-center shadow-xl animate-scaleIn">
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
      </div>
    </div>
  );
};

export default AutoClosePopup;
