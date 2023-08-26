import './perfil.css'

//export default () => {
//export default function() {
const Perfil = () => {    
    const usuario = {
        nome: 'Rafael Silverio', 
        avatar: 'https://github.com/rafasilverios.png'
    }
    
    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar} alt="" />
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    )
}

export default Perfil