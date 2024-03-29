import * as api from '../helpers/api'
export const PEGAR_PROSPECTOS = 'PEGAR_PROSPECTOS'
export const ADICIONAR_PROSPECTOS = 'ADICIONAR_PROSPECTOS'
export const ALTERAR_PROSPECTO = 'ALTERAR_PROSPECTO'
export const PEGAR_ADMINISTRACAO = 'PEGAR_ADMINISTRACAO'
export const ALTERAR_ADMINISTRACAO = 'ALTERAR_ADMINISTRACAO'
export const PEGAR_USUARIO = 'PEGAR_USUARIO'
export const ALTERAR_USUARIO = 'ALTERAR_USUARIO'

export function pegarProspectos(prospectos){ 
	return {
		type: PEGAR_PROSPECTOS,
		prospectos,
	}
}

export function adicionarProspectos(prospectos){ 
	return {
		type: ADICIONAR_PROSPECTOS,
		prospectos,
	}
}

export function alterarProspecto(prospecto){ 
	return {
		type: ALTERAR_PROSPECTO,
		prospecto,
	}
}

export function pegarAdministracao(administracao){ 
	return {
		type: PEGAR_ADMINISTRACAO,
		administracao,
	}
}

export function alterarAdministracao(administracao){ 
	return {
		type: ALTERAR_ADMINISTRACAO,
		administracao,
	}
}

export function pegarUsuario(usuario){ 
	return {
		type: PEGAR_USUARIO,
		usuario,
	}
}

export function alterarUsuario(usuario){ 
	return {
		type: ALTERAR_USUARIO,
		usuario,
	}
}

export const logarNaApiEAlterarUsuario = (dados) => dispatch => {
	return api.logarNaApi(dados)
		.then(retornoDaApi => {
			if(retornoDaApi.ok){
				if(retornoDaApi.resultado.nomeCaptura){
					dados.nomeCaptura = retornoDaApi.resultado.nomeCaptura
				}
				if(retornoDaApi.resultado.url){
					dados.url = retornoDaApi.resultado.url
				}
				dispatch(alterarUsuario(dados))
				return true
			}
			if(!retornoDaApi.ok){
				return false
			}
		})
}

export const registrarNaApiEAlterarUsuario = (dados) => dispatch => {
	return api.registrarNaAPI(dados)
		.then(retornoDaApi => {
			if(retornoDaApi.ok){
				dispatch(alterarUsuario(dados))
				return true
			}
			if(!retornoDaApi.ok){
				return false
			}
		})
}

export const alterarUsuarioNaApi = (dados) => dispatch => {
	return api.alterarUsuarioNaApi(dados)
		.then(retornoDaApi => {
			if(retornoDaApi.ok){
				dispatch(alterarUsuario(dados))
				return true
			}
			if(!retornoDaApi.ok){
				return false
			}
		})
}
