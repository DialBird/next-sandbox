import Layout from '../../components/MyLayout';
import axios from 'axios';

const Post = props => {
  const { show }= props;

  return (
    <Layout>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  const show = res.data;
  return { show };
}

export default Post;
