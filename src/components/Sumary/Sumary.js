import PropTypes from 'prop-types'
export function Sumary(imagem, nome){
    return(
        <div>
            <img src="https://github.com/Romulo-Ladeira.png"></img>
            <h2>Valor qualquer</h2>
        </div>
    )
}
Sumary.propTypes ={
    imagem: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired
}