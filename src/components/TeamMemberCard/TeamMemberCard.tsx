import TeamMember  from "../../types/TeamMember";

import "./TeamMemberCard.scss";

interface Props {
  teamMember: TeamMember;
}

export default function TeamMemberCard({ teamMember }: Props) {
  return (
    <div className="team-member-card">
      <img
        className="team-member-card__photo"
        src={teamMember.photo}
        alt={`${teamMember}'s photo`}
      />
      <div className="team-member-card__text">
        <div className="team-member-card__position">{teamMember.position}</div>
        <div className="team-member-card__name">{teamMember.name}</div>
      </div>
    </div>
  );
}
