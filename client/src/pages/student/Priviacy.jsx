import React from 'react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white px-6 py-12">
      <div className="max-w-3xl mx-auto text-gray-800 bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          At <strong>Edemy</strong>, your privacy is our top priority. This policy explains how we collect, use, and protect your personal information.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>We only collect necessary information to provide better services.</li>
          <li>Your data is never sold or shared without your consent.</li>
          <li>You can request data deletion at any time.</li>
        </ul>
        <p className="mb-6">
          If you have concerns or questions about your data, please contact us.
        </p>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>

        <p className="text-sm text-center text-gray-500 mt-10">
          Website created by <strong>Nimra Bilal</strong>, <strong>Hafsa Amir</strong>, and <strong>Eraff Rashid</strong>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
