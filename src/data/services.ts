export type Service = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    id: "dataset",
    title: "Dataset engineering",
    summary:
      "We turn raw exports, documents, and images into training-ready datasets, with documented quality and privacy controls.",
    bullets: [
      "Ingestion from S3, GCS, SharePoint, or secure transfer",
      "Deduplication, filtering, and stratified splits",
      "Captioning pipelines for language and image data",
      "PII detection and redaction workflows",
      "Dataset cards with source and lineage records",
    ],
  },
  {
    id: "llm",
    title: "LLM fine-tuning and alignment",
    summary:
      "Domain assistants and copilots built on open instruct models, with evaluation harnesses in place before anything reaches production.",
    bullets: [
      "Supervised fine-tuning (SFT) on your corpus, with LoRA, QLoRA, or full fine-tuning",
      "DPO preference tuning for tone and policy adherence",
      "Long-context fine-tuning and retrieval-aware (RAG) tuning",
      "Export to safetensors, GGUF, or vLLM-ready bundles",
      "Regression suites on held-out prompts",
    ],
  },
  {
    id: "diffusion",
    title: "Image and video model training",
    summary:
      "Brand-consistent LoRAs and style packs on Stable Diffusion, FLUX, and related open models, trained only on data you own or are licensed to use.",
    bullets: [
      "Style, product, and character LoRA training",
      "DreamBooth identity training with documented consent",
      "Paired data preparation for ControlNet and IP-Adapter workflows",
      "Side-by-side comparison grids and scored review rubrics",
      "Multi-LoRA libraries for creative teams",
    ],
  },
  {
    id: "eval",
    title: "Evaluation and safety",
    summary:
      "We measure accuracy, refusal behavior, toxicity, and brand fit before launch, for both text and image models.",
    bullets: [
      "Custom benchmark suites for each use case",
      "Red-team prompts and image stress tests",
      "Human evaluation protocols where automated metrics fall short",
      "NSFW and policy filters for image pipelines",
      "Scorecards written for non-technical stakeholders",
    ],
  },
  {
    id: "deploy",
    title: "Deployment handoff",
    summary:
      "We document how to run your model in your own environment. You are not locked to our infrastructure.",
    bullets: [
      "Modal serverless GPU endpoints",
      "AWS SageMaker and EC2 inference patterns",
      "VPC-isolated training and artifact storage",
      "Private Hugging Face model and dataset repositories",
      "Runbooks for your MLOps team",
    ],
  },
];
