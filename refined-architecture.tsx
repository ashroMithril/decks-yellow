import { Mic, MessageSquare, Brain, Zap, BarChart3, Users, Bot, Workflow } from "lucide-react"

export default function RefinedArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-amber-400 text-transparent bg-clip-text">
            Autonomous Agent Intelligence Platform
          </h1>
          <p className="text-xl text-yellow-200/90">Next-Generation AI Agents for Autonomous Customer Experience</p>
        </div>

        {/* Core Capabilities Banner */}
        <div className="grid grid-cols-4 gap-4 mb-12">
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

        {/* Main Architecture */}
        <div className="grid gap-8 mb-12">
          {/* Left Section - Creation & Automation */}
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-4">
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
                    <span>Dialogue: Conversation Designer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span>Nexus: Agent Marketplace</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Center Section - Core Platform */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-900/50 to-fuchsia-900/50 border border-purple-700/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-4">Intelligence Core</h3>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded p-3 text-sm">
                    <h4 className="font-medium text-yellow-300 mb-1">Cognitive Engine</h4>
                    <p className="text-xs text-purple-200">Advanced NLU & Reasoning</p>
                  </div>
                  <div className="bg-white/10 rounded p-3 text-sm">
                    <h4 className="font-medium text-yellow-300 mb-1">Omni-Channel Hub</h4>
                    <div className="flex gap-2 text-purple-300 text-xs">
                      <span>Voice</span>
                      <span>•</span>
                      <span>Chat</span>
                      <span>•</span>
                      <span>Email</span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded p-3 text-sm">
                    <h4 className="font-medium text-yellow-300 mb-1">Integration Bridge</h4>
                    <p className="text-xs text-purple-200">Enterprise Connectivity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Analytics */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border border-green-700/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-300 mb-4">Insight Engine</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-green-400" />
                    <span>Metrics: Performance Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-green-400" />
                    <span>Lens: Conversation Analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span>Evolve: Self-Learning System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                    <span>Vista: Custom Dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Capabilities */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-700/50 rounded-lg p-4 text-center">
            <h3 className="font-medium text-amber-300 mb-2">Knowledge Fusion</h3>
            <p className="text-sm text-amber-200/80">Advanced RAG with Multi-Modal Understanding</p>
          </div>
          <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-700/50 rounded-lg p-4 text-center">
            <h3 className="font-medium text-amber-300 mb-2">Engagement Nexus</h3>
            <p className="text-sm text-amber-200/80">Intelligent Campaign Orchestration</p>
          </div>
          <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/30 border border-amber-700/50 rounded-lg p-4 text-center">
            <h3 className="font-medium text-amber-300 mb-2">Guardian Interface</h3>
            <p className="text-sm text-amber-200/80">AI-Augmented Human Support</p>
          </div>
        </div>

        {/* Foundation */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-700/50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">Neural Foundation</h3>
          <p className="text-sm text-indigo-200">Advanced Multi-LLM Architecture: NLP → GenAI → Agentic Intelligence</p>
        </div>
      </div>
    </div>
  )
}
