
import { useParams, Link, useNavigate } from 'react-router-dom'
import { exampleRows, mapping } from '../data/examples'
import TableRow from '../components/TableRow'
import CoeffTable from '../components/CoeffTable'

export default function ExampleList() {
  const { condition } = useParams()
  const navigate = useNavigate()
  const showPred = condition !== 'A'
  const showTips = condition === 'C'
  const highlightEvent = condition !== 'A'

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Version {condition}: Guided Examples</h2>
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
            <th className="px-2 py-1 bg-green-100">Actual</th>
          </tr>
        </thead>
        <tbody>
          {exampleRows.map((row, i) => {
            // map readable labels
            const readableRow = {
              ...row,
              season: mapping.season[row.season] || row.season,
              holiday: mapping.holiday[row.holiday] || row.holiday,
              weathersit: mapping.weathersit[row.weathersit] || row.weathersit,
              event: mapping.event[row.event] || row.event,
            };

            return (
              <TableRow
                key={i}
                row={readableRow}
                showPred={showPred}
                showTips={showTips}
                showActual={true}
                highlightEvent={highlightEvent}
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
        <Link to="/" className="text-blue-600 underline">← Back Home</Link>
        <button onClick={() => {
          if (condition === 'A') navigate('/task/A')
          else
            navigate(`/initial/${condition}`)
          // navigate(`/task/${condition}`)
        }
        } className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Continue to Main Task →
        </button>
      </div>
    </div>
  )
}
