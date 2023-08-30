export const chatSend = ({ currentText, currentTimestamp }) => {
	return {
		type: 'CHAT_SEND',
		payload: { currentText, currentTimestamp },
	};
};

export const updateSelectedUser = ({ id, userName }) => {
	return {
		type: 'UPDATE_SELECTED_USER',
		payload: {
			id,
			userName,
		},
	};
};

export const updateToArchive = () => {
	return {
		type: 'UPDATE_TO_ARCHIVE',
	};
};

export const updateUseStatus = () => {
	return {
		type: 'UPDATE_USER_STATUS',
	};
};
