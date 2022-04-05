import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Catalogo from "../../components/Catalogo/Catalogo";
import { useEffect, useState } from "react";
import { instance } from "../../services/api";
import Title from "../../components/Title/Title";
import Line2 from "../../components/Line2/Line2";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import TesteVinho from "../../components/TesteVinho/TesteVinho";
import BodyRotulos from "../../components/BodyRotulos/BodyRotulos";

export default function NossosVinhos() {
  return (
    <>
      <div>
        <div>
          <Header />
          <Banner imagem="nossosVinhos" logo="logo-hidden" />
        </div>
        <Body></Body>
        <div>
          <Filter />
        </div>
        <Line2 lineNumber="line-100" />
        <TesteVinho />
        <Title text="Anatomia dos vinhos Vintage" />
        <BodyRotulos />
      </div>

      <Footer />
    </>
  );
}
