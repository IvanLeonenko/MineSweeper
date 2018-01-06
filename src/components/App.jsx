import React from 'react';
import MineSweeper from './MineSweeper';
import 'assets/scss/App.scss';
import reactLogo from 'assets/img/react_logo.svg';

class App extends React.PureComponent {
  render() {
    return (
        <div className="app">
          <MineSweeper />
        </div>
    );
  }
}

export default App;
