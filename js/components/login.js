var React = require('react');


var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var Login = React.createClass({

	getInitialState: function() {
        return {
            username: null,
            password: null,
            token: null
        };
    },

	onLogin: function()
	{	
		var data = {
			grant_type: 'password',
			username: this.refs.username.getValue(),		
			password: this.refs.password.getValue()
		};

		$.ajax({
	      type: "POST",
	      url: 'http://localhost:49544/Token',
	      data: data,
	      success: function(data) {	        
	        console.log(data);
	        //this.setState({token: data.access_token});
	        localStorage.token = data.access_token;
	      },
	      error: function(xhr, status, err) {
	        console.log(err);
	      }	      
	    });
	},

	render: function(){

		return(
			<div style={{width: '300'}}>
				<div>Username:</div>
				<div><Input type="text" ref="username" /></div>

				<div>Password:</div>
				<div><Input type="text" ref="password" /></div>

				<div>
					<Button onClick={this.onLogin} bsStyle="primary">Login</Button> 
				</div>
			</div>
		);
	}
});

module.exports = Login;