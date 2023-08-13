import React, { useState } from 'react';
import './Left.css';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Profile from '../Profile/Profile';
import { Conversation } from '../Conversation/Conversation';

const Left = () => {
	const [activeConversation, setActiveConversation] = useState(true);
	const [archievedConversation, setArchievedConversation] = useState(false);

	const activeConversationToggler = () => {
		return setActiveConversation(!activeConversation);
	};
	const archievedConversationToggler = () => {
		return setActiveConversation(!archievedConversation);
	};

	return (
		<div className="Left">
			<div className="logo">
				<FacebookOutlinedIcon className="logo-icon" />
				<p>Quick - Chat</p>
			</div>
			<div className="profile">
				<Profile />
			</div>

			<div className="active-conversation">
				<div className="active-conversation-toggler" onClick={activeConversationToggler}>
					<p>Active Conversation</p>
					{activeConversation ? (
						<ArrowDropUpOutlinedIcon className="active-conversation-toggle-icon" />
					) : (
						<ArrowDropDownOutlinedIcon className="active-conversation-toggle-icon" />
					)}
				</div>
				{activeConversation && <Conversation activeConversation={activeConversation} />}
			</div>
			<div className="active-conversation">
				<div className="active-conversation-toggler" onClick={archievedConversationToggler}>
					<p>Archieved Conversation</p>
					{archievedConversation ? (
						<ArrowDropUpOutlinedIcon className="active-conversation-toggle-icon" />
					) : (
						<ArrowDropDownOutlinedIcon className="active-conversation-toggle-icon" />
					)}
				</div>
			</div>

			{/* <div className="archived-conversation">
            Archived Conv.
        </div> */}
		</div>
	);
};

export default Left;
