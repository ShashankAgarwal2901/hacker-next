import fetch from "isomorphic-fetch";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";
import Link from "next/link";

class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    query.page ? (page = parseInt(query.page)) : (page = 1);

    try {
      const res = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await res.json();
    } catch (error) {
      console.log(error);
      stories = [];
    }
    return { stories, page };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/offline.js")
        .then((registeration) => console.log("service worker registered"))
        .catch((err) => console.warn("service worker failed--", err));
    }
  }

  render() {
    const { stories, page } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout
        title="Hacker News"
        description="A hacker news clone made with next js"
      >
        <StoryList stories={stories} />

        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next page {page + 1}</a>
          </Link>
        </footer>
        <style jsx>{`
          footer {
            padding: 1em;
          }

          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
