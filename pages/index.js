import Layout from "../layouts";
import fetch from "isomorphic-unfetch";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

const Home = ({ data }) => (
  <Layout>
    <div className="container" style={{ overflow: "hidden" }}>
      <Profile />
      <Projects data={data} />
    </div>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: row;
          padding: 20px;
          overflow-x: hidden;
        }
        @media (max-width: 800px) {
          .container {
            flex-direction: column;
          }
      `}
    </style>
  </Layout>
);

Home.getInitialProps = async () => {
  const res = await fetch(
    "https://api.github.com/users/rocktimsaikia/repos?sort=created"
  );
  const data = await res.json();
  const filtered = data.filter(i => !i.fork && i.description != null);
  return { data: filtered };
};

export default Home;
