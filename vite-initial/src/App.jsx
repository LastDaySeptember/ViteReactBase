// import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg'
import { CurrentYear } from './utils/utils';
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
				<CurrentYear />
			</div>
			{/* <p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p> */}
		</>
	);
}

export default App;
