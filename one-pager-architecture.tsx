import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ProductArchitectureOnePager() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-indigo-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 w-8 h-8 rounded-md"></div>
            <h1 className="text-2xl font-bold">Yellow.AI</h1>
          </div>
          <h2 className="text-xl font-semibold text-center text-yellow-400">Nexus Platform Architecture</h2>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-950 font-medium">Book a Demo</Button>
        </header>

        {/* Main Architecture Diagram */}
        <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col gap-4">
            {/* Horizontal Channels */}
            <div className="grid grid-cols-5 gap-4 mb-2">
              <div className="col-span-1"></div>
              <div className="col-span-3 bg-indigo-800/50 border border-indigo-700 rounded-lg p-3 text-center">
                <h3 className="font-bold text-sm mb-1">Omnichannel Experience</h3>
                <div className="flex justify-center gap-2 text-xs">
                  <span className="bg-indigo-700/70 px-2 py-1 rounded">Voice</span>
                  <span className="bg-indigo-700/70 px-2 py-1 rounded">Chat</span>
                  <span className="bg-indigo-700/70 px-2 py-1 rounded">Email</span>
                  <span className="bg-indigo-700/70 px-2 py-1 rounded">WhatsApp</span>
                  <span className="bg-indigo-700/70 px-2 py-1 rounded">Teams</span>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>

            {/* Main Architecture Grid */}
            <div className="grid grid-cols-5 gap-4">
              {/* Left Side - Integrations */}
              <div className="flex flex-col justify-center gap-4">
                <div className="bg-purple-800/50 border border-purple-700 rounded-lg p-3 text-center rotate-270 transform origin-center h-64">
                  <h3 className="font-bold text-sm mb-1 -rotate-90">Enterprise Integrations</h3>
                  <div className="flex flex-col gap-2 text-xs -rotate-90">
                    <span className="bg-purple-700/70 px-2 py-1 rounded">CRM Systems</span>
                    <span className="bg-purple-700/70 px-2 py-1 rounded">ERP Systems</span>
                    <span className="bg-purple-700/70 px-2 py-1 rounded">Ticketing</span>
                    <span className="bg-purple-700/70 px-2 py-1 rounded">Knowledge Base</span>
                  </div>
                </div>
              </div>

              {/* Center - Core Architecture */}
              <div className="col-span-3">
                {/* Core Platform */}
                <div className="bg-yellow-400/20 border border-yellow-400/50 rounded-lg p-4 mb-4 text-center">
                  <h3 className="font-bold text-yellow-400">Nexus Platform: The Agentic Core</h3>
                </div>

                {/* Layers */}
                <div className="grid gap-4">
                  {/* Creation Layer */}
                  <div className="bg-purple-800/50 border border-purple-700 rounded-lg p-4">
                    <h3 className="font-bold mb-2 text-center">Creation Layer</h3>
                    <div className="grid grid-cols-4 gap-2">
                      <ProductTile name="Architect" subtitle="AI Agent Builder" />
                      <ProductTile name="Copilot" subtitle="Dev Assistant" />
                      <ProductTile name="Blueprint" subtitle="Marketplace" />
                      <ProductTile name="Conductor" subtitle="Multi-Agent" />
                    </div>
                  </div>

                  {/* Intelligence Layer */}
                  <div className="bg-purple-800/50 border border-purple-700 rounded-lg p-4">
                    <h3 className="font-bold mb-2 text-center">Intelligence Layer</h3>
                    <div className="grid grid-cols-5 gap-2">
                      <ProductTile name="Cognition" subtitle="Conversation" />
                      <ProductTile name="Navigator" subtitle="Workflows" />
                      <ProductTile name="Prism" subtitle="Multi-Modal" />
                      <ProductTile name="Compass" subtitle="Search" />
                      <ProductTile name="Sentinel" subtitle="User 360" />
                    </div>
                  </div>

                  {/* Engagement Layer */}
                  <div className="bg-purple-800/50 border border-purple-700 rounded-lg p-4">
                    <h3 className="font-bold mb-2 text-center">Engagement Layer</h3>
                    <div className="grid grid-cols-4 gap-2">
                      <ProductTile name="Nexus Hub" subtitle="Omnichannel" />
                      <ProductTile name="Guardian" subtitle="Agent Assist" />
                      <ProductTile name="Resolver" subtitle="Ticketing" />
                      <ProductTile name="Pulse" subtitle="Outbound" />
                    </div>
                  </div>

                  {/* Integration Layer */}
                  <div className="bg-purple-800/50 border border-purple-700 rounded-lg p-4">
                    <h3 className="font-bold mb-2 text-center">Integration Layer</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <ProductTile name="Bridge" subtitle="100+ Integrations" />
                    </div>
                  </div>

                  {/* Insights Layer */}
                  <div className="bg-purple-800/50 border border-purple-700 rounded-lg p-4">
                    <h3 className="font-bold mb-2 text-center">Insights Layer</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <ProductTile name="Lens" subtitle="Qualitative Analysis" />
                      <ProductTile name="Metrics" subtitle="Quantitative Dashboard" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Tools */}
              <div className="flex flex-col justify-center gap-4">
                <div className="bg-purple-800/50 border border-purple-700 rounded-lg p-3 text-center rotate-90 transform origin-center h-64">
                  <h3 className="font-bold text-sm mb-1 -rotate-90">External Tools</h3>
                  <div className="flex flex-col gap-2 text-xs -rotate-90">
                    <span className="bg-purple-700/70 px-2 py-1 rounded">APIs</span>
                    <span className="bg-purple-700/70 px-2 py-1 rounded">Databases</span>
                    <span className="bg-purple-700/70 px-2 py-1 rounded">Cloud Services</span>
                    <span className="bg-purple-700/70 px-2 py-1 rounded">Custom Tools</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Lifecycle Flow */}
            <div className="mt-4 grid grid-cols-5 gap-2">
              <div className="col-span-1"></div>
              <div className="col-span-3">
                <div className="bg-indigo-800/50 border border-indigo-700 rounded-lg p-3">
                  <h3 className="font-bold text-sm mb-2 text-center">Support Lifecycle Flow</h3>
                  <div className="flex justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xs">
                        1
                      </div>
                      <span className="text-xs mt-1">Build</span>
                    </div>
                    <div className="flex-1 border-t border-dashed border-yellow-400/50 self-center mx-1"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xs">
                        2
                      </div>
                      <span className="text-xs mt-1">Empower</span>
                    </div>
                    <div className="flex-1 border-t border-dashed border-yellow-400/50 self-center mx-1"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xs">
                        3
                      </div>
                      <span className="text-xs mt-1">Engage</span>
                    </div>
                    <div className="flex-1 border-t border-dashed border-yellow-400/50 self-center mx-1"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xs">
                        4
                      </div>
                      <span className="text-xs mt-1">Integrate</span>
                    </div>
                    <div className="flex-1 border-t border-dashed border-yellow-400/50 self-center mx-1"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xs">
                        5
                      </div>
                      <span className="text-xs mt-1">Analyze</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-lg p-4 text-center">
            <h3 className="font-bold text-yellow-400 mb-2">End-to-End Solution</h3>
            <p className="text-sm">
              Complete platform covering the entire support lifecycle from agent creation to insights
            </p>
          </div>
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-lg p-4 text-center">
            <h3 className="font-bold text-yellow-400 mb-2">Agentic Intelligence</h3>
            <p className="text-sm">
              AI agents that autonomously understand, reason, and take actions to resolve customer issues
            </p>
          </div>
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-lg p-4 text-center">
            <h3 className="font-bold text-yellow-400 mb-2">Enterprise Ready</h3>
            <p className="text-sm">
              Secure, scalable architecture with extensive integration capabilities for enterprise deployment
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-purple-300">
          <p>© 2025 Yellow.AI | The Complete Agentic Customer Service Platform</p>
        </footer>
      </div>
    </div>
  )
}

function ProductTile({ name, subtitle }: { name: string; subtitle: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-purple-700/50 border border-purple-600 rounded p-2 text-center cursor-help">
            <div className="font-medium text-yellow-400 text-sm">{name}</div>
            <div className="text-xs text-purple-200">{subtitle}</div>
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
