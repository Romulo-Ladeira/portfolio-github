import PropTypes from 'prop-types'
export function Sumary({imagem, nome}){
    return(
        <div>
            <img src={imagem} alt={nome}></img>
            <h2>{nome}</h2>
        </div>
    )
}
Sumary.propTypes ={
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired
}