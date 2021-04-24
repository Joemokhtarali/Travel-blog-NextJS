import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Mokhtar.jpg"
          alt="Mokhtar image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Mokhtar</h1>
      <p>I blog about Traveling</p>
    </section>
  );
}

export default Hero;
