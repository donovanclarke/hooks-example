import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from "./redux/store/store";

import Container from "./Container.js";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container />
        </div>
      </Provider>
    );
  }
}

export default App;
