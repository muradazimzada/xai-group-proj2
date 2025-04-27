
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import { taskRows, mapping } from '../data/examples'
// import TableRow from '../components/TableRow'
// import { useState } from 'react'

// const CONFIDENCE_LEVELS = [
//   'Not at all confident',
//   'Barely confident',
//   'Somewhat confident',
//   'Moderately confident',
//   'Very confident',
//   'Super confident'
// ]

// export default function InitialPrediction() {
//   const { condition } = useParams()
//   const navigate = useNavigate()
//   const [inputs, setInputs] = useState(Array(taskRows.length).fill(''))
//   const [conf, setConf] = useState('')
//   const handleChange = (idx, val, hasEvent) => {
//     const copy = [...inputs]; copy[idx] = val; setInputs(copy)
//     if (hasEvent && !sessionStorage.getItem('event_popup_seen_pre_' + idx + '_' + condition)) {
//       alert('Event detected for this day – remember it might influence demand!')
//       sessionStorage.setItem('event_popup_seen_pre_' + idx + '_' + condition, '1')
//     }
//   }
//   const canProceed = inputs.every(v => v !== '') && conf

//   const handleSubmit = () => {
//     sessionStorage.setItem('pre_predictions', JSON.stringify({ predictions: inputs, confidence: conf, condition }))
//     sessionStorage.setItem('pre_q1', conf)
//     navigate(`/examples/${condition}`)
//   }

//   const highlightEvent = true

//   return (
//     <div className="p-4 max-w-6xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Version {condition}: Pre‑Exposure Prediction</h2>
//       <p className="mb-2 text-sm">Before seeing any AI estimates, please predict the number of available bikes for each day.</p>
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
//             <th className="px-2 py-1">Your Prediction</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {taskRows.map((row,i)=>(
//             <TableRow
//               key={i}
//               row={row}
//               highlightEvent={highlightEvent}
//               handleChange={val=>handleChange(i,val,row.event===1)}
//               userValue={inputs[i]}
//             />
//           ))} */}

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
//                 // showPred={showPred}
//                 // showTips={showTips}
//                 highlightEvent={highlightEvent}
//                 handleChange={val => handleChange(i, val, row.event === 1)}
//                 userValue={inputs[i]}
//               />
//             );
//           })}
//         </tbody>
//       </table>

//       <div className="mt-6">
//         <label className="block font-medium mb-1">How confident are you in your predictions?</label>
//         <select className="border rounded p-2" value={conf} onChange={e => setConf(e.target.value)}>
//           <option value="">Select</option>
//           {CONFIDENCE_LEVELS.map(l => (
//             <option key={l}>{l}</option>
//           ))}
//         </select>
//       </div>

//       <div className="flex justify-between mt-6">
//         <Link to="/" className="text-blue-600 underline">← Back Home</Link>
//         <button
//           disabled={!canProceed}
//           onClick={handleSubmit}
//           className={`px-4 py-2 rounded-lg ${canProceed ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
//         >
//           Continue to Guided Examples →
//         </button>
//       </div>
//     </div>
//   )
// }


import { useParams, useNavigate, Link } from 'react-router-dom';
import { taskRows, mapping } from '../data/examples';
import TableRow from '../components/TableRow';
import { useState } from 'react';
import { useSubmission } from '../contexts/SubmissionContext';

const CONFIDENCE_LEVELS = [
  'Not at all confident',
  'Barely confident',
  'Somewhat confident',
  'Moderately confident',
  'Very confident',
  'Super confident'
];

export default function InitialPrediction() {
  const { condition } = useParams();
  const navigate = useNavigate();
  const { setInitialPredictions } = useSubmission();

  const [inputs, setInputs] = useState(Array(taskRows.length).fill(''));
  const [conf, setConf] = useState('');

  const handleChange = (idx, val, hasEvent) => {
    const copy = [...inputs];
    copy[idx] = val;
    setInputs(copy);

    if (hasEvent && !sessionStorage.getItem(`event_popup_seen_pre_${idx}_${condition}`)) {
      alert('Event - “Global Harmony” Benefit Concert, Wembley Stadium, London (capacity ≈ 90 000)');
      sessionStorage.setItem(`event_popup_seen_pre_${idx}_${condition}`, '1');
    }
  };

  const canProceed = inputs.every(v => v !== '') && conf;

  const handleSubmit = () => {
    // 1) store in context
    setInitialPredictions({
      predictions: inputs,
      confidence: conf,
      condition
    });

    // 2) optional backup
    sessionStorage.setItem(
      'pre_predictions',
      JSON.stringify({ predictions: inputs, confidence: conf, condition })
    );
    sessionStorage.setItem('pre_q1', conf);

    // 3) navigate onward
    navigate(`/task/${condition}`);
  };

  const highlightEvent = true;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Version {condition}: Pre-Exposure Prediction</h2>
      <p className="mb-2 text-sm">
        Before seeing any AI estimates, please predict the number of available bikes for each day.
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
            <th className="px-2 py-1">Your Prediction</th>
          </tr>
        </thead>
        <tbody>
          {taskRows.map((row, i) => {
            const readableRow = {
              ...row,
              season: mapping.season[row.season] || row.season,
              holiday: mapping.holiday[row.holiday] || row.holiday,
              weathersit: mapping.weathersit[row.weathersit] || row.weathersit,

              event: mapping.event[row.event] || row.event
            };
            return (
              <TableRow
                key={i}
                row={readableRow}
                highlightEvent={highlightEvent}
                handleChange={val => handleChange(i, val, row.event === 1)}
                userValue={inputs[i]}
              />
            );
          })}
        </tbody>
      </table>

      <div className="mt-6">
        <label className="block font-medium mb-1">
          How confident are you in your predictions?
        </label>
        <select
          className="border rounded p-2"
          value={conf}
          onChange={e => setConf(e.target.value)}
        >
          <option value="">Select</option>
          {CONFIDENCE_LEVELS.map(l => (
            <option key={l}>{l}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-between mt-6">
        <Link to="/" className="text-blue-600 underline">← Back Home</Link>
        <button
          disabled={!canProceed}
          onClick={handleSubmit}
          className={`px-4 py-2 rounded-lg ${canProceed ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
        >
          Continue to Task Examples →
        </button>
      </div>
    </div>
  );
}
