import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/Home"></Route>
      </Routes>
    </div>
  );
}

export default App;
