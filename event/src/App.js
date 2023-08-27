import './App.css'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Addevent from "./pages/Addevent";
import Listevent from "./pages/Listevent";
import Member from './pages/Member';
import Memberlogin from './pages/Memberlogin';
import Editevent from './pages/Editevent';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/add-event" element={<Addevent/>}/>
        <Route path="/list-events" element={<Listevent/>}/>
        <Route path="/members" element={<Member/>}/>
        <Route path="/members-login" element={<Memberlogin/>}/>
        <Route path="/edit-event/:id" element={<Editevent/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
