import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { battle } from '../utils/Api';

const Results = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    battle([params.get('playerOneName'), params.get('playerTwoName')])
      .then((data) => {
        console.log(data, 'data');
      });
  }, []);

  return (
    <div className="row">
      <h1>Results</h1>
    </div>
  );
}

export default Results;
