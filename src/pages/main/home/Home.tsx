import { Transition } from "@headlessui/react";
import React, { ReactElement, useState, useEffect } from "react";
import Cards from "../../../components/home/Cards";
import Pagination from "../../../components/home/Pagination";
import Menu from "../../header/Menu";
import "./Home.css";

export default function Home(): ReactElement {
  const video = require('../../../assets/videos/frontpage_video.mp4')
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(!!currentScrollPos && currentScrollPos > 60);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, handleScroll]);

  return (
    <>
      <Transition
        show={visible}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-60 scale-60"
        enterTo="transform opacity-100 scale-100"
      >
        <div className="w-full fixed bg-white shadow">
          <Menu />
        </div>
      </Transition>
      <div className="w-full md:bg-opacity-60 bg-white">
        <Menu />
      </div>
      <Cards />
      <Pagination />
      <video
        className="fixed w-full top-0"
        style={{
          zIndex: -1
        }}
        muted={true}
        loop={true}
        controls={false}
        playsInline={true}
        autoPlay={true}>
        <source src={video} type="video/mp4"></source>
      </video>
    </>
  );
}
