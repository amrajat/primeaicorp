export type ModelFamily = "llm" | "diffusion" | "multimodal" | "embedding" | "speech";

export type Model = {
  id: string;
  name: string;
  family: ModelFamily;
  /** What we typically use the model for. */
  trainerNote: string;
  /** Short license summary. Orientation only; terms change between releases. */
  licenseHint: string;
};

export const modelFamilyLabels: Record<ModelFamily, string> = {
  llm: "Language models",
  diffusion: "Image & video",
  multimodal: "Vision-language",
  embedding: "Embeddings & retrieval",
  speech: "Speech",
};

export const models: Model[] = [
  // Language models
  { id: "llama-3", name: "Llama 3.1 / 3.2 / 3.3", family: "llm", trainerNote: "General-purpose instruct models from 1B to 70B parameters", licenseHint: "Llama Community License; acceptable-use terms apply" },
  { id: "mistral", name: "Mistral / Mixtral / Ministral", family: "llm", trainerNote: "Dense and mixture-of-experts models for efficient instruction tuning", licenseHint: "Apache 2.0 for most releases; some variants use Mistral licenses" },
  { id: "qwen", name: "Qwen2.5 / Qwen3", family: "llm", trainerNote: "Multilingual, coding, and long-context workloads", licenseHint: "Apache 2.0 for most sizes; some Qwen2.5 sizes use the Qwen license" },
  { id: "gemma", name: "Gemma 2 / Gemma 3", family: "llm", trainerNote: "Compact models for cost-sensitive and on-device serving", licenseHint: "Gemma Terms of Use" },
  { id: "phi", name: "Phi-3 / Phi-4", family: "llm", trainerNote: "Small models for edge deployment and tight latency budgets", licenseHint: "MIT" },
  { id: "deepseek", name: "DeepSeek-R1 distills", family: "llm", trainerNote: "Reasoning-oriented models from 1.5B to 70B parameters", licenseHint: "MIT; distills also follow their Qwen or Llama base terms" },
  { id: "gpt-oss", name: "gpt-oss-20b / 120b", family: "llm", trainerNote: "Open-weight reasoning models for private deployment", licenseHint: "Apache 2.0 with a usage policy" },
  { id: "olmo", name: "OLMo 2", family: "llm", trainerNote: "Open data, code, and training recipes for reproducible work", licenseHint: "Apache 2.0" },
  { id: "falcon", name: "Falcon 3", family: "llm", trainerNote: "Efficient 1B to 10B models for modest hardware", licenseHint: "TII Falcon License" },
  { id: "smollm", name: "SmolLM2 / SmolLM3", family: "llm", trainerNote: "Compact models for on-device and low-cost serving", licenseHint: "Apache 2.0" },
  { id: "mistral-small", name: "Mistral Small 3 / Mistral NeMo", family: "llm", trainerNote: "Mid-size instruct models with strong quality per GPU", licenseHint: "Apache 2.0" },
  { id: "granite", name: "IBM Granite 3.x", family: "llm", trainerNote: "Enterprise-oriented models for RAG, tool use, and summarization", licenseHint: "Apache 2.0" },
  { id: "qwen-coder", name: "Qwen2.5-Coder", family: "llm", trainerNote: "Code models from 0.5B to 32B for completion and review", licenseHint: "Apache 2.0 for most sizes; the 3B model uses a research license" },
  { id: "yi", name: "Yi-1.5", family: "llm", trainerNote: "Bilingual English and Chinese assistants", licenseHint: "Apache 2.0" },
  { id: "internlm", name: "InternLM 2.5", family: "llm", trainerNote: "Bilingual models with strong long-context behavior", licenseHint: "InternLM license; confirm commercial terms" },
  { id: "starcoder", name: "StarCoder2 / Code Llama", family: "llm", trainerNote: "Code completion and review on private repositories", licenseHint: "BigCode OpenRAIL-M; Llama 2 Community License" },
  { id: "deepseek-coder", name: "DeepSeek-Coder", family: "llm", trainerNote: "Code models for completion and refactoring", licenseHint: "DeepSeek Model License; commercial use permitted" },
  { id: "nous", name: "Nous Hermes 3", family: "llm", trainerNote: "Instruction-tuned Llama 3.1 variants for further domain tuning", licenseHint: "Llama 3.1 Community License" },

  // Vision-language
  { id: "llama-vision", name: "Llama 3.2 Vision (11B / 90B)", family: "multimodal", trainerNote: "Image and text question answering, document understanding", licenseHint: "Llama Community License; multimodal use restricted for EU-domiciled entities" },
  { id: "qwen-vl", name: "Qwen2-VL / Qwen2.5-VL", family: "multimodal", trainerNote: "Documents, charts, diagrams, and product imagery", licenseHint: "Apache 2.0 for most sizes; Qwen license on the largest" },
  { id: "pixtral", name: "Pixtral 12B", family: "multimodal", trainerNote: "Document, chart, and natural-image understanding", licenseHint: "Apache 2.0" },
  { id: "molmo", name: "Molmo", family: "multimodal", trainerNote: "Open vision-language models with pointing and counting abilities", licenseHint: "Apache 2.0" },
  { id: "smolvlm", name: "SmolVLM", family: "multimodal", trainerNote: "Small vision-language models for low-cost and on-device use", licenseHint: "Apache 2.0" },
  { id: "phi-vision", name: "Phi-3.5 Vision / Phi-4 Multimodal", family: "multimodal", trainerNote: "Compact image, document, and audio-aware models", licenseHint: "MIT" },
  { id: "internvl", name: "InternVL2", family: "multimodal", trainerNote: "High-resolution document and chart understanding", licenseHint: "MIT; base model terms also apply" },
  { id: "llava", name: "LLaVA-NeXT (1.6)", family: "multimodal", trainerNote: "Custom visual assistants and image Q&A", licenseHint: "Code under Apache 2.0; weights follow the base LLM license" },
  { id: "florence", name: "Florence-2", family: "multimodal", trainerNote: "Captioning, detection, OCR, and segmentation at small scale", licenseHint: "MIT" },
  { id: "paligemma", name: "PaliGemma", family: "multimodal", trainerNote: "Compact captioning and visual question answering", licenseHint: "Gemma Terms of Use" },

  // Embeddings and retrieval
  { id: "bge", name: "BGE / GTE / E5", family: "embedding", trainerNote: "Retrieval models for RAG on private corpora", licenseHint: "MIT or Apache 2.0, depending on the model" },
  { id: "nomic", name: "Nomic Embed", family: "embedding", trainerNote: "Open embeddings with long-context support", licenseHint: "Apache 2.0" },
  { id: "arctic-embed", name: "Snowflake Arctic Embed", family: "embedding", trainerNote: "Retrieval-tuned embeddings in several sizes", licenseHint: "Apache 2.0" },
  { id: "sbert", name: "Sentence Transformers (MiniLM, MPNet)", family: "embedding", trainerNote: "Lightweight embeddings for classification and semantic search", licenseHint: "Apache 2.0" },
  { id: "jina-embed", name: "Jina Embeddings", family: "embedding", trainerNote: "Multilingual retrieval", licenseHint: "v2 is Apache 2.0; v3 is non-commercial. Confirm the version" },
  { id: "colbert", name: "ColBERT / rerankers", family: "embedding", trainerNote: "Late-interaction retrieval and reranking for search quality", licenseHint: "MIT or Apache 2.0, depending on the model" },

  // Image and video
  { id: "sdxl", name: "Stable Diffusion XL", family: "diffusion", trainerNote: "Mature LoRA tooling for brand and product styles", licenseHint: "CreativeML Open RAIL++-M" },
  { id: "flux", name: "FLUX.1 [dev] / [schnell]", family: "diffusion", trainerNote: "High-fidelity text-to-image with LoRA training support", licenseHint: "[schnell] Apache 2.0; [dev] non-commercial unless licensed from Black Forest Labs" },
  { id: "sd3", name: "Stable Diffusion 3.5", family: "diffusion", trainerNote: "MMDiT architecture in Medium and Large sizes", licenseHint: "Stability AI Community License; free below US$1M annual revenue" },
  { id: "hidream", name: "HiDream-I1", family: "diffusion", trainerNote: "Large open text-to-image model with strong prompt adherence", licenseHint: "MIT" },
  { id: "qwen-image", name: "Qwen-Image", family: "diffusion", trainerNote: "Text-to-image with strong text rendering in images", licenseHint: "Apache 2.0" },
  { id: "sd15", name: "Stable Diffusion 1.5", family: "diffusion", trainerNote: "Large legacy LoRA ecosystem with lower hardware needs", licenseHint: "CreativeML Open RAIL-M" },
  { id: "pixart", name: "PixArt-Σ / PixArt-α", family: "diffusion", trainerNote: "Efficient text-to-image at modest VRAM", licenseHint: "CreativeML Open RAIL++-M" },
  { id: "kolors", name: "Kolors", family: "diffusion", trainerNote: "Chinese and English prompt understanding", licenseHint: "Apache 2.0 code; commercial use of weights requires free registration" },
  { id: "playground", name: "Playground v2.5", family: "diffusion", trainerNote: "Aesthetic-focused model built on the SDXL architecture", licenseHint: "Playground v2.5 Community License" },
  { id: "auraflow", name: "AuraFlow", family: "diffusion", trainerNote: "Open flow-based text-to-image model", licenseHint: "Apache 2.0" },
  { id: "hunyuan", name: "HunyuanDiT", family: "diffusion", trainerNote: "Diffusion transformer with bilingual prompt support", licenseHint: "Tencent Hunyuan Community License; territory restrictions apply" },
  { id: "animatediff", name: "AnimateDiff", family: "diffusion", trainerNote: "Motion modules for Stable Diffusion checkpoints", licenseHint: "Apache 2.0" },
  { id: "wan", name: "Wan 2.1", family: "diffusion", trainerNote: "Text-to-video and image-to-video, 1.3B and 14B sizes", licenseHint: "Apache 2.0" },
  { id: "mochi", name: "Mochi 1", family: "diffusion", trainerNote: "Open text-to-video model with LoRA fine-tuning support", licenseHint: "Apache 2.0" },
  { id: "cogvideo", name: "CogVideoX", family: "diffusion", trainerNote: "Open text-to-video and image-to-video models", licenseHint: "Apache 2.0 (2B); CogVideoX license (5B)" },
  { id: "controlnet", name: "ControlNet / IP-Adapter", family: "diffusion", trainerNote: "Pose, depth, edge, and reference-image conditioning", licenseHint: "Apache 2.0; the base checkpoint license also applies" },

  // Speech
  { id: "whisper", name: "Whisper", family: "speech", trainerNote: "Domain-specific speech recognition for calls and meetings", licenseHint: "MIT" },
  { id: "distil-whisper", name: "Distil-Whisper", family: "speech", trainerNote: "Faster, smaller Whisper variants for low-latency transcription", licenseHint: "MIT" },
  { id: "wav2vec2", name: "wav2vec 2.0 / XLS-R", family: "speech", trainerNote: "Speech recognition for low-resource languages and accents", licenseHint: "Apache 2.0" },
  { id: "parakeet", name: "Parakeet / Canary", family: "speech", trainerNote: "NVIDIA NeMo speech recognition models", licenseHint: "CC-BY-4.0 for Parakeet; Canary terms vary by release" },
];

export function getFeaturedModels(family: ModelFamily, limit = 8): Model[] {
  return models.filter((m) => m.family === family).slice(0, limit);
}
