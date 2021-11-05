import React from 'react';

export default class MoveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    };
  }

  componentDidMount() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(response => response.json())
      .then(character => this.setState({ character }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>

      <div className="row flex-wrap justify-center">
      <h1 className="row justify-center full">{this.state.character.characterName}</h1>
      <div className="row justify-center align-center column-full">
          <div>
            <img className="cardimg"
              src={this.state.character.characterImage}
              alt=""
            />
          </div>
      </div>
      <div className="column-full row flex-wrap align-center justify-center align-start">
        <div className="move-list-table">
          <div className="row justify-center align-center move-category">
            <h3>Basic Attacks</h3>
          </div>

          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>
          <div className="move-list row justify-between align-center">
            <p>Hook Punch</p>
            <p>Forward+3</p>
          </div>

        </div>
      </div>
    </div>
</>
    );

  }
}
