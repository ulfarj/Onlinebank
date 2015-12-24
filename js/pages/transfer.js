var React = require('react');
var Header = require('../components/header.js');

var TransferPage = React.createClass({
	render: function(){
		return(
			<div>
				<Header />
				<div style={mainArea}>
					Transfer
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

module.exports = TransferPage;