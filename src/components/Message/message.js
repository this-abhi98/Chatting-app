import React from 'react';
import './message.css';

const Message = ({ currUser, img, message }) => {
	return (
		<div className={'message' + (currUser ? ' currUser' : '')}>
			<div className={'messageTop' + (currUser ? ' currUser' : '')}>
				<img
					src={'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg'}
					alt="Hey There"
					className={'messageImg' + (currUser ? ' currUser' : '')}
				/>
				<p className={'messageText' + (currUser ? ' currUser' : '')}>{message}</p>
			</div>
			<div className={'messageBottom' + (currUser ? ' currUser' : '')}>1h ago</div>
		</div>
	);
};

export default Message;
