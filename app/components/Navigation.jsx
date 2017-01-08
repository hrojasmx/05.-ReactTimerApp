var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            {/* link to the root of the application */}
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            {/* link to a subpage */}
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://www.vpycweb.net23.net" target="_blank">Hector Rojas</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
