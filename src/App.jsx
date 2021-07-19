import { Route } from "react-router-dom";
//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//pages
import Homepage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
   <>
    <DefaultHOC path="/" exact component={Homepage} />
    <MovieHOC path="/movie/:id" exact component={Movie} />
   </>
  );
}

export default App;

// Props - A data that is being passed from one component to another.
// state - A set of data that an individual component holds.
