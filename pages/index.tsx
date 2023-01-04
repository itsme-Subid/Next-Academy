import Head from "next/head";
import styled from "styled-components";
import wave from "../public/wave.svg";
import {
  HiOutlineDesktopComputer,
  HiOutlineSpeakerphone,
} from "react-icons/hi";
import { BiPaint } from "react-icons/bi";
import { FaTeamspeak } from "react-icons/fa";

const Main = styled.main`
  position: relative;
  min-height: calc(100% - 5rem);
  margin-inline: auto;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
  gap: 1rem;
  @media (max-width: 60rem) {
    gap: 2rem;
    grid-template-columns: 1fr;
    min-height: calc(100% + 5rem);
  }
  &:before {
    content: "";
    position: absolute;
    top: -100rem;
    left: -100rem;
    width: 200rem;
    height: 200rem;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(
      rgba(var(--light-color), 0.175),
      transparent,
      transparent
    );
  }
  & .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 60rem) {
      gap: 2rem;
      margin-top: 5rem;
    }
    @media (max-width: 40rem) {
      gap: 1rem;
      margin-top: 0;
    }
    & h1 {
      display: flex;
      align-items: center;
      font-size: 7rem;
      font-weight: 700;
      letter-spacing: 0.05rem;
      color: rgba(var(--primary-color), 1);
      text-shadow: 2px 2px 0.25rem rgba(var(--dark-color), 0.15);
      @media (max-width: 60rem) {
        text-align: center;
        margin-inline: auto;
        font-size: 5rem;
      }
      @media (max-width: 40rem) {
        text-align: center;
        margin-inline: auto;
        font-size: 4rem;
      }
      z-index: 1;
    }
    & p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5;
      color: rgba(var(--light-color), 0.75);
      text-shadow: 2px 2px 0.25rem rgba(var(--dark-color), 0.15);
      @media (max-width: 60rem) {
        text-align: center;
      }
    }
  }
  & .courses {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    @media (max-width: 60rem) {
      gap: 2rem;
    }
    @media (max-width: 40rem) {
      grid-template-columns: 1fr;
    }
    & section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: rgba(var(--dark-color), 0.5);
      backdrop-filter: blur(0.5rem);
      box-shadow: 0 0 0.5rem rgba(var(--dark-color), 0.25);
      cursor: pointer;
      border: 2px solid rgba(var(--light-color), 0);
      &:hover {
        border: 2px solid rgba(var(--light-color), 0.25);
      }
      @media (max-width: 60rem) {
        gap: 1rem;
        padding: 2rem;
      }
      & h2 {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: rgba(var(--primary-color), 1);
        & svg {
          font-size: 1.75rem;
        }
      }
      & p {
        font-size: 1rem;
        line-height: 1.5;
        color: rgba(var(--light-color), 0.75);
        text-align: justify;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
  & .teachers {
    position: absolute;
    bottom: -4rem;
    right: 0;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    line-height: 1;
    font-weight: 600;
    color: rgba(var(--light-color), 0.5);
    & span {
      color: rgba(var(--primary-color), 1);
    }
    @media (max-width: 40rem) {
      grid-template-columns: 1fr;
    }
  }
`;

const Spacer = styled.div`
  grid-column: 1 / 3;
  pointer-events: none;
  position: absolute;
  left: -7%;
  right: 0;
  bottom: -21rem;
  width: 115%;
  aspect-ratio: 960 / 450;
  background: url(${wave.src}) no-repeat center center/cover;
  @media (max-width: 60rem) {
    bottom: -15rem;
  }
`;

