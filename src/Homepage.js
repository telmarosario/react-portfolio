import Contacts from "./components/Contacts";
import Goals from "./components/Goals";
import Introduction from "./components/Introduction";
import Name from "./components/Name";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects";

function Homepage() {
  return (
    <div>
      <Nav isProjectPage={false} />
      <Name />
      <Introduction />
      <Projects />
      <Goals />
      <Contacts />
    </div>
  );
}

export default Homepage;
