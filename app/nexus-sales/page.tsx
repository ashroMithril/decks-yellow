"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Hand,
  Shield,
  Brain,
  Wrench,
  FlaskConical,
  HeartPulse,
  Search,
  Zap,
  Bot,
  MessageSquare,
  Database,
  BarChart3,
  Microscope,
  HelpCircle,
  Settings,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Layers,
  Network,
  Sparkles,
  Globe,
  Lock,
  Rocket,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  Cpu,
  Server,
  Code,
  Lightbulb,
  Play,
  Quote,
  Puzzle,
  Workflow,
  Building2,
  ShoppingCart,
  Plane,
  Car,
  Award,
  PieChart,
  FileText,
  ThumbsUp,
  Star,
  BadgeCheck,
  Calendar,
  ArrowUpRight,
  Banknote,
  RefreshCw,
  ExternalLink,
  Video,
  Inbox,
  Table,
  Activity,
  FileSearch,
  Megaphone,
  FolderPlus,
  AlertTriangle,
  Gauge,
  UserSearch,
  BookOpen,
  Route,
  Plug,
  Terminal,
  Phone,
  Volume2,
  Mail,
  type LucideIcon,
} from "lucide-react"

// Demo video links - placeholders for actual demos
const DEMO_VIDEOS = {
  instantAnalyst: "https://drive.google.com/drive/folders/1SQELm-bo2-s5qZkvH4XhEu3dhc6sGL1T?usp=drive_link",
  zeroToOneArchitect: "https://drive.google.com/drive/folders/1FMDlQ1HUEh0MzVxAb46Pr-UvmC5l3fp8?usp=drive_link",
  supportCommander: "https://drive.google.com/drive/folders/1GwwkMNpY2pSvpU7dBA3ROfSfO5Uc70UQ?usp=drive_link",
  consumerIntel: "https://drive.google.com/drive/folders/1xqVaXT5yl_czbQW4hre4a1-6FiyIziTK?usp=drive_link",
  executiveVisibility: "https://drive.google.com/drive/folders/1IGz6-Hm8UwnikQQJ9l0zfNdQVhibgjoM?usp=drive_link",
}

// Demo Video Button Component
const DemoVideoButton = ({ url, label = "Watch Demo" }: { url: string; label?: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-sm"
  >
    <Play className="w-3 h-3" />
    {label}
    <ExternalLink className="w-2.5 h-2.5" />
  </a>
)

// Slide wrapper for consistent 16:9 dimensions
const SlideWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-[1280px] aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden relative">
      {children}
    </div>
  </div>
)

