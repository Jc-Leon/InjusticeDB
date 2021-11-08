import React from 'react';
import { ClapSpinner } from 'react-spinners-kit';

export default class MoveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(response => response.json())
      .then(character => this.setState({ character, isLoading: false }))
      .catch(err => console.error(err));
  }

  render() {
    console.log(this.state.character);
    const { isLoading, character } = this.state;
    return (
      <>
      {isLoading &&
            <ClapSpinner size={30} color="#00ff89" loading={isLoading} />
      }
           <div className="row flex-wrap justify-center">
          <h1 className="row justify-center full">
            {this.state.character.characterName}
          </h1>
          <div className="row justify-center align-center column-full">
            <div>
              <img
                className="cardimg"
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
      {!isLoading && character.moves[0] &&
      <>
              {this.state.character.moves.map(move => (
                <div
                  key={move.moveId}
                  className="move-list row justify-between align-center"
                >
                  <p>{move.name}</p>
                  <p>{move.input}</p>
                </div>
              ))}
              </>
            }
            </div>
          </div>
        </div>
      </>
    );
  }
}
