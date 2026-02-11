import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_PERSISTENT_STATE } from './user.slice';
import { saveState } from './storage';
import cartSlice, { CART_PERSISTENT_STATE } from './cart.slice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		cart: cartSlice
	}
});

// готовый метод в store, в данном случае для подписки на изменение состояния jwt-токена,
// мы его получаем и сохраням
store.subscribe(() => {
	saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
	saveState(store.getState().cart, CART_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

// при залогинивании мы получаем jwt-токен, потом сохраняем его в Redux, и оттуда сохраняем 
// в localStorage, при необходимости мы запрашиваем этот токен в Redux;
