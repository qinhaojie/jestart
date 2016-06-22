import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const actions = {
	test : function () {
		return {
			type:'TEST',
			text:'ok'
		}
	}
}

class App extends Component {
	render() {

		
		return (
			<div>
				<TestButton
					handleClick={this.props.actions.test}
				>
				{this.props.test.text}
				</TestButton>
			</div>
		)
	}
}

class TestButton extends Component{
	render(){
		return (
			<button onClick={this.props.handleClick}>
			{this.props.children}
			</button>
		)
	}
}



function mapStateToProps(state) {
	return {
		test: state.test
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
