var React = require('react');
var ReactDOM = require('react-dom');

var Accounts = require('./components/Accounts.js');

var Main = React.createClass({

  render: function(){    
    return( 
      <div>
      	<Accounts />
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('app'));