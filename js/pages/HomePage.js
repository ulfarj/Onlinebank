var React = require('react');
var Header = require('../components/Header.js');

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

var mainArea = {	
	paddingTop: '30',
	paddingBottom: '50',
	paddingRight: '10',
	paddingLeft: '10'
};

module.exports = HomePage;