# QA 3D Feature Guide

This folder contains the 3D background feature for `/qa`.

## Files

- `scene/ConnectorsScene.tsx`
  - Mounts the `Canvas`
  - Sets lights/camera/environment
  - Composes the 3D scene objects

- `scene/Connector.tsx`
  - Core object movement and interaction logic
  - Where pointer hit response and anti-overlap behavior are tuned

- `scene/Pointer.tsx`
  - Cursor-follow helper used by the 3D scene

- `scene/Model.tsx`
  - Loads `public/models/c-transformed.glb`
  - Applies mesh material settings

- `ui/QAOverlay.tsx`
  - Foreground QA cards and controls

- `ui/qa-overlay.module.css`
  - Overlay panel/card visual styles

- `ui/qa-page.module.css`
  - Page-level layout for 3D + overlay stacking

## Quick Tuning Checklist

1. Motion strength and response:
`scene/Connector.tsx`
2. Lighting and camera feel:
`scene/ConnectorsScene.tsx`
3. Visibility behind UI:
`ui/qa-overlay.module.css`
