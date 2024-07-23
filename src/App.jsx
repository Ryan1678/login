
import './App.css'
import Login from './Components/Login/Login';
import Cadastro from './Components/Cadastro/Cadastro';
import React,{useState,useEffect} from 'react';

function App() {

  const [pagina,setPagina]=useState(0)

  useEffect(
  ()=>{
    const url=window.location.href
    const res=url.split('?')
    setPagina(res[1])
  }
    )
    
  const Links=(p)=>{
    if(p==1){
      window.open('http://localhost:5173?1','_self')
    }else if(p==2){
      window.open('http://localhost:5173?2','_self')
    }
    }
  
  const retornarPagina=()=>{
    if(pagina==1){
      return <Login/>
    }else if(pagina==2){
      return <Cadastro/>
    }else{     
    return <div className="cla">
             <h1> Seja bem-vindo!!!</h1>
            <button className="a" onClick={()=>Links(1)}>Entrar</button>
            <h3>ou</h3>
            <button className="b" onclick={()=>Links(2)}>Cadastre-se</button>
           </div>
    }
  }

  return (
    <div className="App">
     {retornarPagina()}
    </div>
  )
}

export default App;
