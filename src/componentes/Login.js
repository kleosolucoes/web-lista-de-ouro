import React from 'react';
import {
	logarNaApiEAlterarUsuario,
} from '../actions'
import { connect } from 'react-redux'
import {
	gold
} from '../helpers/colors'

class Login extends React.Component {

	state = {
		email: 'falecomleonardopereira@gmail.com',
		senha: '123',
		carregando: false,
	}

	ajudadorDeSubmissao = () => {
		const {
			email,
			senha,
		} = this.state
		const {
			logarNaApiEAlterarUsuario
		} = this.props

		let mostrarMensagemDeErro = false
		if (email === '') {
			mostrarMensagemDeErro = true
		}

		if (senha === '') {
			mostrarMensagemDeErro = true
		}

		if (mostrarMensagemDeErro) {
			alert('Erro: Campos invalidos')
		} else {
			this.setState({carregando:true})
			const dados = {
				email,
				senha,
			}
			logarNaApiEAlterarUsuario(dados)
				.then(retorno => {
					if(retorno){
						this.setState({carregando:false})
						this.props.alterarTela('Principal')
					}else{
						this.setState({carregando:false})
						alert('Usuário/Senha não conferem!')
					}
				})
		}
	}

	render() {
		const {
			email,
			senha,
			carregando,
		} = this.state
		return (
			<div>
				{
					carregando && 
					<p>
						Carregando ...
					</p>
				}

				{
					!carregando &&
						<div>

							<div>
								<p>
									img
								</p>
							</div>

							<div>
								<div>
									<div style={{ flexDirection: 'row' }}>
										<p>
											icone
										</p>
										<p style={{ color: gold }}>Email</p>
									</div>
									<input
										value={email}
										onChange={texto => this.setState({ email: texto })}
									/>
								</div>
								<div style={{ marginTop: 18 }}>
									<div style={{ flexDirection: 'row' }}>
										<p>
											icone
										</p>
										<p style={{ color: gold }}>Senha</p>
									</div>
									<input 
										value={senha}
										onChange={texto => this.setState({ senha: texto })}
									/>
								</div>
							</div>

							<div>
								<button
									onClick={() => this.ajudadorDeSubmissao()}>
									Logar
								</button>
							</div>

							<div>
								<button
									onClick={() => this.props.navigation.navigate('Registro')}>
									Crie sua conta
								</button>
							</div>

						</div>
				}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logarNaApiEAlterarUsuario: (dados) => dispatch(logarNaApiEAlterarUsuario(dados)),
	}
}

export default connect(null, mapDispatchToProps)(Login)
