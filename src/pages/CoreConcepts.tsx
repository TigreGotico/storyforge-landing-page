export default function CoreConcepts() {
  return (
    <section className="min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
          <h2 className="text-4xl my-4 text-terminal-green text-glow font-normal">
            &gt; cat /docs/core_concepts.txt
          </h2>
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
        </div>

        <div className="my-8">
          <h3 className="text-3xl text-terminal-green-dark my-6 font-normal">
            # ENGINE ABSTRACTIONS
          </h3>
          
          <pre className="bg-[#0f0f0f] border border-terminal-green-dark p-8 my-8 text-lg leading-loose whitespace-pre overflow-x-auto shadow-[inset_0_0_10px_rgba(0,255,0,0.1)]">
{`┌─────────────────────────────────────────────────────────────────┐
│                        IFGameEngine                             │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  • Main runtime loop                                      │  │
│  │  • Scene management                                       │  │
│  │  • Game state coordination                                │  │
│  └───────────────────────────────────────────────────────────┘  │
│                             │                                   │
│                             ▼                                   │
│                        GameScene                                │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  • Represents a location or situation                     │  │
│  │  • Owns objects, logic, transitions                       │  │
│  └───────────────────────────────────────────────────────────┘  │
│                             │                                   │
│                             ▼                                   │
│                        GameObject                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  • Encapsulated entity                                    │  │
│  │  • Internal state                                         │  │
│  │  • Interaction handlers                                   │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘`}
          </pre>

          <h3 className="text-3xl text-terminal-green-dark my-6 font-normal">
            # INPUT PARSING
          </h3>
          
          <div className="my-6 leading-loose space-y-2">
            <p>Keyword-based parsing. Keywords extracted from player input.</p>
            <p>Intents defined via KeywordIntent.</p>
          </div>

          <pre className="bg-[#0f0f0f] border border-terminal-green-dark p-8 my-8 text-lg leading-loose whitespace-pre overflow-x-auto shadow-[inset_0_0_10px_rgba(0,255,0,0.1)]">
{`Intent: OPEN_DOOR
Required: ["open", "door"]
Optional: ["wooden", "locked"]

Intent: EXAMINE_OBJECT
Required: ["look", "examine"]
Optional: ["at", "closely"]`}
          </pre>

          <div className="my-6 leading-loose space-y-2">
            <p>Deterministic matching. No black-box NLP. Predictable behavior.</p>
            <p>Complete control over command interpretation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
