import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'

class Header extends Component {
  static propTypes = {
    auth: PropTypes.object, 
    logout: PropTypes.func
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul
      className='navbar-nav mr-auto mt-2 mt-lg-0'
      style={{ marginLeft: '1120px' }}
    >
      <span className='navbar-text mr-3' style={{width: '116px', marginLeft: '-54px', fontSize: '16px'}}>
        <strong>{user ? `Welcome ${user.username}` : ''}</strong>
      </span>
      <li className='nav-item'>
        <button onClick={this.props.logout} className='nav-link btn btn-info btn-sm text-light'>Logout</button>
      </li>
    </ul>

    )

    const guestLinks = (
      <ul
      className='navbar-nav mr-auto mt-2 mt-lg-0'
      style={{ marginLeft: '1120px' }}
    >
      <li>
        <Link to='/register' className='nav-link'>
          Register
        </Link>
      </li>

      <li>
        <Link to='/login' className='nav-link'>
          Login
        </Link>
      </li>
    </ul>

    )
    return (
      <div>
        <nav
          className='navbar navbar-expand-sm navbar-dark bg-dark'
          style={{ width: '1422px' }}
        >
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
            <a className='navbar-brand' href='#'>
              Twitter Clone
            </a>
           
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);
