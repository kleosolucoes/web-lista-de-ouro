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
		nome: 'Léo Pereira',
		url: 'https://www.youtube.com/watch?v=T8rEbNJqqMA&list=RDT8rEbNJqqMA&index=1',
		carregando: false,
	}

	ajudadorDeSubmissao = () => {
		const {
			nome,
			url,
		} = this.state
		const {
			alterarUsuarioNaApi
		} = this.props

		let mostrarMensagemDeErro = false
		if (nome === '') {
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
				nome,
				url,
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
			nome,
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
										value={nome}
										onChange={texto => this.setState({ nome: texto })}
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
										value={url}
										onChange={texto => this.setState({ url: texto })}
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

const mapDispatchToProps = (dispatch) => {
	return {
		alterarUsuarioNaApi: (dados) => dispatch(alterarUsuarioNaApi(dados)),
	}
}

export default connect(null, mapDispatchToProps)(DadosCaptura)
