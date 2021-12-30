import langeekDemo from "./langeek-demo.jpg";
import { Link } from "react-router-dom";

function Langeek() {
  return (
    <div className="project-container">
      <img src={langeekDemo} alt="langeek demo" className="project-lan-img" />
      <div className="project-description langeek-paragraphs">
        <h3>Langeek</h3>
        <p>
          Langeek is a social media app for people to share their language
          learning journeys and connect with others.
        </p>
        <a
          href="https://langeek.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-28">Live project</button>
        </a>

        <Link to="/langeek">
          <button className="button-28">Case study</button>
        </Link>
      </div>
    </div>
  );
}

export default Langeek;
