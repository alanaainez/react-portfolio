import selfCareImg from "../assets/self-care.jpeg";
import tributeImg from "../assets/sensei-funakoshi.jpeg";
import weatherImg from "../assets/weather-example.jpg";
import generatorImg from "../assets/generator-image.jpg";
import vehicleImg from "../assets/vehicle-image.jpg";
import trackerImg from "../assets/tracker-image.jpg";
import takeoutImg from "../assets/food-takeout.jpg";
import socialNetImg from "../assets/social-network.jpg";

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
        title: "Food Takeout Order System",
        description: "A food ordering system built with Python.",
        image: takeoutImg,
        githubLink: "https://github.com/alanaainez/food-takeout.git",
    },
    {
        id: 3,
        title: "README Generator",
        description: "A command-line application that dynamically generates a README.md file using Inquirer.",
        image: generatorImg,
        githubLink: "https://github.com/alanaainez/readme-generator.git",
    },
    {
        id: 4,
        title: "Self-Care Survey",
        description: "Survey application using Bulma CSS framework.",
        image: selfCareImg,
        deployedLink: "https://alanaainez.github.io/self-care-survey/",
        githubLink: "https://github.com/alanaainez/self-care-survey.git",
    },
    {
        id: 5,
        title: "Social Network API",
        description: "A social networking application built with Express.js and using Mongoose.",
        image: socialNetImg,
        githubLink: "https://github.com/alanaainez/social-network-api.git",
    },
    {
        id: 6,
        title: "Tribute Page",
        description: "A tribute page dedicated to Sensei Funakoshi, the founder of Shotokan Karate.",
        image: tributeImg,
        deployedLink: "https://alanaainez.github.io/tribute-page/",
        githubLink: "https://github.com/alanaainez/tribute-page.git",
    },
    {
        id: 7,
        title: "Vehicle Builder",
        description: "A web application that allows users to build and control their own vehicles.",
        image: vehicleImg,
        githubLink: "https://alanaainez.github.io/vehicle-builder/",
    },
    {
        id: 8,
        title: "Weather Dashboard",
        description: "A weather dashboard application that provides a 5-day weather forecast for various cities.",
        image: weatherImg,
        deployedLink: "https://weather-dashboard-fqw6.onrender.com/",
        githubLink: "https://github.com/alanaainez/weather-dashboard.git",
    },
    {
        id: 9,
        title: "Wordle Game",
        description: "This application is based on the NYT game, Wordle. See how many words you can guess within the limit!",
        image: weatherImg,
        deployedLink: "https://main.d1ilikym13y2bv.amplifyapp.com/",
        githubLink: "https://github.com/alanaainez/wordle-game.git",
    },
];

export default projects;