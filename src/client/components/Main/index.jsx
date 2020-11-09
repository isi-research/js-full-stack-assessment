import React, { useState, useEffect } from 'react'
import ReactImage from './react.png';
import { styled } from 'styled-components';

export const Main = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => setUsername(user.usernam));
  });

  return (
    <Body>
      {username ? (
        <Title>{`Hello ${username}`}</Title>
      ) : (
        <Title>Loading.. please wait!</Title>
      )}
      <img src={ReactImage} alt="react" />
    </Body>
  );
};

const Body = styled.div`
& body {
  text-align: center;
  margin: auto;
}
`;

const Title = styled.h1`
   color: 'green';
`;
