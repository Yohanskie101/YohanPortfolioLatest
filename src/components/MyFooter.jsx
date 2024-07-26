import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyFooterButtons = () => {
  const FooterButtonsPages = [
    { name: "Profile", path: "/profile" },
    { name: "Resume", path: "/projects" },
    { name: "Skills", path: "/resume" },
    { name: "Projects", path: "/skills" },
    { name: "Contact me", path: "/contact" },
  ];

  return FooterButtonsPages.map((selected, index) => {
    return (
      <Link to={selected.path} key={index} className="scale-btns text-base">
        {selected.name}
      </Link>
    );
  });
};

const MyFooterButtonsConnect = () => {
  const FooterButtonsConnect = [
    { name: "Facebook", path: "/profile" },
    { name: "Instagram", path: "/projects" },
    { name: "Twitter", path: "/resume" },
    { name: "Github", path: "/skills" },
    { name: "LinkedIn", path: "/contact" },
  ];
  return FooterButtonsConnect.map((selected, index) => {
    return (
      <Link to={selected.path} key={index} className="scale-btns text-base">
        {selected.name}
      </Link>
    );
  });
};

function MyFooter() {
  useEffect(() => {}, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="MyFooter-container w-full h-fit mb-3 mt-40 2xl:mt-56 xl:mt-56 lg:mt-44 md:mt-40 sm:mt-40">
      <div className="MyFooter-first-container flex gap-40">
        <div className="first-footer-div font-semibold text-xl w-80">
          Yohan's Personal Website
        </div>

        <div className="max-h-32 w-80 flex flex-col overflow-hidden flex-wrap">
          <p className="second-footer-div font-semibold text-xl">Pages</p>
          <div className="flex flex-col max-h-20 overflow-hidden flex-wrap">
            <MyFooterButtons />
          </div>
        </div>

        <div className="max-h-32 w-80 flex flex-col overflow-hidden flex-wrap">
          <p className="third-footer-div font-semibold text-xl">Connect</p>
          <div className="flex flex-col max-h-20 overflow-hidden flex-wrap">
            <MyFooterButtonsConnect />
          </div>
        </div>
      </div>

      <div className="MyFooter-second-container fourth-footer-div text-sm w-full text-center">
        Copyright @ 2024 Mark Johanne Campos. All rights Reserved
      </div>
    </div>
  );
}

export default MyFooter;
