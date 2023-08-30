const initialState = {
	freindList: [
		{
			id: 1,
			userName: 'Henry',
			name: 'Henry',
			emailId: 'henryFord.com',
			currUser: false,
			img: 'https://wallpapercave.com/wp/wp4464503.jpg',
			isArchieved: false,
			chatList: [
				{
					id: 1,
					currUser: false,
					message: 'Hy! Henry',
					timeStamp: 1692542359749,
				},
				{
					id: 2,
					currUser: true,
					message: 'Hey Jon. How can i help you today?',
					timeStamp: 1692542359800,
				},
			],
		},
		{
			id: 2,
			userName: 'Rushford',
			name: 'Rushford',
			emailId: 'Rushford@gmail.com',
			isArchieved: false,
			img: 'https://i.pinimg.com/originals/54/8a/d0/548ad00f6124a24184ce47cc6a19f113.jpg',
			chatList: [
				{
					id: 1,
					currUser: false,
					message: 'Hy! Rushford,its a sunny day hoe may i help you?',
					timeStamp: 1692542359749,
				},
				{
					id: 2,
					currUser: true,
					message: 'Nothing just chilling',
					timeStamp: 1692542359800,
				},
			],
		},
		{
			id: 3,
			userName: 'chris',
			isArchieved: true,
			name: 'chris',
			emailId: 'chrisgayle@gmail.com',
			img: 'https://is2-ssl.mzstatic.com/image/thumb/MGYkSX0RkVpcFqOZcMdAVQ/1200x675mf.jpg',
			chatList: [
				{
					id: 1,
					currUser: false,
					message: 'Hy! Chris what are upto',
					timeStamp: 1692542359749,
				},
				{
					id: 2,
					currUser: true,
					message: 'nothing it was good day overall',
					timeStamp: 1692542359800,
				},
				{
					id: 3,
					currUser: false,
					message: 'Ok nice to hear from you',
					timeStamp: 1692542359800,
				},
			],
		},
		{
			id: 4,
			userName: 'maxwell',
			name: 'Maxwell',
			isArchieved: true,
			emailId: 'maxiii@gmail.com',
			img: 'https://is2-ssl.mzstatic.com/image/thumb/MGYkSX0RkVpcFqOZcMdAVQ/1200x675mf.jpg',
			chatList: [
				{
					id: 1,
					currUser: false,
					message: 'Hy! Maxxi',
					timeStamp: 1692542359749,
				},
				{
					id: 2,
					currUser: true,
					message: 'I am going to play ipl will you be coming to watch me play?',
					timeStamp: 1692542359800,
				},
				{
					id: 3,
					currUser: true,
					message: 'Yeh sure meet you tomorow 7:PM im the stadium',
					timeStamp: 1692542359800,
				},
			],
		},
	],
	selectedUser: { id: 1, userName: 'Henry' },
	currUserDetails: {
		id: 131,
		userName: 'chrismessy',
		name: 'Chris Messy',
		emailId: 'chrismessy.com',
		profileDesc: 'Lead UI developer',
		isActive: true,
		img: 'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg',
	},
};

const ManageChats = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_SELECTED_USER': {
			let selectedUser = { id: action.payload.id, userName: action.payload.userName };
			return { ...state, selectedUser };
		}
		case 'CHAT_SEND': {
			const selectedUser = state.selectedUser;
			let freindList = [...state.freindList];
			let chatList = [];
			let selectedIndex = null;
			for (let index in freindList) {
				if (freindList[index].id === selectedUser.id) {
					chatList = [...freindList[index].chatList];
					selectedIndex = parseInt(index);
				}
			}
			chatList.push({
				id: chatList.length + 1,
				message: action.payload.currentText,
				currUser: true,
				timeStamp: action.payload.currentTimestamp,
			});
			chatList.push({
				id: chatList.length + 1,
				message: 'Hey there, i am bot groot what you want me to do?',
				currUser: false,
				timeStamp: action.payload.currentTimestamp,
			});
			return {
				...state,
				freindList: [
					...state.freindList.slice(0, selectedIndex),
					{ ...state.freindList[selectedIndex], chatList: [...chatList] },
					...state.freindList.slice(selectedIndex + 1, state.freindList.length + 1),
				],
			};
		}
		case 'UPDATE_TO_ARCHIVE': {
			const selectedUser = state.selectedUser;
			let freindList = [...state.freindList];
			const totalNoOfFriends = freindList.length;

			let isArchivedTemp = false;
			let selectedIndex = null;
			for (let index in freindList) {
				if (freindList[index].id === selectedUser.id) {
					isArchivedTemp = freindList[index].isArchieved;
					selectedIndex = parseInt(index);
				}
			}

			return {
				...state,
				freindList: [
					...state.freindList.slice(0, selectedIndex),
					{ ...state.freindList[selectedIndex], isArchieved: !isArchivedTemp },
					...state.freindList.slice(selectedIndex + 1, totalNoOfFriends),
				],
			};
		}
		case 'UPDATE_USER_STATUS': {
			const userIsActive = state.currUserDetails.isActive;
			return { ...state, currUserDetails: { ...state.currUserDetails, isActive: !userIsActive } };
		}
		default:
			return state;
	}
};

export default ManageChats;
