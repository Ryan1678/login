import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [passaword, setPassword] = useState("");

    const handleSubmit = () => {

        Event.preventDefault();

        alert("Login realizado" + username + " - " + password);
        
    };

  return (
   <div className="container">
    <form onSubmit={handleSubmit}>
     <h1>Acesse nossa Lanchonete</h1>
     <div className="input-field">
    <input type="email" placeholder="RM" onChange={(e) => setUsername(e.target.value)}/>
    <FaUser className="icon" />
    </div>

    <div className="input-field">
    <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
    <FaLock className="icon" />
    </div>

    <div className="recall-forget">
        <label>
            <input type="checkbox" />
            Lembre de mim
        </label>
        <a href="#"> Esqueceu a Senha? </a>
    </div>

      <button>Acessar</button>

    <div className="signup-link">
        <p> Não se cadastrou? <a href="#"> Resgistar </a>
        </p>
    </div>

    </form>
   </div>
      
   
  )
}

export default Login
