import { useEffect, useState } from "react";

import AboutUsSection from "../../components/AboutUsSection";
import HeadlineSection from "../../components/HeadlineSection";
import InfoSection from "../../components/InfoSection";
import RocketsSection from "../../components/RocketsSection";
import TeamSection from "../../components/TeamSection";
import FullWidthSlider from "../../components/FullWidthSlider";

import Slide from "../../types/Slide";

import { getSlides } from "../../api/api";

import "./MainPage.scss";

export default function MainPage() {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    getSlides().then((response) => setSlides(response));
  }, []);

  return (
    <main className="main-page">
      <div className="container">
        <HeadlineSection />
        <RocketsSection />
        <InfoSection />
        <AboutUsSection />
        <TeamSection />
      </div>
      <FullWidthSlider slides={slides} />
    </main>
  );
}
