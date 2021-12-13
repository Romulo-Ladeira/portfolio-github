import PropTypes from 'prop-types'
import sumaryCss from './Sumary.module.css'
export function Sumary({imagem, nome}){
    return(
        <div>
            <img className={sumaryCss["foto-perfil"]} src={imagem} alt={nome}></img>
            <h2>{nome}</h2>
        </div>
    )
}
Sumary.propTypes ={
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired
}