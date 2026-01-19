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
  <div className="flex flex-col h-full px-12 py-8">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-6"
    >
      <div className="bg-[#5A3BFE] rounded-xl p-3 mr-4">
        <Sparkles className="w-8 h-8 text-white" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black">Our Vision</h2>
        <p className="text-[#281C46]">From Generative to Agentic AI</p>
      </div>
    </motion.div>

    <div className="grid grid-cols-2 gap-6 flex-1">
      {/* Left Column - Vision Statement */}
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-xl p-6 shadow-lg flex-1"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Target className="w-6 h-6 mr-2 text-[#F8D57E]" />
            The Autonomous Enterprise
          </h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Yellow.ai's vision is to transition the market from <span className="font-semibold text-[#F8D57E]">"Generative" to "Agentic AI,"</span> fundamentally shifting the enterprise automation paradigm from simple conversation to autonomous execution.
          </p>
          <p className="text-white/80 leading-relaxed">
            We envision an <span className="font-semibold text-white">Autonomous Enterprise</span> where AI agents don't merely answer questions but actively <span className="text-[#F8D57E]">plan, reason, and execute</span> complex cross-functional workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#F8D57E] rounded-xl p-5 shadow-md"
        >
          <div className="flex items-center mb-2">
            <Mic className="w-6 h-6 mr-2 text-[#281C46]" />
            <h4 className="font-bold text-[#281C46]">Voice-First Future</h4>
          </div>
          <p className="text-[#281C46]/80 text-sm">
            Replacing high-latency legacy IVR systems with <span className="font-semibold">VoiceX</span>—proprietary, human-like voice AI capable of handling interruptions and executing tasks in real-time.
          </p>
        </motion.div>
      </div>

      {/* Right Column - Visionary Leadership */}
      <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border-2 border-[#5A3BFE]/30 rounded-xl p-5 shadow-md"
        >
          <div className="flex items-center mb-3">
            <div className="bg-[#5A3BFE]/10 rounded-lg p-2 mr-3">
              <Award className="w-5 h-5 text-[#5A3BFE]" />
            </div>
            <h4 className="font-bold text-black">Challenger Positioning</h4>
          </div>
          <p className="text-[#281C46]/80 text-sm">
            Yellow.ai positions itself as a <span className="font-semibold text-[#5A3BFE]">"Challenger"</span> that forces the market to compete on <span className="font-semibold">outcome-based autonomy</span> rather than feature parity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white border-2 border-[#5A3BFE]/30 rounded-xl p-5 shadow-md"
        >
          <div className="flex items-center mb-3">
            <div className="bg-[#5A3BFE]/10 rounded-lg p-2 mr-3">
              <Zap className="w-5 h-5 text-[#5A3BFE]" />
            </div>
            <h4 className="font-bold text-black">Redefining Latency Standards</h4>
          </div>
          <p className="text-[#281C46]/80 text-sm">
            Proprietary <span className="font-semibold">"Voice-to-Voice" LLMs</span> that bypass traditional Speech-to-Text architectures, setting a new industry standard for <span className="font-semibold text-[#5A3BFE]">sub-second latency</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-white border-2 border-[#5A3BFE]/30 rounded-xl p-5 shadow-md"
        >
          <div className="flex items-center mb-3">
            <div className="bg-[#5A3BFE]/10 rounded-lg p-2 mr-3">
              <Rocket className="w-5 h-5 text-[#5A3BFE]" />
            </div>
            <h4 className="font-bold text-black">Solving the Cold Start</h4>
          </div>
          <p className="text-[#281C46]/80 text-sm">
            <span className="font-semibold">"Agentic Discovery"</span> shifts market expectations from "months of implementation" to <span className="font-semibold text-[#5A3BFE]">zero-setup</span>, moving away from heavy professional services models toward automated, data-driven agent generation.
          </p>
        </motion.div>
      </div>
    </div>

    {/* Bottom highlight */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      className="mt-4 bg-[#281C46] rounded-xl p-4 text-center"
    >
      <p className="text-white font-medium">
        <span className="text-[#F8D57E]">Example:</span> A Sales Agent autonomously coordinating with a Supply Chain Agent to fulfill complex orders
      </p>
    </motion.div>
  </div>
)

// Slide 4: Title Slide
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
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  CapabilitiesSlide,
  VoiceAISlide,
  AutomateSlide,
  AssistSlide,
  AnalyseSlide,
  OmnichannelSlide,
  IntegrationsSlide,
  LLMSlide,
  SecuritySlide,
  IndustrySlide,
  ROISlide,
  CustomerStory1Slide,
  CustomerStory2Slide,
  CompetitiveSlide,
  ImplementationSlide,
  CampaignsSlide,
  CTASlide,
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
