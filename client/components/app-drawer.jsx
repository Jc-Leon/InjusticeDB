import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const isClicked = this.state.isClicked;
    return (
      <div className="menu">
        <div>
          <i onClick={this.handleClick} className="fas fa-bars"></i>
        </div>
        <div
          onClick={this.handleClick}
          className={isClicked ? 'blackout' : 'blackout hidden'}
        ></div>
        <div className={isClicked ? 'sidebar' : 'sidebar hidden'}>
          <a href="">
            <p onClick={this.handleClick}>View Characters</p>
          </a>
          <a href="">
            <p onClick={this.handleClick}>How to Navigate</p>
          </a>
          <a href="">
            <p onClick={this.handleClick}>Create New Move Set</p>
          </a>
          <a href="">
            <p onClick={this.handleClick}>Update Move Set</p>
          </a>
          <a href="">
            <p onClick={this.handleClick}>Delete Move Set</p>
          </a>
          <a href="">
            <p onClick={this.handleClick}>Search For A Character</p>
          </a>
        </div>
      </div>
    );
  }
}
