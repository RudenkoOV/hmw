import styled from 'styled-components';

export const WrapperHomePage = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
width: 35vw; 
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
`;

export const HomeTitle = styled.p`
  max-width: 600px;
  font-size: 32px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const LinkTweet = styled.p`
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-size: 32px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: all, linear, 500ms;
  &:hover{
        scale: 1.2;
        rotate: 360deg;
        background-color: #5b4985;
}
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
  > a {
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
