"use client"

import { useState, useEffect } from "react"
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
  Mail,
  Phone,
  MessageCircle,
  RefreshCw,
  PieChart,
  Activity,
  ShoppingBag,
  Briefcase,
  HeartPulse,
  Building,
  Landmark,
  Headphones,
  Layers,
  Cpu,
  Gauge,
  Rocket,
  HelpCircle,
  Instagram,
  Twitter,
  Youtube,
  Smartphone,
  Tv,
} from "lucide-react"

export default function AnimatedArchitecture() {
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    // Sequence the animations
    const timer1 = setTimeout(() => setAnimationStage(1), 500) // Header
    const timer2 = setTimeout(() => setAnimationStage(2), 1200) // Specialized AI Agents
    const timer3 = setTimeout(() => setAnimationStage(3), 1800) // Core Capabilities
    const timer4 = setTimeout(() => setAnimationStage(4), 2400) // Automate & Analyse
    const timer5 = setTimeout(() => setAnimationStage(5), 3600) // Channels & Integrations
    const timer6 = setTimeout(() => setAnimationStage(6), 4200) // Additional Features
    const timer7 = setTimeout(() => setAnimationStage(7), 4800) // Voice AI Features
    const timer8 = setTimeout(() => setAnimationStage(8), 5400) // Foundation

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timer6)
      clearTimeout(timer7)
      clearTimeout(timer8)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with Logo */}
        <div
          className={`flex justify-center items-center mb-2 transition-all duration-700 ${animationStage >= 1 ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"}`}
        >
          <div className="bg-yellow-400 w-8 h-8 rounded-md flex items-center justify-center mr-2">
            <Bot className="w-5 h-5 text-purple-950" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 text-transparent bg-clip-text">
            Yellow.AI
          </h1>
        </div>

        <div
          className={`text-center mb-3 transition-all duration-700 delay-300 ${animationStage >= 1 ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"}`}
        >
          <h2 className="text-2xl font-bold">Agentic Customer Service Suite</h2>
          <p className="text-sm text-yellow-200/90">
            AI Agents to create the zero touch support and service experience
          </p>
        </div>

        {/* Specialized AI Agents */}
        <div
          className={`bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-lg p-2 mb-3 transition-all duration-700 ${animationStage >= 2 ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"}`}
        >
          <h3 className="text-sm font-bold text-center mb-2 text-blue-300">Specialized AI Agents</h3>
          <div className="grid grid-cols-6 gap-2">
            {[
              { icon: HeartPulse, title: "Healthcare" },
              { icon: ShoppingBag, title: "Retail" },
              { icon: Briefcase, title: "Enterprise" },
              { icon: Building, title: "Real Estate" },
              { icon: Landmark, title: "Banking" },
              { icon: HelpCircle, title: "Support" },
            ].map((agent, index) => (
              <div
                key={agent.title}
                className={`transition-all duration-500 delay-${100 * index}`}
                style={{
                  transitionDelay: `${100 * index}ms`,
                  opacity: animationStage >= 2 ? 1 : 0,
                  transform: animationStage >= 2 ? "translateY(0)" : "translateY(10px)",
                }}
              >
                <MiniAgentCard icon={agent.icon} title={agent.title} />
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities Banner */}
        <div
          className={`grid grid-cols-4 gap-2 mb-3 transition-all duration-700 ${animationStage >= 3 ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"}`}
        >
          {[
            { icon: Brain, title: "Context aware" },
            { icon: MessageSquare, title: "Human-like" },
            { icon: Mic, title: "Multimodal" },
            { icon: Users, title: "Multi-agent" },
          ].map((capability, index) => (
            <div
              key={capability.title}
              style={{
                transitionDelay: `${150 * index}ms`,
                opacity: animationStage >= 3 ? 1 : 0,
                transform: animationStage >= 3 ? "translateX(0)" : "translateX(-20px)",
              }}
              className="transition-all duration-500 bg-white/5 backdrop-blur-sm border border-purple-700/50 rounded-lg p-2 text-center"
            >
              <capability.icon className="w-4 h-4 mx-auto mb-1 text-yellow-300" />
              <h3 className="text-xs font-medium">{capability.title}</h3>
            </div>
          ))}
        </div>

        {/* Main Architecture - Animated Version */}
        <div className="grid grid-cols-12 gap-3 mb-3">
          {/* Left Column - Channels */}
          <div
            className={`col-span-2 transition-all duration-700 ${animationStage >= 5 ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-16"}`}
          >
            <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-700/50 rounded-lg p-2 h-full">
              <h3 className="text-xs font-bold text-center mb-2 text-purple-300">Channels</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: MessageSquare, title: "WhatsApp" },
                  { icon: Globe, title: "Facebook" },
                  { icon: Phone, title: "Voice" },
                  { icon: Mail, title: "Email" },
                  { icon: MessageCircle, title: "Web Chat" },
                  { icon: Headphones, title: "Teams" },
                  { icon: Instagram, title: "Instagram" },
                  { icon: Twitter, title: "Twitter" },
                  { icon: Youtube, title: "YouTube" },
                  { icon: Smartphone, title: "Mobile App" },
                  { icon: Tv, title: "Smart TV" },
                  { icon: MessageCircle, title: "SMS" },
                ].map((channel, index) => (
                  <div
                    key={channel.title}
                    style={{
                      transitionDelay: `${50 * index}ms`,
                      opacity: animationStage >= 5 ? 1 : 0,
                      transform: animationStage >= 5 ? "scale(1)" : "scale(0.8)",
                    }}
                    className="transition-all duration-300"
                  >
                    <MiniChannelCard icon={channel.icon} title={channel.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Core Platform */}
          <div className="col-span-8">
            {/* Automate & Analyse - ANIMATED FIRST */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              {/* Automate Section */}
              <div
                className={`bg-gradient-to-br from-amber-800/30 to-yellow-800/30 border border-amber-700/50 rounded-lg p-3 transition-all duration-700 ${animationStage >= 4 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
                style={{ transitionDelay: "0ms" }}
              >
                <div className="flex items-center justify-center mb-3">
                  <Rocket className="w-5 h-5 text-amber-400 mr-2" />
                  <h3 className="text-base font-bold text-amber-300">Automate</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Bot, title: "AI Copilot", description: "for debugging" },
                    { icon: Workflow, title: "AI Agent Builder", description: "dynamic conversations" },
                    { icon: Cpu, title: "Agentic Workflows", description: "API automations" },
                    { icon: Layers, title: "Agent Marketplace", description: "templates" },
                  ].map((feature, index) => (
                    <div
                      key={feature.title}
                      style={{
                        transitionDelay: `${200 + 150 * index}ms`,
                        opacity: animationStage >= 4 ? 1 : 0,
                        transform: animationStage >= 4 ? "translateY(0)" : "translateY(15px)",
                      }}
                      className="transition-all duration-500"
                    >
                      <LargerFeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Analyse Section */}
              <div
                className={`bg-gradient-to-br from-green-800/30 to-emerald-800/30 border border-green-700/50 rounded-lg p-3 transition-all duration-700 ${animationStage >= 4 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-center justify-center mb-3">
                  <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
                  <h3 className="text-base font-bold text-green-300">Analyse</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: PieChart, title: "Quantitative", description: "analytics" },
                    { icon: Activity, title: "Qualitative", description: "insights" },
                    { icon: RefreshCw, title: "Self Learning", description: "KB/Flow" },
                    { icon: Gauge, title: "Custom", description: "dashboards" },
                  ].map((feature, index) => (
                    <div
                      key={feature.title}
                      style={{
                        transitionDelay: `${500 + 150 * index}ms`,
                        opacity: animationStage >= 4 ? 1 : 0,
                        transform: animationStage >= 4 ? "translateY(0)" : "translateY(15px)",
                      }}
                      className="transition-all duration-500"
                    >
                      <LargerFeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div
              className={`grid grid-cols-3 gap-3 mb-3 transition-all duration-700 ${animationStage >= 6 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
            >
              {[
                { icon: Brain, title: "Agentic RAG", color: "bg-pink-900/30" },
                { icon: MessageCircle, title: "Agentic Campaigns", color: "bg-violet-900/30" },
                { icon: Headphones, title: "Human Helpdesk + Agent Assist", color: "bg-blue-900/30" },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  style={{
                    transitionDelay: `${100 * index}ms`,
                    opacity: animationStage >= 6 ? 1 : 0,
                    transform: animationStage >= 6 ? "translateY(0)" : "translateY(10px)",
                  }}
                  className="transition-all duration-500"
                >
                  <MiniAdditionalCard icon={feature.icon} title={feature.title} color={feature.color} />
                </div>
              ))}
            </div>

            {/* Voice AI Features */}
            <div
              className={`bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-700/50 rounded-lg p-2 transition-all duration-700 ${animationStage >= 7 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
            >
              <h3 className="text-sm font-bold text-center mb-2 text-indigo-300">Voice AI Features</h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { icon: Lightbulb, title: "Emotion AI" },
                  { icon: Zap, title: "Intelligent Interruption" },
                  { icon: MessageCircle, title: "Human-like conversation" },
                ].map((feature, index) => (
                  <div
                    key={feature.title}
                    style={{
                      transitionDelay: `${100 * index}ms`,
                      opacity: animationStage >= 7 ? 1 : 0,
                      transform: animationStage >= 7 ? "scale(1)" : "scale(0.9)",
                    }}
                    className="transition-all duration-500"
                  >
                    <MiniIntelligenceCard icon={feature.icon} title={feature.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Integrations */}
          <div
            className={`col-span-2 transition-all duration-700 ${animationStage >= 5 ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-16"}`}
          >
            <div className="bg-gradient-to-r from-teal-900/30 to-green-900/30 border border-teal-700/50 rounded-lg p-2 h-full">
              <h3 className="text-xs font-bold text-center mb-2 text-teal-300">Integrations</h3>
              <div className="flex justify-center mb-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 text-center w-full">
                  <p className="text-xs">100+ integrations</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Salesforce",
                  "Zendesk",
                  "SAP",
                  "Shopify",
                  "HubSpot",
                  "Microsoft",
                  "Stripe",
                  "ServiceNow",
                  "Jira",
                  "Slack",
                  "Google",
                  "AWS",
                ].map((integration, index) => (
                  <div
                    key={integration}
                    style={{
                      transitionDelay: `${50 * index}ms`,
                      opacity: animationStage >= 5 ? 1 : 0,
                      transform: animationStage >= 5 ? "scale(1)" : "scale(0.8)",
                    }}
                    className="transition-all duration-300"
                  >
                    <MiniIntegrationCard title={integration} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Foundation */}
        <div
          className={`bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-700/50 rounded-lg p-2 text-center mb-2 transition-all duration-700 ${animationStage >= 8 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
        >
          <h3 className="text-sm font-semibold text-indigo-300">Multi-LLM Architecture</h3>
          <p className="text-xs text-indigo-200">NLP → GenAI → Agentic AI</p>
        </div>

        {/* Footer */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${animationStage >= 8 ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-xs text-indigo-300">© 2025 Yellow.AI | The Complete Agentic Customer Service Platform</p>
        </div>
      </div>
    </div>
  )
}

function MiniChannelCard({ icon: Icon, title }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 text-center">
      <Icon className="w-3 h-3 mx-auto mb-1 text-purple-300" />
      <p className="text-[10px]">{title}</p>
    </div>
  )
}

function LargerFeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-2">
      <div className="flex items-center mb-1">
        <Icon className="w-4 h-4 mr-1.5" />
        <h4 className="font-medium text-xs">{title}</h4>
      </div>
      <p className="text-[10px] opacity-80 pl-5.5">{description}</p>
    </div>
  )
}

function MiniIntelligenceCard({ icon: Icon, title }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 text-center">
      <Icon className="w-3 h-3 mx-auto mb-1 text-yellow-300" />
      <p className="text-[10px]">{title}</p>
    </div>
  )
}

function MiniAgentCard({ icon: Icon, title }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 text-center">
      <Icon className="w-3 h-3 mx-auto mb-1 text-blue-300" />
      <p className="text-[10px]">{title}</p>
    </div>
  )
}

function MiniAdditionalCard({ icon: Icon, title, color }) {
  return (
    <div className={`${color} border border-white/10 rounded-lg p-1 text-center`}>
      <Icon className="w-3 h-3 mx-auto mb-1 text-yellow-300" />
      <p className="text-[10px]">{title}</p>
    </div>
  )
}

function MiniIntegrationCard({ title }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 text-center">
      <p className="text-[10px]">{title}</p>
    </div>
  )
}
