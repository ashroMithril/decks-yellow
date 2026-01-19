import { useState } from "react"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ProductArchitecture() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    creation: true,
    intelligence: false,
    engagement: false,
    integration: false,
    insights: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-indigo-950 text-white">
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 w-8 h-8 rounded-md"></div>
            <h1 className="text-2xl font-bold">Yellow.AI</h1>
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-950 font-medium">Book a Demo</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nexus Platform</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-purple-200">
            The complete agentic AI ecosystem for enterprise customer service automation
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          {/* Core Platform Visualization */}
          <div className="bg-purple-900/50 backdrop-blur-sm border border-purple-800 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Nexus Platform: The Agentic Core</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              The unified foundation that powers all Yellow.AI agentic capabilities, enabling seamless integration
              across the entire support lifecycle
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
              {["Creation Layer", "Intelligence Layer", "Engagement Layer", "Integration Layer", "Insights Layer"].map(
                (layer) => (
                  <div key={layer} className="bg-purple-800/50 border border-purple-700 rounded-lg p-3 font-medium">
                    {layer}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Creation Layer */}
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-xl overflow-hidden">
            <div
              className="p-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("creation")}
            >
              <h2 className="text-2xl font-bold">Creation Layer</h2>
              {expandedSections.creation ? <ChevronUp /> : <ChevronDown />}
            </div>

            {expandedSections.creation && (
              <div className="p-6 pt-0 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <ProductCard
                  title="Architect"
                  subtitle="AI Agent Builder"
                  description="Intuitive platform for building sophisticated AI agents with dynamic conversation capabilities and no-code workflows"
                />
                <ProductCard
                  title="Copilot"
                  subtitle="Agent Development Assistant"
                  description="AI-powered assistant that helps build and debug agents, offering suggestions and automating repetitive tasks"
                />
                <ProductCard
                  title="Blueprint"
                  subtitle="Agent Marketplace"
                  description="Library of pre-built agent templates for various industries and use cases to accelerate deployment"
                />
                <ProductCard
                  title="Conductor"
                  subtitle="Multi-Agent Orchestration"
                  description="Coordinate multiple specialized agents to handle complex customer journeys with seamless handoffs"
                />
              </div>
            )}
          </div>

          {/* Intelligence Layer */}
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-xl overflow-hidden">
            <div
              className="p-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("intelligence")}
            >
              <h2 className="text-2xl font-bold">Intelligence Layer</h2>
              {expandedSections.intelligence ? <ChevronUp /> : <ChevronDown />}
            </div>

            {expandedSections.intelligence && (
              <div className="p-6 pt-0 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProductCard
                  title="Cognition"
                  subtitle="Dynamic Conversation Engine"
                  description="Advanced NLU that understands context, intent, and sentiment to enable natural, human-like conversations"
                />
                <ProductCard
                  title="Navigator"
                  subtitle="Agentic Workflows"
                  description="Intelligent automation of complex processes through API integrations and business logic"
                />
                <ProductCard
                  title="Prism"
                  subtitle="Multi-Modal Understanding"
                  description="Process and understand text, images, and video content for comprehensive information retrieval"
                />
                <ProductCard
                  title="Compass"
                  subtitle="Agentic Product Search"
                  description="Intelligent product discovery that understands customer needs and recommends relevant solutions"
                />
                <ProductCard
                  title="Sentinel"
                  subtitle="Secure User 360"
                  description="Privacy-first user profile management that securely shares information across channels"
                />
              </div>
            )}
          </div>

          {/* Engagement Layer */}
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-xl overflow-hidden">
            <div
              className="p-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("engagement")}
            >
              <h2 className="text-2xl font-bold">Engagement Layer</h2>
              {expandedSections.engagement ? <ChevronUp /> : <ChevronDown />}
            </div>

            {expandedSections.engagement && (
              <div className="p-6 pt-0 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <ProductCard
                  title="Nexus Hub"
                  subtitle="Omnichannel Experience"
                  description="Unified platform for voice, chat, and email across WhatsApp, Apple Business Chat, Facebook Messenger, and Microsoft Teams"
                />
                <ProductCard
                  title="Guardian"
                  subtitle="Human Helpdesk with Agent Assist"
                  description="Augmented support interface that empowers human agents with AI-powered suggestions and automation"
                />
                <ProductCard
                  title="Resolver"
                  subtitle="AI Ticketing Automation"
                  description="Intelligent ticket routing, prioritization, and resolution to streamline support operations"
                />
                <ProductCard
                  title="Pulse"
                  subtitle="Agentic Engagement Engine"
                  description="Proactive outbound communication for pre and post-conversation engagement via notifications"
                />
              </div>
            )}
          </div>

          {/* Integration Layer */}
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-xl overflow-hidden">
            <div
              className="p-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("integration")}
            >
              <h2 className="text-2xl font-bold">Integration Layer</h2>
              {expandedSections.integration ? <ChevronUp /> : <ChevronDown />}
            </div>

            {expandedSections.integration && (
              <div className="p-6 pt-0 grid gap-6">
                <ProductCard
                  title="Bridge"
                  subtitle="100+ Pre-built Integrations"
                  description="Extensive library of pre-authenticated integrations with enterprise systems and third-party services for seamless connectivity"
                />
              </div>
            )}
          </div>

          {/* Insights Layer */}
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-xl overflow-hidden">
            <div
              className="p-6 flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("insights")}
            >
              <h2 className="text-2xl font-bold">Insights Layer</h2>
              {expandedSections.insights ? <ChevronUp /> : <ChevronDown />}
            </div>

            {expandedSections.insights && (
              <div className="p-6 pt-0 grid gap-6 md:grid-cols-2">
                <ProductCard
                  title="Lens"
                  subtitle="Qualitative Conversation Analysis"
                  description="Deep analysis of conversations to extract insights on customer sentiment, pain points, and agent performance"
                />
                <ProductCard
                  title="Metrics"
                  subtitle="Quantitative Performance Dashboard"
                  description="Customizable analytics platform with access to all operational data for measuring and optimizing performance"
                />
              </div>
            )}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">The Complete Support Lifecycle</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Yellow.AI's Nexus Platform provides end-to-end support across the entire customer journey, from agent
            creation to insights generation
          </p>

          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-800 rounded-xl p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
              <div className="flex-1">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xl mx-auto mb-3">
                  1
                </div>
                <h3 className="font-bold mb-2">Build</h3>
                <p className="text-sm">Create intelligent agents with Architect, Copilot, and Blueprint</p>
              </div>

              <div className="flex-1">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xl mx-auto mb-3">
                  2
                </div>
                <h3 className="font-bold mb-2">Empower</h3>
                <p className="text-sm">Enhance with Cognition, Navigator, Prism, and Compass</p>
              </div>

              <div className="flex-1">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xl mx-auto mb-3">
                  3
                </div>
                <h3 className="font-bold mb-2">Engage</h3>
                <p className="text-sm">Connect through Nexus Hub, Guardian, Resolver, and Pulse</p>
              </div>

              <div className="flex-1">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xl mx-auto mb-3">
                  4
                </div>
                <h3 className="font-bold mb-2">Integrate</h3>
                <p className="text-sm">Connect with Bridge to 100+ enterprise systems</p>
              </div>

              <div className="flex-1">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-950 font-bold text-xl mx-auto mb-3">
                  5
                </div>
                <h3 className="font-bold mb-2">Analyze</h3>
                <p className="text-sm">Optimize with Lens and Metrics insights</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Customer Support?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Experience the power of Yellow.AI's Nexus Platform and see how our agentic approach can revolutionize your
            customer service
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-950 font-medium text-lg px-8 py-6">
            Book a Demo Today
          </Button>
        </div>
      </main>

      <footer className="container mx-auto py-12 px-4 border-t border-purple-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 w-8 h-8 rounded-md"></div>
            <h1 className="text-2xl font-bold">Yellow.AI</h1>
          </div>
          <p className="text-purple-300">© 2025 Yellow.AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-purple-300 hover:text-yellow-400">
              Terms
            </a>
            <a href="#" className="text-purple-300 hover:text-yellow-400">
              Privacy
            </a>
            <a href="#" className="text-purple-300 hover:text-yellow-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProductCard({ title, subtitle, description }: { title: string; subtitle: string; description: string }) {
  return (
    <TooltipProvider>
      <div className="bg-purple-800/50 border border-purple-700 rounded-lg p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-yellow-400">{title}</h3>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-purple-300 hover:text-yellow-400">
                <Info className="h-4 w-4" />
                <span className="sr-only">More info</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">{description}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="text-sm text-purple-200 mb-4">{subtitle}</p>
        <p className="text-xs text-purple-300 line-clamp-3">{description}</p>
      </div>
    </TooltipProvider>
  )
}
