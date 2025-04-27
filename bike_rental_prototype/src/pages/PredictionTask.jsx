
// // import { useParams, useNavigate, Link } from 'react-router-dom'
// // import { taskRows, mapping } from '../data/examples'
// // import TableRow from '../components/TableRow'
// // import CoeffTable from '../components/CoeffTable'
// // import { useState } from 'react'

// // import { useFullName } from '../contexts/FullNameContext';
// // import { buildSubmission } from '../utils/buildSubmission'; // you need this util too

// // const { condition } = useParams();
// // const navigate = useNavigate();
// // // const { setPredictions } = useSubmission(); // from inside the component
// // const { fullName } = useFullName();

// // import { useSubmission } from '../contexts/SubmissionContext';


// // export default function PredictionTask() {
// //   const submission = useSubmission();

// //   const { condition } = useParams()
// //   const navigate = useNavigate()
// //   const [inputs, setInputs] = useState(Array(taskRows.length).fill(''))
// //   const handleChange = (idx, val, hasEvent) => {
// //     const copy = [...inputs]; copy[idx] = val; setInputs(copy)
// //     if (hasEvent && !sessionStorage.getItem('event_popup_seen_' + idx + '_' + condition)) {
// //       alert('Heads‑up: An event is scheduled on this day. You may want to adjust your prediction accordingly!')
// //       sessionStorage.setItem('event_popup_seen_' + idx + '_' + condition, '1')
// //     }
// //   }
// //   const canProceed = inputs.every(v => v !== '')

// //   // const handleSubmit = () => {
// //   //   setPredictions(rows); // `rows` is the table data with userPrediction included
// //   //   const key = `responses_${Date.now()}`
// //   //   const stored = { condition, predictions: inputs, timestamp: Date.now() }
// //   //   // include initial predictions if any
// //   //   const pre = sessionStorage.getItem('pre_predictions')
// //   //   if (pre) stored.initial = JSON.parse(pre)
// //   //   localStorage.setItem(key, JSON.stringify(stored))
// //   //   navigate(`/survey/${condition}`, { state: { condition } })
// //   // }

// //   const handleSubmit = () => {
// //     // build structured rows with features + user input
// //     const structuredRows = taskRows.map((row, idx) => ({
// //       ...row,
// //       userPrediction: inputs[idx]
// //     }));

// //     setPredictions(structuredRows); // store in context for later use in Survey

// //     // (Optional) Store pre-survey state in sessionStorage just in case
// //     sessionStorage.setItem('pre_predictions', JSON.stringify(structuredRows));

// //     navigate(`/survey/${condition}`);
// //   };


// //   const showPred = condition !== 'A'
// //   const showTips = condition === 'C'
// //   const highlightEvent = condition !== 'A'

// //   return (
// //     <div className="p-4 max-w-6xl mx-auto">
// //       <h2 className="text-2xl font-semibold mb-4">Version {condition}: Main Prediction Task</h2>
// //       <p className="mb-4 text-sm">Enter your prediction for available bikes on each day. {showPred && 'You may adjust the AI estimate.'}</p>
// //       <table className="w-full border rounded-lg overflow-hidden text-sm">
// //         <thead className="bg-gray-200">
// //           <tr>
// //             <th className="px-2 py-1">Date</th>
// //             <th className="px-2 py-1">Season</th>
// //             <th className="px-2 py-1">Holiday</th>
// //             <th className="px-2 py-1">Weather</th>
// //             <th className="px-2 py-1">Temp</th>
// //             <th className="px-2 py-1">Humidity</th>
// //             <th className="px-2 py-1">Wind</th>
// //             <th className="px-2 py-1">Event</th>
// //             {showPred && <th className="px-2 py-1 bg-blue-100">AI Prediction</th>}
// //             {showTips && <th className="px-2 py-1 bg-yellow-100">AI Model Insights</th>}
// //             <th className="px-2 py-1">Your Prediction</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {/* {taskRows.map((row, i) => (
// //             <TableRow
// //               key={i}
// //               row={row}
// //               showPred={showPred}
// //               showTips={showTips}
// //               highlightEvent={highlightEvent}
// //               handleChange={val => handleChange(i, val, row.event === 1)}
// //               userValue={inputs[i]}
// //             />
// //           ))} */}

// //           {taskRows.map((row, i) => {
// //             const readableRow = {
// //               ...row,
// //               season: mapping.season[row.season] || row.season,
// //               holiday: mapping.holiday[row.holiday] || row.holiday,
// //               weather: mapping.weathersit[row.weathersit || row.weather] || row.weathersit || row.weather,
// //               event: mapping.event[row.event] || row.event,
// //             };

