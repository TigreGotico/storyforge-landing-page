export default function Home() {
  return (
    <section className="min-h-screen py-16 px-8 border-b border-terminal-green-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-terminal-green-dark mb-8">
          ════════════════════════════════════════════════════════════════════════════════
        </div>
        
        <div className="text-[72px] mb-4 text-glow tracking-wider">
          <span className="text-terminal-green mr-4">&gt;</span> StoryForge
        </div>
        
        <h1 className="text-4xl mb-12 text-terminal-green-dim font-normal">
          Build Dynamic Interactive Worlds with StoryForge
        </h1>
        
        <div className="text-terminal-green-dark text-2xl my-8 space-y-2">
          <div># Open-source engine for procedurally generated,</div>
          <div># LLM-powered narrative adventures</div>
        </div>

        <div className="my-12 space-y-4">
          <div className="text-2xl text-shadow-sm pl-8">
            [✓] LLM-powered world, character, and dialogue generation
          </div>
          <div className="text-2xl text-shadow-sm pl-8">
            [✓] Simple modular engine architecture
          </div>
          <div className="text-2xl text-shadow-sm pl-8">
            [✓] Autonomous self-play testing with LLM agents
          </div>
        </div>

        <div className="my-16 flex gap-8 flex-wrap">
          <button className="bg-transparent border-2 border-terminal-green text-terminal-green px-8 py-4 text-2xl cursor-pointer transition-all duration-200 text-shadow-sm hover:bg-terminal-green hover:text-terminal-bg hover:shadow-[0_0_20px_#00ff00]">
            $ ./get_started.sh
          </button>
          <button className="bg-transparent border-2 border-terminal-green text-terminal-green px-8 py-4 text-2xl cursor-pointer transition-all duration-200 text-shadow-sm hover:bg-terminal-green hover:text-terminal-bg hover:shadow-[0_0_20px_#00ff00]">
            $ download_storyforge
          </button>
        </div>

        <div className="mt-16 text-2xl">
          <span className="text-terminal-green text-shadow-sm">user@storyforge:~$</span>
          <span className="animate-blink font-bold">_</span>
        </div>
      </div>
    </section>
  )
}
