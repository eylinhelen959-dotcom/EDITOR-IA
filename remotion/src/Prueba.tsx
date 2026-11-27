import React from "react";
import { AbsoluteFill, OffthreadVideo, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const Prueba: React.FC<{ src: string; titulo: string }> = ({ src, titulo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entrada = spring({ frame: frame - 15, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <OffthreadVideo src={staticFile(src)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <AbsoluteFill style={{ justifyContent: "flex-end", alignItems: "center", paddingBottom: 120 }}>
        <div style={{ fontFamily: "sans-serif", fontSize: 96, fontWeight: 800, color: "white", textShadow: "0 4px 20px black",
          opacity: entrada, transform: `translateY(${interpolate(entrada, [0, 1], [80, 0])}px)` }}>
          {titulo}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
