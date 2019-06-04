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
