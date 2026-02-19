/**
 * Deck content agent: generates slide content for new deck requests.
 * Replace the implementation of generateDeckContent with an API call to your LLM
 * when you have a backend (e.g. OpenAI, Claude) to produce richer, tailored content.
 */

export interface DeckConfig {
  deckName: string
  customerOrTitle: string
  numberOfPages: number
  detailLevel: "high-level" | "detailed"
  referenceDecks: ("main" | "roadmap" | "nexus")[]
  referenceContent: string
  createdAt: string
}

export interface SlideContent {
  title: string
  bullets: string[]
}

const REFERENCE_SLIDE_CONTENT: Record<"main" | "roadmap" | "nexus", SlideContent[]> = {
  main: [
    { title: "Agentic AI platform", bullets: ["Agents that Think, Act, and Resolve.", "Single platform for customer experience automation.", "Enterprise-grade security and compliance."] },
    { title: "Key capabilities", bullets: ["Multi-LLM orchestration and routing.", "Omni-channel: chat, voice, WhatsApp, in-app.", "Inbound + outbound conversation orchestration."] },
    { title: "Why Yellow.ai", bullets: ["Proven at scale across industries.", "SOC2, HIPAA-ready; PII-free LLM integration.", "Nexus — Universal Agentic Interface for TCO reduction."] },
  ],
  roadmap: [
    { title: "Current capabilities", bullets: ["Multi-LLM architecture over 15+ LLMs.", "Agentic RAG with goal-based planning and citations.", "PII-free LLM integration; omni-channel; Nexus reporting."] },
    { title: "Build · Test · Optimise · Extensibility", bullets: ["Build: Studio, flows, knowledge bases.", "Test: AI Trust Center, KB quality, automated testing.", "Optimise: Reporting and analytics.", "Extensibility: Headless API, MCP, agent orchestration."] },
    { title: "Product architecture", bullets: ["Unified control plane for agents.", "Eyes, Hands, Authority — discover, build, test, optimise.", "Up to 60% TCO reduction with Nexus."] },
  ],
  nexus: [
    { title: "Nexus — Universal Agentic Interface", bullets: ["Industry's first UAI for the autonomic enterprise.", "Service as a Software: discover, build, test, optimise.", "Single pane for all agent operations."] },
    { title: "Three pillars", bullets: ["Eyes: See everything — reporting and discovery.", "Hands: Build and test — Studio and automation.", "Authority: Deploy and govern with confidence."] },
    { title: "Outcomes", bullets: ["Faster time-to-value and lower TCO.", "Consistent branding and control across channels.", "Scalable, secure, and future-ready."] },
  ],
}

function parseReferenceContent(text: string, detailLevel: "high-level" | "detailed"): SlideContent[] {
  const chunks = text.split(/\n---\n|\n\n\n+/).map((s) => s.trim()).filter(Boolean)
  const slides: SlideContent[] = []
  for (const chunk of chunks) {
    const lines = chunk.split(/\n/).map((s) => s.trim()).filter(Boolean)
    const first = lines[0] || "Section"
    const bullets = lines.slice(1).filter((l) => l.length > 0)
    const title = first.length > 60 ? first.slice(0, 57) + "…" : first
    const maxLen = detailLevel === "high-level" ? 80 : 180
    slides.push({
      title,
      bullets: bullets.map((b) => (b.length > maxLen ? b.slice(0, maxLen - 1) + "…" : b)).slice(0, detailLevel === "high-level" ? 4 : 8),
    })
  }
  return slides
}

/**
 * Agent: generates slide content for the deck based on config.
 * Simulates a short delay for "agent at work" UX. Replace with your LLM API when ready.
 */
export async function generateDeckContent(config: DeckConfig): Promise<SlideContent[]> {
  // Simulate agent thinking (replace with real API call, e.g. fetch('/api/generate-deck', { body: JSON.stringify(config) }))
  await new Promise((r) => setTimeout(r, 800 + Math.random() * 400))

  if (config.referenceContent.trim()) {
    const custom = parseReferenceContent(config.referenceContent, config.detailLevel)
    if (custom.length > 0) {
      const needed = Math.max(0, config.numberOfPages - 2)
      if (custom.length >= needed) return custom.slice(0, needed)
      const result = [...custom]
      const pool = getPool(config)
      while (result.length < needed) result.push(pool[result.length % pool.length])
      return result.slice(0, needed)
    }
  }

  const pool = getPool(config)
  const needed = Math.max(0, config.numberOfPages - 2)
  const result: SlideContent[] = []
  const maxBullets = config.detailLevel === "high-level" ? 4 : 6
  for (let i = 0; i < needed; i++) {
    const src = pool[i % pool.length]
    result.push({
      title: src.title,
      bullets: src.bullets.slice(0, maxBullets),
    })
  }
  return result
}

function getPool(config: DeckConfig): SlideContent[] {
  const pool: SlideContent[] = []
  for (const key of config.referenceDecks) {
    pool.push(...REFERENCE_SLIDE_CONTENT[key])
  }
  if (pool.length === 0) pool.push(...REFERENCE_SLIDE_CONTENT.main)
  return pool
}

/** Sync fallback when no approved content and no async call (e.g. direct visit to deck URL). */
export function buildSlideContentSync(config: DeckConfig): SlideContent[] {
  if (config.referenceContent.trim()) {
    const custom = parseReferenceContent(config.referenceContent, config.detailLevel)
    if (custom.length > 0) {
      const needed = Math.max(0, config.numberOfPages - 2)
      if (custom.length >= needed) return custom.slice(0, needed)
      const pool = getPool(config)
      const result = [...custom]
      while (result.length < needed) result.push(pool[result.length % pool.length])
      return result.slice(0, needed)
    }
  }
  const pool = getPool(config)
  const needed = Math.max(0, config.numberOfPages - 2)
  const result: SlideContent[] = []
  const maxBullets = config.detailLevel === "high-level" ? 4 : 6
  for (let i = 0; i < needed; i++) {
    const src = pool[i % pool.length]
    result.push({ title: src.title, bullets: src.bullets.slice(0, maxBullets) })
  }
  return result
}

export const APPROVED_CONTENT_KEY_PREFIX = "deckApprovedContent:"
