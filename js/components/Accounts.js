var React = require('react');
var $ = require ('jquery');

var Table = require('react-bootstrap').Table;
var FontAwesome = require('react-fontawesome');

var Loader = require('./loader.js')

var AccountRow = require('./accountRow.js');


var Accounts = React.createClass({

	getInitialState: function(){
		return {
			accounts: [],
			loaded: false
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
	        this.setState({accounts: accounts});
	        this.setState({loaded: true});
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
		if (!this.state.loaded) {
            return (<Loader />);
        }

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