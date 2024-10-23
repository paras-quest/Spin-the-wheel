import { BrowserRouter as Router, Route, Routes, useSearchParams } from 'react-router-dom';
import './App.css';
import reactLogo from './assets/react.svg'
import { QuestProvider, SpinTheWheel } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css'

const entityId = 'e-2959e609-38d3-426b-94f1-f46d1458955b';
const apiKey = 'k-2bf810ea-e0b4-46e9-b968-bdc914b9e138';

const Home = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTdiM2E2MzAxLTcxMWMtNGMwZC1hZTYzLWQ5M2RiZTJjZWVlOSIsImlhdCI6MTcyOTI0MTQyNywiZXhwIjoxNzI5ODQ2MjI3fQ.dcyFJF3hm28nUp_uY552R4GqaX9z3kX6m3frs-WOtzs';
  const userId = searchParams.get('userId') || 'u-0000000000';
  const questId = searchParams.get('questId') || 'q-9e835339-2258-43fd-badd-87ab9315036f'
  const criteriaId = searchParams.get('criteriaId') || 'ec-6c6ca555-2a42-428a-bc40-b84b5bcd0d97'
  const onSpinComplete = () => {
    console.log('Spin Completed');
  }

  return (
    <div className='spinContainer'>
      <QuestProvider apiKey={apiKey} entityId={entityId} apiType={'STAGING'}
        featureFlags={{}}>
        <SpinTheWheel
          userId={userId}
          token={token}
          maxSpins={200}
          wheelColors={{ primary: "red", secondary: "yellow" }}
          wheelTextColor={{ primary: 'white', secondary: 'black' }}
          questId={questId}
          wheelImage={reactLogo}
          criteriaId={criteriaId}
          onSpinComplete={onSpinComplete}
          winningSegmentColor='green'
        />
      </QuestProvider>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
