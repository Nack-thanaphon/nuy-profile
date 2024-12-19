import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaAward, FaTools } from 'react-icons/fa';

function Profile() {
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans bg-white shadow-lg rounded-lg">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Phiengpen Panjan</h1>
        <p className="mt-2 text-gray-600 flex items-center justify-center">
          <FaPhone className="mr-2" /> 085-664-6929
        </p>
        <p className="mt-2 text-gray-600 flex items-center justify-center">
          <FaEnvelope className="mr-2" /> <a href="mailto:porphanpen@gmail.com" className="text-blue-500">porphanpen@gmail.com</a>
        </p>
        <p className="mt-2 text-gray-600 flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2" /> 319/30 Charunsanitwong Road, Bangkungsri, Bangkoknoi, Bangkok 10700
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center"><FaGraduationCap className="mr-2" /> Educational Background</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Bachelor of Arts (Religious Studies), Mahidol University (2011-2014)</li>
          <li>English-French Program, Satri Wat Rakhang School (2006-2011)</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center"><FaBriefcase className="mr-2" /> Working Experience</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>2021-Present:</strong> Educator, Faculty of Medicine Vajira Hospital
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Arranged timetables for pre-clinical medical students.</li>
              <li>Implemented teaching and learning processes.</li>
            </ul>
          </li>
          <li className="mt-2">
            <strong>2017-2021:</strong> Educator, Faculty of Nursing, Mahidol University
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Managed scholarships for undergraduate students.</li>
              <li>Organized the APAHL Forum 2019.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center"><FaTools className="mr-2" /> Skills</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Time Management, Creativity, Teamwork</li>
          <li>Microsoft Office, Canva, Google Apps</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 flex items-center"><FaAward className="mr-2" /> Award</h2>
        <p className="mt-2 text-gray-600">
          Received a consolation prize for the oral presentation titled "Development of
          English Skills with Participation of Students at the Faculty of Nursing".
        </p>
      </div>
    </div>
  );
}

export default Profile;