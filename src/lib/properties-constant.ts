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
  statusTag: "Completed" | "Upcoming";
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
  architecturalDetails: {
    year: string;
    type: string;
    architect: string;
    status: string;
    plotOrientation: string;
  };
}

export const PROPERTIES: Property[] = [
  {
    slug: "avenue-ahsan-palace",
    name: "Avenue Ahsan Palace",
    tagline: "Eight-storied sanctuary of refined living in Bashundhara",
    location: "Bashundhara R/A, Dhaka",
    region: "Block E, Road 05",
    statusTag: "Completed",
    description:
      "A premium G+7 single-unit residential development designed to capture maximum light and ventilation.",
    narrative: [
      "Avenue Ahsan Palace was conceived as an architectural response to the urban landscape of Bashundhara. Structured as a G+7 residential villa, it offers single-unit privacy with an abundance of natural light and cross-ventilation, situated very close to Evercare Hospital.",
      "The building's orientation leverages southern wind paths and daylight, filtering them through deep terraces. Inside, every floor is finished with high-quality mirror-polished homogeneous tiles and premium sanitary fittings.",
      "Constructed using top-grade materials such as Crown/Holcim cement, BSRM steel, and a European passenger elevator, this completed project represents museum-grade residential engineering.",
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
          "Unit Area: 1532 Sft single unit per floor",
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
          "Car Parking: 7 Spaces with secure driveway",
          "Lobby: Reception Desk & Guest Waiting Area",
          "Staff Area: Guard quarters & driver toilets",
          "Utilities: Standby generator & water pump station",
          "Access: European high-speed passenger lift",
        ],
      },
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Verandas", value: "3" },
      { label: "Unit Size", value: "1,532 Sft" },
      { label: "Land Area", value: "3 Katha" },
      { label: "Status", value: "Completed" },
    ],
    highlights: [
      "Single-unit layout per floor for ultimate privacy",
      "Located in a prime block close to Evercare Hospital",
      "Stunning rooftop garden with community facilities",
      "European standard passenger lift (8-person capacity)",
      "Full-load standby generator for continuous power",
    ],
    materials: [
      'Mirror polish homogeneous tiles (24"x24")',
      "RAK Karla/Equivalent sanitary ware",
      "Sattar/Haibali premium CP fittings",
      "BSRM/AKS 60-grade structural steel",
      "Crown/Holcim high-strength cement",
    ],
    amenities: [
      "Rooftop community garden",
      "Intercom connection to guard post",
      "Drivers' waiting room and toilet",
      "Firefighting hydrant system",
      "Double water pump system",
    ],
    locationInsight:
      "Situated at Plot 51, Block E, Road 05, Bashundhara R/A, this project resides in Dhaka's most prestigious gated residential zone. It offers walking proximity to hospital services, top academic institutions, and retail enclaves.",
    architecturalDetails: {
      year: "2024-2026",
      type: "Completed G+7 Apartment Complex",
      architect: "Sharmin Afroz Shumi (IAB)",
      status: "Completed",
      plotOrientation: "South-facing wind paths",
    },
  },
  {
    slug: "avenue-md-heights",
    name: "Avenue MD. Heights",
    tagline: "Modernist volumetric blocks overlooking the park",
    location: "Aftabnagar R/A, Dhaka",
    region: "Block H, Road 18",
    statusTag: "Completed",
    description:
      "A cascading G+8 residential project engineered with monolithic concrete frames and open terrace structures.",
    narrative: [
      "Avenue MD. Heights rises from Aftabnagar as a landmark of modern architectural geometry. Combining deep terrace setbacks with a structural framework that optimizes natural thermal barriers, it stands as a completed jewel of urban design.",
      "The project features spacious 1,850 Sft apartments overlooking community parklands. Every detail, from the textured exterior plaster to the polished lobby stonemasonry, has been curated to set a new benchmark for Aftabnagar.",
      "Engineered for high structural resilience, the building incorporates 500W TMT steel and advanced seismic structural joints, ensuring lasting safety and luxury.",
    ],
    image: "/images/projects/avenue-md-heights/avenue-md-heights-project.webp",
    gallery: [
      {
        src: "/images/projects/avenue-md-heights/avenue-md-heights-project.webp",
        alt: "Avenue MD. Heights elevation view",
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
        title: "Typical Floor Plan",
        image: "/images/floor-plans/avenue-md-heights-typical.webp",
        details: [
          "Unit Area: 1850 Sft",
          "Accommodates: 3 Bedrooms & 4 Bathrooms",
          "Includes: 3 Private balconies & spacious family lounge",
          "Layout: Monolithic open-plan kitchen & dining",
          "Features: High-performance structural glazing",
        ],
      },
      {
        title: "Ground Floor Plan",
        image: "/images/floor-plans/avenue-md-heights-ground.webp",
        details: [
          "Car Parking: 8 Slots with automated security access",
          "Lobby: Double-height grand entrance lobby",
          "Staff Area: Guard room & driver waiting lounge",
          "Utilities: Substation & generator rooms",
        ],
      },
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "4" },
      { label: "Verandas", value: "3" },
      { label: "Unit Size", value: "1,850 Sft" },
      { label: "Land Area", value: "4 Katha" },
      { label: "Status", value: "Completed" },
    ],
    highlights: [
      "Park-facing elevation with deep landscaped balconies",
      "Double-height entrance lobby with granite finishes",
      "Rooftop BBQ terrace and family lounge",
      "Two-car parking allocation per apartment",
      "VRF air conditioning provisions",
    ],
    materials: [
      "Imported granite lobby tiles",
      "Premium local sanitary fittings",
      "High-performance structural glass",
      "Holcim/Shah premium cement",
      "BSRM 60-grade steel reinforcement",
    ],
    amenities: [
      "Fully equipped rooftop gym",
      "CCTV surveillance and 24/7 security guard post",
      "Submerged arrival court with guard room",
      "Automated firefighting alarm system",
      "Water purification system",
    ],
    locationInsight:
      "Located at Plot 30, Road 18, Block H, Aftabnagar R/A, the property offers direct views of Aftabnagar's central park, with immediate access to Hatirjheel Expressway for quick commutes.",
    architecturalDetails: {
      year: "2024-2025",
      type: "Completed G+8 Luxury Complex",
      architect: "Avenue Design Partners",
      status: "Completed",
      plotOrientation: "West-facing parkview",
    },
  },
  {
    slug: "avenue-dream",
    name: "Avenue Dream",
    tagline: "Choreographed urban light and functional luxury",
    location: "Rampura, Dhaka",
    region: "Ulon Road",
    statusTag: "Completed",
    description:
      "A premium high-rise residential tower designed for maximum urban space efficiency and cross-ventilation.",
    narrative: [
      "Avenue Dream represents our commitment to developing modern luxury within Dhaka's key transit networks. Situated on Ulon Road in Rampura, this completed landmark introduces refined urban family living.",
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
          "Unit Area: 1350 Sft",
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
      { label: "Unit Size", value: "1,350 Sft" },
      { label: "Land Area", value: "3 Katha" },
      { label: "Status", value: "Completed" },
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
      type: "Completed Residential Complex",
      architect: "Avenue Design Atelier",
      status: "Completed",
      plotOrientation: "South-east facing layout",
    },
  },
  {
    slug: "avenue-castle",
    name: "Avenue Castle",
    tagline: "Monolithic geometry holding the neighborhood skyline",
    location: "Uttar Badda, Dhaka",
    region: "Shadhinota Shoroni",
    statusTag: "Completed",
    description:
      "A luxury G+8 residential tower showcasing architectural symmetry and bold structural framing.",
    narrative: [
      "Avenue Castle stands on Shadhinota Shoroni as a landmark of residential grandeur. Its bold concrete structure features dramatic cantilevered overhangs and recessed windows that shield the interior from direct afternoon solar radiation.",
      "The building holds G+8 floors, providing premium units designed for modern families. The entrance lobby is finished with polished marble, offering a hotel-grade welcome.",
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
      { label: "Land Area", value: "3 Katha" },
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
      type: "Completed G+8 Residential Tower",
      architect: "Avenue Design Associates",
      status: "Completed",
      plotOrientation: "North-east facing facade",
    },
  },
];