// //             return (
// //               <TableRow
// //                 key={i}
// //                 row={readableRow}
// //                 showPred={showPred}
// //                 showTips={showTips}
// //                 highlightEvent={highlightEvent}
// //                 handleChange={val => handleChange(i, val, row.event === 1)}
// //                 userValue={inputs[i]}
// //               />
// //             );
// //           })}
// //         </tbody>
// //       </table>

// //       {condition === 'C' && (
// //         <div className="mt-6">
// //           <h3 className="text-lg font-semibold mb-2">Model Feature Weights</h3>
// //           <CoeffTable />
// //         </div>
// //       )}

// //       <div className="flex justify-between mt-6">
// //         <Link to={`/examples/${condition}`} className="text-blue-600 underline">← Back</Link>
// //         <button
// //           disabled={!canProceed}
// //           onClick={handleSubmit}
// //           className={`px-4 py-2 rounded-lg ${canProceed ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
// //         >
// //           Submit Predictions →
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }

// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { taskRows, mapping } from '../data/examples';
// import TableRow from '../components/TableRow';
// import CoeffTable from '../components/CoeffTable';
// import { useState } from 'react';

// import { useFullName } from '../contexts/FullNameContext';
// import { useSubmission } from '../contexts/SubmissionContext';
// import { buildSubmission } from '../utils/buildSubmission'; // optional if used later

// export default function PredictionTask() {
//   // ✅ all hooks here inside the component
//   const { condition } = useParams();
//   const navigate = useNavigate();
//   const { setPredictions } = useSubmission();
//   const { fullName } = useFullName();

//   const [inputs, setInputs] = useState(Array(taskRows.length).fill(''));

//   const handleChange = (idx, val, hasEvent) => {
//     const copy = [...inputs];
//     copy[idx] = val;
//     setInputs(copy);

//     if (hasEvent && !sessionStorage.getItem(`event_popup_seen_${idx}_${condition}`)) {
//       alert('Heads‑up: An event is scheduled on this day. You may want to adjust your prediction accordingly!');
//       sessionStorage.setItem(`event_popup_seen_${idx}_${condition}`, '1');
//     }
//   };

//   const canProceed = inputs.every(v => v !== '');

//   const handleSubmit = () => {
//     const structuredRows = taskRows.map((row, idx) => ({
//       ...row,
//       userPrediction: inputs[idx]
//     }));

//     setPredictions(structuredRows); // store in context
//     sessionStorage.setItem('pre_predictions', JSON.stringify(structuredRows));
//     navigate(`/survey/${condition}`);
//   };

//   const showPred = condition !== 'A';
//   const showTips = condition === 'C';
//   const highlightEvent = condition !== 'A';

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Version {condition}: Main Prediction Task</h2>
//       <p className="mb-4 text-sm">Enter your prediction for available bikes on each day. {showPred && 'You may adjust the AI estimate.'}</p>

//       <table className="w-full border rounded-lg overflow-hidden text-sm">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="px-2 py-1">Date</th>
//             <th className="px-2 py-1">Season</th>
//             <th className="px-2 py-1">Holiday</th>
//             <th className="px-2 py-1">Weather</th>
//             <th className="px-2 py-1">Temp</th>
//             <th className="px-2 py-1">Humidity</th>
//             <th className="px-2 py-1">Wind</th>
//             <th className="px-2 py-1">Event</th>
//             {showPred && <th className="px-2 py-1 bg-blue-100">AI Prediction</th>}
//             {showTips && <th className="px-2 py-1 bg-yellow-100">AI Model Insights</th>}
//             <th className="px-2 py-1">Your Prediction</th>
//           </tr>
//         </thead>
//         <tbody>
//           {taskRows.map((row, i) => {
//             const readableRow = {
//               ...row,
//               season: mapping.season[row.season] || row.season,
//               holiday: mapping.holiday[row.holiday] || row.holiday,
//               weather: mapping.weathersit[row.weathersit || row.weather] || row.weathersit || row.weather,
//               event: mapping.event[row.event] || row.event,
//             };

//             return (
//               <TableRow
//                 key={i}
//                 row={readableRow}
//                 showPred={showPred}
//                 showTips={showTips}
//                 highlightEvent={highlightEvent}
//                 handleChange={val => handleChange(i, val, row.event === 1)}
//                 userValue={inputs[i]}
//               />
//             );
//           })}
//         </tbody>
//       </table>

//       {condition === 'C' && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold mb-2">Model Feature Weights</h3>
//           <CoeffTable />
//         </div>
//       )}

