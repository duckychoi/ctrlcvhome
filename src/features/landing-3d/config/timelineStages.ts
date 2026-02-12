import type { TimelineStage } from '../types'

export const timelineStages: TimelineStage[] = [
  {
    id: 'observe',
    label: 'Observe',
    pose: {
      bodyLean: -0.34,
      twist: -0.66,
      headTilt: 0.14,
      headTurn: -0.28,
      leftShoulder: -1.28,
      rightShoulder: 0.6,
      leftElbow: -0.84,
      rightElbow: 0.72,
      leftHip: 0.26,
      rightHip: -0.18,
      leftKnee: 0.54,
      rightKnee: -0.32
    },
    scene: {
      figurePosition: [-0.86, -0.84, 0.18],
      figureRotation: [0.08, -0.62, 0.18],
      figureScale: 1.02,
      cameraPosition: [0.3, 0.75, 8.1],
      cameraLookAt: [-0.18, 0.9, 0.06],
      tint: '#0f0f11'
    }
  },
  {
    id: 'explore',
    label: 'Explore',
    pose: {
      bodyLean: 0.08,
      twist: 0.9,
      headTilt: -0.1,
      headTurn: 0.34,
      leftShoulder: 0.24,
      rightShoulder: -1.42,
      leftElbow: 1.22,
      rightElbow: -1.14,
      leftHip: -0.26,
      rightHip: 0.3,
      leftKnee: -0.66,
      rightKnee: 0.84
    },
    scene: {
      figurePosition: [0.42, -0.7, 0.15],
      figureRotation: [0.16, 0.96, -0.12],
      figureScale: 1.08,
      cameraPosition: [0.58, 0.86, 7.72],
      cameraLookAt: [0.25, 1.02, 0.12],
      tint: '#0b0b0d'
    }
  },
  {
    id: 'build',
    label: 'Build',
    pose: {
      bodyLean: 0.26,
      twist: -0.44,
      headTilt: 0.08,
      headTurn: -0.36,
      leftShoulder: 1.3,
      rightShoulder: 1.18,
      leftElbow: -1.12,
      rightElbow: -1.02,
      leftHip: 0.24,
      rightHip: 0.24,
      leftKnee: 0.68,
      rightKnee: 0.42
    },
    scene: {
      figurePosition: [0.06, -0.56, -0.18],
      figureRotation: [-0.18, -0.36, 0.06],
      figureScale: 1.14,
      cameraPosition: [-0.26, 0.7, 7.54],
      cameraLookAt: [0.08, 0.98, -0.04],
      tint: '#121214'
    }
  },
  {
    id: 'impact',
    label: 'Impact',
    pose: {
      bodyLean: -0.22,
      twist: 0.46,
      headTilt: -0.18,
      headTurn: 0.28,
      leftShoulder: -0.64,
      rightShoulder: 1.4,
      leftElbow: 0.82,
      rightElbow: -1.06,
      leftHip: -0.78,
      rightHip: 0.54,
      leftKnee: 1.02,
      rightKnee: -0.72
    },
    scene: {
      figurePosition: [-0.58, -0.44, 0.3],
      figureRotation: [0.22, 0.34, -0.14],
      figureScale: 1.18,
      cameraPosition: [-0.52, 1.12, 7.28],
      cameraLookAt: [-0.15, 1.14, 0.08],
      tint: '#080809'
    }
  }
]
