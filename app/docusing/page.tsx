"use client"

import { useState, useEffect, useCallback, Fragment } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Brain,
  Layers,
  Shield,
  Sliders,
  MessageCircle,
  BarChart3,
  Code2,
  Rocket,
  Sparkles,
  GitBranch,
  BookOpen,
  Lock,
  EyeOff,
  Target,
  CheckCircle2,
  Zap,
  ArrowRight,
  Globe,
  Smartphone,
  Phone,
  Mail,
  FileKey,
  ScrollText,
  Video,
  AlertTriangle,
  Eye,
  Hand,
  Network,
  Workflow,
  type LucideIcon,
} from "lucide-react"

// Slide wrapper — fills viewport, no cutting; content scrolls when needed; no bottom gap
const SlideWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full min-h-0 flex items-stretch justify-center p-1 sm:p-2">
    <div className="w-full max-w-[1400px] h-full min-h-0 bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden relative flex flex-col flex-1">
      {children}
    </div>
  </div>
)

// Subtle slide footer — anchors content, removes visual “dead” space at bottom
const SlideFooter = () => (
  <div className="flex-shrink-0 h-2 bg-gradient-to-r from-[#5A3BFE]/20 via-[#F8D57E]/20 to-[#0668E1]/20 rounded-b-xl" aria-hidden />
)

// Section header — nexus/meta style (icon in colored box, title, subtitle)
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

// Capability card — refined with accent bar, shadow, optional highlight
const CapabilityCard = ({
  icon: Icon,
  title,
  description,
  badge,
  delay = 0,
  variant = "default",
  accent,
  className = "",
}: {
  icon: LucideIcon
  title: string
  description: string
  badge?: string
  delay?: number
  variant?: "default" | "dark" | "yellow"
  accent?: "purple" | "yellow" | "blue"
  className?: string
}) => {
  const isDark = variant === "dark"
  const isYellow = variant === "yellow"
  const accentBar = accent === "yellow" ? "border-l-[#F8D57E]" : accent === "blue" ? "border-l-[#0668E1]" : "border-l-[#5A3BFE]"
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`relative rounded-xl p-5 border-l-4 ${accentBar} overflow-hidden ${className} ${
        isDark
          ? "bg-[#281C46] text-white shadow-lg shadow-[#281C46]/20"
          : isYellow
            ? "bg-gradient-to-br from-[#F8D57E]/15 to-white border border-[#F8D57E]/30 shadow-[0_2px_12px_rgba(248,213,126,0.12)]"
            : "bg-white border border-[#5A3BFE]/15 shadow-[0_2px_12px_rgba(90,59,254,0.08)]"
      }`}
    >
      <div
        className={
          isDark
            ? "w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-3"
            : isYellow
              ? "w-11 h-11 rounded-xl bg-[#F8D57E]/30 flex items-center justify-center mb-3"
              : "w-11 h-11 rounded-xl bg-gradient-to-br from-[#5A3BFE] to-[#0668E1] flex items-center justify-center mb-3 shadow-sm"
        }
      >
        <Icon className={`w-5 h-5 ${isDark ? "text-[#F8D57E]" : isYellow ? "text-[#281C46]" : "text-white"}`} />
      </div>
      <h4 className={`font-semibold text-sm mb-1.5 leading-tight ${isDark ? "text-white" : "text-[#281C46]"}`}>
        {title}
      </h4>
      <p className={`text-xs leading-relaxed ${isDark ? "text-white/75" : "text-[#281C46]/80"}`}>{description}</p>
      {badge && (
        <div
          className={`mt-3 inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-semibold ${
            isDark ? "bg-[#F8D57E]/20 text-[#F8D57E]" : isYellow ? "bg-[#281C46]/10 text-[#281C46]" : "bg-[#5A3BFE]/10 text-[#5A3BFE]"
          }`}
        >
          {badge}
        </div>
      )}
    </motion.div>
  )
}

// Roadmap item — main/presentation list style with CheckCircle2
const RoadmapItem = ({
  title,
  description,
  delay = 0,
}: {
  title: string
  description: string
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.35, delay }}
    className="flex gap-3 items-start"
  >
    <CheckCircle2 className="w-5 h-5 text-[#5A3BFE] flex-shrink-0 mt-0.5" />
    <div>
      <h4 className="font-semibold text-sm text-[#281C46]">{title}</h4>
      <p className="text-xs text-[#281C46]/80 mt-0.5">{description}</p>
    </div>
  </motion.div>
)

// Infographic: stat strip
const StatBox = ({ value, label, sub, delay = 0, accent = "purple" }: { value: string; label: string; sub?: string; delay?: number; accent?: "purple" | "yellow" | "dark" }) => {
  const bg = accent === "yellow" ? "bg-[#F8D57E]" : accent === "dark" ? "bg-[#281C46]" : "bg-[#5A3BFE]/10"
  const text = accent === "dark" ? "text-white" : "text-[#281C46]"
  const valueColor = accent === "yellow" ? "text-[#281C46]" : accent === "dark" ? "text-[#F8D57E]" : "text-[#5A3BFE]"
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35, delay }} className={`${bg} rounded-xl px-4 py-3 text-center border border-[#5A3BFE]/20`}>
      <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
      <div className={`text-xs font-medium ${text}`}>{label}</div>
      {sub && <div className={`text-[10px] ${text} opacity-80 mt-0.5`}>{sub}</div>}
    </motion.div>
  )
}

// Infographic: small capability box
const InfoBox = ({ icon: Icon, title, desc, delay = 0, dark = false }: { icon: LucideIcon; title: string; desc: string; delay?: number; dark?: boolean }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay }} className={dark ? "bg-white/10 rounded-lg p-3" : "bg-white rounded-lg p-3 border border-[#5A3BFE]/20"}>
    <div className="flex items-center gap-2 mb-1">
      <Icon className={`w-4 h-4 ${dark ? "text-[#F8D57E]" : "text-[#5A3BFE]"}`} />
      <span className={`font-semibold text-xs ${dark ? "text-white" : "text-[#281C46]"}`}>{title}</span>
    </div>
    <p className={`text-[10px] ${dark ? "text-white/70" : "text-[#281C46]/70"}`}>{desc}</p>
  </motion.div>
)

// ——— Formal design system (Yellow.ai product deck) ———
// Section label: left accent bar + optional icon + small caps for clear hierarchy
const SectionLabel = ({
  label,
  accent = "purple",
  onDark = false,
  icon: Icon,
}: {
  label: string
  accent?: "purple" | "yellow" | "dark"
  onDark?: boolean
  icon?: LucideIcon
}) => {
  const bar = accent === "yellow" ? "bg-[#F8D57E]" : accent === "dark" ? "bg-[#281C46]" : "bg-[#5A3BFE]"
  const textClass = onDark ? "text-white/80" : "text-[#281C46]/70"
  const iconClass = onDark ? "text-[#F8D57E]" : accent === "yellow" ? "text-[#281C46]" : "text-[#5A3BFE]"
  return (
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-1 h-4 rounded-full flex-shrink-0 ${onDark ? "bg-[#F8D57E]" : bar}`} />
      {Icon && <Icon className={`w-4 h-4 flex-shrink-0 ${iconClass}`} />}
      <span className={`text-[10px] font-bold uppercase tracking-widest ${textClass}`}>{label}</span>
    </div>
  )
}

// Column layout for slides — clear 2 or 3 column structure
const SlideColumns = ({
  children,
  cols = 2,
  gap = "gap-4",
  className = "",
}: {
  children: React.ReactNode
  cols?: 2 | 3
  gap?: string
  className?: string
}) => (
  <div className={`grid ${cols === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2"} ${gap} ${className}`}>
    {children}
  </div>
)

// Block/section wrapper with icon header (for every block or section)
const BlockWithIcon = ({
  icon: Icon,
  label,
  children,
  accent = "purple",
  onDark = false,
  delay = 0,
  className = "",
}: {
  icon: LucideIcon
  label: string
  children: React.ReactNode
  accent?: "purple" | "yellow" | "dark"
  onDark?: boolean
  delay?: number
  className?: string
}) => {
  const iconBg = accent === "yellow" ? "bg-[#F8D57E]/25" : onDark ? "bg-white/10" : "bg-[#5A3BFE]/10"
  const iconColor = accent === "yellow" ? "text-[#281C46]" : onDark ? "text-[#F8D57E]" : "text-[#5A3BFE]"
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className={`rounded-xl border border-[#281C46]/10 bg-white overflow-hidden ${className}`}
    >
      <div className={`flex items-center gap-2.5 px-4 py-2.5 border-b border-[#281C46]/10 ${onDark ? "bg-[#281C46]/5 border-white/10" : "bg-[#281C46]/[0.03]"}`}>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}`}>
          <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-widest ${onDark ? "text-[#F8D57E]" : "text-[#281C46]/70"}`}>
          {label}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  )
}
// Flow box: single step in a process (for flow diagrams) — with optional icon
const FlowBox = ({
  step,
  title,
  desc,
  delay = 0,
  variant = "default",
  icon: Icon,
}: {
  step?: number
  title: string
  desc: string
  delay?: number
  variant?: "default" | "accent" | "dark"
  icon?: LucideIcon
}) => {
  const styles = variant === "dark" ? "bg-[#281C46] text-white border-[#281C46]" : variant === "accent" ? "bg-[#5A3BFE] text-white border-[#5A3BFE]" : "bg-white text-[#281C46] border-[#5A3BFE]/25 shadow-sm"
  const descColor = variant === "default" ? "text-[#281C46]/75" : "text-white/85"
  const iconColor = variant === "default" ? "text-[#5A3BFE]" : "text-[#F8D57E]"
  const iconBg = variant === "default" ? "bg-[#5A3BFE]/10" : "bg-white/15"
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay }} className={`rounded-xl border-2 p-3 flex-1 min-w-0 ${styles}`}>
      <div className="flex items-center gap-2 mb-1.5">
        {Icon && (
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}`}>
            <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
          </div>
        )}
        {step != null && <div className={`text-[9px] font-bold uppercase tracking-wide ${variant === "default" ? "text-[#5A3BFE]" : "text-[#F8D57E]"}`}>Step {step}</div>}
      </div>
      <div className="font-semibold text-xs">{title}</div>
      <p className={`text-[9px] mt-0.5 leading-snug ${descColor}`}>{desc}</p>
    </motion.div>
  )
}
// Connector arrow between flow boxes
const FlowArrow = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center justify-center px-1 flex-shrink-0">
    <ArrowRight className="w-5 h-5 text-[#5A3BFE]/50" />
    {label && <span className="text-[8px] text-[#281C46]/50 mt-0.5">{label}</span>}
  </div>
)
// Horizontal divider with optional label and icon
const Divider = ({ label, icon: Icon }: { label?: string; icon?: LucideIcon }) => (
  <div className="flex items-center gap-3 my-3">
    <div className="flex-1 h-px bg-[#281C46]/10" />
    {(label || Icon) && (
      <span className="flex items-center gap-1.5 text-[9px] font-semibold text-[#281C46]/50 uppercase tracking-wider">
        {Icon && <Icon className="w-3.5 h-3.5 text-[#5A3BFE]/60" />}
        {label}
      </span>
    )}
    <div className="flex-1 h-px bg-[#281C46]/10" />
  </div>
)
// Takeaway / key message strip (bottom of slide or section)
const TakeawayStrip = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay }} className="bg-gradient-to-r from-[#5A3BFE]/8 via-[#F8D57E]/10 to-[#5A3BFE]/8 rounded-xl px-4 py-2.5 border border-[#5A3BFE]/15 flex items-center gap-3">
    <div className="w-8 h-8 rounded-lg bg-[#5A3BFE]/20 flex items-center justify-center flex-shrink-0">
      <Target className="w-4 h-4 text-[#5A3BFE]" />
    </div>
    <div className="text-[11px] text-[#281C46]/90 font-medium leading-snug">{children}</div>
  </motion.div>
)

// ——— Roadmap slide design system ———
// Bordered concept box with section label, optional icon, and accent (for roadmap slides)
const RoadmapConceptBox = ({
  label,
  children,
  delay = 0,
  variant = "default",
  className = "",
  icon: Icon,
}: {
  label: string
  children: React.ReactNode
  delay?: number
  variant?: "default" | "dark" | "highlight"
  className?: string
  icon?: LucideIcon
}) => {
  const isDark = variant === "dark"
  const isHighlight = variant === "highlight"
  const borderAccent = isHighlight ? "border-l-4 border-l-[#F8D57E]" : isDark ? "border-[#281C46]" : "border-[#5A3BFE]/25"
  const bg = isDark ? "bg-[#281C46] text-white" : isHighlight ? "bg-gradient-to-br from-[#F8D57E]/20 to-white border-[#F8D57E]/40" : "bg-white"
  const iconColor = isDark ? "text-[#F8D57E]" : "text-[#5A3BFE]"
  const iconBg = isDark ? "bg-white/10" : "bg-[#5A3BFE]/10"
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className={`rounded-xl border-2 ${borderAccent} ${bg} overflow-hidden ${className}`}
    >
      <div className={`flex items-center gap-2.5 px-4 py-2 border-b ${isDark ? "border-white/15 bg-white/5" : "border-[#281C46]/10 bg-[#281C46]/[0.03]"}`}>
        {Icon && (
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}`}>
            <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
          </div>
        )}
        <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? "text-[#F8D57E]" : "text-[#5A3BFE]"}`}>
          {label}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  )
}
// Inline highlight for important terms in roadmap copy
const HighlightKey = ({ children, color = "purple" }: { children: React.ReactNode; color?: "purple" | "yellow" }) => (
  <span className={color === "yellow" ? "font-semibold text-[#281C46] bg-[#F8D57E]/40 px-1 rounded" : "font-semibold text-[#5A3BFE]"}>
    {children}
  </span>
)
// Key topic callout pill for roadmap slides
const KeyTopicPill = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.25, delay }}
    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#5A3BFE]/15 text-[#5A3BFE] text-[10px] font-bold uppercase tracking-wide"
  >
    <Zap className="w-3 h-3" />
    {children}
  </motion.span>
)

// ——— Roadmap detail slide layout ———
// Section colors for Build / Test / Optimize / Extensibility
const ROADMAP_SECTION_STYLES = {
  Build: { bg: "bg-[#5A3BFE]", bar: "bg-[#5A3BFE]", badge: "bg-[#5A3BFE]/15 text-[#5A3BFE]", border: "border-[#5A3BFE]/30" },
  Test: { bg: "bg-[#281C46]", bar: "bg-[#281C46]", badge: "bg-[#281C46]/15 text-[#281C46]", border: "border-[#281C46]/30" },
  Optimize: { bg: "bg-[#0668E1]", bar: "bg-[#0668E1]", badge: "bg-[#0668E1]/15 text-[#0668E1]", border: "border-[#0668E1]/30" },
  Extensibility: { bg: "bg-[#5A3BFE]", bar: "bg-[#5A3BFE]", badge: "bg-[#5A3BFE]/15 text-[#5A3BFE]", border: "border-[#5A3BFE]/30" },
} as const

// Wrapper for roadmap detail slides: left section bar + header + content area
const RoadmapDetailLayout = ({
  section,
  title,
  subtitle,
  icon: Icon,
  sectionColor,
  children,
  keyOutcomes,
}: {
  section: keyof typeof ROADMAP_SECTION_STYLES
  title: string
  subtitle: string
  icon: React.ElementType
  sectionColor: string
  children: React.ReactNode
  keyOutcomes?: string[]
}) => {
  const styles = ROADMAP_SECTION_STYLES[section]
  return (
    <div className="flex flex-1 min-h-0 overflow-hidden flex-col">
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left section strip */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 20 }}
          transition={{ duration: 0.35 }}
          className={`flex-shrink-0 w-5 ${styles.bar} rounded-r-lg`}
          title={section}
        />
        <div className="flex-1 min-h-0 overflow-auto p-4 flex flex-col">
          <SectionHeader icon={Icon} title={title} subtitle={subtitle} color={sectionColor} />
          <div className={`flex items-center gap-2 mb-3 pb-2 border-b-2 ${styles.border}`}>
            <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${styles.badge}`}>
              {section}
            </span>
          </div>
          <div className="flex-1 min-h-0 flex flex-col gap-4">
            {children}
            {keyOutcomes && keyOutcomes.length > 0 && (
              <RoadmapKeyOutcomes items={keyOutcomes} delay={0.2} />
            )}
          </div>
        </div>
      </div>
      <SlideFooter />
    </div>
  )
}

// Key outcomes card for roadmap slides — bullet list with CheckCircle2
const RoadmapKeyOutcomes = ({ items, title = "Key outcomes", delay = 0 }: { items: string[]; title?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay }}
    className="rounded-xl border-2 border-[#F8D57E]/40 bg-gradient-to-br from-[#F8D57E]/15 to-white p-4"
  >
    <div className="flex items-center gap-2 mb-2">
      <CheckCircle2 className="w-4 h-4 text-[#5A3BFE]" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/80">{title}</span>
    </div>
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-[#281C46]/90">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE] flex-shrink-0 mt-0.5" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

// Subsection title for roadmap slides (small caps, accent bar)
const RoadmapSubsectionTitle = ({ label, icon: Icon }: { label: string; icon?: LucideIcon }) => (
  <div className="flex items-center gap-2 mt-2 mb-1">
    {Icon && <Icon className="w-4 h-4 text-[#5A3BFE]" />}
    <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/60">{label}</span>
  </div>
)

// Card with subtle shadow, border, and optional icon/title header (elevated content block)
const ContentCard = ({
  children,
  className = "",
  delay = 0,
  icon: Icon,
  title,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  icon?: LucideIcon
  title?: string
}) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay }} className={`rounded-xl border border-[#281C46]/10 bg-white shadow-[0_2px_8px_rgba(40,28,70,0.06)] overflow-hidden ${className}`}>
    {(Icon || title) && (
      <div className="flex items-center gap-2.5 px-4 py-2.5 border-b border-[#281C46]/10 bg-[#281C46]/[0.03]">
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-[#5A3BFE]/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 text-[#5A3BFE]" />
          </div>
        )}
        {title && <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/70">{title}</span>}
      </div>
    )}
    <div className={Icon || title ? "p-4" : ""}>{children}</div>
  </motion.div>
)
// ——— Slides (notes sequence, theme & content from other decks) ———

const TitleSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
      {/* Background blurs — presentation/nexus style */}
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
        <SectionLabel label="Yellow.ai" accent="purple" />
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#281C46] mb-3 mt-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Product Roadmap
        </motion.h1>
        <motion.p
          className="text-lg text-[#281C46]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Yellow.ai — <span className="font-semibold text-[#5A3BFE]">Agentic AI platform</span> for
          service automation. Agents that <span className="font-semibold">"Think, Act, and Resolve."</span>
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

// ——— Outline (new sequence): snapshot + detail ———
// Outline slide 1: Snapshot of current capability highlights (1–2 lines each)
const OutlineSnapshotSlide = () => {
  const items = [
    { icon: Layers, title: "Multi-LLM architecture", line: "Single governed layer over 15+ LLMs; route by cost, latency, safety, language. No vendor lock-in." },
    { icon: Sparkles, title: "Agentic RAG", line: "Retrieve → Reason → Act with goal-based planning, tool use, citations. Sub-1% hallucination in production." },
    { icon: Shield, title: "PII-free LLM integration", line: "Auto-redaction and governance as code; only de-identified data reaches LLMs. SOC2, HIPAA-ready." },
    { icon: Globe, title: "Omni-channel", line: "Chat, in-app, WhatsApp, text, email, voice — one agent definition across 35+ channels with User360." },
    { icon: MessageCircle, title: "Inbound + outbound", line: "Same platform for inbound conversations and outbound campaigns; unified orchestration and reporting." },
    { icon: BarChart3, title: "Nexus — conversational reporting", line: "Universal Agentic Interface: Discover → Build → Test → Optimize; Eyes, Hands, Authority. Up to 60% TCO reduction." },
  ]
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <div className="relative flex-1 min-h-0 overflow-auto p-4 flex flex-col">
          <SectionHeader icon={Target} title="Outline" subtitle="Current capability highlights" color="bg-[#5A3BFE]" />
          <SectionLabel label="Snapshot (1–2 lines each)" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            {items.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.04 * i }}
                  className="flex gap-3 rounded-xl p-3 border border-[#5A3BFE]/15 bg-white shadow-[0_2px_8px_rgba(90,59,254,0.06)]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#5A3BFE]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#5A3BFE]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-xs text-[#281C46] mb-0.5">{item.title}</h4>
                    <p className="text-[10px] text-[#281C46]/80 leading-snug">{item.line}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}

// Outline slide 2: Same six capabilities with 4–5 lines each
const OutlineDetailSlide = () => {
  const items = [
    { icon: Layers, title: "Multi-LLM architecture", desc: "A single, governed layer over 15+ LLMs lets you choose the right model per use case — by cost, latency, safety, and language — without locking into one vendor. Combine proprietary (YellowG, Komodo) and open/commercial models (GPT-4, Claude, Gemini) across Azure, AWS, or private clouds. Routing, fallbacks, and A/B testing are built in; orchestration is centralized so you can switch or add models without rewriting application logic." },
    { icon: Sparkles, title: "Agentic RAG", desc: "Move from fixed retrieval pipelines to goal-based agents: retrieve relevant knowledge (semantic + multi-modal), reason over it with multi-step planning, and act via tools and APIs — all grounded in your content with citations. Sub-1% hallucination in production. Safety layer simulates before go-live; governance as code keeps responses compliant and accurate." },
    { icon: Shield, title: "PII-free LLM integration", desc: "Only de-identified or masked data reaches LLMs. Configure PII categories and sensitivity; redaction runs in real time on user input, context, and responses. Platform-wide masking in logs and audit trails; conversational flow protection end-to-end. SOC2 and HIPAA-ready so you get full intelligence with zero PII exposure." },
    { icon: Globe, title: "Omni-channel", desc: "One agent definition deploys to 35+ channels: web chat, in-app, WhatsApp, SMS, email, voice/IVR. Rich UI per channel (carousel, lists, TTS); User360 and interruption-aware orchestration; context and identity preserved across switches. Chat, in-app, WhatsApp, text, email, voice — one build, everywhere." },
    { icon: MessageCircle, title: "Inbound + outbound in the same platform", desc: "Unified platform for both inbound conversations and outbound campaigns. Same agents, same reporting (Nexus), same guardrails whether customers reach you or you reach them. One orchestration layer for proactive and reactive engagement; consistent experience and analytics." },
    { icon: BarChart3, title: "Nexus — conversational reporting", desc: "Industry's first Universal Agentic Interface (UAI): Discover → Build → Test → Optimize. Eyes (analyze conversations, find patterns), Hands (build flows, GenUI, fix nodes), Authority (execute with human-in-the-loop). Text-to-Flow, drop-off/containment analytics; up to 60% TCO reduction. From System of Record to System of Action." },
  ]
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <div className="relative flex-1 min-h-0 overflow-auto p-4 flex flex-col">
          <SectionHeader icon={Target} title="Outline (continued)" subtitle="Current capabilities — 4–5 lines each" color="bg-[#5A3BFE]" />
          <div className="space-y-3 mt-2">
            {items.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                  className="flex gap-3 rounded-xl p-4 border-l-4 border-l-[#5A3BFE] border border-[#281C46]/10 bg-white"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#5A3BFE]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#5A3BFE]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-xs text-[#281C46] mb-1">{item.title}</h4>
                    <p className="text-[10px] text-[#281C46]/85 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </SlideWrapper>
  )
}

// Product architecture — one slide: Build (Discover + Build) → Test → Optimize and enhance
const ProductArchitectureSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col min-h-0 overflow-auto p-4">
        <SectionHeader icon={Rocket} title="Product architecture" subtitle="The story — Build → Test → Optimize" color="bg-[#281C46]" />
        <SectionLabel label="Big themes" />
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="flex items-stretch gap-0 flex-wrap mt-3 mb-4">
          <FlowBox step={1} title="Build" desc="Discover + Build: Nexus for agentic discovery (tickets, conversations → roadmap & prompts); Nexus and prompt builder to build agents; LAMs; Invisible agents." delay={0.06} variant="accent" icon={Workflow} />
          <FlowArrow label="then" />
          <FlowBox step={2} title="Test" desc="AI Trust center; Knowledge base enhancements (KB Quality, Multimedia, Conflict Detection, Native ACL); Automated testing including agentic actions." delay={0.1} icon={Shield} />
          <FlowArrow label="then" />
          <FlowBox step={3} title="Optimize" desc="Reporting enhancements; Nexus conversational reporting; Extensibility (Headless API, MCP); Agent-to-agent orchestration; Super Agent Rules; Agentic RAG as a service." delay={0.14} icon={BarChart3} />
        </motion.div>
        <RoadmapConceptBox label="One pipeline" delay={0.2} variant="highlight">
          <p className="text-sm text-[#281C46] leading-relaxed">
            <HighlightKey>Build</HighlightKey> (Discover + Build) → <HighlightKey>Test</HighlightKey> → <HighlightKey>Optimize</HighlightKey> and enhance. From agentic discovery and prompt building through trust, knowledge, and testing to reporting, extensibility, and orchestration — one coherent product architecture.
          </p>
        </RoadmapConceptBox>
        <TakeawayStrip delay={0.28}>Build → Test → Optimize — the product architecture that powers the autonomic enterprise.</TakeawayStrip>
      </div>
    </div>
  </SlideWrapper>
)

// Harness & Fabric — 1–2 lines each
const HarnessFabricSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4">
        <SectionHeader icon={Code2} title="Harness & Fabric" subtitle="Agentic automation and data platform" color="bg-[#5A3BFE]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          <RoadmapConceptBox label="Harness" icon={Workflow} delay={0.05}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed">
              <HighlightKey>Harness</HighlightKey> — Agentic Automation Platform. Not just conversational: a full-stack agentic platform for building, orchestrating, and running automated workflows and agents across the enterprise.
            </p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Fabric" icon={Layers} delay={0.1}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed">
              <HighlightKey>Fabric</HighlightKey> — Fully customizable data management platform (System of Record) with record-level RBAC. Single source of truth for content and data that powers agents and experiences.
            </p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.15}>Harness: full-stack agentic automation. Fabric: customizable data platform with record-level RBAC.</TakeawayStrip>
      </div>
    </div>
  </SlideWrapper>
)

// Agentic RAG as a service (Extensibility section)
const AgenticRAGAsServiceSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Extensibility"
        title="Agentic RAG as a service"
        subtitle="RAG and reasoning as a platform capability"
        icon={Sparkles}
        sectionColor="bg-[#F8D57E]"
        keyOutcomes={[
          "Retrieve–reason–act as a first-class, reusable capability; build once, consume across many agents.",
          "Same safety layer, KB and ACL semantics — consistent governance and observability.",
          "Sub-1% hallucination targets and citations built in; faster new agent deployment.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it is" delay={0.08} icon={Sparkles}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-2">
              <HighlightKey>Agentic RAG as a service</HighlightKey> exposes retrieve–reason–act as a first-class, reusable capability. Build once, consume across multiple agents and use cases; same semantic retrieval, planning, and tool use with consistent governance and observability.
            </p>
            <p className="text-xs text-[#281C46]/80">Reduces duplication and accelerates new agent deployment; sub-1% hallucination targets and citations built in.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed">
              Enterprises can standardize on one RAG stack — same safety layer, same KB and ACL semantics — across many agents. Part of the Extensibility layer: better reporting and orchestration around a shared RAG service.
            </p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Agentic RAG as a service: one RAG stack, many agents — consistent governance and faster deployment.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Automated testing including agentic actions (Test section)
const AutomatedTestingSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4 flex flex-col">
        <SectionHeader icon={CheckCircle2} title="Automated testing" subtitle="Including agentic actions" color="bg-[#0668E1]" />
        <SectionLabel label="Test" />
        <div className="flex-1 min-h-0 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-5 mt-2 mb-3">
            <RoadmapConceptBox label="What it is" delay={0.1}>
              <p className="text-sm text-[#281C46]/90 leading-relaxed mb-2">
                <HighlightKey>Automated testing</HighlightKey> for AI agents — including agentic actions: simulate conversations, tool calls, and multi-step flows before go-live. Catch regressions, policy violations, and edge cases in a repeatable way.
              </p>
              <p className="text-xs text-[#281C46]/80">Integrates with Nexus and the AI Trust center; governance as code and safety checks as part of the pipeline.</p>
            </RoadmapConceptBox>
            <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.15}>
              <p className="text-sm text-white/90 leading-relaxed">
                Agentic agents use tools and APIs; testing must cover not just intent and answers but <HighlightKey color="yellow">actions</HighlightKey>. Automated testing including agentic actions ensures safe, compliant behavior before customers see it.
              </p>
            </RoadmapConceptBox>
          </div>
        </div>
        <TakeawayStrip delay={0.18}>Automated testing: conversations, tool calls, and agentic actions — repeatable safety before go-live.</TakeawayStrip>
      </div>
    </div>
  </SlideWrapper>
)

