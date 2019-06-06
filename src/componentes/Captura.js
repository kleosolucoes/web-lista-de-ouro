import React from 'react'
import { connect } from 'react-redux'

class Captura extends React.Component {

	render () {
		const {
			nomeCaptura,
			url
		} = this.props.usuario
		return (
			<div>
				<p>Captura</p>
				<p> Nome captura: {nomeCaptura ? nomeCaptura : ''}</p>
				<p> Url: {url ? url : ''}</p>
			</div>
		)
	}
}

const mapStateToProps = ({usuario}) => {
	return {
		usuario,
	}
}

export default connect(mapStateToProps, null)(Captura)
