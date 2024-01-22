import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IUser } from 'store/user-service/types';

import { ROUTES } from 'core/constants/routes';

import s from './UserCard.module.scss';

interface UserCardProps {
	user: IUser;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
	const navigate = useNavigate();

	const goToDetails = () => {
		navigate(ROUTES.DASHBOARD);
	};

	return (
		<div className={s.userCard}>
			<h2 className={s.userCard__header}>User Details</h2>

			<div className={s.userCard__item}>
				Name: &nbsp;
				<span>{user.name}</span>
			</div>

			<div className={s.userCard__item}>
				Username: &nbsp;
				<span>{user.username}</span>
			</div>

			<div className={s.userCard__item}>
				Email: &nbsp;
				<span>{user.email}</span>
			</div>

			<div className={s.userCard__item}>
				Address
				<div className={s.userCard__item_block}>
					<div>
						City: &nbsp;
						<span>{user.address.city}</span>
					</div>

					<div>
						Street: &nbsp;
						<span>{`${user.address.street}, ${user.address.suite}`}</span>
					</div>

					<div>
						Zip code: &nbsp;
						<span>{user.address.zipcode}</span>
					</div>

					<div>
						Geo: &nbsp;
						<span>{`${user.address.geo.lat}, ${user.address.geo.lng}`}</span>
					</div>
				</div>
			</div>

			<div className={s.userCard__item}>
				Phone: &nbsp;
				<span>{user.phone}</span>
			</div>

			<div className={s.userCard__item}>
				Website: &nbsp;
				<a href={`http://${user.website}`} target="_blank" rel="noreferrer">
					{user.website}
				</a>
			</div>

			<div className={s.userCard__item}>
				Company
				<div className={s.userCard__item_block}>
					<div>
						Name: &nbsp;
						<span>{user.company.name}</span>
					</div>

					<div>
						Catch phrase: &nbsp;
						<span>{user.company.catchPhrase}</span>
					</div>

					<div>
						Bs: &nbsp;
						<span>{user.company.bs}</span>
					</div>
				</div>
			</div>

			<button className={s.userCard__btn} onClick={goToDetails}>
				Back to user list
			</button>
		</div>
	);
};

export default UserCard;
