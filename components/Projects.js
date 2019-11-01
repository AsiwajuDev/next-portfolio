import Fade from "react-reveal/Fade";
import RepoIcon from "../public/icons/repo";

export default ({ data }) => (
  <div className="projects">
    <ul className="project-cards">
      {data.slice(0, 9).map((i, index) => (
        <Fade bottom duration={1500} delay={100 * index} key={i.id}>
          <li className="project-card">
            <div className="about">
              <p>
                <RepoIcon /> <span className="project-title">{i.name}</span>
              </p>
              <p style={{ marginBottom: "130px" }}>{i.description}</p>
            </div>
            <div className="buttons" style={{ marginBottom: "60px" }}>
              <span>
                <a href={i.url} target="_blank" className="btn">
                  Repo
                </a>
              </span>
              <span>
                <a href={i.homepage} target="_blank" className="btn">
                  Demo
                </a>
              </span>
            </div>
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
        </Fade>
      ))}
    </ul>
    <style jsx>{`
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
        transform: scale(1.09) !important;
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
        width: 100%;
      }
      .buttons > span {
        text-align: center;
        display: inline-block;
        width: 50%;
      }
      .buttons > span > .btn {
        text-decoration: none;
        color: #fff;
        background: #6200edb8;
        border-radius: 20px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        padding: 5px 20px;
      }
      .project-card > p:last-child > span {
        margin: 10px;
        padding: 5px 12px;
        border-radius: 20px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
        background: #fdfdfd;
      }
      .dot {
        height: 10px;
        width: 10px;
        background-color: #0070f399;
        border-radius: 50%;
        display: inline-block;
      }

      @media (max-width: 1265px) {
        .project-card > p:last-child > span {
          margin: 0;
          padding: 5px 5px;
        }
      }

      @media (max-width: 800px) {
        .projects {
          margin-left: 0;
        }
        .project-cards {
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 10px;
          margin-top: 50px;
          padding: 0;
        }
        .project-card {
          width: 100%;
          padding: 0;
        }
        .about {
          padding-left: 20px;
        }
        .project-card > p:last-child {
          width: 100%;
          text-align: center;
        }
        .project-card > p:last-child > span {
          margin: 0;
          margin-right: 10px;
        }
      }
      @media (max-width: 580px) {
        .project-card > p:last-child > span {
          margin: 0;
        }
      }
      @media (max-width: 480px) {
        .project-cards {
          grid-template-columns: repeat(1, 1fr);
          grid-column-gap: 0px;
        }
        .project-card > p:last-child > span {
          margin: 10px;
        }
      }
    `}</style>
  </div>
);
