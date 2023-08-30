import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedUser } from '../../Action';
import './Conversation.css';

export const Conversation = ({ activeConversation, isArchievedConvo }) => {
	const manageChats = useSelector((state) => {
		return state.ManageChats;
	});

	const dispatch = useDispatch();

	return (
		<div className={'active-conversation-list' + (activeConversation ? '' : ' inactive')}>
			{manageChats.freindList &&
				manageChats.freindList.map((friend) => {
					return (
						isArchievedConvo === friend.isArchieved && (
							<div
								className={`${
									manageChats.selectedUser.id === friend.id
										? 'active-conversation-wrapper conversation-wrapper'
										: 'conversation-wrapper'
								} `}
								onClick={() => dispatch(updateSelectedUser({ id: friend.id, userName: friend.userName }))}
							>
								<img src={friend.img} alt="" className="conversation-user-dp" />
								<p className="conversation-avatar-name">{friend.name}</p>
							</div>
						)
					);
				})}
		</div>
	);
};
