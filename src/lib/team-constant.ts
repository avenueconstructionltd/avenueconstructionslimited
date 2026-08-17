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
    name: "Shahrier Sajib",
    role: "Project Engineer",
    imageUrl: "/images/team/Shahrier Sajib.png",
    bio: "Project Engineer responsible for on-site structural execution, engineering design coordination, project management, and quality compliance across developments.",
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
