import React from 'react';
import {Series, useVideoConfig} from 'remotion';
import {ManifestScene} from './components/ManifestScene';
import type {ProductionManifest} from './types';

export const ManifestVideo: React.FC<{manifest: ProductionManifest}> = ({manifest}) => {
  const {fps} = useVideoConfig();

  return (
    <Series>
      {manifest.scenes.map((scene) => {
        const durationInFrames = Math.round((scene.target_end_seconds - scene.target_start_seconds) * fps);
        return (
          <Series.Sequence
            key={scene.id}
            name={`${scene.order}-${scene.id}`}
            durationInFrames={durationInFrames}
            premountFor={fps}
          >
            <ManifestScene scene={scene} totalScenes={manifest.scenes.length} />
          </Series.Sequence>
        );
      })}
    </Series>
  );
};
