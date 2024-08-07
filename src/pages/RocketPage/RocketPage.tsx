import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Rocket from "../../types/Rocket";

import { getRocket, getSlides } from "../../api/api";

import getRocketProps from "../../utils/getRocketProps";

import FullWidthSlider from "../../components/FullWidthSlider";
import Navigation from "../../components/Navigation";

import "./RocketPage.scss";
import Slide from "../../types/Slide";

export default function RocketPage() {
  const { rocketId } = useParams();
  const [rocket, setRocket] = useState<Rocket>();
  const [loading, setLoading] = useState(true);
  const [rocketProps, setRocketProps] = useState<
    { name: string; value: string }[]
  >([]);
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    if (rocketId) {
      getRocket(rocketId).then((response) => {
        setRocket(response);

        if (rocket) {
          setRocketProps(() => getRocketProps(rocket, true));

          getSlides().then((response) => setSlides(response));
        }

        setLoading(false);
      });
    }
  }, [rocket, rocketId]);

  if (loading) {
    return <h3>Loading..</h3>;
  }
  if (!rocket) {
    return <h3>This rocket doesn't exist..</h3>;
  }

  return (
    <main className="rocket-page">
      <div className="container">
        <Navigation />
        <h2 className="rocket-page__title">{rocket?.name}</h2>
        <div className="rocket-page__rocket-info">
          <img
            src={rocket?.flickr_images[0]}
            alt={`${rocket?.name} image`}
            className="rocket-page__rocket-image"
          />
          <div className="rocket-page__rocket-stats">
            <h3 className="rocket-page__rocket-stats-name">{rocket?.name}</h3>
            <div className="rocket-page__rocket-stats-props">
              {rocketProps.map((rocketProp) => (
                <div
                  key={rocketProp.name}
                  className="rocket-page__rocket-stats-prop"
                >
                  <span>{rocketProp.name}</span>
                  <span>{rocketProp.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
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
