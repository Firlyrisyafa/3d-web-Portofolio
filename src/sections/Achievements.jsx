import React from 'react';
import { achievements } from '../constans';

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white px-6">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">Achievements</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-pink-400">{achievement.title_en}</h3>
              <p className="text-sm text-gray-400 mb-2">{achievement.year}</p>
              <p className="text-gray-300">{achievement.details_en}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
