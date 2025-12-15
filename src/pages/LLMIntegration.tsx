export default function LLMIntegration() {
  return (
    <section className="min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
          <h2 className="text-4xl my-4 text-terminal-green text-glow font-normal">
            &gt; cat /docs/llm_integration.txt
          </h2>
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
        </div>

        <div className="my-8">
          <h3 className="text-3xl text-terminal-green-dark my-6 font-normal">
            # PROCEDURAL GENERATION
          </h3>
          
          <div className="my-6 leading-loose space-y-2">
            <p>Prompt-driven world generation with reproducibility and control.</p>
            <p>Reference implementation: procedural_map.py</p>
          </div>

          <div className="bg-[#0f0f0f] border-l-[3px] border-terminal-green p-6 my-8 text-lg leading-loose whitespace-pre-wrap shadow-[inset_0_0_10px_rgba(0,255,0,0.1)]">
{`[LLM] Generating new room...
[MAP] Coordinates: (3, -1)
[DESC] A narrow stone corridor dripping with moisture.
[OBJ] Generated 3 interactive objects
[EXIT] Connected to rooms: (2, -1), (3, -2)
[STATUS] Room generation complete`}
          </div>

          <h3 className="text-3xl text-terminal-green-dark my-6 font-normal">
            # DYNAMIC BACKGROUND EVENTS
          </h3>
          
          <div className="my-6 leading-loose space-y-2">
            <p>Events triggered without player commands.</p>
            <p>Adds atmosphere and emergent behavior.</p>
            <p>Examples: sounds, NPC actions, environmental changes.</p>
          </div>

          <div className="bg-[#0f0f0f] border-l-[3px] border-terminal-green p-6 my-8 text-lg leading-loose whitespace-pre-wrap shadow-[inset_0_0_10px_rgba(0,255,0,0.1)]">
{`[EVENT] A distant bell tolls three times
[EVENT] The bartender wipes down the counter
[EVENT] Rain begins to patter against the windows
[EVENT] A patron laughs loudly in the corner`}
          </div>

          <h3 className="text-3xl text-terminal-green-dark my-6 font-normal">
            # AUTONOMOUS NPCs
          </h3>
          
          <div className="my-6 leading-loose space-y-2">
            <p>NPCs have personality state and memory.</p>
            <p>Dialogue generated at runtime.</p>
            <p>Reference implementation: llm_pub.py</p>
          </div>

          <div className="bg-[#0f0f0f] border-l-[3px] border-terminal-green p-6 my-8 text-lg leading-loose whitespace-pre-wrap shadow-[inset_0_0_10px_rgba(0,255,0,0.1)]">
{`> talk to bartender

[NPC] Bartender (cautious, remembers previous interaction)
Bartender: "Back again? I told you last time, I don't know 
           anything about the Guild. But..."
           *leans closer*
           "If you're asking, maybe you're not with them."

[MEMORY] Updated: Bartender now trusts player +1
[STATE] Bartender mood: cautious -> neutral`}
          </div>
        </div>
      </div>
    </section>
  )
}
