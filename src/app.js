import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './layout';

class App extends React.Component {
  state = {
    summonerName: 'jake'
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const summonerName = e.target.elements.summonerName.value;
    if (summonerName) {
      this.setState(() => {
        return {
          summonerName
        };
      });
    }
  }

  render() {
    const {summonerName} = this.state;
    return (
      <Layout>
        <h1>{summonerName}</h1>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="summonerName" />
          <button>Change Name</button>
        </form>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
