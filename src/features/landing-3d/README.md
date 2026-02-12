# Landing 3D Timeline

Section-driven 3D controller for the landing page.

## Structure

- `config/timelineStages.ts`
  - Stage ids and target data for pose/camera/tint.
- `hooks/useLandingStageProgress.ts`
  - Reads DOM markers:
    - `data-landing-3d-stage="observe"`
    - `data-landing-3d-stage="explore"`
    - `data-landing-3d-stage="build"`
    - `data-landing-3d-stage="impact"`
  - Converts scroll position to timeline progress.
- `scene/LineHuman.tsx`
  - Line-style human rig and joint animation.
- `scene/LandingTimelineScene.tsx`
  - `Canvas` scene and stage interpolation.
- `ui/Landing3DTimelineLayer.tsx`
  - Fixed overlay layer mounted on the landing page.

## Integration

1. Mount `Landing3DTimelineLayer` once on landing page.
2. Wrap content sections with marker attributes.
3. The scene updates automatically from marker ranges.
