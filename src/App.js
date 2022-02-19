import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missinons from './components/Missinons';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missinons />
      </div>
    );
  }
}

export default App;
