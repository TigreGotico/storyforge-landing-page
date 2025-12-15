import { useState } from 'react'
import { CONTENT } from '../content'
import ASCIIText from './ASCIIText'

interface WebUIProps {
  onSwitchToTerminal: () => void
}

export default function WebUI({ onSwitchToTerminal }: WebUIProps) {
  const [activeSection, setActiveSection] = useState('home')

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'concepts', label: 'Core Concepts' },
    { id: 'llm', label: 'LLM Integration' },
    { id: 'demos', label: 'Demos' },
    { id: 'license', label: 'Pricing' },
    { id: 'docs', label: 'Docs' },
  ]

  return (
    <div className="h-screen bg-[#0a0a0a] text-[#00ff00] font-mono flex flex-col overflow-hidden">
      {/* Scanlines */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, black 1px, black 2px)',
        backgroundSize: '100% 2px'
      }} />
      
      {/* CRT glow */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-20" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,255,0,0.1) 0%, transparent 70%)'
      }} />

      {/* Header */}
      <header className="relative z-10 border-b border-[#00ff00]/30 bg-[#0a0a0a]/90 backdrop-blur sticky top-0 flex-shrink-0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold" style={{ textShadow: '0 0 10px #00ff00' }}>
              {'>'} StoryForge
            </span>
            <span className="text-[#00ff00]/50 text-sm">v1.0.0</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`text-sm hover:text-white transition-colors ${
                  activeSection === section.id ? 'text-white' : 'text-[#00ff00]/70'
                }`}
                style={{ textShadow: activeSection === section.id ? '0 0 5px #00ff00' : 'none' }}
              >
                [{section.label}]
              </button>
            ))}
          </nav>

          <button
            onClick={onSwitchToTerminal}
            className="text-sm border border-[#00ff00]/50 px-3 py-1 hover:bg-[#00ff00]/10 transition-colors"
          >
            $ terminal
          </button>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain" style={{
        scrollBehavior: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          {activeSection === 'home' && <HomeSection />}
          {activeSection === 'concepts' && <ConceptsSection />}
          {activeSection === 'llm' && <LLMSection />}
          {activeSection === 'demos' && <DemosSection />}
          {activeSection === 'license' && <LicenseSection />}
          {activeSection === 'docs' && <DocsSection />}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#00ff00]/30 py-6 flex-shrink-0 bg-[#0a0a0a]/90">
        <div className="max-w-6xl mx-auto px-6 text-center text-[#00ff00]/50 text-sm">
          <p>StoryForge © 2024 | AGPL / Apache 2.0</p>
          <p className="mt-1">github.com/storyforge/engine</p>
        </div>
      </footer>
    </div>
  )
}

