import { useState, useEffect } from 'react';
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        const buscarRepos = async () => {
            setEstaCarregando(true);
            setErro("");

            try {
                const resposta = await fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
                if (!resposta.ok) {
                    throw new Error(`Erro ao buscar repositórios: Usuário não encontrado`);
                }

                const reposJson = await resposta.json();

                setTimeout(() => {
                    setRepos(reposJson);
                    setEstaCarregando(false);
                }, 3000);
            } catch(e) {
                console.error(e.message);
                setErro(e.message);
                setEstaCarregando(false);
                setRepos([]);
            }
        };

        buscarRepos(); // <-- CHAME A FUNÇÃO AQUI!
    }, [nomeUsuario]);

    return (
        <div className='container'>
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : erro ? (
                <h2 style={{ color: 'red' }}>{erro}</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome: </b>
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target='_blank' href={html_url}>Visitar no Github</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;