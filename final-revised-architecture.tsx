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
  Shield,
  Mail,
  Phone,
  MessageCircle,
  RefreshCw,
  PieChart,
  Activity,
  ShoppingBag,
  HeartPulse,
  Building,
  Landmark,
  Headphones,
  Layers,
  Gauge,
  Rocket,
  Instagram,
  Smartphone,
  Lock,
  FileKey,
  ShieldAlert,
  UserCheck,
  Bell,
  HandIcon as HandHelp,
  Languages,
  UserCog,
} from "lucide-react"

export default function FinalRevisedArchitecture() {
  const [animationStage, setAnimationStage] = useState(0)

  useEffect(() => {
    // Sequence the animations - starting from center
    const timer1 = setTimeout(() => setAnimationStage(1), 500) // Header
    const timer2 = setTimeout(() => setAnimationStage(2), 1200) // Automate & Analyse (FIRST)
    const timer3 = setTimeout(() => setAnimationStage(3), 2400) // Assist Section
    const timer4 = setTimeout(() => setAnimationStage(4), 3000) // Voice AI Features
    const timer5 = setTimeout(() => setAnimationStage(5), 3600) // Channels & Integrations
    const timer6 = setTimeout(() => setAnimationStage(6), 4200) // Core Capabilities
    const timer7 = setTimeout(() => setAnimationStage(7), 4800) // Enterprise Grade Agents
    const timer8 = setTimeout(() => setAnimationStage(8), 5400) // Multi-LLM Architecture
    const timer9 = setTimeout(() => setAnimationStage(9), 6000) // Security & Guardrails

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
      clearTimeout(timer6)
      clearTimeout(timer7)
      clearTimeout(timer8)
      clearTimeout(timer9)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-white text-[#281C46] p-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-3 transition-all duration-700 delay-300 ${animationStage >= 1 ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"}`}
        >
          <h1 className="text-3xl font-bold text-black">Yellow.ai Agentic AI Suite</h1>
          <p className="text-sm text-[#281C46]">AI Agents to create the zero touch support and service experience</p>
        </div>

        {/* Enterprise Grade Agents */}
        <div
          className={`bg-white border border-[#5A3BFE]/20 rounded-lg p-2 mb-3 shadow-sm transition-all duration-700 ${animationStage >= 7 ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"}`}
        >
          <h3 className="text-sm font-bold text-center mb-2 text-black">Enterprise Grade Agents</h3>
          <div className="grid grid-cols-5 gap-2">
            {[
              { icon: ShoppingBag, title: "Retail" },
              { icon: Landmark, title: "BFSI" },
              { icon: Globe, title: "Travel" },
              { icon: Smartphone, title: "Automobile" },
              { icon: HeartPulse, title: "Healthcare" },
              { icon: Building, title: "Manufacturing" },
              { icon: Lightbulb, title: "Utility" },
              { icon: UserCog, title: "HR" },
              { icon: Headphones, title: "ITSM" },
              { icon: Bell, title: "Marketing & Sales" },
            ].map((agent, index) => (
              <div
                key={agent.title}
                className={`transition-all duration-500 delay-${100 * index}`}
                style={{
                  transitionDelay: `${100 * index}ms`,
                  opacity: animationStage >= 7 ? 1 : 0,
                  transform: animationStage >= 7 ? "translateY(0)" : "translateY(10px)",
                }}
              >
                <MiniAgentCard icon={agent.icon} title={agent.title} />
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities Banner */}
        <div
          className={`grid grid-cols-4 gap-2 mb-3 transition-all duration-700 ${animationStage >= 6 ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-8"}`}
        >
          {[
            { icon: Brain, title: "Context aware" },
            { icon: Languages, title: "Multi-lingual" },
            { icon: Mic, title: "Multimodal" },
            { icon: Users, title: "Multi-agent" },
          ].map((capability, index) => (
            <div
              key={capability.title}
              style={{
                transitionDelay: `${150 * index}ms`,
                opacity: animationStage >= 6 ? 1 : 0,
                transform: animationStage >= 6 ? "translateX(0)" : "translateX(-20px)",
              }}
              className="transition-all duration-500 bg-[#F8D57E] backdrop-blur-sm border border-[#F8D57E]/50 rounded-lg p-2 text-center shadow-sm"
            >
              <capability.icon className="w-4 h-4 mx-auto mb-1 text-[#281C46]" />
              <h3 className="text-xs font-medium text-[#281C46]">{capability.title}</h3>
            </div>
          ))}
        </div>

        {/* Main Architecture - Animated Version */}
        <div className="grid grid-cols-12 gap-3 mb-3">
          {/* Left Column - Integrations (moved from right) */}
          <div
            className={`col-span-2 transition-all duration-700 ${animationStage >= 5 ? "opacity-100 transform translate-x-0" : "opacity-0 transform -translate-x-16"}`}
          >
            <div className="bg-white border border-[#5A3BFE]/20 rounded-lg p-2 h-full shadow-sm">
              <h3 className="text-xs font-bold text-center mb-2 text-black">Integrations</h3>
              <div className="flex justify-center mb-2">
                <div className="bg-[#F2EEE3] backdrop-blur-sm rounded-lg px-2 py-1 text-center w-full border border-[#5A3BFE]/10 shadow-sm">
                  <p className="text-xs text-[#281C46]">150+ integrations</p>
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

          {/* Center Column - Core Platform */}
          <div className="col-span-8">
            {/* Voice AI Features */}
            <div
              className={`bg-[#5A3BFE] border border-[#5A3BFE]/20 rounded-lg p-2 mb-3 shadow-sm transition-all duration-700 ${animationStage >= 4 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
            >
              <h3 className="text-sm font-bold text-center mb-2 text-white">Voice AI Features</h3>
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
                      opacity: animationStage >= 4 ? 1 : 0,
                      transform: animationStage >= 4 ? "scale(1)" : "scale(0.9)",
                    }}
                    className="transition-all duration-500"
                  >
                    <MiniIntelligenceCard icon={feature.icon} title={feature.title} />
                  </div>
                ))}
              </div>
            </div>

            {/* Three Pillars: Automate, Assist, Analyse */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              {/* Automate Section */}
              <div
                className={`bg-white border-2 border-[#5A3BFE]/40 rounded-lg p-3 shadow-md transition-all duration-700 ${animationStage >= 2 ? "opacity-100 transform scale-100" : "opacity-0 transform scale-95"}`}
                style={{ transitionDelay: "0ms" }}
              >
                <div className="flex items-center justify-center mb-3 pb-2 border-b border-[#5A3BFE]/20">
                  <Rocket className="w-5 h-5 text-[#5A3BFE] mr-2" />
                  <h3 className="text-base font-bold text-black">Automate</h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: Bot, title: "AI Copilot", description: "for debugging" },
                    { icon: Workflow, title: "AI Agent Builder", description: "dynamic conversations" },
                    { icon: Brain, title: "Agentic RAG", description: "multi-modal" },
                    { icon: Layers, title: "Agent Marketplace", description: "templates" },
                  ].map((feature, index) => (
                    <div
                      key={feature.title}
                      style={{
                        transitionDelay: `${200 + 150 * index}ms`,
                        opacity: animationStage >= 2 ? 1 : 0,
                        transform: animationStage >= 2 ? "translateY(0)" : "translateY(15px)",
                      }}
                      className="transition-all duration-500"
                    >
                      <LargerFeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Assist Section */}
              <div
                className={`bg-white border-2 border-[#5A3BFE]/40 rounded-lg p-3 shadow-md transition-all duration-700 ${animationStage >= 3 ? "opacity-100 transform scale-100" : "opacity-0 transform scale-95"}`}
                style={{ transitionDelay: "0ms" }}
              >
                <div className="flex items-center justify-center mb-3 pb-2 border-b border-[#5A3BFE]/20">
                  <HandHelp className="w-5 h-5 text-[#5A3BFE] mr-2" />
                  <h3 className="text-base font-bold text-black">Assist</h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {[
                    { icon: UserCheck, title: "Agentic CRM", description: "user 360" },
                    { icon: Headphones, title: "Agent Assist", description: "AI powered" },
                    { icon: HandHelp, title: "Human Helpdesk", description: "escalation" },
                  ].map((feature, index) => (
                    <div
                      key={feature.title}
                      style={{
                        transitionDelay: `${200 + 150 * index}ms`,
                        opacity: animationStage >= 3 ? 1 : 0,
                        transform: animationStage >= 3 ? "translateY(0)" : "translateY(15px)",
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
                className={`bg-white border-2 border-[#5A3BFE]/40 rounded-lg p-3 shadow-md transition-all duration-700 ${animationStage >= 2 ? "opacity-100 transform scale-100" : "opacity-0 transform scale-95"}`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-center justify-center mb-3 pb-2 border-b border-[#5A3BFE]/20">
                  <BarChart3 className="w-5 h-5 text-[#5A3BFE] mr-2" />
                  <h3 className="text-base font-bold text-black">Analyse</h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
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
                        opacity: animationStage >= 2 ? 1 : 0,
                        transform: animationStage >= 2 ? "translateY(0)" : "translateY(15px)",
                      }}
                      className="transition-all duration-500"
                    >
                      <LargerFeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hyper-personalised Campaigns */}
            <div
              className={`bg-[#281C46] border border-[#5A3BFE]/20 rounded-lg p-2 mb-3 shadow-sm transition-all duration-700 ${animationStage >= 3 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
            >
              <div className="flex items-center justify-center">
                <Bell className="w-4 h-4 text-white mr-2" />
                <h3 className="text-sm font-bold text-center text-white">Hyper-personalised Campaigns</h3>
              </div>
            </div>
          </div>

          {/* Right Column - Channels (moved from left) */}
          <div
            className={`col-span-2 transition-all duration-700 ${animationStage >= 5 ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-16"}`}
          >
            <div className="bg-white border border-[#5A3BFE]/20 rounded-lg p-2 h-full shadow-sm">
              <h3 className="text-xs font-bold text-center mb-2 text-black">Channels</h3>
              <div className="flex justify-center mb-2">
                <div className="bg-[#F2EEE3] backdrop-blur-sm rounded-lg px-2 py-1 text-center w-full border border-[#5A3BFE]/10 shadow-sm">
                  <p className="text-xs text-[#281C46]">40+ channels</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
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
        </div>

        {/* Multi-LLM Architecture */}
        <div
          className={`bg-white border border-[#5A3BFE]/20 rounded-lg p-2 text-center mb-3 shadow-sm transition-all duration-700 ${animationStage >= 8 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
        >
          <h3 className="text-sm font-semibold text-black">Multi-LLM Architecture</h3>
          <div className="grid grid-cols-5 gap-2 mt-2">
            {["GPT-4o", "GPT-4.5", "Claude 3", "DeepSeek", "Custom Models"].map((model, index) => (
              <div
                key={model}
                style={{
                  transitionDelay: `${50 * index}ms`,
                  opacity: animationStage >= 8 ? 1 : 0,
                  transform: animationStage >= 8 ? "scale(1)" : "scale(0.9)",
                }}
                className="transition-all duration-300 bg-gray-50 backdrop-blur-sm border border-[#5A3BFE]/20 rounded-lg p-1 text-center shadow-sm"
              >
                <p className="text-[11px] font-medium text-[#281C46]">{model}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security and Guardrails */}
        <div
          className={`bg-white border border-[#5A3BFE]/20 rounded-lg p-2 mb-3 shadow-sm transition-all duration-700 ${animationStage >= 9 ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}
        >
          <h3 className="text-sm font-bold text-center mb-2 text-black">Security & Guardrails</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Shield, title: "Enterprise Security" },
              { icon: Lock, title: "Data Privacy" },
              { icon: FileKey, title: "Compliance" },
              { icon: ShieldAlert, title: "Content Moderation" },
            ].map((security, index) => (
              <div
                key={security.title}
                style={{
                  transitionDelay: `${100 * index}ms`,
                  opacity: animationStage >= 9 ? 1 : 0,
                  transform: animationStage >= 9 ? "translateY(0)" : "translateY(10px)",
                }}
                className="transition-all duration-500 bg-white backdrop-blur-sm border border-[#5A3BFE]/20 rounded-lg p-2 text-center shadow-sm"
              >
                <security.icon className="w-4 h-4 mx-auto mb-1 text-red-500" />
                <p className="text-xs font-medium text-red-700">{security.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${animationStage >= 9 ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-xs text-[#281C46]">© 2025 Yellow.AI | The Complete Agentic Customer Service Platform</p>
        </div>
      </div>
    </div>
  )
}

function MiniChannelCard({ icon: Icon, title }) {
  return (
    <div className="bg-white backdrop-blur-sm border border-[#5A3BFE]/20 rounded-lg p-1 text-center shadow-sm">
      <Icon className="w-3 h-3 mx-auto mb-1 text-[#5A3BFE]" />
      <p className="text-[11px] font-medium text-[#281C46]">{title}</p>
    </div>
  )
}

function LargerFeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-gray-50 backdrop-blur-sm border border-[#5A3BFE]/20 rounded-lg p-2 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center mb-1">
        <Icon className="w-4 h-4 mr-1.5 text-[#5A3BFE]" />
        <h4 className="font-semibold text-sm text-black">{title}</h4>
      </div>
      <p className="text-[11px] font-medium text-[#281C46] pl-5.5">{description}</p>
    </div>
  )
}

function MiniIntelligenceCard({ icon: Icon, title }) {
  return (
    <div className="bg-[#5A3BFE] backdrop-blur-sm border border-white/20 rounded-lg p-1 text-center shadow-sm">
      <Icon className="w-3 h-3 mx-auto mb-1 text-white" />
      <p className="text-[11px] font-medium text-white">{title}</p>
    </div>
  )
}

function MiniAgentCard({ icon: Icon, title }) {
  return (
    <div className="bg-[#5A3BFE] backdrop-blur-sm border border-[#5A3BFE]/20 rounded-lg p-1 text-center shadow-sm">
      <Icon className="w-3 h-3 mx-auto mb-1 text-white" />
      <p className="text-[11px] font-medium text-white">{title}</p>
    </div>
  )
}

function MiniIntegrationCard({ title }) {
  return (
    <div className="bg-white backdrop-blur-sm border border-[#5A3BFE]/20 rounded-lg p-1 text-center shadow-sm">
      <p className="text-[11px] font-medium text-[#281C46]">{title}</p>
    </div>
  )
}
