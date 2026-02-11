import { createSlice } from '@reduxjs/toolkit';
import { CardFilmProps } from '../../components/mainContent/listFilms/cardFilm/cardFilm.props';
import { getInitialState } from './storage';


export interface UserState {
    name: string;
    isLogined: boolean;
    favorites: CardFilmProps[];
}

const initialState: UserState = getInitialState();

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.name = action.payload.name;
            state.isLogined = action.payload.isLogined;
            state.favorites = action.payload.favorites;
        },
        logOut: (state) => {
            state.name = '';
            state.isLogined = false;
            state.favorites = [];
        },
        deleteFavorites: (state, action) => {
            state.name = action.payload.name;
            state.favorites = action.payload.favorites;
        },
        addFavorites: (state, action) => {
            state.favorites = action.payload.favorites;
        }
    }
})

export default userSlice.reducer;
export const userActions = userSlice.actions;
