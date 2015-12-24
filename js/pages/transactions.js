var React = require('react');
var Header = require('../components/header.js');

var TransactionsPage = React.createClass({
	render: function(){
		return(
			<div>
				<Header />
				<div style={mainArea}>
					Transactions
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

module.exports = TransactionsPage;