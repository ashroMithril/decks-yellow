"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mic,
  MessageSquare,
  Brain,
  Zap,
  BarChart3,
  Users,
  Bot,
  Workflow,
  Globe,
  Lightbulb,
  Shield,
  Mail,
  Phone,
  MessageCircle,
  RefreshCw,
  PieChart,
  Activity,
  Headphones,
  Gauge,
  Rocket,
  Instagram,
  Smartphone,
  Lock,
  FileKey,
  ShieldAlert,
  UserCheck,
  Bell,
  HandHelping as HandHelp,
  Languages,
  ChevronLeft,
  ChevronRight,
  Target,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Heart,
  Star,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  ShoppingCart,
  Plane,
  Banknote,
  Stethoscope,
  GraduationCap,
  Factory,
  Play,
  Quote,
  Calendar,
  Handshake,
  ListOrdered,
  Map,
  FlaskConical,
  MessageSquareDashed,
  Layers,
  Network,
  Cloud,
  Store,
  Trophy,
  FileText,
  PhoneOutgoing,
  Code,
  Code2,
  FileCode,
  ArrowLeftRight,
  Server,
  Maximize2,
  X,
  ExternalLink,
  type LucideIcon,
} from "lucide-react"

// Slide data structure
interface SlideData {
  id: number
  type: "title" | "content" | "stats" | "features" | "architecture" | "comparison" | "testimonial" | "cta" | "demo"
  title: string
  subtitle?: string
  content?: React.ReactNode
}

