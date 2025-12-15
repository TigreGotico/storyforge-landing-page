export default function Demos() {
  return (
    <section className="min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
          <h2 className="text-4xl my-4 text-terminal-green text-glow font-normal">
            &gt; ls -la /demos
          </h2>
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
        </div>

        <div className="my-8">
          <pre className="bg-[#0f0f0f] border border-terminal-green-dark p-8 my-8 text-xl leading-loose whitespace-pre overflow-x-auto shadow-[inset_0_0_10px_rgba(0,255,0,0.1)]">
{`/demos
 ├── room_demo.py        # Single-room interaction basics
 ├── eldritch_escape.py  # Resource-driven narrative design
 ├── procedural_map.py   # Infinite world generation
 ├── llm_pub.py          # LLM-driven NPC simulation
 └── self_play.py        # Agent-based automated testing`}
          </pre>

          <div className="mt-12 space-y-12">
            <div className="my-12 p-8 border-l-[3px] border-terminal-green-dark bg-[#0f0f0f]">
              <h3 className="text-2xl text-terminal-green mb-4 font-normal">## room_demo.py</h3>
              <div className="space-y-3 leading-loose">
                <p><span className="text-terminal-green font-bold">Purpose:</span> Introduction to basic object interaction</p>
                <p><span className="text-terminal-green font-bold">Showcases:</span> GameObject system, interaction handlers, state management</p>
                <p><span className="text-terminal-green font-bold">Technical Value:</span> Foundation for understanding engine abstraction layers</p>
              </div>
            </div>

            <div className="my-12 p-8 border-l-[3px] border-terminal-green-dark bg-[#0f0f0f]">
              <h3 className="text-2xl text-terminal-green mb-4 font-normal">## eldritch_escape.py</h3>
              <div className="space-y-3 leading-loose">
                <p><span className="text-terminal-green font-bold">Purpose:</span> Resource management in narrative context</p>
                <p><span className="text-terminal-green font-bold">Showcases:</span> State tracking, conditional logic, branching narratives</p>
                <p><span className="text-terminal-green font-bold">Technical Value:</span> Demonstrates how game mechanics emerge from simple abstractions</p>
              </div>
            </div>

            <div className="my-12 p-8 border-l-[3px] border-terminal-green-dark bg-[#0f0f0f]">
              <h3 className="text-2xl text-terminal-green mb-4 font-normal">## procedural_map.py</h3>
              <div className="space-y-3 leading-loose">
                <p><span className="text-terminal-green font-bold">Purpose:</span> Infinite procedural world generation</p>
                <p><span className="text-terminal-green font-bold">Showcases:</span> LLM-driven content creation, coordinate-based world state</p>
                <p><span className="text-terminal-green font-bold">Technical Value:</span> Proof of concept for scalable dynamic worlds</p>
              </div>
            </div>

            <div className="my-12 p-8 border-l-[3px] border-terminal-green-dark bg-[#0f0f0f]">
              <h3 className="text-2xl text-terminal-green mb-4 font-normal">## llm_pub.py</h3>
              <div className="space-y-3 leading-loose">
                <p><span className="text-terminal-green font-bold">Purpose:</span> Autonomous NPC behavior and conversation</p>
                <p><span className="text-terminal-green font-bold">Showcases:</span> Runtime dialogue generation, NPC memory, personality systems</p>
                <p><span className="text-terminal-green font-bold">Technical Value:</span> Architecture for emergent social interactions</p>
              </div>
            </div>

            <div className="my-12 p-8 border-l-[3px] border-terminal-green-dark bg-[#0f0f0f]">
              <h3 className="text-2xl text-terminal-green mb-4 font-normal">## self_play.py</h3>
              <div className="space-y-3 leading-loose">
                <p><span className="text-terminal-green font-bold">Purpose:</span> Automated testing via LLM agents</p>
                <p><span className="text-terminal-green font-bold">Showcases:</span> Agent-based exploration, automated QA, edge case discovery</p>
                <p><span className="text-terminal-green font-bold">Technical Value:</span> Novel approach to testing interactive narrative systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
