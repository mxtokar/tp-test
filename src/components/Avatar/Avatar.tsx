import { FC } from 'react';

import s from './Avatar.module.scss';

interface AvatarProps {
	name: string;
}

const Avatar: FC<AvatarProps> = ({ name }) => {
	const getInitials = (name: string): string => {
		const names = name.split(' ');
		return names
			.map((word) => word.charAt(0).toUpperCase())
			.join('')
			.slice(0, 2);
	};

	const initials = getInitials(name);

	return <div className={s.Avatar}>{initials}</div>;
};

export default Avatar;
