import React from 'react';

export default class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataView: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.getAttribute('data-view') === this.props.dataView) {
      this.props.view('');
      this.setState({ dataView: '' });
    } else {
      this.props.view(e.target.getAttribute('data-view'));
      this.setState({ dataView: e.target.getAttribute('data-view') });
    }
  }

  render() {
    const { move } = this.props;
    const isClicked = this.state.dataView;
    return (
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
            isClicked === move.name && this.props.dataView === move.name
              ? 'frame-table'
              : 'frame-table-hidden'
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
    );
  }
}
