import React from 'react';
import {AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {ProductionScene} from '../types';

const NAVY = '#071A33';
const GOLD = '#D6AD60';
const WHITE = '#F8F7F2';

export const ManifestScene: React.FC<{scene: ProductionScene; totalScenes: number}> = ({scene, totalScenes}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const opacity = interpolate(frame, [0, 0.35 * fps], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const translateY = interpolate(frame, [0, 0.45 * fps], [36, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{backgroundColor: NAVY, color: WHITE, fontFamily: 'Arial, sans-serif'}}>
      <div style={{position:'absolute', inset:'120px 78px 250px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <div style={{fontSize:30, letterSpacing:3, color:GOLD, fontWeight:700, marginBottom:34}}>
          {String(scene.order).padStart(2, '0')} / {String(totalScenes).padStart(2, '0')}
        </div>
        <div style={{opacity, translate:`0 ${translateY}px`, fontSize:scene.order === 9 ? 72 : 82, lineHeight:1.06, fontWeight:800, maxWidth:900}}>
          {scene.message}
        </div>
        <div style={{marginTop:48, width:120, height:6, backgroundColor:GOLD}} />
      </div>
      <div style={{position:'absolute', left:78, right:78, bottom:120, display:'flex', justifyContent:'space-between', alignItems:'center', color:GOLD, fontSize:24, letterSpacing:2, fontWeight:700}}>
        <span>IZZY</span>
        <span>{scene.asset_status === 'ready' ? 'ASSET READY' : 'VISUAL PENDING'}</span>
      </div>
    </AbsoluteFill>
  );
};
