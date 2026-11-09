export type ModelFamily = "llm" | "diffusion" | "multimodal" | "embedding" | "speech";

export type Model = {
  id: string;
  name: string;
  family: ModelFamily;
  trainerNote: string;
  licenseHint: string;
};

export const modelFamilyLabels: Record<ModelFamily, string> = {
  llm: "LLM",
  diffusion: "Diffusion & image",
  multimodal: "Multimodal",
  embedding: "Embeddings",
  speech: "Speech & audio",
};

export const models: Model[] = [
  { id: "llama-3", name: "Llama 3.2 / 3.1 / 3", family: "llm", trainerNote: "General and instruct; vision for document QA", licenseHint: "Meta Llama license — review for your use case" },
  { id: "mistral", name: "Mistral / Mixtral / Ministral", family: "llm", trainerNote: "Efficient instruct and MoE options", licenseHint: "Apache 2.0 / Mistral license depending on variant" },
  { id: "qwen", name: "Qwen 2.5 / Qwen3", family: "llm", trainerNote: "Multilingual, coding, long context", licenseHint: "Qwen license — commercial terms vary" },
  { id: "gemma", name: "Gemma 2 / Gemma 3", family: "llm", trainerNote: "Compact deployable assistants", licenseHint: "Gemma terms of use" },
  { id: "phi", name: "Phi-3 / Phi-4", family: "llm", trainerNote: "Small models for edge and cost control", licenseHint: "MIT / Microsoft license" },
  { id: "deepseek", name: "DeepSeek-V3 / R1 / distill", family: "llm", trainerNote: "Reasoning-heavy workflows", licenseHint: "License review per deployment region" },
  { id: "falcon", name: "Falcon 3", family: "llm", trainerNote: "Open-research-friendly stacks", licenseHint: "Falcon license" },
  { id: "olmo", name: "OLMo 2", family: "llm", trainerNote: "Fully open training recipes", licenseHint: "Apache 2.0" },
  { id: "mpt", name: "MPT", family: "llm", trainerNote: "Commercial-friendly fine-tunes", licenseHint: "Apache 2.0" },
  { id: "yi", name: "Yi-1.5", family: "llm", trainerNote: "CN/EN enterprise knowledge", licenseHint: "Yi license" },
  { id: "internlm", name: "InternLM 2.5", family: "llm", trainerNote: "Enterprise bilingual assistants", licenseHint: "InternLM license" },
  { id: "starcoder", name: "StarCoder2 / CodeLlama", family: "llm", trainerNote: "Code completion on private repos", licenseHint: "BigCode / Meta licenses" },
  { id: "deepseek-coder", name: "DeepSeek-Coder", family: "llm", trainerNote: "Strong coding assistants", licenseHint: "DeepSeek license" },
  { id: "nous", name: "Nous Hermes / chat bases", family: "llm", trainerNote: "Pre-tuned bases for domain SFT", licenseHint: "Base model license applies" },
  { id: "llama-vision", name: "Llama 3.2 Vision", family: "multimodal", trainerNote: "Image + text Q&A", licenseHint: "Meta Llama license" },
  { id: "qwen-vl", name: "Qwen2-VL / Qwen2.5-VL", family: "multimodal", trainerNote: "Diagrams, products, warehouse photos", licenseHint: "Qwen license" },
  { id: "llava", name: "LLaVA 1.6", family: "multimodal", trainerNote: "Custom visual assistants", licenseHint: "Apache 2.0" },
  { id: "internvl", name: "InternVL2", family: "multimodal", trainerNote: "High-res document understanding", licenseHint: "InternVL license" },
  { id: "florence", name: "Florence-2", family: "multimodal", trainerNote: "Detection and captioning", licenseHint: "MIT" },
  { id: "paligemma", name: "PaliGemma", family: "multimodal", trainerNote: "Compact vision-language tasks", licenseHint: "Gemma terms" },
  { id: "bge", name: "BGE / GTE / E5", family: "embedding", trainerNote: "RAG on private corpora", licenseHint: "MIT / Apache" },
  { id: "nomic", name: "Nomic Embed", family: "embedding", trainerNote: "Open embedding stacks", licenseHint: "Apache 2.0" },
  { id: "jina-embed", name: "Jina embeddings", family: "embedding", trainerNote: "Multilingual retrieval", licenseHint: "Apache 2.0" },
  { id: "colbert", name: "ColBERT / rerankers", family: "embedding", trainerNote: "Search quality uplift", licenseHint: "Model-specific" },
  { id: "sdxl", name: "Stable Diffusion XL", family: "diffusion", trainerNote: "Workhorse brand LoRA", licenseHint: "CreativeML Open RAIL++-M" },
  { id: "sd15", name: "Stable Diffusion 1.5", family: "diffusion", trainerNote: "Legacy LoRA ecosystem", licenseHint: "CreativeML Open RAIL-M" },
  { id: "sdxl-turbo", name: "SDXL Turbo", family: "diffusion", trainerNote: "Fast iteration previews", licenseHint: "Stability license" },
  { id: "flux", name: "FLUX.1 dev / schnell / tools", family: "diffusion", trainerNote: "High-fidelity commercial imaging", licenseHint: "Non-commercial / FLUX license — review per project" },
  { id: "cascade", name: "Stable Cascade", family: "diffusion", trainerNote: "Alternative latent stacks", licenseHint: "Stability license" },
  { id: "pixart", name: "PixArt-Σ / PixArt-alpha", family: "diffusion", trainerNote: "Efficient text-to-image", licenseHint: "Open RAIL" },
  { id: "kolors", name: "Kolors", family: "diffusion", trainerNote: "Region and style-specific", licenseHint: "Model license" },
  { id: "playground", name: "Playground v2.5", family: "diffusion", trainerNote: "Aesthetic marketing imagery", licenseHint: "Playground license" },
  { id: "sd3", name: "SD 3 / 3.5 medium", family: "diffusion", trainerNote: "Where training is permitted", licenseHint: "Stability community license" },
  { id: "auraflow", name: "AuraFlow", family: "diffusion", trainerNote: "Open flow-matching stack", licenseHint: "Apache 2.0" },
  { id: "hunyuan", name: "HunyuanDiT", family: "diffusion", trainerNote: "Alternative DiT architecture", licenseHint: "Tencent Hunyuan license" },
  { id: "animatediff", name: "AnimateDiff", family: "diffusion", trainerNote: "Short motion from stills", licenseHint: "Apache 2.0" },
  { id: "cogvideo", name: "CogVideoX", family: "diffusion", trainerNote: "Open-tier video fine-tunes", licenseHint: "CogVideo license" },
  { id: "controlnet", name: "ControlNet / IP-Adapter", family: "diffusion", trainerNote: "Pose, depth, reference workflows", licenseHint: "Companion to base checkpoint license" },
  { id: "whisper", name: "Whisper (fine-tune)", family: "speech", trainerNote: "Domain ASR and call centers", licenseHint: "MIT" },
  { id: "parakeet", name: "Parakeet / Canary", family: "speech", trainerNote: "Enterprise ASR where open", licenseHint: "NVIDIA / model-specific" },
  { id: "xtts", name: "XTTS-style voice", family: "speech", trainerNote: "Brand voice with consent", licenseHint: "Project-specific — consent required" },
];

export function getFeaturedModels(family: ModelFamily, limit = 8): Model[] {
  return models.filter((m) => m.family === family).slice(0, limit);
}