// LAMs (Build section) — LLM → LAM
const LAMsSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Build"
        title="LAMs"
        subtitle="Language Action Models — agents that think and act"
        icon={Brain}
        sectionColor="bg-[#5A3BFE]"
        keyOutcomes={[
          "Extend LLMs with first-class action and tool use — plan → act → observe.",
          "Build pipeline supports LAMs; design and deploy agents that reason and execute with governance.",
          "Foundation for super agent and sub-agents that can act, not just answer.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="From LLM to LAM" delay={0.08} icon={Brain}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-2">
              <HighlightKey>LAMs (Language Action Models)</HighlightKey> extend LLMs with first-class action and tool use — not just text in, text out, but plan → act → observe in the world. Core to agentic design: agents that think and act.
            </p>
            <p className="text-xs text-[#281C46]/80">Build pipeline supports LAMs so you can design and deploy agents that reason and execute (APIs, workflows, tools) with proper governance.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed">
              The roadmap from LLM → LAM → AGI-style systems starts with action-aware models. LAMs in the Build stage ensure your super agent and sub-agents are built on a foundation that can act, not just answer.
            </p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>LAMs: Language Action Models — agents that think and act, at the heart of the Build pipeline.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Current capabilities — single well-designed slide (segmented, detailed, highlighted)
const CurrentCapabilitiesSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-[65%] bg-gradient-to-bl from-[#5A3BFE]/[0.04] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-[#F8D57E]/[0.05] rounded-full blur-3xl" />
      </div>
      <div className="relative flex-1 min-h-0 overflow-auto p-4 flex flex-col">
        {/* Header: title + stats in one clean band */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#5A3BFE] rounded-lg p-2.5">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#281C46]">Current capabilities</h2>
              <p className="text-xs text-[#281C46]/60">Platform strengths — one stack, one experience</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2 px-4 rounded-xl bg-[#281C46]/[0.06] border border-[#281C46]/[0.08]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A3BFE]">15+ models</span>
            <span className="text-[#281C46]/30">|</span>
            <span className="text-[10px] font-semibold text-[#281C46]/80">35+ channels</span>
            <span className="text-[#281C46]/30">|</span>
            <span className="text-[10px] font-semibold text-[#281C46]/80">135+ languages</span>
            <span className="text-[#281C46]/30">|</span>
            <span className="text-[10px] font-semibold text-[#281C46] bg-[#F8D57E]/25 text-[#281C46] px-2 py-0.5 rounded-md">&lt;1% hallucinations</span>
          </div>
        </motion.div>

        {/* Segment: Key highlights — stat strip (column block with icon) */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.02 }}
          className="mb-3"
        >
          <SectionLabel label="By the numbers" icon={BarChart3} />
          <div className="grid grid-cols-4 gap-2">
            <StatBox value="15+" label="LLM models" sub="No lock-in" delay={0.02} accent="purple" />
            <StatBox value="35+" label="Channels" sub="One agent" delay={0.03} accent="purple" />
            <StatBox value="135+" label="Languages" sub="Native NER" delay={0.04} accent="purple" />
            <StatBox value="&lt;1%" label="Hallucinations" sub="Agentic RAG" delay={0.05} accent="yellow" />
          </div>
        </motion.div>

        {/* Segment: AI & intelligence — column layout with icons */}
        <SectionLabel label="AI & intelligence" icon={Brain} />
        <SlideColumns cols={3} gap="gap-3" className="mb-3">
          <CapabilityCard
            icon={Layers}
            title="Multi-LLM architecture"
            description="Single governed layer over 15+ LLMs: route by cost, latency, safety, and language. Purpose-built Komodo & YellowG; GPT-4, Claude, Gemini for complex reasoning; fallbacks, A/B testing, and unified observability — no vendor lock-in."
            badge="YellowG, GPT-4o, Claude"
            delay={0.03}
            accent="purple"
          />
          <CapabilityCard
            icon={Sparkles}
            title="Agentic RAG"
            description="Retrieve → Reason → Act: semantic and multi-modal retrieval, goal-based planning, tool use and API calls. Multi-step reasoning, citations, source grounding; safety layer simulates before go-live. Sub-1% hallucination in production."
            badge="<1% Hallucinations"
            delay={0.05}
            variant="yellow"
            accent="yellow"
          />
          <CapabilityCard
            icon={Shield}
            title="PII-free LLM"
            description="Auto-redaction and governance as code: only de-identified or masked data reaches LLMs. Configurable PII categories, platform-wide masking in logs and audit trails, conversational flow protection end-to-end. SOC2, HIPAA-ready."
            badge="Enterprise safe"
            delay={0.07}
            accent="purple"
          />
        </SlideColumns>

        {/* Segment: Channels & engagement — column layout */}
        <SectionLabel label="Channels & engagement" icon={MessageCircle} />
        <SlideColumns cols={3} gap="gap-3" className="mb-3">
          <CapabilityCard
            icon={MessageCircle}
            title="Omni-channel"
            description="One agent definition deploys to 35+ channels: web chat, in-app, WhatsApp, SMS, email, voice/IVR. Rich UI per channel (carousel, lists, TTS); User360 and interruption-aware orchestration; context and identity preserved across switches."
            badge="35+ · 135+ languages"
            delay={0.09}
            accent="blue"
          />
          <CapabilityCard
            icon={BarChart3}
            title="Nexus — reporting"
            description="Universal Agentic Interface (UAI): Discover → Build → Test → Optimize. Eyes (analyze conversations), Hands (build flows, GenUI, fix nodes), Authority (execute with human-in-the-loop). Text-to-Flow, drop-off/containment analytics; up to 60% TCO reduction."
            badge="Agentic Interface"
            delay={0.13}
            accent="blue"
          />
        </SlideColumns>

        {/* Segment: Platform highlights — two-column hero strip with icons */}
        <SectionLabel label="Platform highlights" icon={Rocket} />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-shrink-0"
        >
          <div className="rounded-xl border-l-4 border-[#5A3BFE] bg-[#281C46] p-4 flex items-center gap-4 shadow-lg shadow-[#281C46]/20">
            <div className="w-10 h-10 rounded-lg bg-[#F8D57E]/20 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-5 h-5 text-[#F8D57E]" />
            </div>
            <div className="min-w-0">
              <h3 className="text-[10px] font-bold text-[#F8D57E] uppercase tracking-widest mb-1">One platform</h3>
              <p className="text-xs text-white/90 leading-snug">
                Leading <span className="font-semibold text-[#F8D57E]">Agentic AI platform</span> — agents that{" "}
                <span className="font-semibold text-white">Think, Act, and Resolve.</span> Conversation to execution.
              </p>
              <span className="inline-block mt-1.5 text-[10px] font-semibold text-[#F8D57E]/90">Design · Build · Deploy · Optimize</span>
            </div>
          </div>
          <div className="rounded-xl border-l-4 border-[#F8D57E] bg-[#281C46] p-4 flex items-center gap-4 shadow-lg shadow-[#281C46]/20">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <Code2 className="w-5 h-5 text-[#F8D57E]" />
            </div>
            <div className="min-w-0">
              <h3 className="text-[10px] font-bold text-[#F8D57E] uppercase tracking-widest mb-1">Headless API & streaming</h3>
              <p className="text-xs text-white/90 leading-snug">
                Integrate agents into any UI. REST & streaming APIs, SDKs and low-code — one platform, any front-end.
              </p>
              <span className="inline-block mt-1.5 text-[10px] font-semibold text-[#F8D57E]/90">Any UI · Real-time · Webhooks</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// ——— Dedicated detailed slides (one per note item) ———
const MultiLLMSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4">
        <SectionHeader icon={Layers} title="Multi-LLM architecture" subtitle="Best-in-class AI models orchestrated for optimal performance" color="bg-[#5A3BFE]" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.02 }} className="text-[11px] text-[#281C46]/80 leading-relaxed mb-3 max-w-3xl">
          A single, governed layer over 15+ LLMs lets you choose the right model per use case — by cost, latency, safety, and language — without locking into one vendor. Routing, fallbacks, and A/B testing are built in so your agents stay reliable and scalable.
        </motion.p>
        <p className="text-[10px] text-[#281C46]/70 mb-4">Combine proprietary (YellowG, Komodo) and open/commercial models (GPT-4, Claude, Gemini, Llama) across Azure, AWS, or private clouds. Orchestration is centralized: switch or add models without rewriting application logic; per-intent selection for summarization, code, support, and analytics.</p>
        <Divider label="Overview" icon={Layers} />
        <p className="text-[10px] text-[#281C46]/70 mb-3">One API surface for your app; we handle routing, retries, format normalization, and observability across all providers.</p>
        {/* Section: Overview — stats + model landscape in columns */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <StatBox value="15+" label="Models" sub="no vendor lock-in" delay={0.08} />
          <StatBox value="YellowG" label="Proprietary" sub="orchestration" delay={0.1} accent="yellow" />
          <StatBox value="Azure / AWS" label="Your cloud" sub="Bedrock, OpenAI" delay={0.12} />
          <StatBox value="Route" label="By task" sub="cost, latency, safety" delay={0.14} accent="dark" />
        </div>
        <SlideColumns cols={2} gap="gap-5">
          <ContentCard delay={0.1} className="p-4" icon={Layers} title="Model landscape">
            <p className="text-[10px] text-[#281C46]/85 leading-relaxed mb-2">
              Purpose-built <span className="font-semibold text-[#5A3BFE]">Komodo & YellowG</span> for enterprise domains (e.g. Komodo: 7B for Bahasa, regional and vertical tuning). Use GPT-4, Claude, and Gemini for complex reasoning, long-form content, and code; smaller or custom models for high-volume, low-latency tasks (e.g. intent classification, NER).
            </p>
            <p className="text-[9px] text-[#281C46]/70 mb-2">Models are selected per intent: summarization, code, support, analytics — so you optimize both quality and spend. No lock-in: add or swap providers via configuration.</p>
            <div className="grid grid-cols-3 gap-1.5 mb-2">
              {["GPT-4.5", "Claude 3.7", "Gemini 3", "Llama 4", "Custom", "YellowG"].map((m, i) => (
                <div key={m} className="bg-[#5A3BFE]/5 rounded-lg py-1.5 text-center border border-[#5A3BFE]/15">
                  <span className="font-semibold text-[9px] text-[#281C46]">{m}</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-[#281C46]/60">Unified logging and observability across all model calls for cost and performance analysis.</p>
          </ContentCard>
          <ContentCard delay={0.14} className="p-4" icon={Code2} title="Integration">
            <p className="text-[10px] text-[#281C46]/85 leading-relaxed mb-2">
              A governed wrapper — not a passive pass-through. You keep control over which models are used, where data goes, and how responses are validated. Integrate from:
            </p>
            <ul className="text-[10px] text-[#281C46]/80 space-y-1 mb-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> Azure OpenAI (and Azure-hosted open models)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> AWS Bedrock (Claude, Llama, Titan, etc.)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> Google Vertex AI / Gemini</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> Private clouds / on-prem / BYOK</li>
            </ul>
            <p className="text-[9px] text-[#281C46]/70">Single API surface for your app; we handle routing, retries, rate-limit backoff, and format normalization across providers.</p>
          </ContentCard>
        </SlideColumns>
        <Divider label="Routing & resilience" />
        <SlideColumns cols={2} gap="gap-5">
          <ContentCard delay={0.16} className="p-4 bg-[#5A3BFE]/[0.04] border-[#5A3BFE]/20" icon={GitBranch} title="Routing criteria">
            <p className="text-[10px] text-[#281C46]/85 leading-relaxed mb-2">Each request is routed based on configurable policies:</p>
            <ul className="text-[10px] text-[#281C46]/80 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> <span className="font-medium">Cost</span> — use cheaper models for simple tasks (e.g. intent, NER), premium for complex reasoning and long-form</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> <span className="font-medium">Latency</span> — favor fast models for real-time chat and voice; larger models for async analysis and reports</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> <span className="font-medium">Safety & compliance</span> — route sensitive workloads to approved models and regions (e.g. in-region, air-gapped)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> <span className="font-medium">Language</span> — route to language-optimized models (e.g. Komodo for Bahasa)</li>
            </ul>
          </ContentCard>
          <ContentCard delay={0.18} className="p-4" icon={Layers} title="Fallbacks & A/B testing">
            <p className="text-[10px] text-[#281C46]/85 leading-relaxed mb-2">Built-in resilience and experimentation:</p>
            <ul className="text-[10px] text-[#281C46]/80 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> Automatic fallback to backup models on errors, timeouts, or rate limits</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> A/B test model versions or prompts without code changes; compare containment and satisfaction</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> Unified logging and observability across all model calls for cost and latency analysis</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5A3BFE]" /> Configurable retry and backoff so transient failures don’t impact UX</li>
            </ul>
          </ContentCard>
        </SlideColumns>
        <TakeawayStrip delay={0.2}>Intelligent routing selects the optimal model for each task — no vendor lock-in, maximum flexibility and control.</TakeawayStrip>
      </div>
    </div>
  </SlideWrapper>
)

const AgenticRAGSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4">
        <SectionHeader icon={Sparkles} title="Agentic RAG" subtitle="Reasoning-first retrieval and multi-step reasoning" color="bg-[#F8D57E]" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.02 }} className="text-[10px] text-[#281C46]/80 leading-relaxed mb-3 max-w-3xl">
          Move from fixed retrieval pipelines to goal-based agents: retrieve relevant knowledge (semantic + multi-modal), reason over it with multi-step planning, and act via tools and APIs — all grounded in your content with citations. Sub-1% hallucination in production.
        </motion.p>
        {/* Section: Agentic flow */}
        <SectionLabel label="Agentic flow" icon={Workflow} />
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }} className="flex items-stretch gap-0 mb-4">
          <FlowBox step={1} title="Retrieve" desc="Fetch relevant chunks from your KB via semantic + multi-modal search; support for text, tables, and structured docs. Re-ranking and hybrid retrieval for precision." delay={0.06} icon={BookOpen} />
          <FlowArrow label="then" />
          <FlowBox step={2} title="Reason" desc="Plan steps, disambiguate intent, choose tools; goal-based execution (not fixed path). Multi-step reasoning with chain-of-thought; stay within guardrails." delay={0.1} variant="accent" icon={Brain} />
          <FlowArrow label="then" />
          <FlowBox step={3} title="Act" desc="Query APIs, update records, trigger workflows; responses grounded in retrieved content with source citations. Simulate in safety layer before customers see." delay={0.14} icon={Zap} />
        </motion.div>
        <Divider label="Paradigm shift" icon={Target} />
        {/* Section: Flow-based vs Goal-based — columns */}
        <SlideColumns cols={2} gap="gap-4" className="mb-4">
          <ContentCard delay={0.08} className="p-4" icon={ArrowRight} title="Flow-based (legacy)">
            <div className="flex items-center gap-1 mb-2">
              <div className="w-8 h-8 bg-[#281C46]/10 rounded flex items-center justify-center text-[10px] font-bold text-[#281C46]/60">A</div>
              <ArrowRight className="w-4 h-4 text-[#281C46]/30" />
              <div className="w-8 h-8 bg-[#281C46]/10 rounded flex items-center justify-center text-[10px] font-bold text-[#281C46]/60">B</div>
              <ArrowRight className="w-4 h-4 text-[#281C46]/30" />
              <div className="w-8 h-8 bg-[#281C46]/10 rounded flex items-center justify-center text-[10px] font-bold text-[#281C46]/60">C</div>
            </div>
            <p className="text-[10px] text-[#281C46]/70 mb-1">Rigid decision trees; fixed sequence. One retrieval, one answer — no planning or tool use.</p>
            <p className="text-[9px] text-[#281C46]/60">Brittle when user intent is ambiguous or requires multiple steps; higher risk of hallucination when context is thin.</p>
          </ContentCard>
          <ContentCard delay={0.1} className="p-4 border-2 border-[#5A3BFE]/30 bg-[#5A3BFE]/5" icon={Target} title="Goal-based (Agentic)">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-[#5A3BFE] rounded-full flex items-center justify-center"><Target className="w-4 h-4 text-white" /></div>
              <div className="flex-1 h-1 rounded-full bg-[#5A3BFE]/20" />
              <Sparkles className="w-4 h-4 text-[#F8D57E]" />
              <div className="flex-1 h-1 rounded-full bg-[#5A3BFE]/20" />
              <div className="w-8 h-8 bg-[#F8D57E] rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-[#281C46]" /></div>
            </div>
            <p className="text-[10px] text-[#281C46] font-medium mb-1">Dynamic, adaptive plans to outcome.</p>
            <p className="text-[9px] text-[#281C46]/80">Agent sets a goal, retrieves as needed, reasons over evidence, calls tools (APIs, DB, workflows), and responds with citations. First-class citizen of your technical stack.</p>
          </ContentCard>
        </SlideColumns>
        <Divider label="Capabilities" icon={Sparkles} />
        <ContentCard delay={0.12} className="p-4 mb-4" icon={Brain} title="Capabilities">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
            <InfoBox icon={Brain} title="Visual Intelligence" desc="Charts, tables, dashboards — understand the why behind the numbers and explain in natural language" delay={0.14} />
            <InfoBox icon={Workflow} title="Pattern Recognition" desc="Unstructured logs and conversations → actionable insights and recommendations" delay={0.16} />
            <InfoBox icon={Target} title="Goal-based execution" desc="Autonomous planning, tool selection, multi-step execution with state" delay={0.18} />
            <InfoBox icon={Shield} title="Safety layer" desc="Simulate and validate responses before customers see; governance as code" delay={0.2} />
          </div>
          <p className="text-[9px] text-[#281C46]/70">Semantic chunking, re-ranking, and citation injection keep answers grounded; conflict and quality checks on KB content.</p>
        </ContentCard>
        <TakeawayStrip delay={0.22}>Agentic RAG enables autonomous planning, reasoning & execution — not just retrieval. First-class citizen of your technical stack.</TakeawayStrip>
      </div>
    </div>
  </SlideWrapper>
)

const PIIFreeLLMSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4">
        <SectionHeader icon={Shield} title="PII-free LLM integration" subtitle="Governance, privacy, and compliance" color="bg-[#281C46]" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.02 }} className="text-[10px] text-[#281C46]/80 leading-relaxed mb-3 max-w-3xl">
          Only de-identified or masked data reaches LLMs. Configure PII categories and sensitivity; redaction runs in real time on user input, context, and responses. Platform-wide masking in logs and audit trails; SOC2 and HIPAA-ready.
        </motion.p>
        {/* Section: Data flow */}
        <SectionLabel label="Data flow" icon={Workflow} />
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }} className="flex items-stretch gap-0 mb-5">
          <FlowBox title="Raw input" desc="User message, context, metadata; may contain PII/PCI (names, SSN, payment, health)" delay={0.06} icon={MessageCircle} />
          <FlowArrow label="mask" />
          <FlowBox title="Redaction layer" desc="Auto-detect and redact by category; governance as code; configurable per channel and use case" delay={0.1} variant="accent" icon={Lock} />
          <FlowArrow label="only safe" />
          <FlowBox title="To LLM" desc="De-identified or masked payload only; no PII in prompts or training data exposure" delay={0.14} icon={Shield} />
        </motion.div>
        <SectionLabel label="Key capabilities" icon={Shield} />
        {/* Three pointers with icons and highlighted sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <ContentCard delay={0.08} className="p-4 border-l-4 border-l-[#5A3BFE]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#5A3BFE]/15 flex items-center justify-center flex-shrink-0">
                <Sliders className="w-5 h-5 text-[#5A3BFE]" />
              </div>
              <h3 className="font-bold text-sm text-[#281C46]">Configure PII categories and levels</h3>
            </div>
            <p className="text-[10px] text-[#281C46]/80 leading-relaxed mb-2">
              <HighlightKey>Granular control</HighlightKey> over PII detection and redaction — define categories (e.g. name, email, SSN, payment, health) and sensitivity levels so only the right data is masked or sent to LLMs. Per-channel and per-agent overrides supported.
            </p>
            <p className="text-[9px] text-[#281C46]/70">Backward compatible; existing flows continue to work while you roll out stricter policies.</p>
          </ContentCard>
          <ContentCard delay={0.11} className="p-4 border-l-4 border-l-[#281C46] bg-[#281C46]/[0.03]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#281C46]/15 flex items-center justify-center flex-shrink-0">
                <ScrollText className="w-5 h-5 text-[#281C46]" />
              </div>
              <h3 className="font-bold text-sm text-[#281C46]">Platform-wide PII masking</h3>
            </div>
            <p className="text-[10px] text-[#281C46]/80 leading-relaxed mb-2">
              <HighlightKey>System logs, debug logs, and audit trails</HighlightKey> apply the same PII masking policies configured for conversations, <HighlightKey color="yellow">preventing PII leakage</HighlightKey> through operational monitoring, support, and compliance audits.
            </p>
            <p className="text-[9px] text-[#281C46]/70">One policy definition; consistent enforcement across product and platform surfaces.</p>
          </ContentCard>
          <ContentCard delay={0.14} className="p-4 border-l-4 border-l-[#F8D57E] bg-[#F8D57E]/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#F8D57E]/30 flex items-center justify-center flex-shrink-0">
                <Workflow className="w-5 h-5 text-[#281C46]" />
              </div>
              <h3 className="font-bold text-sm text-[#281C46]">Conversational flow protection</h3>
            </div>
            <p className="text-[10px] text-[#281C46]/80 leading-relaxed mb-2">
              PII protection applies <HighlightKey>continuously throughout the conversation</HighlightKey> — from the welcome message through <HighlightKey color="yellow">user input, LLM processing, and response generation</HighlightKey>. No PII in training data or model prompts.
            </p>
            <p className="text-[9px] text-[#281C46]/70">Supports real-time and batch flows; same rules for chat, voice, and async channels.</p>
          </ContentCard>
        </div>
        <TakeawayStrip delay={0.18}>Send only de-identified or masked data to LLMs — full intelligence with zero PII exposure.</TakeawayStrip>
      </div>
    </div>
  </SlideWrapper>
)

const OmniChannelSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4 flex gap-4">
        {/* Left: content */}
        <div className="flex-1 min-w-0">
          <SectionHeader icon={Globe} title="Omni-channel" subtitle="Chat, in-app, WhatsApp, text, email, voice" color="bg-[#5A3BFE]" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.02 }} className="text-[10px] text-[#281C46]/80 leading-relaxed mb-3 max-w-3xl">
            One agent definition deploys to 35+ channels with channel-appropriate UX: web (carousels, rich cards), in-app, WhatsApp (numbered lists, native templates), SMS, email, voice/IVR (TTS, DTMF). Context and identity flow across channels via User360.
          </motion.p>
          {/* Section: One definition → many surfaces */}
          <SectionLabel label="One definition, many surfaces" icon={Globe} />
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }} className="flex items-stretch gap-0 mb-4">
            <FlowBox title="Single agent" desc="One intent model, one flow logic, one KB; build once" delay={0.06} icon={MessageCircle} />
            <FlowArrow label="deploys to" />
            <FlowBox title="Web" desc="Clickable carousel, rich UI, embeddable widget" delay={0.09} icon={Globe} />
            <FlowArrow />
            <FlowBox title="WhatsApp / App" desc="Numbered list, native UX, templates; 135+ languages" delay={0.12} icon={Smartphone} />
            <FlowArrow />
            <FlowBox title="Voice" desc="TTS, IVR, barge-in; same agent logic as digital" delay={0.15} icon={Phone} />
          </motion.div>
          <Divider label="Scale & orchestration" icon={BarChart3} />
          <div className="grid grid-cols-4 gap-3 mb-4">
            <StatBox value="35+" label="Channels" sub="Web, App, IVR, social" delay={0.08} />
            <StatBox value="135+" label="Languages" sub="Native NER" delay={0.1} accent="yellow" />
            <StatBox value="M+" label="Concurrent" sub="sessions" delay={0.12} />
            <StatBox value="3+" label="Channels" sub="per enterprise avg" delay={0.14} accent="dark" />
          </div>
          <SlideColumns cols={2} gap="gap-4" className="mb-4">
            <ContentCard delay={0.12} className="p-4 bg-[#F8D57E]/20 border-[#281C46]/10" icon={Rocket} title="Deployment scale">
              <p className="text-[10px] text-[#281C46]/90 mb-2">Enterprise clients run <span className="font-semibold">3+ channels simultaneously</span> with cross-channel state awareness. Largest deployments: Voice + WhatsApp + App; same agent, same reporting (Nexus), same guardrails.</p>
              <p className="text-[9px] text-[#281C46]/80">No per-channel reimplementation; add a new channel by configuration and channel-specific UI rules.</p>
            </ContentCard>
            <ContentCard delay={0.14} className="p-4 bg-[#281C46] border-[#281C46]" icon={Network} title="Interruption-aware orchestration">
              <p className="text-[10px] text-white/90 mb-1">Multi-modal: interrupt voice with digital (or vice versa) while keeping full context via <span className="font-semibold text-[#F8D57E]">User360 graph</span> — one identity, one conversation history.</p>
              <p className="text-[9px] text-white/70 mb-1">Seamless channel switching; context preserved. Handoff to human agents with full transcript and intent.</p>
              <p className="text-[9px] text-white/60">Reduces repeat questions and escalations when customers move between channels.</p>
            </ContentCard>
          </SlideColumns>
          <TakeawayStrip delay={0.18}>Write once, deploy everywhere — one agent definition across 35+ channels with state continuity and a single identity.</TakeawayStrip>
        </div>
        {/* Right: space for platform screenshot */}
        <div className="w-[42%] flex-shrink-0 min-h-[320px] rounded-xl border-2 border-dashed border-[#5A3BFE]/30 bg-[#5A3BFE]/5 flex items-center justify-center">
          <span className="text-xs text-[#281C46]/50 font-medium">Platform screenshot</span>
        </div>
      </div>
    </div>
  </SlideWrapper>
)

const NexusReportingSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4">
        <SectionHeader icon={BarChart3} title="Nexus — conversational reporting" subtitle="The Universal Agentic Interface for analytics and action" color="bg-[#5A3BFE]" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.02 }} className="text-[10px] text-[#281C46]/80 leading-relaxed mb-3 max-w-3xl">
          Industry's first Universal Agentic Interface (UAI): from System of Record to System of Action. Discover intents and gaps, build and tune agents (Text-to-Flow, GenUI), test safely, deploy, respond, debug, track, and analyze — with Eyes (intelligence), Hands (execution), and Authority (autonomy). Up to 60% TCO reduction.
        </motion.p>
        <SectionLabel label="7-stage agentic lifecycle" icon={Workflow} />
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }} className="flex gap-1 mb-4">
          {[
            { stage: "Discover", desc: "Find intents, gaps, opportunities from logs" },
            { stage: "Build", desc: "Flows, GenUI, no-code" },
            { stage: "Deploy", desc: "Go live" },
            { stage: "Respond", desc: "Live conversations" },
            { stage: "Debug", desc: "Fix issues" },
            { stage: "Track", desc: "Containment, CSAT" },
            { stage: "Analyze", desc: "UAI dashboard, Co-Pilot" },
          ].map((s, i) => (
            <FlowBox key={s.stage} title={s.stage} desc={s.desc} delay={0.06 + i * 0.02} variant={i === 6 ? "accent" : undefined} icon={i === 0 ? Eye : i === 6 ? BarChart3 : Rocket} />
          ))}
        </motion.div>
        <Divider label="Eyes, hands, authority" icon={Eye} />
        <SlideColumns cols={3} gap="gap-3" className="mb-4">
          {[
            { icon: Eye, title: "Eyes", sub: "Intelligence", desc: "Analyzes every conversation; identifies patterns, drop-off, intent mix; human analysts get actionable insights and recommendations from the Co-Pilot.", color: "from-[#5A3BFE] to-[#281C46]", border: "border-[#5A3BFE]/30" },
            { icon: Hand, title: "Hands", sub: "Execution", desc: "Build flows, fix nodes, GenUI, index sitemaps — no code. Text-to-Flow: natural language to flow in minutes; self-healing logic.", color: "from-[#0668E1] to-[#5A3BFE]", border: "border-[#0668E1]/30" },
            { icon: Shield, title: "Authority", sub: "Autonomy", desc: "Executes solutions, not just suggestions. Human-in-the-loop when needed; governance and safety layer before go-live.", color: "from-[#281C46] to-[#5A3BFE]", border: "border-[#281C46]/30" },
          ].map((col, i) => (
            <ContentCard key={col.title} delay={0.1 + i * 0.04} className={`p-3 bg-gradient-to-br ${col.color}/10 to-white border-2 ${col.border}`}>
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${col.color} flex items-center justify-center mb-2`}>
                <col.icon className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-[#281C46] text-sm">{col.title}</div>
              <div className="text-[9px] text-[#5A3BFE] font-medium mb-1">{col.sub}</div>
              <p className="text-[9px] text-[#281C46]/75 leading-snug">{col.desc}</p>
            </ContentCard>
          ))}
        </SlideColumns>
        <Divider label="What Nexus delivers" icon={BarChart3} />
        <SlideColumns cols={2} gap="gap-4" className="mb-4">
          <ContentCard delay={0.14} className="p-4" icon={BarChart3} title="UAI">
            <p className="text-[10px] text-[#281C46]/85 leading-relaxed mb-2">
              Industry's first <span className="font-semibold text-[#5A3BFE]">Universal Agentic Interface (UAI)</span>. Single dashboard: drop-off, containment, intent mix, agent performance, CSAT. Analyze dashboard and Agentic Co-Pilot for recommendations.
            </p>
            <ul className="text-[9px] text-[#281C46]/80 space-y-0.5 mb-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#5A3BFE]" /> One place for conversational analytics and action</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#5A3BFE]" /> Co-Pilot suggests flows, fixes, and optimizations</li>
            </ul>
            <div className="bg-[#F8D57E]/30 rounded-lg p-2">
              <p className="text-[9px] text-[#281C46]/90"><span className="font-semibold">Reduces TCO by up to 60%.</span> First-class citizen of your technical stack.</p>
            </div>
          </ContentCard>
          <ContentCard delay={0.16} className="p-4 bg-[#281C46] border-[#281C46]" icon={Zap} title="System of Action">
            <p className="text-[10px] text-white/90 mb-2 mt-0">Text-to-Flow (natural language → flow in minutes), fix broken nodes, GenUI (UI elements on the fly) — self-healing logic. 7-stage lifecycle translates strategy into coordinated action; human-in-the-loop when needed.</p>
            <div className="grid grid-cols-2 gap-2 mt-2 mb-2">
              <InfoBox icon={Workflow} title="Text-to-Flow" desc="NL to flow in minutes" delay={0.18} />
              <InfoBox icon={Sparkles} title="GenUI" desc="UI elements on the fly" delay={0.2} />
            </div>
            <p className="text-[9px] text-white/70">Authority executes solutions, not just suggestions; governance and safety layer before go-live.</p>
          </ContentCard>
        </SlideColumns>
        <TakeawayStrip delay={0.22}>Nexus: from System of Record to System of Action — intelligence, execution, and autonomy in one UAI.</TakeawayStrip>
      </div>
    </div>
  </SlideWrapper>
)

const HeadlessAPISlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4">
        <SectionHeader icon={Code2} title="Headless API and streaming" subtitle="Integrate agents into any UI" color="bg-[#281C46]" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.02 }} className="text-[10px] text-[#281C46]/80 leading-relaxed mb-3 max-w-3xl">
          Expose agents via REST, GraphQL, MCP; integrate into any UI — custom app, kiosk, embed. Real-time streaming (typing, partials, tool calls), Enqueue API, Create Call API; SDKs, low-code, and generative integration (paste OpenAPI/WSDL → code). One gateway, full programmatic control.
        </motion.p>
        <SectionLabel label="Request flow" icon={Workflow} />
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 }} className="flex items-stretch gap-0 mb-4">
          <FlowBox title="Your app" desc="Custom UI, kiosk, embed, mobile; any front-end" delay={0.06} icon={Smartphone} />
          <FlowArrow label="REST / GraphQL / MCP" />
          <FlowBox title="API Gateway" desc="Streaming, Enqueue, Create Call; auth, rate limits" delay={0.1} variant="accent" icon={Code2} />
          <FlowArrow label="→" />
          <FlowBox title="Agent" desc="Full programmatic control; state, tools, KB" delay={0.14} icon={MessageCircle} />
        </motion.div>
        <Divider label="Supported protocols" icon={Network} />
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.08 }} className="flex flex-wrap gap-2 mb-4">
          {["REST", "SOAP", "GraphQL", "MCP", "OpenAPI", "WSDL", "Swagger", "cURL"].map((p, i) => (
            <motion.span key={p} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.09 + i * 0.02 }} className="px-2.5 py-1 bg-[#5A3BFE]/10 text-[#5A3BFE] rounded-lg text-[10px] font-medium border border-[#5A3BFE]/20">{p}</motion.span>
          ))}
        </motion.div>
        <Divider label="Capabilities" icon={Zap} />
        <SlideColumns cols={2} gap="gap-4" className="mb-4">
          <ContentCard delay={0.12} className="p-4" icon={Code2} title="APIs & streaming">
            <p className="text-[10px] text-[#281C46]/85 leading-relaxed mb-2">
              Real-time streaming: typing indicators, partial responses, tool calls. Enqueue API for async jobs; Create Call API for voice. Webhooks for events. Legacy adapters (SOAP, WSDL) when no modern API exists — one integration surface for all.
            </p>
            <ul className="text-[9px] text-[#281C46]/80 space-y-0.5 mb-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#5A3BFE]" /> Format normalization and error handling across providers</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#5A3BFE]" /> API Gateway → Agent — single entry point for your app</li>
            </ul>
            <div className="p-2.5 rounded-lg bg-[#281C46] border-0">
              <p className="text-[9px] text-white/90">Paste API docs (OpenAPI, WSDL, Swagger, cURL) → auto-generated integration code, data mapping, and error handling.</p>
            </div>
          </ContentCard>
          <ContentCard delay={0.14} className="p-4 bg-[#281C46] border-[#281C46]" icon={Code2} title="Developer experience">
            <p className="text-[10px] text-white/90 mb-2">Low-code/no-code builders, SDKs (web, mobile), and templates. Application Dev Tools for connections and data mapping — no third-party tools required. Generative integration speeds time-to-value.</p>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {[{ icon: Code2, label: "SDKs" }, { icon: Workflow, label: "Low-code" }, { icon: Layers, label: "Templates" }, { icon: Zap, label: "Paste docs → code" }].map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-white/10 rounded-lg px-2 py-1.5">
                  <item.icon className="w-3.5 h-3.5 text-[#F8D57E]" />
                  <span className="text-[9px] font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-white/70">Full observability and traces for debugging; same auth and governance as Studio.</p>
          </ContentCard>
        </SlideColumns>
        <ContentCard delay={0.16} className="p-3 bg-[#F8D57E]/25 border-[#281C46]/10 mb-4" icon={Zap} title="One integration surface">
          <span className="text-[10px] font-semibold text-[#281C46]">Generative integration:</span>
          <span className="text-[10px] text-[#281C46]/85"> Paste API docs (WSDL, Swagger, OpenAPI, cURL) → auto-generated integration code, data mapping, and error handling. Reduces custom connector work and accelerates go-live.</span>
        </ContentCard>
        <TakeawayStrip delay={0.18}>Headless by design — expose agents via REST, GraphQL, MCP; integrate into any UI with streaming and full programmatic control.</TakeawayStrip>
      </div>
    </div>
  </SlideWrapper>
)

// Section divider slide — What's next (roadmap section)
const RoadmapDividerSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-6 right-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[10px] font-medium text-[#281C46]/50 italic"
        >
          This is in current roadmap
        </motion.span>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#5A3BFE] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="flex flex-col items-center gap-6 relative">
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px bg-[#281C46]/15" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/50">Section</span>
          <div className="flex-1 h-px bg-[#281C46]/15" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border-2 border-[#5A3BFE]/20 bg-white/80 backdrop-blur-sm px-8 py-6 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="bg-[#5A3BFE] rounded-xl p-3">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#281C46]">What’s next</h2>
              <p className="text-sm text-[#281C46]/70 mt-0.5">Nexus, trust, and knowledge</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {["Nexus", "MCP & orchestration", "AI Trust", "KB quality"].map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-lg bg-[#5A3BFE]/10 text-[#5A3BFE] text-[10px] font-semibold">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// Roadmap section divider — Build | Test | Optimise | Extensibility
const RoadmapSectionDividerSlide = ({
  title,
  subtitle,
  icon: Icon,
  color,
}: {
  title: string
  subtitle: string
  icon: React.ElementType
  color: string
}) => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#5A3BFE] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="flex flex-col items-center gap-4 relative">
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="flex-1 h-px bg-[#281C46]/15" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/50">Roadmap</span>
          <div className="flex-1 h-px bg-[#281C46]/15" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border-2 border-[#5A3BFE]/20 bg-white/80 backdrop-blur-sm px-8 py-6 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className={`${color} rounded-xl p-3`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#281C46]">{title}</h2>
              <p className="text-sm text-[#281C46]/70 mt-0.5">{subtitle}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)
const RoadmapSectionBuildSlide = () => <RoadmapSectionDividerSlide title="Build" subtitle="Discover, create, and tune agents" icon={Workflow} color="bg-[#5A3BFE]" />
const RoadmapSectionTestSlide = () => <RoadmapSectionDividerSlide title="Test" subtitle="Governance, safety, and automated testing" icon={Shield} color="bg-[#281C46]" />
const RoadmapSectionOptimiseSlide = () => <RoadmapSectionDividerSlide title="Optimise" subtitle="Knowledge, analytics, and continuous improvement" icon={BarChart3} color="bg-[#0668E1]" />
const RoadmapSectionExtensibilitySlide = () => <RoadmapSectionDividerSlide title="Extensibility" subtitle="Tools, orchestration, and platform extension" icon={Layers} color="bg-[#5A3BFE]" />

// ——— Section “At a glance” slides (after each section divider) ———
// Small detail box for Build at a glance columns (label + text) — strong segregation with accent bar and shadow
const BuildDetailBox = ({ label, children, delay = 0, dark = false }: { label: string; children: React.ReactNode; delay?: number; dark?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    className={`rounded-lg border-l-4 px-3 py-2.5 border border-[#281C46]/10 shadow-sm ${
      dark
        ? "border-l-[#F8D57E] bg-[#281C46] text-white shadow-[#281C46]/15"
        : "border-l-[#5A3BFE] bg-white border-[#5A3BFE]/15 shadow-[0_1px_4px_rgba(90,59,254,0.08)]"
    }`}
  >
    <span className={`text-[9px] font-bold uppercase tracking-wider block mb-1.5 ${dark ? "text-[#F8D57E]" : "text-[#5A3BFE]"}`}>{label}</span>
    <div className={`text-[10px] leading-snug ${dark ? "text-white/90" : "text-[#281C46]/85"}`}>{children}</div>
  </motion.div>
)

const BuildAtGlanceSlide = () => {
  const columns = [
    {
      icon: Target,
      title: "Nexus agentic discovery",
      color: "bg-[#5A3BFE]",
      boxes: [
        { label: "What it is", content: "Uses your existing tickets and conversations to define the roadmap and prompts that power the super agent and sub-agents. Eyes analyze logs, surface intents and gaps; Co-Pilot recommendations turn real usage into better prompts and flows. Discover intents and opportunities from conversation data — then feed them into Build so agents stay aligned with what users actually need.", dark: false },
        { label: "Why it matters", content: "Data-driven roadmap: instead of guessing, use real conversations and tickets to prioritize what to build and how to phrase prompts. Reduces wasted effort and keeps the super agent tuned to actual demand.", dark: true },
        { label: "Key outcomes", content: "Turn tickets and conversation logs into a data-driven roadmap and prompt set. Eyes analyze logs and surface intents, gaps, and Co-Pilot recommendations. Feed discovered intents into Build so agents stay aligned with real user need.", dark: false },
      ],
    },
    {
      icon: Workflow,
      title: "Nexus & prompt builder",
      color: "bg-[#5A3BFE]",
      boxes: [
        { label: "What it is", content: "Nexus and the prompt builder let you create and tune agents: Text-to-Flow (NL → flow), GenUI, no-code; Hands build and fix nodes. One pipeline from discovered intents to deployed agents with consistent governance. Build once with prompts and flows that power the super agent and sub-agents; same pipeline from discovery to go-live.", dark: false },
        { label: "Why it matters", content: "From roadmap to production: Nexus + prompt builder close the loop between what you discover and what you ship. Reduces handoffs and keeps agents aligned with the latest intents and prompts.", dark: true },
        { label: "Key outcomes", content: "Text-to-Flow (NL → flow), GenUI, no-code; Hands build and fix nodes. One pipeline from discovery to deployment with consistent governance.", dark: false },
      ],
    },
    {
      icon: Brain,
      title: "LAMs",
      color: "bg-[#5A3BFE]",
      boxes: [
        { label: "From LLM to LAM", content: "LAMs (Language Action Models) extend LLMs with first-class action and tool use — not just text in, text out, but plan → act → observe in the world. Build pipeline supports LAMs so you can design and deploy agents that reason and execute (APIs, workflows, tools) with proper governance. Core to agentic design: agents that think and act.", dark: false },
        { label: "Why it matters", content: "The roadmap from LLM → LAM → AGI-style systems starts with action-aware models. LAMs in the Build stage ensure your super agent and sub-agents are built on a foundation that can act, not just answer.", dark: true },
        { label: "Key outcomes", content: "Extend LLMs with first-class action and tool use — plan → act → observe. Foundation for super agent and sub-agents that can act, not just answer.", dark: false },
      ],
    },
    {
      icon: EyeOff,
      title: "Invisible agents",
      color: "bg-[#F8D57E]",
      boxes: [
        { label: "What they are", content: "Invisible agents assist in the background — supporting humans without taking over the conversation. They handle triage, research, draft responses, or run checks while the human stays in the loop. Augment rather than replace. First-class persona: design flows that augment rather than replace. Reduces agent fatigue and keeps humans in control of final decisions. Ideal for regulated or high-stakes domains where human approval is required.", dark: false },
        { label: "Use cases", content: "IT support: agent gathers context and suggests fixes; human confirms before applying. Back-office: draft replies, validate data, route tickets; agent does legwork, human approves. Customer success: agent preps case summary and suggested actions; rep handles conversation.", dark: true },
        { label: "Key outcomes", content: "Triage, research, draft responses — human stays in the loop. First-class persona for flows that augment rather than replace. Ideal for IT support, back-office, and regulated or high-stakes domains.", dark: false },
      ],
    },
  ]
  const highlights = [
    { label: "One pipeline", value: "Discover → Build → Test → Optimize" },
    { label: "UAI", value: "Universal Agentic Interface" },
    { label: "Eyes · Hands · Authority", value: "Intelligence · Execution · Autonomy" },
    { label: "TCO", value: "Up to 60% reduction" },
  ]
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <div className="flex flex-1 min-h-0 overflow-hidden flex-col">
          <div className="flex-1 min-h-0 overflow-auto p-3 sm:p-4 flex flex-col">
            <SectionHeader icon={Workflow} title="Build: At a glance" subtitle="Discover, create, and tune agents — full overview" color="bg-[#5A3BFE]" />
            <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[#5A3BFE]/30">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#5A3BFE]/15 text-[#5A3BFE]">Build</span>
            </div>

            {/* Section: Key highlights — boxed */}
            <div className="mb-3 flex-shrink-0 rounded-xl border-2 border-[#5A3BFE]/25 bg-gradient-to-br from-[#5A3BFE]/08 to-[#0668E1]/05 p-3 shadow-[0_2px_8px_rgba(90,59,254,0.06)]">
              <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-[#5A3BFE]/20">
                <div className="w-1 h-5 rounded-full bg-[#5A3BFE]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A3BFE]">Key highlights</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.04 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-2"
              >
                {highlights.map((h, i) => (
                  <div key={h.label} className="rounded-lg border border-[#5A3BFE]/25 bg-white px-3 py-2.5 text-center shadow-[0_1px_3px_rgba(90,59,254,0.06)]">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A3BFE] block">{h.label}</span>
                    <span className="text-[10px] font-semibold text-[#281C46] leading-tight">{h.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Section: Four topic columns — each column in its own box */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 rounded-full bg-[#5A3BFE]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/70">Build pillars</span>
            </div>
            <div className="flex-1 min-h-0 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {columns.map((col, colIndex) => {
                const Icon = col.icon
                const isYellow = col.color === "bg-[#F8D57E]"
                return (
                  <motion.div
                    key={col.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.06 + colIndex * 0.04 }}
                    className={`flex flex-col min-h-0 rounded-xl border-2 overflow-hidden flex-1 ${
                      isYellow ? "border-[#F8D57E]/50 bg-white shadow-[0_2px_10px_rgba(248,213,126,0.12)]" : "border-[#5A3BFE]/25 bg-white shadow-[0_2px_10px_rgba(90,59,254,0.08)]"
                    }`}
                  >
                    <div className={`flex items-center gap-2.5 px-3 py-2.5 flex-shrink-0 border-b-2 ${col.color} ${isYellow ? "border-[#F8D57E]/40 text-[#281C46]" : "border-[#5A3BFE]/30 text-white"}`}>
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-bold text-xs leading-tight">{col.title}</span>
                    </div>
                    <div className="p-2.5 space-y-2 overflow-y-auto min-h-0 flex-1">
                      {col.boxes.map((box, i) => (
                        <BuildDetailBox key={box.label} label={box.label} delay={0.1 + colIndex * 0.04 + i * 0.02} dark={box.dark}>
                          {box.content}
                        </BuildDetailBox>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Section: Build in one line — highlighted box */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="mt-3 flex-shrink-0 rounded-xl border-2 border-l-4 border-l-[#F8D57E] border-[#F8D57E]/50 bg-gradient-to-br from-[#F8D57E]/20 to-white p-3.5 shadow-[0_2px_8px_rgba(248,213,126,0.15)]"
            >
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#F8D57E]/30">
                <Zap className="w-4 h-4 text-[#281C46]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/80">Build in one line</span>
              </div>
              <p className="text-[11px] text-[#281C46] leading-relaxed">
                From <HighlightKey>discovery</HighlightKey> (tickets, conversations → roadmap) to <HighlightKey>build</HighlightKey> (Nexus, prompt builder, Text-to-Flow, GenUI), <HighlightKey>LAMs</HighlightKey> for agents that act, and <HighlightKey>invisible agents</HighlightKey> that augment humans — one coherent Build stage for the autonomic enterprise. One pipeline from intent to deployment.
              </p>
            </motion.div>
            <div className="mt-2 flex-shrink-0">
              <TakeawayStrip delay={0.35}>Build: Nexus discovery → Nexus & prompt builder → LAMs → Invisible agents. Next: Test (governance, safety, automated testing).</TakeawayStrip>
            </div>
          </div>
          <SlideFooter />
        </div>
      </div>
    </SlideWrapper>
  )
}

// Detail box for Test at a glance — accent bar and shadow (Test theme: dark purple / yellow)
const TestDetailBox = ({ label, children, delay = 0, dark = false }: { label: string; children: React.ReactNode; delay?: number; dark?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    className={`rounded-lg border-l-4 px-2.5 py-2 border border-[#281C46]/10 shadow-sm ${
      dark
        ? "border-l-[#F8D57E] bg-[#281C46] text-white shadow-[#281C46]/15"
        : "border-l-[#281C46] bg-white border-[#281C46]/15 shadow-[0_1px_4px_rgba(40,28,70,0.08)]"
    }`}
  >
    <span className={`text-[9px] font-bold uppercase tracking-wider block mb-1 ${dark ? "text-[#F8D57E]" : "text-[#281C46]"}`}>{label}</span>
    <div className={`text-[9px] leading-snug ${dark ? "text-white/90" : "text-[#281C46]/85"}`}>{children}</div>
  </motion.div>
)

const TestAtGlanceSlide = () => {
  const columns = [
    {
      icon: Shield,
      title: "AI Trust center",
      color: "bg-[#281C46]",
      boxes: [
        { label: "What it is", content: "A central place for governance, safety, and transparency: monitor model behavior, guardrails, and compliance. Governance as code: auto-scan for PII leaks, brand compliance, topic adherence, tone policing. Safety layer: simulate outcomes and spot errors before customers see them; <1% hallucination targets. One dashboard for risk, compliance, and model behavior.", dark: false },
        { label: "Why it matters", content: "Enterprises need to prove AI is safe and compliant. Scale deployment without scaling risk: one dashboard for risk, compliance, and model behavior; reduces audit burden and accelerates approval for new use cases. Full visibility for security and legal teams.", dark: true },
        { label: "Key outcomes", content: "One dashboard for risk, compliance, and model behavior. Governance as code: PII scans, brand compliance, topic adherence. Safety layer to spot errors before go-live.", dark: false },
      ],
    },
    {
      icon: BookOpen,
      title: "KB Quality",
      color: "bg-[#5A3BFE]",
      boxes: [
        { label: "What it does", content: "KB Quality Assessments propose improvements: analyze coverage, gaps, outdated or conflicting content, and usage patterns to suggest new articles, edits, or retirements. Data-driven recommendations so content owners can prioritize. Complements Conflict Detection; reduces manual KB audits and keeps answers accurate over time.", dark: false },
        { label: "Why it matters", content: "Knowledge bases decay over time; quality turns the agent into a feedback loop so the KB improves with the model. Fewer wrong answers and escalations; better containment and CSAT. One place to see coverage gaps, stale content, and usage-based priorities.", dark: true },
        { label: "Key outcomes", content: "Analyze coverage, gaps, and usage patterns; suggest new articles, edits, or retirements. Data-driven prioritization; complements conflict detection; reduces manual KB audits.", dark: false },
      ],
    },
    {
      icon: Zap,
      title: "Automated testing",
      color: "bg-[#281C46]",
      boxes: [
        { label: "What it is", content: "Automated testing for AI agents — including agentic actions: simulate conversations, tool calls, and multi-step flows before go-live. Catch regressions, policy violations, and edge cases in a repeatable way. Integrates with Nexus and AI Trust center; governance as code and safety checks as part of the pipeline.", dark: false },
        { label: "Why it matters", content: "Agentic agents use tools and APIs; testing must cover actions, not just intent and answers. Automated testing including agentic actions ensures safe, compliant behavior before customers see it.", dark: true },
        { label: "Key outcomes", content: "Simulate conversations and agentic actions before go-live. Repeatable tests; governance as code; safety checks in the pipeline; integrates with AI Trust center.", dark: false },
      ],
    },
    {
      icon: Layers,
      title: "Knowledge & access",
      color: "bg-[#0668E1]",
      boxes: [
        { label: "Multimedia ingestion", content: "Ingest and use video content as part of agent knowledge. Transcribe, chunk, and index video so agents can answer from this content and cite timestamps or clips. Same Agentic RAG stack, broader input types. Use cases: product how-tos, training videos, support tutorials and demos.", dark: false },
        { label: "Conflict detection & Native ACL", content: "Conflict Detection: surface conflicting information in the KB; flag when different chunks answer the same question differently so content owners can merge, retire, or disambiguate. Native ACL: secure, role-based content in the knowledge layer; retrieval and answers filtered by permission by default. Critical for internal vs. external, by-region or by-product, and compliance.", dark: true },
        { label: "Key outcomes", content: "Multimedia: transcribe, chunk, index video; richer knowledge. Conflict detection: flag contradictions; merge, retire, disambiguate. Native ACL: right content to the right users and agents by default.", dark: false },
      ],
    },
  ]
  const highlights = [
    { label: "Governance as code", value: "PII, brand, topic adherence" },
    { label: "Safety layer", value: "Simulate before go-live" },
    { label: "One dashboard", value: "Risk, compliance, model behavior" },
    { label: "Target", value: "<1% hallucination" },
  ]
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <div className="flex flex-1 min-h-0 overflow-hidden flex-col">
          <div className="flex-1 min-h-0 overflow-auto p-3 sm:p-4 flex flex-col">
            <SectionHeader icon={Shield} title="Test: At a glance" subtitle="Governance, safety, and automated testing — full overview" color="bg-[#281C46]" />
            <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[#281C46]/30">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#281C46]/15 text-[#281C46]">Test</span>
            </div>

            {/* Section: Key highlights — boxed */}
            <div className="mb-3 flex-shrink-0 rounded-xl border-2 border-[#281C46]/25 bg-gradient-to-br from-[#281C46]/08 to-[#0668E1]/05 p-3 shadow-[0_2px_8px_rgba(40,28,70,0.08)]">
              <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-[#281C46]/20">
                <div className="w-1 h-5 rounded-full bg-[#281C46]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]">Key highlights</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.04 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-2"
              >
                {highlights.map((h) => (
                  <div key={h.label} className="rounded-lg border border-[#281C46]/25 bg-white px-3 py-2.5 text-center shadow-[0_1px_3px_rgba(40,28,70,0.06)]">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#281C46] block">{h.label}</span>
                    <span className="text-[10px] font-semibold text-[#281C46] leading-tight">{h.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Section: Test pillars — four columns in bordered cards */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 rounded-full bg-[#281C46]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/70">Test pillars</span>
            </div>
            <div className="flex-1 min-h-0 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {columns.map((col, colIndex) => {
                const Icon = col.icon
                return (
                  <motion.div
                    key={col.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.06 + colIndex * 0.04 }}
                    className="flex flex-col min-h-0 rounded-xl border-2 border-[#281C46]/25 bg-white overflow-hidden flex-1 shadow-[0_2px_10px_rgba(40,28,70,0.08)]"
                  >
                    <div className={`flex items-center gap-2.5 px-3 py-2.5 flex-shrink-0 border-b-2 ${col.color} border-[#281C46]/20 text-white`}>
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-bold text-xs leading-tight">{col.title}</span>
                    </div>
                    <div className="p-2 space-y-1.5 overflow-hidden flex-1 flex flex-col justify-start">
                      {col.boxes.map((box, i) => (
                        <TestDetailBox key={box.label} label={box.label} delay={0.1 + colIndex * 0.04 + i * 0.02} dark={box.dark}>
                          {box.content}
                        </TestDetailBox>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Section: Test in one line — highlighted box */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="mt-3 flex-shrink-0 rounded-xl border-2 border-l-4 border-l-[#F8D57E] border-[#F8D57E]/50 bg-gradient-to-br from-[#F8D57E]/20 to-white p-3.5 shadow-[0_2px_8px_rgba(248,213,126,0.15)]"
            >
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-[#F8D57E]/30">
                <Shield className="w-4 h-4 text-[#281C46]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/80">Test in one line</span>
              </div>
              <p className="text-[11px] text-[#281C46] leading-relaxed">
                <HighlightKey>AI Trust center</HighlightKey> for governance, safety, and transparency; <HighlightKey>KB Quality</HighlightKey> and <HighlightKey>Conflict Detection</HighlightKey> to keep knowledge accurate and coherent; <HighlightKey>Automated testing</HighlightKey> including agentic actions; <HighlightKey>Multimedia</HighlightKey> and <HighlightKey>Native ACL</HighlightKey> for richer knowledge and secure, role-based content. One dashboard, governance as code, safety first — scale deployment without scaling risk.
              </p>
            </motion.div>
            <div className="mt-2 flex-shrink-0">
              <TakeawayStrip delay={0.35}>Test: AI Trust center, KB Quality, automated testing, multimedia, conflict detection, native ACL. Next: Optimise (reporting, conversational analytics).</TakeawayStrip>
            </div>
          </div>
          <SlideFooter />
        </div>
      </div>
    </SlideWrapper>
  )
}

// Detail box for Optimise at a glance — accent bar and shadow (Optimise theme: blue / yellow)
const OptimiseDetailBox = ({ label, children, delay = 0, dark = false }: { label: string; children: React.ReactNode; delay?: number; dark?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    className={`rounded-lg border-l-4 px-2.5 py-2 border border-[#0668E1]/10 shadow-sm ${
      dark
        ? "border-l-[#F8D57E] bg-[#281C46] text-white shadow-[#281C46]/15"
        : "border-l-[#0668E1] bg-white border-[#0668E1]/15 shadow-[0_1px_4px_rgba(6,104,225,0.08)]"
    }`}
  >
    <span className={`text-[9px] font-bold uppercase tracking-wider block mb-1 ${dark ? "text-[#F8D57E]" : "text-[#0668E1]"}`}>{label}</span>
    <div className={`text-[9px] leading-snug ${dark ? "text-white/90" : "text-[#281C46]/85"}`}>{children}</div>
  </motion.div>
)

const OptimiseAtGlanceSlide = () => {
  const columns = [
    {
      icon: BarChart3,
      title: "Reporting enhancements",
      color: "bg-[#0668E1]",
      boxes: [
        { label: "What it is", content: "Richer conversational analytics: containment, drop-off, CSAT, and intent-level insights. Authority executes improvements; continuous feedback loop so you can optimize agents based on real usage. One place to see what's working and what's not — then act on it from the same pipeline.", dark: false },
        { label: "Why it matters", content: "Optimize agents based on real usage, not guesswork. Continuous feedback loop from conversations; Authority executes improvements so you stay in control while the system gets better.", dark: true },
        { label: "Key outcomes", content: "Richer analytics: containment, drop-off, CSAT, intent-level insights. Authority executes; continuous feedback loop from real usage.", dark: false },
      ],
    },
    {
      icon: BarChart3,
      title: "Nexus conversational reporting",
      color: "bg-[#5A3BFE]",
      boxes: [
        { label: "What it is", content: "Reporting tied to the full Nexus pipeline: from Discover → Build → Test → Optimize. Conversational analytics that feed back into roadmap and prompts — close the loop from conversation to improvement. One pipeline; analytics that drive what you build and how you tune.", dark: false },
        { label: "Why it matters", content: "Close the loop from conversation to roadmap and prompts. Instead of reporting in a silo, Nexus conversational reporting ties analytics to the full pipeline so improvements feed back into discovery and build.", dark: true },
        { label: "Key outcomes", content: "Close the loop from conversation to roadmap and prompts. Discover → Build → Test → Optimize with analytics that feed back.", dark: false },
      ],
    },
    {
      icon: Target,
      title: "Conversational analytics",
      color: "bg-[#0668E1]",
      boxes: [
        { label: "What you measure", content: "Containment rates, drop-off points, CSAT, and intent-level insights. See which flows resolve, where users leave, and how satisfied they are. Data at the right granularity to tune prompts and fix gaps.", dark: false },
        { label: "Why it matters", content: "Without analytics you optimize blind. Conversational analytics turn every conversation into a signal so you can prioritize what to fix and what to double down on.", dark: true },
        { label: "Key outcomes", content: "One place for containment, drop-off, CSAT, intent-level insights; data-driven prioritization for roadmap and prompts.", dark: false },
      ],
    },
    {
      icon: Rocket,
      title: "Authority & feedback loop",
      color: "bg-[#281C46]",
      boxes: [
        { label: "What it is", content: "Authority executes improvements based on what the analytics show. Continuous feedback loop: real usage → insights → improvements → better agents. You stay in control; the system gets better with every conversation.", dark: false },
        { label: "Why it matters", content: "Optimise is not just dashboards — it's the stage where insights become action. Authority closes the loop so improvements flow back into discovery, build, and test.", dark: true },
        { label: "Key outcomes", content: "Authority executes improvements; continuous feedback from real usage; report and act in one pipeline.", dark: false },
      ],
    },
  ]
  const highlights = [
    { label: "Containment & CSAT", value: "Intent-level insights" },
    { label: "Authority executes", value: "Improvements from usage" },
    { label: "Closed loop", value: "Conversation → improvement" },
    { label: "One pipeline", value: "Report & act in one place" },
  ]
  const pipelineSteps = [
    { label: "Discover", active: false },
    { label: "Build", active: false },
    { label: "Test", active: false },
    { label: "Optimise", active: true },
  ]
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <div className="flex flex-1 min-h-0 overflow-hidden flex-col">
          <div className="flex-1 min-h-0 overflow-auto p-3 sm:p-4 flex flex-col">
            <SectionHeader icon={BarChart3} title="Optimise: At a glance" subtitle="Knowledge, analytics, and continuous improvement — full overview" color="bg-[#0668E1]" />
            <div className="flex items-center gap-2 mb-2 pb-2 border-b-2 border-[#0668E1]/30">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#0668E1]/15 text-[#0668E1]">Optimise</span>
            </div>

            {/* Section: Key highlights — boxed */}
            <div className="mb-2 flex-shrink-0 rounded-xl border-2 border-[#0668E1]/25 bg-gradient-to-br from-[#0668E1]/08 to-[#5A3BFE]/05 p-3 shadow-[0_2px_8px_rgba(6,104,225,0.08)]">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#0668E1]/20">
                <div className="w-1 h-5 rounded-full bg-[#0668E1]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0668E1]">Key highlights</span>
              </div>
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.04 }} className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {highlights.map((h) => (
                  <div key={h.label} className="rounded-lg border border-[#0668E1]/25 bg-white px-3 py-2.5 text-center shadow-[0_1px_3px_rgba(6,104,225,0.06)]">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#0668E1] block">{h.label}</span>
                    <span className="text-[10px] font-semibold text-[#281C46] leading-tight">{h.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* In the pipeline — Optimise in context */}
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.06 }} className="mb-2 flex-shrink-0 rounded-lg border border-[#0668E1]/20 bg-white/80 px-3 py-2 flex items-center justify-center gap-2 flex-wrap">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#281C46]/60">In the pipeline</span>
              {pipelineSteps.map((step, i) => (
                <Fragment key={step.label}>
                  {i > 0 && <span className="text-[#0668E1]/40">→</span>}
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-semibold ${step.active ? "bg-[#0668E1] text-white" : "bg-[#281C46]/08 text-[#281C46]/70"}`}>{step.label}</span>
                </Fragment>
              ))}
            </motion.div>

            {/* Section: Optimise pillars — four columns */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 rounded-full bg-[#0668E1]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/70">Optimise pillars</span>
            </div>
            <div className="flex-1 min-h-0 grid grid-cols-2 lg:grid-cols-4 gap-2">
              {columns.map((col, colIndex) => {
                const Icon = col.icon
                return (
                  <motion.div
                    key={col.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.06 + colIndex * 0.04 }}
                    className="flex flex-col min-h-0 rounded-xl border-2 border-[#0668E1]/25 bg-white overflow-hidden flex-1 shadow-[0_2px_10px_rgba(6,104,225,0.08)]"
                  >
                    <div className={`flex items-center gap-2 px-2.5 py-2 flex-shrink-0 border-b-2 ${col.color} border-[#0668E1]/20 text-white`}>
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="font-bold text-[11px] leading-tight">{col.title}</span>
                    </div>
                    <div className="p-2 space-y-1.5 overflow-hidden flex-1 flex flex-col justify-start">
                      {col.boxes.map((box, i) => (
                        <OptimiseDetailBox key={box.label} label={box.label} delay={0.1 + colIndex * 0.04 + i * 0.02} dark={box.dark}>
                          {box.content}
                        </OptimiseDetailBox>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Section: Optimise in one line — highlighted box */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 }}
              className="mt-2 flex-shrink-0 rounded-xl border-2 border-l-4 border-l-[#F8D57E] border-[#F8D57E]/50 bg-gradient-to-br from-[#F8D57E]/20 to-white p-3 shadow-[0_2px_8px_rgba(248,213,126,0.15)]"
            >
              <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-[#F8D57E]/30">
                <BarChart3 className="w-4 h-4 text-[#281C46]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#281C46]/80">Optimise in one line</span>
              </div>
              <p className="text-[11px] text-[#281C46] leading-relaxed">
                <HighlightKey>Reporting enhancements</HighlightKey> and <HighlightKey>Nexus conversational reporting</HighlightKey> — optimize with better analytics and a closed loop from conversation to improvement. <HighlightKey>Conversational analytics</HighlightKey> and <HighlightKey>Authority & feedback loop</HighlightKey> put you in control. Next: Extensibility (Headless, MCP, agent-to-agent).
              </p>
            </motion.div>
            <div className="mt-2 flex-shrink-0">
              <TakeawayStrip delay={0.35}>Optimise: reporting, Nexus conversational reporting, analytics, and Authority — one closed loop from conversation to improvement.</TakeawayStrip>
            </div>
          </div>
          <SlideFooter />
        </div>
      </div>
    </SlideWrapper>
  )
}

const ExtensibilityAtGlanceSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex flex-1 min-h-0 overflow-hidden flex-col">
        <div className="flex-1 min-h-0 overflow-auto p-4 flex flex-col">
          <SectionHeader icon={Layers} title="Extensibility: At a glance" subtitle="Tools, orchestration, and platform extension" color="bg-[#5A3BFE]" />
          <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[#5A3BFE]/30">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#5A3BFE]/15 text-[#5A3BFE]">Extensibility</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {[
              { icon: Code2, title: "Headless & streaming", desc: "REST, GraphQL, MCP; any UI; streaming, Enqueue, Create Call API.", color: "border-[#5A3BFE]/25" },
              { icon: Sparkles, title: "MCP support", desc: "Standard tools & data; no custom connectors per system.", color: "border-[#0668E1]/25" },
              { icon: GitBranch, title: "Agent-to-agent", desc: "State, traces, handovers; A2A semantics; modular mesh.", color: "border-[#281C46]/25" },
              { icon: Lock, title: "Super Agent Rules", desc: "Global rules at top; propagated to sub-agents; P0.", color: "border-[#5A3BFE]/25" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }} className={`rounded-xl border-2 ${item.color} bg-white p-3 shadow-[0_2px_8px_rgba(40,28,70,0.05)]`}>
                  <Icon className="w-5 h-5 text-[#5A3BFE] mb-2" />
                  <h4 className="font-semibold text-xs text-[#281C46] mb-1">{item.title}</h4>
                  <p className="text-[10px] text-[#281C46]/80">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
          <ContentCard delay={0.24} icon={Sparkles} title="Agentic RAG as a service">
            <p className="text-sm text-[#281C46]/90 leading-relaxed">Retrieve–reason–act as a first-class, reusable capability; build once, consume across many agents. Same semantic retrieval, planning, and tool use with consistent governance.</p>
          </ContentCard>
          <TakeawayStrip delay={0.3}>Extensibility: Headless, MCP, agent-to-agent, Super Agent Rules, Agentic RAG as a service — integrate and extend without sprawl.</TakeawayStrip>
        </div>
        <SlideFooter />
      </div>
    </div>
  </SlideWrapper>
)

// Roadmap: one slide with the story / big themes — product architecture
const RoadmapStorySlide = () => {
  const pillars = [
    { icon: Brain, title: "Agent intelligence", desc: "Nexus pipeline (Discover → Build → Test → Optimize) with Eyes, Hands, Authority; MCP support for standard tools and data; agent-to-agent orchestration with state and traces. Smarter agents that reason and act — goal-based execution, multi-step planning, and first-class tool use.", keys: ["Nexus", "MCP", "Multi-agent", "A2A"], color: "bg-[#5A3BFE]" },
    { icon: Code2, title: "Developer experience", desc: "One pipeline and standard tools; stateful handovers and clear traces for multi-agent flows; Super Agent Rules (P0) for governance at scale. Build and operate at scale without per-agent sprawl; backward compatibility and clear precedence for global vs. agent-specific rules.", keys: ["One pipeline", "State & traces", "Super Agent Rules"], color: "bg-[#0668E1]" },
    { icon: Shield, title: "Trust", desc: "AI Trust center for governance, safety, and transparency; invisible agents (augment, not replace); KB quality assessments and conflict detection. Governance as code, safety layer, role-based knowledge; &lt;1% hallucination targets and compliance visibility.", keys: ["AI Trust center", "Invisible agents", "KB quality", "Conflict detection"], color: "bg-[#281C46]" },
  ]
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col min-h-0 overflow-auto p-4">
          <SectionHeader icon={Target} title="Roadmap: the story" subtitle="Big themes — product architecture" color="bg-[#281C46]" />
          <SectionLabel label="Strategic themes" />
          <div className="flex-1 min-h-0 flex flex-col justify-center">
          <div className="grid grid-cols-3 gap-4 mt-2 mb-3">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }} className="rounded-xl border-2 border-[#281C46]/10 bg-white shadow-[0_2px_12px_rgba(40,28,70,0.06)] overflow-hidden">
                <div className={`${p.color} px-4 py-3 flex items-center gap-2`}>
                  <Icon className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-sm text-white">{p.title}</h3>
                </div>
                <div className="p-4">
                  <p className="text-[11px] text-[#281C46]/85 leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.keys.map((k) => (
                      <span key={k} className="px-2 py-0.5 rounded bg-[#5A3BFE]/10 text-[#5A3BFE] text-[9px] font-semibold">{k}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
            })}
          </div>
          <RoadmapConceptBox label="The story in one line" delay={0.25} variant="highlight">
            <p className="text-sm text-[#281C46] leading-relaxed mb-2">
              We're doubling down on <HighlightKey>agent intelligence</HighlightKey>, <HighlightKey>developer experience</HighlightKey>, and <HighlightKey>trust</HighlightKey>: from Nexus and MCP to AI Trust center and a smarter knowledge layer — so your agents stay accurate, compliant, and easy to operate at scale.
            </p>
            <p className="text-xs text-[#281C46]/80 leading-relaxed">
              Concrete bets: Nexus (Discover → Build → Test → Optimize), MCP and agent-to-agent orchestration, Super Agent Rules (P0), AI Trust center, invisible agents, KB quality and conflict detection, multimedia ingestion — all with governance as code and clear visibility.
            </p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Harness & Fabric" delay={0.28} icon={Workflow}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed">
              <HighlightKey>Harness</HighlightKey> — Agentic Automation Platform: full-stack platform for building, orchestrating, and running automated workflows and agents across the enterprise. <HighlightKey>Fabric</HighlightKey> — Customizable data platform (System of Record) with record-level RBAC; single source of truth for content and data that powers agents.
            </p>
          </RoadmapConceptBox>
          </div>
          <TakeawayStrip delay={0.32}>Agent intelligence, developer experience, and trust — one roadmap from Nexus to AI Trust to KB quality. Harness + Fabric power agentic automation and data.</TakeawayStrip>
        </div>
      </div>
    </SlideWrapper>
  )
}

// Roadmap: Nexus — Discover → Build → Test → Optimize (meta 7-stage style)
const RoadmapNexusSlide = () => {
  const steps = [
    { name: "Discover", icon: Target, desc: "Find intents, gaps, and opportunities from conversation data; Eyes analyze logs and surface patterns; Co-Pilot recommendations" },
    { name: "Build", icon: Workflow, desc: "Create and tune agents; Text-to-Flow (NL → flow), GenUI, no-code; Hands build and fix nodes" },
    { name: "Test", icon: Shield, desc: "Safe simulation, governance checks, PII and compliance scans; spot errors before go-live" },
    { name: "Optimize", icon: BarChart3, desc: "Conversational analytics, containment, drop-off, CSAT; Authority executes improvements; continuous feedback loop" },
  ]
  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <RoadmapDetailLayout
          section="Build"
          title="Nexus"
          subtitle="Discover → Build → Test → Optimize"
          icon={Rocket}
          sectionColor="bg-[#5A3BFE]"
        >
          <RoadmapConceptBox label="Four stages" delay={0.05} icon={Workflow}>
            <div className="flex items-stretch gap-0 flex-wrap">
              {steps.map((s, i) => (
                <Fragment key={s.name}>
                  {i > 0 && <FlowArrow />}
                  <FlowBox title={s.name} desc={s.desc} delay={0.08 + i * 0.04} variant={i === 0 ? "accent" : undefined} />
                </Fragment>
              ))}
            </div>
          </RoadmapConceptBox>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <RoadmapConceptBox label="Key concept" variant="dark" delay={0.12}>
              <p className="text-[11px] text-white/90 leading-relaxed mb-2">
                <HighlightKey color="yellow">One pipeline</HighlightKey>: Discover intents and gaps, build and tune agents (Text-to-Flow, GenUI), test safely with governance checks, optimize with conversational analytics — the <strong>Universal Agentic Interface (UAI)</strong> for the autonomic enterprise.
              </p>
              <p className="text-[9px] text-white/70 mb-2">Full 7-stage: Discover, Build, Deploy, Respond, Debug, Track, Analyze. Eyes (intelligence), Hands (execution), Authority (autonomy).</p>
              <p className="text-[9px] text-white/60">Reduces TCO by up to 60%; first-class citizen of your technical stack.</p>
            </RoadmapConceptBox>
            <div className="space-y-2">
              <SectionLabel label="Concepts" />
              <InfoBox icon={Eye} title="Discover" desc="Eyes: analyze logs, find patterns, Co-Pilot suggestions" delay={0.14} />
              <InfoBox icon={Hand} title="Build" desc="Hands: create flows, fix nodes, GenUI, no-code" delay={0.16} />
              <InfoBox icon={Rocket} title="Optimize" desc="Authority: execute, measure, improve" delay={0.18} />
            </div>
          </div>
          <TakeawayStrip delay={0.22}>Nexus roadmap: one pipeline from Discover → Build → Test → Optimize — the UAI for the autonomic enterprise.</TakeawayStrip>
        </RoadmapDetailLayout>
      </div>
    </SlideWrapper>
  )
}

// Roadmap: Nexus for agentic discovery — tickets, conversations → roadmap and prompts
const RoadmapNexusDiscoverySlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Build"
        title="Nexus for agentic discovery"
        subtitle="Use your tickets and conversations to define roadmap and prompts"
        icon={Target}
        sectionColor="bg-[#5A3BFE]"
        keyOutcomes={[
          "Turn tickets and conversation logs into a data-driven roadmap and prompt set.",
          "Eyes analyze logs and surface intents, gaps, and Co-Pilot recommendations.",
          "Feed discovered intents into Build so agents stay aligned with real user need.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it is" delay={0.08} icon={Target}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-2">
              <HighlightKey>Nexus for agentic discovery</HighlightKey> uses your existing <strong>tickets and conversations</strong> to define the roadmap and prompts that will power the super agent and sub-agents. Eyes analyze logs, surface intents and gaps; Co-Pilot recommendations turn real usage into better prompts and flows.
            </p>
            <p className="text-xs text-[#281C46]/80">Discover intents and opportunities from conversation data — then feed them into Build so agents stay aligned with what users actually need.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed">
              Data-driven roadmap: instead of guessing, use <HighlightKey color="yellow">real conversations and tickets</HighlightKey> to prioritize what to build and how to phrase prompts. Reduces wasted effort and keeps the super agent tuned to actual demand.
            </p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Nexus agentic discovery: tickets and conversations → roadmap and prompts that power the super agent and agents.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Nexus and prompt builder to build the agents
const RoadmapNexusPromptBuilderSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Build"
        title="Nexus and prompt builder"
        subtitle="Build the agents"
        icon={Workflow}
        sectionColor="bg-[#5A3BFE]"
        keyOutcomes={[
          "Text-to-Flow (NL → flow), GenUI, no-code; Hands build and fix nodes.",
          "One pipeline from discovered intents to deployed agents with consistent governance.",
          "Close the loop between what you discover and what you ship.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it is" delay={0.08} icon={Workflow}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-2">
              <HighlightKey>Nexus and the prompt builder</HighlightKey> let you create and tune agents: Text-to-Flow (NL → flow), GenUI, no-code; Hands build and fix nodes. One pipeline from discovered intents to deployed agents with consistent governance.
            </p>
            <p className="text-xs text-[#281C46]/80">Build once with prompts and flows that power the super agent and sub-agents; same pipeline from discovery to go-live.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed">
              From roadmap to production: <HighlightKey color="yellow">Nexus + prompt builder</HighlightKey> close the loop between what you discover and what you ship. Reduces handoffs and keeps agents aligned with the latest intents and prompts.
            </p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Nexus and prompt builder: create and tune agents with Text-to-Flow, GenUI, no-code — one pipeline from discovery to deployment.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Automated testing including agentic actions
const RoadmapAutomatedTestingSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Test"
        title="Automated testing"
        subtitle="Including agentic actions"
        icon={Shield}
        sectionColor="bg-[#281C46]"
        keyOutcomes={[
          "Simulate conversations, tool calls, and multi-step flows before go-live.",
          "Catch regressions, policy violations, and edge cases in a repeatable way.",
          "Integrates with Nexus and the AI Trust center; governance as code.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it is" delay={0.08} icon={Shield}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-2">
              <HighlightKey>Automated testing</HighlightKey> for AI agents — including <strong>agentic actions</strong>: simulate conversations, tool calls, and multi-step flows before go-live. Catch regressions, policy violations, and edge cases in a repeatable way.
            </p>
            <p className="text-xs text-[#281C46]/80">Integrates with Nexus and the AI Trust center; governance as code and safety checks as part of the pipeline.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed">
              Agentic agents use tools and APIs; testing must cover not just intent and answers but <HighlightKey color="yellow">actions</HighlightKey>. Automated testing including agentic actions ensures safe, compliant behavior before customers see it.
            </p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Automated testing: simulate conversations and agentic actions before go-live — governance as code, integrated with AI Trust center.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Reporting enhancements + Nexus conversational reporting (Optimize)
const RoadmapReportingSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Optimize"
        title="Reporting & Nexus conversational reporting"
        subtitle="Optimize with better analytics"
        icon={BarChart3}
        sectionColor="bg-[#0668E1]"
        keyOutcomes={[
          "Richer conversational analytics: containment, drop-off, CSAT, intent-level insights.",
          "Authority executes improvements; continuous feedback loop from real usage.",
          "Close the loop from conversation to roadmap and prompts.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="Reporting enhancements" delay={0.08} icon={BarChart3}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-2">
              <HighlightKey>Reporting enhancements</HighlightKey> deliver richer conversational analytics: containment, drop-off, CSAT, and intent-level insights. Authority executes improvements; continuous feedback loop so you can optimize agents based on real usage.
            </p>
            <p className="text-xs text-[#281C46]/80">One place to see what’s working and what’s not — then act on it from the same pipeline.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Nexus conversational reporting" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed">
              <HighlightKey color="yellow">Nexus conversational reporting</HighlightKey> ties reporting to the full Nexus pipeline: from Discover → Build → Test → Optimize. Conversational analytics that feed back into roadmap and prompts — close the loop from conversation to improvement.
            </p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Reporting enhancements and Nexus conversational reporting: optimize with richer analytics and a closed loop from conversation to improvement.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Headless API and streaming (Extensibility)
const RoadmapHeadlessStreamingSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Extensibility"
        title="Headless API and streaming"
        subtitle="Integrate agents into any UI"
        icon={Code2}
        sectionColor="bg-[#281C46]"
        keyOutcomes={[
          "Expose agents via REST, GraphQL, MCP; any front-end — custom app, kiosk, embed, mobile.",
          "Real-time streaming: typing indicators, partials, tool calls; Enqueue API, Create Call API.",
          "Same auth and governance as Studio; full programmatic control.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it is" delay={0.08} icon={Code2}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-2">
              <HighlightKey>Headless API and streaming</HighlightKey>: expose agents via REST, GraphQL, MCP; integrate into any UI — custom app, kiosk, embed, mobile. Real-time streaming (typing, partials, tool calls), Enqueue API, Create Call API; full programmatic control so you can build any experience on top of the same agent.
            </p>
            <p className="text-xs text-[#281C46]/80">One gateway, any front-end; same auth and governance as Studio.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Capabilities" variant="dark" delay={0.12}>
            <ul className="text-sm text-white/90 space-y-1.5">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> REST, SOAP, GraphQL, MCP — one integration surface</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Streaming responses and tool-call visibility</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> SDKs and low-code builders for fast integration</li>
            </ul>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.18}>Headless by design — REST, GraphQL, MCP; streaming and full programmatic control for any UI.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Compact roadmap item box for Build/Test/Optimise columns (icon, title, capability highlight)
const RoadmapItemBox = ({
  icon: Icon,
  title,
  capability,
  delay = 0,
  accent = "purple",
}: {
  icon: LucideIcon
  title: string
  capability: string
  delay?: number
  accent?: "purple" | "blue" | "yellow" | "dark"
}) => {
  const accentStyles = {
    purple: "border-l-[#5A3BFE] bg-[#5A3BFE]/5",
    blue: "border-l-[#0668E1] bg-[#0668E1]/5",
    yellow: "border-l-[#F8D57E] bg-[#F8D57E]/10",
    dark: "border-l-[#281C46] bg-[#281C46]/5",
  }
  const iconBg = accent === "yellow" ? "bg-[#F8D57E]/30" : accent === "dark" ? "bg-[#281C46]/20" : accent === "blue" ? "bg-[#0668E1]/15" : "bg-[#5A3BFE]/15"
  const iconColor = accent === "yellow" ? "text-[#281C46]" : accent === "dark" ? "text-[#F8D57E]" : accent === "blue" ? "text-[#0668E1]" : "text-[#5A3BFE]"
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={`rounded-lg border-l-4 p-3 ${accentStyles[accent]} border border-[#281C46]/10`}
    >
      <div className="flex items-center gap-2.5 mb-1.5">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}`}>
          <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        <h4 className="font-semibold text-xs text-[#281C46]">{title}</h4>
      </div>
      <p className="text-[10px] text-[#281C46]/80 leading-snug pl-10">{capability}</p>
    </motion.div>
  )
}

// Roadmap: single slide — Build | Test | Optimise | Extensibility (four columns, capability boxes)
const RoadmapBuildTestOptimiseSlide = () => {
  const buildItems = [
    { icon: Target, title: "Nexus agentic discovery", capability: "Use tickets and conversations to define roadmap and prompts that power the super agent and agents.", accent: "purple" as const },
    { icon: Workflow, title: "Nexus and prompt builder", capability: "Build the agents with Text-to-Flow, GenUI, no-code; one pipeline from discovery to deployment.", accent: "blue" as const },
    { icon: Brain, title: "LAMs", capability: "Language Action Models — agents that think and act; plan → act → observe with first-class tool use.", accent: "purple" as const },
    { icon: EyeOff, title: "Invisible agents", capability: "Background automation that augments humans — triage, research, draft; human stays in the loop.", accent: "yellow" as const },
  ]
  const testItems = [
    { icon: Shield, title: "AI Trust center", capability: "Governance as code, safety layer, simulate outcomes — spot errors before customers see them.", accent: "dark" as const },
    { icon: BookOpen, title: "KB Quality Assessments", capability: "Propose improvements to the knowledge base; coverage, gaps, usage patterns.", accent: "purple" as const },
    { icon: Video, title: "Multimedia ingestion", capability: "Ingest and use video content as part of agent knowledge for richer answers.", accent: "blue" as const },
    { icon: AlertTriangle, title: "Knowledge Conflict Detection", capability: "Surface conflicting information in the KB; merge, retire, or disambiguate.", accent: "purple" as const },
    { icon: Lock, title: "Native ACL support", capability: "Access control in the knowledge layer — right content to the right users by default.", accent: "dark" as const },
    { icon: Zap, title: "Automated testing", capability: "Including agentic actions — simulate conversations and tool calls before go-live.", accent: "dark" as const },
  ]
  const optimiseItems = [
    { icon: BarChart3, title: "Reporting enhancements", capability: "Richer conversational analytics; containment, drop-off, CSAT; continuous feedback loop.", accent: "blue" as const },
    { icon: BarChart3, title: "Nexus conversational reporting", capability: "Reporting tied to the full Nexus pipeline — close the loop from conversation to improvement.", accent: "purple" as const },
  ]
  const extensibilityItems = [
    { icon: Code2, title: "Headless API and streaming", capability: "REST, GraphQL, MCP; integrate agents into any UI with streaming and full control.", accent: "dark" as const },
    { icon: Sparkles, title: "MCP support", capability: "Standard tools and data for agents — no custom connectors per system.", accent: "blue" as const },
    { icon: GitBranch, title: "Agent-to-agent orchestration", capability: "State during handovers, return to original agent seamlessly; improved traces for multi-agent flows.", accent: "dark" as const },
    { icon: Lock, title: "Super Agent Rules (P0)", capability: "Global rules at Super Agent level propagated to sub-agents; backward compatibility, clear precedence.", accent: "purple" as const },
    { icon: Sparkles, title: "Agentic RAG as a service", capability: "Retrieve–reason–act as a first-class, reusable capability; one RAG stack, many agents.", accent: "yellow" as const },
  ]

  const columnHeader = (label: string, IconComponent: LucideIcon, color: string) => (
    <div className={`flex items-center gap-2.5 mb-3 ${color} rounded-lg px-3 py-2.5`}>
      <IconComponent className="w-5 h-5 text-white" />
      <span className="font-bold text-sm text-white">{label}</span>
    </div>
  )

  return (
    <SlideWrapper>
      <div className="absolute inset-0 flex flex-col overflow-hidden">
        <div className="flex-1 min-h-0 overflow-auto p-4 flex flex-col">
          <SectionHeader icon={Rocket} title="Roadmap: Build · Test · Optimise · Extensibility" subtitle="Capabilities by stage" color="bg-[#5A3BFE]" />
          <div className="flex-1 min-h-0 grid grid-cols-4 gap-4 mt-2">
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }} className="flex flex-col min-h-0">
              {columnHeader("Build", Workflow, "bg-[#5A3BFE]")}
              <div className="space-y-2.5 overflow-y-auto pr-1">
                {buildItems.map((item, i) => (
                  <RoadmapItemBox key={item.title} icon={item.icon} title={item.title} capability={item.capability} delay={0.05 + i * 0.04} accent={item.accent} />
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.06 }} className="flex flex-col min-h-0">
              {columnHeader("Test", Shield, "bg-[#281C46]")}
              <div className="space-y-2.5 overflow-y-auto pr-1">
                {testItems.map((item, i) => (
                  <RoadmapItemBox key={item.title} icon={item.icon} title={item.title} capability={item.capability} delay={0.1 + i * 0.04} accent={item.accent} />
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }} className="flex flex-col min-h-0">
              {columnHeader("Optimise", BarChart3, "bg-[#0668E1]")}
              <div className="space-y-2.5 overflow-y-auto pr-1">
                {optimiseItems.map((item, i) => (
                  <RoadmapItemBox key={item.title} icon={item.icon} title={item.title} capability={item.capability} delay={0.14 + i * 0.04} accent={item.accent} />
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: 0.12 }} className="flex flex-col min-h-0">
              {columnHeader("Extensibility", Layers, "bg-[#5A3BFE]")}
              <div className="space-y-2.5 overflow-y-auto pr-1">
                {extensibilityItems.map((item, i) => (
                  <RoadmapItemBox key={item.title} icon={item.icon} title={item.title} capability={item.capability} delay={0.2 + i * 0.04} accent={item.accent} />
                ))}
              </div>
            </motion.div>
          </div>
          <TakeawayStrip delay={0.3}>Build: Nexus discovery, prompt builder, LAMs, invisible agents. Test: AI Trust, KB enhancements, automated testing. Optimise: reporting and Nexus conversational reporting. Extensibility: Headless, MCP, agent-to-agent, Super Agent Rules, Agentic RAG as a service.</TakeawayStrip>
        </div>
        <SlideFooter />
      </div>
    </SlideWrapper>
  )
}

// Roadmap: MCP & agent orchestration (content from notes)
const RoadmapMCPOrchestrationSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4 flex flex-col">
        <SectionHeader icon={GitBranch} title="Roadmap: MCP & agent orchestration" subtitle="Tools and multi-agent flows" color="bg-[#0668E1]" />
        <SectionLabel label="Key initiatives" />
        <div className="flex-1 min-h-0 flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-4 mt-2 mb-3">
          <RoadmapConceptBox label="MCP support" delay={0.05}>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#5A3BFE]" />
              <h3 className="font-semibold text-[#281C46] text-sm">Model Context Protocol</h3>
            </div>
            <p className="text-xs text-[#281C46]/85 leading-relaxed mb-2">
              Agents use <HighlightKey>external tools and data sources</HighlightKey> in a standard way — no custom connectors per system. REST, SOAP, GraphQL, MCP. Roadmap: MCP Marketplace with pre-built connectors (Postgres, HubSpot, Salesforce, Shopify).
            </p>
            <p className="text-[10px] text-[#281C46]/75">One standard for tool and context injection; aligns with A2A and open tool ecosystems.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Agent-to-agent" variant="dark" delay={0.1}>
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-5 h-5 text-[#F8D57E]" />
              <h3 className="font-semibold text-sm text-white">Orchestration</h3>
            </div>
            <p className="text-xs text-white/80 leading-relaxed mb-2">
              <HighlightKey color="yellow">State during handovers</HighlightKey> — return to original agent seamlessly. <HighlightKey color="yellow">Improved traces</HighlightKey> for debugging multi-agent flows. First-class routing, delegation, resumption (e.g., billing → support → back with full context). Supports Agent-to-Agent (A2A) semantics.
            </p>
            <p className="text-[10px] text-white/60">Multi-agent mesh: Super Agent / traffic controller + specialized sub-agents (billing, triage, sales).</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Super Agent Rules (P0)" delay={0.15}>
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-[#5A3BFE]" />
              <h3 className="font-semibold text-[#281C46] text-sm">Governance at scale</h3>
            </div>
            <p className="text-xs text-[#281C46]/85 leading-relaxed mb-2">
              <HighlightKey>Global rules</HighlightKey> at Super Agent level propagated to sub-agents: compliance phrasing, escalation thresholds, topic boundaries, brand voice. Set once at the top, applied everywhere. Backward compatible; clear precedence (global vs. agent-specific).
            </p>
            <p className="text-[10px] text-[#281C46]/75">P0 priority: safe overrides so you can govern at scale without per-agent configuration sprawl.</p>
          </RoadmapConceptBox>
        </div>
        </div>
        <TakeawayStrip delay={0.2}>MCP, agent-to-agent orchestration, and Super Agent Rules — tools and multi-agent flows with state and governance.</TakeawayStrip>
      </div>
    </div>
  </SlideWrapper>
)

// Roadmap: MCP support only (one slide per note item)
const RoadmapMCPSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Extensibility"
        title="MCP support"
        subtitle="Model Context Protocol — standard tools and data for agents"
        icon={Sparkles}
        sectionColor="bg-[#0668E1]"
        keyOutcomes={[
          "One standard for tool and context injection across models and agents.",
          "No custom connectors per system; REST, SOAP, GraphQL, MCP — one integration surface.",
          "Roadmap: MCP Marketplace with pre-built connectors (Postgres, HubSpot, Salesforce, Shopify).",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What is MCP" delay={0.08} icon={Sparkles}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-3">
              <HighlightKey>Model Context Protocol (MCP)</HighlightKey> is a next-generation integration framework for seamless data access. Agents use <HighlightKey>external tools and data sources</HighlightKey> in a standard way — no custom connectors per system. One API shape for tools and context across models and agents.
            </p>
            <p className="text-xs text-[#281C46]/80 leading-relaxed mb-2">Supports REST, SOAP, GraphQL, MCP — e.g. Postgres, HubSpot, Salesforce, Shopify. Reduces integration sprawl and accelerates time-to-value when adding new data sources or actions.</p>
            <div className="pt-2 border-t border-[#281C46]/10">
              <span className="text-[10px] font-bold uppercase text-[#5A3BFE]">Roadmap:</span>
              <span className="text-xs text-[#281C46]/85 ml-1">MCP Marketplace — pre-built connectors so you extend capabilities without building in-house. Aligns with Agent-to-Agent (A2A) and open tool ecosystems.</span>
            </div>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed mb-3">
              <HighlightKey color="yellow">One standard</HighlightKey> for tool and context injection across models and agents. Reduces integration sprawl and accelerates time-to-value when adding new data sources or actions.
            </p>
            <ul className="text-xs text-white/85 space-y-1.5">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Aligns with Agent-to-Agent (A2A) and open tool ecosystems</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> No custom connectors per system; one integration surface</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Faster onboarding of new tools and data for agents</li>
            </ul>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>MCP: one standard for tools and context — agents use external data and actions without custom connectors per system.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Agent-to-agent orchestration only
const RoadmapAgentOrchestrationSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Extensibility"
        title="Agent-to-agent orchestration"
        subtitle="Multi-agent flows with state and traces"
        icon={GitBranch}
        sectionColor="bg-[#281C46]"
        keyOutcomes={[
          "State during handovers — return to original agent seamlessly with full context.",
          "Improved traces for debugging multi-agent interactions; first-class routing and delegation.",
          "Supports Agent-to-Agent (A2A); modular mesh of domain agents, not a monolithic Super Bot.",
        ]}
      >
        <RoadmapConceptBox label="Key concept" variant="dark" delay={0.05} icon={GitBranch}>
          <h4 className="text-[10px] font-bold text-[#F8D57E] mb-3 uppercase tracking-wide text-center">Multi-Agent Mesh (not monolithic Super Bot)</h4>
        <div className="flex flex-col items-center">
          <div className="bg-[#F8D57E] rounded-lg px-4 py-2 mb-2 flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#281C46]" />
            <span className="text-xs font-bold text-[#281C46]">Super Agent / Traffic Controller</span>
          </div>
          <div className="flex gap-1 mb-1">
            <ArrowRight className="w-4 h-4 text-white/30 rotate-90" />
          </div>
          <div className="grid grid-cols-3 gap-3 w-full max-w-md">
            {[
              { icon: BarChart3, name: "Billing", color: "bg-blue-500/30" },
              { icon: MessageCircle, name: "Tech Triage", color: "bg-green-500/30" },
              { icon: Rocket, name: "Sales", color: "bg-purple-500/30" },
            ].map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }} className={`${a.color} rounded-lg p-2.5 text-center`}>
                <a.icon className="w-4 h-4 text-white mx-auto mb-1" />
                <span className="text-[9px] text-white/90 font-medium">{a.name}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-[8px] text-white/50 italic mt-2">Each agent: smaller, specialized, highly accurate within its domain.</p>
        </div>
        </RoadmapConceptBox>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <RoadmapConceptBox label="What it unlocks" delay={0.15}>
            <p className="text-xs text-[#281C46]/90 leading-relaxed mb-2">
              <HighlightKey>State during handovers</HighlightKey> — return to original agents seamlessly with full context. <HighlightKey>Improved traces</HighlightKey> for debugging multi-agent interactions. First-class routing, delegation, resumption (e.g., billing → support → back with full context). Each agent stays smaller and specialized; Super Agent / traffic controller routes to the right one.
            </p>
            <p className="text-[10px] text-[#281C46]/85 mb-2">Supports <strong>Agent-to-Agent (A2A)</strong> — compose agents from different vendors or teams with consistent semantics. No monolithic Super Bot; modular mesh of domain agents.</p>
            <p className="text-[10px] text-[#281C46]/75">Backward compatible; existing bots and flows do not break when you introduce orchestration.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Benefits" variant="dark" delay={0.2}>
            <ul className="text-[11px] text-white/90 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> State continuity across handovers; no lost context</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Seamless return to originating agent after sub-agent completes</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Better traces for debugging multi-agent conversations and auditing</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Smaller, domain-focused agents → higher accuracy within scope</li>
            </ul>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.22}>Agent-to-agent: state during handovers, seamless return, better traces — compose agents with consistent semantics.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Super Agent Rules Propagation (P0) only
const RoadmapSuperAgentRulesSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Extensibility"
        title="Super Agent Rules Propagation (P0)"
        subtitle="Global rules, safely propagated to sub-agents"
        icon={Lock}
        sectionColor="bg-[#5A3BFE]"
        keyOutcomes={[
          "Global rules at Super Agent level automatically and safely propagated to sub-agents.",
          "Set once at the top, applied everywhere; backward compatibility and clear precedence.",
          "Single source of truth for rules; no per-agent configuration sprawl.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it is" delay={0.08} icon={Lock}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-3">
              <HighlightKey>Super Agent Rules Propagation (P0)</HighlightKey> ensures <HighlightKey>global rules</HighlightKey> at the Super Agent level are automatically and safely propagated to sub-agents. Examples: compliance phrasing, escalation thresholds, topic boundaries, brand voice — <strong>set once at the top, applied everywhere.</strong>
            </p>
            <p className="text-xs text-[#281C46]/85 leading-relaxed mb-2">Focus on <HighlightKey>backward compatibility</HighlightKey> and user experience so existing bots and flows do not break.</p>
            <div className="pt-2 border-t border-[#281C46]/10 text-[10px] text-[#281C46]/80">P0 priority: safe overrides and clear precedence (global vs. agent-specific) so you can govern at scale without per-agent configuration.</div>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why P0" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed mb-3">
              Multi-agent and multi-tenant deployments need <HighlightKey color="yellow">one place to enforce policy</HighlightKey>. Super Agent Rules Propagation is the foundation for governance-at-scale and consistent customer experience across all sub-agents and channels.
            </p>
            <ul className="text-xs text-white/85 space-y-1.5">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Single source of truth for rules</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> No per-agent configuration sprawl</li>
            </ul>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Super Agent Rules (P0): set once at the top, applied everywhere — backward compatible, clear precedence.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: AI Trust center only
const RoadmapAITrustCenterSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Test"
        title="AI Trust center"
        subtitle="Governance, safety, and transparency in one place"
        icon={Shield}
        sectionColor="bg-[#281C46]"
        keyOutcomes={[
          "One dashboard for risk, compliance, and model behavior.",
          "Governance as code: PII scans, brand compliance, topic adherence.",
          "Safety layer: simulate outcomes and spot errors before customers see them.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it is" variant="dark" delay={0.08} icon={Shield}>
            <p className="text-sm text-white/90 leading-relaxed mb-3">
              A <HighlightKey color="yellow">central place for governance, safety, and transparency</HighlightKey>: monitor model behavior, guardrails, and compliance. <strong>Governance as code</strong>: auto-scan for PII leaks and brand compliance. <strong>Safety layer</strong>: simulate outcomes and spot errors before customers see them.
            </p>
            <ul className="text-xs text-white/90 space-y-1.5">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Topic adherence, tone policing, PII filtering, brand guidelines</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> &lt;1% hallucination targets with governance as code</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> One dashboard for risk, compliance, and model behavior</li>
            </ul>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" delay={0.12}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-2">
              Enterprises need to <HighlightKey>prove AI is safe and compliant</HighlightKey>. The AI Trust center gives <strong>one dashboard</strong> for risk, compliance, and model behavior so you can scale agent deployment without scaling risk. Reduces audit burden and accelerates approval for new use cases.
            </p>
            <p className="text-xs text-[#281C46]/80">Scale deployment without scaling risk; full visibility for security and legal teams.</p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>AI Trust center: governance as code, safety layer, full visibility — scale deployment without scaling risk.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Invisible agents only
const RoadmapInvisibleAgentsSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Build"
        title="Invisible agents"
        subtitle="Background automation that supports humans"
        icon={EyeOff}
        sectionColor="bg-[#F8D57E]"
        keyOutcomes={[
          "Triage, research, draft responses — human stays in the loop.",
          "First-class persona: design flows that augment rather than replace.",
          "Ideal for IT support, back-office, and regulated or high-stakes domains.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What they are" variant="highlight" delay={0.08} icon={EyeOff}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-3">
              <HighlightKey color="yellow">Invisible agents</HighlightKey> assist in the background — supporting humans without taking over the conversation. They handle triage, research, draft responses, or run checks while the <strong>human stays in the loop</strong>. Augment rather than replace.
            </p>
            <p className="text-xs text-[#281C46]/85 leading-relaxed mb-2">Roadmap: "Invisible Agents" as a first-class persona — design flows that <strong>augment rather than replace</strong>. IT/Support and MCP Marketplace. Reduces agent fatigue and keeps humans in control of final decisions.</p>
            <p className="text-[10px] text-[#281C46]/75">Ideal for regulated or high-stakes domains where human approval is required.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Use cases" variant="dark" delay={0.12}>
            <ul className="text-sm text-white/90 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> IT support: agent gathers context and suggests fixes; human confirms before applying</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Back-office: draft replies, validate data, route tickets; agent does legwork, human approves</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Customer success: agent preps case summary and suggested actions; rep handles conversation</li>
            </ul>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Invisible agents: triage, research, draft — human stays in the loop; ideal for IT support and back-office.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: KB Quality Assessments only
const RoadmapKBQualitySlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Test"
        title="KB Quality Assessments"
        subtitle="Improve the knowledge base itself"
        icon={BookOpen}
        sectionColor="bg-[#5A3BFE]"
        keyOutcomes={[
          "Analyze coverage, gaps, outdated or conflicting content, and usage patterns.",
          "Suggest new articles, edits, or retirements; data-driven prioritization.",
          "Complements Conflict Detection; reduces manual KB audits.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it does" delay={0.08} icon={BookOpen}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-3">
              <HighlightKey>KB Quality Assessments</HighlightKey> propose improvements to the knowledge base: analyze <strong>coverage, gaps, outdated or conflicting content</strong>, and usage patterns to suggest new articles, edits, or retirements. Data-driven recommendations so content owners can prioritize.
            </p>
            <p className="text-xs text-[#281C46]/80 leading-relaxed mb-2">Complements Knowledge Conflict Detection: quality suggests improvements and prioritization; conflict detection flags specific contradictions that need resolution.</p>
            <p className="text-[10px] text-[#281C46]/75">Reduces manual KB audits; keeps answers accurate and consistent over time.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed mb-2">
              Knowledge bases decay over time. Quality assessments turn the agent into a <HighlightKey color="yellow">feedback loop</HighlightKey>: conversations and analytics drive continuous improvement of the KB, not just the model. Fewer wrong answers and escalations; better containment and CSAT.
            </p>
            <p className="text-xs text-white/70">One place to see coverage gaps, stale content, and usage-based priorities.</p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>KB Quality: coverage, gaps, conflicts, usage patterns — suggest new articles, edits, retirements so content stays accurate.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Multimedia ingestion (videos) only
const RoadmapMultimediaSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Test"
        title="Multimedia ingestion (videos)"
        subtitle="Richer knowledge from video content"
        icon={Video}
        sectionColor="bg-[#0668E1]"
        keyOutcomes={[
          "Transcribe, chunk, and index video so agents can answer from this content.",
          "Cite timestamps or clips; same Agentic RAG stack, broader input types.",
          "Product how-tos, training videos, support tutorials and demos.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it is" delay={0.08} icon={Video}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-3">
              Ingest and use <HighlightKey>video content</HighlightKey> as part of agent knowledge. Multimedia ingestion <strong>transcribes, chunks, and indexes</strong> video so agents can answer from this content and cite timestamps or clips.
            </p>
            <p className="text-xs text-[#281C46]/85 leading-relaxed">Multi-modal retrieval extends to video — same <strong>Agentic RAG stack</strong>, broader input types.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Use cases" variant="dark" delay={0.12}>
            <ul className="text-sm text-white/90 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Product how-to and training videos as knowledge</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F8D57E] flex-shrink-0 mt-0.5" /> Support tutorials and demos</li>
            </ul>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Multimedia ingestion: transcribe, chunk, index video — same Agentic RAG stack, richer knowledge from how-tos and demos.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Knowledge Conflict Detection only
const RoadmapConflictDetectionSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Test"
        title="Knowledge Conflict Detection"
        subtitle="Surface and resolve conflicting information"
        icon={AlertTriangle}
        sectionColor="bg-[#5A3BFE]"
        keyOutcomes={[
          "Flag when different chunks answer the same question differently.",
          "Content owners can merge, retire, or disambiguate before go-live.",
          "Works alongside KB Quality; keeps the KB coherent and the agent consistent.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it does" delay={0.08} icon={AlertTriangle}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-3">
              <HighlightKey>Knowledge Conflict Detection</HighlightKey> surfaces <strong>conflicting information</strong> in the KB so you can resolve inconsistencies. When the same question can be answered differently by different chunks (e.g., outdated vs. new docs), the system <strong>flags these</strong> so content owners can merge, retire, or disambiguate.
            </p>
            <p className="text-xs text-[#281C46]/80 leading-relaxed">Works alongside KB Quality Assessments: quality suggests improvements; conflict detection highlights specific contradictions.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed mb-2">
              Large KBs and multiple contributors lead to drift. Conflict detection keeps the KB <HighlightKey color="yellow">coherent</HighlightKey> and the agent consistent — reduces contradictory answers and improves trust.
            </p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Conflict detection: flag when different chunks answer the same question differently — merge, retire, or disambiguate.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Native ACL support only
const RoadmapNativeACLSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <RoadmapDetailLayout
        section="Test"
        title="Native ACL support"
        subtitle="Access control in the knowledge layer"
        icon={Lock}
        sectionColor="bg-[#281C46]"
        keyOutcomes={[
          "Secure, role-based content; different users/roles/tenants see only allowed knowledge.",
          "Retrieval and answers filtered by permission by default.",
          "Critical for internal vs. external, by-region or by-product, compliance.",
        ]}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RoadmapConceptBox label="What it is" delay={0.08} icon={Lock}>
            <p className="text-sm text-[#281C46]/90 leading-relaxed mb-3">
              <HighlightKey>Native ACL (Access Control List)</HighlightKey> in the knowledge layer: <strong>secure, role-based content</strong>. Different users, roles, or tenants see only the knowledge they are allowed to see. Critical for internal vs. external content, by-region or by-product policies, compliance (e.g., HR content only for HR).
            </p>
            <p className="text-xs text-[#281C46]/85 leading-relaxed">Moves access control into the knowledge layer so <strong>retrieval and answers are filtered by permission by default</strong>.</p>
          </RoadmapConceptBox>
          <RoadmapConceptBox label="Why it matters" variant="dark" delay={0.12}>
            <p className="text-sm text-white/90 leading-relaxed mb-2">
              Multi-tenant and enterprise deployments need <HighlightKey color="yellow">knowledge segmentation</HighlightKey>. Native ACL ensures the right content is exposed to the right agents and users without leaking sensitive or out-of-scope information.
            </p>
          </RoadmapConceptBox>
        </div>
        <TakeawayStrip delay={0.2}>Native ACL: secure, role-based content in the knowledge layer — right content to the right users and agents by default.</TakeawayStrip>
      </RoadmapDetailLayout>
    </div>
  </SlideWrapper>
)

// Roadmap: Trust & experience (combined — kept for backward compatibility; prefer AITrust + Invisible separate)
const RoadmapTrustSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4">
      <SectionHeader icon={Shield} title="Roadmap: Trust & experience" subtitle="AI Trust center & invisible agents" color="bg-[#281C46]" />
      <div className="grid grid-cols-2 gap-4 mt-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="bg-[#281C46] rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-[#F8D57E]/20 flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#F8D57E]" />
            </div>
            <h3 className="font-semibold text-lg">AI Trust center</h3>
          </div>
          <p className="text-sm text-white/80">
            Central place for governance, safety, and transparency: monitor model behavior, guardrails, and compliance. Governance as code; simulate outcomes before customers see them.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }} className="bg-[#F8D57E] rounded-xl p-6 border border-[#281C46]/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-[#281C46] flex items-center justify-center">
              <EyeOff className="w-6 h-6 text-[#F8D57E]" />
            </div>
            <h3 className="font-semibold text-lg text-[#281C46]">Invisible agents</h3>
          </div>
          <p className="text-sm text-[#281C46]/90">
            Agents that assist in the background — supporting humans without taking over the conversation. Background automation for IT, support, and operations.
          </p>
        </motion.div>
      </div>
      </div>
    </div>
  </SlideWrapper>
)

// Roadmap: Knowledge base enhancements (combined — kept; prefer individual KB slides)
const RoadmapKBSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex-1 min-h-0 overflow-auto p-4">
      <SectionHeader icon={BookOpen} title="Roadmap: Knowledge base enhancements" subtitle="Smarter, richer, and more controlled knowledge" color="bg-[#5A3BFE]" />
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="space-y-4">
          <RoadmapItem title="KB Quality Assessments" description="Proposes improvements to the knowledge base itself so content stays accurate and useful." delay={0.05} />
          <RoadmapItem title="Multimedia ingestion (videos)" description="Ingest and use video content as part of agent knowledge for richer answers." delay={0.15} />
        </div>
        <div className="space-y-4">
          <RoadmapItem title="Knowledge Conflict Detection" description="Surfaces conflicting information in the KB so you can resolve inconsistencies." delay={0.1} />
          <RoadmapItem title="Native ACL support" description="Access control built into the knowledge layer for secure, role-based content." delay={0.2} />
        </div>
      </div>
      </div>
    </div>
  </SlideWrapper>
)

// Summary — blurs, content from decks (no logo)
const SummarySlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col overflow-hidden">
      <div className="flex flex-1 min-h-0 overflow-hidden flex-col">
        <div className="flex-1 min-h-0 overflow-auto flex flex-col relative p-4 sm:p-6">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#5A3BFE] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F8D57E] rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>
      <SectionHeader
        icon={Rocket}
        title="What’s next"
        subtitle="Yellow.ai product roadmap"
        color="bg-[#5A3BFE]"
      />
      <motion.div
        className="mt-4 max-w-2xl text-center px-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <p className="text-[#281C46] text-sm leading-relaxed">
          Smarter agents, better tools (Nexus, MCP, orchestration), stronger trust (AI Trust
          center, invisible agents), and a more capable knowledge layer — all designed to help you
          deploy and scale AI that <span className="font-semibold text-[#5A3BFE]">thinks, acts, and resolves.</span>
        </p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
        {[
          { icon: Workflow, label: "Build", color: "bg-[#5A3BFE]" },
          { icon: Shield, label: "Test", color: "bg-[#281C46]" },
          { icon: BarChart3, label: "Optimise", color: "bg-[#0668E1]" },
          { icon: Layers, label: "Extensibility", color: "bg-[#5A3BFE]" },
        ].map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }} className={`${item.color} rounded-xl px-4 py-3 flex items-center gap-2.5 text-white shadow-lg`}>
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-bold">{item.label}</span>
            </motion.div>
          )
        })}
      </div>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-5 rounded-xl border-2 border-[#F8D57E]/40 bg-gradient-to-br from-[#F8D57E]/15 to-white p-4">
        <p className="text-sm text-[#281C46] leading-relaxed">
          <strong>One pipeline:</strong> Discover → Build → Test → Optimize. From Nexus and MCP to AI Trust center and a smarter knowledge layer — agents that stay accurate, compliant, and easy to operate at scale.
        </p>
      </motion.div>
      <TakeawayStrip delay={0.4}>Thank you — Yellow.ai product roadmap. Build, Test, Optimise, Extensibility.</TakeawayStrip>
        </div>
        <SlideFooter />
      </div>
    </div>
  </SlideWrapper>
)

const slides = [
  TitleSlide,
  CurrentCapabilitiesSlide,
  MultiLLMSlide,
  AgenticRAGSlide,
  PIIFreeLLMSlide,
  OmniChannelSlide,
  NexusReportingSlide,
  HeadlessAPISlide,
  RoadmapDividerSlide,
  RoadmapStorySlide,
  ProductArchitectureSlide,
  RoadmapBuildTestOptimiseSlide,
  // ——— Build ———
  RoadmapSectionBuildSlide,
  BuildAtGlanceSlide,
  // ——— Test ———
  RoadmapSectionTestSlide,
  TestAtGlanceSlide,
  RoadmapAITrustCenterSlide,
  RoadmapKBQualitySlide,
  RoadmapMultimediaSlide,
  RoadmapConflictDetectionSlide,
  RoadmapNativeACLSlide,
  RoadmapAutomatedTestingSlide,
  // ——— Optimise ———
  RoadmapSectionOptimiseSlide,
  OptimiseAtGlanceSlide,
  RoadmapReportingSlide,
  // ——— Extensibility ———
  RoadmapSectionExtensibilitySlide,
  ExtensibilityAtGlanceSlide,
  RoadmapHeadlessStreamingSlide,
  RoadmapMCPSlide,
  RoadmapAgentOrchestrationSlide,
  RoadmapSuperAgentRulesSlide,
  AgenticRAGAsServiceSlide,
  SummarySlide,
]

const slideNames = [
  "Title",
  "Current capabilities",
  "Multi-LLM",
  "Agentic RAG",
  "PII-free LLM",
  "Omni-channel",
  "Nexus reporting",
  "Headless API",
  "What's next",
  "Roadmap: Story",
  "Product architecture",
  "Roadmap: Build · Test · Optimise · Extensibility",
  "Build",
  "Build: At a glance",
  "Test",
  "Test: At a glance",
  "Roadmap: AI Trust center",
  "Roadmap: KB Quality",
  "Roadmap: Multimedia",
  "Roadmap: Conflict Detection",
  "Roadmap: Native ACL",
  "Roadmap: Automated testing",
  "Optimise",
  "Optimise: At a glance",
  "Roadmap: Reporting",
  "Extensibility",
  "Extensibility: At a glance",
  "Roadmap: Headless API & streaming",
  "Roadmap: MCP",
  "Roadmap: Agent orchestration",
  "Roadmap: Super Agent Rules (P0)",
  "Agentic RAG as a service",
  "Summary",
]

export default function DocusingPresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToSlide = useCallback(
    (index: number) => {
      if (index >= 0 && index < slides.length) {
        setDirection(index > currentSlide ? 1 : -1)
        setCurrentSlide(index)
      }
    },
    [currentSlide]
  )

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide((prev) => prev + 1)
    }
  }, [currentSlide])

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

  const CurrentSlideComponent = slides[currentSlide]

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
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-white/90 backdrop-blur-sm border-t border-white/50 px-6 py-3">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto">
          <div className="flex items-center gap-1 flex-wrap max-h-14 overflow-y-auto overflow-x-hidden">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#5A3BFE] text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {slideNames[index]}
              </button>
            ))}
          </div>
          <div className="text-sm text-slate-500 font-medium flex-shrink-0 ml-2">
            {currentSlide + 1} / {slides.length}
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
              disabled={currentSlide === slides.length - 1}
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
