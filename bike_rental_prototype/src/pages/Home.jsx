import { useFullName } from '../contexts/FullNameContext';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { fullName, setFullName } = useFullName();
  const [localName, setLocalName] = useState('');

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (localName.trim()) {
      setFullName(localName.trim());
    }
  };

  const getStartPath = (c) => {
    return `/examples/${c}`;

    // return `/initial/${c}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6">

      {/* Full Name Modal */}
      {!fullName && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleNameSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold">Enter Your Full Name</h2>
            <input
              type="text"
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              placeholder="Full Name"
              className="border border-gray-300 rounded-md p-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
            >
              Continue
            </button>
          </form>
        </div>
      )}

      {/* Main Page */}
      <h1 className="text-3xl font-bold">Bike Demand Predictor — Study Portal</h1>
      <p className="max-w-xl text-center">
        {fullName && `Welcome, ${fullName}!`}<br /><br />
        Choose the study version assigned to you:<br /><br />
        A = Human Only<br />
        B = Human + AI<br />
        C = Human + AI + Explanation
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {['A', 'B', 'C'].map(c => (
          <Link
            key={c}
            to={getStartPath(c)}
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition pointer-events-auto"
            style={{
              pointerEvents: fullName ? 'auto' : 'none', // disable clicking links until name filled
              opacity: fullName ? 1 : 0.5,
            }}
          >
            <h2 className="text-2xl font-semibold text-center">Version {c}</h2>
            <p className="text-center mt-2">Start ➔</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
