import selfCareImg from "../assets/self-care.jpeg";
import tributeImg from "../assets/sensei-funakoshi.jpeg";
import weatherImg from "../assets/weather-example.jpg";
import generatorImg from "../assets/generator-image.jpg";
import vehicleImg from "../assets/vehicle-image.jpg";
import trackerImg from "../assets/tracker-image.jpg";

const projects = [
    {
        id: 1,
        title: "Employee Tracker",
        description: "A program utilizing Node.js, Inquirer, and MySQL to manage a company's employee database.",
        image: trackerImg,
        githubLink: "https://github.com/alanaainez/sql-employee-tracker.git",
    },
    {
        id: 2,
        title: "README Generator",
        description: "A command-line application that dynamically generates a README.md file using Inquirer.",
        image: generatorImg,
        githubLink: "https://github.com/alanaainez/readme-generator.git",
    },
    {
        id: 3,
        title: "Self-Care Survey",
        description: "Survey application using Bulma CSS framework.",
        image: selfCareImg,
        deployedLink: "https://alanaainez.github.io/self-care-survey/",
        githubLink: "https://github.com/alanaainez/self-care-survey.git",
    },
    {
        id: 4,
        title: "Tribute Page",
        description: "A tribute page dedicated to Sensei Funakoshi, the founder of Shotokan Karate.",
        image: tributeImg,
        deployedLink: "https://your-live-project-link.com",
        githubLink: "",
    },
    {
        id: 5,
        title: "Vehicle Builder",
        description: "A web application that allows users to build and control their own vehicles.",
        image: vehicleImg,
        githubLink: "https://alanaainez.github.io/vehicle-builder/",
    },
    {
        id: 6,
        title: "Weather Dashboard",
        description: "A weather dashboard application that provides weather information for various cities.",
        image: weatherImg,
        deployedLink: "https://weather-dashboard-fqw6.onrender.com/",
        githubLink: "https://github.com/alanaainez/weather-dashboard.git",
    },
];

export default projects;