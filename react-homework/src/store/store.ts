import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice/user.slice';


export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AAppDispatch = typeof store.dispatch;
