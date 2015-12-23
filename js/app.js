var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router');
var Route = require('react-router').Route;
var Router = require('react-router').Router;

var Header = require('./components/Header.js');
var Accounts = require('./components/Accounts.js');

var HomePage = React.createClass({
	render: function(){
		return(
			<div>
				<Header />
				<div style={mainArea}>
					Home
				</div>
			</div>
		);
	}
});

var AccountPage = React.createClass({

  render: function(){    
    return(
    	<div>
    	  <Header />	
    	  <div style={mainArea}>	    	  	        	  
		   	<Accounts />
		   </div>	      
	     </div>	    
    );
  }
});

var mainArea = {	
	paddingTop: '30',
	paddingBottom: '50',
	paddingRight: '10',
	paddingLeft: '10'
};

var routes = (
	<Router>
	  <Route path="/" component={HomePage}></Route>
	  <Route path="/Accounts" component={AccountPage}></Route>
  	</Router>
);

ReactDOM.render(
	routes, 
	document.getElementById('app')
);