import React from "react";
import style from "./Hero.module.css";
import { ReactTyped } from "react-typed";

import { getImageUrl } from "../../utils";

const Hero = ({ data }) => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <span className="text-2xl">Hello, I'm a</span>
        <div className="flex d-inline-flex">
          <h1 className={style.title}>
            <ReactTyped
              strings={[
                " Student",
                " Coder",
                " Developer",
                " Programmer",
                "Pawan Kumar",
              ]}
              typeSpeed={30}
              loop={true}
            />
          </h1>
        </div>
        <p className={style.desc}>{data.bio}</p>
        <div className="flex  space-x-6">
          <button className="btn btn-primary">Contact Me</button>
          <button className="btn btn-primary">Download CV</button>
        </div>
      </div>

      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={style.heroImg}
      />
      <div className={style.topBlue} />
      <div className={style.bottomBlue} />
    </section>
  );
};

export default Hero;
