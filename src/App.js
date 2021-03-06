import { useEffect, useState } from "react";
import { Repository } from "./components/Repository";
import {Sumary} from "./components/Sumary"
import mapToRepoObjec from "./components/data/data-utils"

const lista_repositorios = [ 
  {
    id:1,
    titulo: "naruto",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    destaque: false
  },
  {
    id:2,
    titulo: "chaves",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    destaque: true
  },
  {
    id:3,
    titulo: "querido meu amor",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    destaque: false
  },
  {
    id:4,
    titulo: "FiFa",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    destaque:false
  },
  {
    id:5,
    titulo: "Dash",
    descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    destaque:false
  }

];
function App() {
  const [repositorios, setRepositorios] = useState(lista_repositorios)
  const [idSelecionado, setIdSelecionado] = useState(1)
  const [nomeUsuario, setNomeUsuario] =useState("Romulo-Ladeira")
  const fetchDadosDoUsuario =async()=>{
    const resposta = await fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
    const resultado = await resposta.json()
    const resultadoMapeado = mapToRepoObjec(resultado)
    setRepositorios(resultadoMapeado)
  }

  const handleNomeUsuario = (e) =>{
    setNomeUsuario(e.target.value)
    console.log(nomeUsuario)
  }
  const handleBusca = () =>{
   fetchDadosDoUsuario()
  }
  useEffect(()=>{
    fetchDadosDoUsuario()
  },[])
  return (
  <>
    <h1>Meu portif??lio github</h1>
    <Sumary imagem={"https://github.com/Romulo-Ladeira.png"} nome="Romulo Ladeira"/>
    <input type='text' onChange={handleNomeUsuario} value={nomeUsuario}></input>
    <button onClick={handleBusca}>buscar</button>
    {repositorios.length <=0?
    <p>Nenhum reposit??rio disponivel</p>:
    repositorios.map(repository=>(
       <Repository key={repository.id} titulo={repository.titulo} descricao={repository.descricao} destacar={repository.id === idSelecionado} onDestaque={()=>{setIdSelecionado(repository.id)}}/>
    ))}
    
  </>
    )
  
}

export default App;


    
   