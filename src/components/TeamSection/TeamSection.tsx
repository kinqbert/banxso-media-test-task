import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/scss";

import TeamMemberCard from "../TeamMemberCard";

import TeamMember from "../../types/TeamMember";
import { getTeamMembers } from "../../api/api";

import "./TeamSection.scss";
import { ArrowLeftIcon, ArrowRightIcon } from "../Icons";

export default function TeamSection() {
  const CARDS_PER_SLIDE = 2;

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    getTeamMembers().then((response) => setTeamMembers(response));
  }, []);

  return (
    <section className="team-section">
      <div className="team-section__left">
        <div className="team-section__text">
          <h2 className="team-section__title">Team</h2>
          <p className="team-section__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor sed urna a faucibus. Pellentesque mi nisl, mollis convallis
            metus id, congue semper neque. Sed suscipit eget ipsum ut gravida.
          </p>
        </div>
        <div className="team-section__buttons">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={cn("team-section__button", {
              "team-section__button--inactive": activeIndex === 0,
            })}
          >
            <ArrowLeftIcon fill="black" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={cn("team-section__button", {
              "team-section__button--inactive":
                activeIndex === teamMembers.length - CARDS_PER_SLIDE,
            })}
          >
            <ArrowRightIcon fill="black" />
          </button>
        </div>
      </div>
      <div className="team-section__right">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          slidesPerView={CARDS_PER_SLIDE}
          spaceBetween={20}
        >
          {teamMembers.map((teamMember) => (
            <SwiperSlide key={teamMember.name}>
              <TeamMemberCard teamMember={teamMember} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
