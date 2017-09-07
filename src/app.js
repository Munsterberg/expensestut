import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    name: 'jake'
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
