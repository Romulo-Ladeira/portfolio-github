import { Repository } from "./components/Repository";
import {Sumary} from "./components/Sumary"


function App() {
  return (
   <>
    <Sumary imagem="https://github.com/Romulo-Ladeira.png" nome="Romulo" />
    <Repository titulo="O projeto" descricao={1}  destacar={false}/>
    </>
  )
}

export default App;
