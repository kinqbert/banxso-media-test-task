import HeadlineSection from "../../components/HeadlineSection";
import RocketsSection from "../../components/RocketsSection";

import "./MainPage.scss";

export default function MainPage() {
  return (
    <main className="main-page">
      <div className="container">
        <HeadlineSection />
        <RocketsSection />
      </div>
    </main>
  );
}
