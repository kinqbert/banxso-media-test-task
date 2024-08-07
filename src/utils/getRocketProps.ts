import Rocket from "../types/Rocket";

export default function getRocketProps(rocket: Rocket, detailed = false) {
  const unitSymbols = {
    meter: "m",
    feet: "ft",
    cubicMeter: "m³",
    cubicFeet: "ft³",
    kilograms: "kg",
    pounds: "lbs",
  };

  const props = [
    {
      name: "Height",
      value: [
        [rocket.height_w_trunk.meters, unitSymbols.meter].join(" "),
        [rocket.height_w_trunk.feet, unitSymbols.feet].join(" "),
      ].join(" / "),
    },
    {
      name: "Diameter",
      value: [
        [rocket.diameter.meters, unitSymbols.meter].join(" "),
        [rocket.diameter.feet, unitSymbols.feet].join(" "),
      ].join(" / "),
    },
    {
      name: "Spacecraft volume",
      value: [
        [rocket.launch_payload_vol.cubic_meters, unitSymbols.cubicMeter].join(
          " "
        ),
        [rocket.launch_payload_vol.cubic_feet, unitSymbols.cubicFeet].join(" "),
      ].join(" / "),
    },
    {
      name: "Trunk volume",
      value: [
        [rocket.trunk.trunk_volume.cubic_meters, unitSymbols.cubicMeter].join(
          " "
        ),
        [rocket.trunk.trunk_volume.cubic_feet, unitSymbols.cubicFeet].join(" "),
      ].join(" / "),
    },
    {
      name: "Launch payload mass",
      value: [
        [rocket.launch_payload_mass.kg, unitSymbols.kilograms].join(" "),
        [rocket.launch_payload_mass.lb, unitSymbols.pounds].join(" "),
      ].join(" / "),
    },
    {
      name: "Return payload mass",
      value: [
        [rocket.return_payload_mass.kg, unitSymbols.kilograms].join(" "),
        [rocket.return_payload_mass.lb, unitSymbols.pounds].join(" "),
      ].join(" / "),
    },
  ];

  if (!detailed) {
    return props;
  } 

  props.push(
    {
      name: "Heat shield material",
      value: rocket.heat_shield.material,
    },
    {
      name: "Heat shield temperature",
      value: rocket.heat_shield.temp_degrees.toString(),
    },
    {
      name: "Pressurized capsule volume",
      value: [
        [
          rocket.pressurized_capsule.payload_volume.cubic_meters,
          unitSymbols.cubicMeter,
        ].join(" "),
        [
          rocket.pressurized_capsule.payload_volume.cubic_feet,
          unitSymbols.cubicFeet,
        ].join(" "),
      ].join(" / "),
    },
    {
      name: "Thrusters amount",
      value: rocket.thrusters
        .reduce((acc, thruster) => acc + thruster.amount, 0)
        .toString(),
    },
    {
      name: "Dry mass",
      value: [
        [rocket.dry_mass_kg, unitSymbols.kilograms].join(" "),
        [rocket.dry_mass_lb, unitSymbols.pounds].join(" "),
      ].join(" / "),
    }
  );

  return props;
}
