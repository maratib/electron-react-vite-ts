import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div>
      <p>{theme}</p>
      <button className="btn" onClick={toggleTheme}>
        ThemeButton
      </button>
    </div>
  )
}

export default ThemeButton
