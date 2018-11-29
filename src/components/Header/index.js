import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__inner">
          <h1 className="Header__title">PhotoStream</h1>
          <label className="Header__label">
            Tag search:
            <input
              className="Header__input"
              type="text"
              placeholder="Enter tag name"
              aria-controls="Stories"
              onChange={this.props.onChange}/>
          </label>
        </div>
      </div>
    )
  }
}

export default Header;
