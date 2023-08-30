import React from 'react';
import { useSelector } from 'react-redux';
import { Information } from '../Information/Information';
import { Onboard } from '../Onboard/Onboard';
import { UserInfo } from '../UserInfo/UserInfo';
import './Right.css';
function Right() {
	const selectedUserDetails = useSelector((state) => {
		const selectedUser = state.ManageChats.selectedUser;
		for (let index in state.ManageChats.freindList) {
			if (state.ManageChats.freindList[index].id === selectedUser.id) {
				return state.ManageChats.freindList[index];
			}
		}
	});

	return (
		<div className="Right">
			<div className="user-info">
				<UserInfo selectedUserDetails={selectedUserDetails} />
			</div>
			<div className="info">
				<Information selectedUserDetails={selectedUserDetails} />
			</div>
			<div className="onboard">
				<Onboard selectedUserDetails={selectedUserDetails} />
			</div>
		</div>
	);
}

export default Right;
