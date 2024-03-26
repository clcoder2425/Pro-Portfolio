/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/www.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  " Hi! I am an enthusiastic and motivated junior Full Stack Web Developer with a background in the tech support and education. I am passionate about creating and developing applications that are user-friendly and efficient. I am a quick learner and a team player who is always eager to learn new technologies and languages. I am a graduate of the University of Wisconsin,Full Stack Web Development Bootcamp. I am skilled in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, and React.js.  I am excited to bring my skills to a team that values creativity, collaboration, and innovation. I am a native Spanish speaker and I am fluent in English.  I enjoy spending time with my family, traveling, and learning new things.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "Nodejs",
  "Expressjs",
  "MySQL",
  "MongoDB",
  "Reactjs",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am excited to bring my skils to a team that values creativity, collaboration, and innovation.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
