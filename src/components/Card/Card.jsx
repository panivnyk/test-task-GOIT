import { useLocalStorage } from 'hooks/useLocalStorage';

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
  const [counter, setCounter] = useLocalStorage('counter', 100500);
  const [isClick, setIsClick] = useLocalStorage('follow', false);

  const updateCounter = () => {
    if (isClick) {
      setCounter(counter - 1);
      setIsClick(!isClick);
    } else {
      setCounter(counter + 1);
      setIsClick(!isClick);
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
          style={{ backgroundColor: isClick ? '#5cd3a8' : '#ebd8ff' }}
        >
          {isClick ? 'Following' : 'Follow'}
        </CardButton>
      </InfoWrap>
    </CardDiv>
  );
};
