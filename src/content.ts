export const CONTENT = {
  ascii_banner: `████████████████████████████████████████████████████████████████████████████████
█                                                                              █
█    ███████╗████████╗ ██████╗ ██████╗ ██╗   ██╗███████╗ ██████╗ ██████╗ ██████╗ ███████╗    █
█    ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝    █
█    ███████╗   ██║   ██║   ██║██████╔╝ ╚████╔╝ █████╗  ██║   ██║██████╔╝██║  ███╗█████╗      █
█    ╚════██║   ██║   ██║   ██║██╔══██╗  ╚██╔╝  ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝      █
█    ███████║   ██║   ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗    █
█    ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    █
█                                                                              █
█               LLM-Powered Interactive Fiction Engine v1.0                    █
█                                                                              █
████████████████████████████████████████████████████████████████████████████████`,

  section_headers: {
    concepts: 'CORE CONCEPTS',
    llm: 'LLM INTEGRATION',
    demos: 'DEMOS & USE CASES',
    license: 'PRICING & LICENSE',
    docs: 'DOCUMENTATION'
  },

  divider: '════════════════════════════════════════════════════════════════════════════════',

  hero: {
    title: 'Build Dynamic Interactive Worlds',
    subtitle: [
      '# Open-source engine for procedurally generated,',
      '# LLM-powered narrative adventures.'
    ],
    features: [
      '[✓] LLM-powered world, character, and dialogue generation',
      '[✓] Simple modular engine architecture',
      '[✓] Autonomous self-play testing with LLM agents'
    ],
    cta_primary: '$ ./get_started.sh',
    cta_secondary: '$ view_source'
  },

  features: [
    {
      title: 'LLM-Powered Content',
      description: 'Generate dynamic worlds, characters, and dialogue using state-of-the-art language models.',
      status: '[✓]'
    },
    {
      title: 'Flexible Architecture',
      description: 'Simple, modular design with clear abstractions. No black boxes, full control.',
      status: '[✓]'
    },
    {
      title: 'Automated Testing',
      description: 'Use LLMs to \'self-play\' your game and automatically test for bugs and edge cases.',
      status: '[✓]'
    }
  ],

  code_example: `from storyforge import IFGameEngine, GameScene, GameObject

class TavernScene(GameScene):
    def setup(self):
        self.add_object(GameObject("bartender", 
            personality="gruff but helpful"))
        self.add_object(GameObject("mysterious_stranger",
            personality="secretive, knows about the dungeon"))

engine = IFGameEngine()
engine.add_scene(TavernScene("tavern"))
engine.enable_llm_dialogue()
engine.run()`,

  sections: {
    concepts: {
      title: 'CORE CONCEPTS',
      items: [
        {
          name: 'IFGameEngine',
          description: 'The main class that runs the game. It manages scenes and the overall game flow.',
          points: [
            '• Game loop execution',
            '• Scene transitions',
            '• Global state management',
            '• Input/output routing'
          ]
        },
        {
          name: 'GameScene',
          description: 'A container for a specific location or situation within the game, holding objects and logic.',
          points: [
            '• Contains GameObjects',
            '• Defines available actions',
            '• Handles local events',
            '• Manages scene transitions'
          ]
        },
        {
          name: 'GameObject',
          description: 'A self-contained entity (like a character, item, or puzzle) with its own state and interaction logic.',
          points: [
            '• Encapsulated state',
            '• Interaction handlers',
            '• Observable properties'
          ]
        },
        {
          name: 'Input Parsing',
          description: 'Deterministic keyword-based parsing. Keywords are used to identify core concepts and actions.',
          code: `Intent: OPEN_DOOR
Required: ["open", "door"]
Optional: ["wooden", "locked", "front"]
Priority: 10`
        }
      ]
    },

    llm: {
      title: 'LLM INTEGRATION',
      subsections: [
        {
          name: 'Procedural Generation',
          description: 'Describe how StoryForge can use an LLM to generate game worlds and atmospheres on the fly. Mention the procedural_map.py demo as a key example.',
          points: [
            '• Seed-based reproducibility',
            '• Contextual coherence via world state injection',
            '• Configurable detail levels',
            '• Caching for performance'
          ]
        },
        {
          name: 'Dynamic Background Events',
          description: 'Highlight how the engine can generate environmental or character-driven events that occur automatically as the player explores.',
          points: [
            '• Distant sounds echoing through corridors',
            '• NPCs moving between locations',
            '• Environmental changes (weather, lighting)',
            '• Ambient narrative moments'
          ]
        },
        {
          name: 'Autonomous NPCs',
          description: 'Explain how non-player characters can be given unique personalities and backstories. Reference the llm_pub.py demo.',
          points: [
            '• Persistent memory across sessions',
            '• Personality-driven response generation',
            '• Relationship tracking',
            '• Knowledge boundaries'
          ]
        }
      ]
    },

    demos: {
      title: 'DEMOS & USE CASES',
      items: [
        {
          name: 'room_demo.py',
          description: 'The simplest example. A single-scene game that introduces basic interaction logic.',
          complexity: 'Beginner'
        },
        {
          name: 'eldritch_escape.py',
          description: 'A more advanced game that showcases external resource files for dialogue and keywords.',
          complexity: 'Intermediate'
        },
        {
          name: 'procedural_map.py',
          description: 'Shows how the engine can create an infinitely expanding game world by dynamically generating new rooms.',
          complexity: 'Advanced'
        },
        {
          name: 'llm_pub.py',
          description: 'The first LLM-powered example featuring a procedurally generated pub with dynamic NPCs.',
          complexity: 'Advanced'
        },
        {
          name: 'self_play.py',
          description: 'An LLM acts as a player to automatically test game flow and functionality.',
          complexity: 'Advanced'
        }
      ]
    },

    license: {
      title: 'PRICING & LICENSING',
      description: 'StoryForge is open-source but not free to use in commercial products. Available under two licenses:',
      options: [
        {
          name: 'AGPL License',
          price: '15€',
          description: 'Required for open-source derivative works'
        },
        {
          name: 'Apache 2.0 License',
          price: '50€',
          description: 'Required for commercial products'
        }
      ]
    },

    docs: {
      title: 'DOCUMENTATION',
      description: 'Ready to dive deeper? Check out the full API documentation and guides.',
      links: [
        { text: 'API Reference', url: '#' },
        { text: 'Getting Started', url: '#' },
        { text: 'Examples & Cookbook', url: '#' },
        { text: 'FAQ', url: '#' }
      ]
    }
  },

  footer: {
    copyright: 'StoryForge © 2024 | AGPL / Apache 2.0',
    repository: 'github.com/storyforge/engine'
  }
}
