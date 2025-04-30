import React from "react";
import Footer from "../../componentes/Footer";
import './Linguagens.css'

function Linguagens() {
    return (
        <>
            <main>
                <Footer />
                <div className="linguagens">
                    <div className="displayflex">
                        <h4>HTML & CSS</h4>
                        <p className="textos">Adquiri conhecimento em HTML e CSS por meio de vídeos do professor Gustavo Guanabara (curso em video) e do curso de Full Stack da Digital College.</p>
                    </div>
                    <div className="displayflex">
                        <h4>JavaScript</h4>
                        <p className="textos">Aprendi JavaScript na Unifor, durante a disciplina de Raciocínio Lógico, e também através do Curso em Vídeo, o que me ajudou a entender a lógica de programação.</p>
                    </div>
                    <div className="displayflex">
                        <h4>TypeScript</h4>
                        <p className="textos">Aprendi TypeScript enquanto estudava React pela plataforma Alura, o que me ajudou a entender melhor a tipagem estática.</p>
                    </div>
                    <div className="displayflex">
                        <h4>C#</h4>
                        <p className="textos">Aprendi C# ao trabalhar no back-end de sistemas reais, como o Delphos, utilizando a linguagem dentro do framework .NET para desenvolver APIs.</p>
                    </div>
                    <div className="displayflex">
                        <h4>ReactJS</h4>
                        <p className="textos">Aprendi ReactJS no curso de Full Stack na Digital College, onde desenvolvi projetos práticos que me permitiram aplicar conceitos como componentes, props, estado e rotas.</p>
                    </div>
                    <div className="displayflex">
                        <h4>React Native</h4>
                        <p className="textos">Estudei React Native na Byju's, onde aprendi a construir aplicações mobile com foco em componentes reutilizáveis e navegação.</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Linguagens;