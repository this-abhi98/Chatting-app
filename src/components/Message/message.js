import React from 'react';
import { useSelector } from 'react-redux';
import './message.css';

const Message = ({ timeStamp, currUser, img, message }) => {
	const currUserDetail = useSelector((state) => {
		return state.ManageChats.currUserDetails;
	});

	const getTimeDiff = (msgTimeStamp) => {
		const currentTimestamp = new Date().getTime();

		const timeDifferenceDays = Math.floor((currentTimestamp - msgTimeStamp) / (1000 * 60 * 60 * 24));
		if (timeDifferenceDays > 0) return `${timeDifferenceDays} days ago`;

		const timeDifferenceHours = Math.floor((currentTimestamp - msgTimeStamp) / (1000 * 60 * 60));
		if (timeDifferenceHours > 0) return `${timeDifferenceHours} hours ago`;

		const timeDifferenceMinutes = Math.floor((currentTimestamp - msgTimeStamp) / (1000 * 60));
		if (timeDifferenceMinutes > 0) return `${timeDifferenceMinutes} Minutes ago`;

		const timeDifferenceSeconds = Math.floor((currentTimestamp - msgTimeStamp) / 1000);
		return `${timeDifferenceSeconds ? timeDifferenceSeconds : '0'} Seconds ago`;
	};

	return (
		<div className={'message' + (currUser ? ' currUser' : '')}>
			{currUserDetail.isActive && currUser && <div className="green-dot"></div>}
			<div className={'messageTop' + (currUser ? ' currUser' : '')}>
				<img src={currUser ? currUserDetail.img : img} alt="Hey There" className={'messageImg' + (currUser ? ' currUser' : '')} />
				<p className={'messageText' + (currUser ? ' currUser' : '')}>{message}</p>
			</div>
			<div className={'messageBottom' + (currUser ? ' currUser' : '')}>{getTimeDiff(timeStamp)}</div>
		</div>
	);
};

export default Message;
