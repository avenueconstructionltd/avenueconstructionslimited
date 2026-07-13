export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alexander Mercer",
    role: "Founding Partner & Lead Architect",
    imageUrl: "/images/team/alexander.png",
    bio: "Formally trained at the AA School of Architecture, Alexander has spent two decades pioneering structural minimalism in Europe and the Middle East.",
  },
  {
    name: "Elena Rostova",
    role: "Managing Director & Advisory Lead",
    imageUrl: "/images/team/elena.png",
    bio: "Elena oversees signature acquisitions and portfolio growth, orchestrating private asset transactions for institutional collectors and family offices.",
  },
  {
    name: "Marcus Thorne",
    role: "Director of Construction Crafts",
    imageUrl: "/images/team/marcus.png",
    bio: "Marcus commands our onsite execution teams, ensuring structural concrete pours, stonemasonry details, and interior finishes match museum-grade standards.",
  },
];
