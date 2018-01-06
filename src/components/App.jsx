import React from 'react';
import MineBoard from './mineBoard/MineBoard';
import 'assets/scss/App.scss';

class App extends React.PureComponent {
  render() {
    return (
        <div className="app">
          <MineBoard />
        </div>
    );
  }
}

export default App;
