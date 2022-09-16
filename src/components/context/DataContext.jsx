import { createContext, useState } from "react"

export const DataContext = createContext()

export const Estados = ( {children} ) => {
    const [main, setMain] = useState(false)


    return (
        <DataContext.Provider value= {
            {main, setMain }
        }>
            { children }
        </DataContext.Provider>
    )
}

