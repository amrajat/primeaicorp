export type Service = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "dataset",
    title: "Custom dataset engineering",
    summary:
      "Turn raw exports, images, and documents into training-ready datasets with documented quality and privacy controls.",
    bullets: [
      "Ingestion from S3, GCS, SharePoint, or secure transfer",
      "Deduping, filtering, and stratified splits",
      "LLM and diffusion captioning pipelines",
      "PII detection and scrubbing workflows",
      "Dataset cards and lineage for compliance",
    ],
  },
  {
    id: "llm",
    title: "LLM fine-tuning & alignment",
    summary:
      "Domain assistants and copilots from open instruct models—with eval harnesses before anything reaches production.",
    bullets: [
      "Supervised fine-tuning (SFT) on your corpus",
      "DPO / preference tuning for tone and policy",
      "Long-context and RAG-oriented fine-tunes",
      "Export to safetensors, GGUF, or vLLM-ready bundles",
      "Regression suites on held-out prompts",
    ],
  },
  {
    id: "diffusion",
    title: "Diffusion & image model training",
    summary:
      "Brand-consistent LoRAs and style packs on SDXL, FLUX, and related open stacks—trained only on data you own or license.",
    bullets: [
      "Style, product, and character LoRA training",
      "DreamBooth-style identity (with consent workflows)",
      "ControlNet / IP-Adapter–ready paired data",
      "A/B grids and qualitative rubrics",
      "Multi-LoRA packs for creative teams",
    ],
  },
  {
    id: "eval",
    title: "Evaluation & safety",
    summary:
      "Measure what matters before launch: accuracy, refusal behavior, toxicity, and brand fit—for text and images.",
    bullets: [
      "Custom benchmark suites per use case",
      "Red-team prompt and image stress tests",
      "Human eval protocols where automation falls short",
      "NSFW and policy filters for image pipelines",
      "Executive-readable scorecards",
    ],
  },
  {
    id: "deploy",
    title: "Deployment handoff",
    summary:
      "We document how to run your model in your environment—not locked to our infrastructure.",
    bullets: [
      "Modal serverless GPU endpoints",
      "AWS SageMaker and EC2 inference patterns",
      "VPC-isolated training and artifact storage",
      "Private Hugging Face model and dataset repos",
      "Runbooks for your MLOps team",
    ],
  },
];
