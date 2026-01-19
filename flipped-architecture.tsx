import {
  Mic,
  MessageSquare,
  Brain,
  Zap,
  Users,
  Database,
  Globe,
  Lightbulb,
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

export default function FlippedArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-amber-400 text-transparent bg-clip-text">
            Agentic Customer Service Suite
          </h1>
          <p className="text-xl text-yellow-200/90">
            AI Agents to create the zero touch support and service experience
          </p>
        </div>

        {/* Core Capabilities Banner */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { title: "Context aware conversations", icon: Brain },
            { title: "Human-like", icon: MessageSquare },
            { title: "Multimodal interactions", icon: Mic },
            { title: "Multi-agent", icon: Users },
          ].map((capability) => (
            <div
              key={capability.title}
              className="bg-white/5 backdrop-blur-sm border border-purple-700/50 rounded-lg p-4 text-center"
            >
              <capability.icon className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
              <h3 className="text-sm font-medium">{capability.title}</h3>
            </div>
          ))}
        </div>

        {/* Main Architecture with Flipped Layout */}
        <div className="relative mb-12">
          <div className="grid grid-cols-3 gap-8">
            {/* Left Section - Channels */}
            <div className="space-y-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mb-4">
                <h2 className="text-xl font-bold">Channels</h2>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-fuchsia-900/50 border border-purple-700/50 rounded-lg p-6 relative">
                <h3 className="text-lg font-semibold text-purple-300 mb-4 text-center">Truly Omni-Channels</h3>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded p-3 text-sm text-center">
                    <h4 className="font-medium text-yellow-300 mb-2">Voice</h4>
                    <Mic className="w-6 h-6 mx-auto text-purple-300" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded p-3 text-center">
                      <MessageSquare className="w-5 h-5 mx-auto mb-1 text-green-400" />
                      <p className="text-xs">WhatsApp</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                      <Globe className="w-5 h-5 mx-auto mb-1 text-blue-400" />
                      <p className="text-xs">Facebook</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                      <Phone className="w-5 h-5 mx-auto mb-1 text-purple-400" />
                      <p className="text-xs">Teams</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                      <Mail className="w-5 h-5 mx-auto mb-1 text-indigo-400" />
                      <p className="text-xs">Email</p>
                    </div>
                  </div>
                </div>

                {/* Arrow to Center */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ChevronRight className="w-8 h-8 text-purple-400" />
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mt-6">
                <h2 className="text-lg font-bold">Agentic RAG</h2>
                <p className="text-xs text-blue-200 mt-1">Multi-modal capabilities for image/text/video</p>
              </div>
            </div>

            {/* Center Section - Automate & Analyse */}
            <div className="space-y-4">
              {/* Automate Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mb-2">
                <h2 className="text-xl font-bold">Automate</h2>
              </div>

              <div className="bg-gradient-to-br from-amber-800/50 to-yellow-800/50 border border-amber-700/50 rounded-lg p-6 relative">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">-</span>
                    <span>AI Copilot for debugging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">-</span>
                    <span>AI Agent Builder</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">-</span>
                    <span>Dynamic Conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">-</span>
                    <span>AI Agent Marketplace</span>
                  </li>
                </ul>
              </div>

              {/* Intelligence Features */}
              <div className="grid grid-cols-3 gap-2 my-4">
                <div className="bg-white/10 rounded p-2 text-center">
                  <Lightbulb className="w-4 h-4 mx-auto mb-1 text-yellow-300" />
                  <p className="text-xs">Emotion AI</p>
                </div>
                <div className="bg-white/10 rounded p-2 text-center">
                  <Zap className="w-4 h-4 mx-auto mb-1 text-yellow-300" />
                  <p className="text-xs">Intelligent Interruption</p>
                </div>
                <div className="bg-white/10 rounded p-2 text-center">
                  <MessageCircle className="w-4 h-4 mx-auto mb-1 text-yellow-300" />
                  <p className="text-xs">Human like conversation</p>
                </div>
              </div>

              {/* Analyse Section */}
              <div className="bg-gradient-to-br from-amber-800/50 to-yellow-800/50 border border-amber-700/50 rounded-lg p-6 relative">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">-</span>
                    <span>Quantitative Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">-</span>
                    <span>Qualitative Insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">-</span>
                    <span>Self learning - KB/Flow Generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">-</span>
                    <span>Custom Dashboards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mt-2">
                <h2 className="text-xl font-bold">Analyse</h2>
              </div>
            </div>

            {/* Right Section - Integrations */}
            <div className="space-y-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mb-4">
                <h2 className="text-xl font-bold">Integrations</h2>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border border-green-700/50 rounded-lg p-6 relative">
                <h3 className="text-lg font-semibold text-green-300 mb-4 text-center">100+ Integrations</h3>

                <div className="space-y-3">
                  <div className="bg-white/10 rounded p-3 text-sm text-center">
                    <h4 className="font-medium text-yellow-300 mb-1">Prebuilt Agentic Actions</h4>
                    <Database className="w-6 h-6 mx-auto text-green-300" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded p-3 text-center">
                      <p className="text-xs">CRM Systems</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                      <p className="text-xs">Ticketing</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                      <p className="text-xs">Payment</p>
                    </div>
                    <div className="bg-white/10 rounded p-3 text-center">
                      <p className="text-xs">Knowledge Base</p>
                    </div>
                  </div>
                </div>

                {/* Arrow from Center */}
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ChevronLeft className="w-8 h-8 text-green-400" />
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mt-6">
                <h2 className="text-lg font-bold">Human Helpdesk & Agent Assist</h2>
                <p className="text-xs text-green-200 mt-1">AI-augmented human support</p>
              </div>
            </div>
          </div>

          {/* Circular Connection with Arrows */}
          <div className="absolute w-[90%] h-[90%] border-4 border-yellow-500/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-dashed pointer-events-none"></div>

          {/* Agentic Campaigns and Notifications */}
          <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-[60%]">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
              <h2 className="text-lg font-bold">Agentic Campaigns and Notifications</h2>
              <p className="text-xs text-purple-200 mt-1">Inbound and outbound engagement</p>
            </div>
          </div>

          {/* Circular Arrows */}
          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[70%]">
            <div className="relative h-16">
              <div className="absolute left-0 bottom-0 w-full border-t-4 border-yellow-500/30 border-dashed rounded-t-full h-16"></div>
              <ArrowDownRight className="absolute left-[10%] bottom-0 w-8 h-8 text-yellow-400 transform -translate-x-4 translate-y-4" />
            </div>
          </div>

          <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-[70%]">
            <div className="relative h-16">
              <div className="absolute left-0 top-0 w-full border-b-4 border-yellow-500/30 border-dashed rounded-b-full h-16"></div>
              <ArrowUpRight className="absolute right-[10%] top-0 w-8 h-8 text-yellow-400 transform translate-x-4 -translate-y-4" />
            </div>
          </div>
        </div>

        {/* Foundation */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-700/50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">Multi-LLM Architecture</h3>
          <p className="text-sm text-indigo-200">NLP → GenAI → Agentic AI</p>
        </div>
      </div>
    </div>
  )
}
