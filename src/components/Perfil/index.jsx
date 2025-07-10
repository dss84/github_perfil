import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario, valorBusca, onChangeBusca }) => {
    return (
        <header className={styles.header} >
            <input
                type="text"
                className={styles.inputBusca}
                placeholder="Buscar usuário"
                value={valorBusca}
                onChange={onChangeBusca}
            />
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil