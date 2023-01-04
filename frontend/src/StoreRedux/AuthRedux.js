// import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";


const InitialState = {
    counter: 0
}

const authReducer = (state = InitialState, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1
        }
    }
    return state
}


 // export const store = configureStore(authReducer)