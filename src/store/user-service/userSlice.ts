import { createSlice } from '@reduxjs/toolkit';

import { getUserById, getUsers } from './asyncActions';
import { IUserReducer } from './types';

const initialState: IUserReducer = {
	loading: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.userList = action.payload;
			})
			.addCase(getUsers.rejected, (state) => {
				state.loading = false;
			})
			.addCase(getUserById.pending, (state) => {
				state.loading = true;
			})
			.addCase(getUserById.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(getUserById.rejected, (state) => {
				state.loading = false;
			});
	},
});

export default userSlice.reducer;
