"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Sparkles,
  CheckCircle2,
  Edit3,
  ArrowRight,
  Home,
  Loader2,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { generateDeckContent, buildSlideContentSync, type DeckConfig, type SlideContent, APPROVED_CONTENT_KEY_PREFIX } from "@/lib/deck-agent"

export default function DeckReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter()
  const [slug, setSlug] = useState<string | null>(null)
  const [config, setConfig] = useState<DeckConfig | null>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [slides, setSlides] = useState<SlideContent[]>([])
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  useEffect(() => {
    params.then((p) => setSlug(p.slug))
  }, [params])

  useEffect(() => {
    if (!slug || typeof window === "undefined") return
    try {
      const raw = sessionStorage.getItem(`deckConfig:${slug}`)
      if (!raw) {
        setConfig(null)
        setStatus("error")
        return
      }
      const parsed = JSON.parse(raw) as DeckConfig
      setConfig(parsed)
    } catch {
      setConfig(null)
      setStatus("error")
    }
  }, [slug])

  useEffect(() => {
    if (!config) return
    let cancelled = false
    setStatus("loading")
    generateDeckContent(config)
      .then((content) => {
        if (!cancelled) {
          setSlides(content)
          setStatus("ready")
          setExpandedIndex(0)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setSlides(buildSlideContentSync(config))
          setStatus("ready")
          setExpandedIndex(0)
        }
      })
    return () => {
      cancelled = true
    }
  }, [config])

  const updateSlide = useCallback((index: number, patch: Partial<SlideContent>) => {
    setSlides((prev) => {
      const next = [...prev]
      if (index >= 0 && index < next.length) {
        next[index] = { ...next[index], ...patch }
      }
      return next
    })
  }, [])

  const setSlideTitle = useCallback((index: number, title: string) => updateSlide(index, { title }), [updateSlide])
  const setSlideBullets = useCallback(
    (index: number, bullets: string[]) => updateSlide(index, { bullets }),
    [updateSlide]
  )

  const handleApproveAndOpen = useCallback(() => {
    if (!slug || typeof window === "undefined") return
    try {
      sessionStorage.setItem(
        APPROVED_CONTENT_KEY_PREFIX + slug,
        JSON.stringify({ slides })
      )
    } catch (_) {}
    router.push(`/deck/${slug}`)
  }, [slug, slides, router])

  if (slug === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="animate-pulse text-[#281C46]">Loading…</div>
      </div>
    )
  }

  if (!config) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-md text-center">
          <FileText className="w-12 h-12 text-[#5A3BFE] mx-auto mb-4" />
          <h1 className="text-xl font-bold text-[#281C46] mb-2">Deck not found</h1>
          <p className="text-gray-600 text-sm mb-6">
            Create a new custom deck from the home page to use the review flow.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#5A3BFE] text-white px-4 py-2 rounded-xl hover:bg-[#5A3BFE]/90 font-medium"
          >
            <Home className="w-4 h-4" />
            Back to Presentation Studio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/yellow-ai-logo.png" alt="Yellow.ai" className="h-8 w-auto" />
            <span className="text-sm font-medium text-gray-600">Review deck content</span>
          </div>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-[#281C46] flex items-center gap-1"
          >
            <Home className="w-4 h-4" />
            Studio
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-[#281C46] mb-1">{config.deckName}</h1>
          {config.customerOrTitle && config.customerOrTitle !== config.deckName && (
            <p className="text-gray-600 text-sm">{config.customerOrTitle}</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Edit any slide below, then approve to open the deck with existing slide designs.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#5A3BFE]/10 flex items-center justify-center mb-4">
                <Loader2 className="w-7 h-7 text-[#5A3BFE] animate-spin" />
              </div>
              <p className="text-[#281C46] font-medium">Agent is creating your content…</p>
              <p className="text-sm text-gray-500 mt-1">Using your reference decks and brief</p>
            </motion.div>
          )}

          {status === "ready" && (
            <motion.div
              key="ready"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-sm text-[#5A3BFE] mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Content generated. Review and edit each slide, then approve.</span>
              </div>

              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#5A3BFE]/10 text-[#5A3BFE] text-sm font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-[#281C46]">
                          {slide.title || "Untitled slide"}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {slide.bullets.length} bullet(s)
                        </p>
                      </div>
                    </div>
                    {expandedIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-gray-100 overflow-hidden"
                      >
                        <div className="p-5 space-y-4 bg-gray-50/50">
                          <div>
                            <label className="block text-xs font-semibold text-[#281C46]/70 uppercase tracking-wider mb-1.5">
                              Slide title
                            </label>
                            <input
                              type="text"
                              value={slide.title}
                              onChange={(e) => setSlideTitle(index, e.target.value)}
                              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#5A3BFE]/20 focus:border-[#5A3BFE] text-[#281C46]"
                              placeholder="Slide title"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[#281C46]/70 uppercase tracking-wider mb-1.5">
                              Bullets (one per line)
                            </label>
                            <textarea
                              value={slide.bullets.join("\n")}
                              onChange={(e) =>
                                setSlideBullets(
                                  index,
                                  e.target.value
                                    .split("\n")
                                    .map((s) => s.trim())
                                    .filter(Boolean)
                                )
                              }
                              rows={Math.min(8, Math.max(3, slide.bullets.length + 1))}
                              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-[#5A3BFE]/20 focus:border-[#5A3BFE] text-[#281C46] text-sm resize-y"
                              placeholder="One bullet per line"
                            />
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Edit3 className="w-3.5 h-3.5" />
                            Edits here will appear in the deck when you approve.
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
                <Link
                  href="/"
                  className="px-4 py-2.5 rounded-xl text-[#281C46] hover:bg-gray-200 transition-colors font-medium text-center"
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  onClick={handleApproveAndOpen}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5A3BFE] text-white hover:bg-[#5A3BFE]/90 transition-colors font-semibold shadow-lg shadow-[#5A3BFE]/20"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Approve all & open deck
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
            >
              <p>Something went wrong. Try creating the deck again from the home page.</p>
              <Link href="/" className="mt-4 inline-block text-[#5A3BFE] font-medium">
                Back to Presentation Studio
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
