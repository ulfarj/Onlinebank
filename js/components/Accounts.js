var React = require('react');
var $ = require ('jquery');

var AccountRow = require('./accountRow.js');
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

		var accounts = this.state.accounts.map(function(account) {
            return (                       	
            	<AccountRow account={account} />            	
              );            
         });

		return(
			<div>			
				<div>
					<Table striped bordered condensed hover>
					    <thead>
					      <tr>					        					        
					      	<th style={expandColumn}></th>
					        <th>Account</th>
					        <th>Account number</th>	
					        <th>Account owner</th>				        
					        <th>Total</th>
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

var expandColumn={
	width: '5'	
};

module.exports = Accounts;