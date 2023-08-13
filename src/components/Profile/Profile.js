import React, { useState } from 'react';
import './Profile.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Profile = () => {
	const [isActive, setIsActive] = useState(true);
	return (
		<div className="profile-wrapper">
			<img src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="" className="profile-img" />
			<div className="profile-info">
				<p className="profile-name">Henry Jacobs</p>
				<SettingsOutlinedIcon className="profile-info-setting-icon" />
			</div>
			<p className="title">Lead UI/UX Developer</p>
			<div className={`toggle-button ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
				<div className="toggler"></div>
			</div>
		</div>
	);
};

export default Profile;
