import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Rocket from "../../types/Rocket";

import { getRocket } from "../../api/api";

import Navigation from "../../components/Navigation";

import "./RocketPage.scss";

// http://localhost:5173/#/5e9d058859b1ffd1261368e2ad5f90

export default function RocketPage() {
  const { rocketId } = useParams();
  const [rocket, setRocket] = useState<Rocket>();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (rocketId) {
      getRocket(rocketId).then((response) => setRocket(response));
    }
  }, [rocketId]);

  return (
    <main className="rocket-page">
      <div className="container">
        <Navigation />
        <h2 className="rocket-page__title">{rocket?.name}</h2>
        <div className="rocket-page__rocket-info">
          
        </div>
      </div>
    </main>
  );
}
