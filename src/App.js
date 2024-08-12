import "./App.css";
import { Twitter } from "./media/Twitter";
import { Linkedin } from "./media/Linkedin";
import { Insta } from "./photos/Insta";
import Image from "./Image.js";
import second from "./photos/second.png";
import alien from "./photos/alien.png";
import juke from "./photos/jukify.png";
import photo1 from "./photos//photo1.webp";
import photo2 from "./photos/photo2.webp";
import photo3 from "./photos/photo3.webp";
import photo4 from "./photos/photo4.webp";
import photo5 from "./photos/photo5.webp";
import photo6 from "./photos/photo6.webp";
import usaToner from "./photos/messaging.png";
import { useInView } from "react-intersection-observer";
import firstProject from "./photos/copiers.webp";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Github } from "./media/Github";
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

  return (
    <div className="wholeScreen">
      <header className="header ">
        <div className="headerWords">Kaleck</div>
        <div className="headerContainer">
          <div className="divWordContainer">
            <div className="headerWord">
              <a href="#section-2">Photos</a>
            </div>
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
        <div className="mainScreenRight">
          <div className="sectionOneFont">Hi! im Kaleck</div>

          <div className="headerWord">I'm a full stack Software Engineer</div>
          <div className="intro">
            Welcome! I'm Kaleck Hamm, a passionate Full Stack Developer who
            loves creating awesome projects. I work on both front-end and
            back-end development, using top technologies like React.js, Angular,
            Node.js and Ionic to build smooth and engaging software that not
            only functions perfectly, but also ranks well on search engines.
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
          <div className={"picRow"}>
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
                  I built a real-time messaging feature for iOS and Android apps
                  using React Ionic, TypeScript, and WebSockets. The goal was to
                  create a seamless chat experience that feels effortless for
                  users. It ensures that people can connect instantly, whether
                  they’re chatting socially or seeking help.
                </div>
                <div style={{ padding: "8px" }} className="small">
                  React Ionic | TypeScript | CSS | HTML | WebSockets
                </div>
              </div>
            </div>
          </div>

          <div className={"picRow"}>
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
                  The website I created for Copiers Utah is all about making
                  life easier for their customers. It provides a clear,
                  organized view of everything the company offers, from detailed
                  product information to a simple quote request form. It’s
                  designed to help users navigate the copier buying process with
                  confidence, making it easier for them to find the right fit
                  and reach out for a quote.
                </div>
                <div style={{ padding: "8px" }} className="small">
                  Next.js | Javascript | CSS | HTML
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
                  I developed a Spotify Jukebox web app that makes music more
                  social. Users can hop into rooms, add their favorite tracks,
                  and vote on what should play next, turning playlist creation
                  into a fun, collaborative process. Thanks to the integration
                  with Spotify’s API, the app allows for real-time song
                  additions and voting, so the playlist always matches the mood
                  of the room.
                </div>
                <div style={{ padding: "8px" }} className="small">
                  Next.js | Javascript | CSS | HTML | Sockets.io | Spotify API
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
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
              </div>
              <div className="rightList">
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Node</li>
                <li>SQL</li>
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
                <li>MySQL</li>
                <li>REST</li>
                <li>SQL</li>
                <li>Postman</li>
              </div>
              <div className="rightList">
                <li>Docker</li>
                <li>Postgres</li>
                <li>Prisma</li>
                <li>Firebase</li>
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
          <a href="#section-2" className="footerSection">
            Photos
          </a>
          <a href="#skills" className="footerSection">
            Skills
          </a>
          <a href="#section-3" className="footerSection">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
