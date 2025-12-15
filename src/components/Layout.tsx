import type { ReactNode } from 'react'
import CRTEffects from './CRTEffects'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-terminal-bg font-terminal text-terminal-green">
      <CRTEffects />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  )
}
