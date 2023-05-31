import React from 'react';
import missions from '../../data/missions';
import Title from '../Title';
import '../styles/Missions.css';
import MissionCard from './MissionCard';

class Missinons extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        <div className="mission">
          {missions.map((mission) => (
            <MissionCard
              key={mission.name}
              name={mission.name}
              year={mission.year}
              country={mission.country}
              destination={mission.destination}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missinons;
