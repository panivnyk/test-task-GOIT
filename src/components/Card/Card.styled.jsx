import styled from '@emotion/styled';

export const CardDiv = styled.div`
  position: absolute;
  width: 380px;
  height: 460px;
  /* padding-bottom: 36px; */

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  display: block;
  padding-top: 20px;
  padding-left: 20px;
`;
export const Background = styled.img`
  position: relative;
  /* display: block; */
  top: 28px;
  padding-left: 36px;
  margin-bottom: 14px;
`;

export const AvatarBox = styled.div`
  position: relative;
  margin-top: 28px;
  margin-bottom: 62px;
`;

export const AvatarLine = styled.div`
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const AvatarEllipse = styled.div`
  position: absolute;
  margin-bottom: 26px;

  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ebd8ff;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  display: block;
  position: absolute;
  background-color: #5736a3;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InfoWrap = styled.div`
  display: block;
  margin-top: 58px;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
  margin-top: 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const CardButton = styled.button`
  margin-left: auto;
  margin-right: auto;

  display: block;
  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  cursor: pointer;
`;
