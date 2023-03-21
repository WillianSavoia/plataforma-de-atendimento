import { createContext, useState, ReactElement } from "react";

interface ThemeProviderProps{
    children: ReactElement;
}

export const ThemeContext = createContext<any>({theme: 'light', undefined})

export const ThemeProvider = ({children}: ThemeProviderProps) =>{
    const [theme, setTheme] = useState('light')

    return <ThemeContext.Provider value={{theme, setTheme}}>
    {children}
    </ThemeContext.Provider>
}