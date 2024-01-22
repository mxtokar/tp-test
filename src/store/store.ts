import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { thunk } from 'redux-thunk';

import userReducer from './user-service/userSlice';

const store = configureStore({
	reducer: {
		userRedux: userReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
