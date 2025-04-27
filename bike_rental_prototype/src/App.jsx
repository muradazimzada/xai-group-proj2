
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ExampleList from './pages/ExampleList'
import PredictionTask from './pages/PredictionTask'
import Survey from './pages/Survey'
import InitialPrediction from './pages/InitialPrediction'
import { FullNameProvider } from './contexts/FullNameContext';
import NamePage from './pages/NameInputPage'
import { SubmissionProvider } from './contexts/SubmissionContext';



export default function App() {
  return (
    <FullNameProvider>
      <SubmissionProvider>

        <Routes>
          <Route path="/" element={<NamePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/examples/:condition" element={<ExampleList />} />
          <Route path="/initial/:condition" element={<InitialPrediction />} />
          <Route path="/task/:condition" element={<PredictionTask />} />
          <Route path="/survey/:condition" element={<Survey />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </SubmissionProvider>

    </FullNameProvider>

  )
}