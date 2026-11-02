/**
 * Multi-Model Cascade & Tier Management
 *
 * Distributes requests across high-efficiency free Gemini models to maximize
 * available requests per day and bypass single-model quotas.
 */

export interface ModelTier {
  modelName: string;
  tier: number; // 1 = Primary, 2 = Secondary, 3 = High-Speed Lite, 4 = Fallback
  isLite: boolean;
  maxTokens: number;
}

export const GEMINI_MODEL_CASCADE: ModelTier[] = [
  { modelName: 'gemini-3.5-flash-lite', tier: 1, isLite: true, maxTokens: 4000 },
  { modelName: 'gemini-3.5-flash', tier: 2, isLite: false, maxTokens: 4000 },
  { modelName: 'gemini-3.8-flash', tier: 3, isLite: false, maxTokens: 4000 },
  { modelName: 'gemini-2.5-flash', tier: 4, isLite: false, maxTokens: 4000 },
  { modelName: 'gemini-2.5-flash-lite', tier: 5, isLite: true, maxTokens: 4000 },
  { modelName: 'gemini-2.0-flash', tier: 6, isLite: false, maxTokens: 4000 },
  { modelName: 'gemini-1.5-flash', tier: 7, isLite: true, maxTokens: 4000 }
];

export function getRecommendedModelList(requestedModel?: string): string[] {
  if (requestedModel) {
    const list = [requestedModel, ...GEMINI_MODEL_CASCADE.map(m => m.modelName).filter(m => m !== requestedModel)];
    return Array.from(new Set(list));
  }
  return GEMINI_MODEL_CASCADE.map(m => m.modelName);
}
