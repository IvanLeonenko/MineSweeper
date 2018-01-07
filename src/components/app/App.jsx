import React from 'react';
import Game from '../game/Game';
import './App.scss';

class App extends React.PureComponent {
  render() {
    return (
        <div className="app">
          <Game />
        </div>
    );
  }
}

export default App;
