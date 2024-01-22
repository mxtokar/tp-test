import { createAsyncThunk } from '@reduxjs/toolkit';

import instance from 'utils/API';

export const getUsers = createAsyncThunk('user/getUsers', async (_, { rejectWithValue }) => {
	try {
		const response = await instance.get('/users');

		return response.data;
	} catch (error: any) {
		return rejectWithValue(error.data);
	}
});

export const getUserById = createAsyncThunk(
	'user/getUsersById',
	async (userId: number, { rejectWithValue }) => {
		try {
			const response = await instance.get(`/users/${userId}`);

			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.data);
		}
	}
);
