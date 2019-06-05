import React from 'react';
import {
	gold
} from '../helpers/colors'
import {
	registrarNaApiEAlterarUsuario,
} from '../actions'
import { connect } from 'react-redux'

class Registro extends React.Component {

	state = {
		carregando: false,
		nome: 'leo',
		ddd: '61',
		telefone: '998510703',
		email: 'falecomleonardopereira@gmail.com',
		senha: '123',
	}

	ajudadorDeSubmissao = () => {
		const {
			nome,
			ddd,
			telefone,
			email,
			senha,
		} = this.state
		let camposComErro = ''
		let mostrarMensagemDeErro = false

		if (nome === '') {
			mostrarMensagemDeErro = true
			if (camposComErro === '') {
				camposComErro = 'Nome'
			}
		}

		if (ddd === '' || ddd.length !== 2) {
			mostrarMensagemDeErro = true
			if (camposComErro !== '') {
				camposComErro += ', '
			}
			camposComErro += 'DDD'
		}

		if (telefone === '' || telefone.length !== 9) {
			mostrarMensagemDeErro = true
			if (camposComErro !== '') {
				camposComErro += ', '
			}
			camposComErro += 'Telefone'
		}

		if (email === '') {
			mostrarMensagemDeErro = true
			if (camposComErro !== '') {
				camposComErro += ', '
			}
			camposComErro += 'Email'
		}

		if (senha === '') {
			mostrarMensagemDeErro = true
			if (camposComErro !== '') {
				camposComErro += ', '
			}
			camposComErro += 'Senha'
		}

		if (mostrarMensagemDeErro) {
			alert(`Campos invalidos: ${camposComErro}`)
		} else {
			try {
				this.setState({ carregando: true })
				const dados = {
					nome,
					ddd,
					telefone,
					email,
					senha,
				}
				registrarNaApiEAlterarUsuario(dados)
					.then(resposta => {
						this.setState({ carregando: false })
						if (resposta) {
							alert('Registrado com sucesso!')
							this.props.alterarTela('Principal')
						} else {
							alert(`Aviso: ${resposta.menssagem}`)
						}
					})
					.catch(error => console.log('error: ', error))
			} catch (err) {
				alert(`Error: ${err}`)
			}
		}
	}

	render() {
		const {
			carregando,
			nome,
			ddd,
			telefone,
			email,
			senha,
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
								<div>
									<div style={{ flexDirection: 'row' }}>
										<p>
											icone
										</p>
										<p style={{ color: gold }}>Nome</p>
									</div>
									<input 
										value={nome}
										onChange={texto => this.setState({ nome: texto })}
									/>
								</div>

								<div style={{ marginTop: 8, flexDirection: "row" }}>
									<div style={{ width: 50, marginRight: 10 }}>
										<div style={{ flexDirection: 'row' }}>
											<p>
												icone
											</p>
											<p style={{ color: gold }}>DDD</p>
										</div>
										<input
											value={ddd}
											onChange={texto => this.setState({ ddd: texto })}
										/>
									</div>

									<div style={{ flex: 1 }}>
										<div style={{ flexDirection: 'row' }}>
											<p style={{ color: gold }}>Telefone</p>
										</div>
										<input 
											value={telefone}
											onChange={texto => this.setState({ telefone: texto })}
										/>
									</div>
								</div>

								<div style={{ marginTop: 8 }}>
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

								<div style={{ marginTop: 8 }}>
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
						<button onClick={() => this.ajudadorDeSubmissao()}>
							<p>Registrar</p>
						</button>
					</div>
				}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		registrarNaApiEAlterarUsuario: (dados) => dispatch(registrarNaApiEAlterarUsuario(dados)),
	}
}

export default connect(null, mapDispatchToProps)(Registro)
