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
  type LucideIcon,
} from "lucide-react"

// Slide wrapper for consistent 16:9 dimensions
const SlideWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <div className="w-full max-w-[1400px] aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden relative">
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
    className="flex items-center gap-3 mb-5"
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

// Slide 1: Title Slide
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
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-6 mb-8"
        >
          <img src="/yellow%20logo.png" alt="Yellow.ai" className="h-14 w-auto object-contain" />
        </motion.div>

        {/* Product Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5A3BFE] to-[#0668E1] text-white px-8 py-3 rounded-full text-base font-bold uppercase tracking-wider">
            <Sparkles className="w-5 h-5" />
            Introducing Nexus
            <Sparkles className="w-5 h-5" />
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl font-bold text-[#281C46] mb-5 text-center leading-tight"
        >
          The Universal Agentic Interface
          <br />
          <span className="text-[#5A3BFE]">for the Autonomic Enterprise</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-[#281C46]/70 mb-10 text-center max-w-2xl"
        >
          Stop working for your software.
          <br />
          <span className="text-[#0668E1] font-semibold">Make your software work for you.</span>
        </motion.p>

        {/* Three Pillars Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-8 mb-10"
        >
          {[
            { icon: Eye, label: "Eyes", desc: "Intelligence" },
            { icon: Hand, label: "Hands", desc: "Execution" },
            { icon: Shield, label: "Authority", desc: "Autonomy" },
          ].map((pillar, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-xl flex items-center justify-center mb-3">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-base font-bold text-[#281C46]">{pillar.label}</span>
              <span className="text-sm text-[#281C46]/60">{pillar.desc}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="bg-[#F8D57E] text-[#281C46] px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
            Experience Autonomy
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 2: The Paradigm Shift
const ParadigmShiftSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-7">
      <SectionHeader 
        icon={TrendingUp} 
        title="The Dawn of the Autonomic Enterprise" 
        subtitle="Service as a Software: The New Economic Reality"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-2 gap-6">
        {/* Left - The Problem */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border border-red-200 flex-1"
          >
            <h3 className="text-base font-bold text-red-600 mb-4 uppercase tracking-wide flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Traditional SaaS Era (You worked FOR the software)
            </h3>
            <div className="space-y-3">
              {[
                "Navigating rigid decision trees manually",
                "Curating intent lists by hand",
                "Laboring over brittle integrations",
                "Feeding the 'System of Record' with data",
                "Being an 'operator' of complex dashboards",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-red-100">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#281C46]/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#281C46] rounded-xl p-5 text-white"
          >
            <h3 className="text-sm font-bold text-[#F8D57E] mb-2 uppercase tracking-wide">The Cost of Cognition Revolution</h3>
            <p className="text-base text-white/80">
              Pattern-matching and reasoning now approach <span className="text-[#F8D57E] font-bold">near-zero marginal cost</span>—enabling software to replicate human cognitive labor.
            </p>
          </motion.div>
        </div>

        {/* Right - The Solution */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-gradient-to-br from-emerald-50 to-white rounded-xl p-6 border border-emerald-200 flex-1"
          >
            <h3 className="text-base font-bold text-emerald-600 mb-4 uppercase tracking-wide flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Nexus Era (Software works FOR you)
            </h3>
            <div className="space-y-3">
              {[
                "Define strategic outcomes, not workflows",
                "AI handles building, maintaining, optimizing",
                "Instantly scalable workforce, 24/7",
                "From 'System of Record' to 'System of Action'",
                "Transform from operator to strategic commander",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#281C46]/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-gradient-to-r from-[#5A3BFE] to-[#0668E1] rounded-xl p-5 text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white/90 mb-1 uppercase tracking-wide">Enterprise Impact</h3>
                <p className="text-base text-white/80">Reduce Total Cost of Ownership</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-[#F8D57E]">60%</div>
                <div className="text-sm text-white/70">TCO Reduction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-4 bg-gray-50 rounded-xl p-5 border border-gray-200"
      >
        <div className="grid grid-cols-4 gap-5 text-center">
          <div className="text-left">
            <span className="text-sm font-bold text-[#281C46]/60 uppercase">Metric</span>
          </div>
          {[
            { label: "Primary Value", old: "Facilitating tasks via tools", new: "Delivering outcomes via agents" },
            { label: "System Role", old: "System of Record", new: "System of Work / Action" },
            { label: "Focus", old: "Human efficiency & tool mastery", new: "Autonomous execution & reasoning" },
          ].map((row, i) => (
            <div key={i} className="text-left">
              <div className="text-xs font-bold text-[#281C46] mb-1">{row.label}</div>
              <div className="text-[11px] text-red-500 line-through mb-0.5">{row.old}</div>
              <div className="text-[11px] text-emerald-600 font-medium">{row.new}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 3: Architecture - Eyes, Hands, Authority
const ArchitectureSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-7">
      <SectionHeader 
        icon={Layers} 
        title="The Architecture of Nexus" 
        subtitle="Eyes, Hands, and Authority — Strategic Independence"
        color="bg-[#0668E1]"
      />

      <div className="flex-1 grid grid-cols-3 gap-6">
        {/* Eyes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-br from-[#5A3BFE]/10 to-white rounded-xl p-6 border-2 border-[#5A3BFE]/30 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-xl flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#281C46]">Eyes</h3>
              <span className="text-base text-[#5A3BFE] font-medium">Intelligence</span>
            </div>
          </div>
          
          <p className="text-base text-[#281C46]/80 mb-5 flex-1">
            Nexus securely analyzes every conversation log, data table, and user interaction to identify patterns that human analysts frequently miss.
          </p>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-[#5A3BFE]/20">
              <div className="text-sm font-semibold text-[#5A3BFE] mb-1">Visual Intelligence</div>
              <p className="text-xs text-[#281C46]/70">Understand the "why" behind the numbers</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#5A3BFE]/20">
              <div className="text-sm font-semibold text-[#5A3BFE] mb-1">Pattern Recognition</div>
              <p className="text-xs text-[#281C46]/70">Turn unstructured data into actionable insights</p>
            </div>
          </div>
        </motion.div>

        {/* Hands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-br from-[#0668E1]/10 to-white rounded-xl p-6 border-2 border-[#0668E1]/30 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0668E1] to-[#5A3BFE] rounded-xl flex items-center justify-center">
              <Hand className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#281C46]">Hands</h3>
              <span className="text-base text-[#0668E1] font-medium">Execution</span>
            </div>
          </div>
          
          <p className="text-base text-[#281C46]/80 mb-5 flex-1">
            Nexus possesses the manual dexterity to directly manipulate the environment—no code required.
          </p>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-[#0668E1]/20">
              <div className="text-sm font-semibold text-[#0668E1] mb-1">Build Flows</div>
              <p className="text-xs text-[#281C46]/70">Create and fix broken nodes autonomously</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#0668E1]/20">
              <div className="text-sm font-semibold text-[#0668E1] mb-1">GenUI Components</div>
              <p className="text-xs text-[#281C46]/70">Generate UI elements on the fly</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#0668E1]/20">
              <div className="text-sm font-semibold text-[#0668E1] mb-1">Index Sitemaps</div>
              <p className="text-xs text-[#281C46]/70">Crawl and index without code</p>
            </div>
          </div>
        </motion.div>

        {/* Authority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-gradient-to-br from-[#281C46]/10 to-white rounded-xl p-6 border-2 border-[#281C46]/30 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#281C46] to-[#5A3BFE] rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#281C46]">Authority</h3>
              <span className="text-base text-[#281C46]/80 font-medium">Autonomy</span>
            </div>
          </div>
          
          <p className="text-base text-[#281C46]/80 mb-5 flex-1">
            Nexus operates with an understanding of high-level business goals. It doesn't just suggest—it executes.
          </p>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border border-[#281C46]/20">
              <div className="text-sm font-semibold text-[#281C46] mb-1">Goal Understanding</div>
              <p className="text-xs text-[#281C46]/70">Comprehends strategic business objectives</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#281C46]/20">
              <div className="text-sm font-semibold text-[#281C46] mb-1">Autonomous Execution</div>
              <p className="text-xs text-[#281C46]/70">Executes solutions, not just suggestions</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#281C46]/20">
              <div className="text-sm font-semibold text-[#281C46] mb-1">Human-in-the-Loop</div>
              <p className="text-xs text-[#281C46]/70">Strategic approval when needed</p>
            </div>
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
        <p className="text-base text-[#281C46]/60">
          Nexus is not a passive "Copilot"—it's a <span className="font-bold text-[#5A3BFE]">first-class citizen</span> of your technical stack
        </p>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 4: Multi-Agent System
const MultiAgentSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={Network} 
        title="Lifecycle Architecture: The Multi-Agent System" 
        subtitle="From Discovery to Continuous Self-Healing"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-5 gap-4">
        {/* The Strategist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-b from-[#5A3BFE] to-[#5A3BFE]/90 rounded-xl p-5 text-white flex flex-col"
        >
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-base font-bold mb-1">The Strategist</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Discovery</span>
          <div className="flex-1">
            <p className="text-sm text-white/80 mb-3">Constructs a "World Model" of your business</p>
            <div className="space-y-2">
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Automation Heatmaps</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">"Quick Wins" identification</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Eliminate "Blank Slate"</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/20">
            <span className="text-xs text-[#F8D57E]">Instant ROI identification</span>
          </div>
        </motion.div>

        {/* The Architect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-gradient-to-b from-[#0668E1] to-[#0668E1]/90 rounded-xl p-5 text-white flex flex-col"
        >
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-base font-bold mb-1">The Architect</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Build</span>
          <div className="flex-1">
            <p className="text-sm text-white/80 mb-3">Natural Language First construction</p>
            <div className="space-y-2">
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Text-to-Flow orchestration</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Auto variable & branch mapping</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Generative UI (GenUI)</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/20">
            <span className="text-xs text-[#F8D57E]">Seat maps, forms on-the-fly</span>
          </div>
        </motion.div>

        {/* The QA Engineer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-b from-amber-500 to-amber-500/90 rounded-xl p-5 text-white flex flex-col"
        >
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <FlaskConical className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-base font-bold mb-1">The QA Engineer</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Testing</span>
          <div className="flex-1">
            <p className="text-sm text-white/80 mb-3">Simulation and Red Teaming</p>
            <div className="space-y-2">
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">1000s of "Virtual Users"</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">"Adversary Personas"</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Prompt injection testing</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/20">
            <span className="text-xs text-white/90">Safety & brand compliance</span>
          </div>
        </motion.div>

        {/* The Mechanic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-gradient-to-b from-emerald-600 to-emerald-600/90 rounded-xl p-5 text-white flex flex-col"
        >
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-base font-bold mb-1">The Mechanic</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Maintenance</span>
          <div className="flex-1">
            <p className="text-sm text-white/80 mb-3">Self-Healing Logic</p>
            <div className="space-y-2">
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Automated RCA</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Fix broken nodes</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Expired API token handling</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/20">
            <span className="text-xs text-emerald-200">Autonomous repairs</span>
          </div>
        </motion.div>

        {/* The Coach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-gradient-to-b from-[#281C46] to-[#281C46]/90 rounded-xl p-5 text-white flex flex-col"
        >
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
            <HeartPulse className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-base font-bold mb-1">The Coach</h3>
          <span className="text-xs text-white/70 uppercase tracking-wide mb-3">Empathy</span>
          <div className="flex-1">
            <p className="text-sm text-white/80 mb-3">Real-time Sentiment Coaching</p>
            <div className="space-y-2">
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Live agent assistance</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">"Magic Rewrites"</span>
              </div>
              <div className="bg-white/15 rounded px-3 py-2">
                <span className="text-xs">Empathy improvement</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/20">
            <span className="text-xs text-[#F8D57E]">Human agent uplift</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom flow indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="mt-4 flex items-center justify-center gap-3"
      >
        <span className="text-sm text-[#281C46]/60">Discovery</span>
        <ArrowRight className="w-5 h-5 text-[#5A3BFE]" />
        <span className="text-sm text-[#281C46]/60">Build</span>
        <ArrowRight className="w-5 h-5 text-[#5A3BFE]" />
        <span className="text-sm text-[#281C46]/60">Test</span>
        <ArrowRight className="w-5 h-5 text-[#5A3BFE]" />
        <span className="text-sm text-[#281C46]/60">Maintain</span>
        <ArrowRight className="w-5 h-5 text-[#5A3BFE]" />
        <span className="text-sm text-[#281C46]/60">Coach</span>
        <span className="mx-2 text-[#5A3BFE]">→</span>
        <span className="text-sm font-bold text-[#5A3BFE]">Continuous Loop</span>
      </motion.div>
    </div>
  </SlideWrapper>
)

// Slide 5: Capabilities Matrix
const CapabilitiesSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-6">
      <SectionHeader 
        icon={Puzzle} 
        title="The Capabilities Matrix" 
        subtitle="Seven Layers of Enterprise Command"
        color="bg-[#0668E1]"
      />

      <div className="flex-1 grid grid-cols-2 gap-5">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: Bot,
              layer: "Studio",
              subtitle: "Builder",
              capabilities: ["Text-to-Bot", "Persona Tuning", "KB Indexing"],
              impact: "Reduces build time from months to minutes",
              color: "from-[#5A3BFE]",
            },
            {
              icon: MessageSquare,
              layer: "Support",
              subtitle: "Inbox",
              capabilities: ["Smart Prioritization", "Sentiment Scanning"],
              impact: "Focuses agents on critical 'Angry' customers",
              color: "from-[#0668E1]",
            },
            {
              icon: Database,
              layer: "Memory",
              subtitle: "Database",
              capabilities: ["Natural Language Query", "Instant Table Creation"],
              impact: "Removes technical barriers to data manipulation",
              color: "from-emerald-600",
            },
            {
              icon: BarChart3,
              layer: "Brain",
              subtitle: "Analytics",
              capabilities: ["Health Monitoring", "ROI Modeling", "CSAT Tracking"],
              impact: "Provides real-time executive visibility",
              color: "from-amber-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              className={`bg-gradient-to-r ${item.color} to-transparent rounded-xl p-4 flex items-center gap-4`}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-[#281C46]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-white text-base">{item.layer}</span>
                  <span className="text-xs text-white/70">({item.subtitle})</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {item.capabilities.map((cap, j) => (
                    <span key={j} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right flex-shrink-0 max-w-[160px]">
                <span className="text-xs text-white/90 leading-tight">{item.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: Microscope,
              layer: "X-Ray",
              subtitle: "Forensics",
              capabilities: ["AI Reasoning Trace", "Topic Clustering"],
              impact: "Uncovers the 'why' behind every decision",
              color: "from-purple-600",
            },
            {
              icon: HelpCircle,
              layer: "Query Engine",
              subtitle: "Optimization",
              capabilities: ["Channel Economics", "Voice Latency Debugging"],
              impact: "Optimizes spend across WhatsApp and Voice",
              color: "from-pink-600",
            },
            {
              icon: Settings,
              layer: "Admin",
              subtitle: "Provisioning",
              capabilities: ["Zero-Touch Project Setup"],
              impact: "Enables instant deployment of new bot identities",
              color: "from-[#281C46]",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              className={`bg-gradient-to-r ${item.color} to-transparent rounded-xl p-4 flex items-center gap-4`}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-[#281C46]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-white text-base">{item.layer}</span>
                  <span className="text-xs text-white/70">({item.subtitle})</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {item.capabilities.map((cap, j) => (
                    <span key={j} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right flex-shrink-0 max-w-[160px]">
                <span className="text-xs text-white/90 leading-tight">{item.impact}</span>
              </div>
            </motion.div>
          ))}

          {/* Key Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-gradient-to-br from-[#F8D57E]/20 to-white rounded-xl p-5 border border-[#F8D57E]/40 flex-1"
          >
            <h4 className="text-sm font-bold text-[#281C46] mb-4 uppercase tracking-wide">Unified Control Plane Benefits</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Clock, label: "Build in Minutes", value: "Not Months" },
                { icon: Target, label: "20+ Dashboards", value: "Real-time" },
                { icon: Lock, label: "<1% Hallucination", value: "Safe AI" },
                { icon: Globe, label: "150+ Integrations", value: "Plug & Play" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100">
                  <item.icon className="w-5 h-5 text-[#5A3BFE]" />
                  <div>
                    <div className="text-sm font-semibold text-[#281C46]">{item.label}</div>
                    <div className="text-xs text-[#5A3BFE]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 6: Hero Scenarios
const HeroScenariosSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-7">
      <SectionHeader 
        icon={Play} 
        title="Hero Scenarios: Nexus in Action" 
        subtitle="Real-World Use Cases"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-3 gap-6">
        {/* Scenario 1: Instant Analyst */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-xl border-2 border-[#5A3BFE]/20 overflow-hidden flex flex-col"
        >
          <div className="bg-gradient-to-r from-[#5A3BFE] to-[#0668E1] p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white">The "Instant Analyst"</h3>
            </div>
            <span className="text-xs text-white/70 uppercase tracking-wide">CX Manager Scenario</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="text-xs font-semibold text-[#281C46]/60 mb-1">SITUATION</div>
              <p className="text-sm text-[#281C46]/80">CX Manager notices a drop in resolution rates</p>
            </div>
            <div className="bg-[#5A3BFE]/5 rounded-lg p-4 mb-4 border border-[#5A3BFE]/20">
              <div className="text-xs font-semibold text-[#5A3BFE] mb-1">ASK NEXUS</div>
              <p className="text-sm text-[#281C46] italic">"Summarize what went wrong in unresolved chats today"</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 flex-1 border border-emerald-200">
              <div className="text-xs font-semibold text-emerald-600 mb-1">NEXUS RESPONSE</div>
              <p className="text-sm text-[#281C46]/80">"Users are asking for 'partial refunds,' which the current agent doesn't understand."</p>
            </div>
          </div>
        </motion.div>

        {/* Scenario 2: Zero-to-One Architect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-xl border-2 border-[#0668E1]/20 overflow-hidden flex flex-col"
        >
          <div className="bg-gradient-to-r from-[#0668E1] to-[#5A3BFE] p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white">The "Zero-to-One" Architect</h3>
            </div>
            <span className="text-xs text-white/70 uppercase tracking-wide">Innovation Lead Scenario</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="text-xs font-semibold text-[#281C46]/60 mb-1">GOAL</div>
              <p className="text-sm text-[#281C46]/80">Build a luxury hotel concierge bot</p>
            </div>
            <div className="bg-[#0668E1]/5 rounded-lg p-4 mb-4 border border-[#0668E1]/20 flex-1">
              <div className="text-xs font-semibold text-[#0668E1] mb-3">NEXUS ACTIONS</div>
              <div className="space-y-2">
                {[
                  "Brainstorms the persona",
                  "Plans 'Super Agent' structure",
                  "Scrapes hotel website for FAQs",
                  "Delivers testable MVP",
                ].map((action, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0668E1]" />
                    <span className="text-sm text-[#281C46]/80">{action}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F8D57E]/20 rounded-lg p-3 text-center">
              <span className="text-sm font-bold text-[#281C46]">Result: MVP in Minutes</span>
            </div>
          </div>
        </motion.div>

        {/* Scenario 3: Consumer Intel Engine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-xl border-2 border-[#281C46]/20 overflow-hidden flex flex-col"
        >
          <div className="bg-gradient-to-r from-[#281C46] to-[#5A3BFE] p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white">The "Consumer Intel" Engine</h3>
            </div>
            <span className="text-xs text-white/70 uppercase tracking-wide">Product Manager Scenario</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="bg-[#281C46]/5 rounded-lg p-4 mb-4 border border-[#281C46]/20">
              <div className="text-xs font-semibold text-[#281C46] mb-1">QUERY</div>
              <p className="text-sm text-[#281C46] italic">"Analyze sentiment of iPhone users asking about refunds vs Android users"</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4 flex-1">
              <div className="text-xs font-semibold text-[#281C46]/60 mb-3">NEXUS DISCOVERS</div>
              <div className="space-y-2">
                {[
                  "Segments data by platform",
                  "Identifies UI glitch on iOS",
                  "Creates DB table of affected users",
                ].map((action, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-[#281C46]/80">{action}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 text-center border border-emerald-200">
              <span className="text-sm font-bold text-emerald-700">Targeted engagement ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 7: Competitive Differentiation
const CompetitiveSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col p-7">
      <SectionHeader 
        icon={Target} 
        title="Competitive Differentiation" 
        subtitle="Why Nexus Leads the Agentic Enterprise"
        color="bg-[#281C46]"
      />

      <div className="flex-1 flex flex-col gap-5">
        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden flex-1"
        >
          <div className="grid grid-cols-4 divide-x divide-gray-200">
            {/* Header Row */}
            <div className="p-5 bg-gray-50">
              <span className="text-sm font-bold text-[#281C46]/60 uppercase">Feature</span>
            </div>
            <div className="p-5 bg-gradient-to-r from-[#5A3BFE] to-[#5A3BFE]/90">
              <div className="flex items-center gap-2">
                <img src="/yellow%20logo.png" alt="Yellow.ai" className="h-6 w-auto brightness-0 invert" />
                <span className="text-base font-bold text-white">Nexus</span>
              </div>
            </div>
            <div className="p-5 bg-gray-100">
              <span className="text-base font-bold text-[#281C46]">Salesforce Agentforce</span>
            </div>
            <div className="p-5 bg-gray-100">
              <span className="text-base font-bold text-[#281C46]">Microsoft Copilot Studio</span>
            </div>
          </div>

          {/* Data Rows */}
          {[
            {
              feature: "Scope",
              nexus: "Universal (Agnostic)",
              salesforce: "CRM-centric",
              microsoft: "M365 Productivity",
              nexusHighlight: true,
            },
            {
              feature: "Autonomy",
              nexus: "Full (Commander)",
              salesforce: "High (Atlas Reasoning)",
              microsoft: "Assistive (Copilot)",
              nexusHighlight: true,
            },
            {
              feature: "Integration",
              nexus: "150+ Plug-and-Play",
              salesforce: "Locked to Salesforce",
              microsoft: "Locked to Microsoft",
              nexusHighlight: true,
            },
            {
              feature: "LLM Flexibility",
              nexus: "Multi-LLM (15+ Models)",
              salesforce: "Einstein / Proprietary",
              microsoft: "Azure / OpenAI",
              nexusHighlight: true,
            },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-4 divide-x divide-gray-200 border-t border-gray-200">
              <div className="p-4 bg-gray-50">
                <span className="text-sm font-semibold text-[#281C46]">{row.feature}</span>
              </div>
              <div className={`p-4 ${row.nexusHighlight ? 'bg-[#5A3BFE]/5' : ''}`}>
                <span className="text-sm font-semibold text-[#5A3BFE]">{row.nexus}</span>
              </div>
              <div className="p-4">
                <span className="text-sm text-[#281C46]/70">{row.salesforce}</span>
              </div>
              <div className="p-4">
                <span className="text-sm text-[#281C46]/70">{row.microsoft}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-4 gap-5"
        >
          {[
            { icon: Globe, label: "Universal", desc: "Not locked to any ecosystem" },
            { icon: Shield, label: "Full Autonomy", desc: "Commander, not just Copilot" },
            { icon: Puzzle, label: "150+ Integrations", desc: "Plug-and-play with any stack" },
            { icon: Layers, label: "Multi-LLM", desc: "15+ models, no vendor lock-in" },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-[#5A3BFE]/10 to-white rounded-xl p-5 border border-[#5A3BFE]/20 text-center">
              <div className="w-12 h-12 bg-[#5A3BFE] rounded-lg flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-base font-bold text-[#281C46]">{item.label}</div>
              <div className="text-sm text-[#281C46]/60">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 8: Conclusion / CTA
const ConclusionSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5A3BFE] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F8D57E] rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#0668E1] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img src="/yellow%20logo.png" alt="Yellow.ai" className="h-12 w-auto object-contain" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl font-bold text-[#281C46] mb-6"
        >
          The Era of <span className="text-[#5A3BFE]">Autonomy</span>
        </motion.h1>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-[#5A3BFE]/5 to-[#0668E1]/5 border border-[#5A3BFE]/20 rounded-2xl p-8 mb-10 max-w-3xl"
        >
          <Quote className="w-10 h-10 text-[#5A3BFE]/30 mb-4" />
          <p className="text-xl text-[#281C46]/80 italic mb-4">
            "Nexus represents the end of software as a mere facilitator and the birth of 'Service as a Software.' The interface doesn't just talk about the work—it does the work for you."
          </p>
          <div className="flex items-center justify-center gap-5">
            <span className="text-base text-[#281C46]/60">The "Copilot" era was about assistance.</span>
            <ArrowRight className="w-5 h-5 text-[#5A3BFE]" />
            <span className="text-base font-bold text-[#5A3BFE]">The "Nexus" era is about autonomy.</span>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-10 mb-10"
        >
          {[
            { icon: Eye, label: "Eyes" },
            { icon: Hand, label: "Hands" },
            { icon: Shield, label: "Authority" },
          ].map((pillar, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#5A3BFE] to-[#281C46] rounded-xl flex items-center justify-center mb-3">
                <pillar.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-bold text-[#281C46]">{pillar.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <button className="bg-gradient-to-r from-[#5A3BFE] to-[#0668E1] text-white px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mb-5">
            <Sparkles className="w-6 h-6" />
            Experience Autonomy
            <ArrowRight className="w-6 h-6" />
          </button>
          <p className="text-base text-[#281C46]/60">www.yellow.ai/nexus</p>
        </motion.div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <p className="text-2xl font-bold text-[#281C46]">Thank You</p>
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// All slides
const slides = [
  TitleSlide,
  ParadigmShiftSlide,
  ArchitectureSlide,
  MultiAgentSlide,
  CapabilitiesSlide,
  HeroScenariosSlide,
  CompetitiveSlide,
  ConclusionSlide,
]

const slideNames = [
  "Introduction",
  "Paradigm Shift",
  "Architecture",
  "Multi-Agent System",
  "Capabilities",
  "Hero Scenarios",
  "Competitive",
  "Conclusion",
]

export default function NexusPresentationPage() {
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
                className={`px-2.5 py-1.5 rounded-full text-[10px] font-medium transition-all duration-300 whitespace-nowrap ${
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
