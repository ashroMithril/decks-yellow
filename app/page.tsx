"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Presentation,
  Plus,
  ArrowRight,
  Sparkles,
  Building2,
  Users,
  Calendar,
} from "lucide-react"

// Presentation card component
const PresentationCard = ({
  title,
  description,
  href,
  icon: Icon,
  color,
  delay = 0,
  tags,
  date,
}: {
  title: string
  description: string
  href: string
  icon: React.ElementType
  color: string
  delay?: number
  tags: string[]
  date: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Link href={href}>
      <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-[#5A3BFE]/30 transition-all duration-300 cursor-pointer h-full">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-1 text-gray-400 group-hover:text-[#5A3BFE] transition-colors">
            <span className="text-sm font-medium">Open</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-[#281C46] mb-2 group-hover:text-[#5A3BFE] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{date}</span>
        </div>
      </div>
    </Link>
  </motion.div>
)

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const presentations = [
    {
      title: "Yellow.ai Main Deck",
      description: "Comprehensive overview of Yellow.ai's Agentic AI platform, capabilities, and enterprise solutions for customer experience automation.",
      href: "/main",
      icon: Building2,
      color: "bg-[#5A3BFE]",
      tags: ["Product Overview", "Agentic AI", "Enterprise"],
      date: "February 2026",
    },
    {
      title: "Forrester Wave Deck",
      description: "Executive briefing for Forrester Wave evaluation showcasing Yellow.ai's leadership in conversational AI platforms.",
      href: "/presentation",
      icon: Presentation,
      color: "bg-[#00694D]",
      tags: ["Forrester", "Analyst Briefing", "Awards"],
      date: "February 2026",
    },
    {
      title: "Meta Partnership Deck",
      description: "Strategic partnership alignment presentation for Meta leadership, covering partnership history and future roadmap.",
      href: "/meta",
      icon: Users,
      color: "bg-[#0668E1]",
      tags: ["Partnership", "Meta", "WhatsApp"],
      date: "February 2026",
    },
  ]

  const filteredPresentations = presentations.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/yellow-ai-logo.png"
              alt="Yellow.ai"
              className="h-8 w-auto"
            />
            <div className="h-6 w-px bg-gray-200" />
            <span className="text-sm font-medium text-gray-600">Presentation Studio</span>
          </div>
          <button className="flex items-center gap-2 bg-[#5A3BFE] text-white px-4 py-2 rounded-lg hover:bg-[#5A3BFE]/90 transition-colors text-sm font-medium">
            <Plus className="w-4 h-4" />
            New Presentation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#F8D57E]/20 text-[#281C46] px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#5A3BFE]" />
            <span className="text-sm font-medium">AI-Powered Presentations</span>
          </div>
          <h1 className="text-5xl font-bold text-[#281C46] mb-4">
            Yellow.ai Presentation Studio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create, manage, and deliver compelling presentations for your enterprise needs
          </p>
        </motion.div>

        {/* Search/Input Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search presentations or describe what you want to create..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-100/50 focus:outline-none focus:ring-2 focus:ring-[#5A3BFE]/20 focus:border-[#5A3BFE] text-gray-800 placeholder:text-gray-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5A3BFE] text-white px-4 py-2 rounded-xl hover:bg-[#5A3BFE]/90 transition-colors flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Generate</span>
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-3">
            Use AI to generate new presentations or search existing decks
          </p>
        </motion.div>

        {/* Presentations Grid */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-[#281C46] mb-6"
          >
            Your Presentations
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPresentations.map((presentation, index) => (
              <PresentationCard
                key={presentation.href}
                {...presentation}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>

          {filteredPresentations.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-gray-500"
            >
              <Presentation className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No presentations found matching your search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/yellow-ai-logo.png" alt="Yellow.ai" className="h-6 w-auto opacity-50" />
            <span className="text-sm text-gray-400">© 2026 Yellow.ai</span>
          </div>
          <p className="text-sm text-gray-400">
            Powered by Agentic AI
          </p>
        </div>
      </footer>
    </div>
  )
}
