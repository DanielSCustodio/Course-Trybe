import React, { useContext } from 'react';
import ISSContext from '../context/ISSContext';
import useTimer from '../hooks/useTimer';

function PeopleInSapce() {
  const { getPeopleInSpace, peopleInSpace } = useContext(ISSContext);
  const TEN_SECONDS = 10000;
  useTimer(getPeopleInSpace, TEN_SECONDS);

  return (
    <section className="people-in-space">
      <span>{`Atualmente há ${peopleInSpace.length} pessoas na ISS`}</span>
      <ul className="people-list">
        {peopleInSpace.map(({ name }) => <li key={ name }>{name}</li>)}
      </ul>
    </section>
  );
}

export default PeopleInSapce;
