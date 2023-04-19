import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { battle } from '../utils/Api';
import PlayerPreview from './PlayerPreview';
import Loader from '../utils/Loader';

const Results = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    battle([params.get('playerOneName'), params.get('playerTwoName')])
      .then(([winner, loser]) => {
        setWinner(winner);
        setLoser(loser);
        setLoading(false);
        setShowLoader(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        setShowLoader(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="row">
      {showLoader && <Loader />}
      <div className="coluna">
        <h2>Winner</h2>
        <PlayerPreview 
          avatar={winner.profile.avatar_url}
          userName={winner.profile.login}
        >
          <ul className="column">
            <li>Score: {winner.score}</li>
            <li>Location: {winner.profile.location}</li>
            <li>Company: {winner.profile.company}</li>
            <li>Followers: {winner.profile.followers}</li>
            <li>Following: {winner.profile.following}</li>
            <li>Public Repos: {winner.profile.public_repos}</li>
            <li>Blog: {winner.profile.blog}</li> 
            
          </ul>
        </PlayerPreview>
      </div>
      <div className="coluna">
        <h2>Loser</h2>
        <PlayerPreview
          avatar={loser.profile.avatar_url}
          userName={loser.profile.login}
        >
          <ul className="column">
            <li>Score: {loser.score}</li>
            <li>Location: {loser.profile.location}</li>
            <li>Company: {loser.profile.company}</li>
            <li>Followers: {loser.profile.followers}</li>
            <li>Following: {loser.profile.following}</li>
            <li>Public Repos: {loser.profile.public_repos}</li>
            <li>Blog: {loser.profile.blog}</li>
          </ul>
        </PlayerPreview>
      </div>
    </div>
  );
};

export default Results;
