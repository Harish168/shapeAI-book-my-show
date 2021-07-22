import React,{useState , useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//components 
import { NextArrow, PrevArrow } from "./Arrow.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarsal = () => {

    const [images,setImages]= useState([]);
    useEffect(() => {
      const requestNowPlayingMovies = async() => {        
        const getImage = await axios.get("/movie/now_playing");
        setImages(getImage.data.results);
      }
      requestNowPlayingMovies();        
    },[]);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        NextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />,
    };    
    const settings = {
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        NextArrow: <NextArrow />,
        PrevArrow: <PrevArrow />,
    };
    return (
      <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
            {images.map((image) =>
            <div className="w-full h-56 md:h-80 py-3 ">
                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
                 alt="testing"
                 className=" w-full h-full" 
                />
            </div> 
          )}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
            {images.map((image) =>
            <div className="w-full h-96 px-2 py-3 ">
                <img 
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="testing"
                  className=" w-full h-full rounded-md" 
                />
            </div> 
          )}
        </HeroSlider>
      </div>
      </>
    );
};
export default HeroCarsal;