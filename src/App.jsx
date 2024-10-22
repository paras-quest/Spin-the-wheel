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
          maxSpins={20}
          rewards={[
            "Whiskey/Vodka",
            "Water",
            "Griptok",
            "1 MYST",
            "10 MYST",
            "20 MYST",
            "1 XP",
            "50 XP",
            "10 XP",
            "100 XP",
          ]}
          wheelColors={{ primary: "#C9A14C26", secondary: "white" }}
          questId={'q-cfe01b6c-2309-43f3-9015-cd9cf4450ee2'}
          wheelImage={reactLogo}
          criteriaId={'ec-c39be013-5356-4c49-9f87-673357b25b58'}
          onSpinComplete={onSpinComplete}
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
