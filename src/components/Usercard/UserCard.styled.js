import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  `;

export const Header = styled.div`
border-radius: 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-size: 32px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: all, linear, 500ms;
  &:hover{
        scale: 1.2;
        rotate: 360deg;
        background-color: aquamarine;
}
> a{
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    color: rgb(235, 216, 255);
}  
`
export const StyledLink = styled(Link)`
  color: #5b4985;
  text-decoration: none;
  font-size: 24px;
  &:hover{
    scale: 1.3;
    color: blue;
}
`;

export const UserCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  justify-content: center;
  max-width: 1200px;
`;

export const UserBox = styled.div`
position: relative;
width: 380px;
height: 460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;

`

export const Logo = styled.div`
width: 76px;
height: 22px;
/* background-image: url('../../images/Logo.png'); */
opacity: 0.3;
position: absolute;
top: 20px;
left: 20px;
`

export const Picture = styled.div`
/* background: url('../../images/top_card.png'); */
width: 308px;
height: 168px;
position: absolute;
top: 28px;
left: 36px;
`
export const Img = styled.img`
/* position: absolute; */
width: 308px;
height: 168px;
`

export const Line = styled.div`
width: 380px;
height: 8px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), 
inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
position: absolute;
top: 214px;
`
export const AvatarBox = styled.div`
position: absolute;
width: 80px;
height: 80px;
left: 150px;
top: 178px;
border-radius: 85.9232px;
background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
display: flex;
align-items: center;
justify-content: center;
`
export const Tweets = styled.p`
margin: 0;
position: absolute;
width: 380px;
height: 24px;
top: 284px;
text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`
export const Followers = styled.p`
margin: 0;
position: absolute;
width: 380px;
height: 24px;
top: 324px;
text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`
export const ButtonFollow = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;
position: absolute;
width: 196px;
height: 50px;
left: 92px;
top: 374px;
background: ${props => props.following  ? '#5CD3A8' : '#EBD8FF'};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10px;
transition: scale, linear, 300ms;
&:hover{
    background-color: aquamarine;
        scale: 1.1;
}
`
export const TextButton = styled.p`
height: 22px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
flex: none;
order: 0;
flex-grow: 0;
`
export const ButtonBack = styled.button`
width: 100px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
cursor: pointer;
&:hover{
    background-color: aquamarine;
        scale: 1.1;

}
`

export const ButtonLoadMore = styled.button`
/* width: 100px; */
width: 196px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
background: ${props => props.following ? '#5CD3A8' : '#EBD8FF'};
color: rgb(55, 55, 55);
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
cursor: pointer;
transition: scale, linear, 300ms;
&:hover{
    background-color: aquamarine;
    scale: 1.1;
}
`
export const StyledBackLink = styled(Link)`
width: 196px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
text-decoration: none;
background: ${props => props.following ? '#5CD3A8' : '#EBD8FF'};
color: rgb(55, 55, 55);
cursor: pointer;
transition: scale, linear, 300ms;
&:hover{
    background-color: aquamarine;
        scale: 1.1;
}
`
export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
gap: 30px;
margin-bottom: 30px;

`
