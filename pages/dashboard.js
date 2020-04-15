import { useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';

import AuthContext from '../contexts/AuthContext';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Dashboard = props => {
  const { isAuthReady } = useContext(AuthContext);

  if (!isAuthReady) {
    console.log(isAuthReady);
    return null;
  }

  return (
    <React.Fragment>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </React.Fragment>
  );
}

Dashboard.getInitialProps = async () => {
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  return {
    shows: res.data.map(entry => entry.show)
  };
}

export default Dashboard;
