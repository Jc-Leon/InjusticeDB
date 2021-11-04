import React from 'react';

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch('/api/characters')
      .then(response => response.json())
      .then(characters => this.setState({ characters }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="roster-container">
        {this.state.characters.map(characters => (
          <div className="cards" key={characters.name}>
            <div className="row justify-center name">
              <h3>{characters.name}</h3>
            </div>
            <div className="row justify-center cardimg">
              <img className=" " src={characters.imageUrl} alt="" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
