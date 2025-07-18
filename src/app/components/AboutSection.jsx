// ############################### New Updated Code Below ###############################

// /* eslint-disable jsx-a11y/alt-text */
// "use client";
// import React, { useTransition, useState } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton";

// const TAB_DATA = [
//   {
//     title: "Languages",
//     id: "languages",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Java</li>
//         <li>Python</li>
//         <li>C++</li>
//         <li>C</li>
//         <li>JavaScript</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Frontend",
//     id: "frontend",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>Tailwind CSS</li>
//         <li>Bootstrap CSS</li>
//         <li>JavaScript (ES6+)</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Backend",
//     id: "backend",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Node.js</li>
//         <li>Python (Flask)</li>
//         <li>React.js</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Database",
//     id: "database",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>MySQL</li>
//         <li>SQL</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Tools",
//     id: "tools",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Git</li>
//         <li>Ubuntu</li>
//         <li>Kali Linux</li>
//         <li>Arduino</li>
//         <li>Linux (Shell/Bash)</li>
//       </ul>
//     ),
//   },
// ];

// const AboutSection = () => {
//   const [tab, setTab] = useState("languages");
//   const [isPending, startTransition] = useTransition();

//   const handleTabChange = (id) => {
//     startTransition(() => {
//       setTab(id);
//     });
//   };

//   return (
//     <section className="text-white" id="about">
//       <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//         <Image src="/images/me.jpg" width={500} height={500} />
//         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//           <h2 className="text-4xl font-bold text-white mb-4">𝐀𝐛𝐨𝐮𝐭 𝐌𝐞</h2>
//           <p className="text-base lg:text-lg">
//             I am a full stack web developer with a passion for creating
//             interactive and responsive web applications. I have experience
//             working with modern frontend and backend technologies. I am a quick
//             learner and always eager to expand my knowledge and skill set. I
//             thrive in collaborative environments and love building impactful
//             solutions.
//           </p>
//           <div className="flex flex-row justify-start mt-8 flex-wrap gap-4">
//             {TAB_DATA.map((tabItem) => (
//               <TabButton
//                 key={tabItem.id}
//                 selectTab={() => handleTabChange(tabItem.id)}
//                 active={tab === tabItem.id}
//               >
//                 {tabItem.title}
//               </TabButton>
//             ))}
//           </div>
//           <div className="mt-8">
//             {TAB_DATA.find((t) => t.id === tab)?.content}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2 text-purple-400">
        <li>Java</li>
        <li>Python</li>
        <li>C++</li>
        <li>C</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Frontend",
    id: "frontend",
    content: (
      <ul className="list-disc pl-2 text-purple-400">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Bootstrap CSS</li>
        <li>JavaScript (ES6+)</li>
      </ul>
    ),
  },
  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-2 text-purple-400">
        <li>Node.js</li>
        <li>Python (Flask)</li>
        <li>React.js</li>
      </ul>
    ),
  },
  {
    title: "Database",
    id: "database",
    content: (
      <ul className="list-disc pl-2 text-purple-400">
        <li>MySQL</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-2 text-purple-400">
        <li>Git</li>
        <li>Ubuntu</li>
        <li>Kali Linux</li>
        <li>Arduino</li>
        <li>Linux (Shell/Bash)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/me.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-purple-500 mb-4">𝐀𝐛𝐨𝐮𝐭 𝐌𝐞</h2>
          <p className="text-base lg:text-lg text-gray-300">
            𝙸 𝚊𝚖 𝚊 𝚏𝚞𝚕𝚕 𝚜𝚝𝚊𝚌𝚔 𝚠𝚎𝚋 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛 𝚠𝚒𝚝𝚑 𝚊 𝚙𝚊𝚜𝚜𝚒𝚘𝚗 𝚏𝚘𝚛 𝚌𝚛𝚎𝚊𝚝𝚒𝚗𝚐 𝚒𝚗𝚝𝚎𝚛𝚊𝚌𝚝𝚒𝚟𝚎 𝚊𝚗𝚍 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚒𝚟𝚎 𝚠𝚎𝚋 𝚊𝚙𝚙𝚕𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜. 𝙸 𝚑𝚊𝚟𝚎 𝚎𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎 𝚠𝚘𝚛𝚔𝚒𝚗𝚐 𝚠𝚒𝚝𝚑 𝚖𝚘𝚍𝚎𝚛𝚗 𝚏𝚛𝚘𝚗𝚝𝚎𝚗𝚍 𝚊𝚗𝚍 𝚋𝚊𝚌𝚔𝚎𝚗𝚍 𝚝𝚎𝚌𝚑𝚗𝚘𝚕𝚘𝚐𝚒𝚎𝚜. 𝙸 𝚊𝚖 𝚊 𝚚𝚞𝚒𝚌𝚔 𝚕𝚎𝚊𝚛𝚗𝚎𝚛 𝚊𝚗𝚍 𝚊𝚕𝚠𝚊𝚢𝚜 𝚎𝚊𝚐𝚎𝚛 𝚝𝚘 𝚎𝚡𝚙𝚊𝚗𝚍 𝚖𝚢 𝚔𝚗𝚘𝚠𝚕𝚎𝚍𝚐𝚎 𝚊𝚗𝚍 𝚜𝚔𝚒𝚕𝚕 𝚜𝚎𝚝. 𝙸 𝚝𝚑𝚛𝚒𝚟𝚎 𝚒𝚗 𝚌𝚘𝚕𝚕𝚊𝚋𝚘𝚛𝚊𝚝𝚒𝚟𝚎 𝚎𝚗𝚟𝚒𝚛𝚘𝚗𝚖𝚎𝚗𝚝𝚜 𝚊𝚗𝚍 𝚕𝚘𝚟𝚎 𝚋𝚞𝚒𝚕𝚍𝚒𝚗𝚐 𝚒𝚖𝚙𝚊𝚌𝚝𝚏𝚞𝚕 𝚜𝚘𝚕𝚞𝚝𝚒𝚘𝚗𝚜.
          </p>
          <div className="flex flex-row justify-start mt-8 flex-wrap gap-4">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
