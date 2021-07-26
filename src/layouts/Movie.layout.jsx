import axios from 'axios';
import React,{useEffect, useContext} from 'react'
import { useParams } from "react-router-dom"; // we will get id for each movie
//components
import MovieNavbar from '../components/Navbar/movieNavbar.component';
//context
import { MovieContext } from '../components/context/movie.context';

const MovieLayout = (props) => {
  const {id} = useParams(); // to get id
  const {movie, setMovie} = useContext(MovieContext);
  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};
export default MovieLayout;
