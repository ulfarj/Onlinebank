var React = require('react');

var Router = require('react-router');
var Route = require('react-router').Route;
var Router = require('react-router').Router;

var Home = require('./pages/home.js');
var Accounts = require('./pages/accounts.js');
var Transactions = require('./pages/transactions.js');
var Loans = require('./pages/loans.js');
var Transfer = require('./pages/transfer.js');
var Login = require('./pages/login.js');

var Routes = React.createClass({

  render: function(){    
    return(
    	<Router>
		 	<Route path="/" component={Home}></Route>
	  		<Route path="/Accounts" component={Accounts}></Route>
	  		<Route path="/Transactions" component={Transactions}></Route>
	  		<Route path="/Loans" component={Loans}></Route>
	  		<Route path="/Transfer" component={Transfer}></Route>
	  		<Route path="/Login" component={Login}></Route>
	  	</Router>    
    );
  }
});

module.exports = Routes;