import ClockHeading from "./Components/clockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import CurrentTime from "./Components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
