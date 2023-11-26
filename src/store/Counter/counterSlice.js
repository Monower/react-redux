import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state)=>{
            state.value = state.value - 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
            console.log(state.value);
        },
        decrementByAmount: (state,action) => {
            state.value = state.value - action.payload
        },
        reset: (state) => {
            state.value = 0
            console.clear();
        }
    }
})


export const{ increment,decrement,incrementByAmount,reset,decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;