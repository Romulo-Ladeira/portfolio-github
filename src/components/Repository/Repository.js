import propTypes from "prop-types"
import repositoyCss from "./Repository.module.css"
export function Repository({titulo, descricao, destacar,onDestaque}){
    return(
        <article className={destacar?repositoyCss['article--destaque']:repositoyCss['article']} onClick={onDestaque}>
            <div className={repositoyCss['repository']}>
                <h3 className={repositoyCss['repository__title']}>{titulo}</h3>
                {destacar?
                <span>projeto em destaque!!</span>:
                <span></span>}
            </div>
            
            <p className={repositoyCss["reository__discription"]}>{descricao}</p>
        </article>
    )
}

Repository.propTypes = {
    titulo: propTypes.string.isRequired,
    descricao: propTypes.string,
    destacar: propTypes.bool.isRequired
}