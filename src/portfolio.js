/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "TNP Event Planner",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "TNP Event Planner",
    type: "website",
    url: "http://https://devshelar.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "TNP Event Planner",
  logo_name: "TNP Event Planner",
  nickname: "We Plan, You Celebrate",
  subTitle:
    "A passionate team that thrives on creating seamless and memorable events from start to finish. We are dedicated to developing sustainable and scalable solutions that make a lasting impact on both social and corporate gatherings.",
  // resumeLink:
  //   "https://docs.google.com/document/d/1jRF6c6XN8B2IKrO37w3AyHr90rHLI4525nRQW011amk/edit?usp=sharing",
  // portfolio_repository: "https://github.com/Shelar1423",
  // githubProfile: "https://github.com/shelar1423",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/tnp-event-planners/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@TeamNayanPaul",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:teamnayanpaul@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/team_nayanpaul/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/team_nayanpaul/",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#5fe440", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Weddings Event Management Services",
      fileName: "FullStackImg",
      skills: [
        "Event flow management",
        "Destination wedding planning & venue selection",
        "Wedding planning and coordination",
        "Entertainment activities for wedding guests",
        "Wedding guest’s management",
        "Pre wedding event decoration & party organization",
        "Food and beverages services",
        "Wedding invitation & other communication services",
        "Transport & logistics management",
        "Styling & personal shopper",
        "Vendor Management",
        "Wedding Gifting Solutions",
        "Other wedding solutions",
      ],
    },

    {
      title: "Corporate Event Management Services",
      fileName: "DesignImg",
      skills: [
        "Event Flow Management",
        "Venue Selection and Booking",
        "Event Planning and Coordination",
        "Guest Management",
        "Pre-Event Activities and Workshops",
        "Food and Beverage Services",
        "Transportation and Logistics Management",
        "Audio-Visual and Technical Support",
        "Entertainment and Engagement Activities",
        "Branding and Promotional Services",
        "Vendor Management",
        "Post-Event Activities and Follow-Up",
        "Event Security and Compliance",
        "Corporate Gifting Solutions",
      ],
    },

    {
      title: "Social Event Management Services",
      fileName: "SocialEvent",
      skills: [
        "Event Flow Management",
        "Venue Selection and Booking",
        "Event Planning and Coordination",
        "Guest Management",
        "Pre-Event Activities and Workshops",
        "Food and Beverage Services",
        "Transportation and Logistics Management",
        "Audio-Visual and Technical Support",
        "Entertainment and Engagement Activities",
        "Branding and Promotional Services",
        "Vendor Management",
        "Post-Event Activities and Follow-Up",
        "Event Security and Compliance",
        "Other Social Event Solutions",
      ],
    },
  ],
};

// Aboutus Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      // profileLink: "https://leetcode.com/u/devshelarwork/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Bhavan's Vivekananda College of Science, Humanities & Commerce Sainikpur",
      subtitle: "Bachelor's in Computer Application",
      logo_path: "bvclogo.png",
      alt_name: "bhavans viviekananda college",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on  Cloud Computing and  front-end Development.",
      ],
      website_link: "https://www.bhavansvc.ac.in/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Wedding Planning",
      subtitle: "Complete Wedding Planning & Partial/Custom Wedding Planning",
      logo_path: "Wedding_planning.jpg",
      link: "/",
      alt_name: "Wedding Planning",
      color_code: "#0000",
    },
    {
      title: "Corporate Event Planning",
      subtitle: "Planning for Meetings, Conferences, and Team Building Events",
      logo_path: "Corporate_planning.png",
      link: "/",
      alt_name: "Corporate Event Planning",
      color_code: "#123456",
    },
    {
      title: "Birthday Party Planning",
      subtitle: "Themed Birthday Parties for All Age Groups",
      logo_path: "Birthday_Planning.png",
      link: "/",
      alt_name: "Birthday Party Planning",
      color_code: "#FF5733",
    },
    {
      title: "Gala Dinner Planning",
      subtitle: "Luxury Gala Dinners and Charity Events",
      logo_path: "Gala_Planning.png",
      link: "/",
      alt_name: "Gala Dinner Planning",
      color_code: "#C70039",
    },
    {
      title: "Event Marketing",
      subtitle: "Promotional Strategies and Marketing for Your Events",
      logo_path: "Event_Marketing.png",
      link: "/",
      alt_name: "Event Marketing",
      color_code: "#581845",
    },
    {
      title: "Conference Planning",
      subtitle: "Professional Conference & Seminar Planning",
      logo_path: "Conference_Planning.png",
      link: "/",
      alt_name: "Conference Planning",
      color_code: "#900C3F",
    },
  ],
};

