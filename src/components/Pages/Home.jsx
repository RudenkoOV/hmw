import { Link } from 'react-router-dom';
import { HomeTitle, WrapperHomePage, LinkTweet } from './Home.styled';

export default function Home() {
  return (
    <WrapperHomePage>
       <HomeTitle style={{ color: 'black' }}>
        Hello, to watch tweets, please click here 
      </HomeTitle>
      <LinkTweet>
        <Link to="/tweets" > Tweets </Link>
        </LinkTweet>
    </WrapperHomePage>
  );
}
