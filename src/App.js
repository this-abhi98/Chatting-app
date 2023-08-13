import { Provider } from 'react-redux';
import './App.css';
import ChatContainer from './components/ChatContainer/ChatContainer';
import store from './Store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<ChatContainer />
			</div>
		</Provider>
	);
}

export default App;
