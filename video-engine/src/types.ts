export type ProductionScene = {
  id: string;
  order: number;
  target_start_seconds: number;
  target_end_seconds: number;
  message: string;
  visual_direction: string;
  motion_direction: string | null;
  asset_ref: string | null;
  asset_status: 'unresolved' | 'ready';
};

export type ProductionManifest = {
  schema_version: '1.0';
  content_id: string;
  campaign: string | null;
  format: 'reel' | 'video' | 'story';
  engine: 'izzy-video-engine-remotion';
  canvas: {width: number; height: number; fps: number};
  timing: {target_duration_seconds: number; duration_is_target: boolean};
  brand: {profile: string; asset_root: string | null};
  voice?: {style: string | null; asset_ref: string | null; status: 'unresolved' | 'ready'};
  music?: {asset_ref: string | null; license_verified: boolean | null; status: 'none' | 'unresolved' | 'ready'};
  captions?: {enabled: boolean; timing_source: 'final_audio' | 'manual' | 'unresolved'; safe_zones_required: boolean};
  scenes: ProductionScene[];
  cta: {text: string; keyword: string | null};
};
