import bookswayDemo from "./booksway-demo.jpg";

function Booksway() {
  return (
    <div className="project-container">
      <div className="project-description">
        <h3>BooksWay</h3>
        <p className="booksway-paragraphs">
          BooksWay is a book-selling and trading app with a built-in chat.
          Sellers/traders can add books to their profile and mark if they are up
          for sale or for trade!
        </p>
        <p className="booksway-paragraphs">
          People can search books they are looking for or take a peek at their
          favorite genre. When they see a book they like, message the user that
          posted directly with the built-in chat.
        </p>
        <a
          href="https://booksway2.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-28">Live project</button>
        </a>

        <button className="button-28">Case study</button>
      </div>
      <img src={bookswayDemo} alt=" booksway demo" />
    </div>
  );
}

export default Booksway;