const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20rem;
  padding-block: 5rem;
  background-color: rgb(var(--primary-color));
  @media (max-width: 60rem) {
    margin-top: 14rem;
  }
  & .courses {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    place-content: center;
    gap: 2rem;
    & .card {
      width: 100%;
      height: 100%;
      position: relative;
      border: 1px solid rgba(var(--white-color), 0.15);
      border-radius: 1rem;
      overflow: hidden;
      padding: 1.5rem;
      padding-top: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: 0.15s;
      gap: 1.5rem;
      &:hover {
        transform: translateY(-0.5rem);
        box-shadow: rgb(var(--white-color), 0.25) 0 0.25rem 1rem;
      }
      & .upper {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        & h3 {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: rgba(var(--white-color), 1);
          & svg {
            font-size: 1.75rem;
          }
        }
        & p {
          color: rgb(var(--white-color), 0.5);
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.25rem;
          text-align: justify;
        }
      }
      & button {
        padding: 0.5rem 1rem;
        background-color: rgb(var(--white-color));
        color: rgb(var(--dark-color));
        border: 2px solid transparent;
        border-radius: 2.25rem;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        cursor: pointer;
        transition: color 0.15s;
        &:hover {
          background-color: transparent;
          color: rgb(var(--white-color));
          border: 2px solid rgb(var(--white-color));
          box-shadow: rgb(var(--white-color), 0.25) 0 0.25rem 1rem;
          padding: 0.5rem 1.5rem;
        }
      }
      & .attr {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5rem 1rem;
        background-color: rgb(var(--white-color));
        color: rgb(var(--dark-color));
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        border-radius: 0 0 0 1rem;
      }
    }
  }
`;

export default function Home() {
  const courses = [
    {
      icon: <HiOutlineDesktopComputer />,
      title: "Web Development",
      description:
        "You will learn the fundamentals of web development, including HTML, CSS, and JavaScript. You will also learn how to use popular frameworks and libraries, such as React.js, Node.js, Tailwind CSS, etc, to build interactive and responsive websites.",
      popular: true,
    },
    {
      icon: <BiPaint />,
      title: "Web Designing",
      description:
        "You will learn the fundamentals of web design, including color theory, typography, and layout. You will also learn how to use popular design tools, such as Figma, Adobe Photoshop, Illustrator, to create professional-quality graphics and designs.",
    },
    {
      icon: <HiOutlineSpeakerphone />,
      title: "Digital Marketing",
      description:
        "You will learn the fundamentals of digital marketing, including SEO, social media marketing, and email marketing. You will also learn how to use popular tools and platforms, such as Google Analytics and Google Ads, to measure and optimize your marketing campaigns.",
    },
    {
      icon: <FaTeamspeak />,
      title: "Spoken English",
      description:
        "You will learn the fundamental skills needed to speak English fluently and confidently, including pronunciation, grammar, and vocabulary. You will also have the opportunity to practice your speaking skills through interactive activities and conversations with other learners and native English speakers.",
    },
  ];
  return (
    <>
      <Head>
        <title>Next Academy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="left">
          <h1>Next Academy</h1>
          <p>Address: Baidyabati, Hooghly</p>
          <p>
            Contact: <a href="tele:8777252586">8902175210</a>
          </p>
        </div>
        <a href="#courses">
          <div className="right courses">
            {courses.map((course, index) => (
              <section key={index}>
                <h2>
                  {course.icon}
                  <span>{course.title}</span>
                </h2>
                <p>{course.description}</p>
              </section>
            ))}
          </div>
        </a>
        <div className="teachers">
          Courses will be taught by{" "}
          <span>
            <a href="https://www.linkedin.com/in/itsme-subid/">SUBID DAS</a>,{" "}
          </span>
          and others
        </div>
        <Spacer />
      </Main>
      <CourseDetails>
        {/* course details in card format */}
        <div className="courses container" id="courses">
          {courses.map((course, index) => (
            <section key={index} className="card">
              <div className="upper">
                {course.popular && (
                  <div className="attr">
                    <span>Most Popular</span>
                  </div>
                )}
                <h3>
                  {course.icon}
                  <span>{course.title}</span>
                </h3>
                <p>{course.description}</p>
              </div>
              <button>
                <a href="https://forms.gle/3Z7Z7Z7Z7Z7Z7Z7Z7">Get Started</a>
              </button>
            </section>
          ))}
        </div>
      </CourseDetails>
    </>
  );
}
