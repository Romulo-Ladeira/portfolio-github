import propTypes from "prop-types"

export function Repository({titulo, descricao, destacar}){
    return(
        <article>
            <h3>{titulo}</h3>
            {destacar?
            <span>projeto em destaque!!</span>:
            <span></span>}
            
            <p>{descricao}</p>
        </article>
    )
}

Repository.propTypes = {
    titulo: propTypes.string.isRequired,
    descricao: propTypes.string,
    destacar: propTypes.bool.isRequired
}