import { useState } from 'react';
import './App.css';
import fire from './auth/FireBaseAuth';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';


function App() {
  const [componentRender, setComponentRender] = useState(true);
  const [userInfo, setUserInfo] = useState("User not exist")

  // Get Uid/email or You are not log in
  function CheckStatus(){
   
    fire.auth().onAuthStateChanged(
      (user)=>{
        if (user) {
          setUserInfo(user.email)
        }
      }
    )
  }

  return (
    <div className="width-height margin-auto">
      <h5 style={{textAlign:"center",padding:"20px"}}>{CheckStatus()}USER: {userInfo?  userInfo : "not exist"}</h5>
      <div className="d-flex">
        <h4 onClick={()=>setComponentRender(true)} className={`width-50 p-2 rounded-start text-center pointer ${componentRender? "bg-dark text-white" : ""}`}>Login</h4>
        <h4 onClick={()=>setComponentRender(false)} className={`width-50 p-2 rounded-end text-center pointer ${componentRender? "" : "bg-dark text-white"}`}>Signin</h4>
      </div>
      {componentRender? <LoginPage /> : <SignupPage />}
    </div>
  );
}

export default App;
