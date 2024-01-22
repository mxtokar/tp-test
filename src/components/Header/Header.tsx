import { FC } from 'react';

import s from './Header.module.scss';

const Header: FC = () => {
	return (
		<div className={s.header}>
			<h2>Travel Point test project by mxtokar</h2>
		</div>
	);
};

export default Header;
