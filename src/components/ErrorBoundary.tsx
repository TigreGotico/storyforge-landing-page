import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('Error caught by boundary:', error)
    console.error('Component stack:', info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-red-500 font-mono p-8">
          <h1 className="text-2xl mb-4">[ SYSTEM ERROR ]</h1>
          <pre className="whitespace-pre-wrap text-sm">
            {this.state.error?.message}
          </pre>
          <pre className="whitespace-pre-wrap text-xs mt-4 text-red-400">
            {this.state.error?.stack}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-4 py-2 border border-red-500 hover:bg-red-500 hover:text-black"
          >
            $ ./reboot.sh
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
