# IZZY Video Engine

Production/rendering boundary for vertical social video used by IZZY today and designed to be callable by Flow Suite later.

## Architectural role

This engine does **not** decide content strategy. It receives an approved production contract and turns it into renderable video assets.

Upstream today:
- `izzyfbservices` Content Orchestrator
- Content Brief
- Storyboard

Upstream later:
- Flow Suite Content Studio

Downstream:
- Render
- Content QA
- Human approval
- Metricool distribution
- Observed performance back to the Orchestrator / Pattern Library

## Boundary

```text
Flow Suite / IZZY Content Orchestrator
              |
              v
       Production Contract
              |
              v
       IZZY Video Engine
      /       |        \
   Brand    Scenes    Captions
      \       |        /
              v
           Render
              |
              v
             MP4
              |
              v
              QA
              |
              v
        Human Approval
              |
              v
          Metricool
```

## Non-responsibilities

The engine must not:
- choose campaign strategy;
- invent audiences, hooks, CTAs or performance data;
- mark compliance as passed by itself;
- schedule or publish content;
- depend directly on Flow Suite database tables;
- contain CRM/business workflow logic.

This separation allows the same engine to serve insurance, telecom, real estate and other future Flow Suite verticals through configuration rather than rewrites.

## V1 input contract

The engine should eventually consume a machine-readable production manifest derived from the Orchestrator brief/storyboard. Until the adapter is implemented, the Markdown storyboard remains the human-readable source of truth.

Required production concepts:
- `content_id`
- format/aspect ratio
- scene order
- target duration
- spoken/caption text
- visual direction
- brand profile
- asset references
- audio references
- CTA

Unknown assets remain unresolved; they are never fabricated.

## V1 output contract

A production run should produce, at minimum:
- final MP4 candidate;
- render metadata;
- duration;
- resolution / aspect ratio;
- asset manifest;
- QA-ready status, **not** QA-passed status.

## Flow Suite compatibility

Flow Suite should call this engine through a stable adapter/API contract rather than importing rendering internals into the application. The current repository remains the production factory; Flow Suite becomes the product/interface that requests work and receives status/results.

Suggested future product flow:

```text
Flow Suite Content Studio
  -> Content Orchestrator
  -> production manifest
  -> Video Engine
  -> render candidate
  -> QA
  -> approval
  -> Metricool
  -> performance
  -> Flow Suite / Pattern Library
```

## First integration target

`IZZY-W43-002`

Source artifacts currently live in `connectionterritory-cmyk/izzyfbservices`:
- `tools/content-orchestrator/data/content/briefs/IZZY-W43-002-BRIEF.md`
- `tools/content-orchestrator/data/content/storyboards/IZZY-W43-002-STORYBOARD.md`

The first implementation milestone is to define the machine-readable production manifest for this Reel and then connect it to the existing/recovered Remotion renderer without changing the strategic Orchestrator contract.
