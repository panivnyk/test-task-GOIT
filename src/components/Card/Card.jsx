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
  useEffect(() => {
    setCounter(JSON.parse(localStorage.getItem('counter')));
    setIsClick(localStorage.getItem('isClick'));
    setButtonColor(JSON.parse(localStorage.getItem('buttonColor')));
  }, []);

  const [counter, setCounter] = useState(100500);
  const [isClick, setIsClick] = useState('Follow');
  const [buttonColor, setButtonColor] = useState(true);

  useEffect(() => {
    localStorage.setItem('counter', counter);
    localStorage.setItem('isClick', isClick);
    localStorage.setItem('buttonColor', buttonColor);
  }, [counter, isClick, buttonColor]);

  const updateCounter = () => {
    if (isClick === 'Follow') {
      setCounter(counter + 1);
      setIsClick('Following');
      setButtonColor(false);
    } else {
      setCounter(counter - 1);
      setIsClick('Follow');
      setButtonColor(true);
    }
  };

  const counterFormating = new Intl.NumberFormat('en-US').format(counter);
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
          style={{ backgroundColor: buttonColor ? '#ebd8ff' : '#5cd3a8' }}
        >
          {isClick}
        </CardButton>
      </InfoWrap>
    </CardDiv>
  );
};
