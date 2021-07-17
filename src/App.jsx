import { Route } from "react-router-dom";

import DefaultHOC from "./HOC/Default.HOC";
import Temp from "./components/temp";

function App() {
  return (
   <>
    <DefaultHOC path="/" extract component={Temp} />
   </>
  );
}

export default App;

// Props - A data that is being passed from one component to another.
// state - A set of data that an individual component holds.
