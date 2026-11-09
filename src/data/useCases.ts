export type Industry =
  | "Retail"
  | "Finance"
  | "Healthcare"
  | "Media"
  | "SaaS"
  | "Manufacturing"
  | "Real estate"
  | "Cross-industry";

export type UseCaseCategory = "llm" | "diffusion" | "cross";

export const useCaseCategoryLabels: Record<UseCaseCategory, string> = {
  llm: "Language & vision-language",
  diffusion: "Image & video",
  cross: "Infrastructure",
};

export type UseCase = {
  id: string;
  title: string;
  heroLine: string;
  description: string;
  models: string;
  deliverables: string;
  industry: Industry;
  category: UseCaseCategory;
};

export const industries: Industry[] = [
  "Cross-industry",
  "Retail",
  "Finance",
  "Healthcare",
  "Media",
  "SaaS",
  "Manufacturing",
  "Real estate",
];

export const useCases: UseCase[] = [
  {
    id: "enterprise-rag",
    title: "Enterprise knowledge assistant",
    heroLine: "Grounded answers from wikis, SOPs, and tickets.",
    description:
      "We fine-tune an open LLM for your terminology, answer format, and citation behavior, and pair it with a tuned embedding model for retrieval. Knowledge stays in your index rather than in the weights, so it can be updated without retraining. Evaluation sets come from real employee questions.",
    models: "Llama 3.x, Qwen3, or Mistral, with BGE or E5 embeddings",
    deliverables: "Fine-tuned weights, retrieval evaluation report, deployment guide",
    industry: "SaaS",
    category: "llm",
  },
  {
    id: "support-copilot",
    title: "Customer support copilot",
    heroLine: "On-brand reply drafts with clear escalation rules.",
    description:
      "Trained on historical tickets and macros to draft replies in your tone, across languages. Preference tuning reduces off-brand phrasing before an agent reviews each draft.",
    models: "Gemma 3, Llama 3.x Instruct, Phi-4-mini",
    deliverables: "Fine-tuned checkpoint, tone rubric, API integration notes",
    industry: "SaaS",
    category: "llm",
  },
  {
    id: "legal-review",
    title: "Contract and compliance review",
    heroLine: "Clause extraction for attorney review.",
    description:
      "Long-context fine-tunes that flag risky clauses and summarize agreements. Output is structured for attorney review and logged for audit. The model supports counsel and does not replace them.",
    models: "Llama 3.x (70B class), Qwen long-context models",
    deliverables: "Domain adapter, structured-output prompts, red-team report",
    industry: "Finance",
    category: "llm",
  },
  {
    id: "healthcare-admin",
    title: "Healthcare administration",
    heroLine: "Note summarization on de-identified data.",
    description:
      "Administrative support only: note summarization and coding suggestions on de-identified data, with clinician review. We do not build diagnostic or treatment models.",
    models: "Open bases selected after a data-use review",
    deliverables: "Training plan for de-identified data, evaluation on approved samples",
    industry: "Healthcare",
    category: "llm",
  },
  {
    id: "financial-research",
    title: "Financial research and reporting",
    heroLine: "Earnings and portfolio Q&A on licensed data.",
    description:
      "Models tuned on your research corpus, evaluated for refusal behavior and data freshness. Reasoning-oriented distills support multi-step report drafting, with an analyst reviewing every output.",
    models: "DeepSeek-R1 distills, Qwen3, Mistral",
    deliverables: "Checkpoints, benchmark against an analyst-written reference set",
    industry: "Finance",
    category: "llm",
  },
  {
    id: "code-assistant",
    title: "Code assistant for private repositories",
    heroLine: "Completion that knows your internal APIs.",
    description:
      "Fine-tuned on your internal libraries and style guides. We scan for secrets and train only on repositories you approve.",
    models: "StarCoder2, DeepSeek-Coder, Code Llama",
    deliverables: "Code model, private evaluation harness, IDE integration notes",
    industry: "SaaS",
    category: "llm",
  },
  {
    id: "sales-enablement",
    title: "Sales enablement and proposals",
    heroLine: "Battlecards and RFP drafts from CRM exports.",
    description:
      "Preference tuning with DPO aligns drafts with your brand voice and approved compliance language. Sales teams receive drafts inside existing tools; nothing is sent automatically.",
    models: "Mid-size instruct models with preference data",
    deliverables: "Aligned checkpoint, prompt library, CRM field-mapping document",
    industry: "SaaS",
    category: "llm",
  },
  {
    id: "visual-inspection",
    title: "Visual inspection reports",
    heroLine: "Defect notes from production-line images.",
    description:
      "Vision-language models that return structured JSON for MES integration. Training uses your labeled defect library, with class-balance reporting.",
    models: "Qwen2.5-VL, InternVL2",
    deliverables: "Fine-tuned vision-language model, JSON schema, offline evaluation on held-out lines",
    industry: "Manufacturing",
    category: "llm",
  },
  {
    id: "ecom-photo",
    title: "E-commerce product imagery",
    heroLine: "Consistent lighting and backgrounds across a catalog.",
    description:
      "LoRAs trained on your packshots keep backgrounds and lighting consistent at catalog scale. ControlNet preserves product shape and proportions.",
    models: "SDXL or FLUX.1 LoRA with ControlNet",
    deliverables: "LoRA pack, inference presets, brand-safety filter",
    industry: "Retail",
    category: "diffusion",
  },
  {
    id: "fashion-lookbook",
    title: "Fashion and apparel lookbooks",
    heroLine: "A campaign look captured in a LoRA.",
    description:
      "Separate LoRAs for fabric, lighting, and model identity, combined where licensing and consent allow. Creative teams receive a scored style matrix.",
    models: "SDXL or FLUX.1, multi-LoRA",
    deliverables: "Style LoRAs, prompt guide, review grid",
    industry: "Retail",
    category: "diffusion",
  },
  {
    id: "real-estate",
    title: "Virtual staging and interiors",
    heroLine: "Furnished rooms with the layout left intact.",
    description:
      "Depth- and edge-conditioned generation furnishes empty rooms without moving walls or openings. Optional on-image disclosure supports listing-service rules on virtually staged photos.",
    models: "SDXL with ControlNet (depth, canny)",
    deliverables: "LoRA and ControlNet bundle, staging workflow guide",
    industry: "Real estate",
    category: "diffusion",
  },
  {
    id: "gaming-art",
    title: "Concept art for games and entertainment",
    heroLine: "Character and environment style packs.",
    description:
      "Trained on your style bible and approved asset libraries. Fixed-seed workflows support controlled, repeatable iteration.",
    models: "SDXL, FLUX.1, Stable Diffusion 3.5",
    deliverables: "Style LoRAs, generation guide, content-policy filter",
    industry: "Media",
    category: "diffusion",
  },
  {
    id: "marketing-creative",
    title: "Marketing creative at scale",
    heroLine: "Ad variants within brand guidelines.",
    description:
      "FLUX.1 [schnell], which is Apache 2.0, handles volume work. FLUX.1 [dev] is used for hero assets only where a commercial license from Black Forest Labs is in place. Review rubrics score color adherence and logo placement.",
    models: "FLUX.1 [schnell] and [dev]",
    deliverables: "Two-tier workflow, brand-check prompts",
    industry: "Media",
    category: "diffusion",
  },
  {
    id: "architecture-viz",
    title: "Architectural visualization",
    heroLine: "Facade and landscape variations.",
    description:
      "ControlNet holds structural lines while you explore materials and surroundings. Useful for client presentations and early design reviews.",
    models: "SDXL with ControlNet",
    deliverables: "Material LoRAs, control presets",
    industry: "Real estate",
    category: "diffusion",
  },
  {
    id: "avatars",
    title: "Personalized characters and avatars",
    heroLine: "Identity-consistent generation, with consent.",
    description:
      "DreamBooth-style training only with documented consent and likeness rights. We decline projects that involve a person's likeness without it.",
    models: "DreamBooth or FLUX.1 character LoRA",
    deliverables: "Character adapter, consent checklist, usage policy",
    industry: "Media",
    category: "diffusion",
  },
  {
    id: "packaging",
    title: "Packaging and print mockups",
    heroLine: "Fast visual drafts for review.",
    description:
      "IP-Adapter and reference conditioning keep a consistent brand look across substrates and finishes. Diffusion models cannot reliably reproduce exact logos or label text, so final artwork is composited in prepress.",
    models: "SDXL with IP-Adapter",
    deliverables: "Mockup LoRA, reference-image pipeline",
    industry: "Retail",
    category: "diffusion",
  },
  {
    id: "social-video",
    title: "Short-form video loops",
    heroLine: "Product spins and motion posters.",
    description:
      "AnimateDiff and CogVideoX fine-tuned on short clips from your brand library. Open video models generate a few seconds at a time, so we cover upscaling and frame interpolation for platform formats.",
    models: "AnimateDiff, CogVideoX",
    deliverables: "Video LoRA, render recipe, export settings",
    industry: "Media",
    category: "diffusion",
  },
  {
    id: "vpc-private",
    title: "Private-cloud and on-premises training",
    heroLine: "Your data stays in your environment.",
    description:
      "We train inside your AWS account or Modal workspace using credentials you control, and artifacts are written to your own storage. Suited to teams with data-residency or regulatory requirements.",
    models: "Open model of your choice",
    deliverables: "Runbook, IAM template, trained weights in your storage",
    industry: "Cross-industry",
    category: "cross",
  },
  {
    id: "lora-packs",
    title: "Adapter libraries and merges",
    heroLine: "Multiple LoRAs, tested together.",
    description:
      "A catalog of adapters with compatibility notes and tested merged presets, so creative and ML teams can combine styles predictably.",
    models: "SDXL and FLUX.1 ecosystems",
    deliverables: "LoRA library, merge recipes, evaluation sheet",
    industry: "Cross-industry",
    category: "cross",
  },
];

export function getHomeUseCases(limit = 6): UseCase[] {
  return useCases.slice(0, limit);
}
