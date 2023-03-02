import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <main className="home container my-5">
      <div className="home__image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
          alt=""
        />
      </div>
      <h1 className="home__title">Javohir Jumayev</h1>
      <h6 className="home__title">Frontend dasturchi</h6>
      <p className="home__description">
        Mening ismim Javohir va men 22-yoshdaman. 2-yildan ortiq vaqt davomidan
        dasturlash bilan shug'ilanib kelaman. Hozirda Toshkent axborot
        texnologiyalari universiteti 3-bosqich talabasiman.
      </p>
      <a
        href="Javohir_Jumayev.pdf"
        className="btn btn-outline-success"
        download
      >
        Download Cv
      </a>
    </main>
  );
};

export default Home;
