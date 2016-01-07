var React = require('react');
var ProgressBar = require('react-bootstrap').ProgressBar;
var Dropdown = require('react-bootstrap').Dropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var Button = require('react-bootstrap').Button;

var AccountsDropDown = React.createClass({

	getInitialState: function(){
		return {
			accounts: [],
			loaded: false
		}
	},
	
	componentWillMount: function(){		
		this.fetchData();
	},

	fetchData: function(){
	
		$.ajax({
	      type: "GET",
	      url: 'http://217.28.191.124/ibankingwebapi/api/deposit',
	      dataType: 'json',
	      contentType: "application/json; charset=utf-8",
	      success: function(accounts) {	      	
	        this.setState({accounts: accounts});
	        this.setState({loaded: true});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.log(err);
	      }   
	    });    
	},

	render: function()
	{
		if (!this.state.loaded) {
            return (<ProgressBar active now={100} />);
        }

		var accounts = this.state.accounts.map(function(account){
			return(
				<MenuItem>{account.Name} - {account.AccountNumber}</MenuItem>
			);
		});

		return(
			<Dropdown id="accountsDropdown">
				<Button>
		        	Select account
		        </Button>
				<Dropdown.Toggle bsStyle="primary"/>
				<Dropdown.Menu>
				{accounts}
				</Dropdown.Menu>
			</Dropdown>
		);
	}
});

module.exports = AccountsDropDown;