// app.js
import world from './world';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('hello ' + world);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = name || 'Michał';
  }

  render() {
    return (
      <div>
        <p>'hello ' + world</p>
        <p>'hello ' + {name}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
