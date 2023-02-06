import { createContext, useState, ReactNode } from "react";

interface ThemeProviderProps{
    children: ReactNode;
}

export const ThemeContext = createContext<any>({theme: 'light', undefined})

export const ThemeProvider = ({children}: ThemeProviderProps) =>{
    const [theme, setTheme] = useState('light')

    return <ThemeContext.Provider value={{theme, setTheme}}>
    {children}
    </ThemeContext.Provider>
}