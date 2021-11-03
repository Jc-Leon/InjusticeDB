import React from 'react';
import Home from './pages/home';
import Header from './components/header';
export default class App extends React.Component {
  render() {
    return <> <Header/> <Home /> </>;
  }
}