// Section header component for consistency
const SectionHeader = ({ icon: Icon, title, subtitle, color = "bg-[#5A3BFE]" }: { 
  icon: React.ElementType, 
  title: string, 
  subtitle?: string,
  color?: string 
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-center gap-3 mb-6"
  >
    <div className={`${color} rounded-lg p-2.5`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <h2 className="text-xl font-bold text-[#281C46]">{title}</h2>
      {subtitle && <p className="text-xs text-[#281C46]/60">{subtitle}</p>}
    </div>
  </motion.div>
)

// Slide 1: Title Slide - Sales Enablement
const TitleSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5A3BFE] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F8D57E] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#0668E1] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#5A3BFE 1px, transparent 1px), linear-gradient(90deg, #5A3BFE 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Centered Content Container */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-6 mb-6"
        >
          <img src="/yellow%20logo.png" alt="Yellow.ai" className="h-12 w-auto object-contain" />
        </motion.div>

        {/* Sales Enablement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 bg-[#F8D57E] text-[#281C46] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            <Target className="w-4 h-4" />
            Sales Enablement Deck
          </span>
        </motion.div>

        {/* Product Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5A3BFE] to-[#0668E1] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Nexus — The Universal Agentic Interface
            <Sparkles className="w-4 h-4" />
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl font-bold text-[#281C46] mb-4 text-center leading-tight"
        >
          Transform Your Enterprise
          <br />
          <span className="text-[#5A3BFE]">with Agentic AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-[#281C46]/70 mb-8 text-center max-w-2xl"
        >
          The industry's first Universal Agentic Interface — delivering 
          <span className="text-[#0668E1] font-semibold"> "Service as a Software"</span>
        </motion.p>

        {/* Value Props Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-8 mb-8"
        >
          {[
            { value: "60%", label: "TCO Reduction" },
            { value: "90%", label: "Self-Serve Rate" },
            { value: "10x", label: "Faster Deployment" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold text-[#5A3BFE]">{stat.value}</div>
              <div className="text-xs text-[#281C46]/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Three Pillars Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          {[
            { icon: Eye, label: "Eyes", desc: "Intelligence" },
            { icon: Hand, label: "Hands", desc: "Execution" },
            { icon: Shield, label: "Authority", desc: "Autonomy" },
          ].map((pillar, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-xl flex items-center justify-center mb-2">
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-bold text-[#281C46]">{pillar.label}</span>
              <span className="text-xs text-[#281C46]/60">{pillar.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 2: The Problem - Enterprise Friction
const ProblemSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-8">
      <SectionHeader 
        icon={XCircle} 
        title="The Enterprise Automation Challenge" 
        subtitle="Why Traditional Approaches Fall Short"
        color="bg-red-500"
      />

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Left - Pain Points */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-red-50 to-white rounded-xl p-5 border border-red-200 flex-1"
          >
            <h3 className="text-sm font-bold text-red-600 mb-4 uppercase tracking-wide flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Current State Pain Points
            </h3>
            <div className="space-y-3">
              {[
                { title: "The 'Blank Slate' Problem", desc: "Users struggle to structure complex flows from scratch" },
                { title: "Sidebar Limitation", desc: "Legacy 'Copilots' suggest but cannot act — no hands to implement" },
                { title: "Context Vacuum", desc: "No 360° view of customer history, CRM data, and business logic" },
                { title: "Manual Maintenance", desc: "Constant human intervention for updates and fixes" },
                { title: "Integration Complexity", desc: "Brittle connections requiring specialized developers" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-red-100">
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-[#281C46]">{item.title}</span>
                    <p className="text-xs text-[#281C46]/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right - Cost of Inaction */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-5 border border-amber-200"
          >
            <h3 className="text-sm font-bold text-amber-600 mb-3 uppercase tracking-wide flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              The Cost of Status Quo
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "6-12", unit: "months", label: "Typical deployment time" },
                { value: "40%", unit: "", label: "Projects fail to deliver ROI" },
                { value: "3-5x", unit: "", label: "Maintenance cost vs build" },
                { value: "70%", unit: "", label: "Agent time on repetitive tasks" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-amber-100 text-center">
                  <div className="text-xl font-bold text-amber-600">{stat.value}<span className="text-sm">{stat.unit}</span></div>
                  <div className="text-xs text-[#281C46]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-[#281C46] rounded-xl p-5 text-white flex-1"
          >
            <h3 className="text-sm font-bold text-[#F8D57E] mb-3 uppercase tracking-wide">The Paradigm Shift</h3>
            <p className="text-sm text-white/80 mb-4">
              The cost of pattern-matching and reasoning is approaching <span className="text-[#F8D57E] font-bold">near-zero marginal cost</span>. 
              This enables software to replicate human cognitive labor.
            </p>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#F8D57E] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#281C46]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">The Opportunity</div>
                  <div className="text-xs text-white/70">From "Tool-Centric" to "Agent-Centric" execution</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-gradient-to-r from-[#5A3BFE] to-[#0668E1] rounded-xl p-4 text-white"
          >
            <div className="flex items-center gap-3">
              <Quote className="w-6 h-6 text-white/50" />
              <p className="text-sm italic">"Transform users from operators of software into commanders of outcomes"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 3: Solution Introduction - What is Nexus
const SolutionSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-8">
      <SectionHeader 
        icon={Sparkles} 
        title="Introducing Nexus: The Universal Agentic Interface" 
        subtitle="The Operating System for the Autonomic Enterprise"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-5 gap-4">
        {/* Left - What Nexus Is */}
        <div className="col-span-3 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-[#5A3BFE]/10 to-white rounded-xl p-5 border border-[#5A3BFE]/30"
          >
            <h3 className="text-lg font-bold text-[#281C46] mb-3">What is Nexus?</h3>
            <p className="text-sm text-[#281C46]/80 mb-4">
              Nexus is the industry's first <span className="font-bold text-[#5A3BFE]">Universal Agentic Interface (UAI)</span> — a unified control plane that sits above the entire Yellow.ai stack. It delivers "Service as a Software": you define the strategic outcome, Nexus handles the cognitive labor.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Eye, label: "Eyes", desc: "to analyze data" },
                { icon: Hand, label: "Hands", desc: "to build logic" },
                { icon: Shield, label: "Authority", desc: "to execute strategy" },
                { icon: Brain, label: "Intelligence", desc: "to learn & adapt" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-2 border border-[#5A3BFE]/20">
                  <div className="w-8 h-8 bg-[#5A3BFE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#281C46]">{item.label}</span>
                    <span className="text-xs text-[#281C46]/60 ml-1">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-xl p-4 border border-gray-200 flex-1"
          >
            <h3 className="text-sm font-bold text-[#281C46] mb-3">Nexus Functions As:</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { role: "Product Strategist", phase: "Discovery", icon: Search },
                { role: "Senior Architect", phase: "Build", icon: Wrench },
                { role: "QA Engineer", phase: "Testing", icon: FlaskConical },
                { role: "Analyst & Mechanic", phase: "Operation", icon: Settings },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                  <item.icon className="w-4 h-4 text-[#5A3BFE]" />
                  <div>
                    <div className="text-xs font-semibold text-[#281C46]">{item.role}</div>
                    <div className="text-xs text-[#5A3BFE]">during {item.phase}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right - Key Differentiators */}
        <div className="col-span-2 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-[#281C46] rounded-xl p-5 text-white flex-1"
          >
            <h3 className="text-sm font-bold text-[#F8D57E] mb-3 uppercase tracking-wide">Not a Sidebar — A First-Class Citizen</h3>
            <div className="space-y-3">
              {[
                { old: "Copilot suggests", new: "Nexus executes" },
                { old: "You build workflows", new: "Nexus builds for you" },
                { old: "Manual maintenance", new: "Self-healing logic" },
                { old: "Reactive support", new: "Proactive optimization" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs text-white/50 line-through flex-1">{item.old}</span>
                  <ArrowRight className="w-3 h-3 text-[#F8D57E]" />
                  <span className="text-xs text-[#F8D57E] font-semibold flex-1">{item.new}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-gradient-to-r from-[#5A3BFE] to-[#0668E1] rounded-xl p-4 text-white"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-white">TCO Reduction</h3>
              <div className="text-3xl font-bold text-[#F8D57E]">60%</div>
            </div>
            <p className="text-xs text-white/80">Reduce Total Cost of Ownership while increasing deployment velocity by orders of magnitude</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-[#F8D57E] rounded-xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-[#281C46]" />
              <h3 className="text-sm font-bold text-[#281C46]">Deployment Speed</h3>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#281C46]">Minutes</span>
              <span className="text-xs text-[#281C46]/70">not months</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 4: Nexus Architecture
const NexusArchitectureSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-5 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-3"
      >
        <h1 className="text-xl font-bold text-black">Yellow.ai Product Architecture 2026</h1>
      </motion.div>

      {/* NEXUS - Top Layer */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mb-2"
      >
        <div className="bg-white border-2 border-[#5A3BFE]/40 rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#5A3BFE] to-purple-400 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#5A3BFE]">NEXUS</h2>
              <p className="text-xs text-[#281C46]">
                Universal Agentic Interface <span className="text-[#281C46]/60">(For Enterprise)</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Row 2: Conversational Agents + Analyse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="grid grid-cols-12 gap-2 mb-2"
      >
        <div className="col-span-7">
          <div className="bg-white border-2 border-[#5A3BFE]/40 rounded-lg p-2.5 shadow-sm h-full">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5A3BFE] rounded-lg flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#5A3BFE]">CONVERSATIONAL AGENTS</h3>
                <p className="text-xs text-[#281C46]/70">Voice & Text AI</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="bg-white border-2 border-[#F8D57E] rounded-lg p-2.5 shadow-sm h-full">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#F8D57E] rounded-lg flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-[#281C46]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#281C46]">ANALYSE</h3>
                <p className="text-xs text-[#281C46]/70">Analytics & Feedback Loop, BI</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Row 3: Inbox, Engage, Help Center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="grid grid-cols-3 gap-2 mb-2"
      >
        <div className="bg-white border-2 border-[#5A3BFE]/40 rounded-lg p-2 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#5A3BFE] rounded-lg flex items-center justify-center">
              <Mail className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#5A3BFE]">INBOX</h3>
              <p className="text-xs text-[#281C46]/70">Unified Service & CCaaS</p>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-[#F8D57E] rounded-lg p-2 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#F8D57E] rounded-lg flex items-center justify-center">
              <Users className="w-3.5 h-3.5 text-[#281C46]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#281C46]">ENGAGE</h3>
              <p className="text-xs text-[#281C46]/70">Customer Lifecycle</p>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-green-400 rounded-lg p-2 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-green-700">HELP CENTER</h3>
              <p className="text-xs text-[#281C46]/70">Self-Service Portal</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ATLAS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="mb-2"
      >
        <div className="bg-green-50 border-2 border-green-400 rounded-lg p-2.5 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
              <Database className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-green-700">ATLAS</h3>
              <p className="text-xs text-[#281C46]/70">Unified Content & Enterprise Knowledge • Connectors (Continuous Sync) • Single Source of Truth</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* HARNESS + SUPERVISOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="grid grid-cols-12 gap-2 mb-2"
      >
        <div className="col-span-9">
          <div className="bg-[#F8D57E]/30 border-2 border-[#F8D57E] rounded-lg p-2.5 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#F8D57E] rounded-lg flex items-center justify-center">
                <Workflow className="w-4 h-4 text-[#281C46]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#281C46]">HARNESS</h3>
                <p className="text-xs text-[#281C46]/70">Agentic Workflow Platform • Schedulers, Connectors, MCPs • Tools & Integrations</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-white border-2 border-[#5A3BFE]/40 rounded-lg p-2.5 shadow-sm h-full flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#5A3BFE] rounded-lg flex items-center justify-center">
                <Eye className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#5A3BFE]">SUPERVISOR</h3>
                <p className="text-xs text-[#281C46]/70">Human-in-the-Loop</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FABRIC */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="mb-2"
      >
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-2.5 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-red-600">FABRIC</h3>
              <p className="text-xs text-[#281C46]/70">Unified Data Management • System of Record with Custom Objects • RBAC, Rules, Workflows & Events</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ENTERPRISE GOVERNANCE STACK */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mb-2"
      >
        <div className="bg-[#281C46]/5 border-2 border-[#281C46]/20 rounded-lg p-2.5 shadow-sm relative">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#281C46] rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#F8D57E]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#281C46]">ENTERPRISE GOVERNANCE STACK</h3>
              <p className="text-xs text-[#281C46]/70">
                <span className="text-[#5A3BFE] font-semibold">AI Trust Center</span> • SSO • IAM • Audit Logs • Compliance • Security
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="text-center"
      >
        <p className="text-xs text-[#281C46]/50">© 2026 Yellow.ai | Product Architecture</p>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 5: Three Pillars Deep Dive
const ThreePillarsSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-8">
      <SectionHeader 
        icon={Layers} 
        title="The Three Pillars of Nexus" 
        subtitle="Eyes, Hands, and Authority — Strategic Independence"
        color="bg-[#0668E1]"
      />

      <div className="flex-1 grid grid-cols-3 gap-6">
        {/* Eyes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-br from-[#5A3BFE]/10 to-white rounded-xl p-5 border-2 border-[#5A3BFE]/30 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-xl flex items-center justify-center">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#281C46]">Eyes</h3>
              <span className="text-sm text-[#5A3BFE] font-medium">Intelligence Layer</span>
            </div>
          </div>
          
          <p className="text-sm text-[#281C46]/80 mb-4">
            Securely analyzes every conversation log, data table, and user interaction to find patterns humans miss.
          </p>

          <div className="space-y-2 flex-1">
            {[
              { title: "Visual Intelligence", desc: "Understand the 'why' behind numbers" },
              { title: "Pattern Recognition", desc: "Unstructured data → actionable insights" },
              { title: "Predictive Analytics", desc: "Forecast trends before they happen" },
              { title: "Anomaly Detection", desc: "Spot issues before customers notice" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-2.5 border border-[#5A3BFE]/20">
                <div className="text-xs font-semibold text-[#5A3BFE]">{item.title}</div>
                <p className="text-xs text-[#281C46]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-br from-[#0668E1]/10 to-white rounded-xl p-5 border-2 border-[#0668E1]/30 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0668E1] to-[#5A3BFE] rounded-xl flex items-center justify-center">
              <Hand className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#281C46]">Hands</h3>
              <span className="text-sm text-[#0668E1] font-medium">Execution Layer</span>
            </div>
          </div>
          
          <p className="text-sm text-[#281C46]/80 mb-4">
            Directly manipulates the environment—building flows, fixing nodes, generating UI—no code required.
          </p>

          <div className="space-y-2 flex-1">
            {[
              { title: "Text-to-Flow", desc: "Describe intent, get complete workflow" },
              { title: "Generative UI (GenUI)", desc: "Create UI components on the fly" },
              { title: "Auto KB Indexing", desc: "Crawl & index sites without code" },
              { title: "Variable Mapping", desc: "Auto-create branches & variables" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-2.5 border border-[#0668E1]/20">
                <div className="text-xs font-semibold text-[#0668E1]">{item.title}</div>
                <p className="text-xs text-[#281C46]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Authority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-gradient-to-br from-[#281C46]/10 to-white rounded-xl p-5 border-2 border-[#281C46]/30 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#281C46] to-[#5A3BFE] rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#281C46]">Authority</h3>
              <span className="text-sm text-[#281C46]/80 font-medium">Autonomy Layer</span>
            </div>
          </div>
          
          <p className="text-sm text-[#281C46]/80 mb-4">
            Operates with strategic independence, understanding high-level business goals. It doesn't suggest—it executes.
          </p>

          <div className="space-y-2 flex-1">
            {[
              { title: "Goal Understanding", desc: "Comprehends strategic objectives" },
              { title: "Autonomous Execution", desc: "Solutions, not just suggestions" },
              { title: "Self-Healing Logic", desc: "Auto-fix broken nodes & APIs" },
              { title: "Human-in-the-Loop", desc: "Strategic approval when needed" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-2.5 border border-[#281C46]/20">
                <div className="text-xs font-semibold text-[#281C46]">{item.title}</div>
                <p className="text-xs text-[#281C46]/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-4 text-center"
      >
        <p className="text-sm text-[#281C46]/60">
          Together, these pillars make Nexus a <span className="font-bold text-[#5A3BFE]">first-class citizen</span> of your technical stack — not just a passive helper
        </p>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 5: Multi-Agent Lifecycle
const LifecycleSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={Network} 
        title="The Multi-Agent Lifecycle" 
        subtitle="Specialized Agentic Personas Manage the Entire Journey"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-5 gap-3">
        {/* The Strategist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-b from-[#5A3BFE] to-[#5A3BFE]/90 rounded-xl p-4 text-white flex flex-col"
        >
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <Search className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-sm font-bold mb-1">The Strategist</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Discovery</span>
          <div className="flex-1">
            <p className="text-xs text-white/80 mb-2">Constructs a "World Model" of your business</p>
            <div className="space-y-1.5">
              {["Automation Heatmaps", "Quick Wins ID", "ROI Modeling"].map((item, i) => (
                <div key={i} className="bg-white/15 rounded px-2 py-1.5">
                  <span className="text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/20">
            <span className="text-xs text-[#F8D57E]">Zero guesswork roadmap</span>
          </div>
        </motion.div>

        {/* The Architect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-gradient-to-b from-[#0668E1] to-[#0668E1]/90 rounded-xl p-4 text-white flex flex-col"
        >
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-sm font-bold mb-1">The Architect</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Build</span>
          <div className="flex-1">
            <p className="text-xs text-white/80 mb-2">Natural Language First construction</p>
            <div className="space-y-1.5">
              {["Text-to-Flow", "GenUI Components", "Auto Variables"].map((item, i) => (
                <div key={i} className="bg-white/15 rounded px-2 py-1.5">
                  <span className="text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/20">
            <span className="text-xs text-[#F8D57E]">Minutes to build</span>
          </div>
        </motion.div>

        {/* The QA Engineer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-b from-amber-500 to-amber-500/90 rounded-xl p-4 text-white flex flex-col"
        >
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <FlaskConical className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-sm font-bold mb-1">The QA Engineer</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Testing</span>
          <div className="flex-1">
            <p className="text-xs text-white/80 mb-2">Simulation & Red Teaming</p>
            <div className="space-y-1.5">
              {["1000s Virtual Users", "Adversary Personas", "Golden Sets"].map((item, i) => (
                <div key={i} className="bg-white/15 rounded px-2 py-1.5">
                  <span className="text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/20">
            <span className="text-xs text-white/90">Zero regressions</span>
          </div>
        </motion.div>

        {/* The Mechanic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-gradient-to-b from-emerald-600 to-emerald-600/90 rounded-xl p-4 text-white flex flex-col"
        >
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-sm font-bold mb-1">The Mechanic</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Maintenance</span>
          <div className="flex-1">
            <p className="text-xs text-white/80 mb-2">Self-Healing Logic</p>
            <div className="space-y-1.5">
              {["Automated RCA", "Fix Broken Nodes", "Token Handling"].map((item, i) => (
                <div key={i} className="bg-white/15 rounded px-2 py-1.5">
                  <span className="text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/20">
            <span className="text-xs text-emerald-200">Zero manual tuning</span>
          </div>
        </motion.div>

        {/* The Coach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-gradient-to-b from-[#281C46] to-[#281C46]/90 rounded-xl p-4 text-white flex flex-col"
        >
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <HeartPulse className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-sm font-bold mb-1">The Coach</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Empathy</span>
          <div className="flex-1">
            <p className="text-xs text-white/80 mb-2">Real-time Sentiment Coaching</p>
            <div className="space-y-1.5">
              {["Coaching Nudges", "Magic Rewrites", "Empathy Boost"].map((item, i) => (
                <div key={i} className="bg-white/15 rounded px-2 py-1.5">
                  <span className="text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/20">
            <span className="text-xs text-[#F8D57E]">Agent uplift</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom flow indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="mt-4 flex items-center justify-center gap-2"
      >
        {["Discovery", "Build", "Test", "Maintain", "Coach"].map((phase, i) => (
          <div key={i} className="flex items-center">
            <span className="text-xs text-[#281C46]/60">{phase}</span>
            {i < 4 && <ArrowRight className="w-4 h-4 text-[#5A3BFE] mx-2" />}
          </div>
        ))}
        <span className="mx-2 text-[#5A3BFE]">→</span>
        <span className="text-xs font-bold text-[#5A3BFE]">Continuous Loop</span>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 6: Value Proposition & ROI
const ValuePropSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-8">
      <SectionHeader 
        icon={DollarSign} 
        title="Business Value & ROI" 
        subtitle="Quantifiable Impact on Your Bottom Line"
        color="bg-emerald-600"
      />

      <div className="flex-1 grid grid-cols-3 gap-5">
        {/* Left - Key Metrics */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {[
            { value: "60%", label: "TCO Reduction", desc: "Lower total cost of ownership across automation initiatives", icon: DollarSign, color: "bg-emerald-500" },
            { value: "90%", label: "Self-Serve Rate", desc: "Customers resolve issues without human intervention", icon: Users, color: "bg-[#5A3BFE]" },
            { value: "10x", label: "Faster Deployment", desc: "From concept to production in minutes, not months", icon: Rocket, color: "bg-[#0668E1]" },
            { value: "2x", label: "CSAT Improvement", desc: "Double customer satisfaction through precision execution", icon: ThumbsUp, color: "bg-amber-500" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 ${metric.color} rounded-lg flex items-center justify-center`}>
                  <metric.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#281C46]">{metric.value}</div>
              </div>
              <h4 className="text-sm font-bold text-[#281C46] mb-1">{metric.label}</h4>
              <p className="text-xs text-[#281C46]/70">{metric.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right - Strategic Advantages */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-gradient-to-br from-[#281C46] to-[#5A3BFE] rounded-xl p-5 text-white flex flex-col"
        >
          <h3 className="text-sm font-bold text-[#F8D57E] mb-4 uppercase tracking-wide">Strategic Advantages</h3>
          <div className="space-y-3 flex-1">
            {[
              { title: "Predictive ROI Modeling", desc: "Business Case Reports before a single node is built" },
              { title: "Zero-Shot Intelligence", desc: "Ingest websites & PDFs instantly—zero manual training" },
              { title: "Context-Driven Decisions", desc: "Cross-reference conversations with CRM history" },
              { title: "Governance as Code", desc: "Auto-scan for PII leaks & brand compliance" },
              { title: "Safety Layer", desc: "Simulate outcomes & spot errors before customers see them" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 rounded-lg p-3">
                <div className="text-xs font-semibold text-white mb-1">{item.title}</div>
                <p className="text-xs text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom - Quick Value Props */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-4 bg-[#F8D57E]/20 rounded-xl p-4 border border-[#F8D57E]/40"
      >
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: Clock, label: "Build in Minutes", value: "Not Months" },
            { icon: Target, label: "20+ Dashboards", value: "Real-time Analytics" },
            { icon: Lock, label: "<1% Hallucination", value: "Safe & Reliable AI" },
            { icon: Globe, label: "150+ Integrations", value: "Plug & Play" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white rounded-lg p-2 border border-gray-100">
              <item.icon className="w-5 h-5 text-[#5A3BFE]" />
              <div>
                <div className="text-xs font-semibold text-[#281C46]">{item.label}</div>
                <div className="text-xs text-[#5A3BFE]">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 7: Hero Scenario 1 - Instant Analyst
const HeroScenario1Slide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={BarChart3} 
        title="Hero Scenario: The 'Instant Analyst'" 
        subtitle="Metric & Qualitative Analysis Combined"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-5 gap-4">
        {/* Left - Context */}
        <div className="col-span-2 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-[#5A3BFE]/10 to-white rounded-xl p-4 border border-[#5A3BFE]/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-[#5A3BFE]" />
              <h3 className="text-sm font-bold text-[#281C46]">Target Audience</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["CX Managers", "Business Analysts", "Operations Leads"].map((role, i) => (
                <span key={i} className="text-xs bg-[#5A3BFE]/10 text-[#5A3BFE] px-2 py-1 rounded-full font-medium">{role}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-gradient-to-br from-red-50 to-white rounded-xl p-4 border border-red-200 flex-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <h3 className="text-sm font-bold text-red-600">The Pain Point</h3>
            </div>
            <p className="text-xs text-[#281C46]/80 mb-3">
              Resolution drops. Teams scramble. Analysts see numbers are down, but don't know <span className="font-semibold">why</span> without reading hundreds of logs.
            </p>
            <div className="bg-white rounded-lg p-2 border border-red-100">
              <div className="text-xs text-red-500 font-medium">"I see containment dropped 15%, but I have no idea what's causing it."</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#281C46] rounded-xl p-4 text-white"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-[#F8D57E]">THE WIN</h3>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-white/90">
              <span className="font-semibold text-[#F8D57E]">Instant Root Cause Analysis (RCA)</span> combining hard metrics with qualitative understanding of user intent.
            </p>
          </motion.div>
        </div>

        {/* Right - The Nexus Moment */}
        <div className="col-span-3 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-white rounded-xl p-4 border-2 border-[#5A3BFE]/30 flex-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#5A3BFE]" />
                <h3 className="text-sm font-bold text-[#281C46]">The Nexus Moment</h3>
              </div>
              <DemoVideoButton url={DEMO_VIDEOS.instantAnalyst} />
            </div>

            <div className="space-y-3">
              {/* Step 1 */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-[#5A3BFE] rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="text-xs font-semibold text-[#5A3BFE]">Metric Check</span>
                </div>
                <div className="pl-8">
                  <div className="bg-[#5A3BFE]/5 rounded p-2 mb-2 border-l-2 border-[#5A3BFE]">
                    <p className="text-xs text-[#281C46] italic">"How is my bot performing today?"</p>
                  </div>
                  <p className="text-xs text-[#281C46]/70">→ Nexus shows the drop in containment rate</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-[#0668E1] rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="text-xs font-semibold text-[#0668E1]">Qualitative Deep Dive</span>
                </div>
                <div className="pl-8">
                  <div className="bg-[#0668E1]/5 rounded p-2 mb-2 border-l-2 border-[#0668E1]">
                    <p className="text-xs text-[#281C46] italic">"Summarize what went wrong in the unresolved chats from the last 24 hours."</p>
                  </div>
                </div>
              </div>

              {/* Step 3 - The Action */}
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-xs font-semibold text-emerald-600">Nexus Analyzes & Synthesizes</span>
                </div>
                <div className="pl-8">
                  <div className="bg-white rounded p-2 border border-emerald-200">
                    <p className="text-xs text-[#281C46]">
                      <span className="font-semibold">"The primary failure point is the 'Refund' flow.</span> Users are asking for 'partial refunds,' which the current agent doesn't understand."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 8: Hero Scenario 2 - Zero-to-One Architect  
const HeroScenario2Slide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={Rocket} 
        title="Hero Scenario: The 'Zero-to-One' Architect" 
        subtitle="From Brainstorming to Build in Minutes"
        color="bg-[#0668E1]"
      />

      <div className="flex-1 grid grid-cols-5 gap-4">
        {/* Left - Context */}
        <div className="col-span-2 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-[#0668E1]/10 to-white rounded-xl p-4 border border-[#0668E1]/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-[#0668E1]" />
              <h3 className="text-sm font-bold text-[#281C46]">Target Audience</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Product Owners", "Innovation Leads", "Startup Founders"].map((role, i) => (
                <span key={i} className="text-xs bg-[#0668E1]/10 text-[#0668E1] px-2 py-1 rounded-full font-medium">{role}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-gradient-to-br from-red-50 to-white rounded-xl p-4 border border-red-200 flex-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <h3 className="text-sm font-bold text-red-600">The Pain Point</h3>
            </div>
            <p className="text-xs text-[#281C46]/80 mb-3">
              "I need a bot, but I'm stuck on the design phase. I don't know where to start."
            </p>
            <div className="bg-white rounded-lg p-2 border border-red-100">
              <div className="text-xs text-red-500 font-medium">The "Blank Slate" Problem — analysis paralysis before a single line is written.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#281C46] rounded-xl p-4 text-white"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-[#F8D57E]">THE WIN</h3>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-white/90">
              <span className="font-semibold text-[#F8D57E]">Vague idea → Fully functional MVP</span> (including Knowledge Base) in a single session.
            </p>
          </motion.div>
        </div>

        {/* Right - The Nexus Moment */}
        <div className="col-span-3 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-white rounded-xl p-4 border-2 border-[#0668E1]/30 flex-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#0668E1]" />
                <h3 className="text-sm font-bold text-[#281C46]">The Nexus Moment</h3>
              </div>
              <DemoVideoButton url={DEMO_VIDEOS.zeroToOneArchitect} />
            </div>

            <div className="bg-[#0668E1]/5 rounded-lg p-3 mb-4 border-l-2 border-[#0668E1]">
              <p className="text-xs text-[#281C46] italic">"Help me plan and build a bot for a luxury hotel concierge."</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {/* Brainstorm */}
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-purple-500" />
                  <span className="text-xs font-semibold text-purple-600">Brainstorms</span>
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs text-[#281C46]/80">• Suggests persona: "Sophisticated & Helpful"</div>
                  <div className="text-xs text-[#281C46]/80">• Key capabilities identified</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {["Room Service", "Spa Booking", "FAQ"].map((cap, i) => (
                      <span key={i} className="text-xs bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded">{cap}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Plans */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Route className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-semibold text-blue-600">Plans</span>
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs text-[#281C46]/80">• Outlines "Super Agent" structure</div>
                  <div className="text-xs text-[#281C46]/80">• Suggests KB source (hotel website)</div>
                  <div className="text-xs text-[#281C46]/80">• Maps conversation flows</div>
                </div>
              </div>

              {/* Executes */}
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-600">Executes</span>
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs text-[#281C46]/80">• Builds agents automatically</div>
                  <div className="text-xs text-[#281C46]/80">• Scrapes website for FAQs</div>
                  <div className="text-xs text-[#281C46]/80">• Delivers testable bot</div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-[#F8D57E]/20 rounded-lg p-3 border border-[#F8D57E]/40 text-center">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-[#281C46]" />
                <span className="text-sm font-bold text-[#281C46]">Result: Complete MVP in Minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 9: Hero Scenario 3 - Support Commander
const HeroScenario3Slide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={Inbox} 
        title="Hero Scenario: The 'Support Commander'" 
        subtitle="Inbox Prioritization & Operations"
        color="bg-emerald-600"
      />

      <div className="flex-1 grid grid-cols-5 gap-4">
        {/* Left - Context */}
        <div className="col-span-2 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-500/10 to-white rounded-xl p-4 border border-emerald-500/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-bold text-[#281C46]">Target Audience</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Inbox Admins", "Support Leads", "Team Managers"].map((role, i) => (
                <span key={i} className="text-xs bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-full font-medium">{role}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-gradient-to-br from-red-50 to-white rounded-xl p-4 border border-red-200 flex-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <h3 className="text-sm font-bold text-red-600">The Pain Point</h3>
            </div>
            <p className="text-xs text-[#281C46]/80 mb-3">
              "I have 50 open tickets. I don't know which ones are urgent, and I'm worried I'm missing angry customers."
            </p>
            <div className="bg-white rounded-lg p-2 border border-red-100">
              <div className="text-xs text-red-500 font-medium">Cherry-picking easy tickets while critical fires burn.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#281C46] rounded-xl p-4 text-white"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-[#F8D57E]">THE WIN</h3>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-white/90">
              <span className="font-semibold text-[#F8D57E]">Operational efficiency.</span> Agents stop cherry-picking and start solving the most critical customer problems.
            </p>
          </motion.div>
        </div>

        {/* Right - The Nexus Moment */}
        <div className="col-span-3 flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-white rounded-xl p-4 border-2 border-emerald-500/30 flex-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <h3 className="text-sm font-bold text-[#281C46]">The Nexus Moment</h3>
              </div>
              <DemoVideoButton url={DEMO_VIDEOS.supportCommander} />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-emerald-50 rounded-lg p-3 border-l-2 border-emerald-500">
                <p className="text-xs text-[#281C46] italic">"Show me all open tickets assigned to me and help me prioritize."</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3 border-l-2 border-emerald-500">
                <p className="text-xs text-[#281C46] italic">"Analyze if any chats in the last 24 hours ended with negative sentiment."</p>
              </div>
            </div>

            <div className="space-y-3">
              {/* Filters */}
              <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="text-xs font-semibold text-emerald-600">Filters</span>
                </div>
                <p className="text-xs text-[#281C46]/80 pl-8">Lists all open tickets with status and assignee information</p>
              </div>

              {/* Prioritizes */}
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="text-xs font-semibold text-amber-600">Prioritizes</span>
                </div>
                <p className="text-xs text-[#281C46]/80 pl-8">Scans content and flags tickets where user sentiment was <span className="font-semibold text-red-500">"Angry"</span></p>
              </div>

              {/* Contextualizes */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-xs font-semibold text-blue-600">Contextualizes</span>
                </div>
                <div className="pl-8">
                  <p className="text-xs text-[#281C46]/80 mb-2">Provides one-line summary of why they are angry:</p>
                  <div className="bg-white rounded p-2 border border-blue-100">
                    <p className="text-xs text-[#281C46] font-medium">"Repeated payment failure — customer attempted 3 times"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 10: Hero Scenarios 4 & 5 - Consumer Intel & Executive Visibility
const HeroScenario4and5Slide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={UserSearch} 
        title="More Hero Scenarios" 
        subtitle="Consumer Intelligence & Executive Visibility"
        color="bg-purple-600"
      />

      <div className="flex-1 grid grid-cols-2 gap-5">
        {/* Consumer Intel Engine */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden flex flex-col"
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserSearch className="w-5 h-5 text-white" />
                <h3 className="text-sm font-bold text-white">The "Consumer Intel" Engine</h3>
              </div>
              <DemoVideoButton url={DEMO_VIDEOS.consumerIntel} label="Demo" />
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {["Product Managers", "Strategy Leads"].map((role, i) => (
                <span key={i} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{role}</span>
              ))}
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="bg-red-50 rounded-lg p-3 mb-3 border border-red-100">
              <div className="text-xs font-semibold text-red-500 mb-1">THE PAIN</div>
              <p className="text-xs text-[#281C46]/80">"We have millions of conversations, but we don't understand the people behind them."</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 mb-3 border-l-2 border-purple-500 flex-1">
              <div className="text-xs font-semibold text-purple-600 mb-2">NEXUS QUERY</div>
              <p className="text-xs text-[#281C46] italic">"Analyze the sentiment of iPhone users asking about 'Refunds' versus Android users."</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="text-xs font-semibold text-[#281C46] mb-2">NEXUS DISCOVERS</div>
              <div className="space-y-1.5">
                {[
                  "Segments users by device, location, behavior",
                  "Identifies: 'iOS users have 15% lower sentiment due to UI glitch'",
                  "Creates dedicated DB table for this segment",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-purple-500 mt-0.5" />
                    <span className="text-xs text-[#281C46]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="bg-emerald-50 rounded p-2 text-center border border-emerald-200">
                <span className="text-xs font-bold text-emerald-600">Shifts focus from "Bot Performance" to "Customer Experience"</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Executive Visibility */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-xl border-2 border-amber-200 overflow-hidden flex flex-col"
        >
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-white" />
                <h3 className="text-sm font-bold text-white">Executive Visibility</h3>
              </div>
              <DemoVideoButton url={DEMO_VIDEOS.executiveVisibility} label="Demo" />
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {["VPs of CX", "Operations Directors"].map((role, i) => (
                <span key={i} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">{role}</span>
              ))}
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="bg-red-50 rounded-lg p-3 mb-3 border border-red-100">
              <div className="text-xs font-semibold text-red-500 mb-1">THE PAIN</div>
              <p className="text-xs text-[#281C46]/80">Waiting for weekly manual reports to understand ROI.</p>
            </div>

            <div className="bg-amber-50 rounded-lg p-3 mb-3 border-l-2 border-amber-500 flex-1">
              <div className="text-xs font-semibold text-amber-600 mb-2">NEXUS COMMAND</div>
              <p className="text-xs text-[#281C46] italic">"Compare AI Agent resolution rates for this week vs. last week."</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="text-xs font-semibold text-[#281C46] mb-2">NEXUS DELIVERS</div>
              <div className="space-y-1.5">
                {[
                  "Generates comparative line chart widget",
                  "Summarizes variance in plain English",
                  "Highlights key trends and anomalies",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-amber-500 mt-0.5" />
                    <span className="text-xs text-[#281C46]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="bg-emerald-50 rounded p-2 text-center border border-emerald-200">
                <span className="text-xs font-bold text-emerald-600">Real-time strategic decisions without SQL knowledge</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 11: Customer Success Stories (Original)
const CustomerSuccessSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-8">
      <SectionHeader 
        icon={Award} 
        title="Customer Success Stories" 
        subtitle="Real-World Impact at Scale"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-3 gap-5">
        {/* Zalora - Retail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-sm"
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Zalora</h3>
                <span className="text-xs text-white/80">Fashion E-commerce</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="bg-pink-50 rounded-lg p-3 mb-3">
              <div className="text-xs font-semibold text-pink-600 mb-1">USE CASE</div>
              <p className="text-sm text-[#281C46]">Autonomous Refund Manager</p>
            </div>
            <div className="flex-1">
              <div className="text-xs text-[#281C46]/70 mb-2">Automated the entire refund lifecycle:</div>
              <div className="space-y-1">
                {["Verification", "Processing", "Inventory Update", "Customer Communication"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-pink-500" />
                    <span className="text-xs text-[#281C46]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#281C46]/60">Self-Serve Rate</span>
                <span className="text-2xl font-bold text-pink-500">90%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hyundai - Automotive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-sm"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Hyundai</h3>
                <span className="text-xs text-white/80">Automotive</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="bg-blue-50 rounded-lg p-3 mb-3">
              <div className="text-xs font-semibold text-blue-600 mb-1">USE CASE</div>
              <p className="text-sm text-[#281C46]">The Sales Engine</p>
            </div>
            <div className="flex-1">
              <div className="text-xs text-[#281C46]/70 mb-2">Proactive engagement system:</div>
              <div className="space-y-1">
                {["High-intent visitor identification", "Proactive engagement", "Lead qualification", "Dealer handoff"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-blue-500" />
                    <span className="text-xs text-[#281C46]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#281C46]/60">Vehicles Sold</span>
                <span className="text-2xl font-bold text-blue-600">1,000+</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tiket.com - Travel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col shadow-sm"
        >
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tiket.com</h3>
                <span className="text-xs text-white/80">Online Travel</span>
              </div>
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="bg-orange-50 rounded-lg p-3 mb-3">
              <div className="text-xs font-semibold text-orange-600 mb-1">USE CASE</div>
              <p className="text-sm text-[#281C46]">The Crisis Manager</p>
            </div>
            <div className="flex-1">
              <div className="text-xs text-[#281C46]/70 mb-2">High-volume transaction handling:</div>
              <div className="space-y-1">
                {["Booking modifications", "Cancellation processing", "Real-time updates", "Multi-channel support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-orange-500" />
                    <span className="text-xs text-[#281C46]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-[#281C46]/60">Automation Rate</span>
                  <div className="text-xl font-bold text-orange-500">70-80%</div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#281C46]/60">CSAT</span>
                  <div className="text-xl font-bold text-emerald-500">2x</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-4 bg-gradient-to-r from-[#5A3BFE]/10 to-[#0668E1]/10 rounded-xl p-4 border border-[#5A3BFE]/20"
      >
        <div className="flex items-center gap-3">
          <Quote className="w-6 h-6 text-[#5A3BFE]/50" />
          <p className="text-sm text-[#281C46]/80 italic">"Nexus enables precision execution that doubles customer satisfaction while reducing operational costs by 60%"</p>
        </div>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 8: Competitive Positioning
const CompetitiveSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-8">
      <SectionHeader 
        icon={Target} 
        title="Competitive Differentiation" 
        subtitle="Why Nexus Leads the Agentic Enterprise"
        color="bg-[#281C46]"
      />

      <div className="flex-1 flex flex-col gap-4">
        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden flex-1"
        >
          <div className="grid grid-cols-4 divide-x divide-gray-200">
            {/* Header Row */}
            <div className="p-3 bg-gray-50">
              <span className="text-xs font-bold text-[#281C46]/60 uppercase">Capability</span>
            </div>
            <div className="p-3 bg-gradient-to-r from-[#5A3BFE] to-[#5A3BFE]/90">
              <span className="text-sm font-bold text-white">Yellow.ai Nexus</span>
            </div>
            <div className="p-3 bg-gray-100">
              <span className="text-xs font-bold text-[#281C46]">Salesforce Agentforce</span>
            </div>
            <div className="p-3 bg-gray-100">
              <span className="text-xs font-bold text-[#281C46]">Microsoft Copilot Studio</span>
            </div>
          </div>

          {/* Data Rows */}
          {[
            { feature: "Ecosystem Scope", nexus: "Universal (Agnostic)", nexusIcon: Globe, salesforce: "CRM-centric only", microsoft: "M365 Productivity only" },
            { feature: "Autonomy Level", nexus: "Full Commander", nexusIcon: Shield, salesforce: "High (Atlas)", microsoft: "Assistive (Copilot)" },
            { feature: "Integration Reach", nexus: "150+ Plug-and-Play", nexusIcon: Puzzle, salesforce: "Locked to Salesforce", microsoft: "Locked to Microsoft" },
            { feature: "LLM Flexibility", nexus: "Multi-LLM (15+ Models)", nexusIcon: Layers, salesforce: "Einstein / Proprietary", microsoft: "Azure / OpenAI only" },
            { feature: "Self-Healing", nexus: "Autonomous RCA & Fix", nexusIcon: RefreshCw, salesforce: "Limited", microsoft: "Manual intervention" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-4 divide-x divide-gray-200 border-t border-gray-200">
              <div className="p-2.5 bg-gray-50">
                <span className="text-xs font-semibold text-[#281C46]">{row.feature}</span>
              </div>
              <div className="p-2.5 bg-[#5A3BFE]/5 flex items-center gap-2">
                <row.nexusIcon className="w-4 h-4 text-[#5A3BFE]" />
                <span className="text-xs font-semibold text-[#5A3BFE]">{row.nexus}</span>
              </div>
              <div className="p-2.5">
                <span className="text-xs text-[#281C46]/70">{row.salesforce}</span>
              </div>
              <div className="p-2.5">
                <span className="text-xs text-[#281C46]/70">{row.microsoft}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-4 gap-3"
        >
          {[
            { icon: Globe, label: "Universal", desc: "Not locked to any ecosystem", color: "from-[#5A3BFE]" },
            { icon: Shield, label: "Full Autonomy", desc: "Commander, not Copilot", color: "from-[#0668E1]" },
            { icon: Puzzle, label: "150+ Integrations", desc: "Connect to any stack", color: "from-emerald-500" },
            { icon: Layers, label: "Multi-LLM", desc: "15+ models, no lock-in", color: "from-amber-500" },
          ].map((item, i) => (
            <div key={i} className={`bg-gradient-to-br ${item.color} to-[#281C46] rounded-xl p-3 text-white text-center`}>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-sm font-bold text-white">{item.label}</div>
              <div className="text-xs text-white/80">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 12: Detailed Features - Studio & Support Layers
const FeaturesStudioSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={Bot} 
        title="Detailed Capabilities: Studio & Support Layers" 
        subtitle="Builder, Configuration & Inbox Operations"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-2 gap-4">
        {/* Studio Layer */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#5A3BFE] to-[#5A3BFE]/80 p-3">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-white" />
              <h3 className="text-sm font-bold text-white">Studio Layer — Builder & Configuration</h3>
            </div>
          </div>
          <div className="p-3 space-y-2 max-h-[320px] overflow-y-auto">
            {[
              { area: "Agent Management", features: [
                { name: "Text-to-Bot Creation", example: '"Create a Refund agent that asks for Order ID"' },
                { name: "Agent Editing", example: '"Update the Sales agent to be more polite"' },
                { name: "Logic Auditing", example: '"Show me the goal instructions for Support agent"' },
              ]},
              { area: "Persona & Behavior", features: [
                { name: "Persona Tuning", example: '"Make the bot sound more empathetic"' },
                { name: "Welcome/Fallback Logic", example: '"Set welcome message to trigger Onboarding"' },
              ]},
              { area: "Safety & Governance", features: [
                { name: "Content Guardrails", example: '"Block bot from discussing politics"' },
              ]},
              { area: "Knowledge Base", features: [
                { name: "Website Indexing", example: '"Index example.com/sitemap.xml for KB"' },
              ]},
            ].map((section, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-2">
                <div className="text-xs font-bold text-[#5A3BFE] uppercase tracking-wide mb-1.5">{section.area}</div>
                <div className="space-y-1.5">
                  {section.features.map((feat, j) => (
                    <div key={j} className="bg-white rounded p-1.5 border border-gray-100">
                      <div className="text-xs font-semibold text-[#281C46]">{feat.name}</div>
                      <div className="text-xs text-[#281C46]/60 italic">{feat.example}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support Layer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3">
            <div className="flex items-center gap-2">
              <Inbox className="w-5 h-5 text-white" />
              <h3 className="text-sm font-bold text-white">Support Layer — Inbox & Operations</h3>
            </div>
          </div>
          <div className="p-3 space-y-2 max-h-[320px] overflow-y-auto">
            {[
              { area: "Ticket Management", features: [
                { name: "Smart Prioritization", example: '"Show me all high-priority open tickets"' },
                { name: "Ticket Deep Dive", example: '"Show full details for ticket #12345"' },
              ]},
              { area: "Context & Audit", features: [
                { name: "Transcript Analysis", example: '"What was last message sent by user +1555...?"' },
                { name: "Activity Forensics", example: '"Who changed status of ticket #9876?"' },
                { name: "Sentiment Scan", example: '"Find tickets from yesterday with negative sentiment"' },
              ]},
            ].map((section, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-2">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1.5">{section.area}</div>
                <div className="space-y-1.5">
                  {section.features.map((feat, j) => (
                    <div key={j} className="bg-white rounded p-1.5 border border-gray-100">
                      <div className="text-xs font-semibold text-[#281C46]">{feat.name}</div>
                      <div className="text-xs text-[#281C46]/60 italic">{feat.example}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional Studio Features */}
            <div className="bg-blue-50 rounded-lg p-2">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1.5">Flow & Integration</div>
              <div className="space-y-1.5">
                {[
                  { name: "Journey Visualization", example: '"List all workflows and identify default journey"' },
                  { name: "API Failure Forensics", example: '"Show 500 errors for Payment API in last hour"' },
                  { name: "Function Review", example: '"Show me the code for validateEmail"' },
                ].map((feat, j) => (
                  <div key={j} className="bg-white rounded p-1.5 border border-gray-100">
                    <div className="text-xs font-semibold text-[#281C46]">{feat.name}</div>
                    <div className="text-xs text-[#281C46]/60 italic">{feat.example}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-3 bg-[#F8D57E]/20 rounded-xl p-3 border border-[#F8D57E]/40"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xs text-[#281C46]"><span className="font-bold">Natural Language First</span> — No SQL, no code required</div>
          </div>
          <div className="flex gap-2">
            {["Text-to-Bot", "Text-to-Flow", "Text-to-Query"].map((item, i) => (
              <span key={i} className="text-xs bg-[#5A3BFE] text-white px-2 py-1 rounded-full font-medium">{item}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 13: Detailed Features - Analytics & Forensics Layers
const FeaturesAnalyticsSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={BarChart3} 
        title="Detailed Capabilities: Analytics & Forensics" 
        subtitle="Database, Insights, X-Ray & Query Engine"
        color="bg-[#0668E1]"
      />

      <div className="flex-1 grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          {/* Database Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden flex-1"
          >
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2.5">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-white" />
                <h3 className="text-xs font-bold text-white">Database Layer — Memory</h3>
              </div>
            </div>
            <div className="p-2.5 space-y-1.5">
              {[
                { name: "Table Visualization", example: '"Show all database tables and their columns"' },
                { name: "Instant Table Creation", example: '"Create VIP_Users table with Email and Spend"' },
                { name: "Natural Language Query", example: '"Search Orders where Status=Pending & Value>500"' },
              ].map((feat, i) => (
                <div key={i} className="bg-purple-50 rounded p-2 border border-purple-100">
                  <div className="text-xs font-semibold text-purple-700">{feat.name}</div>
                  <div className="text-xs text-[#281C46]/60 italic">{feat.example}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Brain Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden flex-1"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-2.5">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-white" />
                <h3 className="text-xs font-bold text-white">Brain Layer — Insights & Analytics</h3>
              </div>
            </div>
            <div className="p-2.5 space-y-1.5">
              {[
                { name: "Health & Hygiene", example: '"How is my bot\'s health today?"' },
                { name: "Trend Analysis", example: '"Resolution rate trend for last 7 days"' },
                { name: "Demographic Profiling", example: '"Where are my users coming from?"' },
                { name: "Peak Hour Tracking", example: '"When is the bot busiest?"' },
                { name: "CSAT Tracking", example: '"Average CSAT score this week?"' },
              ].map((feat, i) => (
                <div key={i} className="bg-amber-50 rounded p-1.5 border border-amber-100">
                  <div className="text-xs font-semibold text-amber-700">{feat.name}</div>
                  <div className="text-xs text-[#281C46]/60 italic">{feat.example}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3">
          {/* X-Ray Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden flex-1"
          >
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-2.5">
              <div className="flex items-center gap-2">
                <Microscope className="w-4 h-4 text-white" />
                <h3 className="text-xs font-bold text-white">X-Ray Layer — Advanced Forensics</h3>
              </div>
            </div>
            <div className="p-2.5 space-y-1.5">
              {[
                { name: "Topic Clustering", example: '"What topics cause most drop-offs?"' },
                { name: "Automated Sentiment", example: '"Show negative conversations about Pricing"' },
                { name: "AI Reasoning Trace", example: '"Show trace for last message — why 5 seconds?"' },
                { name: "Session Replay", example: '"Show sessions currently being analyzed"' },
              ].map((feat, i) => (
                <div key={i} className="bg-red-50 rounded p-2 border border-red-100">
                  <div className="text-xs font-semibold text-red-700">{feat.name}</div>
                  <div className="text-xs text-[#281C46]/60 italic">{feat.example}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Query Engine Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden flex-1"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-2.5">
              <div className="flex items-center gap-2">
                <FileSearch className="w-4 h-4 text-white" />
                <h3 className="text-xs font-bold text-white">Query Engine — Data Explorer</h3>
              </div>
            </div>
            <div className="p-2.5 space-y-1.5">
              {[
                { name: "WhatsApp Cost Analysis", example: '"Breakdown of WhatsApp costs by message type"' },
                { name: "Voice Latency Breakdown", example: '"Average STT latency for voice calls?"' },
                { name: "Utterance Mining", example: '"Voice utterances that matched no intent"' },
                { name: "Article Effectiveness", example: '"Which KB articles have most dislikes?"' },
                { name: "Campaign Tracking", example: '"Read rate for Holiday_Promo campaign?"' },
              ].map((feat, i) => (
                <div key={i} className="bg-cyan-50 rounded p-1.5 border border-cyan-100">
                  <div className="text-xs font-semibold text-cyan-700">{feat.name}</div>
                  <div className="text-xs text-[#281C46]/60 italic">{feat.example}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Admin Layer Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-3 bg-[#281C46] rounded-xl p-3 text-white"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FolderPlus className="w-5 h-5 text-[#F8D57E]" />
            <div>
              <div className="text-xs font-bold text-[#F8D57E]">Admin Layer — Project & Lifecycle Management</div>
              <div className="text-xs text-white/70">Zero-Touch Setup: "Create a new bot named 'TravelBuddy' for my agency"</div>
            </div>
          </div>
          <div className="text-xs text-white/60">Subscription Audit • Bot Provisioning • Region Config</div>
        </div>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 14: Capabilities Matrix Overview
const CapabilitiesSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={Puzzle} 
        title="Nexus Capabilities Matrix — Overview" 
        subtitle="7 Layers of Enterprise Command"
        color="bg-[#0668E1]"
      />

      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full"
        >
          {/* Table Header */}
          <div className="grid grid-cols-5 bg-[#281C46] text-white">
            <div className="p-2.5 text-xs font-bold uppercase tracking-wide">Layer</div>
            <div className="p-2.5 text-xs font-bold uppercase tracking-wide">Persona</div>
            <div className="p-2.5 text-xs font-bold uppercase tracking-wide">Responsibility</div>
            <div className="p-2.5 text-xs font-bold uppercase tracking-wide">Key Features</div>
            <div className="p-2.5 text-xs font-bold uppercase tracking-wide">Enterprise Benefit</div>
          </div>

          {/* Table Rows */}
          {[
            { layer: "Studio", persona: "Architect", icon: Bot, responsibility: "Building & Configuration", features: "Text-to-Bot, Persona Tuning, KB Indexing", benefit: "Minutes-to-build; zero code required", color: "bg-[#5A3BFE]" },
            { layer: "Support", persona: "Commander", icon: Inbox, responsibility: "Inbox & Operations", features: "Smart Prioritization, Sentiment Scan", benefit: "Tackle critical fires first", color: "bg-emerald-500" },
            { layer: "Database", persona: "Analyst", icon: Database, responsibility: "Memory Management", features: "NL Query, Table Creation", benefit: "No SQL knowledge needed", color: "bg-purple-500" },
            { layer: "Brain", persona: "Strategist", icon: Brain, responsibility: "Insights & Analytics", features: "Health Monitoring, CSAT, Trends", benefit: "Real-time executive visibility", color: "bg-amber-500" },
            { layer: "X-Ray", persona: "Detective", icon: Microscope, responsibility: "Advanced Forensics", features: "AI Reasoning Trace, Topic Clustering", benefit: "Understand the 'why'", color: "bg-red-500" },
            { layer: "Query Engine", persona: "Explorer", icon: FileSearch, responsibility: "Data Explorer", features: "Channel Economics, Voice Latency", benefit: "Optimize spend & performance", color: "bg-cyan-500" },
            { layer: "Admin", persona: "Provisioner", icon: FolderPlus, responsibility: "Lifecycle Management", features: "Zero-Touch Setup, Subscriptions", benefit: "Instant deployment", color: "bg-gray-600" },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
              className={`grid grid-cols-5 border-t border-gray-200 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              <div className="p-2 flex items-center gap-2">
                <div className={`w-7 h-7 ${row.color} rounded-lg flex items-center justify-center`}>
                  <row.icon className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-bold text-[#281C46]">{row.layer}</span>
              </div>
              <div className="p-2 flex items-center">
                <span className="text-xs text-[#5A3BFE] font-medium">{row.persona}</span>
              </div>
              <div className="p-2 flex items-center">
                <span className="text-xs text-[#281C46]/80">{row.responsibility}</span>
              </div>
              <div className="p-2 flex items-center">
                <span className="text-xs text-[#281C46]/70">{row.features}</span>
              </div>
              <div className="p-2 flex items-center">
                <span className="text-xs text-emerald-600 font-medium">{row.benefit}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-3 grid grid-cols-4 gap-3"
      >
        {[
          { value: "50+", label: "Natural Language Commands" },
          { value: "20+", label: "Analytics Dashboards" },
          { value: "150+", label: "Pre-built Integrations" },
          { value: "<1%", label: "Hallucination Rate" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#5A3BFE]/5 rounded-lg p-2.5 border border-[#5A3BFE]/20 text-center">
            <div className="text-lg font-bold text-[#5A3BFE]">{stat.value}</div>
            <div className="text-xs text-[#281C46]/60">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 10: Sales Conversation Starters
const SalesConversationSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-8">
      <SectionHeader 
        icon={MessageSquare} 
        title="Sales Conversation Starters" 
        subtitle="Key Questions to Qualify & Engage Prospects"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Discovery Questions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-br from-[#5A3BFE]/10 to-white rounded-xl p-5 border border-[#5A3BFE]/30"
        >
          <h3 className="text-sm font-bold text-[#5A3BFE] mb-4 uppercase tracking-wide flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Discovery Questions
          </h3>
          <div className="space-y-3">
            {[
              "How long does it typically take to deploy a new automation flow today?",
              "What percentage of customer inquiries are handled without human intervention?",
              "How much time does your team spend on maintenance vs. building new features?",
              "Are you locked into a specific ecosystem (Salesforce, Microsoft)?",
              "How do you currently handle AI governance and compliance?",
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-[#5A3BFE]/20">
                <span className="text-xs font-bold text-[#5A3BFE] mt-0.5">{i + 1}.</span>
                <span className="text-xs text-[#281C46]/80">{q}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pain Point Triggers */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-5 border border-amber-200"
        >
          <h3 className="text-sm font-bold text-amber-600 mb-4 uppercase tracking-wide flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Pain Point Triggers
          </h3>
          <div className="space-y-3">
            {[
              { trigger: "Long deployment cycles", response: "Nexus builds flows in minutes with Text-to-Flow" },
              { trigger: "Low self-serve rates", response: "90% automation rate with context-driven AI" },
              { trigger: "High maintenance burden", response: "Self-healing logic with automated RCA" },
              { trigger: "Vendor lock-in concerns", response: "Universal interface with 150+ integrations" },
              { trigger: "AI safety worries", response: "<1% hallucination with governance as code" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-3 border border-amber-100">
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="w-3 h-3 text-red-400" />
                  <span className="text-xs font-semibold text-red-500">{item.trigger}</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <ArrowRight className="w-3 h-3 text-emerald-500" />
                  <span className="text-xs text-emerald-600">{item.response}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom - Objection Handling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-4 bg-[#281C46] rounded-xl p-4 text-white"
      >
        <h3 className="text-xs font-bold text-[#F8D57E] mb-3 uppercase tracking-wide">Common Objections & Responses</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { objection: "We already have Salesforce/Microsoft", response: "Nexus is ecosystem-agnostic—enhance your existing stack without replacement" },
            { objection: "AI isn't ready for production", response: "Our safety layer ensures <1% hallucination with governance as code" },
            { objection: "It's too complex to implement", response: "Zero-shot intelligence means instant deployment—no manual training required" },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-2.5">
              <div className="text-xs font-semibold text-red-300 mb-1">"{item.objection}"</div>
              <div className="text-xs text-emerald-300">{item.response}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 11: Call to Action
const CTASlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5A3BFE] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F8D57E] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#0668E1] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <img src="/yellow%20logo.png" alt="Yellow.ai" className="h-10 w-auto object-contain" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold text-[#281C46] mb-4"
        >
          Ready to Enter the Era of <span className="text-[#5A3BFE]">Autonomy</span>?
        </motion.h1>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-[#5A3BFE]/5 to-[#0668E1]/5 border border-[#5A3BFE]/20 rounded-2xl p-5 mb-6 max-w-2xl"
        >
          <Quote className="w-6 h-6 text-[#5A3BFE]/30 mb-2" />
          <p className="text-base text-[#281C46]/80 italic mb-3">
            "The Copilot era was about assistance. The Nexus era is about autonomy."
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-[#281C46]/60">Service as a Software</span>
            <ArrowRight className="w-4 h-4 text-[#5A3BFE]" />
            <span className="text-sm font-bold text-[#5A3BFE]">The AI IS the Interface</span>
          </div>
        </motion.div>

        {/* Value Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-6 mb-8"
        >
          {[
            { value: "60%", label: "TCO Reduction" },
            { value: "90%", label: "Self-Serve" },
            { value: "10x", label: "Faster" },
            { value: "150+", label: "Integrations" },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4 border-r border-gray-200 last:border-r-0">
              <div className="text-2xl font-bold text-[#5A3BFE]">{stat.value}</div>
              <div className="text-xs text-[#281C46]/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-6 mb-8"
        >
          {[
            { icon: Eye, label: "Eyes" },
            { icon: Hand, label: "Hands" },
            { icon: Shield, label: "Authority" },
          ].map((pillar, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-xl flex items-center justify-center mb-2">
                <pillar.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-bold text-[#281C46]">{pillar.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <button className="bg-gradient-to-r from-[#5A3BFE] to-[#0668E1] text-white px-8 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Schedule Demo
          </button>
          <button className="bg-[#F8D57E] text-[#281C46] px-8 py-3 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Get Datasheet
          </button>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-[#281C46]/60 mb-2">www.yellow.ai/nexus</p>
          <p className="text-lg font-bold text-[#281C46]">Thank You</p>
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// All slides
const slides = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  NexusArchitectureSlide,
  ThreePillarsSlide,
  LifecycleSlide,
  ValuePropSlide,
  HeroScenario1Slide,
  HeroScenario2Slide,
  HeroScenario3Slide,
  HeroScenario4and5Slide,
  CompetitiveSlide,
  FeaturesStudioSlide,
  FeaturesAnalyticsSlide,
  CapabilitiesSlide,
  SalesConversationSlide,
  CTASlide,
]

const slideNames = [
  "Introduction",
  "The Challenge",
  "Nexus Solution",
  "Architecture",
  "Three Pillars",
  "Lifecycle",
  "Value & ROI",
  "Instant Analyst",
  "Zero-to-One",
  "Support Commander",
  "Intel & Executive",
  "Competitive",
  "Features: Studio",
  "Features: Analytics",
  "Capabilities",
  "Sales Guide",
  "Call to Action",
]

export default function NexusSalesEnablementPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col">
      {/* Main content */}
      <div className="flex-1 relative overflow-hidden">
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

      {/* Navigation bar */}
      <div className="bg-white/90 backdrop-blur-sm border-t border-white/50 px-6 py-3">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto">
          {/* Slide indicators with names */}
          <div className="flex items-center gap-1 overflow-x-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                  index === currentSlide 
                    ? "bg-[#5A3BFE] text-white" 
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {slideNames[index]}
              </button>
            ))}
          </div>

          {/* Slide counter */}
          <div className="text-sm text-slate-500 font-medium mx-4">
            {currentSlide + 1} / {slides.length}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-2">
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
