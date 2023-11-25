import { createStoreHook } from "react-redux";


const reducerFn = (state = { counter:0 }, action) => { 
    return state;
}

const store = createStoreHook(reducerFn);


export default store;