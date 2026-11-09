export type Industry = "Retail" | "Finance" | "Healthcare" | "Media" | "SaaS" | "Manufacturing" | "Cross-industry";

export type UseCase = {
  id: string;
  title: string;
  heroLine: string;
  description: string;
  models: string;
  deliverables: string;
  industry: Industry;
  category: "llm" | "diffusion" | "cross";
};

export const industries: Industry[] = [
  "Cross-industry",
  "Retail",
  "Finance",
  "Healthcare",
  "Media",
  "SaaS",
  "Manufacturing",
];

export const useCases: UseCase[] = [
  {
    id: "enterprise-rag",
    title: "Enterprise knowledge assistant",
    heroLine: "Grounded answers on wikis, SOPs, and tickets.",
    description:
      "Fine-tune and align open LLMs on your internal knowledge with citation-style behavior and retrieval-friendly embeddings. We build eval sets from real employee questions so improvements are measurable.",
    models: "Llama 3.1, Qwen 2.5, Mistral + BGE/E5 embeddings",
    deliverables: "Fine-tuned weights, RAG eval report, deployment guide",
    industry: "SaaS",
    category: "llm",
  },
  {
    id: "support-copilot",
    title: "Customer support copilot",
    heroLine: "On-brand replies with escalation awareness.",
    description:
      "Train models on historical tickets and macros for tone-aligned drafts across languages. Preference tuning reduces off-brand phrasing before agents review outputs.",
    models: "Gemma, Llama instruct, Phi-4-mini (edge)",
    deliverables: "SFT checkpoint, tone rubric, API integration notes",
    industry: "SaaS",
    category: "llm",
  },
  {
    id: "legal-review",
    title: "Legal & compliance document review",
    heroLine: "Clause extraction with human-in-the-loop.",
    description:
      "Long-context fine-tunes flag risks and summarize agreements—they do not replace counsel. Outputs are structured for attorney review with audit logs.",
    models: "Llama 3.1 70B-class, Qwen long-context",
    deliverables: "Domain adapter, JSON schema prompts, red-team report",
    industry: "Finance",
    category: "llm",
  },
  {
    id: "healthcare-admin",
    title: "Healthcare admin & clinical notes",
    heroLine: "Summarization on de-identified data.",
    description:
      "Administrative workflows only: coding hints and note summarization on properly de-identified datasets. We do not market diagnostic models on this site.",
    models: "Domain SFT on approved open bases",
    deliverables: "HIPAA-aware training plan, eval on synthetic+real admin sets",
    industry: "Healthcare",
    category: "llm",
  },
  {
    id: "financial-research",
    title: "Financial research & reports",
    heroLine: "Earnings and portfolio Q&A on licensed feeds.",
    description:
      "Models tuned on your research corpus with strict refusal and freshness evals. Reasoning distills help multi-step report drafting with guardrails.",
    models: "DeepSeek-R1 distill, Mixtral",
    deliverables: "Checkpoints, benchmark vs analyst gold set",
    industry: "Finance",
    category: "llm",
  },
  {
    id: "code-assistant",
    title: "Code assistant for private repos",
    heroLine: "API-aware completion in your style.",
    description:
      "Fine-tune on internal libraries and style guides. We exclude secrets via scanning and train only on approved repositories.",
    models: "StarCoder2, DeepSeek-Coder, CodeLlama",
    deliverables: "Code model, private eval harness, IDE integration notes",
    industry: "SaaS",
    category: "llm",
  },
  {
    id: "sales-enablement",
    title: "Sales enablement & proposals",
    heroLine: "Battlecards and RFP snippets from CRM exports.",
    description:
      "DPO aligns outputs with brand voice and compliance snippets. Sales teams get drafts—not auto-send—integrated into existing workflows.",
    models: "Mid-size instruct models + preference data",
    deliverables: "Aligned checkpoint, prompt library, CRM field mapping doc",
    industry: "SaaS",
    category: "llm",
  },
  {
    id: "visual-inspection",
    title: "Visual inspection QA",
    heroLine: "Defect notes from production line images.",
    description:
      "Vision-language models emit structured JSON for MES integration. Training uses your labeled defect library with class balance reporting.",
    models: "Qwen2-VL, Llama 3.2 Vision",
    deliverables: "VLM fine-tune, JSON schema, offline eval on holdout lines",
    industry: "Manufacturing",
    category: "llm",
  },
  {
    id: "ecom-photo",
    title: "E-commerce product photography",
    heroLine: "Consistent lighting from SKU references.",
    description:
      "LoRA trains on your packshots for background and lighting consistency at catalog scale. ControlNet preserves product geometry.",
    models: "SDXL / FLUX LoRA + ControlNet",
    deliverables: "LoRA pack, inference presets, brand safety filter",
    industry: "Retail",
    category: "diffusion",
  },
  {
    id: "fashion-lookbook",
    title: "Fashion & apparel lookbooks",
    heroLine: "Campaign style locked in a LoRA.",
    description:
      "Multi-LoRA stacks separate fabric, lighting, and model identity where licensing allows. Creative teams get a scored style matrix.",
    models: "FLUX, SDXL, multi-LoRA",
    deliverables: "Style LoRAs, prompt cookbook, QA grid",
    industry: "Retail",
    category: "diffusion",
  },
  {
    id: "real-estate",
    title: "Real estate & interior staging",
    heroLine: "Room style with layout control.",
    description:
      "Depth- and canny-conditioned generation stages empty rooms without moving walls. MLS-compliant watermarking options available.",
    models: "SDXL + ControlNet depth/canny",
    deliverables: "LoRA + ControlNet bundle, staging playbook",
    industry: "Retail",
    category: "diffusion",
  },
  {
    id: "gaming-art",
    title: "Gaming & entertainment concept art",
    heroLine: "Character and environment packs.",
    description:
      "Train on style bibles and approved asset libraries. Pipelines support iterative refinement with fixed seed workflows.",
    models: "SDXL, FLUX, Stable Cascade",
    deliverables: "Style LoRAs, asset gen guide, NSFW policy filter",
    industry: "Media",
    category: "diffusion",
  },
  {
    id: "marketing-creative",
    title: "Marketing creative at scale",
    heroLine: "Ad variants within brand guidelines.",
    description:
      "Schnell-tier models for volume; dev-tier for hero assets. Eval rubrics score logo placement and color adherence.",
    models: "FLUX schnell + dev",
    deliverables: "Dual-tier workflow, brand checker prompts",
    industry: "Media",
    category: "diffusion",
  },
  {
    id: "architecture-viz",
    title: "Architectural visualization",
    heroLine: "Facade and landscape iterations.",
    description:
      "ControlNet keeps structural lines while exploring materials and context. Useful for pitch decks and client reviews.",
    models: "SDXL + ControlNet",
    deliverables: "Material LoRAs, control presets",
    industry: "Manufacturing",
    category: "diffusion",
  },
  {
    id: "avatars",
    title: "Personalized avatars & characters",
    heroLine: "Identity-consistent generation with consent.",
    description:
      "DreamBooth-style training only with documented consent and likeness rights. We refuse non-consensual identity projects.",
    models: "DreamBooth / FLUX character LoRA",
    deliverables: "Character adapter, consent checklist, usage policy",
    industry: "Media",
    category: "diffusion",
  },
  {
    id: "packaging",
    title: "Print & packaging mockups",
    heroLine: "Label-accurate drafts for review.",
    description:
      "IP-Adapter locks logos while exploring substrates and finishes. Prepress teams get 3D-ish mockups without full CGI pipelines.",
    models: "SDXL, IP-Adapter",
    deliverables: "Mockup LoRA, logo-reference pipeline",
    industry: "Retail",
    category: "diffusion",
  },
  {
    id: "social-video",
    title: "Short social video loops",
    heroLine: "Product spins and motion posters.",
    description:
      "AnimateDiff and CogVideoX fine-tunes on short clips from your brand library. Duration and aspect ratio match platform specs.",
    models: "AnimateDiff, CogVideoX",
    deliverables: "Video LoRA, render recipe, codec export settings",
    industry: "Media",
    category: "diffusion",
  },
  {
    id: "vpc-private",
    title: "On-prem / VPC private model",
    heroLine: "Data never leaves your cloud account.",
    description:
      "We train inside your AWS or Modal tenant with credentials you control. Artifacts land in your buckets—ideal for regulated industries.",
    models: "Your choice of open stack",
    deliverables: "VPC runbook, IAM template, trained weights in your storage",
    industry: "Cross-industry",
    category: "cross",
  },
  {
    id: "lora-packs",
    title: "Model merge & specialization packs",
    heroLine: "Multiple LoRAs with an eval matrix.",
    description:
      "Creative and ML teams get a catalog of adapters with compatibility notes and merged presets where appropriate.",
    models: "SDXL / FLUX ecosystems",
    deliverables: "LoRA library, merge recipes, eval spreadsheet",
    industry: "Cross-industry",
    category: "cross",
  },
];

export function getHomeUseCases(limit = 6): UseCase[] {
  return useCases.slice(0, limit);
}
