import React, { useState } from 'react';
import './Profile.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { updateUseStatus } from '../../Action';

const Profile = () => {
	const dispatch = useDispatch();

	const currUserDetail = useSelector((state) => {
		return state.ManageChats.currUserDetails;
	});

	return (
		<div className="profile-wrapper">
			<img src={currUserDetail.img} alt="" className="profile-img" />
			<div className="profile-info">
				<p className="profile-name">{currUserDetail.profileDesc}</p>
				<SettingsOutlinedIcon className="profile-info-setting-icon" />
			</div>
			<p className="title">{currUserDetail.profileDesc}</p>
			<div className={`toggle-button ${currUserDetail.isActive ? 'active' : ''}`} onClick={() => dispatch(updateUseStatus())}>
				<div className="toggler"></div>
			</div>
		</div>
	);
};

export default Profile;
