import type React from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function EnhancedProductArchitectureOnePager() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 w-8 h-8 rounded-md"></div>
            <h1 className="text-2xl font-bold">Yellow.AI</h1>
          </div>
          <h2 className="text-3xl font-semibold text-center text-yellow-300">Nexus Platform Architecture</h2>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-medium">Book a Demo</Button>
        </header>

        {/* Main Architecture Diagram */}
        <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-sm border border-indigo-600 rounded-xl p-6 mb-8">
          <div className="flex gap-4">
            {/* Left Side - Channels */}
            <div className="w-1/5 flex flex-col justify-center gap-4">
              <div className="bg-gradient-to-br from-pink-600/50 to-purple-600/50 border border-pink-500 rounded-lg p-3 text-center">
                <h3 className="font-bold text-lg mb-2 text-pink-200">Channels</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <ChannelTile name="WhatsApp" icon="💬" />
                  <ChannelTile name="Facebook Messenger" icon="👤" />
                  <ChannelTile name="Instagram" icon="📸" />
                  <ChannelTile name="SMS" icon="📱" />
                  <ChannelTile name="Voice" icon="🎤" />
                  <ChannelTile name="Email" icon="✉️" />
                  <ChannelTile name="Web Chat" icon="💻" />
                  <ChannelTile name="Mobile App" icon="📱" />
                </div>
              </div>
            </div>

            {/* Center - Core Architecture */}
            <div className="w-3/5">
              {/* Core Platform */}
              <div className="bg-gradient-to-r from-yellow-400/30 to-orange-400/30 border border-yellow-400/50 rounded-lg p-4 mb-4 text-center">
                <h3 className="font-bold text-2xl text-yellow-300">Nexus Platform: The Agentic Core</h3>
              </div>

              {/* Layers */}
              <div className="grid gap-4">
                {/* Creation Layer */}
                <LayerBox title="Creation Layer" color="from-blue-600/50 to-cyan-600/50" borderColor="border-blue-500">
                  <ProductTile name="Architect" subtitle="AI Agent Builder" />
                  <ProductTile name="Copilot" subtitle="Dev Assistant" />
                  <ProductTile name="Blueprint" subtitle="Marketplace" />
                  <ProductTile name="Conductor" subtitle="Multi-Agent" />
                </LayerBox>

                {/* Intelligence Layer */}
                <LayerBox
                  title="Intelligence Layer"
                  color="from-green-600/50 to-teal-600/50"
                  borderColor="border-green-500"
                >
                  <ProductTile name="Cognition" subtitle="Conversation" />
                  <ProductTile name="Navigator" subtitle="Workflows" />
                  <ProductTile name="Prism" subtitle="Multi-Modal" />
                  <ProductTile name="Compass" subtitle="Search" />
                  <ProductTile name="Sentinel" subtitle="User 360" />
                </LayerBox>

                {/* Engagement Layer */}
                <LayerBox
                  title="Engagement Layer"
                  color="from-orange-600/50 to-red-600/50"
                  borderColor="border-orange-500"
                >
                  <ProductTile name="Nexus Hub" subtitle="Omnichannel" />
                  <ProductTile name="Guardian" subtitle="Agent Assist" />
                  <ProductTile name="Resolver" subtitle="Ticketing" />
                  <ProductTile name="Pulse" subtitle="Outbound" />
                </LayerBox>

                {/* Integration Layer */}
                <LayerBox
                  title="Integration Layer"
                  color="from-indigo-600/50 to-purple-600/50"
                  borderColor="border-indigo-500"
                >
                  <ProductTile name="Bridge" subtitle="100+ Integrations" />
                </LayerBox>

                {/* Insights Layer */}
                <LayerBox title="Insights Layer" color="from-pink-600/50 to-rose-600/50" borderColor="border-pink-500">
                  <ProductTile name="Lens" subtitle="Qualitative Analysis" />
                  <ProductTile name="Metrics" subtitle="Quantitative Dashboard" />
                </LayerBox>
              </div>
            </div>

            {/* Right Side - Integrations */}
            <div className="w-1/5 flex flex-col justify-center gap-4">
              <div className="bg-gradient-to-br from-green-600/50 to-teal-600/50 border border-green-500 rounded-lg p-3 text-center">
                <h3 className="font-bold text-lg mb-2 text-green-200">Integrations</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <IntegrationTile name="Salesforce" icon="💼" />
                  <IntegrationTile name="Zendesk" icon="🎫" />
                  <IntegrationTile name="SAP" icon="🏢" />
                  <IntegrationTile name="Shopify" icon="🛍️" />
                  <IntegrationTile name="HubSpot" icon="🚀" />
                  <IntegrationTile name="Stripe" icon="💳" />
                  <IntegrationTile name="Google Workspace" icon="📊" />
                  <IntegrationTile name="Microsoft 365" icon="📁" />
                </div>
              </div>
            </div>
          </div>

          {/* Support Lifecycle Flow */}
          <div className="mt-6">
            <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500 rounded-lg p-4">
              <h3 className="font-bold text-lg mb-4 text-center text-blue-200">Support Lifecycle Flow</h3>
              <div className="flex justify-between">
                <LifecycleStep number={1} name="Build" />
                <div className="flex-1 border-t-2 border-dashed border-blue-400/50 self-center mx-2"></div>
                <LifecycleStep number={2} name="Empower" />
                <div className="flex-1 border-t-2 border-dashed border-blue-400/50 self-center mx-2"></div>
                <LifecycleStep number={3} name="Engage" />
                <div className="flex-1 border-t-2 border-dashed border-blue-400/50 self-center mx-2"></div>
                <LifecycleStep number={4} name="Integrate" />
                <div className="flex-1 border-t-2 border-dashed border-blue-400/50 self-center mx-2"></div>
                <LifecycleStep number={5} name="Analyze" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <BenefitCard
            title="End-to-End Solution"
            description="Complete platform covering the entire support lifecycle from agent creation to insights"
            color="from-blue-600/30 to-cyan-600/30"
            borderColor="border-blue-500"
          />
          <BenefitCard
            title="Agentic Intelligence"
            description="AI agents that autonomously understand, reason, and take actions to resolve customer issues"
            color="from-green-600/30 to-teal-600/30"
            borderColor="border-green-500"
          />
          <BenefitCard
            title="Enterprise Ready"
            description="Secure, scalable architecture with extensive integration capabilities for enterprise deployment"
            color="from-purple-600/30 to-pink-600/30"
            borderColor="border-purple-500"
          />
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-indigo-200">
          <p>© 2025 Yellow.AI | The Complete Agentic Customer Service Platform</p>
        </footer>
      </div>
    </div>
  )
}

