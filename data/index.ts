export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing a product designed to solve users' problems.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.webp",
    spareImg: "/grid.webp",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    type: 0,
    title: "Stiego - Online Fashion Store",
    des: "An e-commerce platform offering a seamless shopping experience for fashion enthusiasts.",
    img: "/p1_final.webp",
    iconLists: [
      "/php.webp",
      "/laravel.svg",
      "/tail.svg",
      "/mysql.webp",
      "/livewire.webp",
    ],
    link: "https://stiego.co.id",
    slug: "stiego-fashion-store",
    category: "E-commerce",
    year: "2025",
    fullDescription:
      "Stiego is a multibrand fashion retailer selling men's, women's, and accessory apparel, along with school uniforms and its own house brand. Built with modern web technologies, the platform offers a wide product catalog with an intuitive, category-driven browsing experience.",
    features: [
      "Extensive catalog covering women's, men's, and accessory categories",
      "House brand (Stiego) product line alongside multibrand items",
      "Add to Cart and Buy Now with WhatsApp-based order checkout",
      "User authentication with login and registration",
      "Category-based filtering and browsing",
      "Responsive design for all devices",
    ],
    technologies: [
      { name: "PHP", icon: "/php.webp" },
      { name: "Laravel", icon: "/laravel.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "MySQL", icon: "/mysql.webp" },
      { name: "Livewire", icon: "/livewire.webp" },
    ],
    challenges:
      "Organizing a large, varied catalog spanning multiple clothing categories and a house brand while keeping browsing and checkout simple for customers.",
    solution:
      "Implemented Laravel's built-in caching mechanisms and optimized database queries. Used Livewire for dynamic filtering and a streamlined WhatsApp-based checkout flow without page reloads.",
  },
  {
    id: 2,
    type: 0,
    title: "Sektor 21 - Roastery Coffee",
    des: "A modern company profile website for a specialty coffee roastery, showcasing their story, roast beans, and coffee culture.",
    img: "/p_sektor.webp",
    iconLists: [
      "/php.webp",
      "/laravel.svg",
      "/tail.svg",
      "/mysql.webp",
      "/livewire.webp",
    ],
    link: "https://companyprojectsector21.com",
    slug: "sektor21-roastery-coffee",
    category: "Company Profile",
    year: "2026",
    fullDescription:
      "Sektor 21 Roastery is a specialty coffee brand that sources and roasts single-origin Indonesian Arabica beans, selling directly to consumers and supplying cafes and restaurants. The platform combines an online product catalog with B2B offerings, ready-to-drink beverages, and a community gallery space for independent creatives.",
    features: [
      "Online product catalog with pricing for retail coffee bean varieties",
      "B2B supply offering for cafes and restaurants",
      "Ready-to-drink beverage menu (cold brew, milk coffee)",
      "Community gallery space showcasing independent creatives' work",
      "User login and partner bank showcase",
      "Fully responsive design optimized for all devices",
    ],
    technologies: [
      { name: "PHP", icon: "/php.webp" },
      { name: "Laravel", icon: "/laravel.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "MySQL", icon: "/mysql.webp" },
      { name: "Livewire", icon: "/livewire.webp" },
    ],
    challenges:
      "Translating the warm, artisanal identity of a specialty coffee roastery into a compelling digital experience while keeping the website fast and visually rich.",
    solution:
      "Designed a visually immersive layout using Tailwind CSS with custom typography and earthy color palettes. Used Livewire for smooth dynamic interactions and Laravel for managing content and contact form submissions efficiently.",
  },

  {
    id: 3,
    type: 0,
    title: "Youtravel - Travel & Tour Booking Platform",
    des: "A budget-friendly travel agency platform offering curated tour packages and backpacking experiences across Indonesia.",
    img: "/p9_final.webp",
    iconLists: [
      "/php.webp",
      "/laravel.svg",
      "/tail.svg",
      "/mysql.webp",
      "/livewire.webp",
    ],
    link: "https://travelindo.companyprojectsector21.com",
    slug: "youtravel-tour-booking",
    category: "Travel & Tourism",
    year: "2026",
    fullDescription:
      "Youtravel is a budget-friendly travel agency platform connecting travelers with affordable adventure experiences across Indonesian destinations such as Lombok, Bali, and Raja Ampat. The platform combines a curated destination catalog with a streamlined online booking system, tour guide profiles, and customer support to deliver a worry-free travel planning experience.",
    features: [
      "Destination catalog with detailed packages and pricing",
      "Online booking system supporting bank transfer, e-wallet, and card payments",
      "Group booking with custom rates",
      "Tour guide profiles highlighting expertise",
      "FAQ section covering booking, rescheduling, and payment policies",
      "Customer testimonials and 24/7 support contact channels",
    ],
    technologies: [
      { name: "PHP", icon: "/php.webp" },
      { name: "Laravel", icon: "/laravel.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "MySQL", icon: "/mysql.webp" },
      { name: "Livewire", icon: "/livewire.webp" },
    ],
    challenges:
      "Presenting a wide variety of destination packages and pricing tiers in a clear, easy-to-browse catalog while keeping the booking flow simple for users unfamiliar with online travel booking.",
    solution:
      "Built a structured destination catalog with Laravel and Livewire for dynamic filtering without page reloads, and designed a clean Tailwind CSS interface that guides users smoothly from browsing to booking confirmation.",
  },

  {
    id: 4,
    type: 0,
    title: "Elysian - Hotel Booking Platform",
    des: "Simplify your hotel booking experience with Elysian. Seamlessly connect with hotels and guests.",
    img: "/p2_final.webp",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/postgree.webp",
      "/prisma.svg",
    ],
    link: "https://elysianhotel.vercel.app",
    slug: "elysian-hotel-booking",
    category: "Booking Platform",
    year: "2024",
    fullDescription:
      "Elysian is a modern hotel booking platform designed to simplify the reservation process for both hotels and guests. The platform features real-time availability, secure payment processing, and an intuitive booking experience.",
    features: [
      "Real-time room availability checking",
      "Advanced search with filters (location, price, amenities)",
      "Secure booking and payment system",
      "User authentication and profile management",
      "Booking history and management",
      "Admin dashboard for hotel management",
    ],
    technologies: [
      { name: "Next.js", icon: "/next.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "PostgreSQL", icon: "/postgree.webp" },
      { name: "Prisma", icon: "/prisma.svg" },
    ],
    challenges:
      "Managing real-time room availability and preventing double bookings while ensuring fast performance.",
    solution:
      "Implemented database transactions with Prisma and used Next.js ISR for optimal performance. Added real-time validation and reservation locking mechanisms.",
  },
  {
    id: 5,
    type: 0,
    title: "Smoothic - Aesthetic Clinic Platform",
    des: "A premium Korean-inspired aesthetic clinic website featuring treatment services, a skincare shop, and online booking.",
    img: "/p10_final.webp",
    iconLists: [
      "/php.webp",
      "/laravel.svg",
      "/tail.svg",
      "/mysql.webp",
      "/livewire.webp",
    ],
    link: "https://smoothic.companyprojectsector21.com",
    slug: "smoothic-aesthetic-clinic",
    category: "Healthcare & Beauty",
    year: "2026",
    fullDescription:
      "Smoothic is a premium Korean-inspired aesthetic clinic platform offering personalized skincare treatments and a curated skincare product shop under the tagline 'Glow from the Inside Out.' The platform presents treatment categories, certified physician profiles, and an integrated e-commerce shop, giving visitors a professional and trustworthy digital presence for booking treatments and purchasing products.",
    features: [
      "Treatment catalog covering facial brightening, acne care, anti-aging, and hydration therapy",
      "Skincare product shop with pricing and add-to-cart functionality",
      "Certified physician profiles with specializations",
      "Patient testimonial carousel",
      "Online booking and multi-channel contact (phone, email, WhatsApp)",
      "Responsive, premium-branded design across devices",
    ],
    technologies: [
      { name: "PHP", icon: "/php.webp" },
      { name: "Laravel", icon: "/laravel.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "MySQL", icon: "/mysql.webp" },
      { name: "Livewire", icon: "/livewire.webp" },
    ],
    challenges:
      "Balancing a premium, clinical brand feel with the practical needs of an e-commerce shop and booking system, while keeping the experience fast and trustworthy for health-conscious visitors.",
    solution:
      "Used Tailwind CSS for a polished, high-end visual identity and Livewire-powered interactions for the shop cart and service booking, with Laravel handling secure data management for orders and appointments.",
  },
  {
    id: 6,
    type: 0,
    title: "JT Rental - Vehicle Rental Service",
    des: "A modern vehicle rental platform that provides a seamless booking experience for customers.",
    img: "/p_jogjatrip.webp",
    iconLists: [
      "/php.webp",
      "/laravel.svg",
      "/tail.svg",
      "/mysql.webp",
      "/livewire.webp",
    ],
    link: "https://jogjatriprental.web.id",
    slug: "jtrental-vehicle-rental",
    category: "E-commerce",
    year: "2025",
    fullDescription:
      "Jogja Trip (JT Rental) is a vehicle rental platform based in Yogyakarta offering a fleet of 50+ motorcycles and cars. Built with modern web technologies, the platform displays transparent daily rates and lets customers book daily rentals, driver-inclusive trips, self-drive rentals, and tour packages with an intuitive user interface.",
    features: [
      "Vehicle catalog with motorcycle and car categories and transparent daily rates",
      "Multiple rental types: daily, driver-included, self-drive, and tour packages",
      "Online booking with 30% down payment",
      "Fleet of 50+ maintained vehicle units",
      "24/7 customer service availability",
      "Responsive design for all devices",
    ],
    technologies: [
      { name: "PHP", icon: "/php.webp" },
      { name: "Laravel", icon: "/laravel.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "MySQL", icon: "/mysql.webp" },
      { name: "Livewire", icon: "/livewire.webp" },
    ],
    challenges:
      "Creating a scalable booking platform that handles high traffic while maintaining fast load times and secure transactions.",
    solution:
      "Implemented Laravel's built-in caching mechanisms and optimized database queries. Used Livewire for dynamic interactions without page reloads.",
  },
  {
    id: 7,
    type: 1,
    title: "Soraview - Smart TV Application",
    des: "A smart TV application designed for hotels, providing guests with an interactive entertainment experience.",
    img: "/p3_final.webp",
    iconLists: [
      "/php.webp",
      "/bootstrap.webp",
      "/mysql.webp",
      "/livewire.webp",
      "/laravel.svg",
    ],
    link: "https://soraview.id",
    slug: "soraview-smart-tv",
    category: "Entertainment",
    year: "2023",
    fullDescription:
      "Soraview is an interactive smart TV system for hotels that turns guest room televisions into a digital service and entertainment hub. Guests can order food and beverages, browse hotel info and promotions, and stream content, while hotel staff manage WiFi, devices, and pricing from a centralized dashboard.",
    features: [
      "Food and beverage ordering directly from the TV",
      "Personalized room booking with automatic guest name display",
      "Streaming app integration (Netflix, YouTube)",
      "WiFi access via QR code",
      "Hotel guides, facility info, events, and promotions",
      "Centralized management dashboard with dynamic pricing for hotel staff",
    ],
    technologies: [
      { name: "PHP", icon: "/php.webp" },
      { name: "Bootstrap", icon: "/bootstrap.webp" },
      { name: "MySQL", icon: "/mysql.webp" },
      { name: "Livewire", icon: "/livewire.webp" },
      { name: "Laravel", icon: "/laravel.svg" },
    ],
    challenges:
      "Creating a TV-optimized interface that works across different smart TV platforms and screen sizes.",
    solution:
      "Developed a responsive interface optimized for TV screens with remote control navigation. Implemented a flexible architecture supporting multiple TV platforms.",
  },
  {
    id: 8,
    type: 1,
    title: "SN Cargo - Logistics Management System",
    des: "A freight forwarding company website covering domestic and international cargo shipping with an online tracking portal.",
    img: "/p4_final.webp",
    iconLists: [
      "/php.webp",
      "/bootstrap.webp",
      "/mysql.webp",
      "/livewire.webp",
      "/laravel.svg",
    ],
    link: "https://suryagita.com",
    slug: "sn-cargo-logistics",
    category: "Logistics",
    year: "2023",
    fullDescription:
      "SN Cargo (PT. Suryagita Nusaraya) is a freight forwarding company website covering domestic and international cargo shipping, project logistics, customs clearance, and door-to-door delivery. The platform showcases the company's 35+ branch network and airline partnerships while giving customers an online cargo tracking portal.",
    features: [
      "Domestic and international freight forwarding services",
      "Project and specialized cargo logistics",
      "Customs clearance service listings",
      "Door-to-door delivery service",
      "Online cargo tracking portal",
      "Branch network and airline partnership showcase",
    ],
    technologies: [
      { name: "PHP", icon: "/php.webp" },
      { name: "Bootstrap", icon: "/bootstrap.webp" },
      { name: "MySQL", icon: "/mysql.webp" },
      { name: "Livewire", icon: "/livewire.webp" },
      { name: "Laravel", icon: "/laravel.svg" },
    ],
    challenges:
      "Managing complex logistics workflows and ensuring real-time tracking accuracy across multiple delivery points.",
    solution:
      "Implemented event-driven architecture with real-time updates. Created automated workflows using Laravel queues and scheduled tasks.",
  },
  {
    id: 9,
    type: 1,
    title: "PPID - Poltekkes Kemenkes Surakarta",
    des: "A public information management system designed to facilitate transparency and efficient information dissemination.",
    img: "/p7_final.webp",
    iconLists: [
      "/php.webp",
      "/bootstrap.webp",
      "/mysql.webp",
      "/livewire.webp",
      "/laravel.svg",
    ],
    link: "https://ppid.poltekkes-solo.ac.id",
    slug: "ppid-poltekkes-surakarta",
    category: "Information Management",
    year: "2023",
    fullDescription:
      "The PPID Poltekkes Kemenkes Surakarta is the institution's public information disclosure portal, built to comply with Indonesian transparency regulations. It categorizes public information, provides request/complaint forms, and offers multi-channel WhatsApp support across departments and campuses.",
    features: [
      "Public information categorized as periodic, sudden, and on-demand",
      "Information request, objection, and complaint forms",
      "Institutional profile, procedures, and news sections",
      "WhatsApp-based customer service across 9 departments",
      "Coverage of three campus locations",
      "Responsive design aligned with government transparency standards",
    ],
    technologies: [
      { name: "PHP", icon: "/php.webp" },
      { name: "Bootstrap", icon: "/bootstrap.webp" },
      { name: "MySQL", icon: "/mysql.webp" },
      { name: "Livewire", icon: "/livewire.webp" },
      { name: "Laravel", icon: "/laravel.svg" },
    ],
    challenges:
      "Ensuring efficient handling of public information requests while maintaining data security and user privacy.",
    solution:
      "Implemented a robust request management system with automated workflows. Used Laravel's built-in security features to protect sensitive information and ensure compliance with data protection regulations.",
  },
  // {
  //   id: 7,
  //   title: "BKD Jateng - Employee Management System",
  //   des: "An employee management system designed to streamline HR operations and enhance organizational efficiency.",
  //   img: "/p8_final.webp",
  //   iconLists: [
  //     "/php.webp",
  //     "/bootstrap.webp",
  //     "/mysql.webp",
  //     "/livewire.webp",
  //     "/laravel.svg",
  //   ],
  //   link: "https://bkd.jatengprov.go.id",
  //   slug: "bkd-jateng-employee-management",
  //   category: "HR Management",
  //   year: "2023",
  //   fullDescription:
  //     "The BKD Jateng Employee Management System is a comprehensive platform designed to streamline HR operations and enhance organizational efficiency. The system provides tools for employee data management, attendance tracking, and performance evaluation.",
  //   features: [
  //     "Employee database with detailed profiles",
  //     "Attendance tracking and leave management",
  //     "Performance evaluation and feedback system",
  //     "Role-based access control for HR staff",
  //     "Automated report generation for HR metrics",
  //     "Integration with payroll and benefits systems",
  //   ],
  //   technologies: [
  //     { name: "PHP", icon: "/php.webp" },
  //     { name: "Bootstrap", icon: "/bootstrap.webp" },
  //     { name: "MySQL", icon: "/mysql.webp" },
  //     { name: "Livewire", icon: "/livewire.webp" },
  //     { name: "Laravel", icon: "/laravel.svg" },
  //   ],
  //   challenges:
  //     "Managing sensitive employee data securely while providing an efficient and user-friendly interface for HR staff.",
  //   solution:
  //     "Implemented robust security measures including encryption and access controls. Designed an intuitive interface that simplifies complex HR tasks and improves overall efficiency.",
  // },
  {
    id: 10,
    type: 1,
    title: "Inti Mulia Cahaya - Seafood Export Company Profile",
    des: "A corporate profile website for a seafood export company, showcasing its product lines, operational infrastructure, and international export reach.",
    img: "/p_inti.webp",
    iconLists: ["/php.webp", "/laravel.svg", "/tail.svg", "/mysql.webp"],
    link: "https://intimuliacahaya.co.id",
    slug: "inti-mulia-cahaya-seafood-export",
    category: "Company Profile",
    year: "2025",
    fullDescription:
      "PT Inti Mulia Cahaya is an Indonesian seafood export company supplying fresh and live aquatic products to international markets. The website serves as the company's corporate profile and business development platform, presenting its product range, branch network, and export operations to connect with international importers.",
    features: [
      "Product showcase covering live lobster, grouper, mud crab, blood cockle, and fresh demersal, pelagic, and tuna fish",
      "Company profile highlighting 10 branch locations across eastern Indonesia",
      "Overview of cold storage, processing facilities, and HACCP-certified operations",
      "Export information covering shipments to 7+ countries including China and Taiwan",
      "Contact section for international importer inquiries",
      "Fully responsive design for desktop and mobile visitors",
    ],
    technologies: [
      { name: "PHP", icon: "/php.webp" },
      { name: "Laravel", icon: "/laravel.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "MySQL", icon: "/mysql.webp" },
    ],
    challenges:
      "Presenting a wide range of seafood products and export credentials in a way that builds trust with international B2B buyers unfamiliar with the company.",
    solution:
      "Built a structured company profile with Laravel and a clean Tailwind CSS layout, organizing products, certifications, and branch coverage into clear sections that establish credibility for export partners.",
  },
  {
    id: 11,
    title: "MebelShop - Furniture E-commerce Platform",
    des: "A comprehensive furniture e-commerce platform designed to enhance the online shopping experience.",
    img: "/p5_final.webp",
    iconLists: ["/ts.svg", "/next.svg", "/tail.svg", "/git.svg"],
    link: "https://my-mebelshop.netlify.app/",
    slug: "mebelshop-furniture",
    category: "E-commerce",
    year: "2024",
    fullDescription:
      "MebelShop is a furniture e-commerce platform offering categorized product browsing across chairs, beds, cupboards, and lighting. The platform highlights discounted pricing, customer testimonials, and an email subscription flow for additional offers.",
    features: [
      "Product catalog organized by category (chairs, beds, cupboards, lighting)",
      "Discount pricing display with original and sale prices",
      "Customer testimonial section",
      "Email subscription signup for additional discounts",
      "Responsive product gallery with pricing details",
      "Fast, modern shopping experience built with Next.js",
    ],
    technologies: [
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Next.js", icon: "/next.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "Git", icon: "/git.svg" },
    ],
    challenges:
      "Displaying large furniture images efficiently while maintaining fast load times and providing an engaging user experience.",
    solution:
      "Implemented Next.js Image optimization with lazy loading. Used modern image formats (WebP) and responsive images for different screen sizes.",
  },
  {
    id: 12,
    title: "HooBank - Fintech Landing Page",
    des: "A modern marketing landing page for a fintech product, highlighting its value proposition, features, and social proof.",
    img: "/p6_final.webp",
    iconLists: ["/ts.svg", "/next.svg", "/tail.svg", "/git.svg"],
    link: "https://tds-modern-bank.netlify.app/",
    slug: "hoobank-financial-services",
    category: "Finance",
    year: "2024",
    fullDescription:
      "HooBank is a marketing landing page for a fintech credit card product, built to communicate its value proposition and drive sign-ups. The page combines a bold hero message, usage statistics, feature highlights, and social proof from testimonials and client logos.",
    features: [
      "Hero section with core value proposition and CTA",
      "Statistics banner (active users, trusted companies, transaction volume)",
      "Feature highlights: rewards, security, and balance transfer benefits",
      "Billing and card selection showcase section",
      "Testimonials and trusted client logos (Airbnb, Binance, Coinbase, Dropbox)",
      "App store download links and responsive footer navigation",
    ],
    technologies: [
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Next.js", icon: "/next.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "Git", icon: "/git.svg" },
    ],
    challenges:
      "Communicating a fintech product's value proposition clearly and persuasively on a single scrollable page while keeping the visual design polished and performant.",
    solution:
      "Built a component-based landing page with reusable sections in React and Tailwind CSS, using clear visual hierarchy and social proof elements to guide visitors from hero to call-to-action.",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project..",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Website Development",
    desc: "Build custom websites for businesses and individuals using modern web technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "SEO Optimization",
    desc: "Improve website visibility on search engines through on-page optimization, keyword research, and performance tuning.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Designed intuitive and visually appealing user interfaces to enhance user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp3.webp",
  },
  {
    id: 4,
    title: "Consultancy Services",
    desc: "Provided expert advice on web development strategies and best practices to clients.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/tiodwisatrio",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/tiodwisatrio_/",
  },
  {
    id: 3,
    img: "/wa.svg",
    link: "https://wa.me/6288972061745",
  },
  {
    id: 4,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/tio-dwi-satrio-a91153177/",
  },
];
