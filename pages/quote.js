import Layout from '../components/MyLayout';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = url => axios.get(url).then(res => res.data);

const Quote = props => {
  const { data, error } = useSWR('/api/randomQuote', fetcher);
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return (
    <Layout>
      <main className="center">
        <div className="quote">{quote}</div>
        {author && <span className="author">- {author}</span>}
      </main>
      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
    </Layout>
  );
}

export default Quote;
