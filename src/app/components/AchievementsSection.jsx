// ######################******** New Updated Code Below ********######################

"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: 10,
    startValue: 0,
    postfix: "+",
  },
  {
    metric: "Years",
    value: 3,
    startValue: 0,
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 sm:py-16 xl:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center justify-center bg-[#2A003F] rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            <h2 className="text-purple-400 text-5xl font-extrabold flex flex-row items-baseline drop-shadow-[0_0_10px_rgba(192,132,252,0.9)]">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-purple-400 text-5xl font-extrabold drop-shadow-[0_0_10px_rgba(192,132,252,0.9)]"
                configs={() => ({
                  mass: 1,
                  friction: 100,
                  tension: 170,
                })}
                transitions={() => ({
                  from: achievement.startValue ?? 0,
                  to: achievement.value,
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-purple-200 text-lg font-medium mt-2 drop-shadow-[0_0_6px_rgba(192,132,252,0.7)]">
              {achievement.metric}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
