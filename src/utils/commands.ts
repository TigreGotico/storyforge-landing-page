type CommandFn = (arg?: string) => string

export const commands: Record<string, CommandFn> = {
  help: () => `
════════════════════════════════════════════════════════════════════════════════
                              AVAILABLE COMMANDS
════════════════════════════════════════════════════════════════════════════════

  NAVIGATION
  ──────────────────────────────────────────────────────────────────────────────
  help              Display this help message
  about             About StoryForge engine
  architecture      Engine architecture and abstractions
  llm               LLM integration and procedural generation
  demos             Demo projects and use cases
  license           Pricing and licensing information
  docs              Documentation and resources
  
  ACTIONS
  ──────────────────────────────────────────────────────────────────────────────
  download          Get installation instructions
  github            Open GitHub repository
  gui               Switch to graphical web interface
  
  SYSTEM
  ──────────────────────────────────────────────────────────────────────────────
  clear             Clear terminal screen
  ls                List directory contents
  cat <file>        Display file contents
  
  SHORTCUTS
  ──────────────────────────────────────────────────────────────────────────────
  Ctrl+L            Clear screen
  Tab               Auto-complete command
  ↑/↓               Navigate command history

════════════════════════════════════════════════════════════════════════════════
`,

  about: () => `
════════════════════════════════════════════════════════════════════════════════
                                ABOUT STORYFORGE
════════════════════════════════════════════════════════════════════════════════

  > StoryForge

  Open-source game engine for building dynamic, procedurally generated,
  LLM-powered interactive fiction and narrative adventures.

  ──────────────────────────────────────────────────────────────────────────────
  
  PHILOSOPHY
  
  StoryForge provides a minimal abstraction layer for developers who want
  complete control over their interactive narrative systems. No black boxes.
  No magic. Just clean, predictable architecture with optional LLM integration.

  ──────────────────────────────────────────────────────────────────────────────
  
  KEY FEATURES
  
  [✓] Modular engine architecture with clear abstractions
  [✓] Deterministic keyword-based input parsing
  [✓] LLM-powered procedural world generation
  [✓] Dynamic NPC dialogue and personality systems
  [✓] Autonomous agent-based playtesting
  [✓] Full control over game logic and state
  
  ──────────────────────────────────────────────────────────────────────────────
  
  IDEAL FOR
  
  • Interactive fiction developers
  • Game AI researchers
  • Narrative designers
  • Indie game developers
  • Educational projects
  
  ──────────────────────────────────────────────────────────────────────────────
  
  VERSION     1.0.0
  LICENSE     AGPL / Apache 2.0 (dual licensed)
  REPOSITORY  github.com/storyforge/engine

  Type "architecture" for technical details.
  Type "llm" for LLM integration information.

════════════════════════════════════════════════════════════════════════════════
`,

  architecture: () => `
════════════════════════════════════════════════════════════════════════════════
                             ENGINE ARCHITECTURE
════════════════════════════════════════════════════════════════════════════════

  # Core engine abstractions and systems

  ──────────────────────────────────────────────────────────────────────────────
  SYSTEM OVERVIEW
  ──────────────────────────────────────────────────────────────────────────────

  ┌─────────────────────────────────────────────────────────────────────────┐
  │                           IFGameEngine                                  │
  │  ┌─────────────────────────────────────────────────────────────────┐   │
  │  │  Main runtime loop    │  Scene management  │  State coordination │   │
  │  └─────────────────────────────────────────────────────────────────┘   │
  │                                    │                                    │
  │                                    ▼                                    │
  │  ┌─────────────────────────────────────────────────────────────────┐   │
  │  │                         GameScene                                │   │
  │  │   • Represents a location or situation                          │   │
  │  │   • Owns objects, logic, and transitions                        │   │
  │  │   • Handles scene-specific events                               │   │
  │  └─────────────────────────────────────────────────────────────────┘   │
  │                                    │                                    │
  │                                    ▼                                    │
  │  ┌─────────────────────────────────────────────────────────────────┐   │
  │  │                        GameObject                                │   │
  │  │   • Encapsulated entity with internal state                     │   │
  │  │   • Interaction handlers                                         │   │
  │  │   • Observable properties                                        │   │
  │  └─────────────────────────────────────────────────────────────────┘   │
  └─────────────────────────────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────────────────────────
  IFGameEngine
  ──────────────────────────────────────────────────────────────────────────────
  
  The main runtime coordinator. Manages:
  
  • Game loop execution
  • Scene transitions
  • Global state
  • Input/output routing
  • Event dispatching

  ──────────────────────────────────────────────────────────────────────────────
  GameScene
  ──────────────────────────────────────────────────────────────────────────────
  
  Discrete game locations or situations. Each scene:
  
  • Contains GameObjects
  • Defines available actions
  • Handles local events
  • Manages transitions to other scenes

  ──────────────────────────────────────────────────────────────────────────────
  GameObject
  ──────────────────────────────────────────────────────────────────────────────
  
  Encapsulated entities within scenes:
  
  • Items, NPCs, environmental features
  • Internal state management
  • Interaction handlers
  • Observable for UI binding

  ──────────────────────────────────────────────────────────────────────────────
  INPUT PARSING
  ──────────────────────────────────────────────────────────────────────────────
  
  Deterministic keyword-based parsing. No black-box NLP.
  Predictable, testable behavior.
  
  Example KeywordIntent definition:
  
  ┌────────────────────────────────────────────────────────────────────────┐
  │  Intent: OPEN_DOOR                                                     │
  │  Required: ["open", "door"]                                            │
  │  Optional: ["wooden", "locked", "front"]                               │
  │  Priority: 10                                                          │
  └────────────────────────────────────────────────────────────────────────┘
  
  Keywords extracted from player input and matched against defined intents.
  Highest priority match wins. Ties resolved by specificity.

════════════════════════════════════════════════════════════════════════════════
`,

  llm: () => `
════════════════════════════════════════════════════════════════════════════════
                              LLM INTEGRATION
════════════════════════════════════════════════════════════════════════════════

  # Procedural generation and dynamic content systems

  ──────────────────────────────────────────────────────────────────────────────
  PROCEDURAL WORLD GENERATION
  ──────────────────────────────────────────────────────────────────────────────
  
  Prompt-driven generation with full reproducibility control.
  Reference implementation: procedural_map.py
  
  Example generation log:
  
  ┌────────────────────────────────────────────────────────────────────────┐
  │  [LLM] Generating new room...                                          │
  │  [MAP] Coordinates: (3, -1)                                            │
  │  [MAP] Adjacent rooms: NORTH, WEST                                     │
  │  [LLM] Context tokens: 847                                             │
  │  [DESC] A narrow stone corridor dripping with moisture.                │
  │  [DESC] Torches flicker in rusted sconces along the walls.             │
  │  [OBJ] Generated: torch, wooden_crate, iron_door                       │
  │  [OK] Room cached at (3, -1)                                           │
  └────────────────────────────────────────────────────────────────────────┘
  
  Features:
  • Seed-based reproducibility
  • Contextual coherence via world state injection
  • Configurable detail levels
  • Caching for performance

  ──────────────────────────────────────────────────────────────────────────────
  DYNAMIC BACKGROUND EVENTS
  ──────────────────────────────────────────────────────────────────────────────
  
  Events triggered without player commands.
  Adds atmosphere and emergent behavior.
  
  Examples:
  • Distant sounds echoing through corridors
  • NPCs moving between locations
  • Environmental changes (weather, lighting)
  • Ambient narrative moments
  
  Events respect game state and maintain coherence.

  ──────────────────────────────────────────────────────────────────────────────
  AUTONOMOUS NPCs
  ──────────────────────────────────────────────────────────────────────────────
  
  NPCs with personality state and memory.
  Reference implementation: llm_pub.py
  
  Example conversation:
  
  ┌────────────────────────────────────────────────────────────────────────┐
  │  > talk to bartender                                                   │
  │                                                                        │
  │  [NPC:BARTENDER] Personality: gruff, suspicious, knows_local_rumors    │
  │  [NPC:BARTENDER] Memory: player_ordered_ale, player_asked_about_caves  │
  │                                                                        │
  │  The bartender looks up from polishing a glass. "Back again, are ye?   │
  │  Still asking about them caves? I told ye, nothing good comes from     │
  │  poking around up there."                                              │
  │                                                                        │
  │  > ask about the missing merchant                                      │
  │                                                                        │
  │  [NPC:BARTENDER] Updating memory: player_asked_about_merchant          │
  │                                                                        │
  │  He leans in closer, voice dropping. "The merchant? Aye, I saw him     │
  │  the night before he vanished. Nervous fellow. Kept looking over his   │
  │  shoulder. Paid in foreign coin."                                      │
  └────────────────────────────────────────────────────────────────────────┘
  
  Features:
  • Persistent memory across sessions
  • Personality-driven response generation
  • Relationship tracking
  • Knowledge boundaries (NPCs only know what they should)

  ──────────────────────────────────────────────────────────────────────────────
  SUPPORTED PROVIDERS
  ──────────────────────────────────────────────────────────────────────────────
  
  • OpenAI (GPT-4, GPT-3.5)
  • Anthropic (Claude 3 Opus, Sonnet, Haiku)
  • Local models via Ollama
  • Custom API endpoints

════════════════════════════════════════════════════════════════════════════════
`,

  demos: () => `
════════════════════════════════════════════════════════════════════════════════
                            DEMOS & USE CASES
════════════════════════════════════════════════════════════════════════════════

  /demos
  ├── room_demo.py        # Single-room interaction basics
  ├── eldritch_escape.py  # Resource-driven narrative design
  ├── procedural_map.py   # Infinite world generation
  ├── llm_pub.py          # LLM-driven NPC simulation
  └── self_play.py        # Agent-based automated testing

  ──────────────────────────────────────────────────────────────────────────────
  room_demo.py
  ──────────────────────────────────────────────────────────────────────────────
  
  PURPOSE     Learn basic engine concepts
  SHOWCASES   GameScene, GameObject, input parsing
  COMPLEXITY  Beginner
  
  A single room with interactive objects. Demonstrates the fundamental
  abstractions without additional complexity.

  ──────────────────────────────────────────────────────────────────────────────
  eldritch_escape.py
  ──────────────────────────────────────────────────────────────────────────────
  
  PURPOSE     Resource management in narrative games
  SHOWCASES   State tracking, branching narrative, time pressure
  COMPLEXITY  Intermediate
  
  A horror escape scenario with sanity mechanics, inventory puzzles,
  and multiple endings based on player choices.

  ──────────────────────────────────────────────────────────────────────────────
  procedural_map.py
  ──────────────────────────────────────────────────────────────────────────────
  
  PURPOSE     Infinite world generation
  SHOWCASES   LLM integration, caching, coordinate systems
  COMPLEXITY  Intermediate
  
  Generates an infinite, coherent world on-the-fly. Rooms are created
  as the player explores and cached for consistency.

  ──────────────────────────────────────────────────────────────────────────────
  llm_pub.py
  ──────────────────────────────────────────────────────────────────────────────
  
  PURPOSE     Dynamic NPC interactions
  SHOWCASES   NPC memory, personality, dialogue generation
  COMPLEXITY  Advanced
  
  A pub simulation with multiple NPCs, each with distinct personalities
  and memories. Demonstrates emergent social dynamics.

  ──────────────────────────────────────────────────────────────────────────────
  self_play.py
  ──────────────────────────────────────────────────────────────────────────────
  
  PURPOSE     Automated game testing
  SHOWCASES   LLM agents, test coverage, bug detection
  COMPLEXITY  Advanced
  
  Uses LLM agents to automatically play through your game, finding
  edge cases and testing narrative branches at scale.

════════════════════════════════════════════════════════════════════════════════
`,

  license: () => `
════════════════════════════════════════════════════════════════════════════════
                          PRICING AND LICENSING
════════════════════════════════════════════════════════════════════════════════

  StoryForge is dual-licensed to serve both open-source and commercial needs.

  ──────────────────────────────────────────────────────────────────────────────
  LICENSE OPTIONS
  ──────────────────────────────────────────────────────────────────────────────

  ┌────────────────────────────────────────────────────────────────────────┐
  │                                                                        │
  │   AGPL License                                          15€            │
  │   ─────────────────────────────────────────────────────────────────    │
  │   • Required for open-source derivative works                          │
  │   • Your modifications must be shared under AGPL                       │
  │   • Suitable for research and open-source projects                     │
  │   • Community support via GitHub                                       │
  │                                                                        │
  └────────────────────────────────────────────────────────────────────────┘

  ┌────────────────────────────────────────────────────────────────────────┐
  │                                                                        │
  │   Apache 2.0 License                                    50€            │
  │   ─────────────────────────────────────────────────────────────────    │
  │   • Required for commercial products                                   │
  │   • Keep your modifications proprietary                                │
  │   • No copyleft obligations                                            │
  │   • Priority support available                                         │
  │                                                                        │
  └────────────────────────────────────────────────────────────────────────┘

  ──────────────────────────────────────────────────────────────────────────────
  WHAT'S INCLUDED
  ──────────────────────────────────────────────────────────────────────────────
  
  Both licenses include:
  
  [✓] Full engine source code
  [✓] All demo projects
  [✓] Documentation
  [✓] Future updates (current major version)
  
  ──────────────────────────────────────────────────────────────────────────────
  FAQ
  ──────────────────────────────────────────────────────────────────────────────
  
  Q: Can I try before buying?
  A: Yes. The engine is available on GitHub. License is required for
     distribution of derivative works.
  
  Q: Do I need a license for personal projects?
  A: No. Personal, non-distributed projects don't require a license.
  
  Q: What about games sold on Steam/itch.io?
  A: Commercial distribution requires the Apache 2.0 license.

  ──────────────────────────────────────────────────────────────────────────────
  
  $ purchase --license agpl
  $ purchase --license apache

════════════════════════════════════════════════════════════════════════════════
`,

  docs: () => `
════════════════════════════════════════════════════════════════════════════════
                              DOCUMENTATION
════════════════════════════════════════════════════════════════════════════════

  Ready to build?

  ──────────────────────────────────────────────────────────────────────────────
  RESOURCES
  ──────────────────────────────────────────────────────────────────────────────
  
  API Reference         games.tigregotico.pt/api
  Getting Started       games.tigregotico.pt/quickstart
  Tutorials             games.tigregotico.pt/tutorials
  Examples              github.com/storyforge/examples
  
  ──────────────────────────────────────────────────────────────────────────────
  QUICK START
  ──────────────────────────────────────────────────────────────────────────────
  
  $ pip install storyforge
  $ storyforge init my-game
  $ cd my-game
  $ storyforge run
  
  ──────────────────────────────────────────────────────────────────────────────
  COMMUNITY
  ──────────────────────────────────────────────────────────────────────────────
  
  Discord               discord.gg/storyforge
  GitHub Discussions    github.com/storyforge/engine/discussions
  Twitter               @storyforge_dev

════════════════════════════════════════════════════════════════════════════════
`,

  download: () => `
════════════════════════════════════════════════════════════════════════════════
                              INSTALLATION
════════════════════════════════════════════════════════════════════════════════

  ──────────────────────────────────────────────────────────────────────────────
  VIA PIP (RECOMMENDED)
  ──────────────────────────────────────────────────────────────────────────────
  
  $ pip install storyforge
  
  ──────────────────────────────────────────────────────────────────────────────
  FROM SOURCE
  ──────────────────────────────────────────────────────────────────────────────
  
  $ git clone https://github.com/HiveMindInsiders/story-forge.git
  $ cd story-forge
  $ pip install -e .
  
  ──────────────────────────────────────────────────────────────────────────────
  VERIFY INSTALLATION
  ──────────────────────────────────────────────────────────────────────────────
  
  $ storyforge --version
  StoryForge v1.0.0
  
  $ storyforge doctor
  [OK] Python 3.10+
  [OK] Dependencies installed
  [OK] LLM provider configured
  
  ──────────────────────────────────────────────────────────────────────────────
  REQUIREMENTS
  ──────────────────────────────────────────────────────────────────────────────
  
  • Python 3.10+
  • 2GB RAM minimum
  • LLM API key (optional, for procedural features)
  
  ──────────────────────────────────────────────────────────────────────────────
  NEXT STEPS
  ──────────────────────────────────────────────────────────────────────────────
  
  $ storyforge init my-game     # Create new project
  $ storyforge run              # Start development server
  $ storyforge build            # Build for distribution
  
  Type "docs" for full documentation.

════════════════════════════════════════════════════════════════════════════════
`,

  github: () => `
════════════════════════════════════════════════════════════════════════════════
                            GITHUB REPOSITORY
════════════════════════════════════════════════════════════════════════════════

  https://github.com/storyforge/engine

  ──────────────────────────────────────────────────────────────────────────────
  REPOSITORY STRUCTURE
  ──────────────────────────────────────────────────────────────────────────────
  
  storyforge/
  ├── engine/              Core engine source
  │   ├── core/            IFGameEngine, GameScene, GameObject
  │   ├── parsing/         Input parsing and intent matching
  │   ├── llm/             LLM provider integrations
  │   └── utils/           Helper utilities
  ├── demos/               Example projects
  ├── docs/                Documentation source
  └── tests/               Test suite

  ──────────────────────────────────────────────────────────────────────────────
  CONTRIBUTING
  ──────────────────────────────────────────────────────────────────────────────
  
  1. Fork the repository
  2. Create a feature branch
  3. Submit a pull request
  
  See CONTRIBUTING.md for guidelines.

  ──────────────────────────────────────────────────────────────────────────────
  STATS
  ──────────────────────────────────────────────────────────────────────────────
  
  Stars           15.2k
  Forks           2.1k  
  Contributors    180+
  License         AGPL / Apache 2.0

════════════════════════════════════════════════════════════════════════════════
`,

  ls: () => `drwxr-xr-x  docs/
drwxr-xr-x  demos/
drwxr-xr-x  engine/
-rw-r--r--  README.md
-rw-r--r--  LICENSE
-rw-r--r--  CONTRIBUTING.md
-rw-r--r--  setup.py`,

  cat: (arg) => {
    if (!arg) return 'Usage: cat <filename>'
    
    const files: Record<string, string> = {
      'README.md': `# StoryForge

Open-source engine for procedurally generated, LLM-powered interactive fiction.

## Quick Start

    pip install storyforge
    storyforge init my-game
    cd my-game
    storyforge run

## Documentation

See games.tigregotico.pt for full documentation.

## License

Dual licensed under AGPL and Apache 2.0.`,

      'LICENSE': `StoryForge Dual License

AGPL License - For open-source derivative works
Apache 2.0 License - For commercial products

See LICENSE-AGPL and LICENSE-APACHE for full terms.`,

      'CONTRIBUTING.md': `# Contributing to StoryForge

1. Fork the repository
2. Create a feature branch
3. Write tests for your changes
4. Submit a pull request

See games.tigregotico.pt/contributing for detailed guidelines.`,

      'setup.py': `from setuptools import setup, find_packages

setup(
    name="storyforge",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "openai>=1.0.0",
        "anthropic>=0.5.0",
    ],
    entry_points={
        "console_scripts": [
            "storyforge=storyforge.cli:main",
        ],
    },
)`
    }

    return files[arg] || `cat: ${arg}: No such file or directory`
  },

  clear: () => ''
}
