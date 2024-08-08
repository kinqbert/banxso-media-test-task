import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Rocket from "../../types/Rocket";

import { getRocket, getSlides } from "../../api/api";

import FullWidthSlider from "../../components/FullWidthSlider";
import Navigation from "../../components/Navigation";

import "./RocketPage.scss";
import Slide from "../../types/Slide";
import RocketInfo from "../../components/RocketInfo";

export default function RocketPage() {
  const { rocketId } = useParams();
  const [rocket, setRocket] = useState<Rocket>();
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    if (rocketId) {
      getRocket(rocketId).then((response) => {
        setRocket(response);

        if (response) {
          getSlides().then((response) => setSlides(response));
        }

        setLoading(false);
      });
    }
  }, [rocketId]);

  if (loading) {
    return (
      <div className="rocket-page__full-page-container">
        <p>Loading...</p>
      </div>
    );
  }

  if (!rocket) {
    return (
      <div className="rocket-page__full-page-container">
        <p>This rocket doesn't seem to exist...</p>
        <Link to='/' className="rocket-page__not-found-link">Home page</Link>
      </div>
    );
  }

  return (
    <main className="rocket-page">
      <div className="container">
        <Navigation />
        <RocketInfo rocket={rocket} />
      </div>
      <section className="rocket-page__ship-full-width-slider">
        <FullWidthSlider slides={slides} />
      </section>
      <section className="rocket-page__starbase-section">
        <div className="rocket-page__starbase-section-photo">
          <div className="container">
            <div className="rocket-page__starbase-section-text">
              <h2 className="rocket-page__starbase-section-title">Starbase</h2>
              <p className="rocket-page__starbase-section-description">
                Development and manufacturing of Starship takes place at
                Starbase, one of the world’s first commercial spaceports
                designed for orbital missions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
