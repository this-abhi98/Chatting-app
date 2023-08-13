import React from 'react';
import Chat from '../chat/chat';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './ChatContainer.css'

const ChatContainer = () => {
	return (
		<div className='ChatContainer'>
			<Left />
			<Chat />
			<Right />
		</div>
	);
};

export default ChatContainer;
