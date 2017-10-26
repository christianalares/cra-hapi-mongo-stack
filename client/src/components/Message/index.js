import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getMessages } from '../../actions/app'
import { postMessage } from '../../actions/app'

import './message.css'


class Message extends Component {
    constructor(props) {
		super(props)

		this.state = {
			messageInput: ''
		}
		
		this.handleSubmit = this.handleSubmit.bind(this)
    }

	componentDidMount() {
		this.props.dispatch( getMessages() )
	}

	handleSubmit(e) {
		e.preventDefault()

		this.setState({ messageInput: '' })

		this.props.dispatch( postMessage(this.state.messageInput) )
	}

	render() {
		return (
			<div className="mycomponent">
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.messageInput} onChange={ (e) => this.setState( { messageInput: e.target.value } ) } name="message" type="text" /> 
					<button type="submit">Insert message</button>
				</form>

				<ul>
					{
						this.props.messages.map(message => {
							return (<li key={message._id}>{ message.message }</li>)
						})
					}
				</ul>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		messages: state.app.messages
	}
}

export default connect(mapStateToProps)(Message)
