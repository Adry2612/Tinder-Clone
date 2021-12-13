import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      { /* Header */ }
      <Header />
      <Card />
      
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
        </Routes>
      </Router>
      { /* Tinder Cards */ }
      
      { /* Buttons */ }

      { /* Chats Screen -> 
      
        Individual chat screen*/ }
    </div>
  );
}

export default App;
