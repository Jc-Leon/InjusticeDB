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
      <>
          <div>
      <div className="row justify-center">
        <h2>Characters</h2>
      </div>
    </div>

      <div className="row justify-center flex-wrap">
        {this.state.characters.map(characters => (
          <div className="cards" key={characters.characterId}>
            <div className="row justify-center full">
              <h3>{characters.name}</h3>
            </div>
            <div className="row justify-center">
              <a href={`#characters?characterId=${characters.characterId}`}><img className=" " src={characters.imageUrl} alt="" /></a>
            </div>
          </div>
        ))}
      </div>
</>
    );
  }
}
