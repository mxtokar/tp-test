import React, { FC, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'store/store';
import { getUsers } from 'store/user-service/asyncActions';
import { getUserList, getUserLoader } from 'store/user-service/selector';

import Header from 'components/Header/Header';
import UserItem from 'components/UserItem/UserItem';

import s from './Dashboard.module.scss';

const Dashboard: FC = () => {
	const dispatch = useAppDispatch();

	const userList = useSelector(getUserList);
	const loader = useSelector(getUserLoader);

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	return (
		<div className={s.dashboard}>
			<Header />

			{loader ? (
				<div className={s.loader} data-testid="oval-loading">
					<Oval
						ariaLabel="Loading" // Update to match what you are using in the test
						height={24}
						width={24}
						color="#fff"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
						secondaryColor="#91B6FF"
						strokeWidth={5}
						strokeWidthSecondary={5}
					/>
				</div>
			) : (
				<div className={s.dashboard__table}>
					<div>
						<div className={s.dashboard__table__header}>
							<span />
							<span>Name</span>
							<span>City</span>
							<span>Email</span>
							<span>Phone</span>
							<span>Website</span>
							<span />
						</div>
					</div>
					<div>{userList && userList.map((user) => <UserItem key={user.id} user={user} />)}</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
