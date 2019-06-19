let api = 'http://192.168.0.14:8080'
api = 'https://secure-woodland-24244.herokuapp.com'
const headers = {
	'Content-Type': 'application/json'
}

export const teste = () => 
	fetch(`${api}/`)
		.then(resultado => resultado.json())
		.then(json => json)

export const registrarNaAPI = (dados) =>
	fetch(
		`${api}/no/registrar`,
		{
			headers,
			method: "POST",
			body: JSON.stringify(dados),
		}
	)
		.then(resultado => resultado.json())
		.then(json => json)

export const logarNaApi = (dados) =>
	fetch(
		`${api}/no/logar`,
		{
			headers,
			method: "POST",
			body: JSON.stringify(dados),
		}
	)
		.then(resultado => resultado.json())
		.then(json => json)

export const sincronizarNaAPI = (dados) =>
	fetch(
		`${api}/no/sincronizar`,
		{
			headers,
			method: "POST",
			body: JSON.stringify(dados),
		}
	)
		.then(resultado => resultado.json())
		.then(json => json)

export const alterarUsuarioNaApi = (dados) =>
	fetch(
		`${api}/no/alterar`,
		{
			headers,
			method: "POST",
			body: JSON.stringify(dados),
		}
	)
		.then(resultado => resultado.json())
		.then(json => json)

export const consultarApelidoNaApi = (dados) =>
	fetch(
		`${api}/no/apelido`,
		{
			headers,
			method: "POST",
			body: JSON.stringify(dados),
		}
	)
		.then(resultado => resultado.json())
		.then(json => json)

export const cadastrarProspectoNaApi = (dados) =>
	fetch(
		`${api}/no/cadastrarProspecto`,
		{
			headers,
			method: "POST",
			body: JSON.stringify(dados),
		}
	)
		.then(resultado => resultado.json())
		.then(json => json)
