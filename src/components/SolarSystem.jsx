import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './styles/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="cards">
          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              planetName={planet.name}
              planetImage={planet.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
