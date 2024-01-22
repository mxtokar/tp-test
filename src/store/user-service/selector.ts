import { RootState } from '../store';

export const getUserLoader = (state: RootState) => state.userRedux.loading;

export const getUserList = (state: RootState) => state.userRedux.userList;

export const getUser = (state: RootState) => state.userRedux.user;