function LayerBox({
  title,
  color,
  borderColor,
  children,
}: { title: string; color: string; borderColor: string; children: React.ReactNode }) {
  return (
    <div className={`bg-gradient-to-r ${color} ${borderColor} rounded-lg p-4`}>
      <h3 className="font-bold text-lg mb-2 text-center text-white">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">{children}</div>
    </div>
  )
}

function ProductTile({ name, subtitle }: { name: string; subtitle: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded p-2 text-center cursor-help transition-all hover:bg-white/20">
            <div className="font-medium text-yellow-300 text-sm">{name}</div>
            <div className="text-xs text-blue-200">{subtitle}</div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm">
            {name}: {subtitle}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function ChannelTile({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-pink-500/50 rounded p-2 text-center">
      <span className="mr-2">{icon}</span>
      <span className="text-pink-200">{name}</span>
    </div>
  )
}

function IntegrationTile({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-green-500/50 rounded p-2 text-center">
      <span className="mr-2">{icon}</span>
      <span className="text-green-200">{name}</span>
    </div>
  )
}

function LifecycleStep({ number, name }: { number: number; name: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-1">
        {number}
      </div>
      <span className="text-xs text-blue-200">{name}</span>
    </div>
  )
}

function BenefitCard({
  title,
  description,
  color,
  borderColor,
}: { title: string; description: string; color: string; borderColor: string }) {
  return (
    <div className={`bg-gradient-to-br ${color} backdrop-blur-sm border ${borderColor} rounded-lg p-4 text-center`}>
      <h3 className="font-bold text-xl text-yellow-300 mb-2">{title}</h3>
      <p className="text-sm text-blue-100">{description}</p>
    </div>
  )
}
