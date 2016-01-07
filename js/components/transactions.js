var React = require('react');

var Transactions = React.createClass({

	getInitialState: function()
	{
		return{
			transactions: [],
			loader: false
		}
	},

	componentWillMount: function()
	{

	},

	fetchData: function(accountId)
	{
		$.ajax({
	      type: "GET",
	      url: 'http://217.28.191.124/ibankingwebapi/api/transaction'+accountId,
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

	render: function()
	{
		return(
			<div>Transactions</div>
		);
	}
});

module.exports = Transactions;
