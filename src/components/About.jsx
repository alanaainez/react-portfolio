import "./styles/About.css";
import myImage from "../assets/my-image.jpeg"

function About() {
    return (
      <div className="about-container">
        <img src={myImage} alt="My profile" className="about-image" />
        <p className="about-text">
            Hello world! I'm a programer completing a Full-Stack bootcamp. I have a passion for creating tangible solutions to real-world problems.
            I have a strong foundation in HTML, CSS, and JavaScript, and I'm always eager to learn new technologies and frameworks.
            I enjoy finding various ways to solve problems and am always looking for new challenges.
            In my free time, I enjoy video games, crochet, Gundam model building, and playing with my cat Luca.
            </p>
    </div>
  );
}

export default About;