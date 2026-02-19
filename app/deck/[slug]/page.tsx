"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Target,
  CheckCircle2,
  Home,
  Layers,
  type LucideIcon,
} from "lucide-react"
import {
  type DeckConfig,
  buildSlideContentSync,
  APPROVED_CONTENT_KEY_PREFIX,
} from "@/lib/deck-agent"

// ——— Design system (aligned with docusing / main / nexus) ———
const SlideWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full min-h-0 flex items-stretch justify-center p-1 sm:p-2">
    <div className="w-full max-w-[1400px] h-full min-h-0 bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden relative flex flex-col flex-1">
      {children}
    </div>
  </div>
)

const SlideFooter = () => (
  <div className="flex-shrink-0 h-2 bg-gradient-to-r from-[#5A3BFE]/20 via-[#F8D57E]/20 to-[#0668E1]/20 rounded-b-xl" aria-hidden />
)

const SectionHeader = ({
  icon: Icon,
  title,
  subtitle,
  color = "bg-[#5A3BFE]",
}: {
  icon: React.ElementType
  title: string
  subtitle?: string
  color?: string
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-center gap-3 mb-2 sm:mb-3"
  >
    <div className={`${color} rounded-lg p-3`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-[#281C46]">{title}</h2>
      {subtitle && <p className="text-sm text-[#281C46]/60">{subtitle}</p>}
    </div>
  </motion.div>
)

// Title slide
function TitleSlideContent({ deckName, customerOrTitle }: { deckName: string; customerOrTitle: string }) {
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5A3BFE] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F8D57E] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="flex flex-col items-center text-center max-w-4xl px-8 relative">
          <motion.img
            src="/yellow logo.png"
            alt="Yellow.ai"
            className="h-12 md:h-14 w-auto object-contain mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#281C46] mb-3 mt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {deckName}
          </motion.h1>
          {customerOrTitle && customerOrTitle !== deckName && (
            <motion.p
              className="text-lg text-[#281C46]/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {customerOrTitle}
            </motion.p>
          )}
          <motion.p
            className="text-sm text-[#5A3BFE] mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Yellow.ai — Agentic AI for customer experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex items-center text-[#5A3BFE]"
          >
            <span className="text-sm mr-2">Press arrow keys to navigate</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </SlideWrapper>
  )
}

// Content slide (single topic + bullets)
function ContentSlideContent({
  title,
  bullets,
  icon: Icon = Target,
}: {
  title: string
  bullets: string[]
  icon?: LucideIcon
}) {
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <div className="relative flex-1 min-h-0 overflow-auto p-4 flex flex-col">
          <SectionHeader icon={Icon} title={title} color="bg-[#5A3BFE]" />
          <ul className="space-y-2 mt-2">
            {bullets.map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className="flex gap-3 items-start text-[#281C46]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#5A3BFE] flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{line}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <SlideFooter />
      </div>
    </SlideWrapper>
  )
}

// Thank you / closing slide
function ClosingSlideContent({ deckName }: { deckName: string }) {
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#5A3BFE] rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center relative"
        >
          <h2 className="text-3xl font-bold text-[#281C46] mb-2">Thank you</h2>
          <p className="text-[#281C46]/80">{deckName}</p>
          <p className="text-sm text-[#5A3BFE] mt-4">Yellow.ai</p>
        </motion.div>
        <SlideFooter />
      </div>
    </SlideWrapper>
  )
}

export default function DeckPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null)
  const [config, setConfig] = useState<DeckConfig | null>(null)

  useEffect(() => {
    params.then((p) => setSlug(p.slug))
  }, [params])

  const [approvedSlides, setApprovedSlides] = useState<{ title: string; bullets: string[] }[] | null>(null)

  useEffect(() => {
    if (!slug || typeof window === "undefined") return
    try {
      const raw = sessionStorage.getItem(`deckConfig:${slug}`)
      if (raw) {
        const parsed = JSON.parse(raw) as DeckConfig
        setConfig(parsed)
      } else {
        setConfig(null)
      }
      const approvedRaw = sessionStorage.getItem(APPROVED_CONTENT_KEY_PREFIX + slug)
      if (approvedRaw) {
        const { slides } = JSON.parse(approvedRaw) as { slides: { title: string; bullets: string[] }[] }
        setApprovedSlides(slides ?? null)
      } else {
        setApprovedSlides(null)
      }
    } catch {
      setConfig(null)
      setApprovedSlides(null)
    }
  }, [slug])

  const slideContent = useMemo(() => {
    if (!config) return []
    if (approvedSlides && approvedSlides.length > 0) return approvedSlides
    return buildSlideContentSync(config)
  }, [config, approvedSlides])

  const totalSlides = config ? config.numberOfPages : 0 // title + content + thank you
  const slideNames = useMemo(() => {
    if (!config) return []
    const names = ["Title", ...slideContent.map((s) => s.title)]
    if (names.length < totalSlides) names.push("Thank you")
    return names
  }, [config, slideContent, totalSlides])

  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    }
  }, [currentSlide, totalSlides])

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1)
      setCurrentSlide((prev) => prev + 1)
    }
  }, [currentSlide, totalSlides])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide((prev) => prev - 1)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

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
          <Layers className="w-12 h-12 text-[#5A3BFE] mx-auto mb-4" />
          <h1 className="text-xl font-bold text-[#281C46] mb-2">Deck not found</h1>
          <p className="text-gray-600 text-sm mb-6">
            This deck may have been created in another session. Create a new custom deck from the home page.
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

  const isTitle = currentSlide === 0
  const isClosing = currentSlide === totalSlides - 1 && totalSlides > 1
  const contentIndex = currentSlide - 1
  const contentSlide =
    contentIndex >= 0 && contentIndex < slideContent.length ? slideContent[contentIndex] : null

  const CurrentSlide =
    isTitle ? (
      <TitleSlideContent deckName={config.deckName} customerOrTitle={config.customerOrTitle} />
    ) : isClosing ? (
      <ClosingSlideContent deckName={config.deckName} />
    ) : contentSlide ? (
      <ContentSlideContent title={contentSlide.title} bullets={contentSlide.bullets} />
    ) : (
      <SlideWrapper><div className="flex items-center justify-center p-8"><p className="text-[#281C46]/60">Slide {currentSlide + 1}</p></div></SlideWrapper>
    )

  return (
    <div className="h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            {CurrentSlide}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-white/90 backdrop-blur-sm border-t border-white/50 px-6 py-3">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto">
          <div className="flex items-center gap-1 flex-wrap max-h-14 overflow-y-auto overflow-x-hidden">
            {slideNames.map((name, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  index === currentSlide ? "bg-[#5A3BFE] text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {name.length > 24 ? name.slice(0, 22) + "…" : name}
              </button>
            ))}
          </div>
          <div className="text-sm text-slate-500 font-medium flex-shrink-0 ml-2">
            {currentSlide + 1} / {totalSlides}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="w-10 h-10 rounded-full bg-[#5A3BFE] hover:bg-[#5A3BFE]/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
