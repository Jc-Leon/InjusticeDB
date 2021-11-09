import React from 'react';
import { ClapSpinner } from 'react-spinners-kit';

export default class MoveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      isLoading: true,
      dataView: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(response => response.json())
      .then(character => this.setState({ character, isLoading: false }))
      .catch(err => console.error(err));
  }

  handleClick(e) {
    if (e.target.getAttribute('data-view') === this.state.dataView) {
      this.setState({ dataView: '' });
    } else {
      this.setState({ dataView: e.target.getAttribute('data-view') });
    }
  }

  render() {
    const { isLoading, character } = this.state;
    const isClicked = this.state.dataView;

    return (
      <>
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
              <div className="row justify-center align-center move-category">
                <h3>Basic Attacks</h3>
              </div>
              {!isLoading && character.moves[0] && (
                <>
                  {this.state.character.moves.map(move => (
                    <>
                      <div
                        key={move.characterId}
                        onClick={this.handleClick}
                        data-view={move.name}
                        className="move-list row justify-between align-center"
                      >
                        <h4 data-view={move.name}>{move.name}</h4>
                        <h4 data-view={move.name}>{move.input}</h4>
                      </div>
                      <div
                        className={
                          isClicked === move.name
                            ? 'frame-table'
                            : 'frame-table hidden'
                        }
                      >
                        <div className="data-header row justify-center row-height align-center">
                          <h4>Move Data:</h4>
                        </div>
                        <div className="move-type row justify-between align-center row-height ">
                          <h4>Move Type:</h4>
                          <h4 className="center-data">Damage:</h4>
                          <h4>Block Damage:</h4>
                        </div>
                        <div className=" frame-data row justify-between align-center row-height ">
                          <h4>{move.moveType}</h4>
                          <h4>{move.damage}</h4>
                          <h4>{move.blockDamage}</h4>
                        </div>
                        <div className="data-header row justify-center row-height align-center ">
                          <h4>Frame Data:</h4>
                        </div>
                        <div className="move-type row justify-between align-center row-height ">
                          <h4>Start-up</h4>
                          <h4>Active:</h4>
                          <h4>Recover:</h4>
                        </div>
                        <div className=" frame-data row justify-between align-center row-height ">
                          <h4>{move.startUp}</h4>
                          <h4>{move.active}</h4>
                          <h4>{move.recover}</h4>
                        </div>
                        <div className="move-type row justify-between align-center row-height ">
                          <h4>Block Adv</h4>
                          <h4>Hit Adv:</h4>
                          <h4>Cancel:</h4>
                        </div>
                        <div className=" frame-data row justify-between align-center row-height ">
                          <h4>{move.blockAdv}</h4>
                          <h4>{move.hitAdv}</h4>
                          <h4>{move.cancel}</h4>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
