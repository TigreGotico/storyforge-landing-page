import figlet from 'figlet'

export const generateASCIIArt = (text: string): string => {
  try {
    const ascii = figlet.textSync(text, {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
    return ascii
  } catch (e) {
    // Fallback if figlet fails
    return text
  }
}

export const generateASCIIHeader = (text: string): string => {
  try {
    const ascii = figlet.textSync(text, {
      font: 'Banner',
      horizontalLayout: 'default'
    })
    return ascii
  } catch (e) {
    return text
  }
}

export const wrapInBox = (text: string, char: string = '═'): string => {
  const lines = text.split('\n')
  const maxLength = Math.max(...lines.map(l => l.length))
  const topBottom = char.repeat(maxLength + 4)
  
  return [
    topBottom,
    ...lines.map(line => `║ ${line.padEnd(maxLength)} ║`),
    topBottom
  ].join('\n')
}
