var React = require('react');
var Header = require('../components/header.js');
var Accounts = require('../components/accounts.js');

var AccountsPage = React.createClass({

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

module.exports = AccountsPage;