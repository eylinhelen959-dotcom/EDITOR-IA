import React from "react";
import { Composition } from "remotion";
import { Prueba } from "./Prueba";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Prueba"
    component={Prueba}
    durationInFrames={150}
    fps={30}
    width={1920}
    height={1080}
    defaultProps={{ src: "clip.mp4", titulo: "PRUEBA REMOTION" }}
  />
);
