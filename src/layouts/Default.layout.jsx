import React from "react";

import Navbar from "../components/Navbar/navbar.component";
import HeroCarsal from "../components/HeroCarosal/HeroCarosal.component";

// Components

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarsal />
      {props.children}
    </>
  );
};

export default DefaultLayout;