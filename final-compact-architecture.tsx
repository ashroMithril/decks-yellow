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

export default function FinalCompactArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with Logo */}
        <div className="flex justify-center items-center mb-2">
          <div className="bg-yellow-400 w-8 h-8 rounded-md flex items-center justify-center mr-2">
            <Bot className="w-5 h-5 text-purple-950" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 text-transparent bg-clip-text">
            Yellow.AI
          </h1>
        </div>

        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold">Agentic Customer Service Suite</h2>
          <p className="text-sm text-yellow-200/90">
            AI Agents to create the zero touch support and service experience
          </p>
        </div>

        {/* Specialized AI Agents - Moved to Top */}
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-lg p-2 mb-3">
          <h3 className="text-sm font-bold text-center mb-2 text-blue-300">Specialized AI Agents</h3>
          <div className="grid grid-cols-6 gap-2">
            <MiniAgentCard icon={HeartPulse} title="Healthcare" />
            <MiniAgentCard icon={ShoppingBag} title="Retail" />
            <MiniAgentCard icon={Briefcase} title="Enterprise" />
            <MiniAgentCard icon={Building} title="Real Estate" />
            <MiniAgentCard icon={Landmark} title="Banking" />
            <MiniAgentCard icon={HelpCircle} title="Support" />
          </div>
        </div>

        {/* Core Capabilities Banner */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { icon: Brain, title: "Context aware" },
            { icon: MessageSquare, title: "Human-like" },
            { icon: Mic, title: "Multimodal" },
            { icon: Users, title: "Multi-agent" },
          ].map((capability) => (
            <div
              key={capability.title}
              className="bg-white/5 backdrop-blur-sm border border-purple-700/50 rounded-lg p-2 text-center"
            >
              <capability.icon className="w-4 h-4 mx-auto mb-1 text-yellow-300" />
              <h3 className="text-xs font-medium">{capability.title}</h3>
            </div>
          ))}
        </div>

        {/* Main Architecture - Compact Version */}
        <div className="grid grid-cols-12 gap-3 mb-3">
          {/* Left Column - Channels */}
          <div className="col-span-2">
            <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-700/50 rounded-lg p-2 h-full">
              <h3 className="text-xs font-bold text-center mb-2 text-purple-300">Channels</h3>
              <div className="grid grid-cols-2 gap-2">
                <MiniChannelCard icon={MessageSquare} title="WhatsApp" />
                <MiniChannelCard icon={Globe} title="Facebook" />
                <MiniChannelCard icon={Phone} title="Voice" />
                <MiniChannelCard icon={Mail} title="Email" />
                <MiniChannelCard icon={MessageCircle} title="Web Chat" />
                <MiniChannelCard icon={Headphones} title="Teams" />
                <MiniChannelCard icon={Instagram} title="Instagram" />
                <MiniChannelCard icon={Twitter} title="Twitter" />
                <MiniChannelCard icon={Youtube} title="YouTube" />
                <MiniChannelCard icon={Smartphone} title="Mobile App" />
                <MiniChannelCard icon={Tv} title="Smart TV" />
                <MiniChannelCard icon={MessageCircle} title="SMS" />
              </div>
            </div>
          </div>

          {/* Center Column - Core Platform */}
          <div className="col-span-8">
            {/* Automate & Analyse */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              {/* Automate Section */}
              <div className="bg-gradient-to-br from-amber-800/30 to-yellow-800/30 border border-amber-700/50 rounded-lg p-2">
                <div className="flex items-center justify-center mb-2">
                  <Rocket className="w-4 h-4 text-amber-400 mr-1" />
                  <h3 className="text-sm font-bold text-amber-300">Automate</h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <MiniFeatureCard icon={Bot} title="AI Copilot" />
                  <MiniFeatureCard icon={Workflow} title="Agent Builder" />
                  <MiniFeatureCard icon={Cpu} title="Workflows" />
                  <MiniFeatureCard icon={Layers} title="Marketplace" />
                </div>
              </div>

              {/* Analyse Section */}
              <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 border border-green-700/50 rounded-lg p-2">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="w-4 h-4 text-green-400 mr-1" />
                  <h3 className="text-sm font-bold text-green-300">Analyse</h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <MiniFeatureCard icon={PieChart} title="Quantitative" />
                  <MiniFeatureCard icon={Activity} title="Qualitative" />
                  <MiniFeatureCard icon={RefreshCw} title="Self Learning" />
                  <MiniFeatureCard icon={Gauge} title="Dashboards" />
                </div>
              </div>
            </div>

            {/* Voice AI Features */}
            <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-700/50 rounded-lg p-2 mb-3">
              <h3 className="text-sm font-bold text-center mb-2 text-indigo-300">Voice AI Features</h3>
              <div className="grid grid-cols-3 gap-2">
                <MiniIntelligenceCard icon={Lightbulb} title="Emotion AI" />
                <MiniIntelligenceCard icon={Zap} title="Intelligent Interruption" />
                <MiniIntelligenceCard icon={MessageCircle} title="Human-like conversation" />
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-3 gap-3">
              <MiniAdditionalCard icon={Brain} title="Agentic RAG" color="bg-pink-900/30" />
              <MiniAdditionalCard icon={MessageCircle} title="Agentic Campaigns" color="bg-violet-900/30" />
              <MiniAdditionalCard icon={Headphones} title="Human Helpdesk" color="bg-blue-900/30" />
            </div>
          </div>

          {/* Right Column - Integrations */}
          <div className="col-span-2">
            <div className="bg-gradient-to-r from-teal-900/30 to-green-900/30 border border-teal-700/50 rounded-lg p-2 h-full">
              <h3 className="text-xs font-bold text-center mb-2 text-teal-300">Integrations</h3>
              <div className="flex justify-center mb-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 text-center w-full">
                  <p className="text-xs">100+ integrations</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <MiniIntegrationCard title="Salesforce" />
                <MiniIntegrationCard title="Zendesk" />
                <MiniIntegrationCard title="SAP" />
                <MiniIntegrationCard title="Shopify" />
                <MiniIntegrationCard title="HubSpot" />
                <MiniIntegrationCard title="Microsoft" />
                <MiniIntegrationCard title="Stripe" />
                <MiniIntegrationCard title="ServiceNow" />
                <MiniIntegrationCard title="Jira" />
                <MiniIntegrationCard title="Slack" />
                <MiniIntegrationCard title="Google" />
                <MiniIntegrationCard title="AWS" />
              </div>
            </div>
          </div>
        </div>

        {/* Foundation */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-700/50 rounded-lg p-2 text-center mb-2">
          <h3 className="text-sm font-semibold text-indigo-300">Multi-LLM Architecture</h3>
          <p className="text-xs text-indigo-200">NLP → GenAI → Agentic AI</p>
        </div>

        {/* Footer */}
        <div className="text-center">
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

function MiniFeatureCard({ icon: Icon, title }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
      <div className="flex items-center">
        <Icon className="w-3 h-3 mr-1" />
        <p className="text-[10px]">{title}</p>
      </div>
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
