import React, { Component } from 'react';
import Routes from './Routes';

// import { Button } from 'semantic-ui-react';
import './App.css'
import MenuExampleBasic from './components/Menu';

// const ButtonExampleButton = () => (
//   <Button>Click Here Igs</Button>
// )

class App extends Component {
  render() {
    return (
      // App container making NAV narrow
      <div className="App container">
        <MenuExampleBasic />
        <Routes />
        {/* <ButtonExampleButton /> */}
      </div>
    );
  }
}

export default App;
