import { Repository } from "./components/Repository";
import {Sumary} from "./components/Sumary"

const lista_repositorios = [ 
  {
    id:1,
    titulo: "naruto",
    descricao:"anime de ninja"
  },
  {
    id:2,
    titulo: "chaves",
    descricao:"programa de comédia"
  },
  {
    id:3,
    titulo: "querido meu amor",
    descricao:"pagode japonês"
  },
  {
    id:4,
    titulo: "FiFa",
    descricao:"O famoso jogo, final fantasy"
  },
  {
    id:5,
    titulo: "Dash",
    descricao:"podcast de jogos eletrônicos"
  }

];
function App() {
  return (
  <>
    <h1>Meu portifólio github</h1>
    {lista_repositorios.length <=0?
    <p>Nenhum repositório disponivel</p>:
    lista_repositorios.map(repository=><p key={repository.id}>{repository.id} {repository.titulo} {repository.descricao}</p>)}
    
  </>
    )
  
}

export default App;


    
   