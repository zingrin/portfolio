import project11Img from "../assets/projectImg11.png";
import project12Img from "../assets/projectImg12.png";
import project13Img from "../assets/projectImg13.png";

import project1Img from "../assets/project1Img.png";
import project2Img from "../assets/project2Img.png";
import project3Img from "../assets/project3Img.png";

import project31Img from "../assets/project31Img.png";
import project32Img from "../assets/project32Img.png";
import project33Img from "../assets/project33Img.png";

export const projectsData = [
 {
  id: "fastfeast",
  title: "FastFeast | Fast Food Delivery Application",
  shortDescription:
    "A modern fast-food delivery platform with smooth UI, payments, and dashboard features.",

  description: `
A modern fast-food delivery platform offering smooth navigation, real-time
ordering, and secure checkout. The application includes authentication,
role-based dashboards, cart & order management, and payment integration.

Built with Next.js for performance and scalability, styled using TailwindCSS
and DaisyUI. The backend uses MongoDB with Mongoose, Stripe & SSLCommerz for
payments, and Redux Toolkit for global state management.
  `,

  challenges: [
    "Implementing search, sort, and filter functionality",
    "Handling protected routes and authentication",
    "Managing cart & order state using Redux Toolkit",
    "Integrating Stripe & SSLCommerz payment gateways",
  ],

  tech: [
    // Core
    "Next.js 15",
    "React 19",
    "Tailwind CSS",
    "DaisyUI",

    // State & UI
    "Redux Toolkit",
    "Framer Motion",
    "Headless UI",
    "Radix UI",

    // Backend & DB
    "MongoDB",
    "Mongoose",

    // Auth & Security
    "NextAuth.js",
    "bcrypt",
    "DOMPurify",

    // Payments
    "Stripe",
    "SSLCommerz",

    // Utils & UX
    "Swiper",
    "AOS",
    "SweetAlert2",
    "UUID",

    // Tooling
    "ESLint",
    "Turbopack",
  ],

  images: [project11Img, project12Img, project13Img],

  links: {
    demo: "https://fast-feast-nine.vercel.app",
    github: "https://github.com/MdImranHossen01/FastFeast",
  },
},
{
  id: "speakstack",
  title: "SpeakStack",
  shortDescription:
    "Forum & post-sharing platform with voting, authentication, and role-based dashboards.",

  description: `
SpeakStack is a modern forum and post-sharing platform that allows users to
create posts, vote, comment, and interact in real time. The platform supports
role-based dashboards for users and admins, secure authentication, and data
visualization for activity insights.

Built with React 19 and Vite for fast performance, Firebase for authentication,
and MongoDB-powered APIs for data persistence. React Query is used for efficient
server-state management, and Stripe enables secure payments.
  `,

  challenges: [
    "Implementing role-based dashboards",
    "Handling real-time voting and post interactions",
    "Managing server state efficiently with React Query",
    "Securing authentication using Firebase",
  ],

  tech: [
    // Core
    "React 19",
    "Vite",
    "Tailwind CSS",
    "DaisyUI",

    // Routing & Forms
    "React Router",
    "React Hook Form",

    // State & Data
    "TanStack React Query",
    "Axios",

    // Auth & Security
    "Firebase Authentication",

    // Payments
    "Stripe",

    // UI & UX
    "Framer Motion",
    "Swiper",
    "SweetAlert2",
    "React Icons",

    // Charts & Sharing
    "Recharts",
    "React Share",

    // Date Utilities
    "Day.js",
    "date-fns",

    // Tooling
    "ESLint",
  ],

  images: [project31Img, project32Img, project33Img],

  links: {
    demo: "https://speakstack-a1b8a.web.app/",
    github: "https://github.com/zingrin/speakstack-client",
  },
},

 {
  id: "hobbyhub",
  title: "HobbyHub",
  shortDescription:
    "Hobby-based community platform with authentication, groups, and dashboards.",

  description: `
HobbyHub is a community-driven platform where users can join hobby-based groups,
interact with other members, and manage their profiles securely. The platform
supports authentication, dynamic dashboards, and real-time user interactions.

Built using React 19 and Vite for fast performance, Firebase Authentication for
secure user login, and Tailwind CSS with DaisyUI for a clean and responsive UI.
Axios is used for API communication, and modern UI feedback is handled with
Toast notifications and alerts.
  `,

  challenges: [
    "Implementing secure authentication with Firebase",
    "Managing protected routes and user sessions",
    "Building dynamic dashboards based on user roles",
    "Handling real-time UI feedback and notifications",
  ],

  tech: [
    // Core
    "React 19",
    "Vite",
    "Tailwind CSS",
    "DaisyUI",

    // Routing & Networking
    "React Router",
    "Axios",

    // Auth & Security
    "Firebase Authentication",

    // UI & UX
    "Lucide React",
    "React Icons",
    "React Toastify",
    "Sonner",
    "SweetAlert2",

    // Utilities
    "date-fns",

    // Tooling
    "ESLint",
  ],

  images: [project1Img, project2Img, project3Img],

  links: {
    demo: "https://hobby-hub-88270.web.app/",
    github: "https://github.com/zingrin/hobby-hub-client-side",
  },
}

];

  