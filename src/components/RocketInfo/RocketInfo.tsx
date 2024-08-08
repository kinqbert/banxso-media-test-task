import { useEffect, useState } from "react";

import Rocket from "../../types/Rocket";

import getRocketProps from "../../utils/getRocketProps";

import './RocketInfo.scss';

interface Props {
  rocket: Rocket;
}

export default function RocketInfo({ rocket }: Props) {
  const [rocketProps, setRocketProps] = useState<
    { name: string; value: string }[]
  >([]);

  useEffect(() => {
    setRocketProps(() => getRocketProps(rocket, true));
  }, []);

  return (
    <>
      <h2 className="rocket-info__title">{rocket?.name}</h2>
      <div className="rocket-info__wrapper">
        <img
          src={rocket?.flickr_images[0]}
          alt={`${rocket?.name} image`}
          className="rocket-info__rocket-image"
        />
        <div className="rocket-info__rocket-stats">
          <h3 className="rocket-info__rocket-stats-name">{rocket?.name}</h3>
          <div className="rocket-info__rocket-stats-props">
            {rocketProps.map((rocketProp) => (
              <div
                key={rocketProp.name}
                className="rocket-info__rocket-stats-prop"
              >
                <span>{rocketProp.name}</span>
                <span>{rocketProp.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
