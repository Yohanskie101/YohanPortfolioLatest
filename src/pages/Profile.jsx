import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LogoText from "../components/LogoText";
import ThemeControl from "../components/ThemeControl";
import Introduction from "../components/Introduction";
import WhoIsYohan from "../components/WhoIsYohan";
import Myfooter from "../components/MyFooter";
import Projects from "./Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import transition from "../transition";
gsap.registerPlugin(ScrollTrigger);

function Profile() {
  useEffect(() => {
    // Any GSAP animations or ScrollTrigger setups specific to this component
  }, []);

  return (
    <div className="profile-body min-h-screen">
      <div className="container">
        <LogoText />
        <ThemeControl />
        <Introduction />
        <WhoIsYohan />
        <Projects />
        <Myfooter />
      </div>
    </div>
  );
}

export default transition(Profile);
