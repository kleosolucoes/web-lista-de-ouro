import React from 'react'
import Principal from './componentes/Principal'
import Captura from './componentes/Captura'
import {
	Route,
	Switch,
} from 'react-router-dom'

class App extends React.Component {

	render () {
		return (
			<div>
				<Switch>
					<Route exact={true} path="/" component={Principal} />
					<Route path="/:id" component={Captura} />
				</Switch>
			</div>
		)
	}
}

export default App
