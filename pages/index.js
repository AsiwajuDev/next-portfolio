import Layout from "../layouts";
import fetch from "isomorphic-unfetch";
import Profile from "../components/profile";
import RepoIcon from "../public/icons/repo";

const Home = ({ data }) => (
  <Layout>
    <div className="container">
      <Profile />
      <div className="projects">
        <ul className="project-cards">
          {data.slice(0, 9).map(i => (
            <li className="project-card" key={i.id}>
              <p>
                <RepoIcon /> <span className="project-title">{i.name}</span>
              </p>
              <p style={{ marginBottom: "130px" }}>{i.description}</p>
              <ul className="buttons" style={{ marginBottom: "60px" }}>
                <li>
                  <a href="#">Repo</a>
                </li>
                <li>
                  <a href="#">Demo</a>
                </li>
              </ul>
              <p>
                <span>
                  <i className="dot"></i> React
                </span>
                <span>
                  <i className="dot"></i> Node
                </span>
                <span>
                  <i className="dot"></i> Express
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: row;
          padding: 20px;
          overflow-x: hidden;
        }
        .projects {
          margin-left: 190px;
        }
        .project-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-row-gap: 20px;
          grid-column-gap: 20px;
          list-style: none;
          position: relative;
          margin-top: 2px;
        }
        .project-card {
          position: relative;
          z-index: 0;
          border-radius: 10px;
          font-size: 1rem;
          padding: 10px 20px;
          box-shadow: 0 0px 15px -3px rgba(0, 0, 0, 0.1),
            0 0px 6px -2px rgba(0, 0, 0, 0.05);
          width: 22vw;
          word-wrap: break-word;
          background: #fff;
          cursor: context-menu;
          transition: all 0.6s;
        }
        .project-card:hover {
          transform: scale(1.09);
          box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px;
          z-index: 1;
        }
        .project-title {
          margin-left: 10px;
          font-weight: 600;
          font-size: 1.1rem;
        }
        .project-card > p:last-child {
          position: absolute;
          bottom: 10px;
        }
        .buttons {
          position: absolute;
          bottom: 10px;
          left: 0;
          display: flex;
          list-style: none;
          display-direction: row;
          width: 100%;
        }
        .buttons > li {
          width: 100%;
        }
        .buttons > li > a {
          text-decoration: none;
          color: #fff;
          background: #6200edb8;
          padding: 5px 20px;
          border-radius: 20px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .project-card > p:last-child > span {
          margin: 10px;
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .dot {
          height: 10px;
          width: 10px;
          background-color: #0070f399;
          border-radius: 50%;
          display: inline-block;
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
