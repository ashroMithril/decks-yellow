import {
  Mic,
  MessageSquare,
  Brain,
  Zap,
  BarChart3,
  Users,
  Bot,
  Workflow,
  ArrowRight,
  Database,
  Globe,
  Lightbulb,
  Mail,
  Phone,
  MessageCircle,
  RefreshCw,
  PieChart,
} from "lucide-react"

export default function ComprehensiveArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-amber-400 text-transparent bg-clip-text">
            Autonomous Agent Intelligence Platform
          </h1>
          <p className="text-xl text-yellow-200/90">
            AI Agents to create the zero-touch support and service experience
          </p>
        </div>

        {/* Core Capabilities Banner */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { title: "Contextual Intelligence", icon: Brain },
            { title: "Natural Conversations", icon: MessageSquare },
            { title: "Multimodal Understanding", icon: Mic },
            { title: "Agent Orchestration", icon: Users },
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

        {/* Main Architecture with Arrows */}
        <div className="relative mb-12">
          <div className="grid grid-cols-3 gap-8">
            {/* Left Section - Creation & Automation */}
            <div className="space-y-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mb-4">
                <h2 className="text-xl font-bold">Automate</h2>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-700/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-4">Agent Studio</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-blue-400" />
                    <span>Synthesis: AI Agent Architect</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-blue-400" />
                    <span>Navigator: Development Copilot</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    <span>Dialogue: Dynamic Conversations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>Nexus: Agent Marketplace</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mt-6">
                <h2 className="text-lg font-bold">Knowledge Fusion</h2>
                <p className="text-xs text-blue-200 mt-1">Agentic RAG with Multi-Modal Understanding</p>
              </div>
            </div>

            {/* Center Section - Core Platform */}
            <div className="space-y-2">
              <div className="bg-gradient-to-br from-purple-900/50 to-fuchsia-900/50 border border-purple-700/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-4 text-center">Intelligence Core</h3>

                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-2 mb-4">
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
                      <p className="text-xs">Human-like Conversation</p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded p-3 text-sm text-center">
                    <h4 className="font-medium text-yellow-300 mb-1">Voice</h4>
                    <Mic className="w-5 h-5 mx-auto text-purple-300" />
                  </div>

                  <div className="bg-white/10 rounded p-3 text-sm">
                    <h4 className="font-medium text-yellow-300 mb-2 text-center">Truly Omni-Channels</h4>
                    <div className="flex justify-center gap-3 text-purple-300">
                      <div className="bg-green-800/30 rounded-full p-1.5">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div className="bg-blue-800/30 rounded-full p-1.5">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div className="bg-purple-800/30 rounded-full p-1.5">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="bg-indigo-800/30 rounded-full p-1.5">
                        <Mail className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded p-3 text-sm text-center">
                    <h4 className="font-medium text-yellow-300 mb-1">Integrations</h4>
                    <Database className="w-5 h-5 mx-auto text-purple-300" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center flex-1 mx-1">
                  <h2 className="text-lg font-bold">Engagement Nexus</h2>
                  <p className="text-xs text-purple-200 mt-1">Agentic Campaigns & Notifications</p>
                </div>
              </div>
            </div>

            {/* Right Section - Analytics */}
            <div className="space-y-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mb-4">
                <h2 className="text-xl font-bold">Analyse</h2>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-700/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-300 mb-4">Insight Engine</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-green-400" />
                    <span>Metrics: Quantitative Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-green-400" />
                    <span>Lens: Qualitative Insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-green-400" />
                    <span>Evolve: Self-Learning & KB/Flow</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-green-400" />
                    <span>Vista: Custom Dashboards</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center mt-6">
                <h2 className="text-lg font-bold">Guardian Interface</h2>
                <p className="text-xs text-green-200 mt-1">Human Helpdesk & Agent Assist</p>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute top-1/2 left-[30%] transform -translate-y-1/2 -translate-x-1/2">
            <ArrowRight className="w-12 h-12 text-blue-400/50" />
          </div>

          <div className="absolute top-1/2 right-[30%] transform -translate-y-1/2 translate-x-1/2">
            <ArrowRight className="w-12 h-12 text-green-400/50" />
          </div>

          {/* Circular Connection */}
          <div className="absolute w-[90%] h-[90%] border-4 border-yellow-500/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-dashed pointer-events-none"></div>
        </div>

        {/* Foundation */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-700/50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">Neural Foundation</h3>
          <p className="text-sm text-indigo-200">Multi-LLM Architecture: NLP → GenAI → Agentic AI</p>
        </div>
      </div>
    </div>
  )
}
