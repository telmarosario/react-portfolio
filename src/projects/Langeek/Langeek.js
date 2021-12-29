import langeekDemo from "./langeek-demo.jpg";

function Langeek() {
  return (
    <div className="project-container">
      <img src={langeekDemo} alt="langeek demo" />
      <div className="project-description langeek-paragraphs">
        <h3>Langeek</h3>
        <p>
          Social media app for people to share their language learning journeys
          and connect with others.
        </p>
        <a
          href="https://langeek.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-28">Live project</button>
        </a>

        <button className="button-28">Case study</button>
      </div>
    </div>
  );
}

export default Langeek;
