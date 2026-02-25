"use client";

import { useState } from "react";

export default function Map() {
  const [mapOpen, setMapOpen] = useState(false);
  return (
    <>
      <a href="#" className={`map-section ${mapOpen ? "js-active" : ""}`}>
        <div className="map-toggle wow fadeInUpShort" aria-hidden="true">
          <div className="mt-icon">
            <i className="mi-location"></i>
          </div>
          <div className="mt-text">
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-open">
              Open the map <i className="mt-open-icon"></i>
            </div>
            <div onClick={() => setMapOpen((pre) => !pre)} className="mt-close">
              Close the map <i className="mt-close-icon"></i>
            </div>
          </div>
        </div>
      </a>

      <iframe
        src="https://www.google.com/maps?q=16703+Early+Riser+Ave+Suite+568,+Land+O'+Lakes,+FL+34638&output=embed"
        width={600}
        height={450}
        loading="lazy"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </>
  );
}
