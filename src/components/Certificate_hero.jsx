import React, { useEffect } from 'react';
import Sql_cert from '../../public/assets/sql_cert.png';
import flipkart from '../../public/assets/flipkart.png';
import python_Cert from '../../public/assets/python_Cert.png';
import python_Cert1 from '../../public/assets/python_Cert1.png';
import CodeClever from '../../public/assets/CodeClever.jpg';
import MatchingUI from '../../public/assets/MatchingUI.jpg';
import Nexovate25 from '../../public/assets/Nexovate25.jpg';
import Nexovate251 from '../../public/assets/Nexovate251.jpg';
import LegacyLayout from '../../public/assets/LegacyLayout.jpg';
import Nexovate24 from '../../public/assets/Nexovate24.png';
import Arrow from '../components/Arrow';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Certificate_hero = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('#course', {
      opacity: 0,
      y: 180,
    }, {
      stagger:0.15,
      opacity: 1,
      y: 0,
      ease: 'power4.out',
    });

    // ScrollTrigger animation for the competition section
    

  }, []);

  const certificates = [
    {
      image: Sql_cert,
      link: "https://www.hackerrank.com/certificates/7767f9ac3b6d",
      title: "SQL Certification - Hacker Rank",
      description: "Certified in SQL query writing.",
    },
    {
      image: python_Cert,
      link: "https://coursera.org/share/6c2096cf3e6596c88b7df1c58a668601",
      title: "Python - Coursera",
      description: "Python Course Certificate",
    },
    {
      image: python_Cert1,
      link: "https://www.hackerrank.com/certificates/2611f53136f3",
      title: "Python - HackerRank",
      description: "Python Course Certificate",
    },
  ];

  const competitions = [
    {
      image: CodeClever,
      link: "",
      title: "Code Clever - Nexovate 2025",
      description: "Winner in Coding and Debugging",
    },
    {
      image: MatchingUI,
      link: "",
      title: "Matching UI - Nexovate 2025",
      description: "Winner in Designing UI Using Figma ",
    },
    {
      image: LegacyLayout,
      link: "",
      title: "Legacy Layout - Nexovate 2024",
      description: "Winner in Designing UI Using Figma ",
    },
    {
      image: flipkart,
      link: "https://unstop.com/certificate-preview/686a4895-480f-42aa-8ef3-d25aeeb5f989?utm_campaign=site-emails",
      title: "Flipkart GRiD 6.0 - Competition",
      description: "Certificate of Participation",
    },
  ];
  const Events = [
    {
      image: Nexovate25,
      link: "",
      title: "Code Clever - Nexovate 2025",
      description: "Winner in Coding and Debugging",
    },
    {
      image: Nexovate251,
      link: "",
      title: "Matching UI - Nexovate 2025",
      description: "Winner in Designing UI Using Figma ",
    },
    {
      image: Nexovate24,
      link: "",
      title: "Legacy Layout - Nexovate 2024",
      description: "Winner in Designing UI Using Figma ",
    },
  ];

  return (
    <div className="sm:px-5 pl-2 mt-6">
      <div className="p-5 sm:p-6">
        <div id="course">
          <h1 className="text-white text-4xl font-medium">Course Certificates</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {certificates.map((certificate, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={certificate.link}
                key={index}
                className="mt-10"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={`Certificate for ${certificate.title}`}
                    className="w-full lg:h-[400px] object-fill rounded-2xl duration-300"
                  />
                </div>

                {/* Text Section */}
                <div className="mt-5 ml-2 flex items-center justify-between">
                  <div className="">
                    <h1 className="text-sm font-medium text-green-500">
                      {certificate.title}
                    </h1>
                    <h2 className="mt-1 text-white">{certificate.description}</h2>
                  </div>

                  {/* Arrow Section */}
                  <Arrow />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16" id="course">
          <h1 className="text-white text-4xl mt-16 font-medium">Competition Certificates</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {competitions.map((competition, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={competition.link}
                key={index}
                className="mt-10"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={competition.image}
                    alt={`Certificate for ${competition.title}`}
                    className="w-full lg:h-[400px] object-fill rounded-2xl duration-300"
                  />
                </div>

                {/* Text Section */}
                <div className="mt-5 ml-2 flex items-center justify-between">
                  <div className="">
                    <h1 className="text-sm font-medium text-green-500">
                      {competition.title}
                    </h1>
                    <h2 className="mt-1 text-white">{competition.description}</h2>
                  </div>

                  {/* Arrow Section */}
                  <Arrow />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16" id="course">
          <h1 className="text-white text-4xl mt-16 font-medium">Events </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {Events.map((Events, index) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={Events.link}
                key={index}
                className="mt-10"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={Events.image}
                    alt={`Certificate for ${Events.title}`}
                    className="w-full lg:h-[400px] object-fill rounded-2xl duration-300"
                  />
                </div>

                {/* Text Section */}
                <div className="mt-5 ml-2 flex items-center justify-between">
                  <div className="">
                    <h1 className="text-sm font-medium text-green-500">
                      {Events.title}
                    </h1>
                    <h2 className="mt-1 text-white">{Events.description}</h2>
                  </div>

                  {/* Arrow Section */}
                  <Arrow />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate_hero;
