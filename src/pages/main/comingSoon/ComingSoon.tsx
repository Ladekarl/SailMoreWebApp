import React, { ReactElement } from "react";
import "./ComingSoon.css";
import Background from "../../../components/Background";

export default function Home(): ReactElement {
  const background = require("../../../assets/images/backgrounds/sunset-waves.jpg");

  return (
    <section className="section section-shaped coming-soon-page">
      <Background background={background} height="100%" />
      <div className="container mx-auto">
        <div className="lg-12 justify-content-center text-center">
          <h1 className="heading">Kommer snart</h1>
        </div>
      </div>
    </section>
  );
}
