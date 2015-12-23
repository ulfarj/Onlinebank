var React = require('react');

var Router = require('react-router');

var Route = require('react-router').Route;
var Router = require('react-router').Router;

var Home = require('./components/Home.js');

var Routes = React.createClass({

  render: function(){    
    return(
    	<Router>
		 	<Route path="/" component={Home}></Route>
		  	<Route path="/Accounts" component={Accounts}></Route>
	  	</Router>    
    );
  }
});

module.exports = Routes;