var React = require('react');
var Sticky = require('react-sticky');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Img = require('react-bootstrap').Img;

var FontAwesome = require('react-fontawesome');
 
var Header = React.createClass({
  render: function() {
    return (
      <Sticky stickyStyle={headerArea}>          
          <div style={headerNav}>
            <img src="../../img/decoration.png" style={decoration}  />
              
            <a href="/#" style={firstHeaderNavLink}>
              <FontAwesome name="home" style={headerNavIcon} size='3x' />Home
            </a>
            <a href="/#/Accounts" style={headerNavLink}>
              <FontAwesome name="usd" style={headerNavIcon} size='3x' />Accounts
            </a>
            <a href="/#/Transactions" style={headerNavLink}>
              <FontAwesome name="money" style={headerNavIcon} size='3x' />Transactions
            </a>
            <a href="/#/Loans" style={headerNavLink}>
              <FontAwesome name="bar-chart" style={headerNavIcon} size='3x' />Loans
            </a>
            <a href="/#/Transfer" style={headerNavLink}>
              <FontAwesome name="arrows-h" style={headerNavIcon} size='3x' />Transfer
            </a>
          </div>
      </Sticky>
    );
  },
});

var decoration={
  left: '-40',
  position: 'absolute'
};

var headerArea={
  height: '100',
  backgroundColor: '#2C3E50'  
};

var headerNav={    
  display: 'flex',
  flexDirection: 'row'  
};

var firstHeaderNavLink={  
  paddingTop: '20',
  paddingLeft: '180',
  color: '#fff',
  display: 'block',
  textDecoration: 'none'    
};

var headerNavLink={
  paddingTop: '20',
  paddingLeft: '60',
  color: '#fff',
  display: 'block',
  textDecoration: 'none'    
};

var headerNavIcon={  
  color: 'white',
  textAlign: 'center',
  display: 'block'  
};

module.exports = Header;
 