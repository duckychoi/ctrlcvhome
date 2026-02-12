export type StageId = 'observe' | 'explore' | 'build' | 'impact'

export type HumanPose = {
  bodyLean: number
  twist: number
  headTilt: number
  headTurn: number
  leftShoulder: number
  rightShoulder: number
  leftElbow: number
  rightElbow: number
  leftHip: number
  rightHip: number
  leftKnee: number
  rightKnee: number
}

export type ScenePose = {
  figurePosition: [number, number, number]
  figureRotation: [number, number, number]
  figureScale: number
  cameraPosition: [number, number, number]
  cameraLookAt: [number, number, number]
  tint: string
}

export type TimelineStage = {
  id: StageId
  label: string
  pose: HumanPose
  scene: ScenePose
}

