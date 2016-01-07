var React = require('react');
var Header = require('../components/header.js');
var Loans = require('../components/loans.js');


var LoansPage = React.createClass({
	render: function(){
		return(
			<div>
				<Header />
				<div style={mainArea}>
					<Loans />
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

module.exports = LoansPage;