function HomeSection() {
  return (
    <div className="space-y-16">
      {/* Hero with ASCII Animation */}
      <section className="text-center py-8">
        <div className="h-[200px] w-full mb-8 flex items-center justify-center overflow-hidden">
          <ASCIIText 
            text="StoryForge" 
            enableWaves={false}
            asciiFontSize={10}
            textFontSize={50}
            planeBaseHeight={8}
            textColor="#00ff00"
          />
        </div>
        
        <p className="text-xl md:text-2xl text-[#00ff00]/80 mb-4">
          {CONTENT.hero.title}
        </p>
        
        <div className="text-[#00ff00]/60 space-y-1 mb-12 font-mono text-sm">
          {CONTENT.hero.subtitle.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="text-[#00ff00]/50 text-xs mb-12 whitespace-pre-wrap">
          {CONTENT.divider}
        </div>

        <div className="space-y-2 mb-12 text-left max-w-2xl mx-auto text-[#00ff00]/80">
          {CONTENT.hero.features.map((feature, i) => (
            <p key={i}>{feature}</p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-[#00ff00] text-black font-bold hover:bg-[#00cc00] transition-colors">
            {CONTENT.hero.cta_primary}
          </button>
          <a 
            href="https://github.com/storyforge/engine" 
            className="px-8 py-3 border border-[#00ff00] hover:bg-[#00ff00]/10 transition-colors"
          >
            {CONTENT.hero.cta_secondary}
          </a>
        </div>
        
        <div className="text-[#00ff00]/50 text-xs whitespace-pre-wrap">
          {CONTENT.divider}
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8">
        {CONTENT.features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </section>

      {/* Code Example */}
      <section className="border border-[#00ff00]/30 bg-[#050505] p-6">
        <div className="flex items-center gap-2 mb-4 text-[#00ff00]/50 text-sm">
          <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
          <span className="ml-4">storyforge_demo.py</span>
        </div>
        <pre className="text-sm overflow-x-auto whitespace-pre-wrap break-words">
          {CONTENT.code_example}
        </pre>
      </section>
    </div>
  )
}

function FeatureCard({ title, description, status }: { title: string; description: string; status: string }) {
  return (
    <div className="border border-[#00ff00]/30 p-6 hover:border-[#00ff00]/60 transition-colors">
      <div className="text-[#00ff00] mb-2">{status}</div>
      <h3 className="text-lg font-bold mb-3" style={{ textShadow: '0 0 5px #00ff00' }}>{title}</h3>
      <p className="text-[#00ff00]/70 text-sm">{description}</p>
    </div>
  )
}

function ConceptsSection() {
  return (
    <div className="space-y-12">
      <div className="h-[60px] w-full mb-4 flex items-center justify-center overflow-hidden">
        <ASCIIText 
          text="CONCEPTS" 
          asciiFontSize={3}
          textFontSize={50}
          textColor="#00ff00"
          planeBaseHeight={3}
          enableWaves={false}
        />
      </div>

      <div className="space-y-8">
        {CONTENT.sections.concepts.items.map((item, i) => (
          <div key={i} className="border border-[#00ff00]/30 p-6">
            <h3 className="text-xl font-bold mb-4">{item.name}</h3>
            <p className="text-[#00ff00]/70 mb-4">
              {item.description}
            </p>
            {item.points && (
              <ul className="space-y-2 text-[#00ff00]/60 text-sm">
                {item.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            )}
            {item.code && (
              <pre className="bg-[#050505] p-4 text-sm mt-4 overflow-x-auto">
                {item.code}
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function LLMSection() {
  return (
    <div className="space-y-12">
      <div className="h-[60px] w-full mb-4 flex items-center justify-center overflow-hidden">
        <ASCIIText 
          text="LLM" 
          asciiFontSize={3}
          textFontSize={50}
          textColor="#00ff00"
          planeBaseHeight={3}
          enableWaves={false}
        />
      </div>
      
      <div className="space-y-8">
        {CONTENT.sections.llm.subsections.map((subsection, i) => (
          <div key={i} className="border border-[#00ff00]/30 p-6">
            <h3 className="text-xl font-bold mb-4">{subsection.name}</h3>
            <p className="text-[#00ff00]/70 mb-4">{subsection.description}</p>
            <ul className="space-y-2 text-[#00ff00]/60 text-sm">
              {subsection.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function DemosSection() {
  return (
    <div className="space-y-12">
      <div className="h-[60px] w-full mb-4 flex items-center justify-center overflow-hidden">
        <ASCIIText 
          text="DEMOS" 
          asciiFontSize={3}
          textFontSize={50}
          textColor="#00ff00"
          planeBaseHeight={3}
          enableWaves={false}
        />
      </div>

      <div className="border border-[#00ff00]/30 p-4 bg-[#050505] text-sm">
        <pre>
{`/demos
├── room_demo.py        # Single-room interaction basics
├── eldritch_escape.py  # Resource-driven narrative design
├── procedural_map.py   # Infinite world generation
├── llm_pub.py          # LLM-driven NPC simulation
└── self_play.py        # Agent-based automated testing`}
        </pre>
      </div>

      <div className="space-y-6">
        {CONTENT.sections.demos.items.map((demo, idx) => (
          <div key={idx} className="border border-[#00ff00]/30 p-6 hover:border-[#00ff00]/60 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold">{demo.name}</h3>
              <span className="text-xs text-[#00ff00]/50 border border-[#00ff00]/30 px-2 py-1">
                {demo.complexity}
              </span>
            </div>
            <p className="text-[#00ff00]/70">{demo.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function LicenseSection() {
  return (
    <div className="space-y-12">
      <div className="h-[60px] w-full mb-4 flex items-center justify-center overflow-hidden">
        <ASCIIText 
          text="PRICING" 
          asciiFontSize={3}
          textFontSize={50}
          textColor="#00ff00"
          planeBaseHeight={3}
          enableWaves={false}
        />
      </div>

      <p className="text-[#00ff00]/70">
        StoryForge is open-source but requires a license for commercial distribution. 
        The same code is available under two different licenses.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="border border-[#00ff00]/30 p-8">
          <h3 className="text-2xl font-bold mb-2">AGPL License</h3>
          <p className="text-4xl font-bold mb-6" style={{ textShadow: '0 0 10px #00ff00' }}>15€</p>
          <ul className="space-y-3 text-[#00ff00]/70">
            <li>• For open-source derivative works</li>
            <li>• Modifications must be shared under AGPL</li>
            <li>• Suitable for research projects</li>
            <li>• Community support</li>
          </ul>
          <button className="w-full mt-8 py-3 border border-[#00ff00] hover:bg-[#00ff00]/10 transition-colors">
            $ purchase --license agpl
          </button>
        </div>

        <div className="border-2 border-[#00ff00] p-8 relative">
          <div className="absolute -top-3 left-4 bg-[#0a0a0a] px-2 text-sm text-[#00ff00]">RECOMMENDED</div>
          <h3 className="text-2xl font-bold mb-2">Apache 2.0 License</h3>
          <p className="text-4xl font-bold mb-6" style={{ textShadow: '0 0 10px #00ff00' }}>50€</p>
          <ul className="space-y-3 text-[#00ff00]/70">
            <li>• For commercial products</li>
            <li>• Keep modifications proprietary</li>
            <li>• No copyleft obligations</li>
            <li>• Priority support available</li>
          </ul>
          <button className="w-full mt-8 py-3 bg-[#00ff00] text-black font-bold hover:bg-[#00cc00] transition-colors">
            $ purchase --license apache
          </button>
        </div>
      </div>

      <div className="border border-[#00ff00]/30 p-6 mt-8">
        <h4 className="font-bold mb-4">FAQ</h4>
        <div className="space-y-4 text-[#00ff00]/70 text-sm">
          <p><strong className="text-[#00ff00]">Q: Can I try before buying?</strong><br/>
          Yes. The engine is on GitHub. License is only required for distribution.</p>
          <p><strong className="text-[#00ff00]">Q: Do I need a license for personal projects?</strong><br/>
          No. Personal, non-distributed projects don't require a license.</p>
          <p><strong className="text-[#00ff00]">Q: What about games sold on Steam/itch.io?</strong><br/>
          Commercial distribution requires the Apache 2.0 license.</p>
        </div>
      </div>
    </div>
  )
}

function DocsSection() {
  return (
    <div className="space-y-12">
      <div className="h-[60px] w-full mb-4 flex items-center justify-center overflow-hidden">
        <ASCIIText 
          text="DOCS" 
          asciiFontSize={3}
          textFontSize={50}
          textColor="#00ff00"
          planeBaseHeight={3}
          enableWaves={false}
        />
      </div>

      <div className="text-center py-12 border border-[#00ff00]/30">
        <p className="text-xl text-[#00ff00]/70 mb-8">Ready to build?</p>
        <a 
          href="https://docs.storyforge.dev" 
          className="inline-block px-8 py-4 bg-[#00ff00] text-black font-bold hover:bg-[#00cc00] transition-colors"
        >
          $ open docs.storyforge.dev
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <a href="#" className="block border border-[#00ff00]/30 p-6 hover:border-[#00ff00]/60 transition-colors">
          <h3 className="font-bold mb-2">API Reference</h3>
          <p className="text-[#00ff00]/50 text-sm">docs.storyforge.dev/api</p>
        </a>
        <a href="#" className="block border border-[#00ff00]/30 p-6 hover:border-[#00ff00]/60 transition-colors">
          <h3 className="font-bold mb-2">Getting Started</h3>
          <p className="text-[#00ff00]/50 text-sm">docs.storyforge.dev/quickstart</p>
        </a>
        <a href="#" className="block border border-[#00ff00]/30 p-6 hover:border-[#00ff00]/60 transition-colors">
          <h3 className="font-bold mb-2">Tutorials</h3>
          <p className="text-[#00ff00]/50 text-sm">docs.storyforge.dev/tutorials</p>
        </a>
        <a href="#" className="block border border-[#00ff00]/30 p-6 hover:border-[#00ff00]/60 transition-colors">
          <h3 className="font-bold mb-2">Examples</h3>
          <p className="text-[#00ff00]/50 text-sm">github.com/storyforge/examples</p>
        </a>
      </div>

      <div className="border border-[#00ff00]/30 p-6">
        <h3 className="font-bold mb-4">Quick Start</h3>
        <pre className="bg-[#050505] p-4 text-sm overflow-x-auto">
{`$ pip install storyforge
$ storyforge init my-game
$ cd my-game
$ storyforge run`}
        </pre>
      </div>

      <div className="border border-[#00ff00]/30 p-6">
        <h3 className="font-bold mb-4">Community</h3>
        <div className="space-y-2 text-[#00ff00]/70">
          <p>Discord: discord.gg/storyforge</p>
          <p>GitHub: github.com/storyforge/engine/discussions</p>
          <p>Twitter: @storyforge_dev</p>
        </div>
      </div>
    </div>
  )
}
