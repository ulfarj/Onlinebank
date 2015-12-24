var React = require('react');

var Loader = React.createClass({

	render: function()
	{
		return(
			<div style={loader}>
  				<i className="fa fa-5x fa-spinner fa-spin"></i>
  			</div>
		);
	}
});

var loader = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

module.exports = Loader;