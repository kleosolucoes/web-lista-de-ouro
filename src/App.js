import React from 'react'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import Principal from './componentes/Principal'
import Captura from './componentes/Captura'
import DadosCaptura from './componentes/DadosCaptura'
import {
	alterarUsuario
} from './actions'
import {
	connect
} from 'react-redux'

class App extends React.Component {

	state = {
		tela: 'Inicial',
	}

	alterarTela = (tela) => this.setState({tela})

	deslogar = () => {
		this.props.alterarUsuario({})
		alert('Você deslogou')
		this.alterarTela('Login')
	}

	render () {
		const {
			tela
		} = this.state
		const links = [
			'Inicial',
			'Principal',
			'Registro',
			'Login',
			'Captura',
			'DadosCaptura',
		]
		return (
			<div>
				<p>Web Lista de Ouro</p>
				{
					links.map(item => 
						<button 
							key={item}
							onClick={() => this.alterarTela(item)}>
							{item}
						</button>
					)
				}
				<button
					onClick={() => this.deslogar()}>
					deslogar
				</button>
				{
					tela === 'Inicial' &&
						<p>
							Site da fields
						</p>
				}
				{
					tela === 'Principal' &&
						<Principal 
							alterarTela={this.alterarTela}
						/>
				}
				{
					tela === 'Registro' &&
						<Registro 
							alterarTela={this.alterarTela}
						/>
				}
				{
					tela === 'Login' &&
						<Login 
							alterarTela={this.alterarTela}
						/>
				}
				{
					tela === 'Captura' &&
						<Captura  />
				}
				{
					tela === 'DadosCaptura' &&
						<DadosCaptura  
							alterarTela={this.alterarTela}
						/>
				}

			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		alterarUsuario: (dados) => dispatch(alterarUsuario(dados)),
	}
}

export default connect(null, mapDispatchToProps)(App)
