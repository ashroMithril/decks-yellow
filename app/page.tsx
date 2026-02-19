"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Presentation,
  Plus,
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  Calendar,
  Zap,
  X,
  FileText,
  Layers,
  Map,
} from "lucide-react"
import type { DeckConfig } from "@/lib/deck-agent"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "deck"
}

// Presentation card component
const PresentationCard = ({
  title,
  description,
  href,
  icon: Icon,
  color,
  delay = 0,
  tags,
  date,
}: {
  title: string
  description: string
  href: string
  icon: React.ElementType
  color: string
  delay?: number
  tags: string[]
  date: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Link href={href}>
      <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-[#5A3BFE]/30 transition-all duration-300 cursor-pointer h-full">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-1 text-gray-400 group-hover:text-[#5A3BFE] transition-colors">
            <span className="text-sm font-medium">Open</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-[#281C46] mb-2 group-hover:text-[#5A3BFE] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{date}</span>
        </div>
      </div>
    </Link>
  </motion.div>
)

export default function HomePage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [formData, setFormData] = useState<{
    deckName: string
    customerOrTitle: string
    numberOfPages: number
    detailLevel: "high-level" | "detailed"
    referenceDecks: ("main" | "roadmap" | "nexus")[]
    referenceContent: string
  }>({
    deckName: "",
    customerOrTitle: "",
    numberOfPages: 10,
    detailLevel: "high-level",
    referenceDecks: ["main", "roadmap"],
    referenceContent: "",
  })

  const handleCreateDeck = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const name = formData.deckName.trim() || formData.customerOrTitle.trim() || "Custom Deck"
      const slug = `${slugify(name)}-${Date.now().toString(36)}`
      const config: DeckConfig = {
        deckName: name,
        customerOrTitle: formData.customerOrTitle.trim() || name,
        numberOfPages: Math.min(30, Math.max(3, formData.numberOfPages)),
        detailLevel: formData.detailLevel,
        referenceDecks: formData.referenceDecks.length ? formData.referenceDecks : ["main", "roadmap"],
        referenceContent: formData.referenceContent.trim(),
        createdAt: new Date().toISOString(),
      }
      if (typeof window !== "undefined") {
        try {
          sessionStorage.setItem(`deckConfig:${slug}`, JSON.stringify(config))
        } catch (_) {}
      }
      setShowCreateForm(false)
      setFormData({
        deckName: "",
        customerOrTitle: "",
        numberOfPages: 10,
        detailLevel: "high-level",
        referenceDecks: ["main", "roadmap"],
        referenceContent: "",
      })
      router.push(`/deck/${slug}/review`)
    },
    [formData, router]
  )

  const toggleRefDeck = (key: "main" | "roadmap" | "nexus") => {
    setFormData((prev) => ({
      ...prev,
      referenceDecks: prev.referenceDecks.includes(key)
        ? prev.referenceDecks.filter((r) => r !== key)
        : [...prev.referenceDecks, key],
    }))
  }

  const presentations = [
    {
      title: "Yellow.ai Main Deck",
      description: "Comprehensive overview of Yellow.ai's Agentic AI platform, capabilities, and enterprise solutions for customer experience automation.",
      href: "/main",
      icon: Building2,
      color: "bg-[#5A3BFE]",
      tags: ["Product Overview", "Agentic AI", "Enterprise"],
      date: "February 2026",
    },
    {
      title: "Forrester Wave Deck",
      description: "Executive briefing for Forrester Wave evaluation showcasing Yellow.ai's leadership in conversational AI platforms.",
      href: "/presentation",
      icon: Presentation,
      color: "bg-[#00694D]",
      tags: ["Forrester", "Analyst Briefing", "Awards"],
      date: "February 2026",
    },
    {
      title: "Meta Partnership Deck",
      description: "Strategic partnership alignment presentation for Meta leadership, covering partnership history and future roadmap.",
      href: "/meta",
      icon: Users,
      color: "bg-[#0668E1]",
      tags: ["Partnership", "Meta", "WhatsApp"],
      date: "February 2026",
    },
    {
      title: "Nexus - Universal Agentic Interface",
      description: "Introducing Nexus, the industry's first Universal Agentic Interface (UAI) — a unified control plane delivering 'Service as a Software' for autonomous enterprise operations.",
      href: "/nexus",
      icon: Zap,
      color: "bg-[#F59E0B]",
      tags: ["Nexus", "UAI", "Agentic AI", "Autonomy"],
      date: "February 2026",
    },
    {
      title: "Product Roadmap",
      description: "Yellow.ai product roadmap: Build, Test, Optimise, Extensibility. Current capabilities, multi-LLM, Agentic RAG, Nexus reporting, and roadmap details.",
      href: "/docusing",
      icon: Map,
      color: "bg-[#0668E1]",
      tags: ["Roadmap", "Product", "Capabilities", "Build · Test · Optimise"],
      date: "February 2026",
    },
  ]

  const filteredPresentations = presentations.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/yellow-ai-logo.png"
              alt="Yellow.ai"
              className="h-8 w-auto"
            />
            <div className="h-6 w-px bg-gray-200" />
            <span className="text-sm font-medium text-gray-600">Presentation Studio</span>
          </div>
          <button
            type="button"
            onClick={() => setShowCreateForm(true)}
            className="flex items-center gap-2 bg-[#5A3BFE] text-white px-4 py-2 rounded-lg hover:bg-[#5A3BFE]/90 transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            New Presentation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#F8D57E]/20 text-[#281C46] px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#5A3BFE]" />
            <span className="text-sm font-medium">AI-Powered Presentations</span>
          </div>
          <h1 className="text-5xl font-bold text-[#281C46] mb-4">
            Yellow.ai Presentation Studio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create, manage, and deliver compelling presentations for your enterprise needs
          </p>
        </motion.div>

        {/* Search/Input Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search presentations or describe what you want to create..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-100/50 focus:outline-none focus:ring-2 focus:ring-[#5A3BFE]/20 focus:border-[#5A3BFE] text-gray-800 placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowCreateForm(true)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5A3BFE] text-white px-4 py-2 rounded-xl hover:bg-[#5A3BFE]/90 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Generate</span>
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            Type &quot;create a new deck&quot; and click Generate, or use the form to build a custom customer presentation
          </p>
        </motion.div>

        {/* Create Deck Modal */}
        <AnimatePresence>
          {showCreateForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowCreateForm(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#5A3BFE]/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#5A3BFE]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#281C46]">Create custom deck</h2>
                      <p className="text-sm text-gray-500">For sales & presales — customer-specific presentations</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={handleCreateDeck} className="flex flex-col flex-1 min-h-0 overflow-hidden">
                  <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#281C46] mb-1.5">Deck / presentation name</label>
                      <input
                        type="text"
                        value={formData.deckName}
                        onChange={(e) => setFormData((p) => ({ ...p, deckName: e.target.value }))}
                        placeholder="e.g. Acme Corp — Yellow.ai overview"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5A3BFE]/20 focus:border-[#5A3BFE] text-[#281C46] placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#281C46] mb-1.5">Customer or audience (optional)</label>
                      <input
                        type="text"
                        value={formData.customerOrTitle}
                        onChange={(e) => setFormData((p) => ({ ...p, customerOrTitle: e.target.value }))}
                        placeholder="e.g. Acme Corp, Retail vertical"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5A3BFE]/20 focus:border-[#5A3BFE] text-[#281C46] placeholder:text-gray-400"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#281C46] mb-1.5">Number of slides</label>
                        <input
                          type="number"
                          min={3}
                          max={30}
                          value={formData.numberOfPages}
                          onChange={(e) => setFormData((p) => ({ ...p, numberOfPages: parseInt(e.target.value, 10) || 10 }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5A3BFE]/20 focus:border-[#5A3BFE] text-[#281C46]"
                        />
                        <p className="text-xs text-gray-500 mt-1">Between 3 and 30 slides</p>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#281C46] mb-1.5">Detail level</label>
                        <select
                          value={formData.detailLevel}
                          onChange={(e) => setFormData((p) => ({ ...p, detailLevel: e.target.value as "high-level" | "detailed" }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5A3BFE]/20 focus:border-[#5A3BFE] text-[#281C46]"
                        >
                          <option value="high-level">High-level (executive summary, fewer bullets)</option>
                          <option value="detailed">Detailed (more content per slide, deeper dive)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#281C46] mb-1.5">Use designs & content from</label>
                      <p className="text-xs text-gray-500 mb-2">Pick which existing decks to use as design and content reference.</p>
                      <div className="flex flex-wrap gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.referenceDecks.includes("main")}
                            onChange={() => toggleRefDeck("main")}
                            className="rounded border-gray-300 text-[#5A3BFE] focus:ring-[#5A3BFE]"
                          />
                          <span className="text-sm text-[#281C46]">Main Deck</span>
                          <Building2 className="w-4 h-4 text-[#5A3BFE]" />
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.referenceDecks.includes("roadmap")}
                            onChange={() => toggleRefDeck("roadmap")}
                            className="rounded border-gray-300 text-[#5A3BFE] focus:ring-[#5A3BFE]"
                          />
                          <span className="text-sm text-[#281C46]">Product Roadmap</span>
                          <Map className="w-4 h-4 text-[#0668E1]" />
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.referenceDecks.includes("nexus")}
                            onChange={() => toggleRefDeck("nexus")}
                            className="rounded border-gray-300 text-[#5A3BFE] focus:ring-[#5A3BFE]"
                          />
                          <span className="text-sm text-[#281C46]">Nexus (UAI)</span>
                          <Zap className="w-4 h-4 text-[#F59E0B]" />
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#281C46] mb-1.5">Reference content (optional)</label>
                      <p className="text-xs text-gray-500 mb-2">Paste notes, brief, or copy to shape slide content. Use a blank line or &quot;---&quot; to separate sections for different slides.</p>
                      <textarea
                        value={formData.referenceContent}
                        onChange={(e) => setFormData((p) => ({ ...p, referenceContent: e.target.value }))}
                        placeholder="Paste customer brief, talking points, or key messages here..."
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5A3BFE]/20 focus:border-[#5A3BFE] text-[#281C46] placeholder:text-gray-400 resize-y min-h-[100px]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/50">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-4 py-2 rounded-xl text-[#281C46] hover:bg-gray-200 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5A3BFE] text-white hover:bg-[#5A3BFE]/90 transition-colors font-medium"
                    >
                      <Layers className="w-4 h-4" />
                      Create deck
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Presentations Grid */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-[#281C46] mb-6"
          >
            Your Presentations
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPresentations.map((presentation, index) => (
              <PresentationCard
                key={presentation.href}
                {...presentation}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>

          {filteredPresentations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
            >
              <Presentation className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No presentations found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/yellow-ai-logo.png" alt="Yellow.ai" className="h-6 w-auto opacity-50" />
            <span className="text-sm text-gray-400">© 2026 Yellow.ai</span>
          </div>
          <p className="text-sm text-gray-400">
            Powered by Agentic AI
          </p>
        </div>
      </footer>
    </div>
  )
}
