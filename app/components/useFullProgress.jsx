"use client";
import { useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

export function useFullProgress() {
  const { progress: modelProgress } = useProgress();
  const [pageProgress, setPageProgress] = useState(0);
  const [mediaProgress, setMediaProgress] = useState(0);
  const [fullProgress, setFullProgress] = useState(0);

  // 🧠 Track document (HTML + JS)
  useEffect(() => {
    const handleProgress = () => {
      if (document.readyState === "interactive") setPageProgress(50);
      if (document.readyState === "complete") setPageProgress(100);
    };
    handleProgress();
    document.addEventListener("readystatechange", handleProgress);
    return () => document.removeEventListener("readystatechange", handleProgress);
  }, []);

  // 🎥 Track <img> and <video> elements loading
  useEffect(() => {
    const mediaElements = Array.from(document.querySelectorAll("img, video"));
    if (mediaElements.length === 0) {
      setMediaProgress(100);
      return;
    }

    let loaded = 0;
    const total = mediaElements.length;

    const updateProgress = () => {
      loaded += 1;
      setMediaProgress(Math.round((loaded / total) * 100));
    };

    mediaElements.forEach((el) => {
      if (
        (el.tagName === "IMG" && el.complete) ||
        (el.tagName === "VIDEO" && el.readyState >= 3)
      ) {
        updateProgress();
      } else {
        el.addEventListener("load", updateProgress);
        el.addEventListener("loadeddata", updateProgress);
      }
    });

    return () => {
      mediaElements.forEach((el) => {
        el.removeEventListener("load", updateProgress);
        el.removeEventListener("loadeddata", updateProgress);
      });
    };
  }, []);

  // 🧮 Combine all progress parts
  useEffect(() => {
    const combined = Math.round(
      modelProgress * 0.4 + pageProgress * 0.3 + mediaProgress * 0.3
    );
    setFullProgress(combined);
  }, [modelProgress, pageProgress, mediaProgress]);

  return fullProgress;
}
