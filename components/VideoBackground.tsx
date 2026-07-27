 "use client";

import { useEffect, useState } from "react";

type VideoBackgroundProps = {
  src: string;
  poster?: string;
  label?: string;
};

export function VideoBackground({ src, poster, label = "Infrastructure motion background" }: VideoBackgroundProps) {
  const [canShowVideo, setCanShowVideo] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = Boolean(connection?.saveData);
    setCanShowVideo(!reduceMotion && !saveData);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {canShowVideo ? (
        <video
          aria-label={label}
          className="h-full w-full scale-105 object-cover opacity-58 saturate-[.82]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : poster ? (
        <img src={poster} alt="" className="h-full w-full scale-105 object-cover opacity-58" />
      ) : null}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,197,66,.16),transparent_28rem),linear-gradient(90deg,rgba(7,17,31,.76),rgba(7,17,31,.42),rgba(7,17,31,.86))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,206,214,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(201,206,214,.055)_1px,transparent_1px)] bg-[size:64px_64px] opacity-58" />
    </div>
  );
}
