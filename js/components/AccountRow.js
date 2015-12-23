var React = require('react');

var FontAwesome = require('react-fontawesome');

var AccountRow = React.createClass({

	getInitialState: function(){
		return {
			showDetails: false
		}
	},

	toggleDetails: function(e){		
		this.setState({showDetails: !this.state.showDetails })
	},

	render: function(){
		
		/*view = [
			<tr>,
				<td><FontAwesome name={this.state.showDetails ? 'minus-square' : 'plus-square'} style={expand} key={this.props.account.AccountId} onClick={e => this.toggleDetails(e)} /></td>,
              	<td>{this.props.account.Name}</td>,
              	<td>{this.props.account.AccountNumber}</td>,
              	<td>{this.props.account.AccountHolderName}</td>,
              	<td>{this.props.account.Balance}</td>,
			</tr>,
			<tr></tr>,
		];*/

		return(
			 <tr>
				<td><FontAwesome name={this.state.showDetails ? 'minus-square' : 'plus-square'} style={expand} key={this.props.account.AccountId} onClick={e => this.toggleDetails(e)} /></td>
              	<td>{this.props.account.Name}</td>
              	<td>{this.props.account.AccountNumber}</td>
              	<td>{this.props.account.AccountHolderName}</td>
              	<td>{this.props.account.Balance}</td>
			</tr>			
		);
	}

});

var expand={};

module.exports = AccountRow;