//       <div className="flex justify-between mt-6">
//         <Link to={`/examples/${condition}`} className="text-blue-600 underline">← Back</Link>
//         <button
//           disabled={!canProceed}
//           onClick={handleSubmit}
//           className={`px-4 py-2 rounded-lg ${canProceed ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
//         >
//           Submit Predictions →
//         </button>
//       </div>
//     </div>
//   );
// }


import { useParams, useNavigate, Link } from 'react-router-dom';
import { taskRows, mapping } from '../data/examples';
import TableRow from '../components/TableRow';
import CoeffTable from '../components/CoeffTable';
import { useEffect, useState } from 'react';

import { useFullName } from '../contexts/FullNameContext';
import { useSubmission } from '../contexts/SubmissionContext';
import { predictBikes } from '../index/predict-api';

export default function PredictionTask() {
  const { condition } = useParams();
  const navigate = useNavigate();
  const { setPredictions } = useSubmission();
  const { fullName } = useFullName();

  const [inputs, setInputs] = useState(Array(taskRows.length).fill(''));
  const [aiPredictions, setAiPredictions] = useState([]);

  // Fetch predictions from backend
  useEffect(() => {
    if (condition !== 'A') {
      const requestData = taskRows.map(row => ({
        season: row.season,
        holiday: row.holiday,
        workingday: row.workingday || 0,
        weather: row.weathersit || row.weather,
        temp: row.temp,
        atemp: row.atemp || row.temp,
        humidity: row.humidity,
        windspeed: row.windspeed,
        event: row.event
      }));

      predictBikes(requestData)
        .then(setAiPredictions)
        .catch(err => {
          console.error('Prediction fetch failed:', err);
        });
    }
  }, [condition]);

  const handleChange = (idx, val, hasEvent, eventName) => {
    const copy = [...inputs];
    copy[idx] = val;
    setInputs(copy);

    if (hasEvent && !sessionStorage.getItem(`event_popup_seen_${idx}_${condition}`)) {
      alert(`Event - ${eventName}`);
      sessionStorage.setItem(`event_popup_seen_${idx}_${condition}`, '1');
    }
  };

  const canProceed = inputs.every(v => v !== '');

  const handleSubmit = () => {
    const structuredRows = taskRows.map((row, idx) => ({
      ...row,
      userPrediction: inputs[idx]
    }));

    setPredictions(structuredRows);
    sessionStorage.setItem('pre_predictions', JSON.stringify(structuredRows));
    navigate(`/survey/${condition}`);
  };

  const showPred = condition !== 'A';
  const showTips = condition === 'C';
  const highlightEvent = condition !== 'A';

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Version {condition}: Main Prediction Task</h2>
      <p className="mb-4 text-sm">
        Enter your prediction for available bikes on each day. {showPred && 'You may adjust the AI estimate.'}
      </p>

      <table className="w-full border rounded-lg overflow-hidden text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-2 py-1">Date</th>
            <th className="px-2 py-1">Season</th>
            <th className="px-2 py-1">Holiday</th>
            <th className="px-2 py-1">Weather</th>
            <th className="px-2 py-1">Temp</th>
            <th className="px-2 py-1">Humidity</th>
            <th className="px-2 py-1">Wind</th>
            <th className="px-2 py-1">Event</th>
            {showPred && <th className="px-2 py-1 bg-blue-100">AI Prediction</th>}
            {showTips && <th className="px-2 py-1 bg-yellow-100">AI Explanation</th>}
            <th className="px-2 py-1">Your Prediction</th>
          </tr>
        </thead>
        <tbody>
          {taskRows.map((row, i) => {
            const readableRow = {
              ...row,
              season: mapping.season[row.season] || row.season,
              holiday: mapping.holiday[row.holiday] || row.holiday,
              weathersit: mapping.weathersit[row.weathersit || row.weather] || row.weathersit || row.weather,
              event: mapping.event[row.event] || row.event,
              pred: showPred ? aiPredictions[i] : undefined
            };

            return (
              <TableRow
                key={i}
                row={readableRow}
                showPred={showPred}
                showTips={showTips}
                highlightEvent={highlightEvent}
                handleChange={val => handleChange(i, val, row.event === 1, row?.eventName)}
                userValue={inputs[i]}
              />
            );
          })}
        </tbody>
      </table>

      {condition === 'C' && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Model Feature Weights</h3>
          <CoeffTable />
        </div>
      )}

      <div className="flex justify-between mt-6">
        <Link to={`/examples/${condition}`} className="text-blue-600 underline">← Back</Link>
        <button
          disabled={!canProceed}
          onClick={handleSubmit}
          className={`px-4 py-2 rounded-lg ${canProceed ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
        >
          Submit Predictions →
        </button>
      </div>
    </div>
  );
}
