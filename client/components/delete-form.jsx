import React from 'react';

export default class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/characters')
      .then(response => response.json())
      .then(characters => this.setState({ characters }))
      .catch(err => console.error(err));
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      characterId: this.state.characterId,
      name: this.state.name
    };
    fetch('/api/moves', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      if (this.props.updateMove) {
        this.props.updateMove();
      }
      this.props.handleClick(event);
    });
  }

  render() {
    return (
      <form
        className=" form remove-form row justify-center align-self"
        action=""
        onSubmit={this.handleSubmit}
        name="remove"
      >
        <div className="relative">
          <div onClick={this.props.handleClick} className="equis">
            <i className="fas fa-times" name="remove"></i>
          </div>
        </div>
        <div className="form-border row flex-direction-column text-align ">
          <div className="form-action">
            <h3>Delete Move Set</h3>
          </div>
          <div className="row flex-direction-column align-center ">
            <label htmlFor="characterId">Character Name:</label>
            <select
              className="name-label text-align"
              name="characterId"
              onChange={this.handleChange}
              id="characterId"
            >
              <option value="">Select a Character</option>
              {this.state.characters.map(characters => (
                <option
                  key={characters.characterId}
                  value={characters.characterId}
                >
                  {characters.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-data row flex-direction-column align-center text-align">
            <div className="row flex-direction-column">
              <label htmlFor="name">Move Name:</label>
              <input
                required
                className="text-align"
                onChange={this.handleChange}
                name="name"
                id="name"
                placeholder="Enter Exact Move Name Here"
              />
            </div>
          </div>
          <div className="row submit-data flex-end">
            <input type="submit" id="" />
          </div>
        </div>
      </form>
    );
  }
}
