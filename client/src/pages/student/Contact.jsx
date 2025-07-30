import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${name}, we received your message:\n"${msg}"`);
    setName('');
    setMsg('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-6 py-12">
      <div className="max-w-xl mx-auto bg-white shadow-lg p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows="4"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 w-full text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => navigate('/privacy')}
            className="text-sm text-blue-600 hover:underline"
          >
            Read Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
