import { useState, useEffect } from 'react'
import Terminal from './components/Terminal'
import WebUI from './components/WebUI'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  const [mode, setMode] = useState<'terminal' | 'web'>(() => {
    const saved = localStorage.getItem('storyforge-mode')
    return (saved as 'terminal' | 'web') || 'terminal'
  })

  useEffect(() => {
    localStorage.setItem('storyforge-mode', mode)
  }, [mode])

  return (
    <ErrorBoundary>
      {mode === 'terminal' ? (
        <Terminal onSwitchToWeb={() => setMode('web')} />
      ) : (
        <WebUI onSwitchToTerminal={() => setMode('terminal')} />
      )}
    </ErrorBoundary>
  )
}

export default App
