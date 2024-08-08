import { useMemo } from "react";
import Rocket from "../../types/Rocket";
import getRocketProps from "../../utils/getRocketProps";

import "./Card.scss";
import { Link } from "react-router-dom";

interface Props {
  rocket: Rocket;
}

export default function Card({ rocket }: Props) {
  const rocketProps = useMemo(() => getRocketProps(rocket), [rocket]);

  return (
    <div className="card">
      <Link to={`rockets/${rocket.id}`}>
        <img className="card__image" src={rocket.flickr_images[0]} alt="" />
      </Link>
      <div className="card__content">
        <Link to={`rockets/${rocket.id}`}>
          <p className="card__title">{rocket.name}</p>
        </Link>

        <ul className="card__props">
          {rocketProps?.map((rocketProp) => (
            <li key={rocketProp.name} className="card__prop">
              <span className="card__prop-name">{rocketProp.name}</span>
              <span className="card__prop-value">{rocketProp.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
