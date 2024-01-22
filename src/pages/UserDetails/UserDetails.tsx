import React, { FC, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from 'store/store';
import { getUserById } from 'store/user-service/asyncActions';
import { getUser, getUserLoader } from 'store/user-service/selector';

import Header from 'components/Header/Header';
import UserCard from 'components/UserCard/UserCard';

import s from './UserDetails.module.scss';

const UserDetails: FC = () => {
	const dispatch = useAppDispatch();

	const user = useSelector(getUser);
	const loader = useSelector(getUserLoader);

	const { userId } = useParams();

	useEffect(() => {
		if (userId) {
			dispatch(getUserById(+userId));
		}
	}, [userId]);

	return (
		<div className={s.details} data-testid="user-card">
			<Header />
			{loader ? (
				<div className={s.loader}>
					<Oval
						height={24}
						width={24}
						color="#fff"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
						ariaLabel="oval-loading"
						secondaryColor="#91B6FF"
						strokeWidth={5}
						strokeWidthSecondary={5}
					/>
				</div>
			) : (
				user && <UserCard user={user} />
			)}
		</div>
	);
};
export default UserDetails;
