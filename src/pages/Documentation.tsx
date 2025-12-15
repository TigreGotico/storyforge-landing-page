export default function Documentation() {
  return (
    <section className="min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
          <h2 className="text-4xl my-4 text-terminal-green text-glow font-normal">
            &gt; man storyforge
          </h2>
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
        </div>

        <div className="my-8">
          <div className="text-3xl my-12 leading-loose space-y-4">
            <p>Ready to build?</p>
            <p>Access the full API documentation below.</p>
          </div>

          <div className="my-12 text-2xl">
            <a 
              href="#" 
              className="text-terminal-green border border-terminal-green-dark px-8 py-4 inline-block transition-all duration-200 hover:bg-terminal-green hover:text-terminal-bg hover:shadow-[0_0_20px_#00ff00]"
            >
              → /usr/share/doc/storyforge/api/index.html
            </a>
          </div>

          <div className="bg-[#0f0f0f] border-l-[3px] border-terminal-green p-6 my-12 text-lg leading-loose whitespace-pre-wrap shadow-[inset_0_0_10px_rgba(0,255,0,0.1)]">
{`NAME
    StoryForge - LLM-powered interactive fiction engine

SYNOPSIS
    from storyforge import IFGameEngine, GameScene, GameObject

DESCRIPTION
    StoryForge provides a minimal abstraction layer for building
    dynamic interactive narratives with LLM integration.
    
    Core systems include deterministic input parsing, modular
    scene architecture, and runtime content generation.

SEE ALSO
    GitHub repository, example implementations, community forum`}
          </div>
        </div>
      </div>
    </section>
  )
}
