var React = require('react');

var FontAwesome = require('react-fontawesome');

var Account = React.createClass({

	getInitialState: function(){
		return {
			showDetails: false
		}
	},

	showDetails: function(e){		
		this.setState({showDetails: !this.state.showDetails })
	},

	rowData: function()
	{
		return[
				<td><FontAwesome name={this.state.showDetails ? 'minus-square' : 'plus-square'} style={expand} /></td>,
		      	<td>{this.props.account.Name}</td>,
		      	<td>{this.props.account.AccountNumber}</td>,
				<td>{this.props.account.AccountHolderName}</td>,
	            <td>{this.props.account.Balance}</td>
		];
	},

	row: function()
	{
		return(			
			<tr></tr>
		);
	},

	render: function(){
	
		return(
				
			<tr key={this.props.account.AccountId} onClick={e => this.showDetails(e)}>              		
				<td><FontAwesome name={this.state.showDetails ? 'minus-square' : 'plus-square'} style={expand} /></td>
              	<td>{this.props.account.Name}</td>
              	<td>{this.props.account.AccountNumber}</td>
              	<td>{this.props.account.AccountHolderName}</td>
              	<td>{this.props.account.Balance}</td>              		
            </tr>

		);
	}

});

var expand={};

module.exports = Account;