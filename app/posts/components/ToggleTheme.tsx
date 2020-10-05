import { ThemeContext } from 'app/ThemeContext/ThemeContext'
import React, { useContext } from 'react'

function ToggleTheme() {

    const {toggleTheme} = useContext(ThemeContext)

    return (
        <div>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    )
}

export default ToggleTheme
