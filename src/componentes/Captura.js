import React from 'react'
import {
	consultarApelidoNaApi,
	cadastrarProspectoNaApi,
} from '../helpers/api'
import {
	withRouter,
} from 'react-router-dom'

class Captura extends React.Component {

	state = {
		carregando: true,
		patrocinadoEncontrado: false,
		nomeCaptura: '',
		url: '',
		nome: '',
		telefone: '',
		email: ''
	}

	ajudadorDeCampo = event => {
		let valor = event.target.value
		const name = event.target.name
		this.setState({[name]: valor})
	}

	ajudadorDeSubmissao = () => {
		const {
			no_id,
			nome,
			telefone,
			email,
		} = this.state
		let camposComErro = ''
		let mostrarMensagemDeErro = false

		if(nome === ''){
			mostrarMensagemDeErro = true
			camposComErro = 'Nome'
		}

		if(telefone === ''){
			mostrarMensagemDeErro = true
			if(camposComErro !== ''){
				camposComErro += ', '
			}
			camposComErro += 'Telefone (ex. 61988888888)'
		}

		if(email === ''){
			mostrarMensagemDeErro = true
			if(camposComErro !== ''){
				camposComErro += ', '
			}
			camposComErro += 'Email'
		}

		camposComErro += '.'

		if(mostrarMensagemDeErro){
			alert('Campos invalidos: ' + camposComErro)
		}else{
			const elemento = {
				no_id,
				nome,
				telefone,
				email,
			}
			cadastrarProspectoNaApi(elemento)
				.then(retorno => {
					if(retorno.ok){
						this.setState({
							nome: '',
							telefone: '',
							email: '',
						})
						alert('Registrado com sucesso!')
					}
				})
		}
	}

	componentDidMount(){
		const apelido = this.props.location.pathname.replace('/', '')
		consultarApelidoNaApi({apelido})
			.then(retorno => { 
				this.setState({carregando: false})
				if(retorno.ok){
					const {
						no_id,
						nomeCaptura,
						url,
					} = retorno.resultado
					this.setState({
						no_id,
						nomeCaptura,
						url,
						patrocinadoEncontrado: true,
					})
				}
			})
	}

	render () {
		const {
			carregando,
			patrocinadoEncontrado,
			no_id,
			nomeCaptura,
			url,
			nome,
			telefone,
			email,
		} = this.state
		return (
			<div>
				{
					carregando &&
						<p>
							carregando ...
						</p>
				}

				{
					!carregando &&
						!patrocinadoEncontrado &&
						<p>
							Patrocinador não encontrado
						</p>
				}

				{ 
				!carregando &&
						patrocinadoEncontrado &&
						<div>

							<header>
								<div className="grid-container">
									<div className="grid-x grid-padding-x">
										<div className="small-4 medium-2 cell">
											<div className="logo">
												<img src="img/logo.svg" />
											</div>
										</div>
									</div>
								</div>
							</header>



							<div className="cover">
								<div className="grid-container">
									<div className="grid-x grid-padding-x">
										<div className="medium-5 cell">
											<div className="title">
												<h1>Olá, quer fazer parte da minha</h1>
												<h1 className="bold">Equipe de sucesso?</h1>
											</div>
										</div>
										<div className="medium-5 medium-offset-2 cell">
											<div className="callout">
												<form id="cadastro-newsletter-cover">
													<input type="hidden" name="action" value="cadastro-newsletter" />
													<input type="hidden" id="no_id" name="no_id" value={no_id} />
													<div className="grid-x grid-padding-x">
														<div className="large-12 cell">
															<div className="form-success">
																<h3>Obrigado!</h3>
																<h4>Seu email cadastrado com sucesso. Você esta muito próximo da sua independência financeira.</h4>
															</div>
															<div className="form-fields">
																<h4>Preencha o formulário</h4>
																<input 
																	value={nome} 
																	type="text" 
																	name="nome" 
																	placeholder="Digite seu nome"
																	onChange={this.ajudadorDeCampo}
																/>
																<input 
																	value={telefone}
																	type="text" 
																	name="telefone" 
																	className="celular" 
																	placeholder="Digite seu celular" 
																	onChange={this.ajudadorDeCampo}
																/>
																<input 
																	value={email}
																	type="text" 
																	name="email" 
																	placeholder="Digite seu email" 
																	onChange={this.ajudadorDeCampo}
																/>
																<button 
																	className="submit" 
																	type="button"
																	onClick={this.ajudadorDeSubmissao}
																><img src="img/arrow.svg" /></button>
																<h5 className="mensagem text-center"></h5>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="video">
								<div className="grid-container">
									<div className="grid-x grid-padding-x">
										<div className="cell text-center">
											<div className="title">
												<h1>Saiba como conseguir sua independência financeira!</h1>
												<h1 className="bold">ESTE VÍDEO VAI MUDAR SUA VIDA!!!</h1>
											</div>
										</div>
										<div className="cell">
											<div className="responsive-embed widescreen">
												<iframe width="560" height="315" src="https://www.youtube.com/embed/D-In5RGYELQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
											</div>
										</div>
									</div>
								</div>
							</div>

							<footer>
								<div className="form">
									<form id="cadastro-newsletter">
										<input type="hidden" name="action" value="cadastro-newsletter" />
										<input type="hidden" id="no_id" name="no_id" value={no_id} />
										<div className="grid-container">
											<div className="grid-x grid-padding-x">
												<div className="large-12 cell">
													<div className="title text-center">
														<h1>A hora é agora!!!</h1>
														<h1 className="bold">Pronto para conseguir o seu sucesso?</h1>
													</div>
													<div className="callout">
														<div className="form-success">
															<h3>Obrigado!</h3>
															<h4>Seu email cadastrado com sucesso. Você esta muito próximo da sua independência financeira.</h4>
														</div>
														<div className="form-fields">
															<h4>Preencha o formulário</h4>
															<div className="grid-x grid-padding-x">
																<div className="large-11 cell">
																	<div className="grid-x grid-padding-x">
																		<div className="large-4 cell">
																			<input 
																				value={nome} 
																				type="text" 
																				name="nome" 
																				placeholder="Digite seu nome"
																				onChange={this.ajudadorDeCampo}
																			/>
																		</div>
																		<div className="large-4 cell">
																			<input 
																				value={telefone}
																				type="text" 
																				name="telefone" 
																				className="celular" 
																				placeholder="Digite seu celular" 
																				onChange={this.ajudadorDeCampo}
																			/>
																		</div>
																		<div className="large-4 cell">
																			<input 
																				value={email}
																				type="text" 
																				name="email" 
																				placeholder="Digite seu email" 
																				onChange={this.ajudadorDeCampo}
																			/>
																		</div>
																	</div>
																</div>
																<div className="large-1 cell">
																	<button 
																		className="submit" 
																		type="button"
																		onClick={this.ajudadorDeSubmissao}
																	><img src="img/arrow.svg" /></button>
																</div>
															</div>
															<h5 className="mensagem text-center"></h5>
														</div>
													</div>
													<div className="title text-center">
														<div className="logo">
															<img src="img/logo_dark.svg" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</footer>

						</div>
				}
			</div>
		)
	}
}

export default withRouter(Captura)
