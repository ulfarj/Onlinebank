var React = require('react');
var Table = require('react-bootstrap').Table;
var Loader = require('./loader.js');
var FontAwesome = require('react-fontawesome');

var Loans = React.createClass({

	getInitialState: function()
	{
		return{
			loans: [],
			loaded: false
		}
	},

	componentWillMount: function(){		
		this.fetchData();
	},

	fetchData: function()
	{		
		$.ajax({
	      type: "GET",
	      url: 'http://ibankapi.ad.acme.is/api/loan',
	      dataType: 'json',
	      contentType: "application/json; charset=utf-8",
	      success: function(loans) {
	      	console.log(loans);	      	
	        this.setState({loans: loans});
	        this.setState({loaded: true});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.log(err);
	      }   
	    });    
	},

	render: function(){

		if (!this.state.loaded) {
            return (<Loader />);
        }

		var loans = this.state.loans.map(function(loan){
			return(
				<tr>
					<td></td>
					<td>{loan.Product}</td>
					<td>{loan.ContractNbr}</td>
					<td>{loan.BalanceWithCurrency}</td>
				</tr>
			);
		});

		return(
			<Table striped bordered condensed hover>
				<thead>
					<th style={expandColumn}></th>
					<th>Loan</th>
					<th>Loan number</th>
					<th>Total</th>
				</thead>
				<tbody>
					{loans}
				</tbody>
			</Table>
		);
	}
});

var expandColumn={
	width: '5'	
};

module.exports = Loans;