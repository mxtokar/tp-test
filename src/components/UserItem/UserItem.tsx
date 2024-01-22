import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IUser } from 'store/user-service/types';

import { ROUTES } from 'core/constants/routes';

import Avatar from 'components/Avatar/Avatar';

import s from './UserItem.module.scss';

interface UserItemProps {
	user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
	const navigate = useNavigate();

	const goToDetails = () => {
		navigate(ROUTES.USER_DETAILS.replace(':userId', user.id.toString()));
	};

	return (
		<div className={s.userItem}>
			<div>
				<Avatar name={user.name} />
			</div>
			<span>{user.name}</span>
			<span>{user.address.city}</span>
			<span>{user.email}</span>
			<span>{user.phone}</span>
			<div>
				<a href={`http://${user.website}`} target="_blank" rel="noreferrer">
					{user.website}
				</a>
			</div>
			<button onClick={goToDetails}>Details</button>
		</div>
	);
};

export default UserItem;
