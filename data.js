/* =====================================================================
   data.js  —  EDIT YOUR PORTFOLIO CONTENT HERE
   ---------------------------------------------------------------------
   Everything shown on the website comes from this one file.
   You never need to touch index.html or script.js to update content.

   TIPS
   - Keep the commas "," between items and the quotes "" around text.
   - Icons use Font Awesome names, e.g. "fa-solid fa-star".
     Browse icons at https://fontawesome.com/icons (free ones only).
   - Images live in the /assets folder (see paths below).
   ===================================================================== */

const PORTFOLIO = {

  /* ------------------------------------------------------------------
     1. BASIC INFO  (name, role, tagline, photo, resume)
     ------------------------------------------------------------------ */
  profile: {
    name: "S. Janani",                                   // <- CHANGE YOUR NAME HERE (used everywhere)
    role: "BCA Student | Aspiring Software Developer",   // <- Role line under your name
    tagline: "Learning Today, Building Tomorrow.",       // <- Your quote
    intro:
      "I'm a BCA student who enjoys Python, Machine Learning and turning ideas into useful software. " +
      "I love learning new technologies and I'm looking for opportunities to grow as a developer.",

    // PROFILE PHOTO: put your photo in assets/images/ and write its file name here.
    // Square or portrait photos work best. (Same name = just replace the file.)
    photo: "assets/images/profile.jpg",

    // RESUME: put your PDF in assets/resume/ and write its file name here.
    // To update your resume later, simply replace that PDF file (keep the same name).
    resume: "assets/resume/Janani_Resume.pdf",
    resumeDownloadName: "S_Janani_Resume.pdf"            // name of the file when someone downloads it
  },

  /* ------------------------------------------------------------------
     2. ABOUT ME  (each string is one paragraph)
     ------------------------------------------------------------------ */
  about: {
    paragraphs: [
      "I am S. Janani, a BCA student at Cauvery College for Women, Tiruchirappalli.",
      "I am a quick learner, hardworking, and self-motivated person. I am always interested in learning new technologies and improving my technical knowledge.",
      "My goal is to build a successful career in the IT field."
    ],
    // Small highlight chips shown beside the About text. Add / remove freely.
    highlights: [
      { icon: "fa-solid fa-graduation-cap", text: "BCA Student" },
      { icon: "fa-solid fa-location-dot",   text: "Tiruchirappalli" },
      { icon: "fa-solid fa-code",           text: "Aspiring Developer" }
    ]
  },

  /* ------------------------------------------------------------------
     3. EDUCATION  (shown as a timeline - newest first)
     To add one: copy a { ... } block and paste it with a comma.
     ------------------------------------------------------------------ */
  education: [
    {
      icon: "fa-solid fa-graduation-cap",
      title: "Bachelor of Computer Applications (BCA)",
      institute: "Cauvery College for Women, Tiruchirappalli.",
      status: "Currently Pursuing"
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Master Diploma in Computer Applications (MDCA)",
      institute: "",
      status: "One-Year Course Completed"
    },
    {
      icon: "fa-solid fa-keyboard",
      title: "Junior Typewriting",
      institute: "",
      status: "Course Completed with Certificate"
    },
    {
      icon: "fa-solid fa-school",
      title: "Higher Secondary Education",
      institute: "Government School",
      status: "86%"
    }
  ],

  /* ------------------------------------------------------------------
     4. TECHNICAL SKILLS
     icon = Font Awesome class. Add a new skill by copying one line.
     ------------------------------------------------------------------ */
  skills: [
    { name: "Python",          icon: "fa-brands fa-python" },
    { name: "HTML",            icon: "fa-brands fa-html5" },
    { name: "CSS",             icon: "fa-brands fa-css3-alt" },
    { name: "Java",            icon: "fa-brands fa-java" },
    { name: "SQL",             icon: "fa-solid fa-database" },
    { name: "MS Office",       icon: "fa-brands fa-microsoft" },
    { name: "Problem Solving", icon: "fa-solid fa-puzzle-piece" }
  ],

  /* ------------------------------------------------------------------
     5. CERTIFICATIONS
     HOW TO ADD A CERTIFICATE:
       1) Save the image in  assets/certificates/  (e.g. my-cert.jpg)
       2) Copy one { ... } block below, paste it, and change the values.
     - title : name shown on the card
     - issuer: organisation (small text on the card)
     - image : path to the certificate image
     - icon  : small icon shown on the card
     Until you upload an image, a pretty placeholder is shown automatically.
     ------------------------------------------------------------------ */
  certifications: [
    {
      title: "IBM Certificate",                 // <- change to the exact certificate name
      issuer: "IBM",
      image: "assets/certificates/ibm.jpg",
      icon: "fa-solid fa-award"
    },
    {
      title: "NPTEL Certificate",
      issuer: "NPTEL",
      image: "assets/certificates/nptel.jpg",
      icon: "fa-solid fa-award"
    },
    {
      title: "Bajaj Finserv Certificate",
      issuer: "Bajaj Finserv",
      image: "assets/certificates/bajaj-finserv.jpg",
      icon: "fa-solid fa-award"
    },
    {
      title: "Wadhwani Foundation Certificate",
      issuer: "Wadhwani Foundation",
      image: "assets/certificates/wadhwani.jpg",
      icon: "fa-solid fa-award"
    }
    // , { title: "New Certificate", issuer: "Organisation", image: "assets/certificates/new.jpg", icon: "fa-solid fa-award" }
  ],

  /* ------------------------------------------------------------------
     6. INTERNSHIP  (add more by copying a { ... } block)
     ------------------------------------------------------------------ */
  internships: [
    {
      title: "Python Internship",
      duration: "1 Month",
      topics: ["Python", "Machine Learning", "Data Science", "Artificial Intelligence"],
      description:
        "Completed a one-month internship where I learned about Python programming, working with datasets, " +
        "Machine Learning, Data Science, and Artificial Intelligence."
    }
  ],

  /* ------------------------------------------------------------------
     7. PROJECTS
     HOW TO ADD A PROJECT:
       1) Save a screenshot in  assets/projects/
       2) Copy one { ... } block below, paste it, and change the values.
     - link : your GitHub / live-demo URL. Leave "" if you have none yet
              (the button will then open an image preview instead).
     ------------------------------------------------------------------ */
  projects: [
    {
      title: "House Price Prediction",
      image: "assets/projects/house-price-prediction.jpg",
      description: "A machine learning application that predicts house prices, built with a simple desktop interface and visual charts.",
      tags: ["Python", "Machine Learning", "Tkinter", "Matplotlib", "Scikit-learn"],
      link: ""
    },
    {
      title: "Smart Presentation Device",
      image: "assets/projects/smart-presentation-device.jpg",
      description: "A student-focused innovative product idea, designed to make presentations easier.",
      tags: ["Innovation", "Product Idea", "Student-Focused"],
      link: ""
    }
  ],

  /* ------------------------------------------------------------------
     8. STRENGTHS
     ------------------------------------------------------------------ */
  strengths: [
    { name: "Quick Learner",       icon: "fa-solid fa-bolt" },
    { name: "Hardworking",         icon: "fa-solid fa-dumbbell" },
    { name: "Self-Motivated",      icon: "fa-solid fa-rocket" },
    { name: "Willingness to Learn",icon: "fa-solid fa-book-open-reader" },
    { name: "Positive Attitude",   icon: "fa-solid fa-face-smile" }
  ],

  /* ------------------------------------------------------------------
     9. CONTACT DETAILS
     Leave "" until you want to show them. Nothing is invented for you.
     - email    : "yourname@gmail.com"
     - phone    : "+91 98765 43210"
     - linkedin : full link, e.g. "https://www.linkedin.com/in/your-id"
     - github   : full link, e.g. "https://github.com/your-username"
     ------------------------------------------------------------------ */
  contact: {
    email: "",
    phone: "",
    linkedin: "",
    github: ""
  },

  /* Footer line (year is added automatically) */
  footerNote: "Learning Today, Building Tomorrow."
};
