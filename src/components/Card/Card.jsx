import { useState, useEffect } from 'react';

import imgLogo from '../../images/logo.png';
import imgBackground from '../../images/bg.png';
import imgAvatar from '../../images/avatar1.png';
import imgLine from '../../images/rectangle.png';

import {
  CardDiv,
  Logo,
  Background,
  Line,
  Avatar,
  InfoWrap,
  Tweets,
  Followers,
  CardButton,
} from './Card.styled';

export const Card = () => {
  const [counter, setCounter] = useState(100500);
  const [isClick, setIsClick] = useState('Follow');
  const [active, setActive] = useState(true);

  useEffect(() => {
    setCounter(JSON.parse(localStorage.getItem('counter')));
    setIsClick(localStorage.getItem('isClick'));
  }, []);

  useEffect(() => {
    localStorage.setItem('counter', counter);
    localStorage.setItem('isClick', isClick);
  }, [counter, isClick]);

  const counterFormating = new Intl.NumberFormat('en-US').format(counter);

  const updateCounter = () => {
    if (isClick === 'Follow') {
      setCounter(counter + 1);
      setIsClick('Following');
      setActive(false);
    } else {
      setCounter(counter - 1);
      setIsClick('Follow');
      setActive(true);
    }
  };

  return (
    <CardDiv>
      <Logo src={imgLogo} alt="GoIT logo" />
      <Background src={imgBackground} alt="background image" />
      <Line src={imgLine} alt="avatar image" />
      <Avatar src={imgAvatar} alt="avatar image" />
      <InfoWrap>
        <Tweets>777 tweets</Tweets>
        <Followers>{counterFormating} Followers</Followers>

        <CardButton
          type="button"
          onClick={updateCounter}
          style={
            active
              ? { backgroundColor: '#ebd8ff' }
              : { backgroundColor: '#5cd3a8' }
          }
        >
          {isClick}
        </CardButton>
      </InfoWrap>
    </CardDiv>
  );
};
