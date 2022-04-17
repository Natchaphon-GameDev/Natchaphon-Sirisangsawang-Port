// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "NATCHAPHON",
  middleName: "",
  lastName: "SIRISANGSAWANG",
  message: " Passionate about Game Development and Programming. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Natchaphon-GameDev",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/natchaphon.sirisangsawang",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/pruek_ns/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/natchaphon-sirisangsawang-pruek/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "A B O U T - M E",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "My name is Natchaphon Sirisangsawang. I’m a Student from Bangkok University in Thailand with a degree in Game and Interactive Media. I would love to work with everyone that has the same goal to create the best game ever. In my free time I like working on my own game projects and play Multiplayer game.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Natchaphon-GameDev", //i.e."johnDoe12Gh"
  reposLength: 3,
  specificRepos: ["Coding-Practice","My-First-Chat-Application-for-Mobile", "Project-Text-Game-Adventure"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C#", value: 87 },
    { name: "JavaScript", value: 65 },
    { name: "Firebase", value: 65 },
    { name: "Database SQL", value: 50 },
    { name: "Unity", value: 90 },
    { name: "Maya", value: 65 },
    { name: "Multiplayer", value: 70 },
    { name: "Game Design", value: 75 },
  ],
  softSkills: [
    { name: "Detail-oriented", value: 85 },
    { name: "Collaboration", value: 95 },
    { name: "Fast-Learner", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Management", value: 75 },
    { name: "Creativity", value: 90 },
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Intern or full-time Game Developer especially Game Programming your Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nsp.gamedev@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Main Programmer, Game Designer, Level Designer',
      companylogo: require('../assets/img/RTM.png'),
      date: 'December 2021 – Present',
    },
    {
      role: 'Solo Game Developer in Itch.io',
      companylogo: require('../assets/img/rsz_preuk.png'),
      date: 'July 2020 – Present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
