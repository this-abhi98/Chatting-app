import React from 'react';
import './UserInfo.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';

export const UserInfo = () => {
	return (
		<div className="userInfo">
			<div className="userInfoImgWrapper">
				<img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="HJ" className="userInfoImg" />
			</div>
			<div className="userInfoMail">
				<EmailOutlinedIcon className="icon" />
				<p>henry.jacobs@yahoo.com</p>
			</div>
			<div className="userInfoAccount">
				<AccountCircleOutlinedIcon className="icon" />
				<p>Henry Jacobs</p>
			</div>
			<div className="userInfoButton">
				<button className="archive">
					Archive <Inventory2OutlinedIcon className="archive-icon" />{' '}
				</button>
			</div>
		</div>
	);
};
