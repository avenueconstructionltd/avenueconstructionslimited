export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Golam Rosul",
    role: "Managing Director",
    imageUrl: "/images/team/golam-rosul.png",
    bio: "Managing Director leading Avenue Construction Limited with strategic vision, corporate governance, and commitment to architectural excellence across all real estate developments.",
  },
  {
    name: "Engr. Md. Matiur Rahman",
    role: "Director of Structural Engineering & Compliance",
    imageUrl: "/images/team/matiur-rahman.png",
    bio: "Specializes in earthquake-resistant structural designs and RAJUK regulatory compliance, ensuring every construction satisfies local building codes.",
  },
  {
    name: "Md. Shakil Ahamed",
    role: "Site Engineer",
    imageUrl: "/images/team/shakil-ahamed.png",
    bio: "Site Engineer responsible for on-site structural execution, high-precision concrete pour supervision, and quality assurance across developments.",
  },
  {
    name: "Sizan Ali",
    role: "Legal Executive",
    imageUrl: "/images/team/sizan-ali.png",
    bio: "Oversees land title verification, RAJUK compliance documentation, legal contracts, and corporate regulatory governance.",
  },
  {
    name: "Eadul Islam",
    role: "Accounts Officer",
    imageUrl: "/images/team/eadul-islam.png",
    bio: "Manages project budget allocations, client account ledgers, contractor payments, and financial auditing across all Avenue projects.",
  },
];
