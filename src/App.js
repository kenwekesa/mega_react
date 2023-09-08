import logo from './logo.svg';
import './App.css';
import Main from './pages/main/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
            
      <Route path="/" element={<Main/>} >
      </Route>
    </Routes>
  
  );
}

export default App;
