import React, { useEffect, useState } from "react";
import "../app/skills.css";

export default function Skills() {

  const [activeDiv, setActiveDiv] = useState(0);

  const items = [
    {
      title: "Frontend",
      color: "green-400",
      content: {
        "Languages": ["HTML5", "CSS5", "JavaScript", "TypeScript"],
        "Frameworks & Libraries": ["React.js", "AngularJS", "Vue.js", "Next.js", "Bootstrap", "Tailwind CSS"],
        "HTTP & APIs": ["Ajax", "GraphQL", "JSON"],
        "Other": ["Kotlin", "WordPress", "Webpack"]
      }
    },

    {
      title: "Backend & Data",
      color: "blue-400",
      content: {
        "Languages": ["JavaScript", "TypeScript", "PHP", "Java", "GraphQL"],
        "Frameworks": ["Node.js", "ExpressJS", "Next.js", "Laravel", "Spring Boot"],
        "Database": ["MongoDB", "MySQL", "SQL"],
        "Platforms": ["WordPress", "AWS Service"]
      }
    },

    {
      title: "DevOps & Tools",
      color: "pink-400",
      content: {
        "DevOps": ["CI/CD", "Git", "GitHub",  "Docker"],
        "Tools": ["SourceTree", "Jira", "Postman", "Figma", "VS Code", "Visual Studio", "Notion"]

      }
    },

    {
      title: "Game Development",
      color: "orange-400",
      content: {
        "Game Engines": ["Unity", "Unreal"],
        "Game Programming": ["C++", "Blueprints", "C# Scripting"],
        "Game Design": ["Level Design", "Character Design"],
        "Modeling & Animation": ["Blender", "GIMP",]
      }
    }
  ];

  const [blurringAnimation, setBlurringAnimation] = useState("");
  const showContent = (index) => {
    setBlurringAnimation("");

    setTimeout(() => {
      setBlurringAnimation("blurring");
    }, 0);

    setTimeout(() => {
      setActiveDiv(index);
    }, 500);
  }

  return (
    <section id="skills" className="py-16 bg-black ">
      <div className="container mx-auto text-center w-6/12 h-120">
        <h1 className="text-white text-3xl font-bold mb-8">Skills</h1>

        <div className="flex flex-2">
          <ul className="flex flex-col gap-1 border-r-2 mt-5 font-medium text-gray-300 mr-4 pr-1 ">

            {
              items.map((item, index) => (
                <li key={index}>
                  <button className={`shrink-0 text-md items-center rounded-l-xl bg-opacity-30 ${item.color} justify-center px-2 py-2 w-full floating-element ${activeDiv === index ? "active" : ""}`} onClick={() => showContent(index)}>
                    {item.title}
                  </button>
                </li>
              ))
            }

          </ul>

          <div className={`flex-1 bg-[#202d3f] ${blurringAnimation} p-6 text-medium rounded-lg text-${items[activeDiv]?.color} floating`}>
            <h3 className="text-2xl font-bold mb-2">{items[activeDiv]?.title}</h3>
            {
              Object.entries(items[activeDiv]?.content).map(([key, value]) => (
                <div key={key} className="mb-4 text-left">
                  <h4 className="text-md font-semibold mb-2">{key}</h4>
                  {value.map((tech, index) => (
                    <span key={index} className={`inline-block bg-gray-900 hover:outline-2 hover:font-semibold text-sm px-3 py-1 rounded-full mr-2 mb-2 ${items[activeDiv].color} floating-button`}>{tech}</span>
                  ))}
                </div>
              ))
            }
          </div>
        </div>

        {/* <div className="text-lg mb-10 p-5 mx-auto grid grid-cols-4 gap-4 ">


          {items.map((item, index) => (
            <div
              key={index}
              className={item.backgroundColor + " p-4 rounded-lg shadow-lg h-fit"}
              onClick={() => showContent(index)}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <div className="card-container text-start">
                <div className={activeDiv === index ? "expanded" : "closed"}>
                  <ul className="list-disc">
                    {item.content.map((content, index) => (
                      <li className="pb-1" key={index}>{content}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div> */}
      </div>

    </section >
  );
}