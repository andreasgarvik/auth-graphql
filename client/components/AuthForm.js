import React, { Component } from 'react'

class AuthForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
	}

	changeValue(e) {
		this.setState({
			[e.target.id]: e.target.value,
		})
	}

	onSubmit(e) {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	render() {
		return (
			<div className="row">
				<form className="col s6" onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input
							id="email"
							placeholder="email"
							value={this.state.email}
							onChange={(e) => this.changeValue(e)}
						/>
					</div>
					<div className="input-field">
						<input
							id="password"
							placeholder="password"
							type="password"
							value={this.state.password}
							onChange={(e) => this.changeValue(e)}
						/>
					</div>
					<div className="errors">
						{this.props.errors.map((e) => (
							<div key={e}>{e}</div>
						))}
					</div>
					<button className="btn">Submit</button>
				</form>
			</div>
		)
	}
}

export default AuthForm
