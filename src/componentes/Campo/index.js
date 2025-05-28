import './campo.css'

const CampoTexto = ({ type = 'text' , label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (
        //com a div dessa maneira eu identifico o campo do tipo color ou algum outro tipo e consigo definir a classe no scc para ativar as configurações de css 
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
        </div>
    )
}

export default CampoTexto