import reactLogo from './assets/react.svg';
import { CurrentYear, CurrentYearJS } from './utils/utils';

import './App.css';

function App() {
	return (
		<>
			<div>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Learn React</h1>
			<div className="card">
				<CurrentYearJS />
			</div>
		</>
	);
}

export default App;
