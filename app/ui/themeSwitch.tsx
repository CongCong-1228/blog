'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
export default function ThemeSwitch() {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // render a placeholder button while the component is mounted
  if (!mounted) {
    return (
      <button
        className="px-4 py-2 rounded-md bg-foreground text-background opacity-0"
        aria-hidden="true"
      >
        💻
      </button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md bg-foreground text-background"
    >
      {theme === 'light' ? '🌙' : theme === 'dark' ? '☀️' : '💻'}
    </button>
  )
}
