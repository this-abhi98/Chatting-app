import React, { useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import './chat.css';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Message/message';
import { chatSend } from '../../Action';

const Chat = () => {
	const chatList = useSelector((state) => {
		return state.ManageChats.chatList;
	});
	const dispatch = useDispatch();

	const [currentText, setCurrentText] = useState('');

	return (
		<div className="chat">
			<div className="chatbox">
				<div className="messageBox">
					{chatList &&
						chatList.map((user) => {
							return <Message currUser={user.currUser} img={user.img} message={user.message} />;
						})}
				</div>
				<div className="messageInputBox">
					<div className="messageInputWrapper">
						<input
							value={currentText}
							onChange={(e) => setCurrentText(e.target.value)}
							name="chat-input"
							id="chat-input"
							className="messageInput"
							placeholder="Enter your message here"
						></input>
						<div className="emoji">
							<SentimentSatisfiedAltIcon />
						</div>
					</div>
					<button
						className="sendMessage"
						onClick={() => {
							dispatch(chatSend(currentText));
							setCurrentText('');
						}}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;
