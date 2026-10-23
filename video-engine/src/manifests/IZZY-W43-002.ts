import type {ProductionManifest} from '../types';

export const izzyW43002: ProductionManifest = {
  schema_version: '1.0',
  content_id: 'IZZY-W43-002',
  campaign: 'new-agent-system',
  format: 'reel',
  engine: 'izzy-video-engine-remotion',
  canvas: {width: 1080, height: 1920, fps: 30},
  timing: {target_duration_seconds: 45, duration_is_target: true},
  brand: {profile: 'izzy-premium', asset_root: '_marca'},
  voice: {style: 'moises-conversational-practical', asset_ref: null, status: 'unresolved'},
  music: {asset_ref: null, license_verified: null, status: 'unresolved'},
  captions: {enabled: true, timing_source: 'unresolved', safe_zones_required: true},
  scenes: [
    {id:'scene-01',order:1,target_start_seconds:0,target_end_seconds:4,message:'¿Ya hablaste con toda tu familia y tus amigos?',visual_direction:'Moisés on camera or approved human portrait framing.',motion_direction:'Immediate start; no logo intro.',asset_ref:null,asset_status:'unresolved'},
    {id:'scene-02',order:2,target_start_seconds:4,target_end_seconds:8,message:'Eso no significa que se acabó tu mercado.',visual_direction:'Small contact circle expanding into a wider network.',motion_direction:'Expansion reinforces the reframe.',asset_ref:null,asset_status:'unresolved'},
    {id:'scene-03',order:3,target_start_seconds:8,target_end_seconds:14,message:'Muchos agentes llegan aquí y piensan: “ya no tengo a quién hablarle.”',visual_direction:'Agent desk or phone concept without private contacts.',motion_direction:'Emphasize the objection.',asset_ref:null,asset_status:'unresolved'},
    {id:'scene-04',order:4,target_start_seconds:14,target_end_seconds:20,message:'El problema no es que desapareció el mercado. Te falta un sistema para abrir conversaciones nuevas.',visual_direction:'System/path graphic.',motion_direction:'Emphasize “sistema”.',asset_ref:null,asset_status:'unresolved'},
    {id:'scene-05',order:5,target_start_seconds:20,target_end_seconds:25,message:'Primero: referidos e introducciones.',visual_direction:'Conversation/referral concept.',motion_direction:'Number 1 with concise iconography.',asset_ref:null,asset_status:'unresolved'},
    {id:'scene-06',order:6,target_start_seconds:25,target_end_seconds:30,message:'Segundo: comunidad y alianzas estratégicas.',visual_direction:'Community/business relationship concept.',motion_direction:'Number 2; consistent transition.',asset_ref:null,asset_status:'unresolved'},
    {id:'scene-07',order:7,target_start_seconds:30,target_end_seconds:35,message:'Tercero: contenido educativo que inicia conversaciones.',visual_direction:'Phone/social content concept without fake metrics.',motion_direction:'Number 3; restrained motion.',asset_ref:null,asset_status:'unresolved'},
    {id:'scene-08',order:8,target_start_seconds:35,target_end_seconds:40,message:'Escoge canales. Mide tu actividad. Mejora tu conversación. Repite.',visual_direction:'Four-step typography over IZZY brand system.',motion_direction:'Rhythmic sequential reveal.',asset_ref:null,asset_status:'unresolved'},
    {id:'scene-09',order:9,target_start_seconds:40,target_end_seconds:45,message:'Comenta MERCADO si quieres que desarrolle una guía práctica para abrir nuevos mercados.',visual_direction:'Moisés on camera or branded closing card.',motion_direction:'Strong emphasis on MERCADO.',asset_ref:null,asset_status:'unresolved'}
  ],
  cta: {text:'Comenta MERCADO si quieres que desarrolle una guía práctica para abrir nuevos mercados.',keyword:'MERCADO'}
};
