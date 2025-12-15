export default function CRTEffects() {
  return (
    <>
      {/* Scanlines */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] animate-scanline"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)'
        }}
      />
      
      {/* CRT Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9998] animate-flicker"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
        }}
      />
    </>
  )
}
