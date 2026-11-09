export const site = {
  name: "Prime AI Company",
  shortName: "Prime AI",
  /** Header wordmark below `sm` breakpoint */
  headerShortName: "Prime AI Co.",
  tagline: "Train open models on your data.",
  description:
    "Prime AI Company fine-tunes open-weight language and image models, including Llama, Qwen, Stable Diffusion, and FLUX, on your data. Training runs on NVIDIA GPUs through AWS and Modal, or inside your own cloud account.",
  url: "https://primeaicorp.com",
  lastLegalUpdate: "November 9, 2026",
  emails: {
    sales: "ai@primeaicorp.com",
    legal: "legal@primeaicorp.com",
  },
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/models", label: "Models" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/about", label: "About" },
] as const;

export const legalLinks = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/cookies", label: "Cookie Policy" },
  { href: "/legal/acceptable-use", label: "Acceptable Use" },
  { href: "/legal/data-processing", label: "Data Processing" },
  { href: "/legal/security", label: "Security" },
] as const;

export const partners = [
  { name: "NVIDIA", href: "https://www.nvidia.com", brand: "nvidia" },
  { name: "Amazon Web Services", href: "https://aws.amazon.com", brand: "aws" },
  { name: "Modal", href: "https://modal.com", brand: "modal" },
  { name: "Hugging Face", href: "https://huggingface.co", brand: "huggingface" },
  { name: "Cloudflare", href: "https://www.cloudflare.com", brand: "cloudflare" },
] as const;

export const pillars = [
  {
    title: "Dataset",
    description:
      "Ingestion, cleaning, captioning, PII handling, and train, validation, and test splits, with quality reports your team can review.",
    instrumentLine: "Dataset cards document sources, filters, and splits.",
    icon: "database",
  },
  {
    title: "Train",
    description:
      "Supervised fine-tuning, LoRA, preference tuning, and diffusion training on NVIDIA GPUs through AWS and Modal, with versioned configs.",
    instrumentLine: "Every run can be reproduced from its recorded config.",
    icon: "cpu",
  },
  {
    title: "Ship",
    description:
      "Weights, evaluation reports, and deployment guides for your VPC, Modal endpoints, SageMaker, or private Hugging Face repositories.",
    instrumentLine: "Delivered with runbooks for your MLOps team.",
    icon: "rocket",
  },
] as const;

export const processSteps = [
  { title: "Discover", duration: "1–2 weeks", detail: "Scope, success metrics, license review, and data assessment." },
  { title: "Dataset", duration: "2–6 weeks", detail: "Cleaning, captioning, annotation, privacy review, and data splits." },
  { title: "Train", duration: "1–4 weeks", detail: "Fine-tuning runs with tracked configs, checkpoints, and interim evaluations." },
  { title: "Evaluate", duration: "1–2 weeks", detail: "Benchmarks, red-team testing, and human review where needed." },
  { title: "Handoff", duration: "1 week", detail: "Weights, documentation, and optional inference setup." },
] as const;

export const techniques = [
  "Supervised fine-tuning (SFT)",
  "Full fine-tuning",
  "LoRA and DoRA",
  "QLoRA",
  "LyCORIS (diffusion)",
  "DPO preference tuning",
  "DreamBooth (with consent)",
  "Knowledge distillation",
  "Adapter merging and stacking",
] as const;

export const formOptions = {
  projectTypes: ["LLM", "Diffusion", "Multimodal", "Embeddings", "Speech", "Not sure", "Other"] as const,
  datasetReadiness: ["None", "Raw", "Partially curated", "Production-ready", "Other"] as const,
  timeline: ["ASAP", "1–3 months", "3–6 months", "Exploring", "Other"] as const,
  budget: [
    "$5,000 – $15,000",
    "$15,000 – $50,000",
    "$50,000 – $150,000",
    "$150,000+",
    "Prefer to discuss",
    "Other",
  ] as const,
  deployment: [
    "Cloud API",
    "VPC",
    "On-prem",
    "Hugging Face private",
    "Undecided",
    "Other",
  ] as const,
} as const;
