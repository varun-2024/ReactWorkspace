import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </>
  );
}

export default App;
