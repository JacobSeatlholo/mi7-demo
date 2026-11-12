/**
 * All content below is real information drawn from the official Mi7 National
 * Group website (mi7national.co.za) and its official Facebook page.
 * Nothing in this file is invented. Text has been lightly edited for length,
 * tone and simple English while keeping the original facts and figures.
 */

export interface Division {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  blurb: string;
  overview: string[];
  image: string;
  icon: string;
  features: string[];
  stats?: { value: string; label: string }[];
  units?: { name: string; text: string; image?: string }[];
  ctaNote?: string;
  externalUrl?: string;
}

export const divisions: Division[] = [
  {
    slug: "armed-response",
    name: "Armed Response",
    shortName: "Armed Response",
    tagline: "Rapid, visible and ready, day and night",
    blurb:
      "Highly trained Reaction Officers respond to alarms, panics and community calls, working alongside police and other security companies in joint operations.",
    overview: [
      "Mi7 National Group built its Armed Response division to stand out in a crowded industry. The goal was never to compete, but to reinforce a unified approach to crime prevention where the whole security cluster works together to root out crime in our communities.",
      "Reaction Officers attend to all security concerns where resources allow, whether the complaint comes from a client or not. In January 2022 alone, Mi7 Reaction Officers received 26 908 reports of possible incidents. Only 17 of those were positive crimes affecting clients, while 947 incidents were attended for non clients.",
      "Officers are trained in advanced weapons and tactics, law enforcement certified defensive driving, verbal de-escalation, self defence and restraint, navigation and remote survival, executive protection fundamentals, and surveillance and counter surveillance. They also carry basic emergency medical training.",
    ],
    image: "/images/hero-mustang.jpg",
    icon: "siren",
    features: [
      "Rapid armed response to alarms, panics and distress calls",
      "Joint operations with the South African Police Service",
      "Community duty model: help with burst pipes, fallen trees, accident debris and safe entries",
      "Response teams often work alongside police to track down offenders",
      "Units on patrol 24 hours a day across serviced areas",
    ],
    stats: [
      { value: "26 908", label: "Incident reports received in January 2022 alone" },
      { value: "947", label: "Incidents attended for non clients that month" },
      { value: "4 min", label: "Response time target on subscription packages" },
    ],
    units: [
      {
        name: "Special Intervention Unit",
        text: "A skilled team of officers patrolling sectored areas to systematically drive out unwanted elements, with proactive patrolling alongside law enforcement.",
        image: "/images/vehicle-siu.png",
      },
      {
        name: "Strategic Threat Response Unit",
        text: "A highly specialised unit equipped with thermal drone technology and number plate recognition software to assist with priority crimes.",
        image: "/images/vehicle-stru.png",
      },
      {
        name: "Technical Support Unit",
        text: "Industry leading installations and technical solutions, maintained to efficient and safe standards on client property.",
        image: "/images/vehicle-technical.png",
      },
      {
        name: "All Terrain Vehicles",
        text: "Nimble ATVs that reach an incident zone 12 times faster than an officer on foot and increase patrol frequency 31 times.",
        image: "/images/vehicle-atv.png",
      },
      {
        name: "Armoured Personnel Carriers",
        text: "Soft shell and armoured carriers built to international military specifications, bullet, flame and bomb resistant, for safe deployment and extraction.",
        image: "/images/vehicle-carrier.png",
      },
      {
        name: "Fire Fighting Vehicles",
        text: "Specially fitted 4x4 double cabs carrying a 600 litre water tank, piston pump, petrol engine and hose reel for firefighting support.",
        image: "/images/vehicle-fire.png",
      },
      {
        name: "Strategic Tracking Vehicles",
        text: "Tracking vehicles fitted with mini computers running NAVIC number plate recognition, able to flag vehicles wanted in crime anywhere in the country.",
        image: "/images/vehicle-tracking.png",
      },
      {
        name: "K9 Unit",
        text: "Manned 24 hours a day by skilled handlers and dogs, including accelerant detection dogs that support fire investigations with pinpoint accuracy.",
        image: "/images/vehicle-k9.png",
      },
    ],
  },
  {
    slug: "emergency-medical-services-and-rescue",
    name: "Emergency Medical Services and Rescue",
    shortName: "Medical & Rescue",
    tagline: "Ambulances, advanced life support and rescue",
    blurb:
      "Intermediate and advanced life support ambulances, 4x4 rapid response vehicles and a rescue crew with Jaws of Life, serving clients and the public.",
    overview: [
      "Mi7 National Group offers Emergency Medical Services to protect client interests and their healthy wellbeing. Clients get access to intermediate and advanced life support ambulances and medics, while medics respond to any instance of public distress.",
      "Ambulances are fitted with Advanced Life Support equipment, Biomedic ECG monitors for cardiac pacing and end tidal carbon dioxide levels, defibrillators, ventilators for newborns and adults, and infusion devices. Rapid response medical vehicles have 4x4 off road capability, and rescue vehicles carry Light and Heavy Motor Vehicle rescue equipment, a stoke basket, and are capable of high angle and swift water rescue.",
      "The division started with two ambulances and a small crew of dedicated paramedics and has more than doubled, growing from 16 members to 26. Medics respond to between 120 and 170 cases per month, from car crashes and criminal injuries to medical call outs and hospital transfers.",
    ],
    image: "/images/jawslife1.jpg",
    icon: "heart-pulse",
    features: [
      "Advanced Life Support ambulances with ECG monitors, defibrillators and ventilators",
      "Rescue vehicles with Jaws of Life, rope rescue, swift water and hostile environment capability",
      "Community Wellness Programme: free nurse vital checks and advice",
      "Stand by medical crews at events, corporate functions and school sport",
      "First aid workshops and ambulance tours for primary schools",
      "Medical assist for clients without medical aid from R70 per month, terms and conditions apply",
    ],
    stats: [
      { value: "120 to 170", label: "Medical cases responded to per month" },
      { value: "180", label: "Residents treated free of charge by nurses monthly" },
      { value: "16 to 26", label: "Growth in EMS team members in one year" },
    ],
  },
  {
    slug: "network-command-centre",
    name: "Network Command Centre",
    shortName: "Command Centre",
    tagline: "The 24 hour brain of the operation",
    blurb:
      "Control Room Operators, Dispatchers and CCTV Controllers dispatch resources, monitor cameras and screen thousands of community messages every day.",
    overview: [
      "The brain of Mi7 National Group's operation lies within its Network Command Centre, which comprises various Control Rooms. These teams not only dispatch resources according to alarm activations and distress calls, but also monitor 205 crime related community WhatsApp groups, processing between 5 000 and 10 000 messages per day above and beyond their normal duties.",
      "Across the entire client base, the Control Room processed over one million alarm signals in only twelve months. More than 300 000 were panic activations or alarms being triggered, and Armed Response was requested or required on 13 224 occasions.",
      "The control room is fitted with state of the art technology ranging from signal detection for alarm and panic systems to mapping and dispatching software for armed response and medical units, plus internal and external surveillance of all vehicles.",
    ],
    image: "/images/control-room.jpg",
    icon: "radar",
    features: [
      "Signal detection for alarm and panic systems, 24 hours a day",
      "Mapping and dispatching software for armed response and medical units",
      "CCTV Operators watching live and recorded footage across the camera network",
      "Dispatchers tracking every Mi7 unit and monitoring in vehicle cameras",
      "Emergency Command and Joint Operations Centre for strategic incident management",
    ],
    stats: [
      { value: "1 million+", label: "Alarm signals processed in twelve months" },
      { value: "300 000+", label: "Panic activations handled" },
      { value: "205", label: "Community WhatsApp groups monitored" },
    ],
  },
  {
    slug: "surveillance",
    name: "Surveillance",
    shortName: "Surveillance",
    tagline: "A city wide net of smart cameras and drones",
    blurb:
      "Street domes with automatic number plate recognition, thermal drones and a Mobile Command Centre watch over Pietermaritzburg, Hilton and Howick.",
    overview: [
      "By strategically placing surveillance systems at intersections and known access routes, combined with 24 hour monitoring at the Network Command Centre, Mi7 proactively deploys assets to drive back crime in our communities.",
      "As of March 2022, Mi7 had installed 132 surveillance systems across Pietermaritzburg, Hilton and Howick. That includes 56 units with Automatic Number Plate Recognition connected to the national traffic system, and 76 CCTV domes at strategic intersections recording around 1 250 hours of footage per day. Units on patrol scan the plates of up to 30 000 vehicles per hour and automatically flag vehicles wanted in crime anywhere in the country.",
      "This surveillance net delivers results. In the first six weeks of 2022 alone, Mi7 recorded almost a dozen successes relating to stolen vehicles and drug activity, including recovered stolen vehicles and arrests made together with the police.",
    ],
    image: "/images/surveillance1.jpg",
    icon: "cctv",
    features: [
      "Public safety domes at intersections and access routes",
      "Automatic Number Plate Recognition flagging wanted vehicles nationwide",
      "Thermal sensor drones for aerial scanning, tracking and evidence gathering",
      "Mobile Command Centre with day, thermal and night vision up to two kilometres",
      "Live camera feed synced to armed response vehicles via on board interfaces",
    ],
    stats: [
      { value: "132", label: "Surveillance systems installed across three towns" },
      { value: "30 000", label: "Vehicle plates scanned per hour by equipped units" },
      { value: "1 250 hrs", label: "Footage recorded by the dome network every day" },
    ],
    units: [
      {
        name: "Public Domes",
        text: "Strategically placed camera domes connected to the national traffic system recognise number plates of vehicles used in crime, and track standout features on suspects across the entire network.",
        image: "/images/surveillance2.jpg",
      },
      {
        name: "Aerial Surveillance",
        text: "Drones with an integrated radiometric FLIR thermal sensor, 12 MP sensor and dynamic zoom scan large areas, track heat signatures in low light, and carry spotlights and loudhailers.",
      },
      {
        name: "Specialised Surveillance Vehicles",
        text: "A solar powered Mobile Command Centre dispatched with a four man team, carrying imported camera systems capable of day scanning, thermal heat locating or night vision for up to two kilometres, operable remotely from anywhere in the world.",
      },
    ],
  },
  {
    slug: "static-guarding",
    name: "Static Guarding",
    shortName: "Static Guarding",
    tagline: "PSIRA accredited officers on your site",
    blurb:
      "Professional static guards who understand dynamic, physical and procedural security, and how these interconnect to protect your facility.",
    overview: [
      "Providing exceptional security guard services requires more than deploying a member of staff with a role brief. Mi7 has many years of expertise in security management, and staff are trained to high standards in dynamic security, physical security and procedural security.",
      "All Mi7 guards and reaction officers are fully Private Security Industry Regulatory Authority (PSIRA) accredited professionals whose training is bolstered through programmes administered by expert coaches. Staff are performance monitored and managed.",
    ],
    image: "/images/static-guarding1.png",
    icon: "shield-check",
    features: [
      "Access and egress control so only authorised people, vehicles and materials enter and leave",
      "Handling of visitors, deliveries and contractors to standard operating procedures",
      "On site escorts from the access control point and back, with full verification",
      "Daily quality checks of equipment, beams, alarms, fencing, gates, cameras and weaponry",
      "Inspection log sheets kept on site for full accountability",
    ],
  },
  {
    slug: "guarding-services",
    name: "Guarding Services",
    shortName: "Guarding",
    tagline: "On site patrols for business and estates",
    blurb:
      "Specially selected and trained officers protect properties, assets, staff and residents, backed by technology installed at your facility.",
    overview: [
      "Mi7 offers on site guarding services for medium sized and large businesses. Officers are trained to detect, deter and respond to risks and incidents, and receive on site training so their expertise is specific to your company and facility.",
      "Physical patrols and checkpoints increase the likelihood that crimes are detected and stopped. Patrols are allocated to zones according to probability, using homogeneous, boundary and ring strategies, with algorithms used to calculate optimal patrol coverage.",
      "Visibility is a powerful crime deterrent. Whether officers patrol on foot, on bicycles, on Segways or in vehicles, they provide a constant presence and are trained to prevent problems before they start.",
    ],
    image: "/images/guarding1.png",
    icon: "badge-check",
    features: [
      "Zone based patrol planning: homogeneous, boundary and ring strategies",
      "Checkpoints across the property for detection and prevention",
      "Foot, bicycle, Segway and vehicle patrols",
      "Around the clock patrols promoting a safe workplace",
      "Rapid notification to law enforcement and emergency services",
      "Alerts to unsafe conditions such as water leaks or power outages",
    ],
  },
  {
    slug: "investigations-and-crime-scenes",
    name: "Investigations and Crime Scene Management",
    shortName: "Investigations",
    tagline: "Detectives, intelligence and forensic precision",
    blurb:
      "A Special Investigative Unit of professional detectives, intelligence specialists and lawyers, backed by a vast informer network.",
    overview: [
      "Mi7's Special Investigative Unit is made up of skilled operatives from a broad range of professional backgrounds. The team employs professional detectives, many with backgrounds in military and police intelligence, as well as lawyers who specialise in private and corporate fields.",
      "Investigators use state of the art equipment and rely on a vast informer network developed over years in KwaZulu-Natal and surrounding provinces. Intelligence gathering follows a three tier framework: strategic intelligence for prevention and awareness, tactical intelligence for planning and deployments, and operational intelligence on specific individuals or groups.",
      "The team investigates crimes, secures crime scenes, identifies and collects evidence, and takes statements. A mirror docket is created so the process flow of a case can be followed through to successful completion, with full chain of custody standards.",
    ],
    image: "/images/investigations.jpg",
    icon: "fingerprint",
    features: [
      "Covert intelligence led operations, including surveillance and undercover work",
      "Spy, covert and body worn cameras, GPS trackers and vehicle surveillance",
      "Three tier intelligence framework: strategic, tactical and operational",
      "Full crime scene management, from first arrival to evidence packaging",
      "Access to several tracing platforms for persons of interest",
      "Internal investigations with a mirror docket through to closure",
    ],
  },
  {
    slug: "vip-protection-and-escorts",
    name: "VIP Protection and Priority Escorts",
    shortName: "VIP Protection",
    tagline: "Close protection anywhere in South Africa",
    blurb:
      "Elite close protection crews combining a bodyguard, an Advanced Life Support medic and a luxury vehicle, with armoured vehicles on request.",
    overview: [
      "From executives and VIPs to government officials and celebrities, Mi7 agents provide safe and professional escort to and from any destination, anywhere in South Africa, for private citizens and dignitaries alike.",
      "Each agent has tactical and advanced driving experience and special training in operating firearms within confined spaces. Vehicles carry medical equipment, fire prevention tools and defensive weaponry. Agents scrutinise parking lots, petrol stations, risk hot spots, road works and emergency services along every route.",
      "A standard crew consists of a bodyguard, an Advanced Life Support medic and a luxury vehicle. The Close Protection Division also handles logistical high value assets and serves industries from retail and warehousing to logistics, real estate and construction.",
    ],
    image: "/images/vip.png",
    icon: "crown",
    features: [
      "Crew of bodyguard, Advanced Life Support medic and luxury vehicle",
      "Armoured vehicles available on request",
      "Route planning, escape routes and advance security checks",
      "High value asset escort for businesses",
      "Industries served include family offices, retail, warehousing, logistics, real estate, construction and entertainment",
    ],
  },
  {
    slug: "crowd-control-and-strike-management",
    name: "Crowd Control and Strike Management",
    shortName: "Crowd & Strike",
    tagline: "The Strike Force, trained for the toughest days",
    blurb:
      "Well screened, trained and managed strike force personnel protecting people and property during strikes, protests and coordinated threats.",
    overview: [
      "Mi7's Strike Management division, known as the Strike Force, provides superior crowd and event management, threat mitigation and strike security, with years of experience in security coordination and riot control throughout South Africa.",
      "Strike Force members are trained according to standards and procedures set out by the South African Police Service, so units can work alongside police in a coordinated manner. Members also receive in house training every year to keep up to date with new tactics and crowd management research.",
      "Mi7 plans with clients for any contingency and follows a low confrontation, high documentation approach to limit client liability and prevent violence. Aerial drones provide an overhead view of strike action and track the movement and activities of participants.",
    ],
    image: "/images/riot1.jpg",
    icon: "megaphone",
    features: [
      "Prevention first: contact with organisers, ground rules and designated areas",
      "Officers trained to SAPS standards for coordinated joint response",
      "Five pronged approach to strike management, escalating as needed",
      "Pre strike contingency planning to curb protest action",
      "Aerial drone monitoring and documentation of crowd movements",
    ],
  },
  {
    slug: "base-camps-and-relief",
    name: "Base Camps and Relieving Strategies",
    shortName: "Base Camps",
    tagline: "Sustained deployments, no fatigue",
    blurb:
      "People carriers and self sustaining base camp vehicles keep officers fresh, fed and on site for prolonged deployments far from home.",
    overview: [
      "Mi7's fleet includes people carriers seating between 9 and 21 individuals. Used together, they can deploy, relieve or extract up to 80 members per site comfortably, relieving staff between shifts on sites up to 150 kilometres from Mi7 offices on a daily basis to prevent fatigue.",
      "Where prolonged presence is required, specialised base camp vehicles carry QuickPitch tents that fold out over the vehicle canopy, a mini kitchenette with cooking facilities, portable showers and folding toilets.",
      "Each vehicle carries more than 200 litres of drinking water, a portable diesel generator and 220v electricity inverters. All base camp vehicles are 4x4 off road equipped, and all staff on site receive three meals per day.",
    ],
    image: "/images/vehicle-carrier.png",
    icon: "tent",
    features: [
      "Fleet of people carriers seating 9 to 21 people, up to 80 members per site",
      "Daily relief of officers on sites up to 150 kilometres away",
      "QuickPitch roof tents, kitchenette, portable showers and toilets",
      "Over 200 litres of drinking water, diesel generator and 220v inverters",
      "Three meals per day for all staff on site",
    ],
  },
  {
    slug: "neighbourhood-watch-link",
    name: "Neighbourhood Watch Link",
    shortName: "Watch Link",
    tagline: "Your patrollers, linked to our control room",
    blurb:
      "Recognised neighbourhood watches get a complimentary radio link to the 24 hour control room, plus a courtesy patroller kit.",
    overview: [
      "All neighbourhood watches recognised by their local social crime prevention heads are offered a complimentary link to the Mi7 control room through a handheld radio communication system.",
      "This gives patrollers immediate support from the 24 hour armed response service and the emergency medical service while on patrol in their own streets.",
      "Combined with the linking agreement, Mi7 provides a courtesy patrollers gift package comprising a reflective vest, a taser and pepper spray.",
    ],
    image: "/images/hero-services.jpg",
    icon: "radio",
    features: [
      "Complimentary handheld radio link to the 24 hour control room",
      "Immediate backup from armed response and medical teams",
      "Courtesy patroller kit: reflective vest, taser and pepper spray",
      "Available to watches recognised by local social crime prevention heads",
    ],
  },
  {
    slug: "security-hyperstore",
    name: "Mi7 Security Hyperstore",
    shortName: "Hyperstore",
    tagline: "Security gear, online and ready to ship",
    blurb:
      "Mi7's online security store stocking CCTV and DVR systems, air rifles, gas guns, self defence gear, automation and branded apparel.",
    overview: [
      "The Mi7 Security Hyperstore is the group's dedicated security retail store, serving the public and businesses online.",
      "The range includes CCTV systems, DVR systems and security cameras, gate and garage automation, intercom systems, lighting and batteries, air rifles and pellet guns, Co2 handheld gas guns, paintball markers, holsters, pepper spray, safety tasers, uniforms, clothing and more.",
      "Assistance is available directly on WhatsApp, making it easy to check stock, prices and delivery before you buy.",
    ],
    image: "/images/screenings.jpg",
    icon: "store",
    externalUrl: "https://mi7national.co.za/hyperstore/",
    ctaNote: "Visit the live Hyperstore to shop the full range.",
    features: [
      "CCTV systems, DVR systems and security cameras",
      "Gate and garage automation, intercoms, lighting and batteries",
      "Air rifles, pellet guns, Co2 gas guns and paintball markers",
      "Self defence: pepper spray and safety tasers",
      "Uniforms, clothing, footwear and branded apparel",
      "Direct WhatsApp assistance for stock and orders",
    ],
  },
];

