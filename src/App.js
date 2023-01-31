import { Route, Routes } from 'react-router-dom';
import './assets/scss/App.scss';
// component
import PortfolioPage from './page/PortfolioPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PortfolioPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