// Career Page
const experience = {
  title: "Careers at TNP Event Planners",
  subtitle: "Work, Internship and Volunteership",
  descriptionOne:
    "At TNP Event Planners, we are always looking for passionate, creative, and dedicated individuals to join our team. If you’re excited about the world of event management and thrive in a dynamic environment, we’d love to hear from you!",
  descriptionTwo:
    "We offer opportunities across various roles, from event coordination to marketing and client relations. Explore your potential with us and be part of a team that brings unforgettable experiences to life.",
  descriptionThree:
    "Connect with us on social media or apply directly, and we’ll get back to you within 24 hours. Let's create extraordinary events together!",

  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Event Coordinator Intern",
          company: "TNP Event Planners",
          company_url: "",
          logo_path: "intern.jpg",
          duration: "August 2024",
          location: "Pune, India",
          description:
            "Assisted senior coordinators in organizing and executing events, managed logistics, vendor communication, and event setups.",
          color: "#ff6f61",
        },
        {
          title: "Marketing Intern",
          company: "TNP Event Planners",
          company_url: "",
          logo_path: "intern.jpg",
          duration: "June 2024",
          location: "Pune, India",
          description:
            "Supported the marketing team in creating and managing social media campaigns, content development, and strategy analysis.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Part-Time Jobs",
      experiences: [
        {
          title: "Social Media Marketing Specialist",
          company: "TNP Event Planners",
          company_url: "",
          logo_path: "partTimeJobs.webp",
          duration: "Part-Time",
          location: "Remote / Pune, India",
          description:
            "Responsible for managing and growing our social media presence across various platforms, creating engaging content, and analyzing performance metrics to optimize strategies.",
          color: "#1DA1F2",
        },
      ],
    },
    {
      title: "Full-Time Jobs",
      work: true,
      experiences: [
        {
          title: "Event Coordinator",
          company: "TNP Event Planners",
          company_url: "",
          logo_path: "fullTimeJobs.webp",
          duration: "Full-Time",
          location: "Pune, India",
          description:
            "Managed events from concept to completion, overseeing client communication, vendor management, and event logistics.",
          color: "#34A853",
        },
        {
          title: "Marketing Specialist",
          company: "TNP Event Planners",
          company_url: "",
          logo_path: "fullTimeJobs.webp",
          duration: "Full-Time",
          location: "Pune, India",
          description:
            "Developed and implemented marketing strategies to promote events and services, managed social media platforms and content creation.",
          color: "#FBBC05",
        },
        {
          title: "Client Relations Manager",
          company: "TNP Event Planners",
          company_url: "",
          logo_path: "fullTimeJobs.webp",
          duration: "Full-Time",
          location: "Pune, India",
          description:
            "Maintained strong client relationships, ensured client needs were met, and oversaw the execution of event plans.",
          color: "#EA4335",
        },
        {
          title: "Event Designer",
          company: "TNP Event Planners",
          company_url: "",
          logo_path: "fullTimeJobs.webp",
          duration: "Full-Time",
          location: "Pune, India",
          description:
            "Conceptualized and designed event themes, layouts, and decor to create memorable experiences for clients.",
          color: "#A142F4",
        },
        {
          title: "Logistics Manager",
          company: "TNP Event Planners",
          company_url: "",
          logo_path: "fullTimeJobs.webp",
          duration: "Full-Time",
          location: "Pune, India",
          description:
            "Coordinated all operational aspects of events, including equipment, transportation, scheduling, and venue management.",
          color: "#0F9D58",
        },
      ],
    },
  ],
};

// Services Page
const Services = {
  title: "Services",
  description:
    "The most successful event is the one that achieves your goals and exceeds your expectations. Sakura Events does just that!",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Us",
    profile_image_path: "bgRemovedLogo.png",
    description:
      "At TNP Event Planners, we are always available to connect with you. Reach out to us on any social media platform, and we will respond within 24 hours. We look forward to hearing from you!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "At TNP Event Planners, we are passionate about sharing our journey and expertise in crafting memorable events. Our blog is a treasure trove of insights, tips, and behind-the-scenes stories from our diverse range of events. Whether you're an industry professional or an event enthusiast, you'll find valuable knowledge on planning, coordinating, and executing successful events. Join us as we document our experiences and share the latest trends and best practices in the world of event management.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Happy Colony, Kothrud, Pune, Maharashtra 411038",
    locality: "Pune",
    country: "India",
    region: "maharashtra",
    postalCode: "411052",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/tPSPKWxNy8tZqmSP6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  Services,
  contactPageData,
};
