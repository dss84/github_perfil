import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setmateriaA] = useState(0);
    const [materiaB, setmateriaB] = useState(0);
    const [materiaC, setmateriaC] = useState(0);
    const [nome, setNome] = useState('');

        useEffect(() => {
        console.log('o componente iniciou');
        return () => {
            console.log('o componente finalizou');
        }
    }, []);

    useEffect(() => {
        console.log('o estado mudou');
    }, [nome]);

        useEffect(() => {
        console.log('materia A mudou' + materiaA);
    }, [materiaA]);
    

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }

    const renderizaResultado = () => {
        const soma = Number(materiaA) + Number(materiaB) + Number(materiaC);
        const media = soma / 3;

        if (!nome) return null; // Só mostra resultado se o nome for preenchido

        if (media >= 70) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else if (media < 70 && media >= 50) {
            return (
                <p>Olá {nome}, você está de recuperação</p>
            )
        }
        return (
            <p>Olá {nome}, você foi reprovado</p>
        )
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            
            <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={alteraNome}
            />
            <input
                type="number"
                placeholder="Nota matéria A"
                value={materiaA}
                onChange={evento => setmateriaA(evento.target.value)}
            />
            <input
                type="number"
                placeholder="Nota matéria B"
                value={materiaB}
                onChange={evento => setmateriaB(evento.target.value)}
            />
            <input
                type="number"
                placeholder="Nota matéria C"
                value={materiaC}
                onChange={evento => setmateriaC(evento.target.value)}
            />
            {renderizaResultado()}
        </form>
    );
}

export default Formulario;