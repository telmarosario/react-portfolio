import Nav from "../../components/Nav/Nav";
import "./../style/case-styles.css";
import BookswayLogo from "./logo.png";
import BookswayHomepage from "./books_homepage.png";
import BooksProfile from "./books_profile.png";
import BooksChat from "./books_chat.png";
import BooksSearch from "./book_search.png";
import BooksResponsive from "./books_responsive.png";

import award from "./award.png";

function BookswayCase() {
  return (
    <div>
      <Nav isProjectPage={true} />

      <div className="case-study">
        <h1>
          <img src={BookswayLogo} alt="booksway logo" className="logo" />
          BooksWay
        </h1>
        <div className="award">
          <h4>
            <img src={award} alt="" /> #1 Web Development Project at Ironhack's
            Hackshow 2021
          </h4>
        </div>
        <p>
          React.js | Node.js | Express.js | MongoDB | Mongoose | Bootstrap |
          JavaScript |
        </p>
        <a
          href="https://booksway2.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-28">Live project</button>
        </a>
        <a
          href="https://github.com/telmarosario/books-way-2.0-client"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-28">Github repo</button>
        </a>
        <div className="intro-langeek">
          <img
            src={BookswayHomepage}
            alt="booksway homepage"
            className="intro-booksway-img"
          />
          <div className="langeek-ps">
            <p>I am an avid reader and most of my books are second-hand.</p>
            <p>
              But I kept jumping from platforms trying to find the best deals or
              people who would be willing to trade their books. And so, BooksWay
              was created.
            </p>
            <p style={{ marginBottom: "2vh" }}>
              This is a full stack web application for selling and trading books
              with a built-in chat.
            </p>
          </div>
        </div>
      </div>
      <div className="langeek-details">
        <div className="langeek-flex">
          <div className="signup-info">
            <p>
              BooksWay has an API server that interacts with the database,
              deployed on Heroku. The client-side was built with React and
              deployed on Netlify.
            </p>
            <p>
              This full-stack web application intends to show how users can
              perform CRUD* operations, as well as user authentication and
              authorization on both the front-end and the back-end side.
            </p>
            <span>*CRUD - Create Read Update Delete</span>
          </div>
          <img src={BooksProfile} alt="" className="intro-langeek-img" />
        </div>
        <div className="langeek-flex">
          <img src={BooksChat} alt="post" className="intro-langeek-img" />
          <div className="post-info">
            <p>
              Users can add books to their profile and mark if they are up for
              sale or for trade! If they change their mind they can edit them
              later.
            </p>
            <p>
              Also, users can search by books they are looking for or take a
              peek at their favorite genre. When they see a book they like, they
              can message the other user directly with the built-in chat.
            </p>
            <p style={{ marginBottom: "4vh" }}>
              On their profile, they can make updates, see their saved books or
              logout.
            </p>
          </div>
        </div>
      </div>
      <div className="case-study">
        <img
          src={BooksSearch}
          alt=""
          className="intro-langeek-img"
          style={{ marginTop: "5vh" }}
        />
        <div className="langeek-ps" style={{ marginTop: "7vh" }}>
          <p>
            All components and pages are built with the latest version of
            React's functional components, while the services are built with
            class components.
          </p>
          <p>
            BooksWay uses React hooks(useEffect, useState, useRef, useContext)
            for most of its features, including the chat that allows the user to
            talk to other people. BooksWay also uses controlled forms that send
            data to the API.
          </p>
          <p>
            On the back-end, there are 4 database models: users, books,
            conversations, and messages.
          </p>
          <p>Logins and logouts are executed with JSON web tokens (JWT).</p>
        </div>
      </div>
      <div className="langeek-details langeek-flex">
        <div>
          <img
            src={BooksResponsive}
            alt="reponsive layout"
            style={{ marginBottom: "5vh" }}
          />
        </div>
        <div className="booksway-responsive">
          <span>
            BooksWay is fully responsive thanks to the Bootstrap grid.
          </span>
          <b>Features to come:</b>
          <ul>
            <li>Notifications;</li>
            <li>Reviews for sellers; </li>
            <li>Mark books as sold/traded.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookswayCase;
