import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

// TypeScript specific; helps to define what dispatch and state look like (for casting/intellisense)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
