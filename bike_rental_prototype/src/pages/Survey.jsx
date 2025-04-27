import { useLocation, Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useFullName } from '../contexts/FullNameContext';
import { useSubmission } from '../contexts/SubmissionContext';
import { buildSubmission } from '../utils/buildSubmission';
import { submitSurvey } from '../index/survey-api';

const CONFIDENCE_LEVELS = [
  'Not at all confident',
  'Barely confident',
  'Somewhat confident',
  'Moderately confident',
  'Very confident',
  'Super confident'
];

const HELPFULNESS_LEVELS = [
  'Not helpful at all',
  'Slightly helpful',
  'Somewhat helpful',
  'Moderately helpful',
  'Very helpful',
  'Extremely helpful'
];

export default function Survey() {
  // const { state } = useLocation();
  // const condition = state?.condition || 'A';
  const { condition } = useParams();

  const navigate = useNavigate();

  const { predictions } = useSubmission();
  const { fullName } = useFullName();

  const preQ1 = sessionStorage.getItem('pre_q1') ?? '';
  const [q1, setQ1] = useState(preQ1); // Final confidence
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  const canSubmit =
    !!q1 && (condition === 'A' || (!!q2 && !!q3));

  const handleFinish = async () => {
    const surveyResults = [];

    const pre = sessionStorage.getItem('pre_predictions');
    const preParsed = pre ? JSON.parse(pre) : null;

    // 1) initial‐prediction confidence
    if (preQ1) {
      surveyResults.push({
        question: 'How confident were you in your initial predictions before seeing any AI?',
        answer: preQ1
      });
    }


    surveyResults.push({
      question: 'How confident are you in the final predictions you made?',
      answer: q1
    });

    if (condition !== 'A') {
      surveyResults.push({
        question: 'How confident are you in the AI model’s prediction?',
        answer: q2
      });

      surveyResults.push({
        question:
          condition === 'C'
            ? 'How helpful were the AI predictions and weights table in helping you make your final prediction?'
            : 'How helpful was the AI prediction in helping you make your final prediction?',
        answer: q3
      });
    }



    const payload = buildSubmission({
      fullName: fullName || '', // fallback in case
      testType: condition,
      rows: predictions,
      surveyResults
    });

    try {
      await submitSurvey(payload);
      alert('Thank you! Your responses have been recorded.');
      sessionStorage.clear();
      navigate('/');
    } catch (e) {
      console.error(e);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center p-6 gap-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold">Post-Task Survey</h2>

      {/* Q1 — always shown */}
      <label className="w-full">
        <span className="block font-medium mb-1">
          1. How confident are you in the <em>final</em> predictions you made?
        </span>
        <select
          className="w-full border rounded p-2"
          value={q1}
          onChange={e => setQ1(e.target.value)}
        >
          <option value="">Select</option>
          {CONFIDENCE_LEVELS.map(label => (
            <option key={label}>{label}</option>
          ))}
        </select>
      </label>

      {condition !== 'A' && (
        <>
          <label className="w-full">
            <span className="block font-medium mb-1">
              2. How confident are you in the AI model&rsquo;s prediction?
            </span>
            <select
              className="w-full border rounded p-2"
              value={q2}
              onChange={e => setQ2(e.target.value)}
            >
              <option value="">Select</option>
              {CONFIDENCE_LEVELS.map(label => (
                <option key={label}>{label}</option>
              ))}
            </select>
          </label>

          <label className="w-full">
            <span className="block font-medium mb-1">
              3. How helpful&nbsp;
              {condition === 'C'
                ? 'were the AI predictions and weights table'
                : 'was the AI prediction'}
              &nbsp;in helping you make your final prediction?
            </span>
            <select
              className="w-full border rounded p-2"
              value={q3}
              onChange={e => setQ3(e.target.value)}
            >
              <option value="">Select</option>
              {HELPFULNESS_LEVELS.map(label => (
                <option key={label}>{label}</option>
              ))}
            </select>
          </label>
        </>
      )}

      <div className="flex gap-8 mt-4">
        <Link to="/" className="text-blue-600 underline">Exit</Link>
        <button
          disabled={!canSubmit}
          onClick={handleFinish}
          className={`px-4 py-2 rounded-lg ${canSubmit ? 'bg-blue-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
        >
          Submit Survey
        </button>
      </div>
    </div>
  );
}
