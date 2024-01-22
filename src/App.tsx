import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'core/constants/routes';

import Dashboard from 'pages/Dashboard/Dashboard';
import UserDetails from 'pages/UserDetails/UserDetails';

const App: FC = () => {
	return (
		<Routes>
			<Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
			<Route path={ROUTES.USER_DETAILS} element={<UserDetails />} />
		</Routes>
	);
};

export default App;