// Reusable animated box component
const AnimatedBox = ({ 
  children, 
  delay = 0, 
  className = "",
  variant = "default"
}: { 
  children: React.ReactNode
  delay?: number
  className?: string
  variant?: "default" | "yellow" | "purple" | "dark" | "white"
}) => {
  const variants = {
    default: "bg-white border border-[#5A3BFE]/20",
    yellow: "bg-[#F8D57E] border border-[#F8D57E]/50",
    purple: "bg-[#5A3BFE] border border-[#5A3BFE]/50",
    dark: "bg-[#281C46] border border-[#281C46]/20",
    white: "bg-white border-2 border-[#5A3BFE]/40"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-lg shadow-sm ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Feature card component
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="bg-gray-50 backdrop-blur-sm border border-[#5A3BFE]/20 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="flex items-center mb-2">
      <Icon className="w-6 h-6 mr-2 text-[#5A3BFE]" />
      <h4 className="font-semibold text-lg text-black">{title}</h4>
    </div>
    <p className="text-sm text-[#281C46]">{description}</p>
  </motion.div>
)

// Stat card component
const StatCard = ({ 
  value, 
  label, 
  icon: Icon, 
  delay = 0 
}: { 
  value: string
  label: string
  icon: LucideIcon
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white border-2 border-[#5A3BFE]/40 rounded-xl p-6 text-center shadow-lg"
  >
    <Icon className="w-8 h-8 mx-auto mb-3 text-[#5A3BFE]" />
    <div className="text-4xl font-bold text-[#5A3BFE] mb-2">{value}</div>
    <div className="text-sm text-[#281C46] font-medium">{label}</div>
  </motion.div>
)

// Slide 0: Welcome Slide - Forrester Wave
const WelcomeSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8 relative overflow-hidden">
    {/* Background decorative elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#5A3BFE] rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F8D57E] rounded-full blur-3xl" />
    </motion.div>

    {/* Yellow.ai Logo at top */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <img 
        src="/yellow logo.png" 
        alt="Yellow.ai" 
        className="h-14 w-auto object-contain"
      />
    </motion.div>

    {/* Forrester Wave Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-8"
    >
      <div className="inline-flex items-center bg-[#281C46] text-white px-6 py-3 rounded-full shadow-lg">
        <span className="text-lg font-semibold">The Forrester Wave™</span>
      </div>
    </motion.div>

    {/* Main Title */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="text-5xl md:text-6xl font-bold text-black mb-4 max-w-4xl leading-tight"
    >
      Conversational AI Platforms
      <br />
      <span className="text-[#5A3BFE]">for Customer Service</span>
    </motion.h1>

    {/* Quarter Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="mb-8"
    >
      <span className="text-2xl font-semibold text-[#281C46]">Q2 2026</span>
    </motion.div>

    {/* Date badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="mb-8"
    >
      <div className="inline-flex items-center bg-[#F8D57E] text-[#281C46] px-5 py-2 rounded-full shadow-md">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="font-medium">21st January 2025</span>
      </div>
    </motion.div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="text-lg text-[#281C46]/80 max-w-2xl"
    >
      Vendor Briefing Presentation
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="mt-12 flex items-center text-[#5A3BFE]"
    >
      <span className="text-sm mr-2">Press arrow keys to navigate</span>
      <ArrowRight className="w-4 h-4 animate-pulse" />
    </motion.div>
  </div>
)

// Slide 1: Table of Contents
const TableOfContentsSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-8"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <ListOrdered className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Agenda</h2>
        <p className="text-[#281C46]">Session Overview • 3 Hours Total</p>
      </div>
    </motion.div>

    <div className="flex-1 flex flex-col justify-center">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-[#281C46] px-6 py-4 grid grid-cols-[1fr,auto] gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white font-semibold text-lg"
          >
            Section
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white font-semibold text-lg text-right"
          >
            Time Allocation
          </motion.div>
        </div>

        {/* Table Rows */}
        {[
          { section: "Strategy and Company Overview Presentation", time: "30 minutes", highlight: false },
          { section: "Current Offering Demonstration – includes:", time: "150 minutes", highlight: true, isParent: true },
          { section: "Platform architecture and demonstration context setting presentation", time: "30 minutes", indent: true },
          { section: "Customer Experience Demonstration", time: "30 minutes", indent: true },
          { section: "Administrator / Developer Experience Demonstration", time: "90 minutes", indent: true },
        ].map((item, index) => (
          <motion.div
            key={item.section}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className={`px-6 py-5 grid grid-cols-[1fr,auto] gap-4 items-center border-b border-gray-100 last:border-b-0 ${
              item.highlight ? "bg-[#5A3BFE]/5" : item.indent ? "bg-gray-50" : ""
            }`}
          >
            <div className={`flex items-center ${item.indent ? "pl-8" : ""}`}>
              {item.indent && (
                <div className="w-2 h-2 rounded-full bg-[#5A3BFE] mr-3" />
              )}
              <span className={`${item.highlight ? "font-semibold text-[#5A3BFE]" : item.indent ? "text-[#281C46]/80" : "text-[#281C46]"} text-lg`}>
                {item.section}
              </span>
            </div>
            <div className={`text-right ${item.highlight ? "font-bold text-[#5A3BFE]" : "text-[#281C46]/70"}`}>
              <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
                item.highlight 
                  ? "bg-[#5A3BFE] text-white" 
                  : item.isParent 
                  ? "bg-[#F8D57E] text-[#281C46]"
                  : "bg-gray-100 text-[#281C46]"
              }`}>
                <Clock className="w-4 h-4 mr-2" />
                {item.time}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Total Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="px-6 py-5 grid grid-cols-[1fr,auto] gap-4 items-center bg-[#F8D57E]"
        >
          <div className="font-bold text-[#281C46] text-xl">Total Session Duration</div>
          <div>
            <span className="inline-flex items-center px-5 py-2 rounded-full text-base font-bold bg-[#281C46] text-white">
              <Clock className="w-5 h-5 mr-2" />
              3 Hours
            </span>
          </div>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="mt-6 text-center text-[#281C46]/60 text-sm"
    >
      Interactive Q&A welcome throughout the session
    </motion.div>
  </div>
)

// Slide 2: Section Title - Strategy and Company Overview
const StrategyOverviewSectionSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8 relative overflow-hidden">
    {/* Background decorative elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#5A3BFE] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F8D57E] rounded-full blur-3xl" />
    </motion.div>

    {/* Section Number Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-[#5A3BFE] rounded-full shadow-xl">
        <span className="text-3xl font-bold text-white">01</span>
      </div>
    </motion.div>

    {/* Section Title */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-5xl md:text-6xl font-bold text-black mb-4"
    >
      Strategy &
      <br />
      <span className="text-[#5A3BFE]">Company Overview</span>
    </motion.h1>

    {/* Divider Line */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-32 h-1 bg-[#F8D57E] rounded-full my-6"
    />

    {/* Time Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="flex items-center gap-2"
    >
      <div className="inline-flex items-center bg-[#281C46] text-white px-5 py-2.5 rounded-full shadow-lg">
        <Clock className="w-5 h-5 mr-2" />
        <span className="font-semibold">30 Minutes</span>
      </div>
    </motion.div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="mt-8 text-lg text-[#281C46]/70 max-w-xl"
    >
      Yellow.ai vision, market position, and strategic direction
    </motion.p>

    {/* Decorative dots */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="absolute bottom-12 flex gap-2"
    >
      <div className="w-2 h-2 rounded-full bg-[#5A3BFE]" />
      <div className="w-2 h-2 rounded-full bg-[#F8D57E]" />
      <div className="w-2 h-2 rounded-full bg-[#281C46]" />
    </motion.div>
  </div>
)

// Slide 3: Vision Slide
const VisionSlide = () => (
  <div className="flex flex-col h-full px-16 py-8 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-8"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Sparkles className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Our Vision</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium">The <span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Universal Agentic Interface</span> for Building Agents & Automations</p>
      <p className="text-[#281C46]/60 text-sm mt-1">From Generative to Agentic AI</p>
    </motion.div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
        >
          <h3 className="text-lg font-bold text-white flex items-center">
            <Target className="w-5 h-5 mr-2 text-[#F8D57E]" />
            The Autonomous Enterprise
          </h3>
          <p className="text-white/90 leading-relaxed text-sm mt-3">
            Yellow.ai's vision is to transition the market from <span className="font-semibold text-[#F8D57E]">"Generative" to "Agentic AI,"</span> shifting enterprise automation from simple conversation to autonomous execution.
          </p>
          <p className="text-white/80 leading-relaxed text-sm mt-3">
            We envision an <span className="font-semibold text-white">Autonomous Enterprise</span> where AI agents actively <span className="text-[#F8D57E]">plan, reason, and execute</span> complex cross-functional workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center">
            <Mic className="w-5 h-5 mr-2" />
            Voice-First Future
          </h4>
          <p className="text-[#281C46]/90 text-sm leading-relaxed mt-2">
            Replacing legacy IVR with <span className="font-semibold">VoiceX</span>—human-like voice AI handling interruptions and executing tasks in real-time.
          </p>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm flex items-start"
        >
          <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 mr-4">
            <Award className="w-5 h-5 text-[#5A3BFE]" />
          </div>
          <div>
            <h4 className="font-bold text-black text-base">Outcome-Based Positioning</h4>
            <p className="text-[#281C46]/70 text-sm leading-relaxed mt-1">
              Forces the market to compete on <span className="font-semibold text-[#5A3BFE]">measurable outcomes</span> rather than feature parity.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm flex items-start"
        >
          <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 mr-4">
            <Zap className="w-5 h-5 text-[#5A3BFE]" />
          </div>
          <div>
            <h4 className="font-bold text-black text-base">Voice-to-Voice LLM & Adaptation</h4>
            <p className="text-[#281C46]/70 text-sm leading-relaxed mt-1">
              <span className="font-semibold">"Voice-to-Voice" LLMs</span> deliver <span className="font-semibold text-[#5A3BFE]">sub-500ms latency</span> with real-time language adaptation.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md flex items-start"
        >
          <div className="bg-[#281C46] rounded-xl p-2.5 mr-4">
            <Sparkles className="w-5 h-5 text-[#F8D57E]" />
          </div>
          <div>
            <h4 className="font-bold text-[#281C46] text-base">Nexus: Universal Agentic Interface</h4>
            <p className="text-[#281C46]/80 text-sm leading-relaxed mt-1">
              The industry's first <span className="font-semibold">UAI</span> — a unified control plane with eyes to analyze, hands to build, and authority to execute.
            </p>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom Example */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-8 bg-[#281C46] rounded-2xl px-6 py-4 flex items-center justify-center gap-4 max-w-5xl mx-auto w-full"
    >
      <Phone className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Example:</span> A Domino's customer calls to modify their order — the Voice AI checks order status, coordinates with kitchen, updates delivery timing, and confirms — all in one natural conversation
      </p>
    </motion.div>
  </div>
)

// Slide 4: Roadmap Slide
const RoadmapSlide = () => (
  <div className="flex flex-col h-full px-12 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Map className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Product Roadmap</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium">From <span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Interaction</span> to <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">Orchestration</span></p>
    </motion.div>

    {/* Timeline Roadmap */}
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full mb-5">
      {/* Immediate Term */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-[#F8D57E] text-[#281C46] text-xs font-bold px-3 py-1 rounded-bl-xl">
          0-6 MONTHS
        </div>
        <div className="bg-white/20 rounded-xl p-2 w-fit mb-3 mt-2">
          <Rocket className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Immediate Term</h3>
        <ul className="text-white/90 text-sm space-y-2">
          <li className="flex items-start">
            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-[#F8D57E] flex-shrink-0" />
            <span><span className="font-semibold text-[#F8D57E]">VoiceX Stability</span> — Sub-500ms latency with adaptation</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-[#F8D57E] flex-shrink-0" />
            <span><span className="font-semibold text-[#F8D57E]">Zero-Setup Automation</span> — Rapid deployment from existing data</span>
          </li>
        </ul>
        <div className="mt-3 pt-3 border-t border-white/20">
          <p className="text-white/70 text-xs italic">Focus: Reduce "Time to Value" for frictionless adoption</p>
        </div>
      </motion.div>

      {/* Medium Term */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-[#281C46] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
          6-12 MONTHS
        </div>
        <div className="bg-[#281C46] rounded-xl p-2 w-fit mb-3 mt-2">
          <Layers className="w-5 h-5 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-2">Medium Term</h3>
        <ul className="text-[#281C46]/90 text-sm space-y-2">
          <li className="flex items-start">
            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-[#281C46] flex-shrink-0" />
            <span><span className="font-semibold">"Invisible Agents"</span> — Background automation for IT/Support</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-[#281C46] flex-shrink-0" />
            <span><span className="font-semibold">MCP Marketplace</span> — Model Context Protocol ecosystem</span>
          </li>
        </ul>
        <div className="mt-3 pt-3 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/70 text-xs italic">Focus: Deep enterprise integration capabilities</p>
        </div>
      </motion.div>

      {/* Long Term */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-[#5A3BFE] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
          2026+
        </div>
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2 w-fit mb-3 mt-2">
          <Sparkles className="w-5 h-5 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-2">Long Term</h3>
        <ul className="text-[#281C46]/90 text-sm space-y-2">
          <li className="flex items-start">
            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-[#5A3BFE] flex-shrink-0" />
            <span><span className="font-semibold text-[#5A3BFE]">"AI-AI Collaboration"</span> — Multi-agent orchestration</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-[#5A3BFE] flex-shrink-0" />
            <span><span className="font-semibold text-[#5A3BFE]">Enterprise AI Operator</span> — Fully autonomous org</span>
          </li>
        </ul>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs italic">Vision: The fully autonomous enterprise</p>
        </div>
      </motion.div>
    </div>

    {/* Customer Input Section - Full Width */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65 }}
      className="bg-[#281C46] rounded-2xl p-5 shadow-lg max-w-6xl mx-auto w-full"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <MessageSquareDashed className="w-5 h-5 text-[#F8D57E] mr-3" />
          <h4 className="font-bold text-white text-base">Customer-Driven Roadmap</h4>
        </div>
        <p className="text-white/60 text-sm">Prioritization: Customer Impact × Market Relevance × Technical Feasibility</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white/10 rounded-xl p-3 flex items-center">
          <div className="bg-[#F8D57E] rounded-lg p-2 mr-3">
            <Users className="w-4 h-4 text-[#281C46]" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Voice of Customer</p>
            <p className="text-white/60 text-xs">Regular feedback loops with power users</p>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 flex items-center">
          <div className="bg-[#F8D57E] rounded-lg p-2 mr-3">
            <Handshake className="w-4 h-4 text-[#281C46]" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Beta Cohorts</p>
            <p className="text-white/60 text-xs">Enterprise ICP co-development</p>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 flex items-center">
          <div className="bg-[#F8D57E] rounded-lg p-2 mr-3">
            <Activity className="w-4 h-4 text-[#281C46]" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Telemetry</p>
            <p className="text-white/60 text-xs">Data-driven roadmap suggestions</p>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Bottom Note */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-5 bg-[#5A3BFE]/5 border border-[#5A3BFE]/20 rounded-xl px-5 py-3 flex items-center justify-center gap-3 max-w-6xl mx-auto w-full"
    >
      <Clock className="w-4 h-4 text-[#5A3BFE] flex-shrink-0" />
      <p className="text-[#281C46] text-sm">
        <span className="font-semibold">Delivery Track Record:</span> 12-month rollout guidance with agile research process • Major items like VoiceX and Agentic Discovery delivered on schedule
      </p>
    </motion.div>
  </div>
)

// Slide 5: Innovation Slide
const InnovationSlide = () => (
  <div className="flex flex-col h-full px-16 py-8 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-8"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Lightbulb className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Innovation</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium">Investing <span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">~27% of Revenue</span> in R&D</p>
      <p className="text-[#281C46]/60 text-sm mt-1">Building a Defensive Moat Through Proprietary AI</p>
    </motion.div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto w-full">
      {/* Column 1 - Proprietary Models */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2.5 w-fit mb-3">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Proprietary LLMs</h3>
        <p className="text-white/90 leading-relaxed text-sm">
          <span className="font-semibold text-[#F8D57E]">Komodo & YellowG</span> — purpose-built models for enterprise domains, moving beyond GPT-4 API wrappers.
        </p>
        <div className="mt-4 pt-3 border-t border-white/20">
          <p className="text-white/70 text-xs">
            Komodo: 7B parameter model for Bahasa Indonesian
          </p>
        </div>
      </motion.div>

      {/* Column 2 - Agentic Architecture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2.5 w-fit mb-3">
          <Workflow className="w-6 h-6 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-2">Agentic Architecture</h3>
        <p className="text-[#281C46]/90 leading-relaxed text-sm">
          <span className="font-semibold">Agentic RAG</span> with semantic chunking and multi-step reasoning for complex workflows.
        </p>
        <div className="mt-4 pt-3 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/70 text-xs">
            Enables autonomous planning, reasoning & execution
          </p>
        </div>
      </motion.div>

      {/* Column 3 - Zero Setup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 w-fit mb-3">
          <Rocket className="w-6 h-6 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-2">Nexus (UAI)</h3>
        <p className="text-[#281C46]/80 leading-relaxed text-sm">
          Universal Agentic Interface — <span className="font-semibold text-[#5A3BFE]">eyes to analyze, hands to build, authority to execute</span>.
        </p>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs">
            Reduces TCO by up to 60%
          </p>
        </div>
      </motion.div>
    </div>

    {/* Second Row - Additional Innovation Highlights */}
    <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto w-full mt-5">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.65 }}
        className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-4 shadow-sm flex items-center"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 mr-4">
          <Globe className="w-5 h-5 text-[#5A3BFE]" />
        </div>
        <div>
          <h4 className="font-bold text-black text-sm">Sovereign Language Models</h4>
          <p className="text-[#281C46]/70 text-xs mt-0.5">
            Region-specific models outperforming US-centric alternatives in local markets
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-4 shadow-sm flex items-center"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 mr-4">
          <Zap className="w-5 h-5 text-[#5A3BFE]" />
        </div>
        <div>
          <h4 className="font-bold text-black text-sm">Sub-Second Voice Latency</h4>
          <p className="text-[#281C46]/70 text-xs mt-0.5">
            Proprietary Voice-to-Voice LLMs bypass traditional STT for real-time response
          </p>
        </div>
      </motion.div>
    </div>

    {/* Bottom Highlight */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-6 bg-[#281C46] rounded-2xl px-6 py-4 flex items-center justify-center gap-4 max-w-5xl mx-auto w-full"
    >
      <Activity className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Key Differentiator:</span> Multi-LLM Orchestration — intelligently routing tasks to the optimal model (GPT-4, Claude, Gemini, or proprietary YellowG) for performance, cost, and latency
      </p>
    </motion.div>
  </div>
)

// Slide 6: Partnerships Slide
const PartnershipsSlide = () => (
  <div className="flex flex-col h-full px-12 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Handshake className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Partnerships</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium">Strategic Pivot to <span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Partner-Led Growth</span></p>
    </motion.div>

    {/* Partner Categories */}
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full mb-5">
      {/* Deployment Partners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2 w-fit mb-3">
          <Building2 className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Deployment Partners</h3>
        <p className="text-white/80 text-sm mb-3">Global System Integrators</p>
        <div className="flex flex-wrap gap-2">
          {["TCS", "HCLTech", "Tech Mahindra", "Teleperformance"].map((partner) => (
            <span key={partner} className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-medium">
              {partner}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-white/20">
          <p className="text-white/70 text-xs italic">Scale without OPEX — Execute massive global deployments</p>
        </div>
      </motion.div>

      {/* Technology Partners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2 w-fit mb-3">
          <Cloud className="w-5 h-5 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-2">Technology Partners</h3>
        <p className="text-[#281C46]/80 text-sm mb-3">Cloud, Enterprise & Telco</p>
        <div className="flex flex-wrap gap-2">
          {["AWS", "Microsoft", "SAP", "Salesforce", "Telco Accelerators"].map((partner) => (
            <span key={partner} className="bg-[#281C46] text-white text-xs px-2.5 py-1 rounded-full font-medium">
              {partner}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/70 text-xs italic">Voice-to-Voice distribution via major telcos</p>
        </div>
      </motion.div>

      {/* Vertical Partners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2 w-fit mb-3">
          <Store className="w-5 h-5 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-2">Vertical & Distribution</h3>
        <p className="text-[#281C46]/80 text-sm mb-3">Industry & Channel Partners</p>
        <div className="flex flex-wrap gap-2">
          {["Innovaccer", "Simpplr", "Avant", "TSDs"].map((partner) => (
            <span key={partner} className="bg-[#5A3BFE]/10 text-[#5A3BFE] text-xs px-2.5 py-1 rounded-full font-medium">
              {partner}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs italic">US distribution via Avant & TSDs for contact center reach</p>
        </div>
      </motion.div>
    </div>

    {/* Awards & Recognition */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65 }}
      className="bg-[#281C46] rounded-2xl p-5 shadow-lg max-w-6xl mx-auto w-full mb-5"
    >
      <div className="flex items-center mb-4">
        <Trophy className="w-5 h-5 text-[#F8D57E] mr-3" />
        <h4 className="font-bold text-white text-base">Awards & Recognition</h4>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/10 rounded-xl p-3 flex items-center">
          <div className="bg-[#F8D57E] rounded-lg p-2 mr-3">
            <Award className="w-4 h-4 text-[#281C46]" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Gartner Magic Quadrant</p>
            <p className="text-white/60 text-xs">"Challenger" — 2025</p>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 flex items-center">
          <div className="bg-[#F8D57E] rounded-lg p-2 mr-3">
            <Award className="w-4 h-4 text-[#281C46]" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Microsoft Partner of the Year</p>
            <p className="text-white/60 text-xs">India — 2024</p>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-3 flex items-center">
          <div className="bg-[#F8D57E] rounded-lg p-2 mr-3">
            <Award className="w-4 h-4 text-[#281C46]" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">Top IP Co-Sell Partner</p>
            <p className="text-white/60 text-xs">Microsoft Azure</p>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Market Leverage */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="grid grid-cols-3 gap-4 max-w-6xl mx-auto w-full"
    >
      <div className="bg-white border border-[#5A3BFE]/20 rounded-xl p-4 flex items-start">
        <div className="bg-[#5A3BFE]/10 rounded-lg p-2 mr-3 flex-shrink-0">
          <Users className="w-4 h-4 text-[#5A3BFE]" />
        </div>
        <div>
          <p className="text-black font-semibold text-sm">Scale Without OPEX</p>
          <p className="text-[#281C46]/70 text-xs mt-0.5">GSI partnerships enable global deployments (e.g., Kenvue) without large internal PS workforce</p>
        </div>
      </div>
      <div className="bg-white border border-[#5A3BFE]/20 rounded-xl p-4 flex items-start">
        <div className="bg-[#5A3BFE]/10 rounded-lg p-2 mr-3 flex-shrink-0">
          <Shield className="w-4 h-4 text-[#5A3BFE]" />
        </div>
        <div>
          <p className="text-black font-semibold text-sm">Vertical Credibility</p>
          <p className="text-[#281C46]/70 text-xs mt-0.5">Innovaccer & Simpplr provide compliance readiness in Healthcare & HR</p>
        </div>
      </div>
      <div className="bg-white border border-[#5A3BFE]/20 rounded-xl p-4 flex items-start">
        <div className="bg-[#5A3BFE]/10 rounded-lg p-2 mr-3 flex-shrink-0">
          <Zap className="w-4 h-4 text-[#5A3BFE]" />
        </div>
        <div>
          <p className="text-black font-semibold text-sm">Marketplace Friction Reduction</p>
          <p className="text-[#281C46]/70 text-xs mt-0.5">AWS, SAP, Salesforce marketplaces let buyers use committed cloud spend</p>
        </div>
      </div>
    </motion.div>

    {/* Bottom Enablement Note */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.95 }}
      className="mt-5 bg-[#5A3BFE]/5 border border-[#5A3BFE]/20 rounded-xl px-5 py-3 flex items-center justify-center gap-3 max-w-6xl mx-auto w-full"
    >
      <Network className="w-4 h-4 text-[#5A3BFE] flex-shrink-0" />
      <p className="text-[#281C46] text-sm">
        <span className="font-semibold">Partner Enablement:</span> 150+ pre-built templates • No-Code Agent Builder • Deploy solutions in under a week
      </p>
    </motion.div>
  </div>
)

// Slide 7: Pricing Flexibility Slide
const PricingSlide = () => (
  <div className="flex flex-col h-full px-12 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <DollarSign className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Pricing Flexibility</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium">Flexible: <span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Platform Fee</span> + <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">Usage or Outcome</span></p>
      <p className="text-[#281C46]/60 text-sm mt-1">Choose Between Consumption-Based or Outcome-Based Pricing</p>
    </motion.div>

    {/* Pricing Models */}
    <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto w-full mb-5">
      {/* Platform Fee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2 w-fit mb-3">
          <Calendar className="w-5 h-5 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-2">Base Platform Fee</h3>
        <p className="text-[#281C46]/80 text-sm leading-relaxed">
          Recurring license for platform access with predictable costs.
        </p>
        <div className="mt-4 pt-3 border-t border-[#281C46]/20">
          <div className="flex items-center text-[#281C46]/70 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            <span>Predictable budgeting</span>
          </div>
        </div>
      </motion.div>

      {/* Usage-Based */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2 w-fit mb-3">
          <Activity className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">Usage-Based</h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Consumption-driven fees based on <span className="font-semibold text-[#F8D57E]">conversations</span> or interactions.
        </p>
        <div className="mt-4 pt-3 border-t border-white/20">
          <div className="flex items-center text-white/70 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            <span>Scales with volume</span>
          </div>
        </div>
      </motion.div>

      {/* Outcome-Based */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2 w-fit mb-3">
          <Target className="w-5 h-5 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-2">Outcome-Based</h3>
        <p className="text-[#281C46]/80 text-sm leading-relaxed">
          Pay for <span className="font-semibold text-[#5A3BFE]">resolutions</span> — actual task completions with due diligence.
        </p>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center text-[#281C46]/60 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            <span>Pay for value delivered</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Vision Alignment */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
      className="bg-[#281C46] rounded-2xl p-5 shadow-lg max-w-5xl mx-auto w-full mb-5"
    >
      <div className="flex items-center mb-3">
        <Target className="w-5 h-5 text-[#F8D57E] mr-3" />
        <h4 className="font-bold text-white text-base">Aligned with Agentic AI Vision</h4>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/10 rounded-xl p-3">
          <p className="text-white font-medium text-sm mb-1">Resolution-Based</p>
          <p className="text-white/60 text-xs">Incentivizes agents that complete tasks, not just chat volume</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3">
          <p className="text-white font-medium text-sm mb-1">Scales with Success</p>
          <p className="text-white/60 text-xs">Revenue grows only when customer automation scales</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3">
          <p className="text-white font-medium text-sm mb-1">Value Creation Focus</p>
          <p className="text-white/60 text-xs">Shift from "cost savings" to measurable outcomes</p>
        </div>
      </div>
    </motion.div>

    {/* Flexibility & Friction */}
    <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto w-full">
      {/* Flexibility - Ease */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white border-2 border-green-200 rounded-2xl p-4 shadow-sm"
      >
        <div className="flex items-center mb-3">
          <div className="bg-green-100 rounded-lg p-2 mr-3">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
          </div>
          <h4 className="font-bold text-black text-sm">What Eases Adoption</h4>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-green-500 mr-2">•</span>
            <span><span className="font-medium text-black">PLG Self-Signup</span> — Self sign-up, upgrade & start using instantly</span>
          </li>
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-green-500 mr-2">•</span>
            <span><span className="font-medium text-black">Base Tier</span> — <span className="font-semibold text-[#5A3BFE]">$450/month</span> + <span className="font-semibold text-[#5A3BFE]">$1/conversation</span></span>
          </li>
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-green-500 mr-2">•</span>
            <span><span className="font-medium text-black">Free Tier</span> available for evaluation</span>
          </li>
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-green-500 mr-2">•</span>
            <span><span className="font-medium text-black">Marketplace Purchase</span> via AWS/SAP (use committed spend)</span>
          </li>
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-green-500 mr-2">•</span>
            <span><span className="font-medium text-black">Geography-Based Rates</span> (e.g., India vs. ROW)</span>
          </li>
        </ul>
      </motion.div>

      {/* Friction Points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-white border-2 border-amber-200 rounded-2xl p-4 shadow-sm"
      >
        <div className="flex items-center mb-3">
          <div className="bg-amber-100 rounded-lg p-2 mr-3">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
          </div>
          <h4 className="font-bold text-black text-sm">Considerations</h4>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-amber-500 mr-2">•</span>
            <span><span className="font-medium text-black">Custom Pricing</span> — "Contact Us" model less predictable for SMBs</span>
          </li>
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-amber-500 mr-2">•</span>
            <span><span className="font-medium text-black">Competitive Pressure</span> — Microsoft bundles similar capabilities</span>
          </li>
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-amber-500 mr-2">•</span>
            <span><span className="font-medium text-black">Transparency</span> — Mid-market prefers simple seat-based pricing</span>
          </li>
        </ul>
      </motion.div>
    </div>

    {/* Bottom Note */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.85 }}
      className="mt-5 bg-[#5A3BFE]/5 border border-[#5A3BFE]/20 rounded-xl px-5 py-3 flex items-center justify-center gap-3 max-w-5xl mx-auto w-full"
    >
      <Sparkles className="w-4 h-4 text-[#5A3BFE] flex-shrink-0" />
      <p className="text-[#281C46] text-sm">
        <span className="font-semibold">Key Differentiator:</span> Pricing tied to outcomes ensures customer success = Yellow.ai success
      </p>
    </motion.div>
  </div>
)

// Slide 8: Supporting & Professional Services Slide
const ServicesSlide = () => (
  <div className="flex flex-col h-full px-12 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-5"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Headphones className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Supporting & Professional Services</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium">The <span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">"Blended Pod"</span> Model for Deployment Success</p>
    </motion.div>

    {/* Initial Deployment Services */}
    <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto w-full mb-4">
      {/* Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-4 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2 w-fit mb-2">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base font-bold text-white mb-1">Strategy</h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Design thinking workshops and persona definition to align AI with business goals.
        </p>
      </motion.div>

      {/* Implementation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-[#F8D57E] rounded-2xl p-4 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2 w-fit mb-2">
          <Workflow className="w-5 h-5 text-[#F8D57E]" />
        </div>
        <h3 className="text-base font-bold text-[#281C46] mb-1">Implementation</h3>
        <p className="text-[#281C46]/80 text-sm leading-relaxed">
          Configuration of intents, entities, and integrations via Generic Integration Framework.
        </p>
      </motion.div>

      {/* Timelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-4 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2 w-fit mb-2">
          <Clock className="w-5 h-5 text-[#5A3BFE]" />
        </div>
        <h3 className="text-base font-bold text-black mb-1">Timelines</h3>
        <div className="space-y-1">
          <p className="text-[#281C46]/80 text-sm"><span className="font-semibold text-[#5A3BFE]">&lt;1 week</span> — Simple deployments</p>
          <p className="text-[#281C46]/80 text-sm"><span className="font-semibold text-[#5A3BFE]">2-5 weeks</span> — Complex enterprise (with Nexus)</p>
        </div>
      </motion.div>
    </div>

    {/* Partner Deployments & Enablement */}
    <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto w-full mb-4">
      {/* Partner Stats */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-[#281C46] rounded-2xl p-4 shadow-lg"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Handshake className="w-5 h-5 text-[#F8D57E] mr-2" />
            <h4 className="font-bold text-white text-sm">Partner Deployments</h4>
          </div>
          <span className="bg-[#F8D57E] text-[#281C46] text-sm px-3 py-1 rounded-full font-bold">Growing</span>
        </div>
        <p className="text-white/70 text-xs mb-3">Accelerating with GSI pipeline — Yellow owns customer success relationship</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <Layers className="w-4 h-4 text-[#F8D57E] mx-auto mb-1" />
            <p className="text-white/80 text-xs">150+ Templates</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <Bot className="w-4 h-4 text-[#F8D57E] mx-auto mb-1" />
            <p className="text-white/80 text-xs">No-Code Builder</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2 text-center">
            <Award className="w-4 h-4 text-[#F8D57E] mx-auto mb-1" />
            <p className="text-white/80 text-xs">Certification</p>
          </div>
        </div>
      </motion.div>

      {/* Partner Success */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-4 shadow-sm"
      >
        <div className="flex items-center mb-3">
          <div className="bg-[#5A3BFE]/10 rounded-lg p-2 mr-2">
            <CheckCircle2 className="w-4 h-4 text-[#5A3BFE]" />
          </div>
          <h4 className="font-bold text-black text-sm">Ensuring Partner Success</h4>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-[#5A3BFE] mr-2 font-bold">•</span>
            <span><span className="font-medium text-black">Enablement Assets</span> — Standardized templates for delivery quality</span>
          </li>
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-[#5A3BFE] mr-2 font-bold">•</span>
            <span><span className="font-medium text-black">Co-Innovation</span> — Joint projects with GSIs (e.g., HCLTech)</span>
          </li>
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-[#5A3BFE] mr-2 font-bold">•</span>
            <span><span className="font-medium text-black">Certification Program</span> — "Conversational AI Professional"</span>
          </li>
        </ul>
      </motion.div>
    </div>

    {/* Ongoing Customer Success */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="bg-gradient-to-r from-[#5A3BFE]/10 to-[#F8D57E]/20 border border-[#5A3BFE]/20 rounded-2xl p-4 max-w-6xl mx-auto w-full"
    >
      <div className="flex items-center mb-3">
        <Heart className="w-5 h-5 text-[#5A3BFE] mr-2" />
        <h4 className="font-bold text-black text-base">Ongoing Customer Success</h4>
        <span className="ml-auto bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium">Included Post Go-Live</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex items-start">
          <div className="bg-white rounded-lg p-2 mr-3 shadow-sm flex-shrink-0">
            <UserCheck className="w-4 h-4 text-[#5A3BFE]" />
          </div>
          <div>
            <p className="text-black font-semibold text-sm">Customer Success Layer</p>
            <p className="text-[#281C46]/70 text-xs">Included without additional cost to monitor retention</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-white rounded-lg p-2 mr-3 shadow-sm flex-shrink-0">
            <BarChart3 className="w-4 h-4 text-[#5A3BFE]" />
          </div>
          <div>
            <p className="text-black font-semibold text-sm">Quarterly Business Reviews</p>
            <p className="text-[#281C46]/70 text-xs">Analyze deflection gaps & propose new automations</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-white rounded-lg p-2 mr-3 shadow-sm flex-shrink-0">
            <Gauge className="w-4 h-4 text-[#5A3BFE]" />
          </div>
          <div>
            <p className="text-black font-semibold text-sm">Self-Service Tools</p>
            <p className="text-[#281C46]/70 text-xs">"Analyze" dashboard & Agentic Co-Pilot for optimization</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-white rounded-lg p-2 mr-3 shadow-sm flex-shrink-0">
            <Headphones className="w-4 h-4 text-[#5A3BFE]" />
          </div>
          <div>
            <p className="text-black font-semibold text-sm">24/7 Support Team</p>
            <p className="text-[#281C46]/70 text-xs">Available post go-live throughout subscription</p>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Bottom Note */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.85 }}
      className="mt-4 bg-[#281C46] rounded-xl px-5 py-3 flex items-center justify-center gap-3 max-w-6xl mx-auto w-full"
    >
      <Rocket className="w-4 h-4 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white text-sm">
        <span className="text-[#F8D57E] font-semibold">Blended Pod Advantage:</span> Cross-functional teams (Strategy + Implementation + Success) ensure end-to-end accountability
      </p>
    </motion.div>
  </div>
)

// Slide 9: Section Title - Current Offering Demonstration
const DemoSectionSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8 relative overflow-hidden">
    {/* Background decorative elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#5A3BFE] rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F8D57E] rounded-full blur-3xl" />
    </motion.div>

    {/* Section Number Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-[#5A3BFE] rounded-full shadow-xl">
        <span className="text-3xl font-bold text-white">02</span>
      </div>
    </motion.div>

    {/* Section Title */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-5xl md:text-6xl font-bold text-black mb-4"
    >
      Current Offering
      <br />
      <span className="text-[#5A3BFE]">Demonstration</span>
    </motion.h1>

    {/* Divider Line */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-32 h-1 bg-[#F8D57E] rounded-full my-6"
    />

    {/* Time Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="flex items-center gap-2"
    >
      <div className="inline-flex items-center bg-[#281C46] text-white px-5 py-2.5 rounded-full shadow-lg">
        <Clock className="w-5 h-5 mr-2" />
        <span className="font-semibold">150 Minutes</span>
      </div>
    </motion.div>

    {/* Sub-sections */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="mt-8 flex flex-wrap justify-center gap-3"
    >
      <div className="inline-flex items-center bg-[#5A3BFE]/10 text-[#5A3BFE] px-4 py-2 rounded-full">
        <Layers className="w-4 h-4 mr-2" />
        <span className="font-medium text-sm">Platform Architecture</span>
      </div>
      <div className="inline-flex items-center bg-[#F8D57E]/30 text-[#281C46] px-4 py-2 rounded-full">
        <Users className="w-4 h-4 mr-2" />
        <span className="font-medium text-sm">Customer Experience</span>
      </div>
      <div className="inline-flex items-center bg-[#281C46]/10 text-[#281C46] px-4 py-2 rounded-full">
        <Workflow className="w-4 h-4 mr-2" />
        <span className="font-medium text-sm">Admin / Developer Experience</span>
      </div>
    </motion.div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="mt-6 text-lg text-[#281C46]/70 max-w-xl"
    >
      Live demonstration of Yellow.ai's Agentic AI platform capabilities
    </motion.p>

    {/* Decorative dots */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.3 }}
      className="absolute bottom-12 flex gap-2"
    >
      <div className="w-2 h-2 rounded-full bg-[#5A3BFE]" />
      <div className="w-2 h-2 rounded-full bg-[#F8D57E]" />
      <div className="w-2 h-2 rounded-full bg-[#281C46]" />
    </motion.div>
  </div>
)

// Slide 10: Section Title - Customer Experience Demonstration
const CustomerExperienceSectionSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-12 relative overflow-hidden">
    {/* Background decorative elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.06 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#F8D57E] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#5A3BFE] rounded-full blur-[100px]" />
    </motion.div>

    {/* Section Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-8"
    >
      <div className="inline-flex items-center bg-[#F8D57E]/20 text-[#281C46] px-5 py-2.5 rounded-full border border-[#F8D57E]/30">
        <span className="text-sm font-semibold tracking-wide">Section 2.2</span>
      </div>
    </motion.div>

    {/* Icon */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="mb-8"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#F8D57E] to-[#e5c060] rounded-2xl shadow-lg shadow-[#F8D57E]/25">
        <Users className="w-10 h-10 text-[#281C46]" />
      </div>
    </motion.div>

    {/* Section Title */}
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight"
    >
      Customer Experience
      <br />
      <span className="text-[#5A3BFE]">Demonstration</span>
    </motion.h1>

    {/* Divider Line */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-20 h-1 bg-gradient-to-r from-[#5A3BFE] to-[#4530d4] rounded-full mt-8 mb-8"
    />

    {/* Time Badge */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
    >
      <div className="inline-flex items-center bg-[#281C46] text-white px-6 py-3 rounded-full shadow-lg shadow-[#281C46]/20">
        <Clock className="w-5 h-5 mr-2.5 text-[#F8D57E]" />
        <span className="font-semibold tracking-wide">30 Minutes</span>
      </div>
    </motion.div>

    {/* Key Topics */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-8 flex flex-wrap justify-center gap-3"
    >
      <div className="inline-flex items-center bg-[#5A3BFE]/10 text-[#5A3BFE] px-4 py-2 rounded-full">
        <MessageSquare className="w-4 h-4 mr-2" />
        <span className="font-medium text-sm">Multi-Modal Interactions</span>
      </div>
      <div className="inline-flex items-center bg-[#F8D57E]/30 text-[#281C46] px-4 py-2 rounded-full">
        <Heart className="w-4 h-4 mr-2" />
        <span className="font-medium text-sm">Personalized Experiences</span>
      </div>
      <div className="inline-flex items-center bg-[#281C46]/10 text-[#281C46] px-4 py-2 rounded-full">
        <Globe className="w-4 h-4 mr-2" />
        <span className="font-medium text-sm">Omnichannel Support</span>
      </div>
    </motion.div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.85 }}
      className="mt-6 text-lg text-[#281C46]/60 max-w-lg leading-relaxed"
    >
      Live demonstration of end-user facing AI experiences across channels
    </motion.p>

    {/* Decorative dots */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="absolute bottom-10 flex gap-3"
    >
      <div className="w-2 h-2 rounded-full bg-[#F8D57E]" />
      <div className="w-2 h-2 rounded-full bg-[#5A3BFE]" />
      <div className="w-2 h-2 rounded-full bg-[#281C46]/40" />
    </motion.div>
  </div>
)

// HP Voice Assistant Demo - Multi-modal & Omnichannel
const HPVoiceAssistantDemoSlide = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <div className="flex flex-col h-full px-12 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-6"
      >
        <div className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-xl p-3 mr-4">
          <Mic className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black">Multi-Modal & Omnichannel Demo</h2>
          <p className="text-[#281C46]/70 text-lg mt-1">HP Voice Assistant — Desktop Support Experience</p>
        </div>
      </motion.div>

      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex flex-col"
      >
        <div className="bg-[#281C46] rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col">
          {/* Video Header Bar */}
          <div className="bg-gradient-to-r from-[#5A3BFE] to-[#281C46] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-white/80 text-sm font-medium ml-2">Live Demo Recording</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F8D57E]" />
                <span className="text-white/80 text-sm">Voice + Visual Interface</span>
              </div>
              <button
                onClick={() => setIsFullscreen(true)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="text-sm font-medium">Fullscreen</span>
              </button>
              <a
                href="https://drive.google.com/file/d/1JoEfN8eqX9T4aXttlZFEL_vIXm4OkKHF/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Open in new window</span>
              </a>
            </div>
          </div>
          
          {/* Video Embed */}
          <div className="flex-1 relative bg-black group">
            <iframe
              src="https://drive.google.com/file/d/1JoEfN8eqX9T4aXttlZFEL_vIXm4OkKHF/preview"
              className="w-full h-full absolute inset-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            {/* Centered Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <a
                href="https://drive.google.com/file/d/1JoEfN8eqX9T4aXttlZFEL_vIXm4OkKHF/view"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center gap-3 bg-black/70 hover:bg-black/90 text-white px-6 py-4 rounded-xl transition-all shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-105"
              >
                <ExternalLink className="w-6 h-6" />
                <span className="text-base font-medium">Open in new window</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Points Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 flex gap-4"
      >
        <div className="flex-1 bg-[#5A3BFE]/10 rounded-xl px-4 py-3 flex items-center">
          <Mic className="w-5 h-5 text-[#5A3BFE] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Voice-first interaction with natural language understanding</span>
        </div>
        <div className="flex-1 bg-[#F8D57E]/20 rounded-xl px-4 py-3 flex items-center">
          <Globe className="w-5 h-5 text-[#281C46] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Seamless channel switching with context preservation</span>
        </div>
        <div className="flex-1 bg-[#281C46]/10 rounded-xl px-4 py-3 flex items-center">
          <Smartphone className="w-5 h-5 text-[#281C46] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Desktop support with visual guidance</span>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Fullscreen Header */}
            <div className="bg-gradient-to-r from-[#5A3BFE] to-[#281C46] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mic className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Multi-Modal & Omnichannel Demo — HP Voice Assistant</span>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="font-medium">Close</span>
              </button>
            </div>
            
            {/* Fullscreen Video */}
            <div className="flex-1 relative" onClick={(e) => e.stopPropagation()}>
              <iframe
                src="https://drive.google.com/file/d/1JoEfN8eqX9T4aXttlZFEL_vIXm4OkKHF/preview"
                className="w-full h-full absolute inset-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ITSM Use Case - 7-Zip Installation Demo
const ITSMInstallationDemoSlide = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <div className="flex flex-col h-full px-12 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-6"
      >
        <div className="bg-gradient-to-br from-[#F8D57E] to-[#e5c060] rounded-xl p-3 mr-4">
          <Workflow className="w-8 h-8 text-[#281C46]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black">ITSM Automation Demo</h2>
          <p className="text-[#281C46]/70 text-lg mt-1">AI Assistant — Automated Software Installation (7-Zip)</p>
        </div>
      </motion.div>

      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex flex-col"
      >
        <div className="bg-[#281C46] rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col">
          {/* Video Header Bar */}
          <div className="bg-gradient-to-r from-[#F8D57E] to-[#e5c060] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-[#281C46] text-sm font-medium ml-2">ITSM Automation Recording</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#281C46]" />
                <span className="text-[#281C46] text-sm font-medium">Autonomous Execution</span>
              </div>
              <button
                onClick={() => setIsFullscreen(true)}
                className="flex items-center gap-2 bg-[#281C46]/10 hover:bg-[#281C46]/20 text-[#281C46] px-3 py-1.5 rounded-lg transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="text-sm font-medium">Fullscreen</span>
              </button>
              <a
                href="https://drive.google.com/file/d/1Ja9w653ygWTVKDqO6mASXait1KfvON-E/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#281C46]/10 hover:bg-[#281C46]/20 text-[#281C46] px-3 py-1.5 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Open in new window</span>
              </a>
            </div>
          </div>
          
          {/* Video Embed */}
          <div className="flex-1 relative bg-black group">
            <iframe
              src="https://drive.google.com/file/d/1Ja9w653ygWTVKDqO6mASXait1KfvON-E/preview"
              className="w-full h-full absolute inset-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            {/* Centered Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <a
                href="https://drive.google.com/file/d/1Ja9w653ygWTVKDqO6mASXait1KfvON-E/view"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center gap-3 bg-black/70 hover:bg-black/90 text-white px-6 py-4 rounded-xl transition-all shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-105"
              >
                <ExternalLink className="w-6 h-6" />
                <span className="text-base font-medium">Open in new window</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Points Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 flex gap-4"
      >
        <div className="flex-1 bg-[#F8D57E]/20 rounded-xl px-4 py-3 flex items-center">
          <Bot className="w-5 h-5 text-[#281C46] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Agentic AI executes installation autonomously</span>
        </div>
        <div className="flex-1 bg-[#5A3BFE]/10 rounded-xl px-4 py-3 flex items-center">
          <Workflow className="w-5 h-5 text-[#5A3BFE] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">End-to-end ITSM workflow automation</span>
        </div>
        <div className="flex-1 bg-[#281C46]/10 rounded-xl px-4 py-3 flex items-center">
          <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Zero-touch resolution for common IT requests</span>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Fullscreen Header */}
            <div className="bg-gradient-to-r from-[#F8D57E] to-[#e5c060] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Workflow className="w-5 h-5 text-[#281C46]" />
                <span className="text-[#281C46] font-medium">ITSM Automation Demo — 7-Zip Installation</span>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-2 bg-[#281C46]/10 hover:bg-[#281C46]/20 text-[#281C46] px-4 py-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="font-medium">Close</span>
              </button>
            </div>
            
            {/* Fullscreen Video */}
            <div className="flex-1 relative" onClick={(e) => e.stopPropagation()}>
              <iframe
                src="https://drive.google.com/file/d/1Ja9w653ygWTVKDqO6mASXait1KfvON-E/preview"
                className="w-full h-full absolute inset-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// AI to Human Handoff Demo - Phone
const AIHumanHandoffDemoSlide = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <div className="flex flex-col h-full px-12 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-6"
      >
        <div className="bg-gradient-to-br from-[#5A3BFE] to-[#4530d4] rounded-xl p-3 mr-4">
          <UserCheck className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black">AI to Human Handoff Demo</h2>
          <p className="text-[#281C46]/70 text-lg mt-1">Seamless Agent Transfer Over Phone</p>
        </div>
      </motion.div>

      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex flex-col"
      >
        <div className="bg-[#281C46] rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col">
          {/* Video Header Bar */}
          <div className="bg-gradient-to-r from-[#5A3BFE] to-[#4530d4] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-white/80 text-sm font-medium ml-2">AI to Human Handoff Recording</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F8D57E]" />
                <span className="text-white/80 text-sm">Voice Channel Transfer</span>
              </div>
              <button
                onClick={() => setIsFullscreen(true)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="text-sm font-medium">Fullscreen</span>
              </button>
              <a
                href="https://drive.google.com/file/d/1BH7bvJoISh4qoV5dTxpgMvKjsh5V46z9/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Open in new window</span>
              </a>
            </div>
          </div>
          
          {/* Video Embed */}
          <div className="flex-1 relative bg-black group">
            <iframe
              src="https://drive.google.com/file/d/1BH7bvJoISh4qoV5dTxpgMvKjsh5V46z9/preview"
              className="w-full h-full absolute inset-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            {/* Centered Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <a
                href="https://drive.google.com/file/d/1BH7bvJoISh4qoV5dTxpgMvKjsh5V46z9/view"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center gap-3 bg-black/70 hover:bg-black/90 text-white px-6 py-4 rounded-xl transition-all shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-105"
              >
                <ExternalLink className="w-6 h-6" />
                <span className="text-base font-medium">Open in new window</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Points Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 flex gap-4"
      >
        <div className="flex-1 bg-[#5A3BFE]/10 rounded-xl px-4 py-3 flex items-center">
          <Bot className="w-5 h-5 text-[#5A3BFE] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">AI handles initial conversation and context gathering</span>
        </div>
        <div className="flex-1 bg-[#F8D57E]/20 rounded-xl px-4 py-3 flex items-center">
          <UserCheck className="w-5 h-5 text-[#281C46] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Seamless transfer to human agent with full context</span>
        </div>
        <div className="flex-1 bg-[#281C46]/10 rounded-xl px-4 py-3 flex items-center">
          <Phone className="w-5 h-5 text-[#281C46] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Voice channel continuity during handoff</span>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Fullscreen Header */}
            <div className="bg-gradient-to-r from-[#5A3BFE] to-[#4530d4] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <UserCheck className="w-5 h-5 text-white" />
                <span className="text-white font-medium">AI to Human Handoff Demo — Phone Transfer</span>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="font-medium">Close</span>
              </button>
            </div>
            
            {/* Fullscreen Video */}
            <div className="flex-1 relative" onClick={(e) => e.stopPropagation()}>
              <iframe
                src="https://drive.google.com/file/d/1BH7bvJoISh4qoV5dTxpgMvKjsh5V46z9/preview"
                className="w-full h-full absolute inset-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Agent Assist on 3rd Parties Demo
const AgentAssist3rdPartyDemoSlide = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  return (
    <div className="flex flex-col h-full px-12 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-6"
      >
        <div className="bg-gradient-to-br from-[#F8D57E] to-[#e5c060] rounded-xl p-3 mr-4">
          <Headphones className="w-8 h-8 text-[#281C46]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black">Agent Assist Demo</h2>
          <p className="text-[#281C46]/70 text-lg mt-1">AI-Powered Support on 3rd Party Platforms</p>
        </div>
      </motion.div>

      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex flex-col"
      >
        <div className="bg-[#281C46] rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col">
          {/* Video Header Bar */}
          <div className="bg-gradient-to-r from-[#F8D57E] to-[#e5c060] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-[#281C46] text-sm font-medium ml-2">Agent Assist Recording</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#281C46]" />
                <span className="text-[#281C46] text-sm font-medium">3rd Party Integration</span>
              </div>
              <button
                onClick={() => setIsFullscreen(true)}
                className="flex items-center gap-2 bg-[#281C46]/10 hover:bg-[#281C46]/20 text-[#281C46] px-3 py-1.5 rounded-lg transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="text-sm font-medium">Fullscreen</span>
              </button>
              <a
                href="https://www.loom.com/share/03ab5a8dd4d04bedb5a82eb5ed97dfc7?sid=fc1e8712-3408-4f15-b69d-f9ebd153feff"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#281C46]/10 hover:bg-[#281C46]/20 text-[#281C46] px-3 py-1.5 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Open in new window</span>
              </a>
            </div>
          </div>
          
          {/* Video Embed */}
          <div className="flex-1 relative bg-black group">
            <iframe
              src="https://www.loom.com/embed/03ab5a8dd4d04bedb5a82eb5ed97dfc7?sid=fc1e8712-3408-4f15-b69d-f9ebd153feff"
              className="w-full h-full absolute inset-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            {/* Centered Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <a
                href="https://www.loom.com/share/03ab5a8dd4d04bedb5a82eb5ed97dfc7?sid=fc1e8712-3408-4f15-b69d-f9ebd153feff"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center gap-3 bg-black/70 hover:bg-black/90 text-white px-6 py-4 rounded-xl transition-all shadow-2xl backdrop-blur-sm border border-white/20 hover:scale-105"
              >
                <ExternalLink className="w-6 h-6" />
                <span className="text-base font-medium">Open in new window</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Points Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 flex gap-4"
      >
        <div className="flex-1 bg-[#F8D57E]/20 rounded-xl px-4 py-3 flex items-center">
          <Headphones className="w-5 h-5 text-[#281C46] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Real-time AI assistance for human agents</span>
        </div>
        <div className="flex-1 bg-[#5A3BFE]/10 rounded-xl px-4 py-3 flex items-center">
          <Network className="w-5 h-5 text-[#5A3BFE] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Seamless integration with 3rd party platforms</span>
        </div>
        <div className="flex-1 bg-[#281C46]/10 rounded-xl px-4 py-3 flex items-center">
          <Zap className="w-5 h-5 text-[#281C46] mr-3 flex-shrink-0" />
          <span className="text-sm text-[#281C46] font-medium">Instant suggestions and knowledge retrieval</span>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Fullscreen Header */}
            <div className="bg-gradient-to-r from-[#F8D57E] to-[#e5c060] px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Headphones className="w-5 h-5 text-[#281C46]" />
                <span className="text-[#281C46] font-medium">Agent Assist Demo — 3rd Party Integration</span>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="flex items-center gap-2 bg-[#281C46]/10 hover:bg-[#281C46]/20 text-[#281C46] px-4 py-2 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
                <span className="font-medium">Close</span>
              </button>
            </div>
            
            {/* Fullscreen Video */}
            <div className="flex-1 relative" onClick={(e) => e.stopPropagation()}>
              <iframe
                src="https://www.loom.com/embed/03ab5a8dd4d04bedb5a82eb5ed97dfc7?sid=fc1e8712-3408-4f15-b69d-f9ebd153feff"
                className="w-full h-full absolute inset-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Section Title - Administrator and Developer Experience
const AdminDeveloperExperienceSectionSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-12 relative overflow-hidden">
    {/* Background decorative elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.06 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#5A3BFE] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F8D57E] rounded-full blur-[100px]" />
    </motion.div>

    {/* Section Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-8"
    >
      <div className="inline-flex items-center bg-[#5A3BFE]/8 text-[#5A3BFE] px-5 py-2.5 rounded-full border border-[#5A3BFE]/15">
        <span className="text-sm font-semibold tracking-wide">Scenario 2</span>
      </div>
    </motion.div>

    {/* Icon */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="mb-8"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#5A3BFE] to-[#4530d4] rounded-2xl shadow-lg shadow-[#5A3BFE]/25">
        <Code className="w-10 h-10 text-white" />
      </div>
    </motion.div>

    {/* Section Title */}
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight"
    >
      Administrator & Developer
      <br />
      <span className="text-[#5A3BFE]">Experience</span>
    </motion.h1>

    {/* Divider Line */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-20 h-1 bg-gradient-to-r from-[#F8D57E] to-[#f5c84d] rounded-full mt-8 mb-8"
    />

    {/* Time Badge */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
    >
      <div className="inline-flex items-center bg-[#281C46] text-white px-6 py-3 rounded-full shadow-lg shadow-[#281C46]/20">
        <Clock className="w-5 h-5 mr-2.5 text-[#F8D57E]" />
        <span className="font-semibold tracking-wide">1 Hour 30 Minutes</span>
      </div>
    </motion.div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-8 text-lg text-[#281C46]/60 max-w-xl leading-relaxed"
    >
      Demonstrating how developer and administrator productivity is enhanced by the platform
    </motion.p>

    {/* Key Topics Preview */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.85 }}
      className="mt-6 flex flex-wrap justify-center gap-2 max-w-3xl"
    >
      {[
        "AI Model Management",
        "Agentic Framework", 
        "Application Testing",
        "AI Observability",
        "Guardrails & Security"
      ].map((topic, index) => (
        <div 
          key={topic}
          className="inline-flex items-center bg-[#5A3BFE]/10 text-[#5A3BFE] px-3 py-1.5 rounded-full text-sm font-medium"
        >
          {topic}
        </div>
      ))}
      <div className="inline-flex items-center bg-[#F8D57E]/30 text-[#281C46] px-3 py-1.5 rounded-full text-sm font-medium">
        +6 more criteria
      </div>
    </motion.div>
  </div>
)

// Platform Demo Placeholder - Administrator and Developer Experience
const AdminDeveloperDemoPlaceholderSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-gradient-to-br from-[#5A3BFE] to-[#4530d4] rounded-xl p-3 mr-4">
        <Code className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-black">Platform Demo</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Administrator & Developer Experience Demonstration</p>
      </div>
    </motion.div>

    {/* Demo Criteria Grid */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 grid grid-cols-3 gap-4"
    >
      {[
        { title: "AI Model Management", icon: Brain, description: "Model selection, fine-tuning, and orchestration capabilities" },
        { title: "Multi-Modal & Omnichannel", icon: Globe, description: "Voice, chat, email, and messaging channel support" },
        { title: "Personalized Experiences", icon: Heart, description: "Context-aware personalization and customer journey mapping" },
        { title: "Agentic Framework", icon: Bot, description: "Autonomous AI agents with planning and execution capabilities" },
        { title: "Application Dev Tools", icon: Code, description: "Low-code/no-code builders and developer SDKs" },
        { title: "Pre-Built Components", icon: Layers, description: "Ready-to-use templates, flows, and integrations" },
        { title: "Application Testing", icon: FlaskConical, description: "Automated testing, simulation, and quality assurance" },
        { title: "AI Observability & Admin", icon: Activity, description: "Monitoring, analytics, and administrative controls" },
        { title: "Guardrails & Security", icon: Shield, description: "Data protection, compliance, and safety measures" },
        { title: "Human + AI Handoffs", icon: Users, description: "Seamless escalation and agent collaboration" },
        { title: "Lifecycle Management", icon: RefreshCw, description: "Version control, deployment, and CI/CD pipelines" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
          className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-[#5A3BFE]/30 transition-all duration-300 group"
        >
          <div className="flex items-start gap-3">
            <div className="bg-[#5A3BFE]/10 rounded-lg p-2 group-hover:bg-[#5A3BFE]/20 transition-colors">
              <item.icon className="w-5 h-5 text-[#5A3BFE]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#281C46] text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-[#281C46]/60 leading-relaxed">{item.description}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#F8D57E] rounded-full w-0 group-hover:w-full transition-all duration-500" />
            </div>
            <span className="text-[10px] text-[#281C46]/40 font-medium">DEMO</span>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Footer Note */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-4 bg-[#F8D57E]/20 rounded-xl px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="bg-[#F8D57E] rounded-full p-2">
          <Play className="w-5 h-5 text-[#281C46]" />
        </div>
        <div>
          <p className="text-[#281C46] font-semibold">Live Platform Demonstration</p>
          <p className="text-[#281C46]/60 text-sm">Interactive walkthrough of all criteria areas</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-[#281C46] text-white px-4 py-2 rounded-lg">
        <Clock className="w-4 h-4 text-[#F8D57E]" />
        <span className="font-medium">90 min allocated</span>
      </div>
    </motion.div>
  </div>
)

// Slide 11: Section Title - Platform Architecture
const PlatformArchitectureSectionSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-12 relative overflow-hidden">
    {/* Background decorative elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.06 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#5A3BFE] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F8D57E] rounded-full blur-[100px]" />
    </motion.div>

    {/* Section Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-8"
    >
      <div className="inline-flex items-center bg-[#5A3BFE]/8 text-[#5A3BFE] px-5 py-2.5 rounded-full border border-[#5A3BFE]/15">
        <span className="text-sm font-semibold tracking-wide">Section 2.1</span>
      </div>
    </motion.div>

    {/* Icon */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="mb-8"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#5A3BFE] to-[#4530d4] rounded-2xl shadow-lg shadow-[#5A3BFE]/25">
        <Layers className="w-10 h-10 text-white" />
      </div>
    </motion.div>

    {/* Section Title */}
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="text-4xl md:text-5xl font-bold text-[#1a1a2e] leading-tight"
    >
      Platform Architecture &
      <br />
      <span className="text-[#5A3BFE]">Demonstration Context Setting</span>
    </motion.h1>

    {/* Divider Line */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-20 h-1 bg-gradient-to-r from-[#F8D57E] to-[#f5c84d] rounded-full mt-8 mb-8"
    />

    {/* Time Badge */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
    >
      <div className="inline-flex items-center bg-[#281C46] text-white px-6 py-3 rounded-full shadow-lg shadow-[#281C46]/20">
        <Clock className="w-5 h-5 mr-2.5 text-[#F8D57E]" />
        <span className="font-semibold tracking-wide">30 Minutes</span>
      </div>
    </motion.div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-10 text-lg text-[#281C46]/60 max-w-lg leading-relaxed"
    >
      Technical foundation and architecture overview to set context for the live demonstration
    </motion.p>

    {/* Decorative dots */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.85 }}
      className="absolute bottom-10 flex gap-3"
    >
      <div className="w-2 h-2 rounded-full bg-[#5A3BFE]" />
      <div className="w-2 h-2 rounded-full bg-[#F8D57E]" />
      <div className="w-2 h-2 rounded-full bg-[#281C46]/40" />
    </motion.div>
  </div>
)

// AI Model Management Slide
const AIModelManagementSlide = () => (
  <div className="flex flex-col h-full px-14 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center mb-8"
    >
      <div className="bg-gradient-to-br from-[#5A3BFE] to-[#4530d4] rounded-xl p-3.5 mr-5 shadow-lg shadow-[#5A3BFE]/20">
        <Brain className="w-7 h-7 text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#1a1a2e] tracking-tight">AI Model Management</h2>
        <p className="text-[#281C46]/60 text-base mt-1.5">Composite AI Architecture with Dynamic Model Orchestration</p>
      </div>
    </motion.div>

    {/* Main Content - Two Column Layout */}
    <div className="grid grid-cols-2 gap-7 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {/* Orchestrator LLM - Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-xl flex-1"
        >
          <h3 className="text-lg font-bold text-white flex items-center mb-4">
            <Network className="w-5 h-5 mr-3 text-[#F8D57E]" />
            Orchestrator LLM (Agent AI)
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mb-5">
            A departure from monolithic model dependency toward a sophisticated <span className="text-[#F8D57E] font-semibold">"Composite AI"</span> architecture. The Orchestrator functions as a dynamic routing layer rather than a simple text-generation engine.
          </p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-white/70 text-xs mb-3 font-semibold uppercase tracking-wide">Multi-Model Strategy</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Zap className="w-4 h-4 text-[#F8D57E] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm leading-relaxed"><span className="font-semibold text-[#F8D57E]">Speed-optimized models</span> for high-volume routine tasks (password resets, status checks)</span>
              </div>
              <div className="flex items-start">
                <Brain className="w-4 h-4 text-[#F8D57E] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm leading-relaxed"><span className="font-semibold text-[#F8D57E]">Reasoning models</span> (GPT-4, Claude 3.5) for complex multi-turn disambiguation</span>
              </div>
            </div>
          </div>
          <p className="text-white/60 text-xs italic mt-4">
            Dynamic switching balances agent capability with operational cost — invisible to end-users.
          </p>
        </motion.div>

        {/* BYO-LLM Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-base flex items-center mb-3">
            <Cloud className="w-5 h-5 mr-2.5" />
            Bring Your Own LLM (BYO-LLM)
          </h4>
          <p className="text-[#281C46]/80 text-sm leading-relaxed mb-4">
            A <span className="font-semibold">governed wrapper</span> for proprietary models — not passive integration. Customers can integrate models from Azure OpenAI, AWS Bedrock, or private clouds.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">PII Redaction</span>
            <span className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">Rate Limiting</span>
            <span className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">Safety Guardrails</span>
            <span className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">Sovereign Infrastructure</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {/* Testing & Validation Card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-white border border-[#5A3BFE]/15 rounded-2xl p-5 shadow-sm"
        >
          <div className="flex items-start">
            <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 mr-4 flex-shrink-0">
              <FlaskConical className="w-5 h-5 text-[#5A3BFE]" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#1a1a2e] text-base">Model Testing & Validation</h4>
              <p className="text-[#281C46]/60 text-sm leading-relaxed mt-2">
                Trust established through rigorous validation with automated <span className="font-semibold text-[#5A3BFE]">Utterance Report</span> mechanism.
              </p>
              <div className="mt-4 space-y-2.5">
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#5A3BFE] mr-2.5 mt-0.5 flex-shrink-0" />
                  <span className="text-[#281C46]/70 text-sm">Tests against validation datasets (provided or auto-generated)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#5A3BFE] mr-2.5 mt-0.5 flex-shrink-0" />
                  <span className="text-[#281C46]/70 text-sm">Detects overfitting & undercutting risks</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#5A3BFE] mr-2.5 mt-0.5 flex-shrink-0" />
                  <span className="text-[#281C46]/70 text-sm"><span className="font-semibold">Agentic Simulation</span> validates behavioral integrity before deployment</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Deterministic + Generative Card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-xl flex-1"
        >
          <h4 className="font-bold text-white text-base flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2.5 text-[#F8D57E]" />
            Hybrid: Deterministic + Generative
          </h4>
          <p className="text-white/85 text-sm leading-relaxed mb-5">
            Seamless orchestration — no binary choice between <span className="text-[#F8D57E] font-semibold">Rules-Based</span> and <span className="text-[#F8D57E] font-semibold">GenAI</span>. The Query Execution Planner dynamically switches modes within a single interaction.
          </p>
          <div className="bg-white/8 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="bg-red-500/20 rounded-lg p-2.5 mb-2 mx-auto w-fit">
                  <Lock className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-white/70 text-xs font-medium">Compliance<br/>Locked</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#F8D57E]/60 mx-3" />
              <div className="text-center flex-1">
                <div className="bg-green-500/20 rounded-lg p-2.5 mb-2 mx-auto w-fit">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white/70 text-xs font-medium">Verified</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#F8D57E]/60 mx-3" />
              <div className="text-center flex-1">
                <div className="bg-[#5A3BFE]/40 rounded-lg p-2.5 mb-2 mx-auto w-fit">
                  <Sparkles className="w-5 h-5 text-[#F8D57E]" />
                </div>
                <span className="text-white/70 text-xs font-medium">GenAI<br/>Released</span>
              </div>
            </div>
          </div>
          <p className="text-white/50 text-xs italic mt-4">
            Example: Legal disclaimer (deterministic) → Q&A advisory (generative) in one conversation.
          </p>
        </motion.div>
      </div>
    </div>

    {/* Bottom Key Insight */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="mt-7 bg-gradient-to-r from-[#5A3BFE]/8 to-[#F8D57E]/15 rounded-2xl px-6 py-4 flex items-center gap-5 border border-[#5A3BFE]/10"
    >
      <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 flex-shrink-0">
        <Lightbulb className="w-5 h-5 text-[#5A3BFE]" />
      </div>
      <p className="text-[#281C46]/80 text-sm leading-relaxed">
        <span className="font-bold text-[#281C46]">Key Differentiator:</span> No single LLM is optimal for every task — Yellow.ai's Composite AI dynamically routes queries to the right model, balancing cost, latency, and reasoning capabilities.
      </p>
    </motion.div>
  </div>
)

// Multi-Modal and Omnichannel Support Slide
const MultiModalOmnichannelSlide = () => (
  <div className="flex flex-col h-full px-14 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center mb-8"
    >
      <div className="bg-gradient-to-br from-[#5A3BFE] to-[#4530d4] rounded-xl p-3.5 mr-5 shadow-lg shadow-[#5A3BFE]/20">
        <Globe className="w-7 h-7 text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#1a1a2e] tracking-tight">Multi-Modal & Omnichannel Support</h2>
        <p className="text-[#281C46]/60 text-base mt-1.5">Agentic Omnichannel Orchestration with State Continuity</p>
      </div>
    </motion.div>

    {/* Main Content - Two Column Layout */}
    <div className="grid grid-cols-2 gap-7 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {/* Channel Consistency Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-lg font-bold text-white flex items-center mb-4">
            <Layers className="w-5 h-5 mr-3 text-[#F8D57E]" />
            Write Once, Deploy Everywhere
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mb-5">
            Support for <span className="text-[#F8D57E] font-semibold">35+ interaction channels</span> with decoupled conversational logic from channel-specific presentation. A single Agent definition deploys across all endpoints.
          </p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-white/70 text-xs mb-3 font-semibold uppercase tracking-wide">Same "Menu Selection" renders as</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-white/15 rounded-lg p-2.5 mb-2">
                  <MessageSquare className="w-5 h-5 text-white mx-auto" />
                </div>
                <span className="text-white/80 text-xs leading-tight block">Clickable Carousel<br/><span className="text-[#F8D57E] font-medium">Web Chat</span></span>
              </div>
              <div className="text-center">
                <div className="bg-white/15 rounded-lg p-2.5 mb-2">
                  <Smartphone className="w-5 h-5 text-white mx-auto" />
                </div>
                <span className="text-white/80 text-xs leading-tight block">Numbered List<br/><span className="text-[#F8D57E] font-medium">WhatsApp</span></span>
              </div>
              <div className="text-center">
                <div className="bg-white/15 rounded-lg p-2.5 mb-2">
                  <Phone className="w-5 h-5 text-white mx-auto" />
                </div>
                <span className="text-white/80 text-xs leading-tight block">TTS Prompt<br/><span className="text-[#F8D57E] font-medium">Voice</span></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Deployment Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md flex-1"
        >
          <h4 className="font-bold text-[#281C46] text-base flex items-center mb-3">
            <BarChart3 className="w-5 h-5 mr-2.5" />
            Omnichannel Deployment Scale
          </h4>
          <p className="text-[#281C46]/80 text-sm leading-relaxed mb-4">
            Enterprise clients interact with customers on <span className="font-semibold">3+ channels simultaneously</span> with cross-channel state awareness.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#281C46]/10 rounded-xl px-3 py-3 text-center">
              <span className="text-2xl font-bold text-[#281C46]">35+</span>
              <p className="text-[#281C46]/60 text-xs mt-0.5">Channels</p>
            </div>
            <div className="bg-[#281C46]/10 rounded-xl px-3 py-3 text-center">
              <span className="text-2xl font-bold text-[#281C46]">M+</span>
              <p className="text-[#281C46]/60 text-xs mt-0.5">Concurrent Sessions</p>
            </div>
            <div className="bg-[#281C46]/10 rounded-xl px-3 py-3 text-center">
              <span className="text-xs font-bold text-[#281C46] leading-tight block">Voice + WhatsApp<br/>+ App</span>
              <p className="text-[#281C46]/60 text-xs mt-1">Largest Deployment</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {/* Interruption-Aware Card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-xl flex-1"
        >
          <h4 className="font-bold text-white text-base flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2.5 text-[#F8D57E]" />
            Interruption-Aware Duplex Orchestration
          </h4>
          <p className="text-white/85 text-sm leading-relaxed mb-5">
            Simultaneous multi-modal interactions — interrupt a voice call with a digital interaction while maintaining full context via <span className="text-[#F8D57E] font-semibold">User360 graph</span>.
          </p>
          
          {/* Scenario Flow */}
          <div className="bg-white/8 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-3 font-semibold uppercase tracking-wide">Real-Time Cross-Modal Scenario</p>
            <div className="space-y-2.5">
              <div className="flex items-center">
                <div className="bg-[#5A3BFE]/40 rounded-full p-1.5 mr-3 flex-shrink-0">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <span className="text-white/90 text-sm">User on voice call discussing billing dispute</span>
              </div>
              <div className="flex items-center pl-3">
                <div className="w-0.5 h-3 bg-[#F8D57E]/40 ml-1.5"></div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#F8D57E]/40 rounded-full p-1.5 mr-3 flex-shrink-0">
                  <Smartphone className="w-3 h-3 text-white" />
                </div>
                <span className="text-white/90 text-sm">Agent sends secure link via SMS for visual interface</span>
              </div>
              <div className="flex items-center pl-3">
                <div className="w-0.5 h-3 bg-[#F8D57E]/40 ml-1.5"></div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500/40 rounded-full p-1.5 mr-3 flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-white/90 text-sm">"I see you've selected the charge from January 12th..."</span>
              </div>
            </div>
          </div>
          <p className="text-white/50 text-xs italic mt-4">
            Transforms disjointed multi-channel into cohesive multimodal sessions.
          </p>
        </motion.div>

        {/* Supported Channels Card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-white border border-[#5A3BFE]/15 rounded-2xl p-5 shadow-sm"
        >
          <h4 className="font-bold text-[#1a1a2e] text-base mb-4">Supported Channels</h4>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: MessageSquare, label: "Web Chat" },
              { icon: Smartphone, label: "Mobile App" },
              { icon: Phone, label: "Voice" },
              { icon: MessageCircle, label: "WhatsApp" },
              { icon: Mail, label: "Email" },
              { icon: Instagram, label: "Social" },
              { icon: Bell, label: "SMS" },
              { icon: Building2, label: "Enterprise" },
            ].map((channel) => (
              <div key={channel.label} className="flex items-center bg-gray-50/80 rounded-lg px-2.5 py-2">
                <channel.icon className="w-4 h-4 text-[#5A3BFE] mr-2 flex-shrink-0" />
                <span className="text-[#281C46]/80 text-xs font-medium">{channel.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom Key Insight */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="mt-7 bg-gradient-to-r from-[#5A3BFE]/8 to-[#F8D57E]/15 rounded-2xl px-6 py-4 flex items-center gap-5 border border-[#5A3BFE]/10"
    >
      <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 flex-shrink-0">
        <Lightbulb className="w-5 h-5 text-[#5A3BFE]" />
      </div>
      <p className="text-[#281C46]/80 text-sm leading-relaxed">
        <span className="font-bold text-[#281C46]">Key Differentiator:</span> Beyond "multi-channel presence" — Yellow.ai delivers true state continuity and interaction logic across channels, enabling seamless asynchronous and synchronous multi-modality.
      </p>
    </motion.div>
  </div>
)

// Personalized Customer Experiences Slide
const PersonalizedExperiencesSlide = () => (
  <div className="flex flex-col h-full px-14 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center mb-8"
    >
      <div className="bg-gradient-to-br from-[#5A3BFE] to-[#4530d4] rounded-xl p-3.5 mr-5 shadow-lg shadow-[#5A3BFE]/20">
        <Heart className="w-7 h-7 text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#1a1a2e] tracking-tight">Personalized Customer Experiences</h2>
        <p className="text-[#281C46]/60 text-base mt-1.5">User360 Architecture — Beyond Simple Variable Substitution</p>
      </div>
    </motion.div>

    {/* Main Content - Two Column Layout */}
    <div className="grid grid-cols-2 gap-7 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {/* User Graph Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-xl flex-1"
        >
          <h3 className="text-lg font-bold text-white flex items-center mb-4">
            <Users className="w-5 h-5 mr-3 text-[#F8D57E]" />
            User Graph vs. Session Context
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mb-5">
            Most platforms maintain <span className="text-white/60">Session Context</span> — memory that lasts only as long as the chat window. Yellow.ai's <span className="text-[#F8D57E] font-semibold">User Graph is persistent</span>.
          </p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm mb-4">
            <p className="text-white/70 text-xs mb-3 font-semibold uppercase tracking-wide">Episodic Memory enables</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm leading-relaxed">Aggregates every interaction across all channels</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm leading-relaxed">Creates longitudinal view of customer relationship</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm leading-relaxed">Enables <span className="text-[#F8D57E] font-semibold">"Historical Intimacy"</span> in conversations</span>
              </div>
            </div>
          </div>
          <p className="text-white/60 text-xs italic">
            Shifts user experience from transactional to relational.
          </p>
        </motion.div>

        {/* Historical Intimacy Example */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-base flex items-center mb-4">
            <MessageSquare className="w-5 h-5 mr-2.5" />
            Historical Intimacy in Action
          </h4>
          <div className="bg-[#281C46]/8 rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-[#281C46]/15 rounded-full p-1.5 mr-3 mt-0.5 flex-shrink-0">
                  <Bot className="w-3.5 h-3.5 text-[#281C46]" />
                </div>
                <div className="bg-white rounded-lg px-4 py-2.5 shadow-sm flex-1">
                  <p className="text-[#281C46] text-sm italic">"Hi John, are you calling about the payment issue from Tuesday?"</p>
                </div>
              </div>
              <p className="text-[#281C46]/60 text-xs pl-10 leading-relaxed">
                Agent references User Graph: call 3 days ago, failed payment, frustration detected via sentiment analysis
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {/* Runtime Synchronization Card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-xl flex-1"
        >
          <h4 className="font-bold text-white text-base flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2.5 text-[#F8D57E]" />
            Runtime Data Synchronization
          </h4>
          <p className="text-white/85 text-sm leading-relaxed mb-5">
            The User Graph is a <span className="text-[#F8D57E] font-semibold">dynamic CDP component</span> — not a static database. Bidirectional sync keeps enterprise records current.
          </p>
          
          {/* Sync Flow Diagram */}
          <div className="bg-white/8 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-center flex-1">
                <div className="bg-[#5A3BFE]/40 rounded-lg p-2 mb-2 mx-auto w-fit">
                  <Store className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80 text-xs font-medium block">External Systems</span>
                <p className="text-white/50 text-[10px]">Salesforce, SAP</p>
              </div>
              <div className="flex flex-col items-center mx-3">
                <ArrowRight className="w-3.5 h-3.5 text-[#F8D57E]/70" />
                <span className="text-[#F8D57E]/80 text-[9px] my-0.5">Priming</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F8D57E]/70 rotate-180" />
                <span className="text-[#F8D57E]/80 text-[9px] mt-0.5">Write-back</span>
              </div>
              <div className="text-center flex-1">
                <div className="bg-[#F8D57E]/40 rounded-lg p-2 mb-2 mx-auto w-fit">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80 text-xs font-medium block">User Graph</span>
                <p className="text-white/50 text-[10px]">User360 CDP</p>
              </div>
              <div className="flex flex-col items-center mx-3">
                <ArrowRight className="w-3.5 h-3.5 text-[#F8D57E]/70" />
              </div>
              <div className="text-center flex-1">
                <div className="bg-green-500/40 rounded-lg p-2 mb-2 mx-auto w-fit">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80 text-xs font-medium block">AI Agent</span>
                <p className="text-white/50 text-[10px]">Context Window</p>
              </div>
            </div>
          </div>
          
          <div className="mt-5 space-y-2.5">
            <div className="flex items-start">
              <Zap className="w-4 h-4 text-[#F8D57E] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white/90 text-sm leading-relaxed"><span className="font-semibold text-[#F8D57E]">Priming:</span> Injects user data before first token generation</span>
            </div>
            <div className="flex items-start">
              <Zap className="w-4 h-4 text-[#F8D57E] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white/90 text-sm leading-relaxed"><span className="font-semibold text-[#F8D57E]">Write-back:</span> New info (e.g., address change) syncs to CRM</span>
            </div>
          </div>
        </motion.div>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-white border border-[#5A3BFE]/15 rounded-2xl p-5 shadow-sm"
        >
          <h4 className="font-bold text-[#1a1a2e] text-base mb-4">Personalization Redefined</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-[#281C46]/40 text-xs font-medium mb-2 line-through">Traditional</p>
              <p className="text-[#281C46]/50 text-sm">"Hello, [Name]"</p>
              <p className="text-[#281C46]/40 text-xs mt-2">Simple variable substitution</p>
            </div>
            <div className="bg-[#5A3BFE]/8 rounded-xl p-4 border border-[#5A3BFE]/20">
              <p className="text-[#5A3BFE] text-xs font-semibold mb-2">User360</p>
              <p className="text-[#281C46] text-sm font-medium">"Hi John, about Tuesday..."</p>
              <p className="text-[#281C46]/60 text-xs mt-2">Contextual, relational memory</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom Key Insight */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="mt-7 bg-gradient-to-r from-[#5A3BFE]/8 to-[#F8D57E]/15 rounded-2xl px-6 py-4 flex items-center gap-5 border border-[#5A3BFE]/10"
    >
      <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 flex-shrink-0">
        <Lightbulb className="w-5 h-5 text-[#5A3BFE]" />
      </div>
      <p className="text-[#281C46]/80 text-sm leading-relaxed">
        <span className="font-bold text-[#281C46]">Key Differentiator:</span> User360's Episodic Memory transforms interactions from transactional to relational — the AI remembers context across all channels and time, with bidirectional sync to enterprise systems.
      </p>
    </motion.div>
  </div>
)

// Agentic Framework Slide
const AgenticFrameworkSlide = () => (
  <div className="flex flex-col h-full px-14 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center mb-8"
    >
      <div className="bg-gradient-to-br from-[#5A3BFE] to-[#4530d4] rounded-xl p-3.5 mr-5 shadow-lg shadow-[#5A3BFE]/20">
        <Workflow className="w-7 h-7 text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#1a1a2e] tracking-tight">Agentic Framework</h2>
        <p className="text-[#281C46]/60 text-base mt-1.5">From Flow-Based Design to Goal-Based Execution</p>
      </div>
    </motion.div>

    {/* Main Content - Two Column Layout */}
    <div className="grid grid-cols-2 gap-7 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        {/* Objectives & Generative Plans Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-lg font-bold text-white flex items-center mb-4">
            <Target className="w-5 h-5 mr-3 text-[#F8D57E]" />
            Objectives, Roles & Generative Plans
          </h3>
          <p className="text-white/90 text-sm leading-relaxed mb-5">
            Developers define <span className="text-[#F8D57E] font-semibold">Objectives</span> and <span className="text-[#F8D57E] font-semibold">Roles</span> — not every conversation turn. The Orchestrator LLM dynamically constructs multi-step plans at runtime.
          </p>
          
          {/* Example Plan */}
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-white/70 text-xs mb-3 font-semibold uppercase tracking-wide">User: "I need to fix my router" → Generated Plan</p>
            <div className="space-y-2.5">
              {[
                { step: "1", action: "Verify User Identity", tool: "CRM Lookup" },
                { step: "2", action: "Check Device Status", tool: "Network Diagnostic API" },
                { step: "3", action: "Troubleshoot", tool: "Vector Search KB" },
                { step: "4", action: "Schedule Technician", tool: "Calendar API" },
              ].map((item) => (
                <div key={item.step} className="flex items-center">
                  <span className="bg-[#F8D57E] text-[#281C46] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0">{item.step}</span>
                  <span className="text-white/90 text-sm flex-1">{item.action}</span>
                  <span className="bg-white/15 text-white/80 text-xs px-2.5 py-1 rounded-md font-medium">{item.tool}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-white/60 text-xs italic mt-4">
            Plans adapt dynamically — outage detected? Skip to "Notify User" instead.
          </p>
        </motion.div>

        {/* Tools & Standards Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md flex-1"
        >
          <h4 className="font-bold text-[#281C46] text-base flex items-center mb-3">
            <Zap className="w-5 h-5 mr-2.5" />
            Tools, Resources & Standards
          </h4>
          <p className="text-[#281C46]/80 text-sm leading-relaxed mb-4">
            APIs, database lookups, and logic are <span className="font-semibold">Tools</span> the agent invokes. Supports emerging interoperability standards:
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#281C46] text-white text-xs px-3 py-1.5 rounded-full font-medium">Model Context Protocol (MCP)</span>
            <span className="bg-[#281C46] text-white text-xs px-3 py-1.5 rounded-full font-medium">Agent-to-Agent (A2A)</span>
            <span className="bg-[#281C46]/15 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">Salesforce Agent</span>
            <span className="bg-[#281C46]/15 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">SAP Agent</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        {/* Multi-Agent Mesh Card */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-xl flex-1"
        >
          <h4 className="font-bold text-white text-base flex items-center mb-3">
            <Network className="w-5 h-5 mr-2.5 text-[#F8D57E]" />
            Multi-Agent Mesh Architecture
          </h4>
          <p className="text-white/85 text-sm leading-relaxed mb-5">
            Instead of a monolithic "Super Bot" (prone to hallucination), deploy a <span className="text-[#F8D57E] font-semibold">fleet of specialized agents</span> overseen by a Governance Layer.
          </p>
          
          {/* Mesh Visualization */}
          <div className="bg-white/8 rounded-xl p-4">
            <div className="flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="bg-[#F8D57E] rounded-xl px-5 py-2.5 mb-2 shadow-md">
                  <Shield className="w-5 h-5 text-[#281C46] mx-auto" />
                </div>
                <span className="text-[#F8D57E] text-xs font-semibold block">Super Agent</span>
                <p className="text-white/50 text-[10px]">Traffic Controller</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-8 mb-2">
              <ArrowRight className="w-4 h-4 text-white/30 rotate-[135deg]" />
              <ArrowRight className="w-4 h-4 text-white/30 rotate-90" />
              <ArrowRight className="w-4 h-4 text-white/30 rotate-45" />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { icon: DollarSign, name: "Billing", color: "bg-blue-500/30" },
                { icon: Headphones, name: "Tech Triage", color: "bg-green-500/30" },
                { icon: TrendingUp, name: "Sales", color: "bg-purple-500/30" },
              ].map((agent) => (
                <div key={agent.name} className="text-center">
                  <div className={`${agent.color} rounded-lg p-2.5 mb-1.5`}>
                    <agent.icon className="w-4 h-4 text-white mx-auto" />
                  </div>
                  <span className="text-white/70 text-xs font-medium">{agent.name}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-white/50 text-xs italic mt-4">
            Each agent: smaller, specialized, highly accurate within its domain.
          </p>
        </motion.div>

        {/* Flow vs Goal Comparison */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-white border border-[#5A3BFE]/15 rounded-2xl p-5 shadow-sm"
        >
          <h4 className="font-bold text-[#1a1a2e] text-base mb-4">The 2026 Paradigm Shift</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-[#281C46]/40 text-xs font-medium mb-3 line-through">Flow-Based</p>
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500 font-medium">A</div>
                <ArrowRight className="w-3 h-3 text-gray-300" />
                <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500 font-medium">B</div>
                <ArrowRight className="w-3 h-3 text-gray-300" />
                <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500 font-medium">C</div>
              </div>
              <p className="text-[#281C46]/40 text-xs">Rigid decision trees</p>
            </div>
            <div className="bg-[#5A3BFE]/8 rounded-xl p-4 border border-[#5A3BFE]/20">
              <p className="text-[#5A3BFE] text-xs font-semibold mb-3">Goal-Based</p>
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-6 h-6 bg-[#5A3BFE] rounded-full flex items-center justify-center shadow-sm">
                  <Target className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1 h-0.5 bg-[#5A3BFE]/20 relative">
                  <Sparkles className="w-3 h-3 text-[#F8D57E] absolute -top-1 left-1/2 -translate-x-1/2" />
                </div>
                <div className="w-6 h-6 bg-[#F8D57E] rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-3 h-3 text-[#281C46]" />
                </div>
              </div>
              <p className="text-[#281C46] text-xs font-medium">Dynamic, adaptive plans</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom Key Insight */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="mt-7 bg-gradient-to-r from-[#5A3BFE]/8 to-[#F8D57E]/15 rounded-2xl px-6 py-4 flex items-center gap-5 border border-[#5A3BFE]/10"
    >
      <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 flex-shrink-0">
        <Lightbulb className="w-5 h-5 text-[#5A3BFE]" />
      </div>
      <p className="text-[#281C46]/80 text-sm leading-relaxed">
        <span className="font-bold text-[#281C46]">Key Differentiator:</span> Goal-based execution with Generative Plan Development handles non-linear journeys that break rigid decision trees — agents adapt in real-time as conditions change.
      </p>
    </motion.div>
  </div>
)

// Application Development Tools Slide
const AppDevToolsSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Rocket className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Application Development Tools</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Bridging Business Users and Technical Developers</p>
      </div>
    </motion.div>

    {/* Main Content - Two Column Layout */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* AI Agent Builder Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Sparkles className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Nexus: The Architect (Text-to-Flow)
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            <span className="text-[#F8D57E] font-semibold">Natural Language First</span> — Nexus synthesizes logic, creates variables, and maps branches. The system figures it out without explicit scaffolding.
          </p>
          
          {/* Example Prompt */}
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-2 font-medium">Text-to-Flow Orchestration:</p>
            <div className="bg-[#281C46] rounded-lg px-4 py-3 border border-white/20">
              <p className="text-white/90 text-sm italic">"Build a flight cancellation flow with a $50 fee"</p>
            </div>
            <div className="flex items-center mt-3">
              <ArrowRight className="w-4 h-4 text-[#F8D57E] mr-2" />
              <span className="text-white/80 text-sm">Nexus generates complete flow + GenUI components</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <UserCheck className="w-4 h-4 text-[#F8D57E] mr-2" />
            <span className="text-white/70 text-sm">Target Users: <span className="text-[#F8D57E] font-medium">Business Analysts, SMEs, Citizen Developers</span></span>
          </div>
        </motion.div>

        {/* Pro-Code Access Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <FlaskConical className="w-5 h-5 mr-2" />
            Pro-Code Access
          </h4>
          <p className="text-[#281C46]/90 text-sm leading-relaxed mb-3">
            Write custom logic in <span className="font-semibold">Node.js</span>, exposed as reusable visual nodes in the flow builder. Supports <span className="font-semibold">low-code</span>, <span className="font-semibold">no-code</span>, and <span className="font-semibold">pro-code</span> based on the choice of the enterprise and developer.
          </p>
          <div className="bg-[#281C46]/10 rounded-xl p-3">
            <p className="text-[#281C46]/70 text-xs mb-2 font-medium">Collaborative Workflow:</p>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="bg-[#281C46] rounded-lg px-3 py-2 mb-1">
                  <span className="text-white text-xs font-medium">Developers</span>
                </div>
                <p className="text-[#281C46]/60 text-[10px]">Build backend integrations</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#281C46]/40 mx-2" />
              <div className="text-center flex-1">
                <div className="bg-[#281C46] rounded-lg px-3 py-2 mb-1">
                  <span className="text-white text-xs font-medium">Business Analysts</span>
                </div>
                <p className="text-[#281C46]/60 text-[10px]">Arrange customer journey</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Generative Integration Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Zap className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Generative Integration (Legacy Systems)
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Paste raw API documentation and the system <span className="text-[#F8D57E] font-semibold">auto-generates</span> integration code, data mapping, and error handling.
          </p>
          
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-2 font-medium">Supported Formats:</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-[#5A3BFE]/40 text-white text-xs px-3 py-1 rounded-full">Swagger</span>
              <span className="bg-[#5A3BFE]/40 text-white text-xs px-3 py-1 rounded-full">OpenAPI</span>
              <span className="bg-[#5A3BFE]/40 text-white text-xs px-3 py-1 rounded-full">CURL Commands</span>
              <span className="bg-[#5A3BFE]/40 text-white text-xs px-3 py-1 rounded-full">Raw Docs</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white/80 text-sm">Auto-discovers fields from backend</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white/80 text-sm">Makes data elements available to app</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white/80 text-sm">Accelerates legacy system connection</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tools Summary Table */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm flex-1"
        >
          <h4 className="font-bold text-black text-lg mb-3">Development Tools Summary</h4>
          <div className="space-y-3">
            {[
              { tool: "AI Agent Builder", user: "Business Users / SMEs", function: "No-code agent creation via NL prompts", color: "bg-[#5A3BFE]" },
              { tool: "Flow Builder", user: "Analysts / Developers", function: "Visual conversation design", color: "bg-[#F8D57E]" },
              { tool: "Pro-Code IDE", user: "Developers", function: "Node.js custom logic", color: "bg-[#281C46]" },
              { tool: "Integration Studio", user: "Developers", function: "API connections & data mapping", color: "bg-green-500" },
              { tool: "Engage Agents", user: "Business Users / Marketers", function: "Campaign & engagement automation", color: "bg-purple-500" },
              { tool: "Inbox Agents", user: "Support Teams / Agents", function: "Unified inbox & ticket management", color: "bg-orange-500" },
            ].map((item) => (
              <div key={item.tool} className="flex items-center bg-gray-50 rounded-lg p-2.5">
                <div className={`${item.color} w-2 h-8 rounded-full mr-3`}></div>
                <div className="flex-1">
                  <p className="text-[#281C46] text-sm font-semibold">{item.tool}</p>
                  <p className="text-[#281C46]/60 text-xs">{item.function}</p>
                </div>
                <span className="bg-[#5A3BFE]/10 text-[#5A3BFE] text-xs px-2 py-1 rounded-full">{item.user}</span>
              </div>
            ))}
          </div>
          <p className="text-[#281C46]/50 text-xs mt-3 italic">No required third-party tools — fully integrated platform</p>
        </motion.div>
      </div>
    </div>

    {/* Bottom Key Insight */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-gradient-to-r from-[#5A3BFE]/10 to-[#F8D57E]/20 rounded-2xl px-6 py-4 flex items-center gap-4"
    >
      <Lightbulb className="w-6 h-6 text-[#5A3BFE] flex-shrink-0" />
      <p className="text-[#281C46] font-medium">
        <span className="font-bold">Key Differentiator:</span> Agentic Generation + Generative Integration enables SMEs to build functional agents while developers handle complex integrations — all within a unified, no-third-party-required platform.
      </p>
    </motion.div>
  </div>
)

// Resource Orchestration & Application Execution Slide
const ResourceOrchestrationSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Activity className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Resource Orchestration & Execution</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Query Execution Planning with Robust State Management</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Query Execution Planner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Workflow className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Query Execution Planner
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Constructs prompts by combining four critical inputs for successful task execution:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "User Query", desc: "Current request" },
              { label: "System Instructions", desc: "Guardrails & rules" },
              { label: "Retrieved Context", desc: "KB & Tool data" },
              { label: "Conversation History", desc: "Full session context" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-lg p-3">
                <p className="text-[#F8D57E] text-sm font-semibold">{item.label}</p>
                <p className="text-white/70 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* State Management Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <Layers className="w-5 h-5 mr-2" />
            Dual-Layer State Management
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#281C46]/10 rounded-xl p-3">
              <p className="text-[#281C46] text-sm font-semibold">User Graph</p>
              <p className="text-[#281C46]/70 text-xs">Long-term persistent memory</p>
            </div>
            <div className="bg-[#281C46]/10 rounded-xl p-3">
              <p className="text-[#281C46] text-sm font-semibold">Session Memory</p>
              <p className="text-[#281C46]/70 text-xs">Short-term conversation state</p>
            </div>
          </div>
          <p className="text-[#281C46]/80 text-sm mt-3 italic">
            Enables non-linear execution: pause Payment → execute Address Change → resume Payment
          </p>
        </motion.div>

        {/* Super Agent Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-[#281C46] to-[#5A3BFE] rounded-2xl p-5 shadow-lg"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Shield className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Super Agent — The Orchestration Boss
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-3">
            The <span className="text-[#F8D57E] font-semibold">Super Agent</span> acts as the central manager, overseeing all agent activities and ensuring task completion.
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/80 text-sm">Manages and delegates work to specialized agents</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/80 text-sm">Monitors task progress and completion status</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/80 text-sm">Reassigns agents until tasks are successfully completed</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Zero-Copy RAG Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Cloud className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Zero-Copy RAG Architecture
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Knowledge Hub connects to <span className="text-[#F8D57E] font-semibold">150+ distributed data sources</span> without migrating data.
          </p>
          <div className="bg-white/10 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex flex-wrap gap-2">
                {["SharePoint", "Confluence", "Google Drive", "Websites"].map((source) => (
                  <span key={source} className="bg-[#5A3BFE]/40 text-white text-xs px-2 py-1 rounded">{source}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <ArrowRight className="w-4 h-4 text-[#F8D57E] mr-2" />
              <span className="text-white/80 text-sm">Semantic indexing → Vector DB → Runtime retrieval</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/80 text-sm">Data freshness — no stale copies</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/80 text-sm">Respects source system access controls</span>
            </div>
          </div>
        </motion.div>

        {/* Data Sequencing Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm"
        >
          <h4 className="font-bold text-black text-lg mb-3">Intelligent Data Sequencing</h4>
          <p className="text-[#281C46]/80 text-sm mb-3">
            The Orchestrator retrieves relevant "chunks" via vector similarity, then <span className="font-semibold text-[#5A3BFE]">sequences</span> them to determine logical answer order.
          </p>
          <div className="flex items-center bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2">
              <span className="bg-[#5A3BFE] text-white text-xs px-2 py-1 rounded">Chunk A</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
              <span className="bg-[#5A3BFE] text-white text-xs px-2 py-1 rounded">Chunk B</span>
              <ArrowRight className="w-3 h-3 text-gray-400" />
              <span className="bg-[#F8D57E] text-[#281C46] text-xs px-2 py-1 rounded font-semibold">Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom Key Insight */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-gradient-to-r from-[#5A3BFE]/10 to-[#F8D57E]/20 rounded-2xl px-6 py-4 flex items-center gap-4"
    >
      <Lightbulb className="w-6 h-6 text-[#5A3BFE] flex-shrink-0" />
      <p className="text-[#281C46] font-medium">
        <span className="font-bold">Key Differentiator:</span> Zero-Copy RAG ensures data freshness while dual-layer state management enables complex, non-linear workflow execution without losing context.
      </p>
    </motion.div>
  </div>
)

// Pre-Built Application Components Slide
const PreBuiltComponentsSlide = () => (
  <div className="flex flex-col h-full px-10 py-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-4"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Sparkles className="w-7 h-7 text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-black">Pre-Built Application Components</h2>
        <p className="text-[#281C46]/70 text-base mt-1">From Boilerplate to Intelligent Scaffolding — The Nexus Paradigm</p>
      </div>
    </motion.div>

    {/* Paradigm Shift Banner */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-gradient-to-r from-[#281C46] to-[#5A3BFE] rounded-xl px-5 py-3 mb-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-sm line-through">Boilerplate Code</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#F8D57E]" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F8D57E]" />
            <span className="text-[#F8D57E] font-semibold text-sm">AI-Assisted Development</span>
          </div>
          <ArrowRight className="w-4 h-4 text-[#F8D57E]" />
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-white" />
            <span className="text-white font-bold text-sm">Nexus: Business-Intelligent Scaffolding</span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Main Content - Three Columns */}
    <div className="grid grid-cols-3 gap-4 flex-1">
      {/* Column 1 - The Old Way */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#281C46]/5 border border-[#281C46]/10 rounded-2xl p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-[#281C46]/20 rounded-lg p-1.5">
            <FileCode className="w-4 h-4 text-[#281C46]/60" />
          </div>
          <h3 className="font-bold text-[#281C46]/60 text-sm">The Old Way</h3>
        </div>
        <p className="text-[#281C46]/50 text-xs mb-3 italic">Templates & Marketplaces</p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
            <span className="text-[#281C46]/70 text-xs">Browse marketplace for templates</span>
          </div>
          <div className="flex items-start gap-2">
            <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
            <span className="text-[#281C46]/70 text-xs">Manually adapt to your use case</span>
          </div>
          <div className="flex items-start gap-2">
            <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
            <span className="text-[#281C46]/70 text-xs">One-size-fits-all approach</span>
          </div>
          <div className="flex items-start gap-2">
            <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
            <span className="text-[#281C46]/70 text-xs">No business context awareness</span>
          </div>
          <div className="flex items-start gap-2">
            <X className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
            <span className="text-[#281C46]/70 text-xs">Weeks of customization work</span>
          </div>
        </div>
      </motion.div>

      {/* Column 2 - Nexus Intelligent Scaffolding */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-4 shadow-lg"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-[#F8D57E] rounded-lg p-1.5">
            <Brain className="w-4 h-4 text-[#281C46]" />
          </div>
          <h3 className="font-bold text-white text-sm">Nexus: Intelligent Scaffolding</h3>
        </div>
        <p className="text-[#F8D57E] text-xs mb-3 font-medium">Build from scratch — fast & smart</p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-white/90 text-xs">Analyzes YOUR business data first</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-white/90 text-xs">Recommends use cases by ROI impact</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-white/90 text-xs">Generates flows tailored to your context</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-white/90 text-xs">Zero manual configuration needed</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
            <span className="text-white/90 text-xs">Production-ready in days, not weeks</span>
          </div>
        </div>
        <div className="mt-3 bg-white/10 rounded-lg p-2">
          <p className="text-[#F8D57E] text-[10px] font-semibold text-center">Like Cursor for code — but for enterprise agents</p>
        </div>
      </motion.div>

      {/* Column 3 - Use Case Recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-4 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-[#5A3BFE] rounded-lg p-1.5">
            <Target className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-bold text-black text-sm">Use Case Recommendation</h3>
        </div>
        <p className="text-[#5A3BFE] text-xs mb-3 font-medium">Data-driven automation roadmap</p>
        <div className="space-y-2.5">
          <div className="bg-[#5A3BFE]/5 rounded-lg p-2">
            <p className="text-[#281C46] text-xs font-semibold flex items-center gap-1.5">
              <BarChart3 className="w-3 h-3 text-[#5A3BFE]" />
              Automation Heatmaps
            </p>
            <p className="text-[#281C46]/60 text-[10px] mt-1">Identify quick wins vs strategic investments</p>
          </div>
          <div className="bg-[#F8D57E]/20 rounded-lg p-2">
            <p className="text-[#281C46] text-xs font-semibold flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-[#5A3BFE]" />
              ROI Projections
            </p>
            <p className="text-[#281C46]/60 text-[10px] mt-1">Estimated deflection before building</p>
          </div>
          <div className="bg-[#5A3BFE]/5 rounded-lg p-2">
            <p className="text-[#281C46] text-xs font-semibold flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-[#5A3BFE]" />
              Priority Ranking
            </p>
            <p className="text-[#281C46]/60 text-[10px] mt-1">Based on ticket volume & complexity</p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Bottom Section - How It Works */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-4 bg-[#F8D57E] rounded-2xl p-4"
    >
      <h4 className="font-bold text-[#281C46] text-sm mb-3 flex items-center gap-2">
        <Zap className="w-4 h-4" />
        Nexus Scaffolding Process
      </h4>
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-[#281C46] rounded-xl p-3 text-center">
          <div className="bg-[#F8D57E] rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
            <span className="text-[#281C46] text-xs font-bold">1</span>
          </div>
          <p className="text-white text-xs font-semibold">Ingest Data</p>
          <p className="text-white/60 text-[10px] mt-1">Tickets, logs, docs</p>
        </div>
        <div className="bg-[#281C46] rounded-xl p-3 text-center">
          <div className="bg-[#F8D57E] rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
            <span className="text-[#281C46] text-xs font-bold">2</span>
          </div>
          <p className="text-white text-xs font-semibold">Analyze Patterns</p>
          <p className="text-white/60 text-[10px] mt-1">Find automation opportunities</p>
        </div>
        <div className="bg-[#281C46] rounded-xl p-3 text-center">
          <div className="bg-[#F8D57E] rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
            <span className="text-[#281C46] text-xs font-bold">3</span>
          </div>
          <p className="text-white text-xs font-semibold">Recommend</p>
          <p className="text-white/60 text-[10px] mt-1">Prioritized use cases</p>
        </div>
        <div className="bg-[#281C46] rounded-xl p-3 text-center">
          <div className="bg-[#F8D57E] rounded-full w-6 h-6 flex items-center justify-center mx-auto mb-2">
            <span className="text-[#281C46] text-xs font-bold">4</span>
          </div>
          <p className="text-white text-xs font-semibold">Generate Agent</p>
          <p className="text-white/60 text-[10px] mt-1">Production-ready flows</p>
        </div>
      </div>
    </motion.div>

    {/* Key Insight */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-3 flex items-center gap-3 px-2"
    >
      <Lightbulb className="w-5 h-5 text-[#5A3BFE] flex-shrink-0" />
      <p className="text-[#281C46] text-sm">
        <span className="font-bold">Key Insight:</span> Just as developers moved from boilerplate to AI-assisted coding, Nexus enables <span className="text-[#5A3BFE] font-semibold">business-intelligent scaffolding from scratch</span> — faster than adapting templates.
      </p>
    </motion.div>
  </div>
)

// Application Testing Tools Slide
const AppTestingToolsSlide = () => (
  <div className="flex flex-col h-full px-8 py-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-4"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
        <FlaskConical className="w-7 h-7 text-white" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-black">Automated Agentic Testing</h2>
        <p className="text-[#281C46]/70 text-base mt-1">Machines Testing Machines — Solving the Scenario Explosion Problem</p>
      </div>
    </motion.div>

    {/* Main Content - Three Column Layout */}
    <div className="grid grid-cols-3 gap-4 flex-1">
      {/* Left Column - Four Pillars */}
      <div className="flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-4 shadow-lg"
        >
          <h3 className="text-base font-bold text-white flex items-center mb-3">
            <Target className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Four Pillars of Testing
          </h3>
          <div className="space-y-1.5">
            <div className="bg-white/10 rounded-lg p-1.5">
              <p className="text-[#F8D57E] text-xs font-semibold">KB Testing</p>
              <p className="text-white/70 text-[10px]">RAG retrieval verification</p>
            </div>
            <div className="bg-white/10 rounded-lg p-1.5">
              <p className="text-[#F8D57E] text-xs font-semibold">Copilot Sessions</p>
              <p className="text-white/70 text-[10px]">Regression of known paths</p>
            </div>
            <div className="bg-white/10 rounded-lg p-1.5">
              <p className="text-[#F8D57E] text-xs font-semibold">Scenario Simulation</p>
              <p className="text-white/70 text-[10px]">Goal-based autonomous testing</p>
            </div>
            <div className="bg-white/10 rounded-lg p-1.5">
              <p className="text-[#F8D57E] text-xs font-semibold">Automated Regression</p>
              <p className="text-white/70 text-[10px]">Systemic stability checks</p>
            </div>
          </div>
        </motion.div>

        {/* Nexus QA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F8D57E] rounded-2xl p-4 shadow-md flex-1"
        >
          <h4 className="font-bold text-[#281C46] text-sm flex items-center mb-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Nexus: QA Engineer & Red Team
          </h4>
          <p className="text-[#281C46]/80 text-xs leading-relaxed mb-2">
            Define personas — Nexus auto-generates conversations, provides results, and suggests fixes.
          </p>
          <div className="bg-[#281C46]/10 rounded-lg p-2">
            <p className="text-[#281C46] text-xs font-medium">Adversary Personas</p>
            <p className="text-[#281C46]/60 text-[10px]">Prompt injection & guardrail testing</p>
          </div>
        </motion.div>
      </div>

      {/* Middle Column - Scenario Testing Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col gap-3"
      >
        <div className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-3 shadow-sm flex-1">
          <h4 className="font-bold text-black text-sm mb-2 flex items-center">
            <Users className="w-4 h-4 mr-2 text-[#5A3BFE]" />
            Scenario-Based Simulation
          </h4>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-2">
            <img 
              src="/scenario-based-testing.png" 
              alt="Scenario-based testing interface" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-[#281C46]/70 text-[10px]">
            Simulated Users with goals & personas interact with target bot — validates dynamic, non-deterministic flows
          </p>
        </div>

        {/* Metrics */}
        <div className="bg-[#281C46] rounded-2xl p-3 shadow-lg">
          <h4 className="font-bold text-white text-sm mb-2">Key Metrics</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <p className="text-[#F8D57E] text-lg font-bold">100+</p>
              <p className="text-white/60 text-[10px]">Test cases recommended</p>
            </div>
            <div className="bg-white/10 rounded-lg p-2 text-center">
              <p className="text-[#F8D57E] text-lg font-bold">75</p>
              <p className="text-white/60 text-[10px]">Empathy score target</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column - Reports Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-3"
      >
        <div className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-3 shadow-sm flex-1">
          <h4 className="font-bold text-black text-sm mb-2 flex items-center">
            <FileText className="w-4 h-4 mr-2 text-[#5A3BFE]" />
            Detailed Test Reports
          </h4>
          <div className="rounded-xl overflow-hidden border border-gray-200 mb-2">
            <img 
              src="/detailed test reports.png" 
              alt="Detailed test reports" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-[#281C46]/70 text-[10px]">
            Accuracy, Empathy Scores, AI Reasoning traces — debug why agents fail
          </p>
        </div>

        {/* CI/CD Integration */}
        <div className="bg-gradient-to-r from-[#5A3BFE]/10 to-[#F8D57E]/20 rounded-2xl p-3">
          <h4 className="font-bold text-[#281C46] text-sm mb-2 flex items-center">
            <Workflow className="w-4 h-4 mr-2 text-[#5A3BFE]" />
            CI/CD Integration
          </h4>
          <p className="text-[#281C46]/70 text-[10px]">
            Plug into Jenkins/GitLab/GitHub Actions — deploy only when Accuracy &gt; 90% & Empathy &gt; 75%
          </p>
        </div>
      </motion.div>
    </div>

    {/* Bottom Key Insight */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-4 bg-[#281C46] rounded-2xl px-5 py-3 flex items-center gap-4"
    >
      <Lightbulb className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white text-sm">
        <span className="font-bold text-[#F8D57E]">Big Differentiator:</span> Manual testing is mathematically impossible for GenAI — "Agentic Testing" uses AI to test AI, providing statistical confidence across thousands of scenarios.
      </p>
    </motion.div>
  </div>
)

// AI Observability and Administration Slide
const AIObservabilitySlide = () => (
  <div className="flex flex-col h-full px-16 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-5"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <BarChart3 className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">AI Observability & Administration</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium">Powered by <span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Nexus</span> — The Proactive Analyst & Self-Healing Mechanic</p>
    </motion.div>

    {/* Main Content - 2 Row Layout */}
    <div className="max-w-6xl mx-auto w-full space-y-4">
      {/* Top Row - Nexus as Central Brain */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-[#281C46] via-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-[#F8D57E] rounded-xl p-3">
              <Brain className="w-8 h-8 text-[#281C46]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Nexus: The Unified Observability Brain</h3>
              <p className="text-white/70 text-sm">Full context of every conversation, workflow, and data point</p>
            </div>
          </div>
          <div className="flex gap-3">
            {[
              { label: "Eyes", desc: "Analyze patterns" },
              { label: "Hands", desc: "Fix issues" },
              { label: "Authority", desc: "Act autonomously" },
            ].map((pillar) => (
              <div key={pillar.label} className="bg-white/10 rounded-lg px-4 py-2 text-center">
                <span className="text-[#F8D57E] font-bold text-sm">{pillar.label}</span>
                <p className="text-white/60 text-xs">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Row - 3 Columns */}
      <div className="grid grid-cols-3 gap-4">
        {/* Column 1 - Chain of Thought */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border-2 border-[#5A3BFE]/20 rounded-2xl p-4 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-[#5A3BFE]/10 rounded-lg p-2">
              <Activity className="w-5 h-5 text-[#5A3BFE]" />
            </div>
            <h3 className="text-base font-bold text-black">Chain of Thought Visibility</h3>
          </div>
          <div className="space-y-1.5">
            {["Intent detection reasoning", "Tool selection logic", "KB chunks retrieved", "Response generation path"].map((item, index) => (
              <div key={item} className="flex items-center bg-gray-50 rounded-lg px-3 py-1.5">
                <span className="bg-[#5A3BFE] text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center mr-2 text-[10px]">{index + 1}</span>
                <span className="text-[#281C46]/80 text-xs">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-[#281C46]/50 text-xs mt-3">Full transparency for debugging & compliance</p>
        </motion.div>

        {/* Column 2 - Automated Root Cause Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-4 shadow-md"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-[#281C46] rounded-lg p-2">
              <Target className="w-5 h-5 text-[#F8D57E]" />
            </div>
            <h3 className="text-base font-bold text-[#281C46]">Automated Root Cause Analysis</h3>
          </div>
          <div className="space-y-2">
            <div className="bg-[#281C46]/10 rounded-lg p-3">
              <p className="text-[#281C46] text-xs font-semibold mb-1">When performance dips, Nexus:</p>
              <div className="space-y-1">
                {["Identifies broken nodes automatically", "Detects token expirations & API failures", "Pinpoints logic errors in flows"].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle2 className="w-3 h-3 text-[#281C46] mr-1.5 flex-shrink-0" />
                    <span className="text-[#281C46]/80 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[#281C46]/60 text-xs mt-3">No manual log diving required</p>
        </motion.div>

        {/* Column 3 - Self-Healing Mechanic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-4 shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-white/20 rounded-lg p-2">
              <RefreshCw className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base font-bold text-white">Self-Healing Mechanic</h3>
          </div>
          <div className="space-y-1.5">
            {[
              { trigger: "Broken Node", action: "Auto-fix & notify" },
              { trigger: "Low Confidence", action: "Flag for review" },
              { trigger: "Unknown Query", action: "Suggest KB update" },
              { trigger: "Doc Changed", action: "Auto-sync flows" },
            ].map((item) => (
              <div key={item.trigger} className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-1.5">
                <span className="text-white/80 text-xs">{item.trigger}</span>
                <span className="text-[#F8D57E] text-xs font-semibold">{item.action}</span>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-xs mt-3">Implements fixes autonomously for approval</p>
        </motion.div>
      </div>
    </div>

    {/* Bottom Summary */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-4 bg-[#281C46] rounded-2xl px-6 py-3 flex items-center justify-center gap-4 max-w-6xl mx-auto w-full"
    >
      <Sparkles className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Nexus Advantage:</span> Continuous evolution with zero manual tuning — the AI monitors, diagnoses, and heals itself
      </p>
    </motion.div>
  </div>
)

// Guardrails and Customer Data Security Slide
const GuardrailsSecuritySlide = () => (
  <div className="flex flex-col h-full px-16 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Shield className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Guardrails & Data Security</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium"><span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Super Agent</span> Governance with <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">Enterprise-Grade</span> Protection</p>
    </motion.div>

    {/* Main Content Grid - 3 Columns */}
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full">
      {/* Column 1 - Super Agent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2.5 w-fit mb-3">
          <ShieldAlert className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3">Super Agent</h3>
        <p className="text-white/80 text-sm mb-3">Real-time monitoring of every input/output</p>
        <div className="space-y-2">
          {["Topic Adherence", "Tone Policing", "PII Filtering", "Brand Guidelines"].map((item) => (
            <div key={item} className="flex items-center bg-white/10 rounded-lg px-3 py-2">
              <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-2" />
              <span className="text-white/90 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-white/20">
          <p className="text-white/70 text-xs">Blocks competitors, politics & sensitive leaks</p>
        </div>
      </motion.div>

      {/* Column 2 - Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2.5 w-fit mb-3">
          <Award className="w-6 h-6 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-3">Certifications</h3>
        <div className="grid grid-cols-2 gap-2">
          {["ISO 27001", "ISO 27701", "SOC 2 Type II", "HIPAA Ready"].map((cert) => (
            <div key={cert} className="bg-[#281C46]/10 rounded-lg px-2 py-2 text-center">
              <span className="text-[#281C46] text-xs font-medium">{cert}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/60 text-[10px] font-medium mb-1.5">Upcoming</p>
          <div className="grid grid-cols-2 gap-2">
            {["PCI DSS", "ISO 42001"].map((cert) => (
              <div key={cert} className="bg-[#281C46]/5 border border-dashed border-[#281C46]/30 rounded-lg px-2 py-1.5 text-center">
                <span className="text-[#281C46]/70 text-xs font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Column 3 - Encryption */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 w-fit mb-3">
          <Lock className="w-6 h-6 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-3">Data Protection</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-[#5A3BFE]/5 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">In Transit</span>
            <span className="bg-green-500/20 text-green-600 text-xs px-2 py-1 rounded font-medium">TLS 1.3</span>
          </div>
          <div className="flex items-center justify-between bg-[#5A3BFE]/5 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">At Rest</span>
            <span className="bg-green-500/20 text-green-600 text-xs px-2 py-1 rounded font-medium">AES 256</span>
          </div>
          <div className="flex items-center justify-between bg-[#5A3BFE]/5 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">PII/PCI</span>
            <span className="bg-green-500/20 text-green-600 text-xs px-2 py-1 rounded font-medium">Auto-Redact</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs">Sensitive data never enters LLM in cleartext</p>
        </div>
      </motion.div>
    </div>

    {/* Bottom Summary */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-[#281C46] rounded-2xl px-6 py-4 flex items-center justify-center gap-4 max-w-6xl mx-auto w-full"
    >
      <Shield className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Key Differentiator:</span> Super Agent provides active real-time monitoring — enterprise-ready from day one
      </p>
    </motion.div>
  </div>
)

// Human + AI Interactions and Handoffs Slide
const HumanAIHandoffsSlide = () => (
  <div className="flex flex-col h-full px-16 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Handshake className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Human + AI Handoffs</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium"><span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Bot Unblocker</span> + <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">Zero-Repetition</span> Escalation</p>
    </motion.div>

    {/* Main Content Grid - 3 Columns */}
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full">
      {/* Column 1 - Bot Unblocker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2.5 w-fit mb-3">
          <UserCheck className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3">Bot Unblocker</h3>
        <p className="text-white/80 text-sm mb-3">Low-confidence → Human validation</p>
        <div className="space-y-2">
          <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
            <Bot className="w-4 h-4 text-[#F8D57E] mr-2" />
            <span className="text-white/90 text-sm">Agent uncertain</span>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-[#F8D57E]" />
          </div>
          <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
            <UserCheck className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-white/90 text-sm">Human confirms</span>
          </div>
          <div className="flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-[#F8D57E]" />
          </div>
          <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
            <Brain className="w-4 h-4 text-[#F8D57E] mr-2" />
            <span className="text-white/90 text-sm">RLHF improves</span>
          </div>
        </div>
      </motion.div>

      {/* Column 2 - Intelligent Escalation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2.5 w-fit mb-3">
          <Headphones className="w-6 h-6 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-3">Intelligent Escalation</h3>
        <p className="text-[#281C46]/80 text-sm mb-3">Full Context Object handoff</p>
        <div className="space-y-2">
          {["Full Transcript", "User Graph History", "Identified Intent", "Current Sentiment"].map((item) => (
            <div key={item} className="flex items-center bg-[#281C46]/10 rounded-lg px-3 py-2">
              <CheckCircle2 className="w-4 h-4 text-[#281C46] mr-2" />
              <span className="text-[#281C46] text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/70 text-xs">User never repeats themselves</p>
        </div>
      </motion.div>

      {/* Column 3 - Nexus Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 w-fit mb-3">
          <Sparkles className="w-6 h-6 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-3">Nexus Agent Support</h3>
        <p className="text-[#281C46]/70 text-sm mb-3">Real-time assistance in Yellow.ai Inbox</p>
        <div className="flex flex-wrap gap-2">
          {["Coaching Nudges", "Magic Rewrites", "Sentiment Coaching", "Page Context"].map((feature) => (
            <span key={feature} className="bg-[#5A3BFE]/10 text-[#5A3BFE] text-xs px-3 py-1.5 rounded-full font-medium">{feature}</span>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs">First-class support for human agents</p>
        </div>
      </motion.div>
    </div>

    {/* Bottom Summary */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-[#281C46] rounded-2xl px-6 py-4 flex items-center justify-center gap-4 max-w-6xl mx-auto w-full"
    >
      <Handshake className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Key Differentiator:</span> Bot Unblocker enables RLHF learning + zero-repetition handoffs with full context
      </p>
    </motion.div>
  </div>
)

// Application Lifecycle Management Slide
const AppLifecycleSlide = () => (
  <div className="flex flex-col h-full px-16 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <RefreshCw className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Application Lifecycle Management</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium"><span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Granular Promotion</span> with <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">One-Click</span> Rollback</p>
    </motion.div>

    {/* Main Content Grid - 3 Columns */}
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full">
      {/* Column 1 - Environments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2.5 w-fit mb-3">
          <Layers className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3">Environment Pipeline</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-blue-500/20 rounded-lg px-3 py-2">
            <FlaskConical className="w-4 h-4 text-blue-400" />
            <span className="text-white/90 text-sm">Development</span>
            <ArrowRight className="w-4 h-4 text-white/40" />
          </div>
          <div className="flex items-center justify-between bg-yellow-500/20 rounded-lg px-3 py-2">
            <Target className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm">Staging</span>
            <ArrowRight className="w-4 h-4 text-white/40" />
          </div>
          <div className="flex items-center justify-between bg-green-500/20 rounded-lg px-3 py-2">
            <Rocket className="w-4 h-4 text-green-400" />
            <span className="text-white/90 text-sm">Production</span>
            <CheckCircle2 className="w-4 h-4 text-green-400" />
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-white/20">
          <p className="text-white/70 text-xs">Version control for every component</p>
        </div>
      </motion.div>

      {/* Column 2 - Granular Promotion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2.5 w-fit mb-3">
          <Workflow className="w-6 h-6 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-3">Granular Promotion</h3>
        <p className="text-[#281C46]/80 text-sm mb-3">Update specific modules only</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-green-500/20 rounded-lg p-2 text-center border border-green-500/40">
            <span className="text-green-700 text-xs font-medium">Returns</span>
            <p className="text-green-600/70 text-[10px]">Updated</p>
          </div>
          <div className="bg-[#281C46]/10 rounded-lg p-2 text-center">
            <span className="text-[#281C46]/60 text-xs">Sales</span>
            <p className="text-[#281C46]/40 text-[10px]">Same</p>
          </div>
          <div className="bg-[#281C46]/10 rounded-lg p-2 text-center">
            <span className="text-[#281C46]/60 text-xs">Support</span>
            <p className="text-[#281C46]/40 text-[10px]">Same</p>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/70 text-xs">Different teams own different journeys</p>
        </div>
      </motion.div>

      {/* Column 3 - Rollback */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 w-fit mb-3">
          <RefreshCw className="w-6 h-6 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-3">One-Click Rollback</h3>
        <p className="text-[#281C46]/70 text-sm mb-3">Instant revert on anomaly detection</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-red-500/10 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">Anomaly</span>
            <span className="text-red-500 text-xs font-medium">Detected</span>
          </div>
          <div className="flex items-center justify-between bg-yellow-500/10 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">Alert</span>
            <span className="text-yellow-600 text-xs font-medium">Triggered</span>
          </div>
          <div className="flex items-center justify-between bg-green-500/10 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">Rollback</span>
            <span className="text-green-600 text-xs font-medium">One-Click</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs">Instant recovery to stable state</p>
        </div>
      </motion.div>
    </div>

    {/* Bottom Summary */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-[#281C46] rounded-2xl px-6 py-4 flex items-center justify-center gap-4 max-w-6xl mx-auto w-full"
    >
      <RefreshCw className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Key Differentiator:</span> Modular updates without risking stability + instant rollback for recovery
      </p>
    </motion.div>
  </div>
)

// Legacy System Integration Slide
const LegacyIntegrationSlide = () => (
  <div className="flex flex-col h-full px-16 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Network className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Legacy System Integration</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium"><span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Connect</span> vs. Collect — <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">150+</span> Pre-Built Connectors</p>
    </motion.div>

    {/* Main Content Grid - 3 Columns */}
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full">
      {/* Column 1 - Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2.5 w-fit mb-3">
          <Cloud className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3">Connect vs. Collect</h3>
        <p className="text-white/80 text-sm mb-3">Orchestrate, don't become system of record</p>
        <div className="space-y-2">
          {["REST", "SOAP", "GraphQL", "MCP Protocol"].map((protocol) => (
            <div key={protocol} className="flex items-center bg-white/10 rounded-lg px-3 py-2">
              <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-2" />
              <span className="text-white/90 text-sm">{protocol}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-white/20">
          <p className="text-white/70 text-xs">Real-time data, no stale copies</p>
        </div>
      </motion.div>

      {/* Column 2 - Pre-Built Connectors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2.5 w-fit mb-3">
          <Store className="w-6 h-6 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-3">150+ Connectors</h3>
        <div className="flex flex-wrap gap-2">
          {["SAP", "Oracle", "Salesforce", "ServiceNow", "Workday", "Dynamics"].map((system) => (
            <span key={system} className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">{system}</span>
          ))}
        </div>
        <div className="mt-4 bg-[#281C46]/10 rounded-lg p-3">
          <p className="text-[#281C46]/80 text-xs">Supported Formats:</p>
          <p className="text-[#281C46] text-sm font-medium">WSDL, Swagger, OpenAPI, CURL</p>
        </div>
        <div className="mt-4 pt-3 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/70 text-xs">Paste API docs → working code</p>
        </div>
      </motion.div>

      {/* Column 3 - Yellow Legacy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 w-fit mb-3">
          <Zap className="w-6 h-6 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-3">Yellow Legacy Module</h3>
        <p className="text-[#281C46]/70 text-sm mb-3">For COBOL, older SAP, mainframes</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-[#5A3BFE]/5 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">On-Premise</span>
            <span className="text-[#5A3BFE] text-xs font-medium">Bridge</span>
          </div>
          <div className="flex items-center justify-between bg-[#5A3BFE]/5 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">Direct DB</span>
            <span className="text-[#5A3BFE] text-xs font-medium">Execution</span>
          </div>
          <div className="flex items-center justify-between bg-[#5A3BFE]/5 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">API Gateway</span>
            <span className="text-[#5A3BFE] text-xs font-medium">To Agent</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs">No modern API? No problem.</p>
        </div>
      </motion.div>
    </div>

    {/* Bottom Summary */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-[#281C46] rounded-2xl px-6 py-4 flex items-center justify-center gap-4 max-w-6xl mx-auto w-full"
    >
      <Network className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Key Differentiator:</span> Generative Integration — paste API docs, get working code automatically
      </p>
    </motion.div>
  </div>
)

// Voice and Telephony Support Slide
const VoiceTelephonySlide = () => (
  <div className="flex flex-col h-full px-12 py-4 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-4"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2 mr-3">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-black">Voice & Telephony Support</h2>
      </div>
      <p className="text-[#281C46] text-base font-medium"><span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">VoiceX</span> Full-Duplex with <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">&lt;500ms</span> Latency & Secure Transmission</p>
    </motion.div>

    {/* Main Content Grid - 2 Rows */}
    <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full">
      {/* Row 1 - 4 Columns */}
      <div className="grid grid-cols-4 gap-4">
        {/* Column 1 - VoiceX Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-xl p-4 shadow-lg"
        >
          <div className="bg-white/20 rounded-lg p-2 w-fit mb-2">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">Full-Duplex Architecture</h3>
          <p className="text-white/80 text-xs mb-2">Listen while speaking — not a text-bot with STT</p>
          <div className="space-y-1.5">
            {["Barge-In (Instant)", "Back-Channeling", "Voice Streaming"].map((item) => (
              <div key={item} className="flex items-center bg-white/10 rounded-lg px-2 py-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#F8D57E] mr-1.5" />
                <span className="text-white/90 text-xs">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-white/20">
            <div className="flex items-center justify-center">
              <Clock className="w-3 h-3 text-[#F8D57E] mr-1.5" />
              <span className="text-[#F8D57E] font-bold text-sm">&lt;500ms</span>
              <span className="text-white/70 text-xs ml-1.5">Human-like</span>
            </div>
          </div>
        </motion.div>

        {/* Column 2 - Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border-2 border-[#5A3BFE]/30 rounded-xl p-4 shadow-sm"
        >
          <div className="bg-[#5A3BFE]/10 rounded-lg p-2 w-fit mb-2">
            <Shield className="w-5 h-5 text-[#5A3BFE]" />
          </div>
          <h3 className="text-base font-bold text-black mb-2">Secure Voice Transmission</h3>
          <p className="text-[#281C46]/70 text-xs mb-2">End-to-end encrypted audio</p>
          <div className="space-y-1.5">
            <div className="flex items-center bg-[#5A3BFE]/5 rounded-lg px-2 py-1.5">
              <Lock className="w-3 h-3 text-[#5A3BFE] mr-1.5" />
              <span className="text-[#281C46] text-xs font-medium">TLS / SRTP</span>
            </div>
            <div className="flex items-center bg-[#5A3BFE]/5 rounded-lg px-2 py-1.5">
              <Lock className="w-3 h-3 text-[#5A3BFE] mr-1.5" />
              <span className="text-[#281C46] text-xs font-medium">Secure WebSocket (WSS)</span>
            </div>
            <div className="flex items-center bg-[#5A3BFE]/5 rounded-lg px-2 py-1.5">
              <Shield className="w-3 h-3 text-[#5A3BFE] mr-1.5" />
              <span className="text-[#281C46] text-xs font-medium">IP Whitelisting</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-gray-100">
            <p className="text-[#281C46]/60 text-xs">STT/TTS over HTTPS/WSS</p>
          </div>
        </motion.div>

        {/* Column 3 - Outbound Calls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-xl p-4 shadow-md"
        >
          <div className="bg-[#281C46] rounded-lg p-2 w-fit mb-2">
            <PhoneOutgoing className="w-5 h-5 text-[#F8D57E]" />
          </div>
          <h3 className="text-base font-bold text-[#281C46] mb-2">Outbound Call Initiation</h3>
          <p className="text-[#281C46]/80 text-xs mb-2">Proactive customer engagement</p>
          <div className="space-y-1.5">
            <div className="flex items-center bg-[#281C46]/10 rounded-lg px-2 py-1.5">
              <Code className="w-3 h-3 text-[#281C46] mr-1.5" />
              <span className="text-[#281C46] text-xs font-medium">Enqueue API</span>
            </div>
            <div className="flex items-center bg-[#281C46]/10 rounded-lg px-2 py-1.5">
              <Code className="w-3 h-3 text-[#281C46] mr-1.5" />
              <span className="text-[#281C46] text-xs font-medium">Create Call API</span>
            </div>
            <div className="flex items-center bg-[#281C46]/10 rounded-lg px-2 py-1.5">
              <Zap className="w-3 h-3 text-[#281C46] mr-1.5" />
              <span className="text-[#281C46] text-xs font-medium">Event-Triggered Calls</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-[#281C46]/20">
            <p className="text-[#281C46]/70 text-xs">Automated outreach campaigns</p>
          </div>
        </motion.div>

        {/* Column 4 - Cross-Channel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-[#281C46] to-[#5A3BFE] rounded-xl p-4 shadow-lg"
        >
          <div className="bg-white/20 rounded-lg p-2 w-fit mb-2">
            <ArrowLeftRight className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">Cross-Channel Orchestration</h3>
          <p className="text-white/80 text-xs mb-2">Simultaneous multi-channel interactions</p>
          <div className="space-y-1.5">
            <div className="flex items-center bg-white/10 rounded-lg px-2 py-1.5">
              <Phone className="w-3 h-3 text-[#F8D57E] mr-1.5" />
              <span className="text-white/90 text-xs">Voice + Digital Interrupt</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-lg px-2 py-1.5">
              <MessageSquare className="w-3 h-3 text-[#F8D57E] mr-1.5" />
              <span className="text-white/90 text-xs">Click-to-Call from Chat</span>
            </div>
            <div className="flex items-center bg-white/10 rounded-lg px-2 py-1.5">
              <Users className="w-3 h-3 text-[#F8D57E] mr-1.5" />
              <span className="text-white/90 text-xs">Context Preserved</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/20">
            <p className="text-white/70 text-xs">User360 unified context</p>
          </div>
        </motion.div>
      </div>

      {/* Row 2 - Infrastructure Image + Telephony Providers */}
      <div className="grid grid-cols-3 gap-4">
        {/* Infrastructure Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="col-span-2 bg-white border-2 border-[#5A3BFE]/20 rounded-xl p-4 shadow-sm"
        >
          <h3 className="text-sm font-bold text-black mb-2 flex items-center">
            <Server className="w-4 h-4 text-[#5A3BFE] mr-2" />
            Voice Infrastructure Architecture
          </h3>
          <div className="flex justify-center">
            <img 
              src="/voice-telephone-arch.png" 
              alt="Voice Telephony Architecture" 
              className="max-h-[180px] object-contain rounded-lg"
            />
          </div>
        </motion.div>

        {/* Telephony Providers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white border-2 border-[#5A3BFE]/30 rounded-xl p-4 shadow-sm"
        >
          <div className="bg-[#5A3BFE]/10 rounded-lg p-2 w-fit mb-2">
            <Headphones className="w-5 h-5 text-[#5A3BFE]" />
          </div>
          <h3 className="text-base font-bold text-black mb-2">Telephony Infrastructure</h3>
          <p className="text-[#281C46]/70 text-xs mb-2">Carrier-grade with SIP trunking</p>
          <div className="flex flex-wrap gap-1.5">
            {["Twilio", "Genesys", "Avaya", "PSTN", "VoIP", "WebRTC"].map((provider) => (
              <span key={provider} className="bg-[#5A3BFE]/10 text-[#5A3BFE] text-xs px-2 py-1 rounded-full font-medium">{provider}</span>
            ))}
          </div>
          <div className="mt-3 pt-2 border-t border-gray-100">
            <p className="text-[#281C46]/60 text-xs">Bring your own carrier or use Yellow.ai</p>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom Summary */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-4 bg-[#281C46] rounded-xl px-5 py-3 flex items-center justify-center gap-3 max-w-7xl mx-auto w-full"
    >
      <Shield className="w-4 h-4 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-xs">
        <span className="text-[#F8D57E]">Security:</span> TLS/SRTP encrypted voice • Secure WebSocket for VSS • IP whitelisting for SIP trunks • All STT/TTS over HTTPS/WSS
      </p>
    </motion.div>
  </div>
)

// Scalability and Reliability Slide
const ScalabilitySlide = () => (
  <div className="flex flex-col h-full px-16 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Gauge className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Scalability & Reliability</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium"><span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">99.99%</span> Uptime with <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">Kubernetes</span> Auto-Scaling</p>
    </motion.div>

    {/* Main Content Grid - 3 Columns */}
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full">
      {/* Column 1 - Architecture */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2.5 w-fit mb-3">
          <Cloud className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3">Cloud-Native</h3>
        <div className="space-y-2">
          {["Kubernetes Microservices", "Multi-AZ Deployment", "Burstable Capacity", "Auto-Horizontal Scaling"].map((item) => (
            <div key={item} className="flex items-center bg-white/10 rounded-lg px-3 py-2">
              <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-2" />
              <span className="text-white/90 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-white/20">
          <p className="text-white/70 text-xs">Containerized, independently scalable</p>
        </div>
      </motion.div>

      {/* Column 2 - SLA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2.5 w-fit mb-3">
          <Trophy className="w-6 h-6 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-3">Enterprise SLA</h3>
        <div className="bg-[#281C46] rounded-xl p-4 text-center mb-3">
          <span className="text-4xl font-bold text-[#F8D57E]">99.99%</span>
          <p className="text-white/80 text-sm">Uptime Guarantee</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center bg-[#281C46]/10 rounded-lg px-3 py-2">
            <CheckCircle2 className="w-4 h-4 text-[#281C46] mr-2" />
            <span className="text-[#281C46] text-sm">Contractual SLA</span>
          </div>
          <div className="flex items-center bg-[#281C46]/10 rounded-lg px-3 py-2">
            <CheckCircle2 className="w-4 h-4 text-[#281C46] mr-2" />
            <span className="text-[#281C46] text-sm">Auto Escalation</span>
          </div>
        </div>
      </motion.div>

      {/* Column 3 - Scale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 w-fit mb-3">
          <BarChart3 className="w-6 h-6 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-3">Scale & Performance</h3>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-[#5A3BFE]/5 rounded-lg p-3 text-center">
            <span className="text-2xl font-bold text-[#5A3BFE]">1B+</span>
            <p className="text-[#281C46]/60 text-xs">Conversations/Qtr</p>
          </div>
          <div className="bg-[#5A3BFE]/5 rounded-lg p-3 text-center">
            <span className="text-2xl font-bold text-[#5A3BFE]">650+</span>
            <p className="text-[#281C46]/60 text-xs">Global Clients</p>
          </div>
        </div>
        <div className="flex items-center bg-[#5A3BFE]/5 rounded-lg px-3 py-2">
          <Activity className="w-4 h-4 text-[#5A3BFE] mr-2" />
          <span className="text-[#281C46]/80 text-sm">Real-time monitoring</span>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs">Handles demand spikes automatically</p>
        </div>
      </motion.div>
    </div>

    {/* Bottom Summary */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-[#281C46] rounded-2xl px-6 py-4 flex items-center justify-center gap-4 max-w-6xl mx-auto w-full"
    >
      <Gauge className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Key Differentiator:</span> Kubernetes microservices with multi-AZ deployment — billions of conversations quarterly
      </p>
    </motion.div>
  </div>
)

// Knowledge Management Slide
const KnowledgeManagementSlide = () => (
  <div className="flex flex-col h-full px-16 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Brain className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Knowledge Management</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium"><span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Zero-Copy</span> Architecture with <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">RBAC</span></p>
    </motion.div>

    {/* Main Content Grid - 3 Columns */}
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full">
      {/* Column 1 - Knowledge Hub */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2.5 w-fit mb-3">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3">Knowledge Hub</h3>
        <p className="text-white/80 text-sm mb-3">Zero-Copy — connects to source directly</p>
        <div className="flex flex-wrap gap-2">
          {["SharePoint", "Google Drive", "Confluence", "PDFs", "Websites"].map((source) => (
            <span key={source} className="bg-white/10 text-white/90 text-xs px-2 py-1 rounded">{source}</span>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-white/20">
          <div className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-white/80 text-xs">Single Source of Truth</span>
          </div>
        </div>
      </motion.div>

      {/* Column 2 - RBAC */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2.5 w-fit mb-3">
          <Lock className="w-6 h-6 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-3">Role-Based Access</h3>
        <p className="text-[#281C46]/80 text-sm mb-3">Respects source document permissions</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-red-500/20 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">HR Only Doc</span>
            <span className="text-red-600 text-xs font-medium">Restricted</span>
          </div>
          <div className="flex items-center justify-between bg-green-500/20 rounded-lg px-3 py-2">
            <span className="text-[#281C46]/80 text-sm">Public FAQ</span>
            <span className="text-green-600 text-xs font-medium">Accessible</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/70 text-xs">No data leakage between groups</p>
        </div>
      </motion.div>

      {/* Column 3 - Nexus Lifecycle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 w-fit mb-3">
          <Sparkles className="w-6 h-6 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-3">Nexus Lifecycle</h3>
        <p className="text-[#281C46]/70 text-sm mb-3">Queries & improves knowledge</p>
        <div className="space-y-2">
          {["Auto-sync enterprise systems", "Identifies knowledge gaps", "Suggests improvements"].map((benefit) => (
            <div key={benefit} className="flex items-center bg-[#5A3BFE]/5 rounded-lg px-3 py-2">
              <CheckCircle2 className="w-4 h-4 text-[#5A3BFE] mr-2" />
              <span className="text-[#281C46]/80 text-sm">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs">Continuous improvement loop</p>
        </div>
      </motion.div>
    </div>

    {/* Bottom Summary */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-[#281C46] rounded-2xl px-6 py-4 flex items-center justify-center gap-4 max-w-6xl mx-auto w-full"
    >
      <Brain className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Key Differentiator:</span> Zero-Copy ensures freshness + RBAC enables secure multi-tenant access
      </p>
    </motion.div>
  </div>
)

// Multi-Language Support Slide
const MultiLanguageSlide = () => (
  <div className="flex flex-col h-full px-16 py-6 justify-center">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-6"
    >
      <div className="flex items-center mb-2">
        <div className="bg-[#5A3BFE] rounded-xl p-2.5 mr-4">
          <Languages className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-black">Multi-Language Support</h2>
      </div>
      <p className="text-[#281C46] text-lg font-medium"><span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">35+</span> Languages with <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">Voice-to-Voice</span> LLM Switching</p>
    </motion.div>

    {/* Main Content Grid - 3 Columns */}
    <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto w-full">
      {/* Column 1 - Hybrid Approach */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="bg-white/20 rounded-xl p-2.5 w-fit mb-3">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-3">Hybrid Approach</h3>
        <div className="bg-white/10 rounded-xl p-4 text-center mb-3">
          <span className="text-4xl font-bold text-[#F8D57E]">35+</span>
          <p className="text-white/80 text-sm">Languages</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
            <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-2" />
            <span className="text-white/90 text-sm">Native LLMs</span>
          </div>
          <div className="flex items-center bg-white/10 rounded-lg px-3 py-2">
            <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-2" />
            <span className="text-white/90 text-sm">Translation Engines</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-white/20">
          <p className="text-white/70 text-xs">Google, Microsoft + native capabilities</p>
        </div>
      </motion.div>

      {/* Column 2 - Mid-Conversation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="bg-[#281C46] rounded-xl p-2.5 w-fit mb-3">
          <RefreshCw className="w-6 h-6 text-[#F8D57E]" />
        </div>
        <h3 className="text-lg font-bold text-[#281C46] mb-3">Mid-Conversation Switch</h3>
        <p className="text-[#281C46]/80 text-sm mb-3">User switches → Agent adapts instantly</p>
        <div className="space-y-2">
          <div className="flex items-center bg-[#281C46]/10 rounded-lg px-3 py-2">
            <span className="bg-blue-500/30 text-blue-700 text-xs px-2 py-0.5 rounded mr-2">EN</span>
            <span className="text-[#281C46]/80 text-xs">"I need help..."</span>
          </div>
          <div className="flex items-center bg-[#281C46]/10 rounded-lg px-3 py-2">
            <span className="bg-orange-500/30 text-orange-700 text-xs px-2 py-0.5 rounded mr-2">ES</span>
            <span className="text-[#281C46]/80 text-xs">"...en español"</span>
          </div>
          <div className="flex items-center bg-green-500/20 rounded-lg px-3 py-2">
            <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-[#281C46] text-xs font-medium">Responds in Spanish</span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/70 text-xs">Real-time language detection</p>
        </div>
      </motion.div>

      {/* Column 3 - Proprietary Models */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white border-2 border-[#5A3BFE]/30 rounded-2xl p-5 shadow-sm"
      >
        <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 w-fit mb-3">
          <Star className="w-6 h-6 text-[#5A3BFE]" />
        </div>
        <h3 className="text-lg font-bold text-black mb-3">Proprietary Models</h3>
        <p className="text-[#281C46]/70 text-sm mb-3">LLM-level switching, not translation</p>
        <div className="flex flex-wrap gap-2">
          {["Komodo (Bahasa)", "YellowG"].map((lang) => (
            <span key={lang} className="bg-[#5A3BFE]/10 text-[#5A3BFE] text-xs px-3 py-1.5 rounded-full font-medium">{lang}</span>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs">Outperforms US-centric competitors in APAC</p>
        </div>
      </motion.div>
    </div>

    {/* Bottom Summary */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-[#281C46] rounded-2xl px-6 py-4 flex items-center justify-center gap-4 max-w-6xl mx-auto w-full"
    >
      <Languages className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
      <p className="text-white font-medium text-sm">
        <span className="text-[#F8D57E]">Key Differentiator:</span> Komodo for Indonesian + mid-conversation switching — native understanding beats translation
      </p>
    </motion.div>
  </div>
)

// Slide 5: Title Slide
const TitleSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      <img 
        src="/yellow logo.png" 
        alt="Yellow.ai" 
        className="h-20 w-auto object-contain mx-auto"
      />
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-3xl text-[#5A3BFE] font-semibold mb-6"
    >
      Agentic AI Suite
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="text-xl text-[#281C46] max-w-2xl"
    >
      AI Agents to create the zero touch support and service experience
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="mt-12 flex items-center text-[#5A3BFE]"
    >
      <span className="text-sm mr-2">Press arrow keys to navigate</span>
      <ArrowRight className="w-4 h-4 animate-pulse" />
    </motion.div>
  </div>
)

// Slide 2: Problem Statement
const ProblemSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-8"
    >
      The Customer Service Challenge
    </motion.h2>
    <div className="grid grid-cols-2 gap-6 flex-1">
      {[
        { icon: Clock, title: "Long Wait Times", desc: "Customers wait 10+ minutes on average for support" },
        { icon: DollarSign, title: "High Costs", desc: "Support operations consume 15-20% of revenue" },
        { icon: Users, title: "Agent Burnout", desc: "40% of agents experience burnout from repetitive tasks" },
        { icon: TrendingUp, title: "Rising Expectations", desc: "73% of customers expect instant responses" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
          className="bg-white border-2 border-[#5A3BFE]/40 rounded-xl p-6 shadow-md"
        >
          <item.icon className="w-10 h-10 text-[#281C46] mb-4" />
          <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
          <p className="text-[#281C46]">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
)

// Slide 3: Solution Overview
const SolutionSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-2"
    >
      The Yellow.ai Solution
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg text-[#281C46] mb-8"
    >
      A complete agentic AI platform for customer service excellence
    </motion.p>
    <div className="grid grid-cols-3 gap-6 flex-1">
      {[
        { icon: Rocket, title: "Automate", desc: "Build intelligent AI agents that handle complex conversations autonomously", color: "bg-[#5A3BFE]" },
        { icon: HandHelp, title: "Assist", desc: "Empower human agents with AI-powered tools and real-time insights", color: "bg-[#F8D57E]" },
        { icon: BarChart3, title: "Analyse", desc: "Gain deep insights with advanced analytics and self-learning systems", color: "bg-[#281C46]" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          className="flex flex-col"
        >
          <div className={`${item.color} rounded-xl p-6 mb-4 shadow-lg`}>
            <item.icon className={`w-12 h-12 ${item.color === "bg-[#F8D57E]" ? "text-[#281C46]" : "text-white"}`} />
          </div>
          <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
          <p className="text-[#281C46] flex-1">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
)

// Slide 4: Core Capabilities
const CapabilitiesSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-8"
    >
      Core Capabilities
    </motion.h2>
    <div className="grid grid-cols-4 gap-4 mb-8">
      {[
        { icon: Brain, title: "Context Aware", desc: "Understands conversation history and user intent" },
        { icon: Languages, title: "Multi-lingual", desc: "Supports 135+ languages natively" },
        { icon: Mic, title: "Multimodal", desc: "Voice, text, images, and documents" },
        { icon: Users, title: "Multi-agent", desc: "Orchestrates multiple specialized agents" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="bg-[#F8D57E] rounded-xl p-5 text-center shadow-md"
        >
          <item.icon className="w-8 h-8 mx-auto mb-3 text-[#281C46]" />
          <h3 className="text-lg font-bold text-[#281C46] mb-2">{item.title}</h3>
          <p className="text-sm text-[#281C46]/80">{item.desc}</p>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-[#5A3BFE] rounded-xl p-6 text-center"
    >
      <p className="text-white text-lg font-semibold">
        Powered by our proprietary YellowG engine with advanced reasoning capabilities
      </p>
    </motion.div>
  </div>
)

// Slide 5: Voice AI
const VoiceAISlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-2"
    >
      Voice AI Excellence
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg text-[#281C46] mb-8"
    >
      Human-like voice conversations that customers love
    </motion.p>
    <div className="grid grid-cols-3 gap-6 flex-1">
      {[
        { icon: Lightbulb, title: "Emotion AI", desc: "Detects and responds to customer emotions in real-time, adjusting tone and approach accordingly" },
        { icon: Zap, title: "Intelligent Interruption", desc: "Handles natural conversation flow with smart interruption handling and context retention" },
        { icon: MessageCircle, title: "Human-like Conversation", desc: "Natural speech patterns, appropriate pauses, and contextual responses" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
          className="bg-[#5A3BFE] rounded-xl p-6 shadow-lg"
        >
          <item.icon className="w-10 h-10 text-white mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-white/90">{item.desc}</p>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-6 bg-[#281C46] rounded-xl p-4 text-center"
    >
      <p className="text-white font-medium">Sub-second latency • 99.9% uptime • Enterprise-grade quality</p>
    </motion.div>
  </div>
)

// Slide 6: Automate Deep Dive
const AutomateSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Rocket className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Automate</h2>
        <p className="text-[#281C46]">Build and deploy intelligent AI agents</p>
      </div>
    </motion.div>
    <div className="grid grid-cols-2 gap-6 flex-1">
      {[
        { icon: Workflow, title: "AI Agent Builder", desc: "No-code builder for creating dynamic, multi-turn conversations with branching logic and API integrations" },
        { icon: Brain, title: "Agentic RAG", desc: "Multi-modal retrieval augmented generation that understands documents, images, and structured data" },
        { icon: Zap, title: "Automated Testing", desc: "AI-powered testing suite that validates agent behavior and catches issues before deployment" },
        { icon: Bot, title: "AI Copilot", desc: "Intelligent debugging assistant that helps optimize agent performance and fix issues" },
      ].map((item, index) => (
        <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={0.2 + index * 0.15} />
      ))}
    </div>
  </div>
)

// Slide 7: Assist Deep Dive
const AssistSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#F8D57E] rounded-xl p-3 mr-4">
        <HandHelp className="w-8 h-8 text-[#281C46]" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Assist</h2>
        <p className="text-[#281C46]">Empower your human agents with AI</p>
      </div>
    </motion.div>
    <div className="grid grid-cols-3 gap-6 flex-1">
      {[
        { icon: UserCheck, title: "Agentic CRM", desc: "Complete user 360° view with AI-powered insights and next-best-action recommendations" },
        { icon: Headphones, title: "Agent Assist", desc: "Real-time suggestions, auto-responses, and knowledge surfacing for human agents" },
        { icon: HandHelp, title: "Human Helpdesk", desc: "Seamless escalation with full context transfer and collaborative resolution" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
          className="bg-white border-2 border-[#5A3BFE]/40 rounded-xl p-6 shadow-md"
        >
          <item.icon className="w-10 h-10 text-[#5A3BFE] mb-4" />
          <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
          <p className="text-[#281C46]">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
)

// Slide 8: Analyse Deep Dive
const AnalyseSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#281C46] rounded-xl p-3 mr-4">
        <BarChart3 className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Analyse</h2>
        <p className="text-[#281C46]">Data-driven insights for continuous improvement</p>
      </div>
    </motion.div>
    <div className="grid grid-cols-2 gap-6 flex-1">
      {[
        { icon: PieChart, title: "Quantitative Analytics", desc: "Track KPIs, conversion rates, resolution times, and customer satisfaction scores" },
        { icon: Activity, title: "Qualitative Insights", desc: "Sentiment analysis, topic clustering, and conversation quality scoring" },
        { icon: RefreshCw, title: "Self Learning", desc: "Automatic knowledge base updates and flow optimization based on patterns" },
        { icon: Gauge, title: "Custom Dashboards", desc: "Build personalized dashboards with drag-and-drop widgets and real-time data" },
      ].map((item, index) => (
        <FeatureCard key={item.title} icon={item.icon} title={item.title} description={item.desc} delay={0.2 + index * 0.15} />
      ))}
    </div>
  </div>
)

// Slide 9: Omnichannel
const OmnichannelSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-2"
    >
      40+ Channels, One Platform
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg text-[#281C46] mb-8"
    >
      Meet customers where they are with unified omnichannel support
    </motion.p>
    <div className="grid grid-cols-5 gap-4 flex-1">
      {[
        { icon: MessageSquare, title: "WhatsApp" },
        { icon: Globe, title: "Facebook" },
        { icon: Phone, title: "Voice" },
        { icon: Mail, title: "Email" },
        { icon: MessageCircle, title: "Web Chat" },
        { icon: Headphones, title: "Teams" },
        { icon: Instagram, title: "Instagram" },
        { icon: MessageCircle, title: "SMS" },
        { icon: Smartphone, title: "Mobile App" },
        { icon: Globe, title: "Website" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all"
        >
          <item.icon className="w-8 h-8 mx-auto mb-2 text-[#5A3BFE]" />
          <p className="text-sm font-medium text-[#281C46]">{item.title}</p>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-6 bg-[#F8D57E] rounded-xl p-4 text-center"
    >
      <p className="text-[#281C46] font-semibold">Unified conversation history across all channels</p>
    </motion.div>
  </div>
)

// Slide 10: Integrations
const IntegrationsSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-2"
    >
      150+ Enterprise Integrations
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg text-[#281C46] mb-8"
    >
      Connect with your existing tech stack seamlessly
    </motion.p>
    <div className="grid grid-cols-6 gap-3 mb-6">
      {["Salesforce", "Zendesk", "SAP", "Shopify", "HubSpot", "Microsoft", "Stripe", "ServiceNow", "Jira", "Slack", "Google", "AWS"].map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-lg p-3 text-center shadow-sm"
        >
          <p className="text-sm font-medium text-[#281C46]">{item}</p>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-[#5A3BFE] rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-white mb-3">Model Context Protocol (MCP)</h3>
      <p className="text-white/90 mb-4">Next-generation integration framework for seamless data access</p>
      <div className="grid grid-cols-4 gap-3">
        {["Postgres", "HubSpot", "Salesforce", "Shopify"].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
            className="bg-white/20 rounded-lg p-2 text-center"
          >
            <p className="text-sm text-white font-medium">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
)

// Slide 11: Multi-LLM Architecture
const LLMSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-2"
    >
      Multi-LLM Architecture
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg text-[#281C46] mb-8"
    >
      Best-in-class AI models orchestrated for optimal performance
    </motion.p>
    <div className="grid grid-cols-3 gap-6 mb-6">
      {[
        { name: "GPT-4.5", desc: "Complex reasoning and analysis" },
        { name: "Claude 3.7", desc: "Long-form content and safety" },
        { name: "Gemini 3", desc: "Multimodal understanding" },
        { name: "Llama 4", desc: "Cost-effective processing" },
        { name: "Custom Models", desc: "Domain-specific fine-tuning" },
        { name: "YellowG", desc: "Proprietary orchestration" },
      ].map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          className="bg-[#F8D57E] rounded-xl p-5 text-center shadow-md"
        >
          <h3 className="text-lg font-bold text-[#281C46] mb-2">{item.name}</h3>
          <p className="text-sm text-[#281C46]/80">{item.desc}</p>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="bg-[#281C46] rounded-xl p-6 text-center"
    >
      <p className="text-white font-semibold">Intelligent routing selects the optimal model for each task</p>
    </motion.div>
  </div>
)

// Slide 12: Security
const SecuritySlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-2"
    >
      Enterprise Security & Guardrails
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg text-[#281C46] mb-8"
    >
      Bank-grade security with comprehensive AI safety measures
    </motion.p>
    <div className="grid grid-cols-2 gap-6 flex-1">
      {[
        { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II, ISO 27001, ISO 27701 certified with end-to-end encryption" },
        { icon: Lock, title: "Data Privacy", desc: "Data residency options, PII masking, and customer data isolation" },
        { icon: FileKey, title: "Compliance", desc: "HIPAA, PCI-DSS, and industry-specific compliance frameworks" },
        { icon: ShieldAlert, title: "Content Moderation", desc: "Real-time content filtering, hallucination detection, and safety guardrails" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
          className="bg-[#281C46] rounded-xl p-6 shadow-lg"
        >
          <item.icon className="w-10 h-10 text-red-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-white/80">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
)

// Slide 13: Industry Solutions
const IndustrySlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-2"
    >
      Industry Solutions
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg text-[#281C46] mb-8"
    >
      Tailored AI solutions for every industry
    </motion.p>
    <div className="grid grid-cols-3 gap-6 flex-1">
      {[
        { icon: Banknote, title: "Banking & Finance", desc: "Account services, fraud detection, loan processing" },
        { icon: ShoppingCart, title: "Retail & E-commerce", desc: "Order tracking, returns, product recommendations" },
        { icon: Stethoscope, title: "Healthcare", desc: "Appointment scheduling, patient support, claims" },
        { icon: Plane, title: "Travel & Hospitality", desc: "Booking management, concierge services" },
        { icon: Factory, title: "Manufacturing", desc: "Supply chain, warranty support, B2B sales" },
        { icon: GraduationCap, title: "Education", desc: "Student support, enrollment, learning assistance" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="bg-white border-2 border-[#5A3BFE]/40 rounded-xl p-5 shadow-md"
        >
          <item.icon className="w-10 h-10 text-[#5A3BFE] mb-3" />
          <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
          <p className="text-sm text-[#281C46]">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
)

// Slide 14: ROI & Impact
const ROISlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-8"
    >
      Proven Business Impact
    </motion.h2>
    <div className="grid grid-cols-4 gap-6 flex-1">
      <StatCard value="90%" label="Automation Rate" icon={Rocket} delay={0.2} />
      <StatCard value="60%" label="Cost Reduction" icon={DollarSign} delay={0.35} />
      <StatCard value="40%" label="CSAT Improvement" icon={Heart} delay={0.5} />
      <StatCard value="<1s" label="Response Time" icon={Zap} delay={0.65} />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-8 bg-[#F8D57E] rounded-xl p-6 text-center"
    >
      <p className="text-[#281C46] font-semibold text-lg">
        Average ROI of 300% within the first year of deployment
      </p>
    </motion.div>
  </div>
)

// Slide 15: Customer Success Story 1
const CustomerStory1Slide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-8"
    >
      Customer Success: Global Bank
    </motion.h2>
    <div className="grid grid-cols-2 gap-8 flex-1">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col justify-center"
      >
        <div className="bg-[#5A3BFE] rounded-xl p-6 mb-6">
          <Quote className="w-8 h-8 text-white/60 mb-4" />
          <p className="text-white text-lg italic mb-4">
            &quot;Yellow.ai transformed our customer service. We now handle 10x the volume with better satisfaction scores.&quot;
          </p>
          <p className="text-white/80 font-medium">— VP of Customer Experience</p>
        </div>
        <div className="bg-white border-2 border-[#5A3BFE]/40 rounded-xl p-4">
          <Building2 className="w-8 h-8 text-[#5A3BFE] mb-2" />
          <p className="text-[#281C46] font-medium">Fortune 500 Financial Institution</p>
          <p className="text-sm text-[#281C46]/70">50M+ customers served</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid grid-cols-2 gap-4"
      >
        {[
          { value: "85%", label: "Queries Automated" },
          { value: "70%", label: "Cost Savings" },
          { value: "4.8/5", label: "CSAT Score" },
          { value: "24/7", label: "Availability" },
        ].map((stat, index) => (
          <div key={stat.label} className="bg-[#F8D57E] rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#281C46] mb-2">{stat.value}</p>
            <p className="text-sm text-[#281C46]/80">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
)

// Slide 16: Customer Success Story 2
const CustomerStory2Slide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-8"
    >
      Customer Success: E-commerce Leader
    </motion.h2>
    <div className="grid grid-cols-2 gap-8 flex-1">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 gap-4"
      >
        {[
          { value: "2M+", label: "Daily Conversations" },
          { value: "95%", label: "Resolution Rate" },
          { value: "50%", label: "Faster Response" },
          { value: "35%", label: "Revenue Increase" },
        ].map((stat, index) => (
          <div key={stat.label} className="bg-[#F8D57E] rounded-xl p-5 text-center">
            <p className="text-3xl font-bold text-[#281C46] mb-2">{stat.value}</p>
            <p className="text-sm text-[#281C46]/80">{stat.label}</p>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col justify-center"
      >
        <div className="bg-[#281C46] rounded-xl p-6 mb-6">
          <Quote className="w-8 h-8 text-white/60 mb-4" />
          <p className="text-white text-lg italic mb-4">
            &quot;The AI agents handle everything from order tracking to complex returns. Our customers love the instant support.&quot;
          </p>
          <p className="text-white/80 font-medium">— Chief Digital Officer</p>
        </div>
        <div className="bg-white border-2 border-[#5A3BFE]/40 rounded-xl p-4">
          <ShoppingCart className="w-8 h-8 text-[#5A3BFE] mb-2" />
          <p className="text-[#281C46] font-medium">Top 10 Global E-commerce Platform</p>
          <p className="text-sm text-[#281C46]/70">Operating in 30+ countries</p>
        </div>
      </motion.div>
    </div>
  </div>
)

// Slide 17: Competitive Advantage
const CompetitiveSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-8"
    >
      Why Yellow.ai?
    </motion.h2>
    <div className="grid grid-cols-2 gap-6 flex-1">
      {[
        { icon: Award, title: "Industry Leader", desc: "Recognized by Gartner, Forrester, and G2 as a market leader in conversational AI" },
        { icon: Globe, title: "Global Scale", desc: "Serving 1100+ enterprises across 85+ countries with 99.99% uptime" },
        { icon: Zap, title: "Fastest Time to Value", desc: "Go live in weeks, not months, with pre-built templates and no-code tools" },
        { icon: Brain, title: "Continuous Innovation", desc: "200+ AI researchers constantly improving our models and capabilities" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
          className="bg-white border-2 border-[#5A3BFE]/40 rounded-xl p-6 shadow-md flex items-start"
        >
          <div className="bg-[#5A3BFE] rounded-lg p-3 mr-4">
            <item.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
            <p className="text-[#281C46]">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)

// Slide 18: Implementation Journey
const ImplementationSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-8"
    >
      Your Journey to AI Excellence
    </motion.h2>
    <div className="flex items-center justify-between flex-1">
      {[
        { step: "1", title: "Discovery", desc: "Understand your needs and define success metrics", duration: "Week 1" },
        { step: "2", title: "Design", desc: "Create conversation flows and integration architecture", duration: "Week 2-3" },
        { step: "3", title: "Build", desc: "Configure agents, train models, and integrate systems", duration: "Week 4-6" },
        { step: "4", title: "Launch", desc: "Deploy, monitor, and optimize for peak performance", duration: "Week 7-8" },
      ].map((item, index) => (
        <motion.div
          key={item.step}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
          className="flex flex-col items-center text-center relative"
        >
          <div className="w-16 h-16 bg-[#5A3BFE] rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-2xl font-bold text-white">{item.step}</span>
          </div>
          <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
          <p className="text-sm text-[#281C46] max-w-[180px] mb-2">{item.desc}</p>
          <span className="text-xs font-medium text-[#5A3BFE] bg-[#5A3BFE]/10 px-3 py-1 rounded-full">{item.duration}</span>
          {index < 3 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              className="absolute top-8 left-[calc(100%+10px)] w-[80px] h-0.5 bg-[#5A3BFE]/30 origin-left"
            />
          )}
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="mt-8 bg-[#F8D57E] rounded-xl p-4 text-center"
    >
      <p className="text-[#281C46] font-semibold">Dedicated Customer Success Manager throughout your journey</p>
    </motion.div>
  </div>
)

// Slide 19: Campaigns
const CampaignsSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-black mb-2"
    >
      Hyper-Personalised Campaigns
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg text-[#281C46] mb-8"
    >
      Proactive engagement that drives results
    </motion.p>
    <div className="grid grid-cols-3 gap-6 flex-1">
      {[
        { icon: Target, title: "Smart Targeting", desc: "AI-powered segmentation based on behavior, preferences, and lifecycle stage" },
        { icon: Bell, title: "Proactive Outreach", desc: "Automated campaigns triggered by events, milestones, or predictions" },
        { icon: TrendingUp, title: "Conversion Optimization", desc: "A/B testing and real-time optimization for maximum impact" },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
          className="bg-[#281C46] rounded-xl p-6 shadow-lg"
        >
          <item.icon className="w-10 h-10 text-[#F8D57E] mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-white/80">{item.desc}</p>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-6 grid grid-cols-3 gap-4"
    >
      {[
        { value: "3x", label: "Higher Engagement" },
        { value: "45%", label: "Better Conversion" },
        { value: "2x", label: "Customer LTV" },
      ].map((stat, index) => (
        <div key={stat.label} className="bg-[#F8D57E] rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-[#281C46]">{stat.value}</p>
          <p className="text-sm text-[#281C46]/80">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  </div>
)

// Slide 20: CTA
const CTASlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-12">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <img 
        src="/yellow logo.png" 
        alt="Yellow.ai" 
        className="h-24 w-auto object-contain mx-auto"
      />
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-5xl font-bold text-black mb-4"
    >
      Ready to Transform Your Customer Experience?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="text-xl text-[#281C46] mb-8 max-w-2xl"
    >
      Join 1100+ enterprises already delivering exceptional customer service with Yellow.ai
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="flex gap-4"
    >
      <button className="bg-[#5A3BFE] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center">
        <Play className="w-5 h-5 mr-2" />
        Request a Demo
      </button>
      <button className="bg-white border-2 border-[#5A3BFE] text-[#5A3BFE] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
        Contact Sales
      </button>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="mt-12 flex items-center gap-8"
    >
      {[
        { icon: CheckCircle2, text: "Free POC" },
        { icon: CheckCircle2, text: "No Credit Card" },
        { icon: CheckCircle2, text: "24/7 Support" },
      ].map((item, index) => (
        <div key={item.text} className="flex items-center text-[#281C46]">
          <item.icon className="w-5 h-5 mr-2 text-[#5A3BFE]" />
          <span className="font-medium">{item.text}</span>
        </div>
      ))}
    </motion.div>
  </div>
)

// Slide 35: Thank You Slide
const ThankYouSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8 relative overflow-hidden">
    {/* Background decorative elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#5A3BFE] rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F8D57E] rounded-full blur-3xl" />
    </motion.div>

    {/* Yellow.ai Logo */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <img
        src="/yellow logo.png"
        alt="Yellow.ai"
        className="h-16 w-auto object-contain"
      />
    </motion.div>

    {/* Main Title */}
    <motion.h1
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-6xl md:text-7xl font-bold text-black mb-6"
    >
      Thank You
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-2xl text-[#281C46]/80 mb-12"
    >
      Q & A
    </motion.p>
    
    <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.6 }}
       className="flex gap-4"
    >
        <div className="bg-[#5A3BFE]/5 px-6 py-3 rounded-full text-[#5A3BFE] font-medium">
            www.yellow.ai
        </div>
    </motion.div>
  </div>
)

// All slides array
const slides = [
  WelcomeSlide,
  TableOfContentsSlide,
  StrategyOverviewSectionSlide,
  VisionSlide,
  RoadmapSlide,
  InnovationSlide,
  PartnershipsSlide,
  PricingSlide,
  ServicesSlide,
  DemoSectionSlide,
  PlatformArchitectureSectionSlide,
  AIModelManagementSlide,
  MultiModalOmnichannelSlide,
  PersonalizedExperiencesSlide,
  AgenticFrameworkSlide,
  AppDevToolsSlide,
  ResourceOrchestrationSlide,
  PreBuiltComponentsSlide,
  AppTestingToolsSlide,
  AIObservabilitySlide,
  GuardrailsSecuritySlide,
  HumanAIHandoffsSlide,
  AppLifecycleSlide,
  LegacyIntegrationSlide,
  VoiceTelephonySlide,
  ScalabilitySlide,
  KnowledgeManagementSlide,
  MultiLanguageSlide,
  CustomerExperienceSectionSlide,
  HPVoiceAssistantDemoSlide,
  ITSMInstallationDemoSlide,
  AIHumanHandoffDemoSlide,
  AgentAssist3rdPartyDemoSlide,
  AdminDeveloperExperienceSectionSlide,
  AdminDeveloperDemoPlaceholderSlide,
  ThankYouSlide,
]

// Section definitions with time allocations (in minutes)
const sections = [
  { name: "Welcome", startSlide: 0, endSlide: 1, allocatedMinutes: 2 },
  { name: "Strategy & Overview", startSlide: 2, endSlide: 9, allocatedMinutes: 30 },
  { name: "Platform Architecture", startSlide: 10, endSlide: 11, allocatedMinutes: 30 },
  { name: "Customer Experience", startSlide: 12, endSlide: 15, allocatedMinutes: 30 },
  { name: "Admin/Developer Experience", startSlide: 16, endSlide: 27, allocatedMinutes: 90 },
  { name: "Customer Experience Demo", startSlide: 28, endSlide: 32, allocatedMinutes: 30 },
  { name: "Admin/Developer Demo", startSlide: 33, endSlide: 34, allocatedMinutes: 90 },
  { name: "Closing", startSlide: 35, endSlide: 35, allocatedMinutes: 5 },
]

const getSectionForSlide = (slideIndex: number) => {
  return sections.find(s => slideIndex >= s.startSlide && slideIndex <= s.endSlide) || sections[0]
}

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [slideTime, setSlideTime] = useState(0) // Time spent on current slide in seconds
  const [totalTime, setTotalTime] = useState(0) // Total presentation time in seconds
  const [sectionTimes, setSectionTimes] = useState<Record<string, number>>({}) // Time spent per section

  // Timer effect - runs every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideTime(prev => prev + 1)
      setTotalTime(prev => prev + 1)
      
      // Track section time
      const currentSection = getSectionForSlide(currentSlide)
      setSectionTimes(prev => ({
        ...prev,
        [currentSection.name]: (prev[currentSection.name] || 0) + 1
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [currentSlide])

  // Reset slide timer when slide changes
  useEffect(() => {
    setSlideTime(0)
  }, [currentSlide])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  // Get current section info
  const currentSection = getSectionForSlide(currentSlide)
  const sectionTimeSpent = sectionTimes[currentSection.name] || 0
  const sectionAllocatedSeconds = currentSection.allocatedMinutes * 60
  const sectionTimeRemaining = Math.max(0, sectionAllocatedSeconds - sectionTimeSpent)
  const isOverTime = sectionTimeSpent > sectionAllocatedSeconds

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    }
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "Home") {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === "End") {
        e.preventDefault()
        goToSlide(slides.length - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide])

  const CurrentSlideComponent = slides[currentSlide]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 overflow-hidden flex flex-col">
      {/* Fixed Header with Logo */}
      <div className="h-16 bg-white/95 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-10">
        {/* Yellow.ai Logo - Left */}
        <div className="flex items-center">
          <img 
            src="/yellow logo.png" 
            alt="Yellow.ai" 
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Center - Presentation Title */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#281C46] font-semibold">The Forrester Wave™</span>
          <span className="text-gray-300 mx-1">|</span>
          <span className="text-[#281C46]/70">Conversational AI for Customer Service, Q2 2026</span>
        </div>

        {/* Right - Section Timer & Slide Counter */}
        <div className="flex items-center gap-3">
          {/* Section Info & Timer */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${isOverTime ? 'bg-red-50 border border-red-200' : 'bg-[#5A3BFE]/5'}`}>
            <div className="flex flex-col items-end mr-2">
              <span className="text-[10px] text-gray-500 leading-tight">{currentSection.name}</span>
              <span className="text-[10px] text-gray-400 leading-tight">{currentSection.allocatedMinutes} min allocated</span>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <Clock className={`w-4 h-4 ${isOverTime ? 'text-red-500' : 'text-[#5A3BFE]'}`} />
            <div className="text-sm font-mono">
              <span className={`font-semibold ${isOverTime ? 'text-red-500' : 'text-[#5A3BFE]'}`}>
                {isOverTime ? '-' : ''}{formatTime(isOverTime ? sectionTimeSpent - sectionAllocatedSeconds : sectionTimeRemaining)}
              </span>
              <span className="text-gray-300 mx-1">|</span>
              <span className="text-gray-400 text-xs">{formatTime(sectionTimeSpent)}</span>
            </div>
          </div>
          {/* Total Time */}
          <div className="flex items-center gap-1.5 bg-gray-100 px-2.5 py-1.5 rounded-lg">
            <span className="text-xs text-gray-500">Total:</span>
            <span className="text-sm font-mono text-gray-600 font-medium">{formatTime(totalTime)}</span>
          </div>
          {/* Slide Counter */}
          <div className="text-sm">
            <span className="text-[#5A3BFE] font-bold">{currentSlide + 1}</span>
            <span className="text-gray-400"> / {slides.length}</span>
          </div>
        </div>
      </div>

      {/* Main slide area - click to advance */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Click zones for navigation */}
        <div className="absolute inset-0 flex pointer-events-none">
          <button
            onClick={prevSlide}
            className="w-1/5 h-full pointer-events-auto cursor-w-resize opacity-0 hover:opacity-100 transition-opacity"
            disabled={currentSlide === 0}
          >
            <div className="h-full flex items-center justify-start pl-4">
              {currentSlide > 0 && (
                <div className="bg-black/10 backdrop-blur-sm rounded-full p-3">
                  <ChevronLeft className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
          </button>
          <div className="flex-1" />
          <button
            onClick={nextSlide}
            className="w-1/5 h-full pointer-events-auto cursor-e-resize opacity-0 hover:opacity-100 transition-opacity"
            disabled={currentSlide === slides.length - 1}
          >
            <div className="h-full flex items-center justify-end pr-4">
              {currentSlide < slides.length - 1 && (
                <div className="bg-black/10 backdrop-blur-sm rounded-full p-3">
                  <ChevronRight className="w-8 h-8 text-white" />
                </div>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="h-20 bg-white/95 backdrop-blur-sm border-t border-gray-200 flex items-center justify-between px-8 shadow-lg">
        {/* Previous button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center px-6 py-3 rounded-xl font-semibold text-base transition-all ${
            currentSlide === 0
              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
              : "bg-[#5A3BFE]/10 text-[#5A3BFE] hover:bg-[#5A3BFE]/20 active:scale-95 shadow-sm"
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        {/* Slide indicators with progress bar */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              title={`Slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#5A3BFE] w-8 shadow-md"
                  : index < currentSlide
                  ? "bg-[#5A3BFE]/50 w-2.5 hover:bg-[#5A3BFE]/70"
                  : "bg-gray-300 w-2.5 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center px-6 py-3 rounded-xl font-semibold text-base transition-all ${
            currentSlide === slides.length - 1
              ? "bg-gray-100 text-gray-300 cursor-not-allowed"
              : "bg-[#5A3BFE] text-white hover:bg-[#5A3BFE]/90 active:scale-95 shadow-md"
          }`}
        >
          Next
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-24 right-4 text-xs text-gray-500 bg-white/90 px-3 py-1.5 rounded-full shadow-sm">
        ← → arrow keys • Space to advance
      </div>
    </div>
  )
}
