// ##############************ New Updated HeroSection Component ************##############

// "use client";
// import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const HeroSection = () => {
//   return (
//     <section className="lg:py-16">
//       <div className="grid grid-cols-1 sm:grid-cols-12">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
//         >
//           <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl lg:leading-tight font-extrabold">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
//               𝐇𝐞𝐥𝐥𝐨, 𝐈&apos;𝐦{" "}
//             </span>
//             <br />
//             <TypeAnimation
//               sequence={[
//                 "𝐀𝐛𝐡𝐢𝐬𝐡𝐞𝐤 𝐒𝐢𝐧𝐠𝐡",
//                 1000,
//                 "𝙵𝚞𝚕𝚕 𝚂𝚝𝚊𝚌𝚔 𝚆𝚎𝚋 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛",
//                 1000,
//                 "𝙲𝚢𝚋𝚎𝚛 𝚂𝚎𝚌𝚞𝚛𝚒𝚝𝚢 𝙴𝚗𝚝𝚑𝚞𝚜𝚒𝚊𝚜𝚝",
//                 1000,
//                 "𝙳𝚂𝙰 𝙿𝚛𝚊𝚌𝚝𝚒𝚝𝚒𝚘𝚗𝚎𝚛",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-blue-400"
//             />
//           </h1>
//           <p className="text-[#ADB7BE] text-lg sm:text-xl lg:text-2xl mb-6">
//             A 3rd year B-Tech Computer Science student at Lovely Professional
//             University, Punjab, India
//           </p>
//           <div>
//             <Link
//               href="/#contact"
//               className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 to-blue-800 hover:bg-slate-200 text-white text-lg sm:text-xl"
//             >
//               Hire Me
//             </Link>
//             <Link
//               href="/images/cv/Profile.pdf"
//               target="_blank"
//               className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 to-blue-800 hover:bg-slate-800 text-white mt-3 text-lg sm:text-xl"
//             >
//               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
//                 Download CV
//               </span>
//             </Link>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-span-4 place-self-center mt-4 lg:mt-0"
//         >
//           <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src="/images/Software-engineer2.png"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={350}
//               height={350}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl xl:text-8xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
              𝐇𝐞𝐥𝐥𝐨, 𝐈&apos;𝐦{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "𝐀𝐛𝐡𝐢𝐬𝐡𝐞𝐤 𝐒𝐢𝐧𝐠𝐡",
                1000,
                "𝙵𝚞𝚕𝚕 𝚂𝚝𝚊𝚌𝚔 𝚆𝚎𝚋 𝙳𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛",
                1000,
                "𝙲𝚢𝚋𝚎𝚛 𝚂𝚎𝚌𝚞𝚛𝚒𝚝𝚢 𝙴𝚗𝚝𝚑𝚞𝚜𝚒𝚊𝚜𝚝",
                1000,
                "𝙳𝚂𝙰 𝙿𝚛𝚊𝚌𝚝𝚒𝚝𝚒𝚘𝚗𝚎𝚛",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-purple-400"
            />
          </h1>
          <p className="text-[#D1BCE3] text-lg sm:text-xl lg:text-2xl mb-6">
            A 3rd year B-Tech Computer Science student at Lovely Professional
            University, Punjab, India.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-600 to-purple-800 hover:bg-slate-200 text-white text-lg sm:text-xl"
            >
              Hire Me
            </Link>
            <Link
              href="/images/cv/Profile.pdf"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-600 to-purple-800 hover:bg-slate-800 text-white mt-3 text-lg sm:text-xl"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#1D1B2A] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative shadow-lg shadow-purple-600/30">
            <Image
              src="/images/Software-engineer2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
