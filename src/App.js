import { Provider } from 'react-redux';
import { CounterButton } from './CounterButton';
import { store } from './store';
import './App.css';
import PostList from './PostList';

const App = () => {
	return (
		<Provider store={store}>
			<h1>State Management Example</h1>
			<CounterButton />
			<PostList/>
		</Provider> 
	);
}

export default App;
