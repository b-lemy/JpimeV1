import {createContext, useContext, useReducer} from "react";
import {AppReducer} from "./Reducer";


const InitialState = {
    item:1,
    token:null
}

export const AppContext = createContext(InitialState);

const LoginUser = async (currentUser) =>{
    console.log(currentUser)
}

const value = {
    item: 1,

}
export const AppProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , InitialState);
    return (
        <AppContext.Provider value={value}>
            {children}


        </AppContext.Provider>
    )
}

    //custom hook
    export const  useAppContext = () => {
        return useContext(AppContext)
}