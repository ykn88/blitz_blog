import React from 'react'
import { createContext, useState } from 'react'

const setTheme = {
   isDarkTheme: false,
   light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
   dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
}

export const ThemeContext = createContext(setTheme)


function ThemeContextProvider(props) {

    const [display, setDisplay] = useState(setTheme)

    const toggleTheme = () => {
        setDisplay({...display, isDarkTheme: !display.isDarkTheme})
        
    }

    console.log(display.isDarkTheme);
    
    
    return (
        <ThemeContext.Provider value={{...display, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
    
}

export default ThemeContextProvider

