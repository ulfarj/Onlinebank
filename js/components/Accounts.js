var React = require('react');
var $ = require ('jquery');

var Account = require('./account.js');
var Table = require('react-bootstrap').Table;
var FontAwesome = require('react-fontawesome');


var Accounts = React.createClass({

	getInitialState: function(){
		return {
			accounts: []
		}
	},
	
	componentWillMount: function(){
		
		this.fetchData();
	},

	fetchData: function(){
	
		$.ajax({
	      type: "GET",
	      url: 'http://217.28.191.124/ibankingwebapi/api/deposit',
	      dataType: 'json',
	      contentType: "application/json; charset=utf-8",
	      success: function(accounts) {	      	
	        console.log(accounts);
	        this.setState({accounts: accounts});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.log(err);
	      }   
	    });    
	},

	componentDidMount: function(){
  
  	},

	render: function()
	{

/*<tr key={account.AccountId} onClick={e => this.setState({ target: e.target, show[account.AccountId]: !this.state.show })}>              		
              		<td><FontAwesome name='plus-square' style={plusSquare} /></td>
              		<td>{account.Name}</td>
              		<td>{account.AccountNumber}</td>
              		<td>{account.AccountHolderName}</td>
              		<td>{account.Balance}</td>              		
              	</tr>      */
		var accounts = this.state.accounts.map(function(account) {
            return (
            	<Account account={account} />
              );
          });

		return(
			<div>
			
				<div>
					<Table striped bordered condensed hover>
					    <thead>
					      <tr>					        					        
					      	<th style={plusArea}></th>
					        <th>Reikningur</th>
					        <th>Reikningsnúmer</th>	
					        <th>Eigandi reiknings</th>				        
					        <th>Alls</th>
					      </tr>
					    </thead>
					    <tbody>
					    	{accounts}
					    </tbody>
					 </Table>   
				</div>
			
			</div>
			);
	}
});

var plusArea={
	width: '5'	
};


module.exports = Accounts;