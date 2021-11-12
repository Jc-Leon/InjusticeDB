import React from 'react';
import { ClapSpinner } from 'react-spinners-kit';
import Frame from '../components/frame-data';
import Header from '../components/header';

export default class MoveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: { moves: [] },
      isLoading: true,
      dataView: ''
    };
    this.accordion = this.accordion.bind(this);
    this.updateMove = this.updateMove.bind(this
    );
  }

  componentDidMount() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(response => response.json())
      .then(character => this.setState({ character, isLoading: false }))
      .catch(err => console.error(err));
  }

  accordion(dataView) {
    this.setState({ dataView });
  }

  updateMove() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(response => response.json())
      .then(character => this.setState({ character, isLoading: false }))
      .catch(err => console.error(err));

  }

  render() {
    const { isLoading, character } = this.state;
    return (

      <>
        {!isLoading && (
          <Header updateMove={this.updateMove} character={this.state.character}/>
        )}
        {isLoading && (
          <ClapSpinner size={30} color="#00ff89" loading={isLoading} />
        )}
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
              {!isLoading && character.moves[0] && (
                <>
                  <div className="row justify-center align-center move-category">
                    <h3>Basic Attacks</h3>
                  </div>
                  {this.state.character.moves
                    .filter(move => move.moveCategoryId === 1)
                    .map(move => (
                      <Frame
                        dataView={this.state.dataView}
                        view={this.accordion}
                        key={move.moveId}
                        move={move}
                      />
                    ))}
                  <div className="row justify-center align-center move-category">
                    <h3>Combo Attacks</h3>
                  </div>
                  {this.state.character.moves
                    .filter(move => move.moveCategoryId === 2)
                    .map(move => (
                      <Frame
                        dataView={this.state.dataView}
                        view={this.accordion}
                        key={move.moveId}
                        move={move}
                      />
                    ))}
                  <div className="row justify-center align-center move-category">
                    <h3>Special Moves</h3>
                  </div>
                  {this.state.character.moves
                    .filter(move => move.moveCategoryId === 3)
                    .map(move => (
                      <Frame
                        dataView={this.state.dataView}
                        view={this.accordion}
                        key={move.moveId}
                        move={move}
                      />
                    ))}
                  <div className="row justify-center align-center move-category">
                    <h3>Character Power</h3>
                  </div>
                  {this.state.character.moves
                    .filter(move => move.moveCategoryId === 4)
                    .map(move => (
                      <Frame
                        dataView={this.state.dataView}
                        view={this.accordion}
                        key={move.moveId}
                        move={move}
                      />
                    ))}
                </>
              ) }
            </div>
          </div>
        </div>
      </>
    );
  }
}
