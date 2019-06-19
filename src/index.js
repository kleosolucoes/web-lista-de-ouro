import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom'

const logger = store => next => action => {
	console.group(action.type)
	console.info('despachando', action)
	let resultado = next(action)
	console.log('proximo', store.getState())
	console.groupEnd(action.type)
	return resultado
}
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
