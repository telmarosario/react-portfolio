import { Link } from "react-router-dom";

import Nav from "../../components/Nav/Nav";
import langeekLogo from "./langeek-logo.png";
import langeekHomepage from "./langeek-homepage.jpg";
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
          <img src={langeekHomepage} alt="langeek homepage" />
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
          <p>
            This full-stack web application intends to show how users can
            perform CRUD* operations while interacting with a database, as well
            as user authentication and authorization.
          </p>
          <span>*CRUD - Create Read Update Delete</span>
          <img src="" alt="" /> {/* Sign up form */}
          <p>
            Users can choose what languages they are fluent in and what
            languages they are learning. These will be shown on their profile to
            make it easy to connect with other users.
          </p>
          <p>
            Visitors who are not logged in have limited access to pages and
            functionally.
          </p>
          <p>
            When logged in, users can perform more actions: use the search bar,
            create posts with language hashtags, comment on other posts, save
            posts, visit other people's profiles and much more.
          </p>
          <p>
            On their profile, they have access to update their own profile, see
            their saved posts and log-out.
          </p>
        </div>
        <div>
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
            Logins and logouts are executed with expression sessions and
            cookies.
          </p>
        </div>
        <img src="" alt="" />
        {/* Photo of the app on a phone to say its fully responsive */}
        <div>
          <p>
            This is a group project executed with a colleague which gave me the
            opportunity to practice using git and GitHub collaboratively.
          </p>
          <p>
            <b>Challenges:</b> This project had the requirement not to use a
            front-end framework. Therefore, I had to rely on the templating
            engine handlebars.
          </p>
          <p>
            I had the opportunity to use React on my next project which opened
            up a world of possibilities. Check out{" "}
            <Link to="/booksway">Booksway</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LangeekCase;
