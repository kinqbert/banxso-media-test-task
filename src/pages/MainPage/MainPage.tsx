import AboutUsSection from "../../components/AboutUsSection";
import HeadlineSection from "../../components/HeadlineSection";
import InfoSection from "../../components/InfoSection";
import RocketsSection from "../../components/RocketsSection";

import "./MainPage.scss";

export default function MainPage() {
  return (
    <main className="main-page">
      <div className="container">
        <HeadlineSection />
        <RocketsSection />
        <InfoSection />
        <AboutUsSection />
      </div>
    </main>
  );
}
