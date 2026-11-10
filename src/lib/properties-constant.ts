export interface PropertySpec {
  label: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface FloorPlan {
  title: string;
  image: string;
  details: string[];
}

export interface Property {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  region: string;
  landmark?: string;
  statusTag: "Completed" | "Under Construction" | "Upcoming";
  description: string;
  narrative: string[];
  image: string;
  gallery: GalleryImage[];
  floorPlans: FloorPlan[];
  specs: PropertySpec[];
  highlights: string[];
  materials: string[];
  amenities: string[];
  locationInsight: string;
  brochurePdf?: string;
  architecturalDetails: {
    year: string;
    type: string;
    architect: string;
    status: string;
    plotOrientation: string;
    rajukPermit?: string;
    structuralEngineer?: string;
  };
}

export const PROPERTIES: Property[] = [
  {
    slug: "avenue-castle",
    name: "Avenue Castle",
    tagline: "Monolithic geometry holding the neighborhood skyline",
    location: "Uttar Badda, Dhaka",
    region: "Shadhinota Shoroni",
    statusTag: "Completed",
    description:
      "A luxury 10-storied (G+9) residential tower showcasing architectural symmetry, bold structural framing, and 27 units on Shadhinota Shoroni.",
    narrative: [
      "Avenue Castle stands on Shadhinota Shoroni as a landmark of residential grandeur. Its bold concrete structure features dramatic cantilevered overhangs and recessed windows that shield the interior from direct afternoon solar radiation.",
      "The building holds G+9 floors with 3 units per floor (27 units total), providing premium residences designed for modern families. The entrance lobby is finished with polished marble, offering a hotel-grade welcome.",
      "Engineered using top-grade local reinforcement and high-performance concrete mixes, this completed project ensures premium structural safety alongside its striking visual presence.",
    ],
    image: "/images/projects/avenue-castle/avenue-castle-project.webp",
    gallery: [
      {
        src: "/images/projects/avenue-castle/avenue-castle-project.webp",
        alt: "Avenue Castle Architectural Render",
        caption: "3D Perspective Render",
      },
      {
        src: "/images/projects/modern-covered-parking.webp",
        alt: "Covered Parking & Driveway",
        caption: "Covered Parking & Driveway",
      },
      {
        src: "/images/projects/avenue-castle/avenue-castle-architect.webp",
        alt: "Architectural Detailing & Structural Elevation",
        caption: "Architectural Detailing & Structural Elevation",
      },
      {
        src: "/images/projects/avenue-castle/project_image_10.webp",
        alt: "Elevation Detailing",
        caption: "Structural Framing Detail",
      },
    ],
    floorPlans: [
      {
        title: "Typical Floor Plan",
        image: "/images/floor-plans/avenue-castle-typical.webp",
        details: [
          "Unit Area: 1450 Sft",
          "Accommodates: 3 Bedrooms & 3 Bathrooms",
          "Includes: 3 Verandas & air-conditioned lounge",
          "Layout: L-shaped living-dining configuration",
        ],
      },
      {
        title: "Ground Floor Parking & Driveway",
        image: "/images/floor-plans/avenue-castle-ground.webp",
        details: [
          "Car Parking: 6 Parking slots",
          "Lobby: Reception Desk & Security Lounge",
          "Utilities: Standby generator & water reserve",
        ],
      },
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Verandas", value: "3" },
      { label: "Unit Size", value: "1,450 Sft" },
      { label: "Total Units", value: "27 Units (3/floor)" },
      { label: "Land Area", value: "7.5 Katha" },
      { label: "Status", value: "Completed" },
    ],
    highlights: [
      "Striking geometric exterior with concrete planters",
      "Air-conditioned marble-finished reception lobby",
      "High-speed elevator with automatic rescue device (ARD)",
      "Lush rooftop garden with seating alcoves",
      "Rainwater harvesting system implemented",
    ],
    materials: [
      "Polished Sylhet granite and marble",
      "RAK/Sheltech premium homogeneous tiles",
      "Sattar sanitary fittings and accessories",
      "BSRM Extreme structural steel bars",
      "Holcim/Crown high-strength cements",
    ],
    amenities: [
      "Rooftop landscape deck",
      "Central reception desk and intercom PABX",
      "Guard quarters with separate toilet facilities",
      "24/7 power backup through generator",
      "State-of-the-art fire extinguishers and detection",
    ],
    locationInsight:
      "Located on Shadhinota Shoroni, Uttar Badda, the property enjoys prime urban connectivity, sitting just minutes away from the diplomatic zone of Baridhara and the Gulshan-1 commercial hub.",
    architecturalDetails: {
      year: "2024-2026",
      type: "10 Storied (G+9)",
      architect: "Avenue Design Associates",
      status: "Completed",
      plotOrientation: "North-east facing facade",
      rajukPermit: "RAJUK Approved & Delivered",
      structuralEngineer: "Heavy-Duty Monolithic RCC",
    },
  },
  {
    slug: "avenue-ahsan-palace",
    name: "Avenue Ahsan Palace",
    tagline: "Eight-storied sanctuary of refined living in Bashundhara",
    location: "Bashundhara R/A, Dhaka-1229",
    region: "Plot 51, Road 05, Block E",
    landmark: "Beside Evercare Hospital",
    statusTag: "Under Construction",
    description:
      "An 8-storied (G+7) single-unit luxury residential development on a 25-foot road in Bashundhara Block-E, steps from Evercare Hospital. Designed for maximum southern light and natural cross-ventilation.",
    narrative: [
      "Avenue Ahsan Palace is structured as an 8-storied (G+7) residential villa on Plot 51, Road 05, Block E, Bashundhara R/A. It offers complete single-unit privacy per floor with an abundance of natural light and cross-ventilation, situated very close to Evercare Hospital.",
      "The building's orientation leverages southern wind paths and daylight, filtering them through deep private terraces. Inside, every floor is finished with high-quality 24x24 mirror-polished homogeneous tiles and premium sanitary fittings.",
      "Constructed using top-grade materials including BSRM/AKS 60-grade 500W steel, Crown/Holcim/Bashundhara cement, and an 8-passenger European passenger elevator with AC-VVF drive, this ongoing project represents museum-grade residential engineering.",
    ],
    image: "/images/projects/avenue-ahsan-palace/avenue-ahsan-palace-project.webp",
    gallery: [
      {
        src: "/images/projects/avenue-ahsan-palace/avenue-ahsan-palace-project.webp",
        alt: "Avenue Ahsan Palace Perspective View",
        caption: "Perspective View",
      },
      {
        src: "/images/projects/avenue-ahsan-palace/avenue-ahsan-palace-architect.webp",
        alt: "Front Facade Architectural Detailing",
        caption: "Architectural Elevation Detailing",
      },
      {
        src: "/images/projects/avenue-ahsan-palace/project_image_3.webp",
        alt: "Ground floor parking layout",
        caption: "Car parking & driveway",
      },
      {
        src: "/images/projects/avenue-ahsan-palace/project_image_4.webp",
        alt: "Interior open floor plan",
        caption: "Spacious interior layout",
      },
    ],
    floorPlans: [
      {
        title: "Typical Floor Plan (1st to 7th Floor)",
        image: "/images/floor-plans/avenue-ahsan-palace-typical.webp",
        details: [
          "Unit Area: 1,532 Sft single unit per floor (1,277 Sft net + 20% common)",
          "Accommodates: 3 Bedrooms & 3 Bathrooms",
          "Includes: 3 Private Verandas & 1 Family Living",
          "Layout: 1 Drawing Room & 1 Dining Room",
          "Features: 1 Kitchen & 1 Maid's Toilet",
        ],
      },
      {
        title: "Ground Floor Plan & Driveway",
        image: "/images/floor-plans/avenue-ahsan-palace-ground.webp",
        details: [
          "Car Parking: 7 Spaces with secure driveway (14'-1\" wide)",
          "Lobby: Reception Desk & Guest Waiting Area",
          "Staff Area: Guard quarters & driver toilets",
          "Utilities: Standby generator & dual Italian water pump station",
          "Access: European high-speed 8-passenger lift",
        ],
      },
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Verandas", value: "3" },
      { label: "Unit Size", value: "1,532 Sft" },
      { label: "Land Area", value: "7 Katha" },
      { label: "Front Road", value: "25 Feet Wide" },
      { label: "Status", value: "Under Construction" },
    ],
    highlights: [
      "Single-unit layout per floor for ultimate family privacy",
      "Located in prime Block-E, walking proximity to Evercare Hospital",
      "Stunning rooftop garden with community facilities and pergolas",
      "European standard passenger lift (8-person capacity, AC-VVF drive)",
      "Full-load acoustic standby generator for continuous power",
      "100% RAJUK Permit Approved (Permit No: D-0006453-10-25)",
    ],
    materials: [
      'Mirror polish homogeneous tiles (24"x24")',
      "RAK Karla/Equivalent sanitary ware",
      "Sattar/Haibali premium CP fittings",
      "BSRM/AKS/KSRM 60-grade 500W structural steel",
      "Crown/Holcim/Bashundhara high-strength cement",
    ],
    amenities: [
      "Rooftop community garden & leisure deck",
      "Elaborate PABX intercom connection to guard post",
      "Drivers' waiting room and staff toilets",
      "Firefighting hydrant system & extinguishers",
      "Double Italian water pump system (Pedrollo/Saer)",
    ],
    locationInsight:
      "Situated at Plot 51, Block E, Road 05, Bashundhara R/A, Dhaka-1229, this project resides in Dhaka's most prestigious gated residential zone. It offers walking proximity to Evercare Hospital, top academic institutions, and central commercial avenues.",
    brochurePdf: "/brochures/avenue-ahsan-palace-brochure.pdf",
    architecturalDetails: {
      year: "2026-2028",
      type: "8 Storied (G+7)",
      architect: "Sharmin Afroz Shumi (IAB)",
      status: "Under Construction",
      plotOrientation: "South-facing wind paths",
      rajukPermit: "D-0006453-10-25",
      structuralEngineer: "Engr. Maruf Ahmed (IEB)",
    },
  },
  {
    slug: "avenue-md-heights",
    name: "Avenue Mohammad Heights",
    tagline: "10-Storied Luxury Landmark on 50-Foot Road in Aftabnagar",
    location: "Aftabnagar R/A, Dhaka-1212",
    region: "Plot 30, Road 18 (50 ft Road), Block H",
    statusTag: "Under Construction",
    description:
      "A 10-storied (B+G+9) luxury residential landmark on a 50-foot wide avenue in Aftabnagar Sector 4 on 7 Katha land. Features 18 luxury residences, basement parking, 2 high-speed lifts, and an air-conditioned rooftop community pavilion overlooking the 12.5 Bigha green reserve.",
    narrative: [
      "Avenue Mohammad Heights rises as a grand 10-storied (B+G+9) architectural landmark on Plot 30, Road 18, Block H, Sector 4, Eastern Housing Aftabnagar R/A, Dhaka. Set upon 7.00 Katha of land fronting a wide 50-foot road, it overlooks a vast 12.50 Bigha green reserve.",
      "The building features 18 luxury apartments (2 units per floor: Unit A at 1,801 Sft and Unit B at 1,785 Sft), each laid out with 3 bedrooms, 3 bathrooms, and 3 verandas. Deep balcony overhangs deflect solar radiation while capturing panoramic lake and park breezes.",
      "Engineered with a seismic-resistant monolithic reinforced concrete frame complying with BNBC standards, high-strength BSRM/AKS 500W steel, two high-speed elevators, 18 dedicated car parking spaces across basement and ground floors, and an air-conditioned rooftop community meeting room (15'-4\" × 11'-7\").",
    ],
    image: "/images/projects/avenue-md-heights/avenue-md-heights-project.webp",
    gallery: [
      {
        src: "/images/projects/avenue-md-heights/avenue-md-heights-project.webp",
        alt: "Avenue Mohammad Heights elevation view",
        caption: "Elevation View",
      },
      {
        src: "/images/projects/avenue-md-heights/project_image_5.webp",
        alt: "Alternative elevation view",
        caption: "Alternative View",
      },
      {
        src: "/images/projects/avenue-md-heights/project_image_6.webp",
        alt: "Entrance lobby rendering",
        caption: "Entrance Lobby",
      },
      {
        src: "/images/projects/avenue-md-heights/project_image_7.webp",
        alt: "Rooftop terrace design",
        caption: "Rooftop Terrace",
      },
    ],
    floorPlans: [
      {
        title: "Typical Floor Plan (2nd to 9th Floor)",
        image: "/images/floor-plans/avenue-md-heights-typical.webp",
        details: [
          "Units: Unit A: 1,801 Sft | Unit B: 1,785 Sft (2 Units Per Floor)",
          "Accommodates: 3 Bedrooms & 3 Bathrooms per unit",
          "Includes: 3 Private verandas & spacious living hall",
          "Layout: Monolithic open-plan kitchen with green marble counter & dining",
          "Features: High cross-ventilation corridor and south-east wind paths",
        ],
      },
      {
        title: "Ground Floor & Basement Parking Plan",
        image: "/images/floor-plans/avenue-md-heights-ground.webp",
        details: [
          "Car Parking: 18 Dedicated Slots (10 in Basement + 8 on Ground Floor)",
          "Lobby: Double lift lobby housing 2 high-speed passenger elevators",
          "Driveway: Wide 14'-0\" central driveway with smooth 1:5.5 access ramp",
          "Staff Area: Guard security checkpoint & driver waiting lounge with washrooms",
          "Utilities: Standby generator room & 15'-3\" x 8'-0\" reinforced water reservoir",
        ],
      },
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Verandas", value: "3" },
      { label: "Unit Size", value: "1,801 Sft" },
      { label: "Land Area", value: "7 Katha" },
      { label: "Front Road", value: "50 Feet Wide" },
      { label: "Status", value: "Under Construction" },
    ],
    highlights: [
      "Premier 7.00 Katha land holding on a 50-foot wide primary avenue",
      "10-storied (B+G+9) landmark with 18 luxury apartments (2 units per floor)",
      "Directly opposite a massive 12.50 Bigha planned green reserve",
      "Two high-speed 8-passenger elevators with AC-VVF drives & ARD safety",
      "18 dedicated car parking bays across basement and ground floors",
      "Air-conditioned rooftop community meeting room (15'-4\" x 11'-7\") & garden",
    ],
    materials: [
      'Mirror polish homogeneous floor tiles (24" × 24")',
      "RAK-Karla / equivalent designer sanitary ware",
      "Green marble kitchen countertop at 2.5 ft elevation",
      "Sattar / Haibali premium CP chrome brass fittings",
      "BSRM / AKS / KSRM 60-grade 500W high-yield structural steel",
      "Crown / Bashundhara / Holcim high-strength cement",
    ],
    amenities: [
      "Air-conditioned rooftop community pavilion & terrace garden",
      "Two high-speed European standard elevators",
      "CCTV surveillance & security guard post with kitchen facilities",
      "Underground and overhead dual water pump system (Pedrollo/Saer - Italy)",
      "Acoustic emergency standby generator supplying all units & common areas",
      "Full firefighting system with hydrants & chemical extinguishers",
    ],
    locationInsight:
      "Located at Plot 30, Road 18 (50 ft wide), Block H, Sector 4, Eastern Housing Aftabnagar R/A, Dhaka-1212. Overlooks a 12.50 Bigha green reserve with rapid transit access via Hatirjheel Expressway, Badda Link Road, and Rampura.",
    brochurePdf: "/brochures/avenue-mohammad-heights-brochure.pdf",
    architecturalDetails: {
      year: "2026-2029",
      type: "10 Storied (B+G+9)",
      architect: "Avenue Design Partners",
      status: "Under Construction",
      plotOrientation: "West-facing across 12.5 Bigha Green Reserve",
      rajukPermit: "100% RAJUK Compliant",
      structuralEngineer: "BNBC Seismic Frame",
    },
  },
  {
    slug: "avenue-dream",
    name: "Avenue Dream",
    tagline: "Choreographed urban light and functional luxury",
    location: "Rampura, Dhaka-1212",
    region: "Ulon Road",
    statusTag: "Under Construction",
    description:
      "A 9-storied (G+8) residential landmark on Ulon Road, Rampura, offering refined family living with acoustic glazing, cross-ventilation, and seamless Hatirjheel connectivity.",
    narrative: [
      "Avenue Dream represents our commitment to developing modern luxury within Dhaka's key transit networks. Situated on Ulon Road in Rampura, this landmark introduces refined urban family living.",
      "The building features cross-ventilated units that maintain comfortable indoor temperatures even during peak summer. Generous ceiling heights and open-plan kitchen-living layouts make each unit feel exceptionally spacious.",
      "Using our signature material selections, including robust sanitary ware, high-grade security doors, and low-maintenance facades, Avenue Dream stands as an icon of Rampura.",
    ],
    image: "/images/projects/avenue-dream/avenue-dream-project.webp",
    gallery: [
      {
        src: "/images/projects/avenue-dream/avenue-dream-project.webp",
        alt: "Avenue Dream Architectural Render",
        caption: "3D Perspective Render",
      },
      {
        src: "/images/projects/avenue-dream/project_image_9.webp",
        alt: "Rooftop Community Deck",
        caption: "Rooftop Community Lounge",
      },
      {
        src: "/images/projects/avenue-dream/avenue-dream-architect.webp",
        alt: "Architectural Detailing & Elevation",
        caption: "Architectural Detailing & Elevation",
      },
      {
        src: "/images/projects/elegant-dining-room.webp",
        alt: "Luxury Residence Suite",
        caption: "Interior Family Suite",
      },
    ],
    floorPlans: [
      {
        title: "Typical Floor Plan",
        image: "/images/floor-plans/avenue-dream-typical.webp",
        details: [
          "Unit Area: 1,450 Sft",
          "Accommodates: 3 Bedrooms & 3 Bathrooms",
          "Includes: 2 Verandas & spacious living hall",
          "Layout: Closed kitchen design & dining room",
        ],
      },
      {
        title: "Ground Floor Plan & Parking",
        image: "/images/floor-plans/avenue-dream-ground.webp",
        details: [
          "Car Parking: 6 Parking slots",
          "Lobby: Reception Desk & Security Post",
          "Utilities: Standby generator & water pump",
        ],
      },
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Verandas", value: "2" },
      { label: "Unit Size", value: "1,450 Sft" },
      { label: "Land Area", value: "5 Katha" },
      { label: "Status", value: "Under Construction" },
    ],
    highlights: [
      "Architectural landmark on Ulon Road",
      "Excellent connectivity near Hatirjheel and Rampura Bridge",
      "Spacious multi-purpose community hall for residents",
      "Secure entry gate with smart access controls",
      "Modern structural layout with natural breeze path",
    ],
    materials: [
      "Local homogeneous floor tiles",
      "RAK sanitary ware and chrome fittings",
      "Solid teak wood entrance door frame",
      "Berger weathercoat exterior paint",
      "Safety glass windows",
    ],
    amenities: [
      "Community gathering room",
      "Rooftop seating area",
      "Intercom system to guard room",
      "Standby generator for common areas",
      "Overhead and underground water reserve tanks",
    ],
    locationInsight:
      "Positioned on Ulon Road, Rampura, the project offers excellent transport routes, connecting directly with Hatirjheel to the west and Badda-Gulshan routes to the north.",
    architecturalDetails: {
      year: "2024-2026",
      type: "9 Storied (G+8)",
      architect: "Avenue Design Atelier",
      status: "Under Construction",
      plotOrientation: "South-east facing layout",
      rajukPermit: "RAJUK Sanctioned",
      structuralEngineer: "BNBC Engineered Frame",
    },
  },
];
