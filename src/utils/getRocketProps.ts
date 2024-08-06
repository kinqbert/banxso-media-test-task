import Rocket from "../types/Rocket";

export default function getRocketProps(rocket: Rocket) {
  const unitSymbols = {
    meter: "m",
    feet: "ft",
    meterVolume: "m³",
    feetVolume: "ft³",
    kilograms: "kg",
    pounds: "lbs",
  };

  return [
    {
      name: "Height",
      value: [
        [rocket.height_w_trunk.meters + unitSymbols.meter].join(" "),
        [rocket.height_w_trunk.feet + unitSymbols.feet].join(" "),
      ].join(" / "),
    },
    {
      name: "Diameter",
      value: [
        [rocket.diameter.meters + unitSymbols.meter].join(" "),
        [rocket.diameter.feet + unitSymbols.feet].join(" "),
      ].join(" / "),
    },
    {
      name: "Spacecraft volume",
      value: [
        [rocket.launch_payload_vol.cubic_meters + unitSymbols.meterVolume].join(
          " "
        ),
        [rocket.launch_payload_vol.cubic_feet + unitSymbols.feetVolume].join(
          " "
        ),
      ].join(" / "),
    },
    {
      name: "Trunk volume",
      value: [
        [rocket.trunk.trunk_volume.cubic_meters + unitSymbols.meterVolume].join(
          " "
        ),
        [rocket.trunk.trunk_volume.cubic_feet + unitSymbols.feetVolume].join(
          " "
        ),
      ].join(" / "),
    },
    {
      name: "Launch payload mass",
      value: [
        [rocket.launch_payload_mass.kg, unitSymbols.kilograms].join(" "),
        [rocket.launch_payload_mass.lb + unitSymbols.pounds].join(" "),
      ].join(" / "),
    },
    {
      name: "Return payload mass",
      value: [
        [rocket.return_payload_mass.kg + unitSymbols.kilograms].join(" "),
        [rocket.return_payload_mass.lb + unitSymbols.pounds].join(" "),
      ].join(" / "),
    },
  ];
}
