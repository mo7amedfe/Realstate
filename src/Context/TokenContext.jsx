import { createContext, useEffect, useState } from "react";

export let TokenContext = createContext()

export default function TokenContextProvider(props) {

    const [Token, setToken] = useState(null)

    useEffect(() => {
        setToken(localStorage.getItem("Token"))
    }, [])



    return <TokenContext.Provider value={{ Token, setToken }}>
        {props.children}
    </TokenContext.Provider>

}