import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store";

// Declare an interface which sets the types needed inside of the initial state object
interface CounterState {
    count: number,
    isLoading: Boolean
}

// Declare the shape of the initial state, which represents the state when the application first loads
const initialState: CounterState = {
    count: 0,
    isLoading: false
}


// Define a slice of the state to be used by the components that care about this slice

// The createSlice method takes in:
//      - a name for the slice as a string
//      - some state that should be used initilly
//      - the reducers that will be used to change the state based upon some actions
//
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        isLoading: (state) => {
            console.log('i is here in isLoading reducer?');
            state.isLoading = true;
        }, 
        isLoaded: (state) => {
            state.isLoading = false;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
});

// Export the action reducers (reducer definition + action) to be imported by components when needed
// Effectively exposes a method that allows you to trigger some action that results in a state change
export const { increment, decrement, isLoading, isLoaded, reset } = counterSlice.actions;

// Export the state object, which is passed into useSelector when you want a component to subscribe to this
// slice of state
export const countState = (state: RootState) => state.counter;

// Export our state slice to be included in the central store object
export default counterSlice.reducer;
