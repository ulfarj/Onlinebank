var React = require('react');

var Router = require('react-router');
var Route = require('react-router').Route;
var Router = require('react-router').Router;

var HomePage = require('./pages/HomePage.js');
var AccountsPage = require('./pages/AccountsPage.js');

var Routes = React.createClass({

  render: function(){    
    return(
    	<Router>
		 	<Route path="/" component={HomePage}></Route>
	  		<Route path="/Accounts" component={AccountsPage}></Route>
	  	</Router>    
    );
  }
});

module.exports = Routes;