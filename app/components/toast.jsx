"use client";

import { useEffect } from "react";

export default function Toast({ message, onClose, type, duration = 4000 }) {
  useEffect(() => {
    if (!duration || duration <= 0) return;
    const t = setTimeout(() => onClose(), duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  const containerClass =
    type === "success"
      ? "bg-black text-white border border-black"
      : "bg-white text-black border border-black";

  const animateClass = "transform transition-all duration-300 ease-out";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`${containerClass} ${animateClass} max-w-md w-full shadow-md bg-white text-black rounded-lg p-3 flex items-start gap-3`}
    >
      <div className="flex-none">
        {type === "success" ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M20 6L9 17l-5-5"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="black"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <div className="flex-1">
        <p className="text-[15px] md:text-[19px] text-black leading-tight ">{message}</p>
      </div>

      <button
        onClick={onClose}
        aria-label="Close notification"
        className={`ml-2 p-1 rounded focus:outline-none focus:ring-1 ${
          type === "success" ? "text-black" : "text-black"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M18 6L6 18M6 6l12 12"
            stroke={type === "success" ? "black" : "black"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
