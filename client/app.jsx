import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import MoveList from './pages/character-move-page';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      formIsOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return (
        <>
          <Header />
          <Home />;
        </>
      );
    }
    if (route.path === 'characters') {
      const characterId = route.params.get('characterId');
      return <MoveList characterId={characterId} />;
    }
  }

  render() {
    return <>{this.renderPage()}</>;
  }
}