export const divisionBySlug = (slug: string) => divisions.find((d) => d.slug === slug);

export interface Pkg {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  pitch: string;
  featured?: boolean;
  perks: string[];
}

export const packages: Pkg[] = [
  {
    id: "household",
    name: "Household Package",
    price: "R449",
    priceNote: "per month. Pensioners R359.",
    pitch: "Complete home protection with unlimited response for your family.",
    featured: true,
    perks: [
      "Monitoring and armed response",
      "Alarm activation and EMS dispatch",
      "Neighbourhood watch link to the control room",
      "Natural disaster support",
      "Pet calls on request",
      "Telephonic support for children and the elderly",
      "Speciality house calls to check on children and the elderly",
      "Access to the Special Intervention Unit",
      "Access to the Strategic Threat Response Unit",
      "Subsidiary rates on repairs and quotes",
      "All quotes and inspections are free",
      "Unlimited response",
      "Treatment and transport to hospital for clients without medical aid, R70 per month extra, terms and conditions apply",
    ],
  },
  {
    id: "business",
    name: "Business Package",
    price: "R599",
    priceNote: "per month",
    pitch: "Protect your premises, staff and stock with unlimited response.",
    perks: [
      "Monitoring and armed response",
      "Alarm activation",
      "Access to the Special Intervention Unit",
      "Access to the Strategic Threat Response Unit",
      "Exterior link to the 24 hour control room",
      "Camera monitoring, optional",
      "Natural disaster support",
      "Special escort at subsidiary rates",
      "Subsidiary rates on all repairs and quotes",
      "All quotes and inspections are free",
      "Unlimited response",
    ],
  },
  {
    id: "panic-alert",
    name: "Mi7 Panic Alert",
    price: "R249",
    priceNote: "per month",
    pitch: "A personal panic button that links straight to the control room.",
    perks: [
      "Personal panic button linked to the control room",
      "Not an alarm system: a direct line to help",
      "Telephonic support for children and the elderly",
      "Access to the Strategic Threat Response Unit if circumstances permit",
    ],
  },
  {
    id: "miguardian",
    name: "MiGuardian",
    price: "On request",
    priceNote: "custom solution",
    pitch: "Mi7's dedicated guardian offering. Ask the team what MiGuardian can do for you.",
    perks: [
      "Enquire directly through the quote tool or WhatsApp",
      "Tailored to your family or business needs",
      "Listed as a subscription option by Mi7 National Group",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Just had an encounter with a man running through my garden, spotted by the Pelham community. Between the men of the neighborhood and Mi7 there was a response within minutes! Feeling very protected right now. Big thank you to Mi7 and the men of Pelham!",
    name: "Tayla De Kock",
    date: "March 15, 2022",
  },
  {
    quote:
      "By far the best and most efficient. From their exceptional service to their friendly staff. We salute you Mi7.",
    name: "Resen Moonsamy",
    date: "March 13, 2022",
  },
  {
    quote:
      "I live in Cordwalles Road diagonally opposite Stonemead. This afternoon I witnessed your armed response wait on the driveway of Stonemead for about 15 minutes before the client opened the gate, and on exiting the complex he waited for the access gate to close before he took off. That was amazing. U guys are really visible in our area.",
    name: "Manil Stubenvoll",
    date: "January 28, 2022",
  },
  {
    quote:
      "I would like to sincerely thank the gentleman from Mi7 who stopped to assist me when my car broke down earlier this morning. I feel comforted by your presence everywhere. I was right. And I saw Mi7 stop and help someone else the other day as well. Thank you.",
    name: "Jane Ducasse Derengi",
    date: "October 31, 2021",
  },
  {
    quote:
      "Going beyond the call of duty and a company that is concerned about their community. You are truly the leaders in many ways. Well done and thank you Mi7.",
    name: "Evasen Padayachee",
    date: "February 14, 2022",
  },
  {
    quote:
      "I would like to express my gratitude to Mr Manit Singh who came to our rescue when we were stranded roadside near Liberty Midlands Mall on Friday the 26 November 2021. We really appreciate what he did for us, a big up for Mi7 security services.",
    name: "Gugu Mpanza",
    date: "December 3, 2021",
  },
  {
    quote:
      "Highly professional and always ready to go beyond what is expected of them! Keep up the good work!",
    name: "Nicolas van der Walt",
    date: "February 14, 2022",
  },
  {
    quote:
      "Mi7 doing amazing things for the community. You're simply the best!",
    name: "Sonja Wolfaard",
    date: "February 14, 2022",
  },
];

export const heroStats = [
  { value: 1000000, suffix: "+", label: "Alarm signals processed in 12 months" },
  { value: 132, suffix: "", label: "Surveillance systems installed" },
  { value: 205, suffix: "", label: "Community groups monitored" },
  { value: 4, suffix: " min", label: "Response time target" },
];

export const awards = [
  {
    title: "KZN Top Brand 2024",
    text: "Mi7 National Group retained its title as KZN's Top Brand for the second consecutive year.",
    image: "/images/award.jpg",
  },
  {
    title: "KZN Top Brand 2023",
    text: "Voted KZN's Top Brand in 2023 for the first time.",
    image: "/images/awards.jpg",
  },
  {
    title: "Standard Bank KZN Top Business Award",
    text: "Mi7 National Group claimed the Standard Bank KZN Top Business Award.",
    image: "/images/home-promo.jpg",
  },
];

export const news = [
  {
    title: "Mi7 National Group retains title as KZN's Top Brand for second consecutive year",
    date: "July 2024",
  },
  {
    title: "Press release: Mi7 National Group voted KZN's Top Brand in 2023",
    date: "2023",
  },
  {
    title: "Mi7 donates R28 900 to fund Pietermaritzburg star scholar's trip to Dubai",
    date: "2023",
  },
  {
    title: "Press release: Mi7 National Group claims Standard Bank KZN Top Business Award",
    date: "2022",
  },
  {
    title: "Press statement: Mi7's surveillance net catches the crooks",
    date: "08 February 2022",
  },
];

export const leadership = [
  {
    name: "Colin David",
    role: "Director",
    image: "/images/director-colin.jpeg",
  },
  {
    name: "Damian Venter",
    role: "Manager",
    image: null as string | null,
  },
  {
    name: "Wasim Pakker",
    role: "Armed Response Manager",
    image: null as string | null,
  },
  {
    name: "Brandon Drinkwater",
    role: "EMS Manager",
    image: null as string | null,
  },
];

export const whyMi7 = [
  {
    icon: "shield-heart",
    title: "Holistic protection",
    text: "A holistic service based on security, health and community wellbeing, rather than a basic approach to security. One team for armed response, medical rescue and wellness.",
  },
  {
    icon: "map-pin",
    title: "National presence",
    text: "Eight offices in major cities around the country, with deep roots in Pietermaritzburg, Hilton and Howick and a surveillance net watching over these communities.",
  },
  {
    icon: "handshake",
    title: "Family and community values",
    text: "Mi7 works with integrity and operates on values of God, Integrity and Community. Officers attend to community concerns, client or not, because safety is an all inclusive deal.",
  },
];

export const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-10.jpg",
  "/images/gallery-11.jpg",
  "/images/gallery-12.jpg",
];

