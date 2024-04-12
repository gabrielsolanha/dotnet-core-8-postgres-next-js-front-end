import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselDepiled() {
  return (
    <div style={{ background: "linear-gradient(to bottom, #2d2d2d, #f5f5f5)" }}>
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              className="img-fluid"
              src="https://www.oficinadanet.com.br/imagens/post/44700/filmes-famosos-2003.jpg"
              alt="Image One"
            />
          </div>
          <Carousel.Caption>
            <h3>O melhor do cinema</h3>
            <p>Filmes clássicos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              className="img-fluid"
              src="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2022/09/Podcasts-Filosofia.jpg?quality=100&strip=info&w=1024"
              alt="Image Two"
            />
          </div>
          <Carousel.Caption>
            <h3>Recomendado para você</h3>
            <p>Nossa recomendação é criteriosa.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
