import { Link } from "react-router-dom";

import Nav from "../../components/Nav/Nav";
import langeekLogo from "./langeek-logo.png";
import langeekHomepage from "./langeek-homepage.jpg";
import langeekSignup from "./langeek_signup.png";
import langeekPost from "./langeek_post.png";
import langeekProfile from "./langeek_profile.png";
import langeekResponsive from "./responsive.png";

import "./../style/case-styles.css";

function LangeekCase() {
  return (
    <div>
      <Nav isProjectPage={true} />
      <div className="case-study">
        <h1>
          <img src={langeekLogo} alt="langeek logo" className="logo" />
          Langeek
        </h1>
        <p>
          Node.js | Express.js | MongoDB | Mongoose | Bootstrap | JavaScript |
          Handlebars
        </p>
        <a
          href="https://langeek.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-28">Live project</button>
        </a>
        <a
          href="https://github.com/telmarosario/langeek"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-28">Github repo</button>
        </a>
        <div className="intro-langeek">
          <img
            src={langeekHomepage}
            alt="langeek homepage"
            className="intro-langeek-img"
          />
          <div className="langeek-ps">
            <p>
              Learning a new language is hard. Learning it alone? Even harder!
            </p>
            <p>
              The idea for Langeek came into my mind when I was struggling with
              Korean pronunciation while studying by myself.
            </p>
            <p style={{ marginBottom: "2vh" }}>
              I thought “how great could it be if I had a social media to go to
              connect with people who are also learning Korean?”
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="langeek-details">
          <div className="langeek-flex">
            <div className="signup-info">
              <p>
                This full-stack web application intends to show how users can
                perform CRUD* operations while interacting with a database, as
                well as user authentication and authorization.
              </p>
              <p>
                Users can choose what languages they are fluent in and what
                languages they are learning. These will be shown on their
                profile to make it easy to connect with other users.
              </p>
              <span>*CRUD - Create Read Update Delete</span>
            </div>
            <img src={langeekSignup} alt="" className="intro-langeek-img" />
          </div>
          <div className="langeek-flex">
            <img src={langeekPost} alt="post" className="post-img" />
            <div className="post-info">
              <p>
                Visitors who are not logged in have limited access to pages and
                functionally.
              </p>
              <p>
                When logged in, users can perform more actions: use the search
                bar, create posts with language hashtags, comment on other
                posts, save posts, visit other people's profiles and much more.
              </p>
              <p>
                On their profile, they have access to the update feauture, they
                can see their saved posts and log-out.
              </p>
            </div>
          </div>
        </div>
        <div className="case-study">
          <img
            src={langeekProfile}
            alt=""
            className="intro-langeek-img"
            style={{ marginTop: "5vh" }}
          />
          <div className="langeek-ps" style={{ marginTop: "7vh" }}>
            <p>
              On the backend, I implemented a method to encrypt the chosen
              password for security and cloud uploading for all the pictures in
              the app for better performance.
            </p>
            <p>
              I created 3 models for the MongoDB database: users, posts, and
              comments. All three of them have references and relationships with
              each other to allow easy access to the information.
            </p>
            <p>
              Logins and logouts are executed with express sessions and cookies.
            </p>
          </div>
        </div>
        <div className="langeek-details langeek-flex">
          <div>
            <img
              src={langeekResponsive}
              alt="reponsive layout"
              style={{ marginBottom: "5vh" }}
            />
            <span className="responsive-span">
              Langeek is fully responsive thanks to the Bootstrap grid
            </span>
          </div>
          <div className="post-info">
            <p>
              This was a group project which gave me the opportunity to practice
              using git and GitHub collaboratively.
            </p>
            <p>
              <b>Challenges:</b>
              <p style={{ marginTop: "2vh" }}>
                This project had the requirement not to use a front-end
                framework. Therefore, I had to rely on the templating engine
                handlebars.
              </p>
            </p>
            <p>
              I had the opportunity to use React on my next project which opened
              up a world of possibilities. Check out{" "}
              <Link to="/booksway" className="link-react">
                <p style={{ display: "inline" }}>Booksway</p>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangeekCase;
