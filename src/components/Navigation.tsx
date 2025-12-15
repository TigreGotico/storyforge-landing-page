import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  
  const links = [
    { path: '/', label: './home' },
    { path: '/concepts', label: '/core_concepts' },
    { path: '/llm', label: '/llm_integration' },
    { path: '/demos', label: '/demos' },
    { path: '/pricing', label: '/pricing' },
    { path: '/docs', label: '/documentation' },
  ]

  return (
    <nav className="sticky top-0 bg-terminal-bg border-b-2 border-terminal-green p-4 md:px-8 z-[1000] shadow-[0_0_20px_rgba(0,255,0,0.3)]">
      <div className="flex flex-wrap items-center gap-4 md:gap-8">
        <div className="text-terminal-green text-xl md:text-2xl drop-shadow-[0_0_2px_#00ff00]">
          user@storyforge:~$
        </div>
        <div className="flex flex-wrap gap-4 md:gap-8">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg md:text-xl transition-all hover:drop-shadow-[0_0_5px_#00ff00] group ${
                location.pathname === link.path 
                  ? 'text-terminal-green drop-shadow-[0_0_5px_#00ff00]' 
                  : 'text-terminal-green-dim'
              }`}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
