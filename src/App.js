import "./App.css";
import { Twitter } from "./media/Twitter";
import { Linkedin } from "./media/Linkedin";
import { Insta } from "./photos/Insta";
import Image from "./Image.js";
import second from "./photos/second.png";
import alien from "./photos/alien.png";
import juke from "./photos/jukify.png";
// import photo1 from "./photos//photo1.webp";
// import photo2 from "./photos/photo2.webp";
// import photo3 from "./photos/photo3.webp";
// import photo4 from "./photos/photo4.webp";
// import photo5 from "./photos/photo5.webp";
// import photo6 from "./photos/photo6.webp";
import usaToner from "./photos/messaging.png";
import { useInView } from "react-intersection-observer";
import firstProject from "./photos/copiers.webp";
import SocialMobile from "./photos/twitter.png";
import AlienCafe from "./photos/AlienCafe.png";
import me from "./photos/me.jpg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Github } from "./media/Github";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.7,
  });
  const { ref: refTop, inView: inViewTop } = useInView({
    /* Optional options */
    threshold: 0.7,
  });
  const { ref: refPhoto, inView: inViewPhoto } = useInView({
    /* Optional options */
    threshold: 1,
  });
  const { ref: refPhotoLeft, inView: inViewPhotoLeft } = useInView({
    /* Optional options */
    threshold: 1,
  });
  const [cssClass, setCssClass] = useState("");
  const [cssTopClass, setCssTopClass] = useState("");
  const [cssPhoto, setCssPhoto] = useState("");
  const [cssPhotoLeft, setCssPhotoLeft] = useState("");

  useEffect(() => {
    if (inView) {
      setCssClass("showTrans");
    } else if (inViewTop) {
      setCssTopClass("showTrans");
    } else if (inViewPhoto) {
      setCssPhoto("showTrans");
    } else if (inViewPhotoLeft) {
      setCssPhotoLeft("showTrans");
      debugger;
    }
  }, [inView, inViewTop]);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oax31j8",
        "template_i93h3gc",
        form.current,
        "NIDXoMEDkdLg6tug7",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  useEffect(() => {
    getData()
    console.log(process.env, 'env data')
  }, [])


  const getData = async () => {
    try {
      const res = await axios.get("https://api.ipify.org/?format=json");

      try {
        await fetch(`${process.env.REACT_APP_DB_KEY}/api/personal/trackKaleUsers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip: res.data.ip,
          }),
        });

      } catch (error) {
        console.log(error, "this is the delete post error");

      }
      console.log('worked')
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  // https://social-mobile-server.vercel.app/api/personal/trackKaleUsers





  return (
    <div className="page">
      <div className="wholeScreen">
        <header className="header ">
          <div className="headerWords">Kaleck</div>
          <div className="headerContainer">
            <div className="divWordContainer">
              <div className="headerWord">
                <a href="#section-3">Projects</a>
              </div>
              <div className="headerWord">
                <a href="#section-4">Contact Me</a>
              </div>
            </div>
          </div>
        </header>
        <div id="section-1" className="section one">
          <div className="mainScreenLeft">
            <div className="socialsContainer">
              <a
                target={"_blank"}
                href="https://www.instagram.com/kale_hamm/?next=%2F"
              >
                <Insta />
              </a>
              <a
                target={"_blank"}
                href="https://www.linkedin.com/in/kaleck-hamm-692a54a1/"
              >
                <Linkedin />
              </a>
              <a target={"_blank"} href="https://github.com/kaleckh">
                <Github />
              </a>

              <div className="line"></div>
            </div>
          </div>
          <img
            src={me}
            new={"workCard"}
            className="myPic"
          // style={{ position: 'absolute', top: 20, left: -30 }}
          />
          <div className="mainScreenRight">
            <div className="sectionOneFont">Hi! im Kaleck</div>
            <div className="headerWord">I'm a full stack Software Engineer</div>
            <div className="intro">
              I build apps with tech like React.js, Node.js, AWS, TypeScript and Python. Check out my projects below to see what I’ve been working on!
            </div>
          </div>
        </div>

        <div id="section-3" className="sectionFour four">
          <div className={`workLeftContainer ${cssClass}`} ref={ref}>
            <div className="acontainer">
              <div className="largerText text">Some things i've built</div>
              <div className="smallText hide">
                My GitHub link is
                <a
                  className="githubLink"
                  target={"_blank"}
                  href="https://github.com/kaleckh"
                >
                  Here
                </a>
              </div>
              <div className="small">Click the photos to see projects</div>
            </div>
          </div>
          <div className={"column"}>
            <div className="row">
              <div className={"picRow"}>
                <div className="middle">
                  <div className={`workRightContainer`}>
                    <div className="center">
                      <a target="_blank" href="https://github.com/AlienServices/AlienSocial">
                        <img
                          src={AlienCafe}
                          new={"workCard"}
                          className="project"
                        />
                      </a>
                    </div>
                  </div>
                  <div className={`stuff ${cssPhoto}`}>
                    <div className="title">AlienCafe</div>
                    <div className="paragraph">
                    I created AlienCafe, a social discussion platform built with Ionic React, designed for debates on thesis-driven arguments. Users can share ideas through structured posts, vote on their validity, and engage in discussions to evaluate truthfulness. This project highlights my skills in building interactive platforms that encourage meaningful user engagement and critical thinking.
                    </div>
                    <div style={{ padding: "8px" }} className="small">
                      React Ionic  | TypeScript | Next.js | Supabase | Postgres | REST | Prisma | Quill.js | WebSockets
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">

              <div className={"picRow"}>
                <div className="middle">
                  <div className={`workRightContainer`}>
                    <div className="center">
                      <a target="_blank" href="https://social-mobile.vercel.app/">
                        <img
                          src={SocialMobile}
                          new={"workCard"}
                          className="project"
                        />
                      </a>
                    </div>
                  </div>
                  <div className={`stuff ${cssPhoto}`}>
                    <div className="title">Twitter Dupe</div>
                    <div className="paragraph">
                      I built a fully functional Twitter-inspired app using React Native for the front end and Next.js for the back end, with a PostgreSQL database. It’s got all the core features—tweeting, liking, commenting, and real-time updates—packed into a nice design. This project was a great way to push my skills in full-stack development and show how I can take a complex idea and bring it to life.
                    </div>
                    <div style={{ padding: "8px" }} className="small">
                      React Native | Python | FastAPI | TypeScript | SQLAlchemy | WebSockets | Postgres
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <div className={`workRightContainer`}>
                    <div className="center">
                      <a target="_blank" href="https://www.copiersutah.com/">
                        <img
                          src={firstProject}
                          new={"workCard"}
                          className="project"
                        />
                      </a>
                    </div>
                  </div>
                  <div className={`stuff ${cssPhoto}`}>
                    <div className="title">CopiersUtah.com</div>
                    <div className="paragraph">
                      I built a website for Copiers Utah designed to simplify the customer experience. The site features an intuitive layout that presents detailed product information and includes a straightforward quote request form. It’s all about making the copier buying process seamless and accessible, helping users confidently find the right fit and reach out for more information. This project highlights my ability to create user-friendly designs that meet both business and customer needs.
                    </div>
                    <div style={{ padding: "8px" }} className="small">
                      Next.js | Javascript | CSS | HTML
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"picRow"}>
              <div className="middle">
                <div className={`workRightContainer`}>
                  <div className="center">
                    <a
                      target="_blank"
                      href="https://www.youtube.com/watch?v=nK6ggr6-on0"
                    >
                      <img src={juke} new={"workCard"} className="project" />
                    </a>
                  </div>
                </div>
                <div ref={refPhoto} className={`stuff ${cssPhoto}`}>
                  <div className="title">Jukify</div>
                  <div className="paragraph">
                  We created a Spotify Jukebox web app that transforms music listening into a social experience. Users can join rooms, add their favorite songs, and vote on what plays next, making playlist creation collaborative and fun. Using Spotify’s API, the app supports real-time song additions and voting to ensure the playlist matches the room’s vibe. This project showcases my skills in API integration and building dynamic, real-time features for an engaging user experience.
                  </div>
                  <div style={{ padding: "8px" }} className="small">
                    Next.js | Javascript | CSS | HTML | Sockets.io | Spotify API
                  </div>
                </div>

              </div>
              <div className="middle">
                <div className={`workRightContainer`}>
                  <div className="center">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7221575398046777344/"
                    >
                      <img src={usaToner} new={"workCard"} className="project" />
                    </a>
                  </div>
                </div>
                <div className={`stuff ${cssPhoto}`}>
                  <div className="title">React Ionic Messaging</div>
                  <div className="paragraph">
                  I developed a real-time messaging feature for iOS and Android apps using React Ionic, TypeScript, and WebSockets. The feature delivers a seamless chat experience, allowing users to connect instantly for casual conversations or support needs. This project demonstrates my ability to build efficient, real-time communication systems while focusing on user-friendly design and reliable performance.
                  </div>
                  <div style={{ padding: "8px" }} className="small">
                    React Ionic | TypeScript | CSS | HTML | WebSockets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sectionFive">
          <div id="skills" className="skills">
            Skills & Tools
          </div>
          <div className="skillsNameContainer">
            <div
              className={`frontContainer hideTransBottom ${cssTopClass}`}
              ref={refTop}
            >
              <div className="frontend">Frontend</div>
              <div className="listContainer">
                <div className={`leftList`}>
                  <li>Redux</li>
                  <li>TypeScript</li>
                  <li>Javascript</li>
                  <li>React.js</li>
                </div>
                <div className="rightList">
                  <li>HTML</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                  <li>Jest</li>
                  <li>React Native</li>
                </div>
              </div>
            </div>
            <div
              className={`frontContainer hideTransTop ${cssTopClass}`}
              ref={refTop}
            >
              <div className="frontend">Backend</div>
              <div className="listContainer">
                <div className="leftList">
                  <li>Node.Js</li>
                  <li>Python</li>
                  <li>REST</li>
                  <li>SQL</li>
                  <li>GraphQL</li>
                </div>
                <div className="rightList">
                  <li>CI/CD</li>
                  <li>Unit Testing</li>
                  <li>Docker</li>
                  <li>Postgres</li>
                  <li>Prisma</li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="sectionThree three"
          id="section-4"
        >
          <div className="photoTitle">Send me a message!</div>
          <div className="smallText margin">
            Always willing to do freelance work
          </div>
          <div className="contactInputs">
            <div className="inputContainer">
              <div className="leftSide">
                <div className="contactP">First name</div>
              </div>
              <input className="contactInput" name="from_name" type="text" />
            </div>
            <div className="inputContainer">
              <div className="leftSide">
                <div className="contactP">Last name </div>
              </div>
              <input className="contactInput" type="text" />
            </div>
          </div>
          <div className="messageContainer">
            <div className="leftSide">
              <div className="contactP">Your Message</div>
            </div>
            <input name="message" className="bigInput" type="text" />
          </div>
          <button
            onClick={() => {
              setSent(true);
            }}
            type="submit"
            className="conactP"
          >
            Send it
          </button>
          {sent && <div className="contactP">Message Sent!</div>}
        </form>
        <div className="footer">
          <div className="name">Kaleck</div>
          <div className="footerSections">
            <a href="#skills" className="footerSection">
              Skills
            </a>
            <a href="#section-3" className="footerSection">
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
