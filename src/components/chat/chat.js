import React, { useRef, useState } from 'react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import './chat.css';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../Message/message';
import { chatSend } from '../../Action';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
	const fileInputRef = useRef(null);
	const dispatch = useDispatch();

	const selectedUserDetails = useSelector((state) => {
		const selectedUser = state.ManageChats.selectedUser;
		for (let index in state.ManageChats.freindList) {
			if (state.ManageChats.freindList[index].id === selectedUser.id) {
				return state.ManageChats.freindList[index];
			}
		}
	});

	const [currentText, setCurrentText] = useState('');
	const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
	const [selectedFile, setSelectedfile] = useState(null);

	const handleFileSelect = (e) => {
		setSelectedfile(e?.target?.files[0]);
	};

	return (
		<div className="chat">
			<div className="chatbox">
				<div className="messageBox">
					{selectedUserDetails.chatList &&
						selectedUserDetails.chatList.map((user) => {
							return (
								<Message
									timeStamp={user?.timeStamp}
									currUser={user?.currUser}
									img={selectedUserDetails?.img}
									message={user?.message}
								/>
							);
						})}
				</div>
				{selectedFile && selectedFile.name && <div className="addedAttachments">{selectedFile.name}</div>}
				<div className="messageInputBox">
					<AttachFileIcon onClick={() => fileInputRef.current.click()} />
					<input style={{ display: 'none' }} type="file" id="chat-attachment" ref={fileInputRef} onChange={(e) => handleFileSelect(e)} />
					<div className="messageInputWrapper">
						<input
							value={currentText}
							onChange={(e) => setCurrentText(e.target.value)}
							name="chat-input"
							id="chat-input"
							className="messageInput"
							placeholder="Enter your message here"
						></input>
						<div className="emoji" onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}>
							<SentimentSatisfiedAltIcon />
						</div>
					</div>
					<button
						className="sendMessage"
						onClick={() => {
							const currentTimestamp = new Date().getTime();
							dispatch(chatSend({ currentText, currentTimestamp }));
							setCurrentText('');
						}}
					>
						Send
					</button>
				</div>
				{isEmojiPickerOpen && (
					<EmojiPicker onEmojiClick={(obj) => setCurrentText(currentText + obj.emoji)} searchDisabled="true" width="90%" />
				)}
			</div>
		</div>
	);
};

export default Chat;
