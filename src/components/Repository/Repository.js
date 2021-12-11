import propTypes from "prop-types"

export function Repository({titulo, descricao, destacar}){
    return(
        <article>
            <h3>{titulo}</h3>
            <span>projeto em destaque!!</span>
            <p>{descricao}</p>
        </article>
    )
}

Repository.propTypes = {
    titulo: propTypes.string.isRequired,
    descricao: propTypes.string,
    destacar: propTypes.bool.isRequired
}