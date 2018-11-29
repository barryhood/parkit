import React, { Component } from 'react';
import './ErrorMsg.scss';

class ErrorMsg extends Component {
  render() {
    return (
      <div className="ErrorMsg">
        <h1 className="ErrorMsg__title">Oops, something went wrong...</h1>
        <p className="ErrorMsg__text">
          We encountered the following error: 
          <span className="ErrorMsg__error">{this.props.errorMsg}</span>
          and as a result, we couldn't display the stories at this time, please try again later.</p>
      </div>
    )
  }
}

export default ErrorMsg;
