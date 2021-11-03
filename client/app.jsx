import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import Characters from './components/view-characters';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null
    };
  }

  componentDidMount() {
    fetch('/api/characters')
      .then(response => response.json())
      .then(characters => this.setState({ characters }))
      .catch(err => console.error(err));
  }

  render() {
    return (<>
    <Header/>
    <Home />
    <Characters/>
    </>);
  }
}
