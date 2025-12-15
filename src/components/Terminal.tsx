import { useState, useRef, useEffect } from 'react'
import { commands } from '../utils/commands'
import DotGrid from './DotGrid'

interface HistoryEntry {
  type: 'command' | 'output'
  content: string
}

interface TerminalProps {
  onSwitchToWeb?: () => void
}

export default function Terminal({ onSwitchToWeb }: TerminalProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [cmdIndex, setCmdIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    const bootSequence = [
      'StoryForge Terminal v1.0.0',
      'Copyright (c) 2024 StoryForge Contributors',
      '',
      'Initializing system...',
      '[OK] Loading kernel modules',
      '[OK] Mounting filesystems', 
      '[OK] Starting network services',
      '[OK] LLM subsystem ready',
      '',
      '════════════════════════════════════════════════════════════════════════════════',
      '',
      '  ███████╗████████╗ ██████╗ ██████╗ ██╗   ██╗███████╗ ██████╗ ██████╗  ██████╗ ███████╗',
      '  ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝',
      '  ███████╗   ██║   ██║   ██║██████╔╝ ╚████╔╝ █████╗  ██║   ██║██████╔╝██║  ███╗█████╗  ',
      '  ╚════██║   ██║   ██║   ██║██╔══██╗  ╚██╔╝  ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝  ',
      '  ███████║   ██║   ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗',
      '  ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝',
      '',
      '  Build Dynamic Interactive Worlds',
      '',
      '  # Open-source engine for procedurally generated,',
      '  # LLM-powered narrative adventures.',
      '',
      '════════════════════════════════════════════════════════════════════════════════',
      '',
      '  [✓] LLM-powered world, character, and dialogue generation',
      '  [✓] Simple modular engine architecture', 
      '  [✓] Autonomous self-play testing with LLM agents',
      '',
      '  Type "help" for available commands',
      '  Type "about" to learn more about StoryForge',
      '',
    ]

    let i = 0
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setHistory(prev => [...prev, { type: 'output', content: bootSequence[i] }])
        i++
      } else {
        clearInterval(interval)
        setBooted(true)
      }
    }, 25)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'auto' })
  }, [history])

  useEffect(() => {
    if (booted) {
      inputRef.current?.focus()
    }
  }, [booted, history])

  const processCommand = (cmd: string) => {
    const parts = cmd.trim().split(' ')
    const command = parts[0].toLowerCase()
    const arg = parts.slice(1).join(' ')

    if (command === 'clear') {
      setHistory([])
      return
    }

    if (command === 'gui' || command === 'web') {
      setHistory(prev => [...prev, { type: 'output', content: 'Switching to Web UI...' }])
      setTimeout(() => onSwitchToWeb?.(), 500)
      return
    }

    const commandFn = commands[command]
    if (commandFn) {
      const output = commandFn(arg)
      const lines = output.split('\n')
      setHistory(prev => [...prev, ...lines.map((line: string) => ({ type: 'output' as const, content: line }))])
    } else if (command) {
      setHistory(prev => [...prev, 
        { type: 'output', content: `storyforge: command not found: ${command}` },
        { type: 'output', content: 'Type "help" for available commands.' }
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const cmd = input.trim()
    setCmdHistory(prev => [...prev, cmd])
    setCmdIndex(-1)
    setHistory(prev => [...prev, { type: 'command', content: `user@storyforge:~$ ${cmd}` }])
    setInput('')
    processCommand(cmd)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length > 0) {
        const newIndex = cmdIndex === -1 ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1)
        setCmdIndex(newIndex)
        setInput(cmdHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (cmdIndex !== -1) {
        const newIndex = cmdIndex + 1
        if (newIndex >= cmdHistory.length) {
          setCmdIndex(-1)
          setInput('')
        } else {
          setCmdIndex(newIndex)
          setInput(cmdHistory[newIndex])
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const matches = Object.keys(commands).filter(c => c.startsWith(input.toLowerCase()))
      if (matches.length === 1) setInput(matches[0])
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault()
      setHistory([])
    }
  }

  return (
    <div 
      ref={terminalRef}
      className="h-screen bg-[#0a0a0a] p-6 md:p-10 overflow-y-auto overflow-x-hidden font-mono text-[#00ff00] cursor-text selection:bg-[#00ff00] selection:text-black overscroll-contain relative"
      onClick={() => inputRef.current?.focus()}
      style={{
        scrollBehavior: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* DotGrid Background */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <DotGrid
          dotSize={4}
          gap={30}
          baseColor="#003300ff"
          activeColor="#05c205ff"
        />
      </div>

      {/* Mode switcher button */}
      {onSwitchToWeb && (
        <button
          onClick={(e) => { e.stopPropagation(); onSwitchToWeb(); }}
          className="fixed top-4 right-4 z-[60] text-xs border border-[#00ff00]/50 px-3 py-1.5 bg-[#0a0a0a]/90 hover:bg-[#00ff00]/10 transition-colors"
          style={{ textShadow: '0 0 2px #00ff00' }}
        >
          [GUI Mode]
        </button>
      )}

      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, black 1px, black 2px)',
        backgroundSize: '100% 2px'
      }} />
      
      {/* Screen glow */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-20" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,255,0,0.1) 0%, transparent 70%)'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Terminal output */}
        <div className="space-y-0">
          {history.map((entry, i) => (
            <div 
              key={i} 
              className={`whitespace-pre-wrap leading-relaxed ${
                entry.type === 'command' ? 'text-[#00cc00]' : ''
              }`}
              style={{ 
                textShadow: (entry.content || '').includes('█') || (entry.content || '').includes('═') || (entry.content || '').includes('╗')
                  ? '0 0 8px #00ff00' 
                  : '0 0 2px #00ff00'
              }}
            >
              {entry.content || ''}
            </div>
          ))}
        </div>

        {/* Input line */}
        {booted && (
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-[#00cc00] mr-2" style={{ textShadow: '0 0 2px #00ff00' }}>
              user@storyforge:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-[#00ff00] caret-[#00ff00]"
              style={{ textShadow: '0 0 2px #00ff00' }}
              spellCheck={false}
              autoComplete="off"
            />
            <span className="animate-pulse">█</span>
          </form>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