export const fleetImages = [
  { image: "/images/video-mustang.jpg", label: "Armed response" },
  { image: "/images/video-ambu.jpg", label: "Emergency medical" },
  { image: "/images/video-ranger.jpg", label: "Response units" },
  { image: "/images/video-fortuner.jpg", label: "Patrol fleet" },
  { image: "/images/video-audi.jpg", label: "Rapid response" },
  { image: "/images/video-golf7.jpg", label: "Reaction units" },
];

export const timeline = [
  {
    year: "6 March 2021",
    title: "The first convoy rolls out",
    text: "Mi7 National Group launches from its Mkondeni headquarters with a convoy of 17 vehicles travelling the R103 to the Ashburton Pick n Pay, displaying its teams, vehicles, equipment and technology to the public for the first time.",
  },
  {
    year: "2021",
    title: "Emergency Medical Services is born",
    text: "The EMS division starts with two ambulances and a small crew of dedicated paramedics, mandated to respond to every emergency that comes through the line.",
  },
  {
    year: "2021 to 2022",
    title: "The surveillance net spreads",
    text: "From only three surveillance systems in the Ashburton area in 2020, Mi7 grows to 132 surveillance systems across Pietermaritzburg, Hilton and Howick by March 2022.",
  },
  {
    year: "March 2022",
    title: "EMS doubles in strength",
    text: "The medical team grows from 16 to 26 members, with rescue vehicles carrying the Jaws of Life joining the fleet and the Community Wellness Programme treating 180 residents free of charge every month.",
  },
  {
    year: "2023",
    title: "Voted KZN's Top Brand",
    text: "The public votes Mi7 National Group as KwaZulu-Natal's Top Brand, and the Standard Bank KZN Top Business Award follows.",
  },
  {
    year: "2024",
    title: "The title is retained",
    text: "Mi7 retains the KZN Top Brand title for the second consecutive year, confirming the trust communities place in the badge.",
  },
];
