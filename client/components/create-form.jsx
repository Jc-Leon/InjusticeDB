import React from 'react';

export default class Create extends React.Component {
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
      moveCategoryId: this.state.moveCategoryId,
      name: this.state.name,
      input: this.state.input,
      moveType: this.state.moveType,
      damage: this.state.damage,
      blockDamage: this.state.blockDamage,
      startUp: this.state.startUp,
      active: this.state.active,
      recover: this.state.recover,
      blockAdv: this.state.blockAdv,
      hitAdv: this.state.hitAdv,
      cancel: this.state.cancel
    };
    fetch('/api/moves', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(() => {
        if (this.props.updateMove) {
          this.props.updateMove();
        }
        this.props.handleClick(event);
      });

  }

  render() {
    return (
      <form className=" form create-form row justify-center align-self" action="" onSubmit={this.handleSubmit} name="create" >
        <div className="relative">
          <div onClick={this.props.handleClick} className="equis">
            <i className="fas fa-times" name="create"></i>
          </div>
        </div>
        <div className="form-border row flex-direction-column text-align ">
          <div className="form-action">
            <h3>Create New Move Set</h3>
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
          <div className="form-data row flex-direction-column align-center text-align" >
            <label htmlFor="categoryId">Move Category</label>
            <select
              className="text-align"
              name="moveCategoryId"
              onChange={this.handleChange}
              id="categoryId"
            >
              <option value="0">Select an Option</option>
              <option value="1" name="1">
                Basic Attacks
              </option>
              <option value="2" name="2">
                Combo Attacks
              </option>
              <option value="3" name="3">
                Special Moves
              </option>
              <option value="4" name="4">
                Character Power
              </option>
            </select>
            <div className="row flex-direction-column">
              <label htmlFor="move-name">Move Name:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="name"
                id="name"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="input">Input:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="input"
                id="input"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="move-type">Move Type:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="moveType"
                id="move-type"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="damage">Damage:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="damage"
                id="damage"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="block-damage">Block Damage:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="blockDamage"
                id="block-damage"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="start-up">Start-Up:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="startUp"
                id="start-up"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="recover">Active:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="active"
                id="active"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="recover">Recover:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="recover"
                id="recover"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="block-adv">Block Adv:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="blockAdv"
                id="block-adv"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="hit-adv">Hit Adv:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="hitAdv"
                id="hit-adv"
              />
            </div>
            <div className="row flex-direction-column">
              <label htmlFor="cancel">Cancel:</label>
              <input required
                className="text-align"
                onChange={this.handleChange}
                name="cancel"
                id="cancel"
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
