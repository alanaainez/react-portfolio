import "./styles/About.css";
import myImage from "../assets/my-image.jpeg"

function About() {
    return (
      <div className="about-container">
        <img src={myImage} alt="My profile" className="about-image" />
        <p className="about-text">
            Born and raised in Westchester County in NY, I'm an alumna of Wesleyan University 
            and have a background in childcare and education. I first dipped my feet into the 
            coding waters while I was stuck at home like many other people during the lockdown 
            of 2020. During that time I gained knowledge and confidence learning how to build 
            web pages, understanding JavaScript and making a temperature converter in Python 
            with the help of online resources. It was fascinating to create something (I've 
            always liked arts and crafts) and to gain inspiration to figure out kinks I came 
            across in my code. After returning to the job field in office administration and 
            doing some research, I've taken the plunge into computer programming.
            </p>
    </div>
  );
}

export default About;