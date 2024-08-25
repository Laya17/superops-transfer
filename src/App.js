import './App.css';
import ReferaFriend from './Refer-a-friend/ReferaFriend';
import LandingPage from './Landing-Page/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <div class="container">
    <Router>
      <Routes>
        <Route path="Refer-a-Friend" element={<ReferaFriend/>}></Route>
        <Route path="Landing-Page" element={<LandingPage/>}></Route>
      </Routes>
    </Router>
      
   </div>
  );
}

export default App;
