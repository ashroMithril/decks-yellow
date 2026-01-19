import {
  Mic,
  MessageSquare,
  Brain,
  Zap,
  BarChart3,
  Users,
  Bot,
  Workflow,
  Database,
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
  Cog,
  Rocket,
} from "lucide-react"

export default function ProductArchitectureFinal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Logo */}
        <div className="flex justify-center items-center mb-8">
          <div className="bg-yellow-400 w-12 h-12 rounded-md flex items-center justify-center mr-4">
            <Bot className="w-8 h-8 text-purple-950" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 text-transparent bg-clip-text">
            Yellow.AI
          </h1>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Agentic Customer Service Suite</h2>
          <p className="text-xl text-yellow-200/90 max-w-3xl mx-auto">
            AI Agents to create the zero touch support and service experience
          </p>
        </div>

        {/* Core Capabilities Banner */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          <CapabilityCard icon={Brain} title="Context aware conversations" />
          <CapabilityCard icon={MessageSquare} title="Human-like" />
          <CapabilityCard icon={Mic} title="Multimodal interactions" />
          <CapabilityCard icon={Users} title="Multi-agent" />
        </div>

        {/* Main Architecture */}
        <div className="mb-16">
          {/* Channels Row */}
          <div className="bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-purple-900/30 border border-purple-700/50 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-purple-300">Channels</h3>
            <div className="grid grid-cols-6 gap-4">
              <ChannelCard icon={MessageSquare} title="WhatsApp" color="bg-green-800/30" />
              <ChannelCard icon={Globe} title="Facebook" color="bg-blue-800/30" />
              <ChannelCard icon={Phone} title="Voice" color="bg-purple-800/30" />
              <ChannelCard icon={Mail} title="Email" color="bg-indigo-800/30" />
              <ChannelCard icon={MessageCircle} title="Web Chat" color="bg-pink-800/30" />
              <ChannelCard icon={Headphones} title="Teams" color="bg-cyan-800/30" />
            </div>
          </div>

          {/* Core Platform */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Automate Section */}
            <div className="bg-gradient-to-br from-amber-800/30 to-yellow-800/30 border border-amber-700/50 rounded-xl p-6">
              <div className="flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-amber-400 mr-3" />
                <h3 className="text-2xl font-bold text-amber-300">Automate</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FeatureCard icon={Bot} title="AI Copilot" description="for building and debugging AI agents" />
                <FeatureCard icon={Workflow} title="AI Agent Builder" description="dynamic conversations" />
                <FeatureCard icon={Cpu} title="Agentic Workflows" description="automations using tools like APIs" />
                <FeatureCard icon={Layers} title="AI Agent Marketplace" description="templates to start with" />
              </div>
            </div>

            {/* Analyse Section */}
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 border border-green-700/50 rounded-xl p-6">
              <div className="flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-green-300">Analyse</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FeatureCard icon={PieChart} title="Quantitative Analytics" description="customizable dashboards" />
                <FeatureCard icon={Activity} title="Qualitative Insights" description="conversation analysis" />
                <FeatureCard icon={RefreshCw} title="Self Learning" description="KB/Flow Generation" />
                <FeatureCard icon={Gauge} title="Custom Dashboards" description="performance metrics" />
              </div>
            </div>
          </div>

          {/* Intelligence Features */}
          <div className="bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-indigo-900/30 border border-indigo-700/50 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-indigo-300">Intelligence Core</h3>
            <div className="grid grid-cols-3 gap-6">
              <IntelligenceCard icon={Lightbulb} title="Emotion AI" description="Sentiment understanding" />
              <IntelligenceCard icon={Zap} title="Intelligent Interruption" description="Context-aware responses" />
              <IntelligenceCard
                icon={MessageCircle}
                title="Human-like conversation"
                description="Natural language flow"
              />
            </div>
          </div>

          {/* Specialized AI Agents */}
          <div className="bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-blue-900/30 border border-blue-700/50 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-300">Specialized AI Agents</h3>
            <div className="grid grid-cols-5 gap-4">
              <AgentCard icon={HeartPulse} title="Healthcare" />
              <AgentCard icon={ShoppingBag} title="Retail" />
              <AgentCard icon={Briefcase} title="Enterprise" />
              <AgentCard icon={Building} title="Real Estate" />
              <AgentCard icon={Landmark} title="Banking" />
            </div>
          </div>

          {/* Integrations */}
          <div className="bg-gradient-to-r from-teal-900/30 via-green-900/30 to-teal-900/30 border border-teal-700/50 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-teal-300">Integrations</h3>
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 inline-flex items-center">
                <Database className="w-5 h-5 mr-2 text-teal-400" />
                <span className="text-lg font-medium">100+ integrations with prebuilt agentic actions</span>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {["Salesforce", "Zendesk", "SAP", "Shopify", "HubSpot", "Microsoft"].map((integration) => (
                <div key={integration} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="w-10 h-10 bg-teal-800/50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Cog className="w-5 h-5 text-teal-300" />
                  </div>
                  <p className="text-sm font-medium">{integration}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            <AdditionalFeatureCard
              icon={Brain}
              title="Agentic RAG"
              description="Multi-modal capabilities for image/text/video"
              color="from-pink-900/30 to-rose-900/30"
              borderColor="border-pink-700/50"
              textColor="text-pink-300"
            />
            <AdditionalFeatureCard
              icon={MessageCircle}
              title="Agentic Campaigns"
              description="Inbound and outbound engagement"
              color="from-violet-900/30 to-purple-900/30"
              borderColor="border-violet-700/50"
              textColor="text-violet-300"
            />
            <AdditionalFeatureCard
              icon={Headphones}
              title="Human Helpdesk"
              description="AI-augmented agent assist"
              color="from-blue-900/30 to-indigo-900/30"
              borderColor="border-blue-700/50"
              textColor="text-blue-300"
            />
          </div>
        </div>

        {/* Foundation */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-700/50 rounded-xl p-6 text-center mb-8">
          <h3 className="text-2xl font-semibold text-indigo-300 mb-2">Multi-LLM Architecture</h3>
          <p className="text-lg text-indigo-200">NLP → GenAI → Agentic AI</p>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-indigo-300">© 2025 Yellow.AI | The Complete Agentic Customer Service Platform</p>
        </div>
      </div>
    </div>
  )
}

function CapabilityCard({ icon: Icon, title }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-purple-700/50 rounded-lg p-4 text-center">
      <div className="bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-yellow-300" />
      </div>
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
  )
}

function ChannelCard({ icon: Icon, title, color }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
      <div className={`${color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <p className="text-sm font-medium">{title}</p>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4">
      <div className="flex items-center mb-2">
        <Icon className="w-5 h-5 mr-2" />
        <h4 className="font-medium">{title}</h4>
      </div>
      <p className="text-xs opacity-80">{description}</p>
    </div>
  )
}

function IntelligenceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-5 text-center">
      <div className="bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-7 h-7 text-yellow-300" />
      </div>
      <h4 className="font-medium text-lg mb-1">{title}</h4>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  )
}

function AgentCard({ icon: Icon, title }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
      <div className="bg-blue-800/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-blue-300" />
      </div>
      <p className="text-sm font-medium">{title}</p>
    </div>
  )
}

function AdditionalFeatureCard({ icon: Icon, title, description, color, borderColor, textColor }) {
  return (
    <div className={`bg-gradient-to-br ${color} ${borderColor} rounded-lg p-5 text-center`}>
      <div className="bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-7 h-7 text-yellow-300" />
      </div>
      <h4 className={`font-medium text-lg mb-1 ${textColor}`}>{title}</h4>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  )
}
