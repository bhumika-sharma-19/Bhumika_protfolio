export const portfolioData = {
  personal: {
    name: "Bhumika Sharma",
    title: "Software Developer & AI/Data Science Engineer",
    tagline: "Bridging intelligent machine learning workflows with responsive, role-driven web and mobile applications.",
    statusBadge: "Available for Software & AI Internships",
    location: "India (Open to Remote & Relocation)",
    email: "bhumikasharma45583@gmail.com",
    phone: "+91 88246 67719",
    whatsappUrl: "https://wa.me/918824667719",
    github: "https://github.com/bhumika-sharma-19",
    linkedin: "https://linkedin.com/in/bhumika-sharma",
    resumeUrl: "/resume.pdf",
    bioSummary: "B.Tech student in Artificial Intelligence and Data Science with hands-on experience building React-based dashboard interfaces and contributing to real-world web and app projects. Skilled in Python and JavaScript, with experience across frontend development, Flask, Firebase, data analysis, and machine-learning workflows. Interested in building reliable, user-focused software and growing as a software developer."
  },

  stats: [
    { label: "Production Internship", value: "1", subtitle: "Cleanomatics Tech Solutions (Remote)" },
    { label: "Core Projects", value: "3+", subtitle: "Web, Mobile & ML Systems" },
    { label: "Role Dashboards", value: "6+", subtitle: "Admin, Staff, Rider, Tech & Sales" },
    { label: "Board Distinction", value: "80%+", subtitle: "Class X (82.5%) & Class XII (80.8%)" }
  ],

  aboutPillars: [
    {
      title: "Frontend & App Engineering",
      subtitle: "React.js & Expo (React Native)",
      description: "Proven experience engineering complex role-based dashboards (Admin, Staff, Rider, Technician) with React and developing cross-platform mobile screens using Expo."
    },
    {
      title: "Data Science & ML Pipelines",
      subtitle: "Python, Scikit-learn, Pandas & Flask",
      description: "Hands-on model evaluation and benchmarking across Random Forest, Decision Trees, XGBoost, and Gradient Boosting for real-time predictive web apps."
    },
    {
      title: "User-Focused Product Workflows",
      subtitle: "Firebase & Real-World Operations",
      description: "Designed production-ready systems for pest-control service management (PestCure) and 3-sided hostel operations (GrihFlow: Admin, Warden, Student)."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science",
      institution: "Gyan Ganga College of Technology, Jabalpur",
      period: "2025 — 2029",
      grade: "Undergraduate Degree (In Progress)",
      description: "Undergraduate curriculum concentrating on Artificial Intelligence algorithms, Machine Learning workflows, Data Analysis, and Modern Software Engineering principles.",
      coursework: [
        "Artificial Intelligence & Machine Learning",
        "Python & Object-Oriented Development",
        "Data Analysis & Statistical Computing",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Modern Web Technologies"
      ]
    },
    {
      degree: "Senior Secondary School Certificate (Class XII)",
      institution: "Shri Hari Adarsh Senior Secondary School, Borunda",
      period: "2025",
      grade: "Score: 80.80%",
      description: "Graduated with strong distinction in Physics, Chemistry, Mathematics, and Computer Science fundamentals.",
      coursework: ["Mathematics", "Physics", "Computer Science", "Chemistry"]
    },
    {
      degree: "Secondary School Examination (Class X)",
      institution: "Paradise Senior Secondary School",
      period: "2023",
      grade: "Score: 82.50%",
      description: "Demonstrated academic consistency and analytical excellence across core subjects.",
      coursework: ["Mathematics", "Science", "Social Science", "English"]
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: "Proficient", icon: "Terminal" },
      { name: "JavaScript (ES6+)", level: "Proficient", icon: "FileCode2" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout" }
    ],
    frontendMobile: [
      { name: "React.js", level: "Advanced", icon: "Layers" },
      { name: "React Native (Expo)", level: "Intermediate", icon: "Smartphone" },
      { name: "Dashboard Development", level: "Advanced", icon: "Layout" },
      { name: "Role-Based UI/UX", level: "Advanced", icon: "Users" }
    ],
    backendCloud: [
      { name: "Flask", level: "Intermediate", icon: "Server" },
      { name: "Firebase (Firestore & Auth)", level: "Intermediate", icon: "Flame" },
      { name: "RESTful APIs", level: "Intermediate", icon: "Network" }
    ],
    machineLearning: [
      { name: "Scikit-learn", level: "Proficient", icon: "Brain" },
      { name: "Pandas", level: "Proficient", icon: "Database" },
      { name: "NumPy", level: "Proficient", icon: "Cpu" },
      { name: "Regression & Ensembles", level: "Intermediate", icon: "Zap" },
      { name: "Model Pickling & Deployment", level: "Intermediate", icon: "Package" }
    ],
    computerVision: [
      { name: "OpenCV", level: "Intermediate", icon: "Brain" },
      { name: "Pytesseract (OCR)", level: "Intermediate", icon: "FileCode" },
      { name: "Image Preprocessing", level: "Intermediate", icon: "Layers" }
    ],
    dataViz: [
      { name: "Matplotlib", level: "Intermediate", icon: "Boxes" },
      { name: "Seaborn", level: "Intermediate", icon: "Layers" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "Visual Studio Code", level: "Advanced", icon: "Edit3" },
      { name: "Antigravity", level: "Advanced", icon: "Sparkles" },
      { name: "Virtual Environments (venv)", level: "Intermediate", icon: "Terminal" }
    ]
  },

  projects: [
    {
      id: "pestcure",
      title: "PestCure — Pest-Control Management App & Dashboards",
      category: "mobile-web",
      subtitle: "Industry-grade service application with cross-platform mobile views and multi-role web dashboards.",
      featured: true,
      imageGradient: "from-pink-950 via-neutral-900 to-stone-900",
      isPrivate: true,
      affiliation: "Cleanomatics Tech Solutions",
      description: "An industry-level operational platform engineered to streamline pest-control services. Bridges field technicians with central office operations, incorporating role-specific interfaces for technicians, accounts personnel, sales heads, and supervisors.",
      highlights: [
        "Developed specialized dashboards for Technician, Accounts, Sales HOD, and Sales Supervisor roles",
        "Contributed to core application workflows: customer onboarding, booking schedules, and service operations",
        "Engineered cross-platform mobile views using Expo (React Native) for field technician execution",
        "Integrated dynamic state handling and Firebase data structures for seamless team coordination",
        "Conducted research-based requirements gathering supporting practical feature deployments"
      ],
      tags: ["React.js", "React Native", "Expo", "Firebase", "Role-Based Dashboards", "JavaScript"],
      githubUrl: "https://github.com/bhumika-sharma-19",
      liveUrl: null,
      challenges: "Handling distinct operational permissions and tailored views across four key enterprise roles (Technician vs Accounts vs Sales HOD vs Supervisor) while keeping state synchronization fast and intuitive."
    },
    {
      id: "grihflow",
      title: "GrihFlow — 3-Sided Hostel Management Application",
      category: "web",
      subtitle: "Role-specific platform featuring distinct, dedicated dashboards for Admin, Warden, and Student residents.",
      featured: true,
      imageGradient: "from-stone-900 via-neutral-900 to-rose-950",
      isPrivate: false,
      affiliation: "Personal Project",
      description: "A centralized hostel management ecosystem that eliminates chaotic manual registers. Features three dedicated portals tailored for Students, Wardens, and Administrators to handle meal attendance, room vacancies, and resident communication.",
      highlights: [
        "Engineered 3 distinct role dashboards: Admin command panel, Warden supervision view, and Student portal",
        "Implemented daily meal attendance tracking and mess workflows to optimize daily preparation counts",
        "Created resident management modules for room allocation, occupancy status, and record-keeping",
        "Designed clean, responsive interfaces with dynamic data integration powered by Firebase",
        "Structured intuitive navigation to handle high-frequency daily student interactions"
      ],
      tags: ["React.js", "Firebase", "Firestore", "User Authentication", "Dashboard Design", "JavaScript"],
      githubUrl: "https://github.com/bhumika-sharma-19/GrihFlow",
      liveUrl: "https://github.com/bhumika-sharma-19/GrihFlow",
      challenges: "Designing intuitive role separation where students can quickly mark attendance while wardens and admins receive aggregated real-time headcount metrics without latency."
    },
    {
      id: "airline-stream",
      title: "Airline Stream — Flight Fare Prediction ML App",
      category: "ml",
      subtitle: "Machine learning web app that takes flight journey specs and estimates ticket prices using benchmarked models.",
      featured: true,
      imageGradient: "from-neutral-900 via-pink-950 to-stone-900",
      isPrivate: false,
      affiliation: "Personal Project",
      description: "A data science and machine learning web application connecting real-time user journey inputs to a trained predictive model. Built on a rich Kaggle flight dataset and evaluated across multiple regression architectures.",
      highlights: [
        "Trained, tuned and benchmarked 5 regression models: Random Forest, Decision Tree, Linear Regression, XGBoost, and Gradient Boosting",
        "Engineered key feature pipelines: source, destination, airline carrier, journey date, total stops, and duration",
        "Connected user inputs to the pickled (.pkl) model pipeline for instant, accurate fare estimation",
        "Built modular Python scripts with clean virtual environment separation in VS Code",
        "Integrated interactive web interface allowing instant parameter adjustments and predictions"
      ],
      tags: ["Python", "Flask", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
      githubUrl: "https://github.com/bhumika-sharma-19/Airline-Stream",
      liveUrl: "https://github.com/bhumika-sharma-19/Airline-Stream",
      challenges: "Optimizing categorical encoding and handling variance in airline fare distributions across peak and off-peak travel patterns to minimize prediction error."
    }
  ],

  experience: [
    {
      role: "Software Developer Intern",
      organization: "Cleanomatics Tech Solutions",
      location: "Remote",
      period: "July 2026 — September 2026",
      type: "Internship (Completed)",
      description: "Contributed to production web dashboards and mobile application workflows across active company projects.",
      achievements: [
        "Developed React-based dashboard interfaces for web applications, including Rider, Admin, and Staff management portals",
        "Engineered role-specific modules for the PestCure application: Technician, Accounts, Sales HOD, and Sales Supervisor views",
        "Implemented user-interface components and contributed to dynamic data integration across project dashboards",
        "Utilized Expo (React Native) to develop and refine cross-platform mobile application screens",
        "Collaborated closely with the core development team in practical product iterations and interface specifications"
      ],
      techStack: ["React.js", "React Native", "Expo", "Firebase", "JavaScript", "Git & GitHub"]
    }
  ],

  milestones: [
    {
      title: "Software Developer Internship",
      organization: "Cleanomatics Tech Solutions",
      date: "July 2026 — Sept 2026",
      badge: "Industry Experience",
      description: "Delivered production-level React web dashboards (Rider, Admin, Staff) and Expo mobile components for enterprise workflows."
    },
    {
      title: "Role-Based Systems Engineering",
      organization: "PestCure & GrihFlow",
      date: "2026",
      badge: "Full-Stack & Mobile",
      description: "Engineered multi-role architectures with distinct access tiers for technicians, wardens, students, and administrators."
    },
    {
      title: "Machine Learning Model Benchmarking",
      organization: "Airline Stream Project",
      date: "2026",
      badge: "AI & Data Science",
      description: "Trained and benchmarked Random Forest, XGBoost, Gradient Boosting, and Decision Trees for real-time price prediction."
    },
    {
      title: "Secondary Education Distinction",
      organization: "Secondary & Higher Secondary Boards",
      date: "2023 & 2025",
      badge: "80%+ Honors",
      description: "Earned 80.80% in Class XII (Senior Secondary) and 82.50% in Class X (Secondary) with a strong quantitative foundation."
    }
  ],

  codeSnippet: `// BhumikaSharma.js — Software Developer & AI/DS Engineer
class BhumikaSharma {
  constructor() {
    this.name = "Bhumika Sharma";
    this.role = "Software Developer & AI/Data Science Engineer";
    this.education = "B.Tech in AI & Data Science (2025 — 2029)";
    this.location = "India (Open to Remote & Relocation)";
    this.stack = [
      "Python", "JavaScript", "React.js", 
      "Expo", "Flask", "Firebase", "Scikit-learn"
    ];
    this.experience = "Software Developer Intern @ Cleanomatics";
    this.status = "Available for Software & AI Internships";
  }

  buildSolution(spec) {
    const cleanArchitecture = this.designWorkflows(spec);
    return this.shipReliableSoftware(cleanArchitecture);
  }

  isReadyToCollaborate() {
    return true; // Passionate, grounded, and ready to contribute!
  }
}

export default new BhumikaSharma();`
};
