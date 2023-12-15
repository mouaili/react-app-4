import React, { Component } from 'react';
import Profile from './components/Profile';
import { userContext, colorContext } from './components/Context';

console.log(colorContext);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Jhon Doe',
        age: 36,
      },
      color: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
    };
  }

  render() {
    return (
      <userContext.Provider value={this.state.user}>
        <colorContext.Provider value={this.state.color}>
          <div className="container">
            <div className="row mt-5">
              <Profile />
            </div>
          </div>
        </colorContext.Provider>
      </userContext.Provider>
    );
  }
}

export default App;
