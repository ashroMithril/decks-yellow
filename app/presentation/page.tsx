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
            <h4 className="font-bold text-black text-base">Challenger Positioning</h4>
            <p className="text-[#281C46]/70 text-sm leading-relaxed mt-1">
              Forces the market to compete on <span className="font-semibold text-[#5A3BFE]">outcome-based autonomy</span> rather than feature parity.
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
            <h4 className="font-bold text-black text-base">Redefining Latency Standards</h4>
            <p className="text-[#281C46]/70 text-sm leading-relaxed mt-1">
              Proprietary <span className="font-semibold">"Voice-to-Voice" LLMs</span> bypass Speech-to-Text for <span className="font-semibold text-[#5A3BFE]">sub-second latency</span>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm flex items-start"
        >
          <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 mr-4">
            <Rocket className="w-5 h-5 text-[#5A3BFE]" />
          </div>
          <div>
            <h4 className="font-bold text-black text-base">Solving the Cold Start</h4>
            <p className="text-[#281C46]/70 text-sm leading-relaxed mt-1">
              <span className="font-semibold">"Agentic Discovery"</span> enables <span className="font-semibold text-[#5A3BFE]">zero-setup</span> with automated, data-driven agent generation.
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
            <span><span className="font-semibold text-[#F8D57E]">Nexus</span> — Universal agentic interface to build, test, deploy & improve</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-[#F8D57E] flex-shrink-0" />
            <span><span className="font-semibold text-[#F8D57E]">Agentic Discovery</span> — Zero-setup deployment</span>
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
      <p className="text-[#281C46] text-lg font-medium">Investing <span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">18% of Revenue</span> in R&D</p>
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
            Komodo: 7B parameter model for SE Asian languages
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
        <h3 className="text-lg font-bold text-black mb-2">Agentic Discovery</h3>
        <p className="text-[#281C46]/80 leading-relaxed text-sm">
          Autonomously ingests historical data to build agents — <span className="font-semibold text-[#5A3BFE]">solving the cold start problem</span>.
        </p>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs">
            Zero-setup deployment from existing data
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
      <p className="text-[#281C46]/60 text-sm mt-1">Targeting 50-60% of New Revenue from Partners</p>
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
        <p className="text-[#281C46]/80 text-sm mb-3">Cloud & Enterprise Platforms</p>
        <div className="flex flex-wrap gap-2">
          {["AWS", "Microsoft", "SAP", "Salesforce"].map((partner) => (
            <span key={partner} className="bg-[#281C46] text-white text-xs px-2.5 py-1 rounded-full font-medium">
              {partner}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-[#281C46]/20">
          <p className="text-[#281C46]/70 text-xs italic">AWS Preferred Cloud Provider status</p>
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
        <h3 className="text-lg font-bold text-black mb-2">Vertical & Resellers</h3>
        <p className="text-[#281C46]/80 text-sm mb-3">Industry Specialization</p>
        <div className="flex flex-wrap gap-2">
          {["Innovaccer (Healthcare)", "Simpplr (HR)"].map((partner) => (
            <span key={partner} className="bg-[#5A3BFE]/10 text-[#5A3BFE] text-xs px-2.5 py-1 rounded-full font-medium">
              {partner}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[#281C46]/60 text-xs italic">Immediate compliance readiness in regulated sectors</p>
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
      <p className="text-[#281C46] text-lg font-medium">Hybrid Model: <span className="bg-[#F8D57E] px-2 py-0.5 rounded font-bold text-[#281C46]">Subscription</span> + <span className="bg-[#5A3BFE] px-2 py-0.5 rounded font-bold text-white">Usage-Based</span></p>
      <p className="text-[#281C46]/60 text-sm mt-1">Pay for Resolutions, Not Just Conversations</p>
    </motion.div>

    {/* Pricing Models */}
    <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto w-full mb-5">
      {/* Subscription */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="bg-[#281C46] rounded-xl p-2">
            <Calendar className="w-5 h-5 text-[#F8D57E]" />
          </div>
          <span className="bg-[#281C46] text-white text-sm px-3 py-1 rounded-full font-bold">~60% of Revenue</span>
        </div>
        <h3 className="text-xl font-bold text-[#281C46] mb-2">Subscription (Platform Fee)</h3>
        <p className="text-[#281C46]/80 text-sm leading-relaxed">
          Recurring license for platform access with predictable costs and full feature availability.
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
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-5 shadow-lg"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="bg-white/20 rounded-xl p-2">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="bg-[#F8D57E] text-[#281C46] text-sm px-3 py-1 rounded-full font-bold">~33% of Revenue</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Usage-Based (Consumption)</h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Fees based on <span className="font-semibold text-[#F8D57E]">"Resolutions"</span> — actual task completions, not just conversations or API calls.
        </p>
        <div className="mt-4 pt-3 border-t border-white/20">
          <div className="flex items-center text-white/70 text-xs">
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
          <li className="flex items-start text-[#281C46]/80">
            <span className="text-green-500 mr-2">•</span>
            <span><span className="font-medium text-black">Renewal Flexibility</span> — re-negotiate based on actual utilization</span>
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
          <p className="text-[#281C46]/80 text-sm"><span className="font-semibold text-[#5A3BFE]">4-8 weeks</span> — Complex enterprise</p>
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
          <span className="bg-[#F8D57E] text-[#281C46] text-lg px-3 py-1 rounded-full font-bold">12%</span>
        </div>
        <p className="text-white/70 text-xs mb-3">Current partner-executed deployments (expected to grow with GSI pipeline)</p>
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

// Slide 10: Section Title - Platform Architecture
const PlatformArchitectureSectionSlide = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8 relative overflow-hidden">
    {/* Background decorative elements */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.08 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#5A3BFE] rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-[#F8D57E] rounded-full blur-3xl" />
    </motion.div>

    {/* Section Badge */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <div className="inline-flex items-center bg-[#5A3BFE]/10 text-[#5A3BFE] px-4 py-2 rounded-full">
        <span className="text-sm font-semibold">Section 2.1</span>
      </div>
    </motion.div>

    {/* Icon */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-6"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-[#5A3BFE] rounded-2xl shadow-xl">
        <Layers className="w-10 h-10 text-white" />
      </div>
    </motion.div>

    {/* Section Title */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-4xl md:text-5xl font-bold text-black mb-4"
    >
      Platform Architecture &
      <br />
      <span className="text-[#5A3BFE]">Demonstration Context Setting</span>
    </motion.h1>

    {/* Divider Line */}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-24 h-1 bg-[#F8D57E] rounded-full my-6"
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
      Technical foundation and architecture overview to set context for the live demonstration
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

// AI Model Management Slide
const AIModelManagementSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">AI Model Management</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Composite AI Architecture with Dynamic Model Orchestration</p>
      </div>
    </motion.div>

    {/* Main Content - Two Column Layout */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Orchestrator LLM - Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Network className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Orchestrator LLM (Agent AI)
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            A departure from monolithic model dependency toward a sophisticated <span className="text-[#F8D57E] font-semibold">"Composite AI"</span> architecture. The Orchestrator functions as a dynamic routing layer rather than a simple text-generation engine.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/80 text-sm mb-3 font-medium">Multi-Model Strategy:</p>
            <div className="space-y-2">
              <div className="flex items-start">
                <Zap className="w-4 h-4 text-[#F8D57E] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm"><span className="font-semibold text-[#F8D57E]">Speed-optimized models</span> for high-volume routine tasks (password resets, status checks)</span>
              </div>
              <div className="flex items-start">
                <Brain className="w-4 h-4 text-[#F8D57E] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm"><span className="font-semibold text-[#F8D57E]">Reasoning models</span> (GPT-4, Claude 3.5) for complex multi-turn disambiguation</span>
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm italic mt-4">
            Dynamic switching balances agent capability with operational cost — invisible to end-users.
          </p>
        </motion.div>

        {/* BYO-LLM Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <Cloud className="w-5 h-5 mr-2" />
            Bring Your Own LLM (BYO-LLM)
          </h4>
          <p className="text-[#281C46]/90 text-sm leading-relaxed mb-3">
            A <span className="font-semibold">governed wrapper</span> for proprietary models — not passive integration. Customers can integrate models from Azure OpenAI, AWS Bedrock, or private clouds.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1 rounded-full font-medium">PII Redaction</span>
            <span className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1 rounded-full font-medium">Rate Limiting</span>
            <span className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1 rounded-full font-medium">Safety Guardrails</span>
            <span className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1 rounded-full font-medium">Sovereign Infrastructure</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Testing & Validation Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm"
        >
          <div className="flex items-start">
            <div className="bg-[#5A3BFE]/10 rounded-xl p-2.5 mr-4">
              <FlaskConical className="w-5 h-5 text-[#5A3BFE]" />
            </div>
            <div>
              <h4 className="font-bold text-black text-lg">Model Testing & Validation</h4>
              <p className="text-[#281C46]/70 text-sm leading-relaxed mt-2">
                Trust established through rigorous validation with automated <span className="font-semibold text-[#5A3BFE]">Utterance Report</span> mechanism.
              </p>
              <div className="mt-3 space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#5A3BFE] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#281C46]/80 text-sm">Tests against validation datasets (provided or auto-generated)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#5A3BFE] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#281C46]/80 text-sm">Detects overfitting & undercutting risks</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#5A3BFE] mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-[#281C46]/80 text-sm"><span className="font-semibold">Agentic Simulation</span> validates behavioral integrity before deployment</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Deterministic + Generative Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Hybrid: Deterministic + Generative
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Seamless orchestration — no binary choice between <span className="text-[#F8D57E] font-semibold">Rules-Based</span> and <span className="text-[#F8D57E] font-semibold">GenAI</span>. The Query Execution Planner dynamically switches modes within a single interaction.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="bg-red-500/20 rounded-lg px-3 py-2 mb-2 mx-auto w-fit">
                  <Lock className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-white/80 text-xs font-medium">Compliance<br/>Locked</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#F8D57E] mx-2" />
              <div className="text-center flex-1">
                <div className="bg-green-500/20 rounded-lg px-3 py-2 mb-2 mx-auto w-fit">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-white/80 text-xs font-medium">Verified</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#F8D57E] mx-2" />
              <div className="text-center flex-1">
                <div className="bg-[#5A3BFE]/40 rounded-lg px-3 py-2 mb-2 mx-auto w-fit">
                  <Sparkles className="w-5 h-5 text-[#F8D57E]" />
                </div>
                <span className="text-white/80 text-xs font-medium">GenAI<br/>Released</span>
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm italic mt-4">
            Example: Legal disclaimer (deterministic) → Q&A advisory (generative) in one conversation.
          </p>
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
        <span className="font-bold">Key Differentiator:</span> No single LLM is optimal for every task — Yellow.ai's Composite AI dynamically routes queries to the right model, balancing cost, latency, and reasoning capabilities.
      </p>
    </motion.div>
  </div>
)

// Multi-Modal and Omnichannel Support Slide
const MultiModalOmnichannelSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Globe className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Multi-Modal & Omnichannel Support</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Agentic Omnichannel Orchestration with State Continuity</p>
      </div>
    </motion.div>

    {/* Main Content - Two Column Layout */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Channel Consistency Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Layers className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Write Once, Deploy Everywhere
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Support for <span className="text-[#F8D57E] font-semibold">35+ interaction channels</span> with decoupled conversational logic from channel-specific presentation. A single Agent definition deploys across all endpoints.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/80 text-sm mb-3 font-medium">Same "Menu Selection" renders as:</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-white mx-auto" />
                </div>
                <span className="text-white/80 text-xs">Clickable Carousel<br/><span className="text-[#F8D57E]">Web Chat</span></span>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-2 mb-2">
                  <Smartphone className="w-5 h-5 text-white mx-auto" />
                </div>
                <span className="text-white/80 text-xs">Numbered List<br/><span className="text-[#F8D57E]">WhatsApp</span></span>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-2 mb-2">
                  <Phone className="w-5 h-5 text-white mx-auto" />
                </div>
                <span className="text-white/80 text-xs">TTS Prompt<br/><span className="text-[#F8D57E]">Voice</span></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Deployment Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <BarChart3 className="w-5 h-5 mr-2" />
            Omnichannel Deployment Scale
          </h4>
          <p className="text-[#281C46]/90 text-sm leading-relaxed mb-3">
            Enterprise clients interact with customers on <span className="font-semibold">3+ channels simultaneously</span> with cross-channel state awareness.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-[#281C46]/10 rounded-xl px-4 py-2 text-center">
              <span className="text-2xl font-bold text-[#281C46]">35+</span>
              <p className="text-[#281C46]/70 text-xs">Channels</p>
            </div>
            <div className="bg-[#281C46]/10 rounded-xl px-4 py-2 text-center">
              <span className="text-2xl font-bold text-[#281C46]">M+</span>
              <p className="text-[#281C46]/70 text-xs">Concurrent Sessions</p>
            </div>
            <div className="bg-[#281C46]/10 rounded-xl px-4 py-2 text-center flex-1">
              <span className="text-sm font-bold text-[#281C46]">Voice + WhatsApp + App</span>
              <p className="text-[#281C46]/70 text-xs">Largest Deployment</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Interruption-Aware Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Interruption-Aware Duplex Orchestration
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Simultaneous multi-modal interactions — interrupt a voice call with a digital interaction while maintaining full context via <span className="text-[#F8D57E] font-semibold">User360 graph</span>.
          </p>
          
          {/* Scenario Flow */}
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/80 text-xs mb-3 font-medium">Real-Time Cross-Modal Scenario:</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-[#5A3BFE]/40 rounded-full p-1.5 mr-3 mt-0.5">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="text-white/90 text-sm">User on voice call discussing billing dispute</span>
                </div>
              </div>
              <div className="flex items-center pl-3">
                <div className="w-0.5 h-4 bg-[#F8D57E]/50 mr-5"></div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#F8D57E]/40 rounded-full p-1.5 mr-3 mt-0.5">
                  <Smartphone className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="text-white/90 text-sm">Agent sends secure link via SMS for visual interface</span>
                </div>
              </div>
              <div className="flex items-center pl-3">
                <div className="w-0.5 h-4 bg-[#F8D57E]/50 mr-5"></div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-500/40 rounded-full p-1.5 mr-3 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <div>
                  <span className="text-white/90 text-sm">"I see you've selected the charge from January 12th..."</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm italic mt-4">
            Transforms disjointed multi-channel into cohesive multimodal sessions.
          </p>
        </motion.div>

        {/* Supported Channels Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm"
        >
          <h4 className="font-bold text-black text-lg mb-3">Supported Channels</h4>
          <div className="flex flex-wrap gap-2">
            {[
              { icon: MessageSquare, label: "Web Chat" },
              { icon: Smartphone, label: "Mobile App" },
              { icon: Phone, label: "Voice (PSTN/VoIP)" },
              { icon: MessageCircle, label: "WhatsApp" },
              { icon: Mail, label: "Email" },
              { icon: Instagram, label: "Social Media" },
              { icon: Bell, label: "SMS" },
              { icon: Building2, label: "Enterprise MSG" },
            ].map((channel, index) => (
              <div key={channel.label} className="flex items-center bg-gray-50 rounded-lg px-3 py-1.5">
                <channel.icon className="w-4 h-4 text-[#5A3BFE] mr-2" />
                <span className="text-[#281C46] text-sm">{channel.label}</span>
              </div>
            ))}
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
        <span className="font-bold">Key Differentiator:</span> Beyond "multi-channel presence" — Yellow.ai delivers true state continuity and interaction logic across channels, enabling seamless asynchronous and synchronous multi-modality.
      </p>
    </motion.div>
  </div>
)

// Personalized Customer Experiences Slide
const PersonalizedExperiencesSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Heart className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Personalized Customer Experiences</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">User360 Architecture — Beyond Simple Variable Substitution</p>
      </div>
    </motion.div>

    {/* Main Content - Two Column Layout */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* User Graph Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Users className="w-6 h-6 mr-3 text-[#F8D57E]" />
            User Graph vs. Session Context
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Most platforms maintain <span className="text-white/60">Session Context</span> — memory that lasts only as long as the chat window. Yellow.ai's <span className="text-[#F8D57E] font-semibold">User Graph is persistent</span>.
          </p>
          <div className="bg-white/10 rounded-xl p-4 mb-4">
            <p className="text-white/80 text-sm mb-3 font-medium">Episodic Memory enables:</p>
            <div className="space-y-2">
              <div className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm">Aggregates every interaction across all channels</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm">Creates longitudinal view of customer relationship</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm">Enables <span className="text-[#F8D57E] font-semibold">"Historical Intimacy"</span> in conversations</span>
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm italic">
            Shifts user experience from transactional to relational.
          </p>
        </motion.div>

        {/* Historical Intimacy Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <MessageSquare className="w-5 h-5 mr-2" />
            Historical Intimacy in Action
          </h4>
          <div className="bg-[#281C46]/10 rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-[#281C46]/20 rounded-full p-1.5 mr-3 mt-0.5 flex-shrink-0">
                  <Bot className="w-3 h-3 text-[#281C46]" />
                </div>
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                  <p className="text-[#281C46] text-sm italic">"Hi John, are you calling about the payment issue from Tuesday?"</p>
                </div>
              </div>
              <p className="text-[#281C46]/70 text-xs pl-9">
                Agent references User Graph: call 3 days ago, failed payment, frustration detected via sentiment analysis
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Runtime Synchronization Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Runtime Data Synchronization
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            The User Graph is a <span className="text-[#F8D57E] font-semibold">dynamic CDP component</span> — not a static database. Bidirectional sync keeps enterprise records current.
          </p>
          
          {/* Sync Flow Diagram */}
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-center flex-1">
                <div className="bg-[#5A3BFE]/40 rounded-lg px-3 py-2 mb-2 mx-auto w-fit">
                  <Store className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 text-xs font-medium">External Systems</span>
                <p className="text-white/60 text-[10px]">Salesforce, SAP, Core Banking</p>
              </div>
              <div className="flex flex-col items-center mx-2">
                <ArrowRight className="w-4 h-4 text-[#F8D57E]" />
                <span className="text-[#F8D57E] text-[10px] my-1">Priming</span>
                <ArrowRight className="w-4 h-4 text-[#F8D57E] rotate-180" />
                <span className="text-[#F8D57E] text-[10px] mt-1">Write-back</span>
              </div>
              <div className="text-center flex-1">
                <div className="bg-[#F8D57E]/40 rounded-lg px-3 py-2 mb-2 mx-auto w-fit">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 text-xs font-medium">User Graph</span>
                <p className="text-white/60 text-[10px]">User360 CDP</p>
              </div>
              <div className="flex flex-col items-center mx-2">
                <ArrowRight className="w-4 h-4 text-[#F8D57E]" />
              </div>
              <div className="text-center flex-1">
                <div className="bg-green-500/40 rounded-lg px-3 py-2 mb-2 mx-auto w-fit">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 text-xs font-medium">AI Agent</span>
                <p className="text-white/60 text-[10px]">Context Window</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-start">
              <Zap className="w-4 h-4 text-[#F8D57E] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-white/90 text-sm"><span className="font-semibold text-[#F8D57E]">Priming:</span> Injects user data before first token generation</span>
            </div>
            <div className="flex items-start">
              <Zap className="w-4 h-4 text-[#F8D57E] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-white/90 text-sm"><span className="font-semibold text-[#F8D57E]">Write-back:</span> New info (e.g., address change) syncs to CRM</span>
            </div>
          </div>
        </motion.div>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm"
        >
          <h4 className="font-bold text-black text-lg mb-3">Personalization Redefined</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-xl p-3">
              <p className="text-[#281C46]/50 text-xs font-medium mb-2 line-through">Traditional</p>
              <p className="text-[#281C46]/60 text-sm">"Hello, [Name]"</p>
              <p className="text-[#281C46]/40 text-xs mt-1">Simple variable substitution</p>
            </div>
            <div className="bg-[#5A3BFE]/10 rounded-xl p-3 border border-[#5A3BFE]/30">
              <p className="text-[#5A3BFE] text-xs font-medium mb-2">User360</p>
              <p className="text-[#281C46] text-sm font-medium">"Hi John, about Tuesday..."</p>
              <p className="text-[#281C46]/60 text-xs mt-1">Contextual, relational memory</p>
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
        <span className="font-bold">Key Differentiator:</span> User360's Episodic Memory transforms interactions from transactional to relational — the AI remembers context across all channels and time, with bidirectional sync to enterprise systems.
      </p>
    </motion.div>
  </div>
)

// Agentic Framework Slide
const AgenticFrameworkSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Workflow className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Agentic Framework</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">From Flow-Based Design to Goal-Based Execution</p>
      </div>
    </motion.div>

    {/* Main Content - Two Column Layout */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Objectives & Generative Plans Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Target className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Objectives, Roles & Generative Plans
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Developers define <span className="text-[#F8D57E] font-semibold">Objectives</span> and <span className="text-[#F8D57E] font-semibold">Roles</span> — not every conversation turn. The Orchestrator LLM dynamically constructs multi-step plans at runtime.
          </p>
          
          {/* Example Plan */}
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/80 text-sm mb-3 font-medium">User: "I need to fix my router" → Generated Plan:</p>
            <div className="space-y-2">
              {[
                { step: "1", action: "Verify User Identity", tool: "CRM Lookup" },
                { step: "2", action: "Check Device Status", tool: "Network Diagnostic API" },
                { step: "3", action: "Troubleshoot", tool: "Vector Search KB" },
                { step: "4", action: "Schedule Technician", tool: "Calendar API" },
              ].map((item) => (
                <div key={item.step} className="flex items-center">
                  <span className="bg-[#F8D57E] text-[#281C46] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center mr-2">{item.step}</span>
                  <span className="text-white/90 text-sm flex-1">{item.action}</span>
                  <span className="bg-white/20 text-white/80 text-xs px-2 py-0.5 rounded">{item.tool}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-white/70 text-sm italic mt-4">
            Plans adapt dynamically — outage detected? Skip to "Notify User" instead.
          </p>
        </motion.div>

        {/* Tools & Standards Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <Zap className="w-5 h-5 mr-2" />
            Tools, Resources & Standards
          </h4>
          <p className="text-[#281C46]/90 text-sm leading-relaxed mb-3">
            APIs, database lookups, and logic are <span className="font-semibold">Tools</span> the agent invokes. Supports emerging interoperability standards:
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#281C46] text-white text-xs px-3 py-1.5 rounded-full font-medium">Model Context Protocol (MCP)</span>
            <span className="bg-[#281C46] text-white text-xs px-3 py-1.5 rounded-full font-medium">Agent-to-Agent (A2A)</span>
            <span className="bg-[#281C46]/20 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">Salesforce Agent</span>
            <span className="bg-[#281C46]/20 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">SAP Agent</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Multi-Agent Mesh Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Network className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Multi-Agent Mesh Architecture
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Instead of a monolithic "Super Bot" (prone to hallucination), deploy a <span className="text-[#F8D57E] font-semibold">fleet of specialized agents</span> overseen by a Governance Layer.
          </p>
          
          {/* Mesh Visualization */}
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="bg-[#F8D57E] rounded-xl px-4 py-2 mb-2">
                  <Shield className="w-5 h-5 text-[#281C46] mx-auto" />
                </div>
                <span className="text-[#F8D57E] text-xs font-semibold">Guardian Agent</span>
                <p className="text-white/60 text-[10px]">Traffic Controller</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <ArrowRight className="w-4 h-4 text-white/40 rotate-[135deg]" />
              <ArrowRight className="w-4 h-4 text-white/40 rotate-90" />
              <ArrowRight className="w-4 h-4 text-white/40 rotate-45" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              {[
                { icon: DollarSign, name: "Billing", color: "bg-blue-500/30" },
                { icon: Headphones, name: "Tech Triage", color: "bg-green-500/30" },
                { icon: TrendingUp, name: "Sales", color: "bg-purple-500/30" },
              ].map((agent) => (
                <div key={agent.name} className="text-center">
                  <div className={`${agent.color} rounded-lg p-2 mb-1`}>
                    <agent.icon className="w-4 h-4 text-white mx-auto" />
                  </div>
                  <span className="text-white/80 text-xs">{agent.name}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-white/70 text-sm italic mt-4">
            Each agent: smaller, specialized, highly accurate within its domain.
          </p>
        </motion.div>

        {/* Flow vs Goal Comparison */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm"
        >
          <h4 className="font-bold text-black text-lg mb-3">The 2026 Paradigm Shift</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-xl p-3">
              <p className="text-[#281C46]/50 text-xs font-medium mb-2 line-through">Flow-Based</p>
              <div className="flex items-center gap-1 mb-2">
                <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-[10px]">A</div>
                <ArrowRight className="w-3 h-3 text-gray-400" />
                <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-[10px]">B</div>
                <ArrowRight className="w-3 h-3 text-gray-400" />
                <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-[10px]">C</div>
              </div>
              <p className="text-[#281C46]/50 text-xs">Rigid decision trees</p>
            </div>
            <div className="bg-[#5A3BFE]/10 rounded-xl p-3 border border-[#5A3BFE]/30">
              <p className="text-[#5A3BFE] text-xs font-medium mb-2">Goal-Based</p>
              <div className="flex items-center gap-1 mb-2">
                <div className="w-6 h-6 bg-[#5A3BFE] rounded-full flex items-center justify-center">
                  <Target className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1 h-0.5 bg-[#5A3BFE]/30 relative">
                  <Sparkles className="w-3 h-3 text-[#F8D57E] absolute -top-1 left-1/2 -translate-x-1/2" />
                </div>
                <div className="w-6 h-6 bg-[#F8D57E] rounded-full flex items-center justify-center">
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      className="mt-6 bg-gradient-to-r from-[#5A3BFE]/10 to-[#F8D57E]/20 rounded-2xl px-6 py-4 flex items-center gap-4"
    >
      <Lightbulb className="w-6 h-6 text-[#5A3BFE] flex-shrink-0" />
      <p className="text-[#281C46] font-medium">
        <span className="font-bold">Key Differentiator:</span> Goal-based execution with Generative Plan Development handles non-linear journeys that break rigid decision trees — agents adapt in real-time as conditions change.
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
            <Bot className="w-6 h-6 mr-3 text-[#F8D57E]" />
            AI Agent Builder (No-Code/Low-Code)
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            <span className="text-[#F8D57E] font-semibold">Agentic Generation</span> — build agents using natural language prompts. Democratizes AI development for subject matter experts.
          </p>
          
          {/* Example Prompt */}
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-2 font-medium">Natural Language Prompt:</p>
            <div className="bg-[#281C46] rounded-lg px-4 py-3 border border-white/20">
              <p className="text-white/90 text-sm italic">"Build an agent that helps customers track flights and book upgrades"</p>
            </div>
            <div className="flex items-center mt-3">
              <ArrowRight className="w-4 h-4 text-[#F8D57E] mr-2" />
              <span className="text-white/80 text-sm">Auto-generates intents, flows, and tool definitions</span>
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
            Write custom logic in <span className="font-semibold">Python</span> or <span className="font-semibold">Node.js</span>, exposed as reusable visual nodes in the flow builder.
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
              { tool: "Pro-Code IDE", user: "Developers", function: "Python/Node.js custom logic", color: "bg-[#281C46]" },
              { tool: "Integration Studio", user: "Developers", function: "API connections & data mapping", color: "bg-green-500" },
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
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Store className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Pre-Built Application Components</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Solving the Cold Start Problem — Go Live in Under One Week</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Zero-Setup Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Zap className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Zero-Setup Automation
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Ingest existing knowledge artifacts to <span className="text-[#F8D57E] font-semibold">instantly enable</span> agent capabilities — no manual flow design required.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/80 text-sm mb-3 font-medium">Supported Artifacts:</p>
            <div className="flex flex-wrap gap-2">
              {["PDFs", "Policy Docs", "Websites", "FAQs", "Knowledge Base"].map((item) => (
                <span key={item} className="bg-[#F8D57E]/20 text-[#F8D57E] text-xs px-3 py-1 rounded-full">{item}</span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <Clock className="w-4 h-4 text-[#F8D57E] mr-2" />
            <span className="text-white/80 text-sm">Answer Level 1 queries from <span className="text-[#F8D57E] font-semibold">Day 1</span></span>
          </div>
        </motion.div>

        {/* Time Savings Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <Rocket className="w-5 h-5 mr-2" />
            Time to Value
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#281C46] rounded-xl p-4 text-center">
              <span className="text-3xl font-bold text-[#F8D57E]">&lt;1</span>
              <p className="text-white text-sm">Week to automate</p>
              <p className="text-white/60 text-xs">10% of service requests</p>
            </div>
            <div className="bg-[#281C46]/10 rounded-xl p-4 text-center">
              <span className="text-3xl font-bold text-[#281C46]">150+</span>
              <p className="text-[#281C46]/80 text-sm">Pre-built</p>
              <p className="text-[#281C46]/60 text-xs">Integrations</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Integration Library Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm"
        >
          <h4 className="font-bold text-black text-lg mb-3">Integration & Domain Libraries</h4>
          <div className="space-y-3">
            <div>
              <p className="text-[#281C46]/60 text-xs font-medium mb-2">Enterprise Integrations</p>
              <div className="flex flex-wrap gap-2">
                {["Salesforce", "Zendesk", "ServiceNow", "SAP", "Shopify", "Oracle"].map((item) => (
                  <span key={item} className="bg-[#5A3BFE]/10 text-[#5A3BFE] text-xs px-2 py-1 rounded">{item}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[#281C46]/60 text-xs font-medium mb-2">Pre-Trained Domain Models</p>
              <div className="flex flex-wrap gap-2">
                {["Banking", "Retail", "Healthcare", "HR", "Insurance"].map((item) => (
                  <span key={item} className="bg-[#F8D57E]/50 text-[#281C46] text-xs px-2 py-1 rounded">{item}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[#281C46]/60 text-xs mt-3 italic">
            Domain models understand industry vocabulary (e.g., "claim" differs in Insurance vs. HR)
          </p>
        </motion.div>

        {/* Customization Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <FlaskConical className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Customization Without Breaking Upgrades
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Extend pre-built logic without breaking the upgrade path. Components remain <span className="text-[#F8D57E] font-semibold">fully supported</span> after customization.
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/80 text-sm">Extend without forking</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/80 text-sm">Automatic updates preserved</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-white/80 text-sm">Version-controlled customizations</span>
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
        <span className="font-bold">Key Differentiator:</span> Zero-Setup Automation + 150+ pre-built integrations solves the Cold Start problem — automate 10% of service requests in under one week.
      </p>
    </motion.div>
  </div>
)

// Application Testing Tools Slide
const AppTestingToolsSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <FlaskConical className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Application Testing Tools</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Agentic Simulation for the GenAI Era</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* The Gym Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Target className="w-6 h-6 mr-3 text-[#F8D57E]" />
            "The Gym" Simulation Environment
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Traditional regression testing fails with probabilistic LLM outputs. <span className="text-[#F8D57E] font-semibold">Agentic Simulation</span> validates the entire customer journey.
          </p>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-xl p-3">
              <div className="flex items-center mb-2">
                <Users className="w-4 h-4 text-[#F8D57E] mr-2" />
                <span className="text-white font-medium text-sm">Simulated Users</span>
              </div>
              <p className="text-white/70 text-xs">AI personas with specific goals and emotional states</p>
              <p className="text-white/50 text-xs italic mt-1">"I am an angry customer trying to return a broken item"</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <div className="flex items-center mb-2">
                <Store className="w-4 h-4 text-[#F8D57E] mr-2" />
                <span className="text-white font-medium text-sm">Simulated Backends</span>
              </div>
              <p className="text-white/70 text-xs">Mock API responses to validate payloads without live transactions</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Automated Regression Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2" />
            Automated Regression & Synthetic Data
          </h4>
          <p className="text-[#281C46]/90 text-sm leading-relaxed mb-3">
            Analyzes historical conversation logs to generate synthetic test cases representing real-world usage patterns.
          </p>
          <div className="bg-[#281C46]/10 rounded-xl p-3">
            <p className="text-[#281C46] text-sm font-medium mb-2">"Golden Conversation Set"</p>
            <p className="text-[#281C46]/70 text-xs">Used for regression testing on every agent update — ensures new knowledge doesn't degrade existing performance</p>
          </div>
        </motion.div>

        {/* Validation Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <CheckCircle2 className="w-5 h-5 mr-2 text-[#F8D57E]" />
            What Gets Validated
          </h4>
          <div className="space-y-3">
            {[
              { label: "Reasoning Logic", desc: "Agent makes correct decisions" },
              { label: "Tool Usage", desc: "Correct APIs called with right payloads" },
              { label: "Behavioral Integrity", desc: "Consistent responses across scenarios" },
              { label: "Edge Cases", desc: "Handles unexpected inputs gracefully" },
            ].map((item) => (
              <div key={item.label} className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-white text-sm font-medium">{item.label}</span>
                  <p className="text-white/60 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
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
        <span className="font-bold">Key Differentiator:</span> "The Gym" validates agent reasoning and tool usage in a sandbox — providing confidence to deploy autonomous agents without risking live systems.
      </p>
    </motion.div>
  </div>
)

// AI Observability and Administration Slide
const AIObservabilitySlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <BarChart3 className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">AI Observability & Administration</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Chain of Thought Visibility with Self-Healing Capabilities</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Chain of Thought Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Brain className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Chain of Thought (CoT) Visibility
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Overcome the "Black Box" nature of AI. View the Orchestrator's complete decision-making trace:
          </p>
          <div className="space-y-2">
            {[
              "Which user intent was detected",
              "Which tools were considered",
              "Why a specific tool was selected",
              "Which KB chunks were retrieved",
            ].map((item, index) => (
              <div key={item} className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                <span className="bg-[#F8D57E] text-[#281C46] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center mr-2">{index + 1}</span>
                <span className="text-white/90 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-white/70 text-sm italic mt-4">
            Essential for debugging and compliance auditing.
          </p>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Insights Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <PieChart className="w-5 h-5 mr-2" />
            Insights Dashboard
          </h4>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {["Deflection Rate", "Goal Completion", "CSAT Score"].map((kpi) => (
              <div key={kpi} className="bg-[#281C46]/10 rounded-lg p-2 text-center">
                <p className="text-[#281C46] text-xs font-medium">{kpi}</p>
              </div>
            ))}
          </div>
          <p className="text-[#281C46]/80 text-sm">
            <span className="font-semibold">Analyze feature:</span> Clusters uncategorized queries to identify emerging topics
          </p>
        </motion.div>

        {/* Self-Healing Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Self-Healing Loop
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            System identifies "Unknown Intents" and suggests improvements automatically.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/80 text-sm">Unknown Query Detected</span>
              <ArrowRight className="w-4 h-4 text-[#F8D57E]" />
              <span className="text-white/80 text-sm">Suggest KB Article</span>
            </div>
            <div className="border-t border-white/20 pt-3">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white/80 text-sm"><span className="text-[#F8D57E] font-semibold">Smart Sync:</span> Auto-updates when source docs change</span>
              </div>
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
        <span className="font-bold">Key Differentiator:</span> Full Chain of Thought visibility + Self-Healing loop ensures continuous improvement while maintaining complete transparency for compliance.
      </p>
    </motion.div>
  </div>
)

// Guardrails and Customer Data Security Slide
const GuardrailsSecuritySlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Shield className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Guardrails & Customer Data Security</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Multi-Agent Governance with Enterprise-Grade Protection</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Guardian Agent Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <ShieldAlert className="w-6 h-6 mr-3 text-[#F8D57E]" />
            The Guardian Agent (Governance Layer)
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            A specialized AI model that <span className="text-[#F8D57E] font-semibold">monitors every input and output</span> of the primary Orchestrator in real-time.
          </p>
          <div className="space-y-2">
            {[
              { label: "Topic Adherence", desc: "Prevents discussing politics or competitors" },
              { label: "Tone Policing", desc: "Maintains professionalism under abuse" },
              { label: "PII Filtering", desc: "Blocks sensitive data leakage" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-lg px-3 py-2">
                <span className="text-[#F8D57E] text-sm font-semibold">{item.label}</span>
                <p className="text-white/70 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Certifications Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <Award className="w-5 h-5 mr-2" />
            Certifications & Compliance
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {[
              "ISO 27001:2022",
              "ISO 27701:2019",
              "ISO 27018:2019",
              "SOC 2 Type II",
              "HIPAA (BAA Ready)",
              "GDPR (Processor)",
            ].map((cert) => (
              <div key={cert} className="bg-[#281C46]/10 rounded-lg px-3 py-2 text-center">
                <span className="text-[#281C46] text-xs font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Encryption Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Lock className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Data Protection
          </h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">In Transit</span>
                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">TLS 1.3</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">At Rest</span>
                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">AES 256</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-[#F8D57E] mr-2" />
                <span className="text-white/80 text-sm">Automated PII/PCI Redaction before LLM processing</span>
              </div>
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
        <span className="font-bold">Key Differentiator:</span> Guardian Agent provides active real-time monitoring — sensitive data never enters the model's context in cleartext.
      </p>
    </motion.div>
  </div>
)

// Human + AI Interactions and Handoffs Slide
const HumanAIHandoffsSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Handshake className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Human + AI Interactions & Handoffs</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Symbiotic Human-in-the-Loop with Zero-Repetition Escalation</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Bot Unblocker Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <UserCheck className="w-6 h-6 mr-3 text-[#F8D57E]" />
            The "Bot Unblocker"
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            For low-confidence predictions, the agent routes queries to a human for <span className="text-[#F8D57E] font-semibold">behind-the-scenes validation</span>.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-[#F8D57E]/20 rounded-full p-1.5 mr-3">
                  <Bot className="w-4 h-4 text-[#F8D57E]" />
                </div>
                <span className="text-white/90 text-sm">Agent uncertain about response</span>
              </div>
              <div className="flex items-center pl-6">
                <ArrowRight className="w-4 h-4 text-[#F8D57E] mr-2" />
              </div>
              <div className="flex items-center">
                <div className="bg-green-500/20 rounded-full p-1.5 mr-3">
                  <UserCheck className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white/90 text-sm">Human confirms/corrects</span>
              </div>
              <div className="flex items-center pl-6">
                <ArrowRight className="w-4 h-4 text-[#F8D57E] mr-2" />
              </div>
              <div className="flex items-center">
                <div className="bg-[#5A3BFE]/40 rounded-full p-1.5 mr-3">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 text-sm">RLHF improves future confidence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Intelligent Escalation Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Headphones className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Intelligent Escalation
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Not just a queue dump — packages the full <span className="text-[#F8D57E] font-semibold">Context Object</span> for seamless handoff.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-2 font-medium">Context Object includes:</p>
            <div className="grid grid-cols-2 gap-2">
              {["Full Transcript", "User Graph History", "Identified Intent", "Current Sentiment"].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle2 className="w-3 h-3 text-green-400 mr-2" />
                  <span className="text-white/80 text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-[#F8D57E]/20 rounded-lg p-3">
            <p className="text-[#F8D57E] text-sm font-semibold">"Zero-Repetition Handoff"</p>
            <p className="text-white/70 text-xs">User never has to repeat themselves</p>
          </div>
        </motion.div>

        {/* Integration Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg mb-3">Screen Pop Integration</h4>
          <p className="text-[#281C46]/80 text-sm mb-3">
            Context delivered via "Screen Pop" to agent's dashboard:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Salesforce", "Zendesk", "Yellow.ai Inbox"].map((platform) => (
              <span key={platform} className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">{platform}</span>
            ))}
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
        <span className="font-bold">Key Differentiator:</span> Bot Unblocker enables RLHF learning while Intelligent Escalation ensures zero-repetition handoffs with full context transfer.
      </p>
    </motion.div>
  </div>
)

// Application Lifecycle Management Slide
const AppLifecycleSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <RefreshCw className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Application Lifecycle Management</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Enterprise CI/CD with Granular Promotion & One-Click Rollback</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Environments Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Layers className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Environment Management
          </h3>
          <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
            <div className="text-center flex-1">
              <div className="bg-blue-500/30 rounded-lg px-3 py-2 mb-2 mx-auto w-fit">
                <FlaskConical className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-white/80 text-sm font-medium">Development</span>
            </div>
            <ArrowRight className="w-5 h-5 text-[#F8D57E]" />
            <div className="text-center flex-1">
              <div className="bg-yellow-500/30 rounded-lg px-3 py-2 mb-2 mx-auto w-fit">
                <Target className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="text-white/80 text-sm font-medium">Staging</span>
            </div>
            <ArrowRight className="w-5 h-5 text-[#F8D57E]" />
            <div className="text-center flex-1">
              <div className="bg-green-500/30 rounded-lg px-3 py-2 mb-2 mx-auto w-fit">
                <Rocket className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-white/80 text-sm font-medium">Production</span>
            </div>
          </div>
          <p className="text-white/70 text-sm mt-4">
            Version control for every agent component across all environments.
          </p>
        </motion.div>

        {/* Rollback Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md flex-1"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2" />
            One-Click Rollback
          </h4>
          <p className="text-[#281C46]/90 text-sm leading-relaxed mb-3">
            Instantly revert to a previous stable state if anomalies detected in production.
          </p>
          <div className="bg-[#281C46]/10 rounded-xl p-3 flex items-center">
            <ShieldAlert className="w-5 h-5 text-[#281C46] mr-3" />
            <span className="text-[#281C46]/80 text-sm">Anomaly detected → Automatic alert → One-click restore</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Granular Promotion Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Workflow className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Granular Promotion
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Deployment is not "all-or-nothing." Push updates to <span className="text-[#F8D57E] font-semibold">specific modules</span> without affecting others.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-3 font-medium">Example: Update "Returns" flow independently</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-500/20 rounded-lg p-2 text-center border border-green-500/30">
                <span className="text-green-400 text-xs font-medium">Returns</span>
                <p className="text-white/50 text-[10px]">Updated</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <span className="text-white/60 text-xs">Sales</span>
                <p className="text-white/40 text-[10px]">Unchanged</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 text-center">
                <span className="text-white/60 text-xs">Support</span>
                <p className="text-white/40 text-[10px]">Unchanged</p>
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm italic mt-4">
            Essential for large enterprises with different teams owning different journeys.
          </p>
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
        <span className="font-bold">Key Differentiator:</span> Granular Promotion enables modular updates without risking stability — combined with One-Click Rollback for instant recovery.
      </p>
    </motion.div>
  </div>
)

// Legacy System Integration Slide
const LegacyIntegrationSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Network className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Legacy System Integration</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Connect vs. Collect — Orchestrate Without Becoming System of Record</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Connect vs Collect Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Cloud className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Connect vs. Collect Philosophy
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Yellow.ai <span className="text-[#F8D57E] font-semibold">orchestrates existing systems</span> rather than becoming the system of record.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-2 font-medium">Supported Protocols:</p>
            <div className="flex flex-wrap gap-2">
              {["REST", "SOAP", "GraphQL"].map((protocol) => (
                <span key={protocol} className="bg-[#F8D57E]/20 text-[#F8D57E] text-sm px-3 py-1 rounded-full font-medium">{protocol}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pre-built Connectors Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md flex-1"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <Store className="w-5 h-5 mr-2" />
            150+ Pre-Built Connectors
          </h4>
          <div className="flex flex-wrap gap-2">
            {["SAP", "Oracle", "Microsoft Dynamics", "Salesforce", "ServiceNow", "Workday"].map((system) => (
              <span key={system} className="bg-[#281C46]/10 text-[#281C46] text-xs px-3 py-1.5 rounded-full font-medium">{system}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Custom Backends Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Zap className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Handling Custom Legacy Systems
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            For highly customized systems (20-year-old mainframes with SOAP wrappers):
          </p>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-[#F8D57E] text-sm font-semibold mb-1">Custom API Nodes</p>
              <p className="text-white/70 text-xs">Import WSDL or Swagger definitions to generate connections</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-[#F8D57E] text-sm font-semibold mb-1">Generative Integration</p>
              <p className="text-white/70 text-xs">Describe the endpoint or paste a sample request — AI generates boilerplate code</p>
            </div>
          </div>
        </motion.div>

        {/* Supported Formats Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white border border-[#5A3BFE]/20 rounded-2xl p-5 shadow-sm"
        >
          <h4 className="font-bold text-black text-lg mb-3">Supported Definition Formats</h4>
          <div className="flex flex-wrap gap-2">
            {["WSDL", "Swagger", "OpenAPI", "CURL", "Raw API Docs"].map((format) => (
              <span key={format} className="bg-[#5A3BFE]/10 text-[#5A3BFE] text-sm px-3 py-1.5 rounded-full font-medium">{format}</span>
            ))}
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
        <span className="font-bold">Key Differentiator:</span> Generative Integration bridges modern AI agents with legacy backends — paste API docs and get working integration code automatically.
      </p>
    </motion.div>
  </div>
)

// Voice and Telephony Support Slide
const VoiceTelephonySlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Phone className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Voice & Telephony Support</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">VoiceX — Full-Duplex Architecture with Sub-Second Latency</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* VoiceX Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Mic className="w-6 h-6 mr-3 text-[#F8D57E]" />
            VoiceX Full-Duplex Architecture
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Not a text-bot connected to STT — a <span className="text-[#F8D57E] font-semibold">dedicated voice orchestration stack</span> that can listen while speaking.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-[#F8D57E] text-sm font-semibold mb-1">Barge-In</p>
              <p className="text-white/70 text-xs">User says "Stop" → Bot stops instantly</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-[#F8D57E] text-sm font-semibold mb-1">Back-Channeling</p>
              <p className="text-white/70 text-xs">"Uh-huh," "I see" while user talks</p>
            </div>
          </div>
          <div className="mt-4 bg-[#F8D57E]/20 rounded-lg p-3 flex items-center justify-center">
            <Clock className="w-4 h-4 text-[#F8D57E] mr-2" />
            <span className="text-[#F8D57E] font-bold">&lt;800ms Latency</span>
            <span className="text-white/70 text-sm ml-2">— Human-like rhythm</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Sentiment-Adaptive Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <Heart className="w-5 h-5 mr-2" />
            Sentiment-Adaptive Latency
          </h4>
          <p className="text-[#281C46]/90 text-sm leading-relaxed mb-3">
            Dynamically adjusts speed and pitch based on user emotion:
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#281C46]/10 rounded-lg p-2 text-center">
              <span className="text-red-500 text-lg">😠</span>
              <p className="text-[#281C46] text-xs font-medium">Angry/Frustrated</p>
              <p className="text-[#281C46]/60 text-[10px]">Slower, empathetic tone</p>
            </div>
            <div className="bg-[#281C46]/10 rounded-lg p-2 text-center">
              <span className="text-green-500 text-lg">😊</span>
              <p className="text-[#281C46] text-xs font-medium">Happy/Neutral</p>
              <p className="text-[#281C46]/60 text-[10px]">Normal conversational pace</p>
            </div>
          </div>
        </motion.div>

        {/* Telephony Integration Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Headphones className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Telephony Infrastructure
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Carrier-grade voice quality with SIP trunking support.
          </p>
          <div className="space-y-2">
            <p className="text-white/60 text-xs font-medium">Integrates with:</p>
            <div className="flex flex-wrap gap-2">
              {["Twilio", "Genesys", "Avaya", "PSTN", "VoIP"].map((provider) => (
                <span key={provider} className="bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full">{provider}</span>
              ))}
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
        <span className="font-bold">Key Differentiator:</span> VoiceX Full-Duplex enables natural interruption handling and back-channeling — with sentiment-adaptive responses for emotionally intelligent conversations.
      </p>
    </motion.div>
  </div>
)

// Scalability and Reliability Slide
const ScalabilitySlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Gauge className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Scalability & Reliability</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">99.99% Uptime with Auto-Scaling Kubernetes Architecture</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Architecture Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Cloud className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Cloud-Native Architecture
          </h3>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-xl p-3">
              <div className="flex items-center mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white font-medium text-sm">Kubernetes Microservices</span>
              </div>
              <p className="text-white/70 text-xs">Containerized, independently scalable components</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <div className="flex items-center mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white font-medium text-sm">Multi-AZ Deployment</span>
              </div>
              <p className="text-white/70 text-xs">High availability across multiple Availability Zones (AWS)</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <div className="flex items-center mb-2">
                <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-white font-medium text-sm">Burstable Capacity</span>
              </div>
              <p className="text-white/70 text-xs">Auto-scale horizontally for demand spikes</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Uptime Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <Trophy className="w-5 h-5 mr-2" />
            Enterprise SLA
          </h4>
          <div className="flex items-center justify-center bg-[#281C46] rounded-xl p-4">
            <span className="text-5xl font-bold text-[#F8D57E]">99.99%</span>
            <span className="text-white/80 text-lg ml-3">Uptime Guarantee</span>
          </div>
          <p className="text-[#281C46]/70 text-sm mt-3 text-center">
            For enterprise customers with contractual SLA penalties
          </p>
        </motion.div>

        {/* Scale Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <BarChart3 className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Scale & Performance
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <span className="text-2xl font-bold text-[#F8D57E]">B+</span>
              <p className="text-white/70 text-xs">Conversations/Quarter</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <span className="text-2xl font-bold text-[#F8D57E]">F500</span>
              <p className="text-white/70 text-xs">Global Clients</p>
            </div>
          </div>
          <div className="mt-3 bg-white/10 rounded-lg p-3">
            <p className="text-white/60 text-xs font-medium mb-1">SLA Management Tools:</p>
            <p className="text-white/80 text-sm">Real-time monitoring with automatic escalation alerts</p>
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
        <span className="font-bold">Key Differentiator:</span> Kubernetes-based microservices with multi-AZ deployment ensures 99.99% uptime and handles billions of conversations quarterly.
      </p>
    </motion.div>
  </div>
)

// Knowledge Management Slide
const KnowledgeManagementSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Lightbulb className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Knowledge Management</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">Zero-Copy Architecture with Role-Based Access Control</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Knowledge Hub Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Brain className="w-6 h-6 mr-3 text-[#F8D57E]" />
            The Knowledge Hub
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Central brain for informational queries using <span className="text-[#F8D57E] font-semibold">Zero-Copy architecture</span> — connects directly to source repositories.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-2 font-medium">Connected Sources:</p>
            <div className="flex flex-wrap gap-2">
              {["SharePoint", "Google Drive", "Confluence", "Websites", "PDFs"].map((source) => (
                <span key={source} className="bg-[#F8D57E]/20 text-[#F8D57E] text-xs px-2 py-1 rounded">{source}</span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-white/80 text-sm">Always answers from "Single Source of Truth"</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* RBAC Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Lock className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Role-Based Access Control (RBAC)
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            The agent <span className="text-[#F8D57E] font-semibold">respects source document permissions</span>. Same agent serves different user groups securely.
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-3 font-medium">Example:</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-red-500/20 rounded-lg px-3 py-2">
                <span className="text-white/80 text-sm">HR Managers Only Doc</span>
                <span className="text-red-400 text-xs">Restricted</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 text-[#F8D57E] mx-2" />
              </div>
              <div className="flex items-center justify-between bg-white/10 rounded-lg px-3 py-2">
                <span className="text-white/80 text-sm">Standard Employee Query</span>
                <span className="text-white/50 text-xs">Doc not used</span>
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm italic mt-4">
            No data leakage between user groups.
          </p>
        </motion.div>

        {/* Benefits Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg mb-3">Zero-Copy Benefits</h4>
          <div className="space-y-2">
            {[
              "No stale copies — always fresh data",
              "Source system access controls respected",
              "No data migration required",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center">
                <CheckCircle2 className="w-4 h-4 text-[#281C46] mr-2" />
                <span className="text-[#281C46]/80 text-sm">{benefit}</span>
              </div>
            ))}
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
        <span className="font-bold">Key Differentiator:</span> Zero-Copy architecture ensures data freshness while RBAC enables secure multi-tenant knowledge access without data leakage.
      </p>
    </motion.div>
  </div>
)

// Multi-Language Support Slide
const MultiLanguageSlide = () => (
  <div className="flex flex-col h-full px-12 py-8">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Languages className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Multi-Language Support</h2>
        <p className="text-[#281C46]/70 text-lg mt-1">135+ Languages with Mid-Conversation Switching</p>
      </div>
    </motion.div>

    {/* Main Content */}
    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column */}
      <div className="flex flex-col gap-5">
        {/* Language Support Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-2xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white flex items-center mb-4">
            <Globe className="w-6 h-6 mr-3 text-[#F8D57E]" />
            Hybrid Language Approach
          </h3>
          <div className="flex items-center justify-center mb-4">
            <span className="text-5xl font-bold text-[#F8D57E]">135+</span>
            <span className="text-white/80 text-lg ml-3">Languages Supported</span>
          </div>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-[#F8D57E] text-sm font-semibold mb-1">Major Languages</p>
              <p className="text-white/70 text-xs">Native LLMs trained on specific language corpus</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-[#F8D57E] text-sm font-semibold mb-1">Other Languages</p>
              <p className="text-white/70 text-xs">Real-time neural translation layer</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-5">
        {/* Mid-Conversation Switching Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F8D57E] rounded-2xl p-5 shadow-md"
        >
          <h4 className="font-bold text-[#281C46] text-lg flex items-center mb-3">
            <RefreshCw className="w-5 h-5 mr-2" />
            Mid-Conversation Language Switching
          </h4>
          <p className="text-[#281C46]/90 text-sm leading-relaxed mb-3">
            Agent monitors input language in real-time. User switches mid-sentence → Agent switches instantly.
          </p>
          <div className="bg-[#281C46]/10 rounded-xl p-3">
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="bg-blue-500/20 text-blue-600 text-xs px-2 py-1 rounded mr-2">EN</span>
                <span className="text-[#281C46]/80 text-sm">"I need help with my order..."</span>
              </div>
              <div className="flex items-center">
                <span className="bg-orange-500/20 text-orange-600 text-xs px-2 py-1 rounded mr-2">ES</span>
                <span className="text-[#281C46]/80 text-sm">"...pero prefiero hablar en español"</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 text-[#281C46]/40 mr-2" />
                <span className="text-[#281C46] text-sm font-medium">Agent responds in Spanish instantly</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Low-Resource Languages Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-[#281C46] rounded-2xl p-5 shadow-lg flex-1"
        >
          <h4 className="font-bold text-white text-lg flex items-center mb-3">
            <Star className="w-5 h-5 mr-2 text-[#F8D57E]" />
            Low-Resource Language Excellence
          </h4>
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            Proprietary models for languages underserved by global LLM providers:
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/60 text-xs mb-2 font-medium">Specialized Models:</p>
            <div className="flex flex-wrap gap-2">
              {["Indic Languages", "Indonesian (Komodo)", "Southeast Asian Dialects", "Regional Variants"].map((lang) => (
                <span key={lang} className="bg-[#F8D57E]/20 text-[#F8D57E] text-xs px-2 py-1 rounded">{lang}</span>
              ))}
            </div>
          </div>
          <p className="text-white/70 text-sm italic mt-4">
            High-quality localized experiences where competitors rely on poor automated translation.
          </p>
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
        <span className="font-bold">Key Differentiator:</span> Mid-conversation language switching + proprietary models for low-resource languages (Komodo for Indonesian) outperform US-centric competitors in APAC markets.
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
        { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II, ISO 27001, GDPR compliant with end-to-end encryption" },
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
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

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

        {/* Right - Slide Counter */}
        <div className="flex items-center gap-4">
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
