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

    console.log({ idx, val, hasEvent, eventName });
    if (hasEvent) {
      alert(`Event - ${eventName}`);
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
                handleChange={val => {
                  const thisEventName = row.eventName;
                  console.log({ thisEventName });
                  setInputs(prev => {
                    const newInputs = [...prev];
                    newInputs[i] = val;
                    return newInputs;
                  });
                  handleChange(i, val, row.event === 1, thisEventName);
                }}
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
