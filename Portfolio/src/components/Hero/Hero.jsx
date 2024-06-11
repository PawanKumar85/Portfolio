import React from "react";
import style from "./Hero.module.css";
import { getImageUrl } from "../../utils";
const Hero = ({data}) => {
  
  return (
    <section className={style.container}>
      <dir className={style.content}>
        <h1 className={style.title}>I'm {data.name}</h1>
        <p className={style.desc}>
          {data.bio}
        </p>
        <a href="#contact" className={style.contactBTn}>Contact Me</a>
      </dir>
      <img src={getImageUrl("hero/hero.png")} alt="Hero image of me" className={style.heroImg}/>
      <div className={style.topBlue}/>
      <div className={style.bottomBlue}/>
    </section>
  );
};

export default Hero;
