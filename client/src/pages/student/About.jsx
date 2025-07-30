import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-12">
      <div className="max-w-5xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">About Us</h1>
        <p className="mb-8 text-lg text-center px-4">
          Welcome to <strong>Edemy</strong>, your go-to platform for simple, effective, and engaging learning!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Nimra Bilal */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <img
              src="https://media.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif
"
              alt="Nimra Ghibli Girl"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-600">Nimra Bilal</h2>
            <p className="text-sm mt-2 text-gray-600">
              "I believe education should be accessible and enjoyable for everyone. That’s why we built Edemy."
            </p>
          </div>

          {/* Hafsa Amir */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <img
              src="https://media.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif"
              alt="Hafsa Ghibli Girl"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-600">Hafsa Amir</h2>
            <p className="text-sm mt-2 text-gray-600">
              "We want to inspire every learner to dream big and achieve their goals — one course at a time."
            </p>
          </div>

          {/* Eraff Rashid */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <img
              src="https://media.giphy.com/media/26FPJGjhefSJuaRhu/giphy.gif"
              alt="Eraff Ghibli Girl"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-600">Eraff Rashid</h2>
            <p className="text-sm mt-2 text-gray-600">
              "Our mission is to make learning exciting, interactive, and meaningful for all students."
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/contact')}
            className="bg-blue-600 px-6 py-3 text-white rounded hover:bg-blue-700 transition text-sm md:text-base"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
