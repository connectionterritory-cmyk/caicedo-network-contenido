import React from 'react';
import {Composition} from 'remotion';
import {ManifestVideo} from './ManifestVideo';
import {izzyW43002} from './manifests/IZZY-W43-002';

const durationInFrames = Math.round(
  izzyW43002.timing.target_duration_seconds * izzyW43002.canvas.fps,
);

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="IZZY-W43-002"
      component={ManifestVideo}
      width={izzyW43002.canvas.width}
      height={izzyW43002.canvas.height}
      fps={izzyW43002.canvas.fps}
      durationInFrames={durationInFrames}
      defaultProps={{manifest: izzyW43002}}
    />
  );
};
