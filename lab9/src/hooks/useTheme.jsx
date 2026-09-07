import React, { useState } from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    return {
        theme,
        toggleTheme
    }
}

export default useTheme
