import "./InfoSection.scss";

export default function InfoSection() {
  const infoSectionCardInfo: { name: string; value: string | number }[] = [
    {
      name: "Total launches",
      value: 43,
    },
    {
      name: "Visits to the ISS",
      value: 46,
    },
    {
      name: "Total reflights",
      value: 25,
    },
  ];
  return (
    <section className="info-section">
      {infoSectionCardInfo.map((cardInfo) => (
        <div key={cardInfo.name} className="info-section__card">
          <span className="info-section__card-value">{cardInfo.value}</span>
          <span className="info-section__card-name">{cardInfo.name}</span>
        </div>
      ))}
    </section>
  );
}
