import React from 'react';
import Create from './create-form';
import Delete from './delete-form';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const name = e.target.getAttribute('name');
    if (
      e.target.className !== 'fas fa-times' &&
      !e.target.className.includes('create-form') && !e.target.className.includes('remove-form')
    ) {
      this.setState({ isClicked: !this.state.isClicked }, () => {
        if (name !== null && !this.state[name]) {
          this.setState({ [name]: true });
        } else {
          this.setState({ [name]: false });
        }
      });
    } else {
      if (name !== null && !this.state[name]) {
        this.setState({ [name]: true });
      } else {
        this.setState({ [name]: false });
      }
    }
  }

  render() {
    const { isClicked, create, remove } = this.state;
    return (
      <>
        <div className="menu">
          <div>
            <i onClick={this.handleClick} className="fas fa-bars"></i>
          </div>
          <div
            onClick={this.handleClick}
            className={isClicked ? 'blackout' : 'blackout hidden'}
          ></div>
          <div className={isClicked ? 'sidebar' : 'sidebar hidden'}>
            <a href="#">
              <p onClick={this.handleClick} name="view">
                View Characters
              </p>
            </a>
            <a href="">
              <p onClick={this.handleClick} name="navigate">
                How to Navigate
              </p>
            </a>
            <a>
              <p onClick={this.handleClick} name="create">
                Create New Move Set
              </p>
            </a>
            <a href="">
              <p onClick={this.handleClick} name="update">
                Update Move Set
              </p>
            </a>
            <a>
              <p onClick={this.handleClick} name="remove">
                Delete Move Set
              </p>
            </a>
            <a href="">
              <p onClick={this.handleClick} name="search">
                Search For A Character
              </p>
            </a>
          </div>
        </div>
        {create && (
          <Create
            handleClick={this.handleClick}
            updateMove={this.props.updateMove}
            character={this.props.character}
          />
        )}
        {remove && (
          <Delete
            handleClick={this.handleClick}
            updateMove={this.props.updateMove}
            character={this.props.character}
          />
        )}
      </>
    );
  }
}
