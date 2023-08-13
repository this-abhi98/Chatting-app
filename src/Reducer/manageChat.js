const initialState = {
	chatList: [
		{
			id: 1,
			currUser: false,
			message: 'Hy! Henry',
		},
		{
			id: 2,
			currUser: true,
			message: 'Hey Jon. How can i help you today?',
		},
		{
			id: 3,
			currUser: false,
			message: 'Thanks for asking, I am interested in app you are selling online',
		},
		{
			id: 4,
			currUser: true,
			message: "That's great. let schedule 1-1 meeting to know more about the product.",
		},
		{
			id: 5,
			currUser: false,
			message: 'yeah sure thanks.see you there in the meeting',
		},
	],
};

const ManageChats = (state = initialState, action) => {
	switch (action.type) {
		case 'CHAT_SEND': {
			let chatList = [...state.chatList];
			chatList.push({ id: chatList.length + 1, message: action.payload, currUser: true });
			chatList.push({ id: chatList.length + 1, message: 'Hey there, i am bot groot what you want me to do?', currUser: false });
			return { ...state, chatList };
		}
		default:
			return state;
	}
};

export default ManageChats;
