export default function Pricing() {
  return (
    <section className="min-h-screen py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
          <h2 className="text-4xl my-4 text-terminal-green text-glow font-normal">
            &gt; cat /LICENSE
          </h2>
          <div className="text-terminal-green-dark text-lg mb-4">
            ════════════════════════════════════════════════════════════════════════════════
          </div>
        </div>

        <div className="my-8">
          <h3 className="text-3xl text-terminal-green-dark my-12 font-normal">
            # STORYFORGE LICENSING
          </h3>
          
          <div className="my-12 space-y-8">
            <div className="my-8 p-6 border-2 border-terminal-green-dark bg-[#0f0f0f]">
              <div className="text-3xl text-terminal-green mb-2 text-shadow-sm">
                AGPL License     : 15€
              </div>
              <div className="text-[22px] text-terminal-green-dim ml-8">
                - Required for open-source derivative works
              </div>
            </div>

            <div className="my-8 p-6 border-2 border-terminal-green-dark bg-[#0f0f0f]">
              <div className="text-3xl text-terminal-green mb-2 text-shadow-sm">
                Apache 2.0      : 50€
              </div>
              <div className="text-[22px] text-terminal-green-dim ml-8">
                - Required for commercial products
              </div>
            </div>
          </div>

          <div className="my-8 p-6 border-l-[3px] border-terminal-green-dark leading-loose space-y-2">
            <p>All purchases grant perpetual license to the current version.</p>
            <p>Source code access included with both options.</p>
            <p>No recurring fees. No telemetry. No lock-in.</p>
          </div>

          <div className="my-16">
            <button className="bg-transparent border-2 border-terminal-green text-terminal-green px-8 py-4 text-2xl cursor-pointer transition-all duration-200 text-shadow-sm hover:bg-terminal-green hover:text-terminal-bg hover:shadow-[0_0_20px_#00ff00]">
              $ choose_license
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
