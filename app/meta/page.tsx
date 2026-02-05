"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Globe,
  Users,
  Building2,
  Handshake,
  Brain,
  ShoppingCart,
  TrendingUp,
  Shield,
  Zap,
  MessageCircle,
  Mic,
  Layers,
  Rocket,
  Server,
  Target,
  Store,
  Banknote,
  Factory,
  DollarSign,
  PieChart,
  CheckCircle2,
  MapPin,
  Languages,
  Smartphone,
  CreditCard,
  BadgeCheck,
  Network,
  BarChart3,
  Cpu,
  Bot,
  AudioLines,
  Sparkles,
  Share2,
} from "lucide-react"

// Slide wrapper for consistent 16:9 dimensions
const SlideWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full flex items-center justify-center p-2">
    <div className="w-full max-w-[1400px] aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden relative">
      {children}
    </div>
  </div>
)

// Section header component
const SectionHeader = ({ icon: Icon, title, subtitle, color = "bg-[#0668E1]" }: { 
  icon: React.ElementType, 
  title: string, 
  subtitle?: string,
  color?: string 
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className="flex items-center gap-3"
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

// Slide 1: Partnership Context & Business Overview
const PartnershipContextSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6 flex flex-col">
      <SectionHeader 
        icon={Building2} 
        title="Partnership Context & Business Overview" 
        subtitle="Yellow.ai — Agentic AI Platform for Service Automation"
      />

      <div className="flex-1 grid grid-cols-3 gap-5 mt-4">
        {/* Column 1 - Product & WhatsApp */}
        <div className="flex flex-col gap-4">
          {/* Product Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-[#5A3BFE]/10 to-white rounded-xl p-5 border border-[#5A3BFE]/20"
          >
            <h3 className="text-xs font-bold text-[#5A3BFE] mb-2 uppercase tracking-wide flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Product Description
            </h3>
            <p className="text-sm text-[#281C46]/80 leading-relaxed mb-3">
              Yellow.ai is a leading <span className="font-semibold text-[#5A3BFE]">Agentic AI platform</span> for service automation, enabling enterprises to deploy autonomous agents that <span className="font-semibold">"Think, Act, and Resolve"</span>. Formerly known as Yellow Messenger.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#5A3BFE]/10 rounded-lg p-3 text-center">
                <Languages className="w-5 h-5 text-[#5A3BFE] mx-auto mb-1" />
                <div className="text-2xl font-bold text-[#5A3BFE]">135+</div>
                <div className="text-[11px] text-[#281C46]/60">Languages Supported</div>
              </div>
              <div className="bg-[#5A3BFE]/10 rounded-lg p-3 text-center">
                <Smartphone className="w-5 h-5 text-[#5A3BFE] mx-auto mb-1" />
                <div className="text-2xl font-bold text-[#5A3BFE]">35+</div>
                <div className="text-[11px] text-[#281C46]/60">Channels (Web, App, IVR)</div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Automation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-[#25D366] rounded-xl p-5 text-white flex-1"
          >
            <h3 className="text-xs font-bold text-white/90 mb-3 uppercase tracking-wide flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Automation
            </h3>
            <div className="space-y-3">
              <div className="bg-white/15 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-white flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-sm">Official WhatsApp Business Partner</span>
                    <p className="text-xs text-white/80">Expedited verification for WhatsApp Business API</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/15 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-white flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-sm">Full-Funnel Commerce</span>
                    <p className="text-xs text-white/80">Browse catalogs, coordinate suppliers, one-click payments</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <div className="bg-white/20 rounded-lg px-4 py-2 flex items-center gap-2 flex-1 justify-center">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm font-medium">Razorpay</span>
                </div>
                <div className="bg-white/20 rounded-lg px-4 py-2 flex items-center gap-2 flex-1 justify-center">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm font-medium">PayU</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column 2 - Customer GTM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
        >
          <h3 className="text-xs font-bold text-[#281C46] mb-4 uppercase tracking-wide flex items-center gap-2">
            <Target className="w-4 h-4 text-[#0668E1]" />
            Customer GTM (Go-to-Market)
          </h3>
          <div className="space-y-4">
            {/* GSIs */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm font-bold text-[#281C46] mb-2">GSI Partnerships</div>
              <p className="text-xs text-[#281C46]/70 mb-3">Strong independent GTM via executive-level partnerships with Global System Integrators:</p>
              <div className="grid grid-cols-2 gap-2">
                {["Accenture", "TCS", "Infosys", "Tech Mahindra"].map((gsi, i) => (
                  <span key={i} className="px-3 py-2 bg-[#5A3BFE]/10 text-[#5A3BFE] rounded text-xs font-medium text-center">
                    {gsi}
                  </span>
                ))}
              </div>
            </div>
            {/* Strategic PE */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm font-bold text-[#281C46] mb-2">Strategic PE Partnerships</div>
              <p className="text-xs text-[#281C46]/70 mb-3">Preferred automation partner for portfolio companies:</p>
              <div className="flex gap-2">
                <span className="px-4 py-2 bg-[#281C46] text-white rounded text-xs font-medium flex-1 text-center">Blackstone</span>
                <span className="px-4 py-2 bg-[#281C46] text-white rounded text-xs font-medium flex-1 text-center">KKR</span>
              </div>
            </div>
            {/* ABM Focus */}
            <div className="bg-gradient-to-r from-[#0668E1]/10 to-transparent rounded-lg p-4 border-l-3 border-[#0668E1]">
              <div className="text-sm font-bold text-[#281C46] mb-1">ABM Focus</div>
              <p className="text-xs text-[#281C46]/70 leading-relaxed">
                Shift toward <span className="font-semibold">"precision-led ABM"</span> model that captures buyer intent signals for personalized outreach to specific enterprise buying groups.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Column 3 - Geo Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="bg-[#281C46] rounded-xl p-5 text-white"
        >
          <h3 className="text-xs font-bold text-[#F8D57E] mb-4 uppercase tracking-wide flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Geo Coverage
          </h3>
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xs text-white/60 mb-1">Primary Hub</div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">Asia-Pacific</span>
                <span className="text-[#F8D57E] font-bold text-3xl">84%</span>
              </div>
              <div className="text-xs text-white/50">of revenue and volume</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xs text-white/60 mb-2">Secondary Markets</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/90">North America</span>
                  <span className="text-[#F8D57E] font-bold text-xl">26%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/90">Middle East/Africa</span>
                  <span className="text-[#F8D57E] font-bold text-xl">12%</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xs text-white/60 mb-2">Headquarters</div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#F8D57E]" />
                <span className="text-base font-semibold">San Mateo, CA</span>
              </div>
              <div className="text-xs text-white/60 mb-1">Global Presence</div>
              <div className="flex flex-wrap gap-1.5">
                {["India", "Indonesia", "UAE", "Malaysia"].map((loc, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/10 rounded text-xs">{loc}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 2: Commercial & Performance Metrics
const CommercialMetricsSlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6 flex flex-col">
      <SectionHeader 
        icon={BarChart3} 
        title="Commercial & Performance Metrics" 
        subtitle="Revenue Streams & Meta Partnership Performance"
        color="bg-[#5A3BFE]"
      />

      <div className="flex-1 grid grid-cols-3 gap-5 mt-4">
        {/* Column 1 - Revenue Streams & Verticals */}
        <div className="flex flex-col gap-4">
          {/* Top Revenue Streams */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-gradient-to-br from-[#5A3BFE] to-[#5A3BFE]/90 rounded-xl p-5 text-white"
          >
            <h3 className="text-xs font-bold text-white/90 mb-4 uppercase tracking-wide flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Top Revenue Streams
            </h3>
            <div className="space-y-3">
              <div className="bg-white/15 rounded-lg p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-base">Licensing</span>
                  <span className="text-[#F8D57E] font-bold text-3xl">90%+</span>
                </div>
                <p className="text-xs text-white/70">Annual or monthly product licensing fees</p>
              </div>
              <div className="bg-white/15 rounded-lg p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-base">Usage-Based</span>
                  <span className="text-[#F8D57E] font-bold text-3xl">95%</span>
                </div>
                <p className="text-xs text-white/70">Outcome-driven: sessions (chat) + minutes (voice)</p>
              </div>
            </div>
          </motion.div>

          {/* Key Verticals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex-1"
          >
            <h3 className="text-xs font-bold text-[#281C46] mb-4 uppercase tracking-wide flex items-center gap-2">
              <PieChart className="w-4 h-4 text-[#5A3BFE]" />
              Key Verticals
            </h3>
            <div className="space-y-4">
              {[
                { icon: Store, name: "Retail & CPG", pct: "20%", color: "bg-[#5A3BFE]" },
                { icon: Banknote, name: "Banking", pct: "13%", color: "bg-[#0668E1]" },
                { icon: Factory, name: "Manufacturing", pct: "11%", color: "bg-[#281C46]" },
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${v.color} rounded-lg flex items-center justify-center`}>
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[#281C46]">{v.name}</span>
                      <span className="text-lg font-bold text-[#5A3BFE]">{v.pct}</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full mt-1">
                      <div className={`h-full ${v.color} rounded-full`} style={{ width: v.pct }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Column 2 - Top Line & Active Accounts */}
        <div className="flex flex-col gap-4">
          {/* Top-Line Revenue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#281C46] rounded-xl p-5 text-white"
          >
            <h3 className="text-xs font-bold text-[#F8D57E] mb-4 uppercase tracking-wide">Top-Line Revenue</h3>
            <div className="text-center py-3">
              <div className="text-6xl font-bold text-[#F8D57E] mb-2">$37.16M</div>
              <p className="text-sm text-white/70 mb-4">Conversational AI Revenue (2024)</p>
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-5 py-2.5 rounded-full">
                <TrendingUp className="w-6 h-6 mr-2" />
                <span className="text-xl font-bold">22% YoY</span>
              </div>
            </div>
          </motion.div>

          {/* Active WA Accounts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="bg-gradient-to-br from-[#25D366]/10 to-white rounded-xl p-5 border border-[#25D366]/30 flex-1"
          >
            <h3 className="text-xs font-bold text-[#25D366] mb-4 uppercase tracking-wide flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Active WA Deployments
            </h3>
            <div className="text-center py-3">
              <div className="text-6xl font-bold text-[#25D366] mb-2">1,000+</div>
              <p className="text-sm text-[#281C46]/70 mb-4">Global Enterprises</p>
              <div className="inline-flex items-center bg-[#25D366]/10 px-5 py-2.5 rounded-full">
                <Globe className="w-6 h-6 text-[#25D366] mr-2" />
                <span className="text-xl font-bold text-[#25D366]">85 Countries</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column 3 - Meta Revenue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-gradient-to-br from-[#0668E1] to-[#0668E1]/90 rounded-xl p-6 text-white flex flex-col"
        >
          <h3 className="text-sm font-bold text-white/80 mb-4 uppercase tracking-wide flex items-center gap-2">
            <span className="text-xl font-bold">Meta</span>
            <span>Revenue (2025)</span>
          </h3>
          
          <div className="flex-1 flex flex-col justify-center text-center">
            <div className="text-7xl font-bold text-[#F8D57E] mb-3">$10.47M</div>
            <p className="text-2xl text-white/90 font-medium mb-2">Meta Revenue 2025</p>
            <p className="text-base text-white/60">Total recognized revenue from Meta partnership</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="bg-white/15 rounded-lg p-4 text-center">
              <div className="text-xs text-white/60 mb-1">Platform</div>
              <div className="font-semibold text-base">WhatsApp Business</div>
            </div>
            <div className="bg-white/15 rounded-lg p-4 text-center">
              <div className="text-xs text-white/60 mb-1">Partnership Status</div>
              <div className="font-semibold text-base">Official Partner</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </SlideWrapper>
)

// Slide 3: AI Strategy & Strategic Distribution
const AIStrategySlide = () => (
  <SlideWrapper>
    <div className="absolute inset-0 p-6 flex flex-col">
      <SectionHeader 
        icon={Brain} 
        title="AI Strategy & Strategic Distribution" 
        subtitle="Universal Agentic Interface, Nexus Platform & Meta Alignment"
        color="bg-[#281C46]"
      />

      <div className="flex-1 grid grid-cols-2 gap-5 mt-4">
        {/* Left Column - AI Stack & Scores */}
        <div className="flex flex-col gap-4">
          {/* Current AI Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#281C46] rounded-xl p-5 text-white"
          >
            <h3 className="text-xs font-bold text-[#F8D57E] mb-4 uppercase tracking-wide flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Current AI Stack: Universal Agentic Interface
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {/* Multi-LLM Architecture */}
              <div className="bg-white/10 rounded-lg p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5A3BFE] to-[#0668E1] flex items-center justify-center mb-2">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-sm text-white mb-1">Multi-LLM</h4>
                <p className="text-xs text-white/70 mb-2">15+ models, no vendor lock-in</p>
                <div className="flex flex-wrap gap-1">
                  {["YellowG", "GPT-4o", "Claude"].map((model, i) => (
                    <span key={i} className="px-2 py-1 bg-white/20 rounded text-[10px]">{model}</span>
                  ))}
                </div>
              </div>

              {/* Agentic RAG */}
              <div className="bg-white/10 rounded-lg p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F8D57E] to-[#F8D57E]/70 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5 text-[#281C46]" />
                </div>
                <h4 className="font-semibold text-sm text-white mb-1">Agentic RAG</h4>
                <p className="text-xs text-white/70 mb-2">Reasoning-first retrieval</p>
                <div className="bg-green-500/20 rounded px-2 py-1 inline-flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mr-1" />
                  <span className="text-[10px] text-green-400 font-semibold">&lt;1% Hallucinations</span>
                </div>
              </div>

              {/* VoiceX */}
              <div className="bg-white/10 rounded-lg p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0668E1] to-[#5A3BFE] flex items-center justify-center mb-2">
                  <AudioLines className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-sm text-white mb-1">VoiceX</h4>
                <p className="text-xs text-white/70 mb-2">LLM-native voice stack</p>
                <div className="bg-[#5A3BFE]/30 rounded px-2 py-1 inline-flex items-center">
                  <Zap className="w-3.5 h-3.5 text-[#F8D57E] mr-1" />
                  <span className="text-[10px] text-[#F8D57E] font-semibold">60% Cost Cut</span>
                </div>
              </div>
            </div>

            {/* 7-Stage Agentic Lifecycle */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="text-xs text-white/60 mb-2">7-Stage Agentic Lifecycle</div>
              <div className="flex items-center gap-1.5">
                {["Discover", "Build", "Deploy", "Respond", "Debug", "Track", "Analyze"].map((stage, i) => (
                  <div key={i} className="flex-1 text-center">
                    <div className="bg-gradient-to-b from-[#5A3BFE] to-[#0668E1] rounded py-2 px-1 text-[10px] font-semibold">
                      {stage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Execution & Distribution Scores */}
          <div className="grid grid-cols-2 gap-4">
            {/* Execution Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-xl p-5 border border-green-200"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-green-700 uppercase tracking-wide flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Execution Score
                </h3>
                <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold">HIGH</span>
              </div>
              <p className="text-sm text-[#281C46]/70 leading-relaxed">
                7-stage agentic lifecycle translates high-level strategy into coordinated action, measured by ability to autonomously execute end-to-end workflows across silos.
              </p>
            </motion.div>

            {/* Willingness to Distribute */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-gradient-to-br from-[#0668E1]/10 to-white rounded-xl p-5 border border-[#0668E1]/20"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-[#0668E1] uppercase tracking-wide flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Distribution
                </h3>
                <span className="bg-[#0668E1] text-white px-3 py-1.5 rounded-full text-xs font-bold">HIGH</span>
              </div>
              <p className="text-sm text-[#281C46]/70 leading-relaxed">
                Yellow.ai is a "GenAI-first" partner committed to scaling Meta's Business AI objectives with Lattice and GEM ranking models.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Nexus & Meta Alignment */}
        <div className="flex flex-col gap-4">
          {/* Nexus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-gradient-to-br from-[#5A3BFE]/5 to-white rounded-xl p-5 border border-[#5A3BFE]/20 flex-1"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-[#5A3BFE] uppercase tracking-wide flex items-center gap-2">
                <Network className="w-5 h-5" />
                Nexus: Agentic AI Orchestration Platform
              </h3>
              <span className="bg-[#5A3BFE] text-white px-3 py-1.5 rounded-full text-xs font-bold">NEW</span>
            </div>
            
            {/* Nexus Image */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <img 
                src="/nexus" 
                alt="Nexus Platform Architecture" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Meta Alignment Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-[#281C46] rounded-xl p-5 text-white"
          >
            <h3 className="text-xs font-bold text-[#F8D57E] mb-4 uppercase tracking-wide">Meta Strategic Alignment</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
                  <span className="font-semibold text-sm">Lattice & GEM</span>
                </div>
                <p className="text-xs text-white/70">Adopting Meta's ranking models for enhanced ad quality & relevance</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
                  <span className="font-semibold text-sm">Agentic Shopping</span>
                </div>
                <p className="text-xs text-white/70">Driving social commerce via autonomous product discovery</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#F8D57E] flex-shrink-0" />
                  <span className="font-semibold text-sm">Social Commerce</span>
                </div>
                <p className="text-xs text-white/70">Full-funnel WhatsApp commerce aligned with Meta ecosystem</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </SlideWrapper>
)

// All slides
const slides = [PartnershipContextSlide, CommercialMetricsSlide, AIStrategySlide]

export default function MetaPresentationPage() {
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

  const slideNames = ["Partnership Context", "Commercial Metrics", "AI Strategy"]

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
          <div className="flex items-center gap-1">
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

          {/* Slide counter */}
          <div className="text-sm text-slate-500 font-medium">
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
