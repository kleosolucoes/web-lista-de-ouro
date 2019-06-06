import React from 'react';
import {
	alterarUsuarioNaApi,
} from '../actions'
import { connect } from 'react-redux'
import {
	gold
} from '../helpers/colors'

class DadosCaptura extends React.Component {

	state = {
		nomeCaptura: '',
		url: '',
		carregando: false,
	}

	componentDidMount(){
		const {
			usuario,
			alterarTela,
		} = this.props

		if(usuario.email === undefined){
			alterarTela('Login')
		}else{
			if(usuario.nomeCaptura){
				this.setState({nomeCaptura: usuario.nomeCaptura})
			}
			if(usuario.url){
				this.setState({url: usuario.url})
			}
		}
	}

	ajudadorDeCampo = event => {
		let valor = event.target.value
		const name = event.target.name
		this.setState({[name]: valor})
	}

	ajudadorDeSubmissao = () => {
		const {
			nomeCaptura,
			url,
		} = this.state
		const {
			alterarUsuarioNaApi,
			usuario,
		} = this.props

		let mostrarMensagemDeErro = false
		if (nomeCaptura === '') {
			mostrarMensagemDeErro = true
		}

		if (url === '') {
			mostrarMensagemDeErro = true
		}

		if (mostrarMensagemDeErro) {
			alert('Erro: Campos invalidos')
		} else {
			this.setState({carregando:true})
			const dados = {
				nomeCaptura,
				url,
				email: usuario.email
			}
			alterarUsuarioNaApi(dados)
				.then(retorno => {
					if(retorno){
						alert('Dados de captura salvo com sucesso!')
						this.setState({carregando:false})
						this.props.alterarTela('Principal')
					}else{
						this.setState({carregando:false})
						alert('Verifique sua internet')
					}
				})
		}
	}

	render() {
		const {
			nomeCaptura,
			url,
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
										<p style={{ color: gold }}>Nome para Aparecer</p>
									</div>
									<input
										name='nomeCaptura'
										value={nomeCaptura}
										onChange={this.ajudadorDeCampo}
									/>
								</div>
								<div style={{ marginTop: 18 }}>
									<div style={{ flexDirection: 'row' }}>
										<p>
											icone
										</p>
										<p style={{ color: gold }}>Url do youtube</p>
									</div>
									<input 
										name='url'
										value={url}
										onChange={this.ajudadorDeCampo}
									/>
								</div>
							</div>

							<div>
								<button
									onClick={() => this.ajudadorDeSubmissao()}>
									salvar
								</button>
							</div>

						</div>
				}
			</div>
		)
	}
}

const mapStateToProps = ({usuario}) => {
	return {
		usuario,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		alterarUsuarioNaApi: (dados) => dispatch(alterarUsuarioNaApi(dados)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DadosCaptura)
