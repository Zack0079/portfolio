import React, { useState } from "react";

export default function Skills() {

  const [activeDiv, setActiveDiv] = useState(null);
  const showContent = (index) => setActiveDiv(index);
  const items = [
    {
      title: "Frontend",
      backgroundColor: "bg-red-400",
      content: ["HTML5 & CSS", "React.js, AngularJS, Vue.js, Next.js", "Laravel", "Bootstrap, Tailwind CSS", "Kotlin"]
    },
    {
      title: "Backend",
      backgroundColor: "bg-blue-400",
      content: ["Node.js", "ExpressJS", "PHP", "WordPress"]
    },
    {
      title: "DevOps",
      backgroundColor: "bg-orange-400",
      content: ["Git", "AWS Service", "Figma", "Docker"]
    },
    {
      title: "Other",
      backgroundColor: "bg-green-400",
      content: ["SQL", "MongoDB", "GraphQL", "C#", "Unity & Unreal",]
    }
  ]

  return (
    <section id="skills" className="py-16 bg-[#34495e]">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="text-lg mb-10 p-5 mx-auto grid grid-cols-4 gap-4 ">


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
        </div>
      </div>

    </section >
  );
}