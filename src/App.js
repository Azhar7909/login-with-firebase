import { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';


function App() {
  const [componentRender, setComponentRender] = useState(true)
  return (
    <div className="width-height margin-auto">
      <div className="d-flex">
        <h4 onClick={()=>setComponentRender(true)} className={`width-50 p-2 rounded-start text-center pointer ${componentRender? "bg-dark text-white" : ""}`}>Login</h4>
        <h4 onClick={()=>setComponentRender(false)} className={`width-50 p-2 rounded-end text-center pointer ${componentRender? "" : "bg-dark text-white"}`}>Signin</h4>
      </div>
      {componentRender? <LoginPage /> : <SignupPage />}
    </div>
  );
}

export default App;
