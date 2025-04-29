import React from "react";
import Footer from '../../componentes/Footer.jsx'
import './Inicio.css'

function Inicio() {
    return(
        <>
        <main>
            <Footer/>
            <div className="resumo">
                <div className="imagem">
                    <img src="/Raul.jpeg" alt="Foto de Raul" />
                </div>
                <div className="texto">
                    <h2>Raul Gardini</h2>
                    <p>Desenvolvedor Full Stack Jr com foco em construção de interfaces modernas, responsivas e integradas com back-end. Tenho experiência em projetos utilizando HTML, CSS, JavaScript, TypeScript, ReactJS e React Native.</p>
                    <p>No back-end, atuo com C# e .NET, criando APIs robustas e seguras. Também domino ferramentas como Git, GitHub e metodologias ágeis, facilitando o trabalho em equipe e a organização dos projetos.</p>
                    <p>Estou em constante aprendizado, buscando sempre novas tecnologias e aprimoramento técnico. Gosto de desafios e de transformar ideias em soluções.</p>
                </div>
            </div>
        </main>
        </>
    )
}

export default Inicio;