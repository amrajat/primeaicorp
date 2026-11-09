export const site = {
  name: "Prime AI Company",
  shortName: "Prime AI",
  tagline: "Train open models on your data.",
  description:
    "Prime AI Company fine-tunes open LLMs and diffusion models—Stable Diffusion, FLUX, Llama, Qwen, and more—on your datasets. Enterprise training on AWS, NVIDIA, and Modal.",
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
      "Ingestion, cleaning, captioning, PII handling, and train/val splits with quality reports your team can audit.",
    instrumentLine: "Splits, captions, and PII baselines your team can sign off.",
    icon: "database",
  },
  {
    title: "Train",
    description:
      "SFT, LoRA, alignment, and diffusion training on NVIDIA GPUs via AWS and Modal—with reproducible configs.",
    instrumentLine: "SFT · LoRA · alignment — logged configs, not a black box.",
    icon: "cpu",
  },
  {
    title: "Ship",
    description:
      "Weights, eval reports, and deployment guides for VPC, Modal endpoints, SageMaker, or private Hugging Face repos.",
    instrumentLine: "Weights, eval PDFs, and runbooks for your stack.",
    icon: "rocket",
  },
] as const;

export const processSteps = [
  { title: "Discover", duration: "1–2 weeks", detail: "Scope, success metrics, license review, data assessment." },
  { title: "Dataset", duration: "2–6 weeks", detail: "Curation, labeling, captioning, and security baselines." },
  { title: "Train", duration: "1–4 weeks", detail: "Fine-tune or LoRA cycles with checkpoint tracking." },
  { title: "Evaluate", duration: "1–2 weeks", detail: "Benchmarks, red-team passes, human review where needed." },
  { title: "Handoff", duration: "1 week", detail: "Artifacts, docs, and optional inference setup." },
] as const;

export const techniques = [
  "Full fine-tune (enterprise)",
  "LoRA / LyCORIS / DoRA",
  "QLoRA",
  "DreamBooth-style identity",
  "DPO / preference tuning",
  "Knowledge distillation",
  "Multi-adapter stacking",
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
