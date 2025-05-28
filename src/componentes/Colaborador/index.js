import { AiFillCloseCircle, AiFillHeart , AiOutlineHeart } from 'react-icons/ai';
import './colaborador.css';

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar() {
        aoFavoritar(colaborador.id);
    }


    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <AiFillCloseCircle 
            size={25} 
            className='deletar'             
            onClick={() => aoDeletar(colaborador.id)}
            /*
            1 - no caso abaixo se eu não deixar como Arrow Function ele executa diretamente
            a funciton na reder do react

                    onClick={aoDeletar(colaborador.id)} 

            2 - tambem poderia criar uma function e chama la no onClick
            function aoDeletarColaborador() {
                aoDeletar(colaborador.id);
            }

            ----> onClick={deletarColaborador}
            */
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                    ? <AiFillHeart {...propsfavorito} color='#ff0000' />
                    : <AiOutlineHeart {...propsfavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador