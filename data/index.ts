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
      "Stiego is a comprehensive online fashion store that provides a seamless shopping experience for fashion enthusiasts. Built with modern web technologies, the platform offers a wide range of fashion products with an intuitive user interface.",
    features: [
      "User-friendly product catalog with advanced filtering",
      "Secure payment gateway integration",
      "Real-time inventory management",
      "Shopping cart and wishlist functionality",
      "Order tracking system",
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
      "Creating a scalable e-commerce platform that handles high traffic while maintaining fast load times and secure transactions.",
    solution:
      "Implemented Laravel's built-in caching mechanisms and optimized database queries. Used Livewire for dynamic interactions without page reloads.",
  },
  {
    id: 2,
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
      "Sektor 21 is a specialty coffee roastery company profile website that brings the brand's story and passion for coffee to life online. The platform highlights their roasting process, signature blends, coffee menu, and the warm ambiance of the roastery — crafted to attract coffee enthusiasts and potential wholesale partners.",
    features: [
      "Elegant company profile website showcasing brand identity and story",
      "Interactive coffee menu with product details and descriptions",
      "Behind-the-scenes roasting process section",
      "Gallery of roastery ambiance and coffee products",
      "Contact form for wholesale and partnership inquiries",
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
      "JT Rental is a comprehensive online vehicle rental platform that provides a seamless booking experience for customers. Built with modern web technologies, the platform offers a wide range of vehicles with an intuitive user interface.",
    features: [
      "User-friendly product catalog with advanced filtering",
      "Secure payment gateway integration",
      "Real-time inventory management",
      "Order booking system system",
      "Reporting and analytics dashboard for rental management",
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
    id: 4,
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
      "Soraview is an innovative smart TV application designed specifically for hotels. It provides guests with an interactive entertainment experience, offering streaming services, hotel information, and room service integration.",
    features: [
      "Streaming service integration",
      "Hotel information and services",
      "Room service ordering",
      "Multi-language support",
      "Content management system for hotels",
      "Usage analytics and reporting",
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
    id: 6,
    title: "SN Cargo - Logistics Management System",
    des: "A comprehensive logistics management system designed to streamline operations and enhance efficiency.",
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
      "SN Cargo is a comprehensive logistics management system that helps streamline shipping operations, track deliveries, and manage inventory. The platform provides real-time tracking and automated workflows for efficient logistics management.",
    features: [
      "Real-time shipment tracking",
      "Automated dispatch and routing",
      "Inventory management",
      "Customer portal for tracking",
      "Invoice generation and billing",
      "Analytics and reporting dashboard",
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
    id: 7,
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
      "The PPID Poltekkes Kemenkes Surakarta is a public information management system that promotes transparency and efficient dissemination of information. The platform allows users to access public information, submit requests, and track the status of their inquiries.",
    features: [
      "Public information catalog with search functionality",
      "Request submission and tracking system",
      "Automated response generation for common inquiries",
      "Admin dashboard for managing information and requests",
      "User authentication and role-based access control",
      "Analytics and reporting on information requests",
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
    id: 9,
    title: "MebelShop - Furniture E-commerce Platform",
    des: "A comprehensive furniture e-commerce platform designed to enhance the online shopping experience.",
    img: "/p5_final.webp",
    iconLists: ["/ts.svg", "/next.svg", "/tail.svg", "/git.svg"],
    link: "https://my-mebelshop.netlify.app/",
    slug: "mebelshop-furniture",
    category: "E-commerce",
    year: "2024",
    fullDescription:
      "MebelShop is a modern furniture e-commerce platform that offers a comprehensive shopping experience for furniture enthusiasts. The platform features high-quality product images, detailed specifications, and an intuitive purchase flow.",
    features: [
      "Interactive product gallery with zoom",
      "3D product visualization",
      "Advanced product filtering and search",
      "Shopping cart with save for later",
      "Multiple payment options",
      "Delivery scheduling system",
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
    id: 8,
    title: "HooBank - Financial Services App",
    des: "A comprehensive financial services app designed to streamline banking operations and enhance user experience.",
    img: "/p6_final.webp",
    iconLists: ["/ts.svg", "/next.svg", "/tail.svg", "/git.svg"],
    link: "https://tds-modern-bank.netlify.app/",
    slug: "hoobank-financial-services",
    category: "Finance",
    year: "2024",
    fullDescription:
      "HooBank is a modern financial services application that provides users with a comprehensive banking experience. The platform offers account management, transaction tracking, and various financial services through an intuitive interface.",
    features: [
      "Account management dashboard",
      "Transaction history and analytics",
      "Money transfer functionality",
      "Bill payment integration",
      "Financial insights and reports",
      "Secure authentication system",
    ],
    technologies: [
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Next.js", icon: "/next.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "Git", icon: "/git.svg" },
    ],
    challenges:
      "Creating a secure and user-friendly financial interface while ensuring data protection and regulatory compliance.",
    solution:
      "Implemented industry-standard security practices including encryption, secure authentication, and session management. Created an intuitive UI that simplifies complex financial operations.",
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
