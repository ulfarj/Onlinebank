var React = require('react');
var ReactDOM = require('react-dom');

var Accounts = require('./components/Accounts.js');

var Main = React.createClass({

  render: function(){    
    return(
    	<div style={container}>
    	  <div style={headerArea}></div>	
    	  <div style={mainArea}>
	    	  <div style={menuArea}></div>
		      <div style={contentArea}>
		      	<div>
		      		<Accounts />
		      	</div>
		      </div>
	      </div>
	      <div style={footerArea}></div>
	     </div>	    
    );
  }
});

var container={
	/*backgroundColor: '#F8F8F8'*/
};

var headerArea={
	height: '100',
	backgroundColor: '#2C3E50'	
};

var mainArea = {
	display: 'flex',
  	flexDirection: 'row'	
};

var menuArea = {
	flex: 2
};

var contentArea = {
	flex: 8,
	paddingTop: '30',
	paddingBottom: '50',
	paddingRight: '10',
	/*paddingLeft: '10',	*/
	backgroundColor: '#fff'
};

var footerArea = {
	height: '150',
	backgroundColor: '#5A6467'
};

ReactDOM.render(<Main />, document.getElementById('app'));