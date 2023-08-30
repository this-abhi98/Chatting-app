import React from 'react';
import './UserInfo.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { updateToArchive } from '../../Action';
import { useDispatch } from 'react-redux';

export const UserInfo = ({ selectedUserDetails }) => {
	const dispatch = useDispatch();

	return (
		<div className="userInfo">
			<div className="userInfoImgWrapper">
				<img src={selectedUserDetails.img} alt="HJ" className="userInfoImg" />
			</div>
			<div className="userInfoMail">
				<EmailOutlinedIcon className="icon" />
				<p>{selectedUserDetails.emailId}</p>
			</div>
			<div className="userInfoAccount">
				<AccountCircleOutlinedIcon className="icon" />
				<p>{selectedUserDetails.name}</p>
			</div>
			<div className="userInfoButton">
				<button className="archive" onClick={() => dispatch(updateToArchive())}>
					{!selectedUserDetails.isArchieved ? 'Archive' : 'UnArchive'}
					<Inventory2OutlinedIcon className="archive-icon" />{' '}
				</button>
			</div>
		</div>
	);
};
