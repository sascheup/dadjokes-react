import React, { useState } from 'react';
import { Joke } from './Joke/joke';
import { render } from 'react-dom';
import { jokes } from './jokes.js';
import './style.css';

const App = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const upHandler = () => setUpLikes(upLikes + 1);
  const downHandler = () => setDownLikes(downLikes + 1);

  const firstJoke = jokes[7];

  return (
    <div className="container">
      {jokes.map((j) => (
        <Joke
          key={j.id}
          userAvatar={j.avatar}
          userName={j.name}
          text={j.text}
          likes={j.likes}
          dislikes={j.dislikes}
        />
      ))}
    </div>
  );
};
render(<App />, document.querySelector('#app'));
