import { useEffect, useState } from "react";

import { getRockets } from "../../api/api";

import Rocket from "../../types/Rocket";

import RocketCardsSlider from "../RocketCardsSlider";

import "./RocketsSection.scss";

export default function RocketsSection() {
  const [rockets, setRockets] = useState<Rocket[]>([]);

  useEffect(() => {
    getRockets().then((response) => {
      setRockets(response);
    });
  }, []);

  return (
    <section className="rockets-section">
      <h2 className="rockets-section__title">Our rockets</h2>
      <RocketCardsSlider rockets={rockets} />
    </section>
  );
}
